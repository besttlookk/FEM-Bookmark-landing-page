export type FeatureType = {
  width: number;
  height: number;
  tabNo: string;
  heading: string;
  content: string;
};

export type CardType = {
  children: React.ReactNode;
  browser: string;
  version: string;
};

export type FAQDataType = {
  question: string;
  answer: string;
  questionId: string;
};

export type FAQPropsType = {
  data: FAQDataType;
  activeQuesArr: string[];
  setActiveQuesArr: React.Dispatch<React.SetStateAction<string[]>>;
};
