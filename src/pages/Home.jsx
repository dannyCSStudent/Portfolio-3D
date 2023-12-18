import { Suspense, useState, useEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader';
import Sky from '../models/Sky';
import sakura from '../assets/sakura.mp3';
import { soundoff, soundon } from '../assets/icons';
import Bird from '../models/Bird';


const Home = () => {
  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    }

    return () => {
      audioRef.current.pause();
    }

  }, [isPlayingMusic]);
  
  const [isRotating, setIsRotating] = useState(true)
  const adjustBirdForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, 0, 0];
    let rotation = [0.1, 4.7, 0]

    if (window.innerWidth < 768) {
      screenScale = [0.7, 0.7, 0.7];
    } else {
      screenScale = [2, 2, 2]
    }

    return [screenScale, screenPosition, rotation]

  }
  const [dragonScale, dragonPosition, dragonRotation] = adjustBirdForScreenSize();
  return (
    <section className='w-full h-screen relative'>
      <Canvas 
        className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2}/>
          <ambientLight intensity={0.5} />
          <pointLight  />
          <spotLight />
          <hemisphereLight skyColor='#b1e1ff' groundColor='#000000' intensity={1} />
          <Sky isRotating={isRotating}/>
          <Bird  
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            position={dragonPosition} 
            rotation={dragonRotation}
            scale={dragonScale} 
          />
        </Suspense>

      </Canvas>
      <div className='absolute bottom-2 left-2'>
        <img 
          src={!isPlayingMusic ? soundoff : soundon}
          alt='sound'
          className='w-10 h-10 cursor-pointer object-contain'
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
        />
      </div>
    </section>
  )
}

export default Home
