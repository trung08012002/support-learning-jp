import { AxiosError, HttpStatusCode } from "axios";
import { isAxiosError, isAxiosUnprocessableEntityError } from "../utils/utils";

describe("isAxiosError", () => {
  it("isAxiosError trả về boolean", () => {
    expect(isAxiosError(new Error())).toBe(false);
    expect(isAxiosError(new AxiosError())).toBe(true);
  });
});

describe("isAxiosUnProcessableEntityError", () => {
  it("isAxiosUnProcessableEntityError trả về boolean", () => {
    expect(isAxiosError(new Error())).toBe(false);
    expect(
      isAxiosUnprocessableEntityError(
        new AxiosError("", undefined, undefined, undefined, {
          status: HttpStatusCode.InternalServerError,
          data: null,
        } as any)
      )
    ).toBe(false);
    expect(
      isAxiosUnprocessableEntityError(
        new AxiosError("", undefined, undefined, undefined, {
          status: HttpStatusCode.UnprocessableEntity,
          data: null,
        } as any)
      )
    ).toBe(true);
  });
});
