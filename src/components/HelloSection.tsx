import { LuMouse } from "react-icons/lu";

const HelloSection = () => {
  return (
    <>
      <section className="flex flex-col text-white mt-5">
        <h1 className="text-5xl font-bold flex items-center">
          <div>Hello</div>
          <div className="ml-1 mb-1 "> 👋</div>
        </h1>
        <h2 className="text-4xl font-bold mt-2 gradient-text">I'm Patryk</h2>
        <div className="text-4xl font-bold my-2 outline-text italic">
          <div>Frontend</div>
          <div className="mt-2">Developer</div>
        </div>
      </section>
      <section className="text-white mt-10  font-medium">
        <div className="leading-8 ">
          I create user interfaces, develop web applications,
          <span className="gradient-text"> and much more!</span> As a college
          freshman, I have already accumulated almost half year year of
          professional experience in the field and possess a strong passion for
          continuous development and growth. 📈
        </div>
        <div className="flex items-center mt-10">
          <div className="text-2xl font-extrabold">
            <LuMouse />
          </div>
          <div className="ml-2 ">scroll down to know me better</div>
        </div>
      </section>
    </>
  );
};

export default HelloSection;
