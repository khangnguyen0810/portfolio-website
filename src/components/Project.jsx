import React from "react";

const Project = () => {
  let projects = [
    {
      name: "Machine Learning Project",
      framework: "Tensorflow, Keras, Scikit-learn",
      description:
        "Implemented regression models from scratch on Iris and MNIST.",
      link: "https://github.com/khangnguyen0810/Machine-Leaning-Self-Study'",
      color: "bg-gray-800",
    },
    {
      name: "Retrieve Student Scores",
      framework: "Selenium, bs4, webdriver_manager",
      description:
        "This project uses python code can retrieve students' score on Ministry of Education's website in 2022.",
      link: "https://github.com/khangnguyen0810/Retrieve-Student-Score",
      color: "bg-gray-800",
    },
    {
      name: "Reinforcement Learning Project",
      framework: "Gym, Numpy",
      description:
        "Train an agent to reach the flag using reinforcement learning in the game MountainCar-v0 (Open Gym).",
      link: "Train an agent to reach the flag using reinforcement learning in the game MountainCar-v0 (Open Gym)",
      color: "bg-gray-800",
    },
    {
      name: "Database designer",
      framework: "Supabase, DrawSQL",
      description:
        "Draw class diagram with DrawSQL to design database schema for web application for finding foods with the proposed ingredients.",
      color: "bg-gray-800",
    },
    {
      name: "Portfolio Website",
      framework: "React.js, Tailwind.css, React-Router",
      description:
        "A porfolio website that display descriptions about the website owner.",
      link: "https://github.com/khangnguyen0810/portfolio-reactjs",
      color: "bg-gray-800",
    },
  ];

  return (
    <div className="mt-20 min-h-screen">
      {/* Changed grid to flex flex-wrap and justify-center */}
      <div className="flex flex-wrap justify-center gap-20 gap-x-30 px-10 md:px-20">
        {projects.map((proj, index) => {
          return (
            <div
              key={index}
              className="w-full max-w-[500px] rounded-xl bg-gradient-to-br from-purple-700 via-purple-500 to-purple-950 p-[2px] shadow-lg transition-transform hover:scale-[1.02] md:w-[calc(50%-80px)]"
            >
              <div
                className={`${proj.color} h-full w-full rounded-xl p-6 text-white`}
              >
                {/* Visual placeholder */}
                <div className="m-2 mb-5 min-h-[150px] rounded-lg bg-white/10"></div>

                <h3 className="mb-2 text-xl font-bold">{proj.name}</h3>

                <div className="text-sm opacity-90">
                  <p className="mb-2 font-mono text-xs text-blue-200">
                    {proj.framework}
                  </p>
                  <p className="mb-4">{proj.description}</p>
                  <p className="text-base">
                    <span className="font-mono">
                      {index != 3 ? "Github:" : ""}
                    </span>
                    <span className="mt-2 ml-2">
                      <a
                        href={proj.link}
                        className="font-sans break-all text-blue-400 italic underline"
                      >
                        {proj.link}
                      </a>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
