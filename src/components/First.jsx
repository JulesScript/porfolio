import { useRef } from 'react';
import moon from '../assets/moon.png';
import land from '../assets/land.png';
import Cat from "../assets/cat.gif";
import {FcBinoculars} from 'react-icons/fc'
import mySoundFile from '../assets/ui.mp3'; 
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

const First = () => {
    const ref = useRef();

  return (
    <div >
    
    <Parallax pages={5} ref={ref}>
        <ParallaxLayer
          offset={0}
          speed={1}
          factor={4}
          style={{
            backgroundImage: `url(${moon})`,
            backgroundSize: 'cover',
          }}
        />

        <ParallaxLayer
          offset={2}
          speed={1}
          factor={5}
          style={{
            backgroundImage: `url(${land})`,
            backgroundSize: 'cover',
          }}
        >
                  <h1 className='text-pink-600 text-center text-[50px]'>🐱 : We are already here keep going!.</h1> 
        </ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 0.5, end: 4.9 }}
          style={{ textAlign: 'center' }}
        >
          <img src={Cat} />
  
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.2}
          speed={1}
          onClick={() => ref.current.scrollTo(3)}
        >
          
       <div className="flex flex-col items-center justify-center ">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 shadow-lg">
            <span role="img" aria-label="Cat" className="text-pink-500">
              🐱
            </span>
            : Welcome Hooman My friend,{' '}
            <span className="text-pink-500"> I'm Beerus </span>!
          </h1>
          <h3 className="text-4xl text-pink-500 mt-4">
            I will guide you to the Earth before i destroy it!!!{' '}
            <span role="img" aria-label="Earth" className="inline-block animate-spin">
              🌎
            </span>
          </h3>
    </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={1}
          onClick={() => ref.current.scrollTo(0)}
        >
            <h1 className='text-pink-600 text-center text-[50px]'>🐱 : Take your time and keep exploring!.</h1> 
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}

export default First