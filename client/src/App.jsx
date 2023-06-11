import React from 'react'
import { Gallery, GalleryChanger } from "./components";

const App = () => (
  <div>
    <div className='bg-black lg:h-[100vh] p-3'>
      <Gallery />
    </div>
    <div className='bg-black md:h-[100vh] p-3 pt-[500px] md:pt-0'>
      <GalleryChanger />
    </div>
  </div>
)

export default App