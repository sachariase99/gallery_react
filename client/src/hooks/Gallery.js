import { useState } from 'react';

function useGallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showGallery, setShowGallery] = useState(true);

  const handleClick = (image) => {
    setSelectedImage(image);
    setShowGallery(false);
  };

  const handleBackToGallery = () => {
    setSelectedImage(null);
    setShowGallery(true);
  };

  return { selectedImage, showGallery, handleClick, handleBackToGallery };
}

export default useGallery;