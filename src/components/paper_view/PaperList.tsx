import EnvConfig from 'src/config/EnvConfig';
import { IMessage, IPaper } from '@src/interfaces/IPaper';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { MessageItem, NoMessageItem } from './MessageItem';

interface IPaperAndMsg {
  paper: IPaper[];
  // message: {
  //   count: number;
  //   paperId: string;
  // }[];
}

const PaperList = ({ userEmail }: { userEmail: string }) => {
  const [paperAndMsgs, setPaperAndMsgs] = useState<IPaper[]>();

  // const papers = await getPaperMsgList(userEmail);
  // const data = await getPaperMsgList('lanto@gmail.com');
  // if (data) setPaperAndMsgs(data);
  useEffect(() => {
    async function fetchAndSetPapers() {
      const allData = await getPaperList(userEmail);

      setPaperAndMsgs(allData);
    }
    fetchAndSetPapers();
    // console.log(paperAndMsgs);
  }, [userEmail]);

  return (
    <StyledPaperList>
      {paperAndMsgs?.map((p: IPaper) => (
        <PaperItem key={p.paperId}>
          <TitleDiv>
            <StyledPaperTitle>{p.paperTitle}</StyledPaperTitle>
            <p>․․․</p>
          </TitleDiv>
          <ul>
            {p.messageCount > 0 ? (
              p.messages.map((msg, idx) => <MessageItem key={idx} {...msg} />)
            ) : (
              <NoMessageItem />
            )}
          </ul>
        </PaperItem>
      ))}
    </StyledPaperList>
  );
};

const TitleDiv = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  p {
    font-weight: bold;
    font-size: 20px;
    padding-right: 2rem;
  }
`;

const StyledPaperList = styled.section`
  margin: 4rem 0 2rem 2rem;
  overflow: scroll;
  max-height: 65vh;
`;

const PaperItem = styled.div`
  margin: 1rem 0 2rem;
  ul {
    display: flex;
    flex-flow: row nowrap;
    overflow-x: scroll;
  }
`;

const StyledPaperTitle = styled.p`
  font-weight: bold;
  font-size: 1.25rem;
  margin-bottom: 1rem;
`;

const getPaperList = async (email: string) => {
  try {
    const response = await axios({
      method: 'get',
      url: `${EnvConfig.LANTO_SERVER}paper`,
      headers: {
        'User-Email': email,
      },
    });
    if (response.status == 200) {
      const paperMsgData: IPaperAndMsg = response.data;
      return paperMsgData.paper;
    }
  } catch (e) {
    console.log(e);
  }
};

export default PaperList;
