import { InteriorDesignGuideData } from '@/types'

const InteriorDesignGuide = () => {
  const interiorDesignGuides: InteriorDesignGuideData[] = [
    {
      id: 1,
      number: '01',
      numberColor: 'text-blue-600',
      numberContainerBgColor: 'bg-blue-50',
      title: 'Consultation',
      description: 'Understanding your vision and requirements through detailed discussions and site analysis.'
    },
    {
      id: 2,
      number: '02',
      numberColor: 'text-green-600',
      numberContainerBgColor: 'bg-green-50',
      title: 'Design',
      description: 'Creating detailed plans and 3D visualizations to bring your ideas to life.'
    },
    {
      id: 3,
      number: '03',
      numberColor: 'text-purple-600',
      numberContainerBgColor: 'bg-purple-50',
      title: 'Selection',
      description: 'Choosing the perfect furniture and materials that match your style and budget.'
    },
    {
      id: 4,
      number: '04',
      numberColor: 'text-orange-600 ',
      numberContainerBgColor: 'bg-orange-50',
      title: 'Installation',
      description: 'Professional setup and final styling to complete your dream space transformation.'
    }
  ]

  return (
    <div className='mt-20'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
        {interiorDesignGuides.map((guide, index) => (
          <div
            key={`${guide.id}-${index}`}
            className='bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border
            border-gray-100 hover:border-gray-200 p-8 text-center group'
          >
            <div className='mb-6'>
              <div className={`w-20 h-20 ${guide.numberContainerBgColor} border-blue-200 rounded-2xl flex items-center
              justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}
              >
                <span className={`${guide.numberColor} font-bold text-2xl`}>{guide.number}</span>
              </div>
            </div>
            <h3 className='text-xl font-semibold text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300'>
              {guide.title}
            </h3>
            <p className='text-gray-600 leading-relaxed text-sm'>{guide.description}</p>
            <div className='mt-6 w-12 h-1 bg-gray-200 group-hover:bg-primary rounded-full mx-auto transition-colors duration-300' />
          </div>
        ))}
      </div>
    </div>
  )
}
export default InteriorDesignGuide
