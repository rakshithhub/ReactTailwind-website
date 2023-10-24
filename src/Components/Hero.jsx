
const Hero = () => {
  return (
    <>
        <div className="w-full p-5 md:mb-20 mb-10">
            <div className="max-w-[1240px] bg-slate-400 mx-auto p-4 md:grid grid-cols-2">
                <div className="col-span-1">
                    <img src="https://cdni.iconscout.com/illustration/premium/thumb/study-progress-3862335-3213886.png" alt="" />
                </div>
                <div className="col-span-1 flex flex-col justify-center">
                    <h2 className="text-3xl text-orange-950 font-bold mb-2 underline underline-offset-4">My Journey</h2>
                    <p className="text-xl mb-2 font-bold text-orange-900">One of the most effective ways of studying is to space out your learning sessions. If you break up your study load over several days, youll retain information far more readily than if you crammed in one long session.</p>
                    <button className="bg-black text-white rounded-lg w-24 p-2">Get More</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Hero