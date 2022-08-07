import React, { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface PropsType {
  info: string;
  confirm: boolean;
  onModal: boolean;
  setOnModal: Dispatch<SetStateAction<boolean>>;
  href?: string;
}

function Modal(props: PropsType) {
  const closeModal = () => {
    if (props.onModal) {
      return props.setOnModal(false);
    }
  };
  const content: string = props.info;

  return (
    <Container>
      <ModalBody>
        <Text>
          {content.split('\\n').map(text => (
            <>
              {text}
              <br />
            </>
          ))}
        </Text>
        <Btn>
          {props.confirm ? (
            <BtnsItem>
              <Link to={props.href!}>
                <Button>확인</Button>
              </Link>
              <Button onClick={closeModal}>취소</Button>
            </BtnsItem>
          ) : (
            <BtnItem>
              <Button onClick={closeModal}>취소</Button>
            </BtnItem>
          )}
        </Btn>
      </ModalBody>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  width: 250px;
  min-height: 70px;
  height: auto;
  white-space: pre-wrap;
  z-index: 3;
`;

const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
`;

const Text = styled.div`
  text-align: center;
  color: white;
  white-space: pre-line;
  margin: 0.5rem 0.5rem 0 0.5rem;
  padding: 0.3rem;
`;

const Btn = styled.div`
  margin: 0.3rem;
`;

const BtnsItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const BtnItem = styled.div`
  text-align: center;
`;

const Button = styled.button`
  width: 50px;
  height: 30px;
  padding: 0.2rem;
  margin: 0.2rem;
`;

export default Modal;

// Manual
// https://www.notion.so/FE-23bc149ca8ee45028e9925eab3c4ed96#8539f99207ea429fb28498c4e1b83d4d
