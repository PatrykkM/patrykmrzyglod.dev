import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { MdLightMode } from "react-icons/md";

interface AlertProps {
  darkMode: boolean;
  setIsAnimating: (isAnimating: boolean) => void;
}

const Alert = ({ darkMode, setIsAnimating }: AlertProps) => {
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
  }, [darkMode, setIsAnimating]);

  const alertContent = darkMode ? (
    <>
      <p className="select-none">Hello Darkness</p>
      <div className="ml-2 text-lg text-yellow-300">
        <FaMoon />
      </div>
    </>
  ) : (
    <>
      <p className="select-none">Hello Sunshine</p>
      <div className="ml-2 text-xl text-yellow-500">
        <MdLightMode />
      </div>
    </>
  );

  return (
    <div
      className={`${
        isVisible ? `-translate-y-5 opacity-100` : `translate-y-16 opacity-0`
      }  fixed bottom-0 left-1/2 z-9999 flex -translate-x-1/2 transform items-center rounded-2xl dark:bg-main-dark px-5 py-3 text-sm font-medium dark:text-text-dark-mode shadow-2xl transition-all bg-light-mode-items text-text-light-mode`}
    >
      {alertContent}
    </div>
  );
};

export default Alert;
