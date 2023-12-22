import { ChuCai } from "types/chu_cai";
import http from "utils/http";

export default function getKatakana() {
  return http.get<ChuCai[]>("/bangchucai/katakana");
}
