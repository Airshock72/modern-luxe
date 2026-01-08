'use client'
import Image from 'next/image'

const Banner = () => {
  return (
    <>
      <div className='absolute w-full -top-40'>
        <div className="bg-[url('/modern-luxe/assets/banner.jpg')] bg-cover bg-center h-269.75 flex items-center">
          <div className='container mx-auto'>
            <div className='grid grid-cols-1 items-center justify-items-center text-white'>
              <div className='space-y-3 ml-30 -mt-40'>
                <h2 className='text-3xl flex items-center gap-4 uppercase tracking-[5px]'>
                  Exclusive Furniture <Image
                    src='/modern-luxe/assets/line.png'
                    alt='line'
                    className='ml-10'
                    width={150}
                    height={20}
                  />
                </h2>
                <h1 className='text-[8rem] text-base/tight font-bold'>COMFORT</h1>
                <p className='text-[22px]'>
                  Explore a wide range of high-quality furniture classic styles furniture world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Banner
