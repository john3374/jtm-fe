import { IMessage, IPaper } from '@src/interfaces/IPaper';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

interface IPaperAndMsg {
  paper: IPaper[];
  message: {
    count: number;
    paperId: string;
  }[];
}

const PaperList = ({ userEmail }: { userEmail: string }) => {
  const [paperAndMsgs, setPaperAndMsgs] = useState<IPaperAndMsg>();

  // const papers = await getPaperMsgList(userEmail);
  // const data = await getPaperMsgList('lanto@gmail.com');
  // if (data) setPaperAndMsgs(data);
  useEffect(() => {
    async function fetchAndSetPapers() {
      const allData = await getPaperList('lanto@gmail.com');
      setPaperAndMsgs(allData);
      console.dir(allData);
    }
    fetchAndSetPapers();
  }, [userEmail]);

  return (
    <StyledPaperList>
      {paperAndMsgs?.paper.map((p: IPaper) => (
        <PaperItem key={p.paperId}>
          <h2>{p.paperTitle}</h2>
          <ul>
            <li></li>
          </ul>
        </PaperItem>
      ))}
    </StyledPaperList>
  );
};

const StyledPaperList = styled.section`
  margin: 1rem 0;
`;

const PaperItem = styled.div`
  font-weight: bold;
`;

const getPaperList = async (email: string) => {
  // console.log(email);
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
      const paperDetailList: any[] = [];
      for (const p of paperMsgData.paper) {
        // paperMsgData.paper.forEach((val, idx) => {
        const temp = await getMsgList(p.paperId, email);
        console.log(temp);
        paperDetailList.push(temp);
      }
      // console.log(paperDetailList);
      return { ...paperMsgData, paperDetailList };
    }
  } catch (e) {
    console.log(e);
  }
};

const getMsgList = async (pId: string, email: string) => {
  try {
    const response = await axios({
      method: 'post',
      url: `http://3.39.162.248:80/paper/${pId}`,
      data: {
        user: email,
      },
    });
    if (response.status == 200) {
      const msgData = response.data;
      console.log(msgData);
      return msgData;
    }
  } catch (e) {
    console.log(e);
  }
};

export default PaperList;
