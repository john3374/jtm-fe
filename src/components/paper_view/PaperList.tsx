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
      const allData = await getPaperList('lanto@gmail.com');
      setPaperAndMsgs(allData);
    }
    fetchAndSetPapers();
    console.log(paperAndMsgs);
  }, [userEmail]);

  return (
    <StyledPaperList>
      {paperAndMsgs?.map((p: IPaper) => (
        <PaperItem key={p.paperId}>
          <StyledPaperTitle>{p.paperTitle}</StyledPaperTitle>
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

const StyledPaperList = styled.section`
  margin: 4rem 0 2rem 0;
`;

const PaperItem = styled.div`
  margin: 1rem 0 2rem;
  ul {
    display: flex;
    flex-flow: row nowrap;
    overflow-x: scroll;
    gap: 0.5rem;
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
      url: 'http://3.39.162.248:80/paper',
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
