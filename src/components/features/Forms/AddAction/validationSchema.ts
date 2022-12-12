import * as yup from "yup";

export const validationSchema = yup.object({
  name: yup.string().min(2).required(),
  description: yup.string().min(2).required(),
  complete_by: yup.string().required(),
  jobid: yup.number().required(),
});
