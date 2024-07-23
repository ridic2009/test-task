export interface IBlock {
  id: string;
  bgColor: string;
  countdown: number;
}

export interface ISort {
  type: string;
  text: string;
  color: string;
}

export interface IAppContext {
  items: IBlock[];
  value: string;
  sort: ISort;

  setItems: React.Dispatch<React.SetStateAction<IBlock[]>>;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  setSort: React.Dispatch<React.SetStateAction<ISort>>;
  
  changeSort: () => void;
  addBlock: () => void;
}