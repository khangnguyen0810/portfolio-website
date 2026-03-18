const Experience = () => {
  const timelineEvents = [
    {
      side: "right",
      year: "2021-2023",
      title: "Freshman",
      institution: "Vietnamese - German University",
      description:
        "Began my undergraduate journey at Vietnamese–German University as a Computer Science student, building foundational knowledge and exploring core concepts in computing and problem-solving.",
      topOffset: 120,
    },
    {
      side: "left",
      year: "2023-2024",
      title: "Junior",
      institution:
        "Exchange Semester — Frankfurt University of Applied Sciences",
      description:
        "Spent a semester abroad as a junior Computer Science student, gaining international academic experience and exposure to a different learning environment.",
      topOffset: 320,
    },
    {
      side: "right",
      year: "3/2025 - 9/2025",
      title: "Technical Support Engineer",
      institution: "iTechwx Company Limited",
      description:
        "Started my first professional role as a Technical Support Engineer, providing technical support for Microsoft Power Platform, troubleshooting customer issues, and collaborating with cross-functional teams to deliver reliable solutions.",
      topOffset: 520,
    },
    {
      side: "left",
      year: "11/2025",
      title: "Graduate",
      institution: "Vietnamese - German University",
      description:
        "Graduated with a Very Good degree in Computer Science, completing my undergraduate studies and solidifying my technical foundation.",
      topOffset: 750,
    },
  ];

  const TimelineNode = ({ event }) => {
    const isRight = event.side === "right";

    return (
      <>
        {/* Year label */}
        <div
          className={`absolute w-[200px] translate-y-2 font-bold whitespace-nowrap text-[#A944FB] md:w-[302px] md:translate-y-0 md:text-[20px] ${
            isRight ? "right-0 text-left" : "left-0 text-right"
          }`}
          style={{ top: `${event.topOffset}px` }}
        >
          <div>{event.year}</div>
        </div>

        {/* Branch with content */}
        <div
          className={`absolute flex items-center ${isRight ? "right-0" : "left-0"}`}
          style={{ top: `${event.topOffset + 30}px` }}
        >
          {/* Left side branch */}
          {!isRight && (
            <>
              <div className="h-px w-[200px] bg-[#A944FB] md:w-[302px]"></div>
              <div className="h-3 w-3 rounded-full bg-[#A944FB]"></div>
            </>
          )}

          {/* Right side branch */}
          {isRight && (
            <>
              <div className="h-3 w-3 rounded-full bg-[#A944FB]"></div>
              <div className="h-px w-[200px] bg-[#A944FB] md:w-[302px]"></div>
            </>
          )}

          {/* Content */}
          <div
            className={`font-istok-web absolute top-2 text-[14px] font-bold text-white md:text-[20px] ${
              isRight ? "right-2" : "left-2"
            }`}
          >
            {event.title}
            <div
              className={`absolute w-[200px] font-mono text-[12px] font-medium text-[#7E7E7E] md:w-[550px] md:text-[18px] ${
                isRight ? "right-0 text-right" : "left-0 text-left"
              }`}
            >
              {event.institution}
              <div
                className={`font-istok-web absolute mt-1 w-[200px] text-[10px] font-medium whitespace-normal text-[#7E7E7E] md:h-[92px] md:w-[550px] md:text-[20px] ${
                  isRight ? "right-0 text-right" : "left-0 text-left"
                }`}
              >
                {event.description}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="mt-[150px] flex justify-center">
        <div className="relative">
          {/* Top dot */}
          <div className="absolute top-0 left-1/2 h-[20px] w-[20px] -translate-x-1/2 rounded-full bg-[#A944FB] md:h-[30px] md:w-[30px]"></div>

          {/* Main vertical line */}
          <div className="h-[960px] w-px bg-[#A944FB]"></div>

          {/* Timeline events */}
          {timelineEvents.map((event, index) => (
            <TimelineNode key={index} event={event} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Experience;
