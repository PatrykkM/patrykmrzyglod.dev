import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { MdLightMode } from "react-icons/md";
import { ToastAction, DarkMode, Language } from "../layouts/Header/Header";
import { useTranslation } from "react-i18next";
import FlagIcon from "react-world-flags";
import { motion } from "framer-motion";

interface ToastProps {
  toastAction?: ToastAction;
  setIsAnimating: (isAnimating: boolean) => void;
}

const Toast = ({ toastAction: toastAction, setIsAnimating }: ToastProps) => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!toastAction) return;
    const showAlert = () => {
      setIsAnimating(true);
      setIsVisible(true);
      const timer = setTimeout(() => {
        setIsAnimating(false);
        setIsVisible(false);
      }, 1000);
      return () => clearTimeout(timer);
    };

    const initialTimer = setTimeout(() => {
      showAlert();
    }, 1000);

    return () => clearTimeout(initialTimer);
  }, [setIsAnimating]);

  useEffect(() => {
    if (!toastAction) return;
    const timer = setTimeout(() => {
      setIsAnimating(true);
      setIsVisible(true);
      setTimeout(() => {
        setIsAnimating(false);
        setIsVisible(false);
      }, 1000);
    }, 0);

    return () => clearTimeout(timer);
  }, [toastAction, setIsAnimating]);

  const toastContent = () => {
    switch (toastAction) {
      case DarkMode.DARK:
        return (
          <>
            <p className="select-none">{t("alert.helloDarkness")}</p>
            <div className="ml-2 text-lg text-yellow-300">
              <FaMoon />
            </div>
          </>
        );
      case DarkMode.LIGHT:
        return (
          <>
            <p className="select-none">{t("alert.helloSunshine")}</p>
            <div className="ml-2 text-xl text-yellow-500">
              <MdLightMode />
            </div>
          </>
        );
      case Language.DE:
        return (
          <div className="flex items-center gap-2">
            <p className="select-none">{t("alert.hello")}!</p>
            <FlagIcon code="de" width={20} height={20} />
          </div>
        );
      case Language.EN:
        return (
          <div className="flex items-center gap-2">
            <p className="select-none">{t("alert.hello")}!</p>
            <FlagIcon code="us" width={20} height={20} />
          </div>
        );
      default:
        return "";
    }
  };

  return (
    <motion.div
      initial={{ y: 64, opacity: 0 }}
      animate={{ y: isVisible ? -20 : 64, opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
      className="fixed bottom-0 z-9999 flex transform items-center rounded-2xl bg-primary-300 px-5 py-3 text-sm font-medium text-primary-900 shadow-2xl dark:bg-primary-500 dark:text-primary-100"
    >
      {toastContent()}
    </motion.div>
  );
};

export default Toast;
