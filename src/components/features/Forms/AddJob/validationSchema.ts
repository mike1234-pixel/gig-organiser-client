import * as yup from "yup";

export const validationSchema = yup.object({
  description: yup.string().min(2).required().label("Description"),
  organisation: yup.string().min(2).required().label("Organisation"),
  priority: yup.number().required().label("Priority"),
  status: yup.string().min(2).required().label("Status"),
  title: yup.string().min(2).required().label("Title"),
});
