'use client'

import InteriorDesignImages from '@/app/components/InteriorDesign/InteriorDesignImages'
import InteriorDesignOffers from '@/app/components/InteriorDesign/InteriorDesignOffers'
import InteriorDesignGuide from '@/app/components/InteriorDesign/InteriorDesignGuide'

const InteriorDesign = () => {
  return (
    <div className='container mx-auto px-10 py-20'>
      <div className='text-center mb-16'>
        <h2 className='text-4xl lg:text-6xl font-bold text-gray-800 mb-6'>
            Our Interior <span className='text-primary'>Design</span>
        </h2>
        <p>
            From concept to completion, we follow a structured approach to deliver exceptional
            results that exceed your expectations every step of the way.
        </p>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center'>
        <div className='space-y-8'>
          <div>
            <h1 className='text-2xl lg:text-4xl font-semibold text-gray-900 leading-tight mb-6'>
                Transform Your Space Into a <span className='text-primary'>Dream Home</span>
            </h1>
            <p className='text-lg text-gray-600 leading-relaxed'>
                From concept to completion, we create stunning interiors that perfectly blend style, comfort,
                and functionality. Let our expert designers bring your vision to life with personalized
                solutions tailored to your lifestyle.
            </p>
          </div>
          <InteriorDesignOffers />
        </div>
        <InteriorDesignImages />
      </div>
      <InteriorDesignGuide />
    </div>
  )
}
export default InteriorDesign
