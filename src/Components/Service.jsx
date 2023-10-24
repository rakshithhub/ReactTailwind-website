const Service = () => {
  return (
    <>
      <div className="w-full p-5 md:mb-20 mb-10">
        <div className="text-4xl font-bold text-orange-400 text-center underline underline-offset-8">
          Our Service
        </div>
        <div className="max-w-[1240px] p-4 mt-20 md:grid grid-cols-3 gap-5 mx-auto">
          <div className="col-span-1 border bottom-1 border-orange-400 p-3 mb-24 md:mb-0">
            <img src="https://www.aliem.com/wp-content/uploads/2016/12/teaching-course-logo.svg" className=" w-36 mx-auto mt-[-70px] mb-2" alt="" />
            <h3 className="mb-2 text-2xl text-center font-bold text-orange-950 underline underline-offset-4">Full Stack Developer</h3>
            <p className="text-xl text-orange-900 text-justify mb-2">MERN stack is a collection of technologies that enables faster application development. It is used by developers worldwide. The main purpose of using MERN stack is to develop apps using JavaScript only. This is because the four technologies that make up the technology stack are all JS-based.</p>
            <button className="bg-black text-white mx-auto rounded-lg w-24 p-2" ><a href="https://www.simplilearn.com/tutorials/mongodb-tutorial/what-is-mern-stack-introduction-and-examples#:~:text=MERN%20stack%20is%20a%20collection,stack%20are%20all%20JS%2Dbased">More</a></button>
          </div>
          <div className="col-span-1 border bottom-1 border-orange-400 p-3 mb-24 md:mb-0">
            <img src="https://www.aliem.com/wp-content/uploads/2016/12/teaching-course-logo.svg" className=" w-36 mx-auto mt-[-70px] mb-2" alt="" />
            <h3 className="mb-2 text-2xl text-center font-bold text-orange-950 underline underline-offset-4">Java Developer</h3>
            <p className="text-xl text-orange-900 text-justify mb-2">Java was originally developed by James Gosling at Sun Microsystems. It was released in May 1995 as a core component of Sun Microsystems Java platform. The original and reference implementation Java compilers, virtual machines, and class libraries were originally released by Sun under proprietary licenses.</p>
            <button className="bg-black text-white mx-auto rounded-lg w-24 p-2" ><a href="https://en.wikipedia.org/wiki/Java_(programming_language)#:~:text=Java%20was%20originally%20developed%20by,by%20Sun%20under%20proprietary%20licenses">More</a></button>
          </div>
          <div className="col-span-1 border bottom-1 border-orange-400 p-3 md:mb-0">
            <img src="https://www.aliem.com/wp-content/uploads/2016/12/teaching-course-logo.svg" className=" w-36 mx-auto mt-[-70px] mb-2" alt="" />
            <h3 className="mb-2 text-2xl text-center font-bold text-orange-950 underline underline-offset-4">Python Developer</h3>
            <p className="text-xl text-orange-900 text-justify mb-2">Python developers design, code, and deploy development projects in the Python language. They also work on debugging those same projects to ensure they function as intended. As a python developer, youll work closely with other teams, including data collection and analytics, to help answer questions and provide insight.</p>
            <button className="bg-black text-white mx-auto rounded-lg w-24 p-2" ><a href="https://www.coursera.org/articles/python-developer">More</a></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
