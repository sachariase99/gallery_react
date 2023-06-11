import React from 'react';
import useGallery from '../hooks/Gallery';
import Poverty from '../images/Goal-No-Poverty.png';
import Hunger from '../images/Goal-No-Hunger.png';
import goodHealth from '../images/Goal-Good-Health.png';
import Education from '../images/Goal-Good-Education.png';
import genderEquality from '../images/Goal-Gender-Equality.png';
import cleanWater from '../images/Goal-Clean-Water.png';
import cleanEnergy from '../images/Goal-Clean-Energy.png';
import decentWork from '../images/Goal-Decent-Work.png';
import Industry from '../images/Goal-Industry.png';
import Inequalities from '../images/Goal-Inequalities.png';
import Sustainable from '../images/Goal-Sustainable-Cities.png';
import Consumption from '../images/Goal-Responsible-Consumption.png';
import climateAction from '../images/Goal-Climate-Action.png';
import belowWater from '../images/Goal-Life-Water.png';
import onLand from '../images/Goal-Life-Land.png';
import Institutions from '../images/Goal-Institutions.png';
import Partnership from '../images/Goal-Partnership.png';
import Global from '../images/Global-Goals.png';

function Gallery() {
  // Array med billed-URL'er
  const images = [
    Poverty,
    Hunger,
    goodHealth,
    Education,
    genderEquality,
    cleanWater,
    cleanEnergy,
    decentWork,
    Industry,
    Inequalities,
    Sustainable,
    Consumption,
    climateAction,
    belowWater,
    onLand,
    Institutions,
    Partnership,
    Global,
    // Tilføj flere billed-URL'er her...
  ];

  // Brug af brugerdefineret hook til gallerifunktionalitet
  const { selectedImage, showGallery, handleClick, handleBackToGallery } =
    useGallery();

  return (
    <div className='flex justify-center items-center lg:h-[100vh]'>
      {showGallery ? (
        // Gallerivisning
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 max-w-[1000px] m-auto gap-2">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Small ${index + 1}`}
              onClick={() => handleClick(image)}
              className='w-[100%] cursor-pointer transition duration-150 ease-out hover:ease-in hover:scale-105 grayscale hover:grayscale-0'
            />
          ))}
        </div>
      ) : (
        // Udvidet visning af enkelt billede
        <div className="enlarged-image">
          <img
            src={selectedImage}
            alt="Enlarged"
            onClick={handleBackToGallery}
            className='w-[100%] cursor-pointer'
          />
        </div>
      )}
    </div>
  );
}

export default Gallery;
