const About = () => {
  return (
    <>
      <div id="about" className="mt-[200px] md:mt-[327px]">
        <div className="font-satisfy text-center text-[64px] text-[#FFFFFF]">
          About <span className="text-[#CC66FF]">Me</span>
        </div>
        <div className="flex flex-col items-center justify-between py-10 md:flex-row">
          <img
            src="avatar.png"
            alt=""
            className="-mx-[103.425px] scale-[0.65] rounded-full md:-my-[137.725px]"
          />
          <div className="relative overflow-hidden rounded-[65px] py-5 backdrop-blur-[3px] md:ml-[167px] md:h-[482px] md:w-[913px] md:p-0">
            <div className="absolute inset-0 bg-[#000000] opacity-[10%] shadow-[-10_10px_4px_1_rgba(0,0,0,0.25)]" />

            <div
              className="absolute inset-0 rounded-[65px] border-3 border-transparent bg-gradient-to-br from-white/40 via-transparent to-white/20 bg-clip-padding"
              style={{
                mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                maskComposite: "exclude",
                padding: "2px",
              }}
            />

            {/* Additional light highlights */}
            <div className="absolute top-0 left-0 h-1/3 w-1/3 rounded-[65px] bg-gradient-to-br from-white/30 to-transparent opacity-60 blur-2xl" />
            <div className="absolute right-0 bottom-0 h-1/4 w-1/4 rounded-[65px] bg-gradient-to-tl from-white/20 to-transparent opacity-50 blur-xl" />

            <div className="font-istok-web relative z-10 flex h-full items-center justify-center px-8 text-center text-[25px] leading-[50px] text-white">
              Hi, I'm Nguyen Phu Khang, a newly graduated Computer Science
              student with a strong enthusiasm for programming. I'm especially
              interested in software development and artificial intelligence,
              and I enjoy building solutions that turn ideas into practical,
              impactful applications. I'm eager to continue learning, growing,
              and contributing to real-world projects.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
