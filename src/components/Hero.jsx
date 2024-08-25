import React, {useEffect, useState} from 'react'
import Search from './Search'

function Hero() {
    //Scroll effect baadme daalunga
   /* const [scrollY, setScrollY] = useState(0);
    const [translateX, setTranslateX] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setScrollY(prevScrollY => {
                const diff = currentScrollY - prevScrollY;
                setTranslateX(prevTranslateX => prevTranslateX + diff * 0.5);
                return currentScrollY;
            });
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []); */

  return (
    <div>
        <div className='flex flex-col items-center p-10
         py-20 gap-6 h-[650px] w-full bg-[#eef0fc]'>
            <h2 className='text-lg'>Find cars for sale and rent near you</h2>
            <h2 className='text-[60px] font-bold'>Find your dream car</h2>
            <Search />

            <img src='/g63.png' 
            alt='Car'
            //style={{ transform: `translateX(${translateX}px)` }} //scroll effect
            className='transition-transform duration-100 ease-out'></img>
        </div>
    </div>
  )
}

export default Hero