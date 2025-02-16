import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { MdLightMode } from "react-icons/md";

interface AlertProps {
  darkMode: boolean;
}

const Alert = ({ darkMode }: AlertProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const showAlert = () => {
      setIsVisible(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 1000);
      return () => clearTimeout(timer);
    };

    const initialTimer = setTimeout(() => {
      showAlert();
    }, 1000);

    return () => clearTimeout(initialTimer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      setTimeout(() => {
        setIsVisible(false);
      }, 1000);
    }, 0);

    return () => clearTimeout(timer);
  }, [darkMode]);

  const alertContent = darkMode ? (
    <>
      <p>Hello Sunshine</p>
      <div className="ml-2 text-xl text-yellow-500">
        <MdLightMode />
      </div>
    </>
  ) : (
    <>
      <p>Hello Darkness</p>
      <div className="ml-2 text-lg text-yellow-300">
        <FaMoon />
      </div>
    </>
  );

  return (
    <div
      className={`${
        isVisible ? `-translate-y-5 opacity-100` : `translate-y-16 opacity-0`
      }  fixed bottom-0 left-1/2 z-9999 flex -translate-x-1/2 transform items-center rounded-2xl bg-main-dark px-5 py-3 text-sm font-medium text-white shadow-2xl transition-all dark:bg-light-mode-items dark:text-black`}
    >
      {alertContent}
    </div>
  );
};

export default Alert;
