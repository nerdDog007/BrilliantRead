import hero from '../assets/hero.png'
import SignUp from '../components/SignUp'

function Hero() {
  return (
    <div className="w-full relative h-[20vh] sm:h-[30vh] md:h-[30vh]">
        <img src={hero} alt="hero" className='h-full w-full' />
        <SignUp />
    </div>
  )
}

export default Hero