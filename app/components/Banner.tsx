'use client'
import Image from 'next/image'

const Banner = () => {
  return (
    <div className='relative'>
      <div className="bg-[url('/modern-luxe/assets/banner.jpg')] bg-cover bg-center min-h-[70vh] h-125 md:h-svh flex items-center relative">
        <div className='hidden lg:block absolute top-32 lg:top-36 xl:top-30 2xl:top-30 right-8 lg:right-15 xl:right-20 2xl:right-15 z-10
          bg-[#777F88]/20 p-3 lg:p-4 xl:p-5 2xl:p-6 rounded-2xl shadow-lg'>
          <div className='relative w-62.5 lg:w-70 xl:w-[320px] 2xl:w-350px] h-32 lg:h-44 xl:h-48 2xl:h-50 rounded-lg overflow-hidden shadow-2xl'>
            <video
              autoPlay
              muted
              loop
              playsInline
              className='w-full h-full object-cover'
            >
              <source src='/modern-luxe/assets/banner_video.mp4' type='video/mp4' />
                Your browser does not support this video tag
            </video>
          </div>
        </div>
        <div className='block lg:hidden absolute top-20 sm:top-24 md:top-28 right-4 sm:right-4 md:right-20 z-10 bg-[#777F88]/20 p-2 rounded-xl shadow-lg'>
          <div className='relative w-40 sm:w-48 md:w-52 h-24 sm:h-28 md:h-32 rounded-lg overflow-hidden shadow-xl'>
            <video
              autoPlay
              muted
              loop
              playsInline
              className='w-full h-full object-cover'
            >
              <source src='/modern-luxe/assets/banner_video.mp4' type='video/mp4' />
                Your browser does not support this video tag
            </video>

          </div>
        </div>

        <div className='container mx-auto px-4 lg:px-6 xl:px-8 2xl:px-12 pt-20 lg:pt-24 xl:pt-32 2xl:pt-40'>
          <div className='grid grid-cols-1 items-center justify-items-center text-white'>
            <div className='space-y-3 md:space-y-4 lg:space-y-5 xl:space-y-6 2xl:space-y-10 -mt-30 sm:-mt-30 md:-mt-50 lg:-mt-50 xl:-mt-60 2xl:-mt-80 text-center
              lg:text-left max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl'>
              <h2 className='text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-3xl flex flex-col lg:flex-row items-center
               gap-2 lg:gap-3 xl:gap-4 2xl:gap-6 uppercase tracking-[1px] sm:tracking-[2px] md:tracking-[3px]
                lg:tracking-[4px] xl:tracking-[5px] 2xl:tracking-[6px]'>
                  Exclusive Furniture <Image
                  src='/modern-luxe/assets/line.png'
                  alt='line'
                  width={150}
                  height={20}
                  className='h-0.5 lg:h-0.5 xl:h-1 2xl:h-1.5 w-8 sm:w-10 md:w-12 lg:w-14 xl:w-16 2xl:w-auto'
                />
              </h2>
              <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[10rem] leading-tight font-bold'>
                  COMFORT
              </h1>
              <p className='text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg
              xl:max-w-xl 2xl:max-w-2xl mx-auto lg:mx-0 px-2 sm:px-4 lg:px-0'>
                  Explore a wide range of high-quality furniture classic styles furniture world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Banner
