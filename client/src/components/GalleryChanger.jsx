import React, { useState } from 'react';
import belowWater from '../images/Goal-Life-Water.png';
import onLand from '../images/Goal-Life-Land.png';
import Institutions from '../images/Goal-Institutions.png';
import Partnership from '../images/Goal-Partnership.png';
import Global from '../images/Global-Goals.png';

const GalleryChanger = () => {
    // Definerer tilstandsværdier for det store billede og de små billeder
    const [bigImage, setBigImage] = useState(Global);
    const [smallImage1, setSmallImage1] = useState(belowWater);
    const [smallImage2, setSmallImage2] = useState(onLand);
    const [smallImage3, setSmallImage3] = useState(Institutions);
    const [smallImage4, setSmallImage4] = useState(Partnership);

    // Funktion til at skifte billeder
    const swapImages = (smallImage, setSmallImage, bigImage, setBigImage) => {
        setSmallImage(bigImage);
        setBigImage(smallImage);
    };

    return (
        <div className="flex justify-center items-center md:h-[100vh]">
            <div className="w-[1000px] grid grid-cols-2 grid-rows-4 md:grid-cols-4 md:grid-rows-2 gap-3 text-white cursor-pointer">
                <div className="div1 col-span-2 row-span-2">
                    <img className="w-[100%] cursor-default" src={bigImage} alt="Selected" />
                </div>
                <div className="div2 col-span-1 row-span-1" onClick={() => swapImages(smallImage1, setSmallImage1, bigImage, setBigImage)}>
                    <img className="w-[100%] transition duration-300 ease-out hover:ease-in grayscale hover:grayscale-0" src={smallImage1} alt="Below Water" />
                </div>
                <div className="div3 col-span-1 row-span-1" onClick={() => swapImages(smallImage2, setSmallImage2, bigImage, setBigImage)}>
                    <img className="w-[100%] transition duration-150 ease-out hover:ease-in grayscale hover:grayscale-0" src={smallImage2} alt="On Land" />
                </div>
                <div className="div4 col-span-1 row-span-1" onClick={() => swapImages(smallImage3, setSmallImage3, bigImage, setBigImage)}>
                    <img className="w-[100%] transition duration-300 ease-out hover:ease-in grayscale hover:grayscale-0" src={smallImage3} alt="Institutions" />
                </div>
                <div className="div5 col-span-1 row-span-1" onClick={() => swapImages(smallImage4, setSmallImage4, bigImage, setBigImage)}>
                    <img className="w-[100%] transition duration-300 ease-out hover:ease-in grayscale hover:grayscale-0" src={smallImage4} alt="Partnership" />
                </div>
            </div>
        </div>
    );
};

export default GalleryChanger;
