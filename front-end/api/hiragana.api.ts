import { ChuCai } from "types/chu_cai";
import http from "utils/http";
import useEffect from 'react';

export const getHiragana = () => {

  return http.get<ChuCai[]>("/bangchucai/hiragana");
};
