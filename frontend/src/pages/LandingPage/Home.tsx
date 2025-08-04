import Hero from '../../layouts/Hero'
import Navbar from '../../layouts/Navbar'

function Home() {
  return (
    <div className='w-screen md:w-[90vw] lg:w-[90vw] xl:w-[70vw] mx-auto'>
     <Navbar />
    <Hero />
    <div className=' h-screen bg-red-400'>
    </div>
    </div>
  )
}

export default Home