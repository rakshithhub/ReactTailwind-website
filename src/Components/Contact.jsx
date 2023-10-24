const Contact = () => {
  return (
    <>
      <div className="w-full p-5 md:mb-20 mb-10">
        <div className="text-4xl font-bold text-orange-400 text-center underline underline-offset-8">
          Contact Us
        </div>
        <div className="max-w-[1240px] p-4 mt-20 md:grid grid-cols-1 mx-auto">
          <div className="col-span-1">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.519061599992!2d81.86970797426876!3d25.45433772123967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399ab55be5f841f3%3A0xed7f5d197e594bb!2s1524%2F23%2F47%2F51%2C%20Kidwai%20Nagar%2C%20Punjabi%20Colony%2C%20Allahpur%2C%20Prayagraj%2C%20Uttar%20Pradesh%20211006!5e0!3m2!1sen!2sin!4v1697921220828!5m2!1sen!2sin"
              className="w-full h-96"
            />
          </div>
          <div className="col-span-1 mt-20">
            <form className="w-full max-w-lg mx-auto">
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide  text-orange-950  text-xs font-bold mb-2"
                    htmlFor="grid-first-name"
                  >
                    First Name
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200  text-orange-950 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="text"
                    placeholder="Jane"
                  />
                  <p className="text-red-500 text-xs italic">
                    Please fill out this field.
                  </p>
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label
                    className="block uppercase tracking-wide  text-orange-950 text-xs font-bold mb-2"
                    htmlFor="grid-last-name"
                  >
                    Last Name
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200  text-orange-950 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-last-name"
                    type="text"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide  text-orange-950 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Password
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200  text-orange-950 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-password"
                    type="password"
                    placeholder="******************"
                  />
                  <p className="text-gray-600 text-xs italic">
                    Make it as long and as crazy as youd like
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide  text-orange-950 text-xs font-bold mb-2"
                    htmlFor="grid-city"
                  >
                    City
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200  text-orange-950 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-city"
                    type="text"
                    placeholder="Albuquerque"
                  />
                </div>
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide  text-orange-950 text-xs font-bold mb-2"
                    htmlFor="grid-state"
                  >
                    State
                  </label>
                  <div className="relative">
                    <select
                      className="block appearance-none w-full bg-gray-200 border border-gray-200  text-orange-950 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-state"
                    >
                      <option>New Mexico</option>
                      <option>Missouri</option>
                      <option>Texas</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2  text-orange-950">
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide  text-orange-950 text-xs font-bold mb-2"
                    htmlFor="grid-zip"
                  >
                    Zip
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200  text-orange-950 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-zip"
                    type="text"
                    placeholder={90210}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
