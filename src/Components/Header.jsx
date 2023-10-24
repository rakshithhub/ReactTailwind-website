import { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { ImCross } from 'react-icons/im';

const Header = () => {
    const [toogle,setToogle] = useState(false);
  return (
    <>
        <div className="bg-blue-950 w-full h-20 p-4">
            <div className="max-w-[1240px] mx-auto p-3 text-orange-400 flex justify-between items-center">
                <div className="text-3xl font-bold tracking-wide drop-shadow-xl">Learn Tech</div>

                {
                    toogle ? <ImCross className='font-bold text-3xl md:hidden block' onClick={() => setToogle(!toogle)}/> : 
                    <AiOutlineMenu className='font-bold text-3xl md:hidden block' onClick={() => setToogle(!toogle)}/>
                }

                <ul className="hidden md:flex gap-10 text-xl">
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Service</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
                {/* Responsive */}
                <ul className={`text-3xl fixed ${toogle ? 'right-0' : 'right-[-110%]'} top-20 w-screen bg-black md:h-1/2 h-screen p-5 flex flex-col items-center justify-evenly duration-300`}>
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Service</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
                
            </div>
        </div>
    </>
  )
}

export default Header