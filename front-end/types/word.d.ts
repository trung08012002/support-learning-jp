export type Example = {
  idDetail: number;
  sentence: string;
  meanOfExample: string;
};
export type MeaningDetail = {
  meaningDetail: string;
};
export type NoteDetail = {
  noteDetail: string;
};
export type TypeWord = {
  id: number;
  type: string;
};
export type DetailWord = {
  id: number;
  typeWords: TypeWord[];
  meaningDetails: MeaningDetail[];
  note: NoteDetail[];
  exampleDetails: Example[];
};
export type HanViet = {
  id: number;
  tu: string;
};
export type Vocabulary = {
  id: number;
  tu: string;
  hiragana: string;
  romanji?: string;
  pronounce: string;
  detailWords: DetailWord[];
  hanViets: HanViet[];
};

export type WordMeaning = {
  id: number;
  tu: string;
  hiragana: string;
  meaningDetails: string[];
};

export type GoogleWord = {
  data: {
    translations: [
      {
        translatedText: string;
      }
    ];
  };
};
