export interface Member {
  id: string;
  name: string;
  age: number;
  comment: string;
  favorite: string[];
  dislike: string[];
}

export interface MemberInput {
  name: string;
  age: number;
  comment: string;
  favorite1: string;
  favorite2: string;
  favorite3: string;
  dislike1: string;
  dislike2: string;
  dislike3: string;
}
