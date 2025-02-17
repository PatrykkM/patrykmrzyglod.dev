import emailjs from "emailjs-com";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";

import {
  UserSentFormCorrectly,
  UserSentFormError,
} from "../../../redux/slices/userSentForm";
import { RootState } from "../../../redux/store";

type FormValues = {
  from_name: string;
  from_email: string;
  message: string;
};

type FormField = {
  name: keyof FormValues;
  label: string;
  type: string;
  placeholder: string;
  rows?: number;
};

const formFields: FormField[] = [
  {
    name: "from_name",
    label: "Your Name",
    type: "text",
    placeholder: "What's your name",
  },
  {
    name: "from_email",
    label: "Your Email",
    type: "email",
    placeholder: "What's your email",
  },
  {
    name: "message",
    label: "Your Message",
    type: "textarea",
    placeholder: "What's your message",
    rows: 10,
  },
];

const FormContact = () => {
  const dispatch = useDispatch();
  const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID;
  const USER_ID = process.env.NEXT_PUBLIC_USER_ID;
  const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
  const isUserSendFormCorrectly = useSelector(
    (state: RootState) => state.userSentFrom.correct
  );
  const isUserSendFormError = useSelector(
    (state: RootState) => state.userSentFrom.error
  );

  const initialValues: FormValues = {
    from_name: "",
    from_email: "",
    message: "",
  };

  const handleSubmit = async (
    values: FormValues,
    {
      resetForm,
      setSubmitting,
    }: { resetForm: () => void; setSubmitting: (value: boolean) => void }
  ) => {
    if (!isUserSendFormCorrectly && !isUserSendFormError) {
      try {
        await emailjs.send(
          SERVICE_ID ?? "",
          TEMPLATE_ID ?? "",
          values,
          USER_ID
        );
        resetForm();
        dispatch(UserSentFormCorrectly());
      } catch {
        dispatch(UserSentFormError(true));
      } finally {
        setSubmitting(false);
        setTimeout(() => {
          dispatch(UserSentFormError(false));
        }, 3000);
      }
    } else {
      resetForm();
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={Yup.object({
        from_name: Yup.string().required("Name is required"),
        from_email: Yup.string()
          .email("Invalid email")
          .required("Email is required"),
        message: Yup.string().required("Message is required"),
      })}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, errors, touched }) => (
        <Form className="font-me mt-5 dark:text-gray-800">
          {formFields.map((field) => (
            <div key={field.name} className="mt-8">
              <label
                htmlFor={field.name}
                className="dark:text-text-dark-mode text-text-light-mode"
              >
                {field.label}
              </label>
              <Field
                type={field.type}
                as={field.type === "textarea" ? "textarea" : undefined}
                className={`mt-3 w-full rounded-lg dark:bg-dynamic-menu px-3 py-4 bg-light-mode-items text-text-light-mode dark:text-text-dark-mode`}
                placeholder={field.placeholder}
                rows={field.rows}
                id={field.name}
                name={field.name}
              />
              {errors[field.name] && touched[field.name] && (
                <div className="text-red-500 text-xs mt-1 font-semibold">
                  {errors[field.name]}
                </div>
              )}
            </div>
          ))}

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-22 mt-7 flex h-12 w-24 items-center justify-center rounded-2xl font-medium dark:text-white ${
              isUserSendFormError && !isSubmitting ? `bg-red-500` : ``
            } ${
              isUserSendFormCorrectly && !isSubmitting
                ? `bg-green-500`
                : `bg-light-blue`
            }`}
          >
            {isSubmitting ? (
              <div className="border-Light-Green ml-2 h-4 w-4 animate-spin rounded-full border-2 border-t-2 border-t-transparent"></div>
            ) : isUserSendFormCorrectly ? (
              <p>Sent!</p>
            ) : isUserSendFormError ? (
              <p>Error</p>
            ) : (
              <p>Send</p>
            )}
          </button>

          {isUserSendFormCorrectly && !isSubmitting && (
            <div className="mt-6 text-xs text-green-500 font-semibold">
              <p>* Thank you, your email has been sent.</p>
            </div>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default FormContact;
