import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { contactformVariants } from "../../../utils/motion";
import FormContact from "./FormContact";

const ContactMeSection = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full text-white lg:w-128" id="Contact">
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
        variants={contactformVariants}
        className="flex flex-col gap-2 rounded-xl bg-primary-200 p-7 shadow-sm transition-colors duration-300 dark:bg-primary-600"
      >
        <p className="text-sm uppercase text-gray-500 dark:text-gray-400">
          {t("contact.title")}
        </p>
        <h3 className="text-3xl font-bold text-primary-900 dark:text-primary-100 sm:text-5xl">
          {t("nav.Contact")}
        </h3>
        <p className="text-gray-500 dark:text-gray-400">
          {t("contact.description")}
          <Link
            href="mailto:patrykmrzyglod3@gmail.com"
            className="gradient-text ml-1 font-bold"
          >
            {t("contact.email")}
          </Link>
          ,
          <Link
            href="https://www.linkedin.com/in/patrykmrzyg%C5%82%C3%B3d/"
            className="gradient-text ml-px mr-1 font-bold"
          >
            LinkedIn
          </Link>
          {t("contact.formBelow")}
        </p>
        <FormContact />
      </motion.div>
    </section>
  );
};

export default ContactMeSection;
