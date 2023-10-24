const About = () => {
  return (
    <>
      <div className="w-full p-5 md:mb-20 mb-10">
        <div className="text-4xl font-bold text-orange-400 text-center underline underline-offset-8">
          About Us
        </div>
        <div className="max-w-[1240px] p-4 mt-20 md:grid grid-cols-2 mx-auto">
          <div className="col-span-1">
            <iframe
              className="w-full h-[300px]"
              src="https://www.youtube.com/embed/Cu3R5it4cQs"
              title="Computer Basics: What Is a Computer?"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="col-span-1 p-2 flex flex-col justify-start items-center">
            <h2 className="text-3xl font-bold underline underline-offset-4 text-orange-950 mb-2">Abouts Computer</h2>
            <p className="text-lg text-orange-900 text-justify mb-2">A computer is a machine that can be programmed to carry out sequences of arithmetic or logical operations (computation) automatically. Modern digital electronic computers can perform generic sets of operations known as programs. These programs enable computers to perform a wide range of tasks. A computer system is a nominally complete computer that includes the hardware, operating system (main software), and peripheral equipment needed and used for full operation.</p>
            <button className="bg-black text-white rounded-lg w-24 p-2" ><a href="https://en.wikipedia.org/wiki/Computer">Visit Me</a></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
