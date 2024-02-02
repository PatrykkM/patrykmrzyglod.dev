import { MdOutlineWebAsset } from "react-icons/md";
import { FaReact } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";

const Introduction = () => {
  const KnowlageItems = [
    {
      name: "React Developer",
      src: <FaReact />,
    },
    {
      name: "Web Developer",
      src: <MdOutlineWebAsset />,
    },
    {
      name: "Responsive Web Designer",
      src: <MdPhoneIphone />,
    },
  ];
  return (
    <div className="flex flex-col text-white">
      <div className="text-gray-500">Introduction</div>
      <div className="font-bold text-3xl my-2">Overview</div>
      <div className="text-gray-500 leading-7">
        I am an experienced software engineer with strong skills in JavaScript
        and TypeScript, focusing on front-end development using frameworks like
        React. My expertise includes creating efficient, scalable, and
        user-friendly solutions that address real-world problems. I am known for
        my quick learning abilities and my commitment to closely collaborating
        with clients to deliver impactful applications.
      </div>
      <div className="z-10">
        {KnowlageItems.map((item) => (
          <div
            className="flex flex-col  w-full bg-dynamic-menu rounded-xl justify-center items-center h-40 text-xl mt-10 "
            key={item.name}
          >
            <div className="text-4xl text-blue-300 pb-1">{item.src}</div>
            <div className="text-blue-600 font-semibold pt-1">{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Introduction;
