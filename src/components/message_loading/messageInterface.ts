export interface Loading {
  backColor: string;
  font: string;
}

export interface Message {
  color: string;
  content: string;
  createDate: string;
  font: string;
  messageId: number;
  paperId: number;
  paperTitle: string;
  readny: string;
  userName: string;
}

export interface More {
  setMore: React.Dispatch<React.SetStateAction<boolean>>;
  text: string[];
}
