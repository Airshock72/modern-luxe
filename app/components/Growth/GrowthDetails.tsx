import { Star } from 'lucide-react'
import { GrowthDetailData } from '@/types'

const GrowthDetails = () => {
  const growthDetails: GrowthDetailData[] = [
    { title: 'Customer Satisfaction', value: '98%' },
    { title: 'Customer Support', value: '24/7' },
    { title: 'Unique Designs', value: '1000+' },
    { title: 'Global Shipping', value: 'Free' }
  ]
  return (
    <div className='mt-16 bg-primary/4 rounded-2xl p-8 lg:p-12 cursor-pointer hover:scale-102 transition-transform duration-300'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-center'>
        <div>
          <h3 className='text-4xl font-semibold text-gray-800'>
            Building Trust Through Quality
          </h3>
          <p className='text-gray-600 py-8 leading-relaxed'>
            Our growth isn't just about numbers—it's about the relationships we've built and the homes we've helped create.
            Every piece tells a story of craftsmanship, durability, and timeless design.
          </p>
          <div className='flex items-center gap-2 text-amber-500'>
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} className='fill-current'/>
            ))}
            <p className='text-gray-700 font-semibold ml-2'>4.9/5 Customer Rating</p>
          </div>
        </div>
        <div className='grid grid-cols-2 gap-6'>
          {growthDetails.map((detail, i) => (
            <div key={i} className='text-center p-6 bg-white rounded-xl shadow-sm'>
              <div className='text-2xl font-bold text-primary mb-2'>{detail.value}</div>
              <div className='text-sm text-gray-600'>{detail.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default GrowthDetails
