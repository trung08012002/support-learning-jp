import * as yup from "yup";

function handleConfirmPasswordYup(refString: string) {
  return yup
    .string()
    .required("Confirm Password là bắt buộc")
    .min(5, "Độ dài từ 5-160 ký tự")
    .max(160, "Độ dài từ 5-160 ký tự")
    .oneOf([yup.ref(refString)], "Nhập lại Password không khớp");
}

export const schema = yup.object({
  email: yup
    .string()
    .email("Email không đúng định dạng")
    .min(5, "Độ dài từ 5-160 ký tự")
    .max(160, "Độ dài từ 5-160 ký tự"),
  password: yup
    .string()
    .required("Password là bắt buộc")
    .min(5, "Độ dài từ 5-160 ký tự")
    .max(160, "Độ dài từ 5-160 ký tự"),
  confirm_password: handleConfirmPasswordYup("password"),
});
export type Schema = yup.InferType<typeof schema>;
