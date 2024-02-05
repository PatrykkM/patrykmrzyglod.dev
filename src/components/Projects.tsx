import Collective from "../assets/img/Collective.jpg";
import Finance from "../assets/img/Finance.jpg";

const Projects = () => {
  const MyProjects = [
    {
      name: "Finance",
      img: Finance,
      desc: `FinanceApp is a finance application that allows users to simulate the buying and selling
        of stocks from top global companies. It aims to provide a brokerage-like experience, enabling
        users to monitor markets and invest in stocks virtually`,
      techs: "#React #Redux #Tailiwindcss",
    },
    {
      name: "Collective",
      img: Collective,
      desc: `Collective is, an innovative e-commerce platform that redefines online shopping with its groundbreaking design and exceptional user experience. At Collective, the focus is on an intuitive, user-friendly interface, ensuring easy navigation and a 
      pleasant shopping experience for everyone. What sets this platform apart is its unique approach to presenting clothing; 
      all items are displayed on models, offering a realistic and engaging view`,
      techs: "#React #Tailiwindcss",
    },
  ];
  return (
    <section className="mt-18 px-5 flex flex-col text-white font-medium">
      <p className="uppercase text-sm text-gray-500">My work</p>
      <div className="text-3xl font-extrabold mt-2">Projects</div>
      <p className="mt-4 text-gray-500">
        The purpose of the projects presented here was to demonstrate my
        abilities and background while seeking my initial employment. Every
        project is succinctly summarized, including links to their respective
        code repositories. These works were developed earlier, and I am
        currently working on more sophisticated and polished projects. Keep an
        eye out for updates!
      </p>
      {MyProjects.map((project) => (
        <div className="bg-dynamic-menu mt-18 rounded-lg p-5 font-normal">
          <div className="">
            <img
              src={project.img}
              alt="Photo of my project named Collective"
              className="rounded-lg   w-full  object-cover max-h-56"
            />
          </div>
          <div className="mt-3">
            <span className="text-2xl font-bold ">{project.name}</span>
            <p className="text-sm mt-3 text-gray-400">{project.desc}</p>
            <div className="mt-3 text-sm text-orange-400">{project.techs}</div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;