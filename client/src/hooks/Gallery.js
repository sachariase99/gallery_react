import { useState } from 'react';

function useGallery() {
  // Tilstand for det valgte billede
  const [selectedImage, setSelectedImage] = useState(null);

  // Tilstand for at styre visningen af galleriet
  const [showGallery, setShowGallery] = useState(true);

  // Håndterer klik på et billede i galleriet
  const handleClick = (image) => {
    setSelectedImage(image);
    setShowGallery(false);
  };

  // Håndterer tilbageknappen for at vende tilbage til gallerivisningen
  const handleBackToGallery = () => {
    setSelectedImage(null);
    setShowGallery(true);
  };

  // Returnerer de nødvendige værdier og funktioner fra hook'en
  return { selectedImage, showGallery, handleClick, handleBackToGallery };
}

export default useGallery;
