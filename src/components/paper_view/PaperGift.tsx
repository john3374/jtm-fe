import React, { useEffect, useState } from 'react';
import Header from '../layout/Header';
import { TextInput } from '../common/TextInput';
import styled from 'styled-components';
import BottomBtn from '../common/BottomBtn';
import axios from 'axios';
import EnvConfig from '../../config/EnvConfig';
import { useAuthState } from '../../../src/context';

function PaperGift() {
  const { user, token } = useAuthState();
  const userEmail = user?.email;

  const [selectPaperId, setSelectPaperId] = useState<number>(0);
  const [paperList, setPaperList] = useState<any>([]);

  const loadPaperList = async () => {
    try {
      const response = await axios({
        method: 'get',
        headers: {
          'User-Email': `${userEmail}`,
        },
        url: `${EnvConfig.CREATE_PAPER}`,
      });
      setPaperList(response.data.paper);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    loadPaperList();
  }, []);

  const handleDropBox = (e: any) => {
    const { value } = e.target;
    setSelectPaperId(value);
    console.log(selectPaperId);
  };

  return (
    <>
      <Header pageNm="롤링페이퍼 만들기" to="/createPaper" />
      <main>
        <Wrapper>
          <StyledLabel> 롤링 페이퍼를 선택해주세요.</StyledLabel>
          <DropDown onChange={handleDropBox}>
            <option key="0" value={0}>
              선택해주세요
            </option>
            {paperList.map((el: any) => {
              return (
                <option key={el.paperId} value={el.paperId}>
                  {el.paperTitle}
                </option>
              );
            })}
          </DropDown>
        </Wrapper>
        <TextInput
          title="페이퍼를 보낼 이메일 주소를 입력해주세요."
          htmlFor="giftEmail"
          background="white"
          border="1px solid black"
        />
        <TextInput
          title="이메일을 한 번 더 입력해주세요."
          htmlFor="giftEmail"
          background="white"
          border="1px solid black"
        />
      </main>
      <BottomBtn text="다음" />
    </>
  );
}

const Wrapper = styled.div`
  margin-bottom: 1rem;
  display: flex;
  flex-flow: column nowrap;
  padding: 0 5%;
`;

const StyledLabel = styled.label`
  font-size: 1rem;
  font-weight: bold;
  display: inline-block;
  margin: 15px 0;
`;

const DropDown = styled.select`
  padding: 0.8rem;
  font-size: 1rem;
  background-color: white;
  border: 1px solid black;
  border-radius: 12px;

  &:focus {
    border: 2px solid rgba(0, 0, 0, 0.6);
  }

  &::placeholder {
    color: #b2b8bf;
    line-height: inherit !important;
  }
`;

export default PaperGift;
