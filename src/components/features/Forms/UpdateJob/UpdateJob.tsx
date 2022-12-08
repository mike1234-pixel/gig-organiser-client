// import { Formik } from "formik";
// import { useTogglePanel } from "../../../../context/EditPanel";
// import { useLoginState } from "../../../../context/LoginStateProvider";
// import { useUpdateJob } from "../../../../hooks/useUpdateJob";
// import { JobNewI } from "../../../../types/Job_New_Object";
// import { UpdateJobForm } from "./UpdateJobForm";
// import { validationSchema } from "./validationSchema";

// export const UpdateJob = () => {
//   const { user } = useLoginState();

//   const { mutate } = useUpdateJob();

//   const { togglePanel, setTogglePanel } = useTogglePanel();

//   const handleSubmit = (
//     values: JobNewI,
//     { resetForm }: { resetForm: () => void }
//   ) => {
//     mutate(values);
//     resetForm();
//     setTimeout(() => {
//       setTogglePanel(!togglePanel);
//     }, 200);
//   };

//   const initialValues: JobNewI = {
//     userid: user!.id,
//     description: "",
//     organisation: "",
//     priority: 0,
//     status: "",
//     title: "",
//   };

//   return (
//     <Formik
//       initialValues={initialValues}
//       validationSchema={validationSchema}
//       onSubmit={handleSubmit}
//     >
//       <UpdateJobForm />
//     </Formik>
//   );
// };

export const UpdateJob = () => {
  return <>update job placeholder</>;
};
