import emailjs from "emailjs-com";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import {
  UserSentFormCorrectly,
  UserSentFormError,
} from "../../../redux/slices/userSentForm";
import { RootState } from "../../../redux/store";

type FormValues = { from_name: string; from_email: string; message: string };

type FormField = {
  name: keyof FormValues;
  label: string;
  type: string;
  placeholder: string;
  rows?: number;
};

const FormContact = () => {
  const { t } = useTranslation();
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

  const formFields: FormField[] = [
    {
      name: "from_name",
      label: t("contact.form.nameLabel"),
      type: "text",
      placeholder: t("contact.form.namePlaceholder"),
    },
    {
      name: "from_email",
      label: t("contact.form.emailLabel"),
      type: "email",
      placeholder: t("contact.form.emailPlaceholder"),
    },
    {
      name: "message",
      label: t("contact.form.messageLabel"),
      type: "textarea",
      placeholder: t("contact.form.messagePlaceholder"),
      rows: 10,
    },
  ];

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
        from_name: Yup.string().required(t("contact.form.nameRequired")),
        from_email: Yup.string()
          .email(t("contact.form.invalidEmail"))
          .required(t("contact.form.emailRequired")),
        message: Yup.string().required(t("contact.form.messageRequired")),
      })}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, errors, touched }) => (
        <Form className="font-me mt-5 dark:text-gray-800">
          {formFields.map((field) => (
            <div key={field.name} className="mt-8">
              <label
                htmlFor={field.name}
                className="text-primary-900 dark:text-primary-100"
              >
                {field.label}
              </label>
              <Field
                type={field.type}
                as={field.type === "textarea" ? "textarea" : undefined}
                className={`dark:bg-primary-500 text-primary-900 dark:text-primary-100 bg-primary-300 mt-3 w-full rounded-lg px-3 py-4 transition-colors duration-300`}
                placeholder={field.placeholder}
                rows={field.rows}
                id={field.name}
                name={field.name}
              />
              {errors[field.name] && touched[field.name] && (
                <div className="mt-1 text-xs font-semibold text-red-500">
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
                : `bg-neutral-100`
            }`}
          >
            {isSubmitting ? (
              <div className="border-Light-Green ml-2 h-4 w-4 animate-spin rounded-full border-2 border-t-2 border-t-transparent"></div>
            ) : isUserSendFormCorrectly ? (
              <p>{t("contact.form.sent")}</p>
            ) : isUserSendFormError ? (
              <p>{t("contact.form.error")}</p>
            ) : (
              <p>{t("contact.form.send")}</p>
            )}
          </button>

          {isUserSendFormCorrectly && !isSubmitting && (
            <div className="mt-6 text-xs font-semibold text-green-500">
              <p>{t("contact.form.thankYou")}</p>
            </div>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default FormContact;
