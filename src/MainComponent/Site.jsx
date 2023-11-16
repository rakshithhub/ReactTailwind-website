import About from "../Components/About";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import Service from "../Components/Service";

const Site = () => {
  return (
    <>
      <div className="w-full h-full bg-slate-600">
        <Header/>
        <Hero/>
        <About/>
        <Service/>
        <Contact/>
        <Footer/>
      </div>
    </>
  );
};

export default Site;
