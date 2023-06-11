import React from 'react'
import { Gallery, GalleryChanger } from "./components";

const App = () => (
  <div>
    <div className='bg-black h-[100vh]'>
      <Gallery />
    </div>
    <div className='bg-black h-[100vh]'>
      <GalleryChanger />
    </div>
  </div>
)

export default App