export type ReqDTO = {
  word?: string;
};

export type ResDTO = {
  data: Words[];
};

type Words = {
  korName: string;
  engName: string;
};
