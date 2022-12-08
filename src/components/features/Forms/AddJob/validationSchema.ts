import * as yup from "yup";

export const validationSchema = yup.object({
  description: yup.string().min(2).required(),
  organisation: yup.string().min(2).required(),
  priority: yup.number().required(),
  status: yup.string().min(2).required(),
  title: yup.string().min(2).required(),
});
