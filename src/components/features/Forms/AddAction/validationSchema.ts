import * as yup from "yup";

export const validationSchema = yup.object({
  name: yup.string().min(2).required().label("Name"),
  description: yup.string().min(2).required().label("Description"),
  complete_by: yup.string().required().label("Completed By"),
  jobid: yup.number().required().label("Job"),
});
