import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { MdLightMode } from "react-icons/md";
import { ToastAction, DarkMode, Language } from "../layouts/Header/Header";
import { useTranslation } from "react-i18next";
import FlagIcon from "react-world-flags";
interface ToastProps {
  toastAction?: ToastAction;
  setIsAnimating: (isAnimating: boolean) => void;
}

const Toast = ({ toastAction: toastAction, setIsAnimating }: ToastProps) => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
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
    <div
      className={`${
        isVisible ? `-translate-y-5 opacity-100` : `translate-y-16 opacity-0`
      }  fixed bottom-0 left-1/2 z-9999 flex -translate-x-1/2 transform items-center rounded-2xl dark:bg-main-dark px-5 py-3 text-sm font-medium dark:text-text-dark-mode shadow-2xl transition-all bg-light-mode-items text-text-light-mode`}
    >
      {toastContent()}
    </div>
  );
};

export default Toast;
