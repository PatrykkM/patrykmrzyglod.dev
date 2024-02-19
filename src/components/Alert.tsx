import { MdLightMode } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import { useEffect, useState } from "react";

interface AlertProps {
  darkMode: boolean;
}

const Alert: React.FC<AlertProps> = ({ darkMode }) => {
  const [showPopUp, setShowPopUp] = useState(false);
  const [siteLoaded, setSiteLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setSiteLoaded(true);
    }, 1000);
  }, []);

  useEffect(() => {
    if (siteLoaded) {
      setShowPopUp((prev) => !prev);

      const timer = setTimeout(() => {
        setShowPopUp((prev) => !prev);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [darkMode]);
  return (
    <div
      className={`${
        showPopUp ? `-translate-y-5 opacity-100` : `translate-y-16 opacity-0`
      }  bg-main-dark fixed left-1/2 bottom-0 transform -translate-x-1/2 px-5 py-3 text-sm text-white rounded-2xl flex shadow-2xl items-center dark:text-black  font-medium z-9999 transition-all dark:bg-light-mode-items`}
    >
      {darkMode ? (
        <>
          <div>Hello Sunshine</div>
          <div className="text-yellow-500 text-xl ml-2">
            <MdLightMode />
          </div>
        </>
      ) : (
        <>
          <div>Hello Darkness</div>
          <div className="text-yellow-300 text-lg ml-2">
            <FaMoon />
          </div>
        </>
      )}
    </div>
  );
};

export default Alert;
