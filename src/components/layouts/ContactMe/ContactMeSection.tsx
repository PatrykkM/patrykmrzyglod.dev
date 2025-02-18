import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { contactformVariants } from "../../../utils/motion";
import FormContact from "./FormContact";

const ContactMeSection = () => {
  const { t } = useTranslation();

  return (
    <section className="text-white lg:w-128" id="Contact">
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
        variants={contactformVariants}
        className="rounded-xl dark:bg-main-dark p-7 bg-main-light shadow-sm"
      >
        <p className="mt-2 text-sm uppercase dark:text-gray-400 text-gray-500">
          {t("contact.title")}
        </p>
        <h3 className="my-2 text-3xl font-bold text-text-light-mode dark:text-text-dark-mode sm:text-5xl">
          {t("nav.Contact")}
        </h3>
        <p className="mt-4 dark:text-gray-400 text-gray-500">
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
