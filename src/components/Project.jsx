import React from "react";

const Project = () => {
  let projects = [
    {
      name: "Machine Learning Project",
      framework: "Tensorflow, Keras, Scikit-learn",
      description:
        "Implemented regression models from scratch on Iris and MNIST.",
      link: "https://github.com/khangnguyen0810/Machine-Leaning-Self-Study",
      image: "machine.png",
    },
    {
      name: "Retrieve Student Scores",
      framework: "Selenium, bs4, webdriver_manager",
      description:
        "This project uses python code can retrieve students' score on Ministry of Education's website in 2022.",
      link: "https://github.com/khangnguyen0810/Retrieve-Student-Score",
      image: "retrieve.png",
    },
    {
      name: "Reinforcement Learning Project",
      framework: "Gym, Numpy",
      description:
        "Train an agent to reach the flag using reinforcement learning in the game MountainCar-v0 (Open Gym).",
      link: "https://github.com/khangnguyen0810/Reinforcement-Learning-with-Q-Learning",
      image: "reinforcement.jpg",
    },
    {
      name: "Library Booking Service",
      framework: "HTML, CSS, Javascript",
      description:
        "A website for managing library booking requests with an integrated Gemini function for flexible and convenient bookings.",
      link: "https://github.com/khangnguyen0810/library-booking-service",
      image: "library.png",
    },
    {
      name: "Portfolio Website",
      framework: "React.js, Tailwind.css, React-Router",
      description:
        "A porfolio website that display descriptions about the website owner.",
      link: "https://github.com/khangnguyen0810/portfolio-website",
      image: "portfolio.png",
    },
  ];

  return (
    <div className="mt-20 min-h-screen">
      <div className="flex flex-wrap justify-center gap-20 gap-x-30 px-10 md:px-20">
        {projects.map((proj, index) => {
          return (
            <div
              key={index}
              className="w-full max-w-[500px] rounded-xl bg-gradient-to-br from-purple-700 via-purple-500 to-purple-950 p-[2px] shadow-lg transition-transform hover:scale-[1.02] md:w-[calc(50%-80px)]"
            >
              <div className="flex h-full w-full flex-col rounded-xl bg-gray-800 p-4 text-white">
                <img
                  src={`${proj.image}`}
                  alt=""
                  className="w-full object-cover"
                />

                <h3 className="mt-6 mb-2 text-xl font-bold">{proj.name}</h3>

                <div className="flex grow flex-col text-sm opacity-90">
                  <p className="mb-2 font-mono text-xs text-blue-200">
                    {proj.framework}
                  </p>
                  <p className="mb-4">{proj.description}</p>
                  <a
                    href={proj.link}
                    className="mt-auto mb-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="flex w-fit items-center justify-self-center rounded-xl border-2 p-2">
                      <img
                        src="github-icon.webp"
                        alt=""
                        className="size-[30px] justify-self-center"
                      />
                      <div className="ml-2 font-mono text-sm">Github</div>
                    </div>
                  </a>
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
