import { Award, Globe, Plus, Users } from 'lucide-react'
import GrowthDetails from '@/app/components/GrowthDetails'

const Growth = () => {
  const growthStats: GrowthStatsData[] = [
    {
      number: '42',
      icon: Globe,
      title: 'Countries Worldwide',
      description: 'Delivering premium furniture across the globe with excellence and reliability.'
    },
    {
      number: '50K',
      icon: Users,
      title: 'Happy Customers',
      description: 'Satisfied clients who trust our quality and craftsmanship in every piece.'
    },
    {
      number: '15',
      icon: Award,
      title: 'Years of Excellence',
      description: 'Decades of expertise in creating beautiful, functional living spaces.'
    }
  ]
  return (
    <div className='container mx-auto px-4 py-20'>
      <div className='text-center mb-16'>
        <h2 className='text-4xl lg:text-6xl font-bold text-gray-800 mb-6'>
                Our <span className='text-primary'>Growth</span>
        </h2>
        <p className='text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed'>
            From humble beginnings to global recognition, our journey reflects our
            commitment to delivering exceptional furniture that transforms homes worldwide.
        </p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12'>
        {growthStats.map((stat, index) => (
          <div
            key={index}
            className='group text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all
             duration-500 border border-gray-100 hover:border-gray-200 cursor-pointer hover:scale-105'
          >
            <div className='flex justify-center mb-6'>
              <div className='relative'>
                <div className='w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-gray-100 transition-colors duration-300'>
                  <stat.icon
                    className='text-primary group-hover:scale-110 transition-transform duration-300'
                    size={32}
                    strokeWidth={2}
                  />
                </div>
                <div className='absolute inset-0 w-20 h-20 border-2 border-gray-200 rounded-full group-hover:border-primary/20 transition-colors duration-300' />
              </div>
            </div>
            <div className='mb-4'>
              <h1 className='text-5xl lg:text-6xl font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300'>
                {stat.number} <Plus size={28} className='inline-block text-primary' strokeWidth={3} />
              </h1>
            </div>
            <h3 className='text-xl font-medium text-gray-800 mb-3'>{stat.title}</h3>
            <p className='text-gray-600 leading-relaxed text-sm'>{stat.description}</p>
            <div className='mt-6 w-12 h-1 bg-gray-200 group-hover:bg-primary rounded-full mx-auto transition-colors duration-300' />
          </div>
        ))}
      </div>

      <GrowthDetails />
    </div>
  )
}
export default Growth
