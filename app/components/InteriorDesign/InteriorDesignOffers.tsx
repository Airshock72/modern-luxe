import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { ArrowRight, House, Palette, Star } from 'lucide-react'
import { InteriorDesignOptionData } from '@/types'

const InteriorDesignOffers = () => {
  const interiorDesignOptions: InteriorDesignOptionData[] = [
    {
      id: 1,
      icon: Palette,
      title: 'Personalized Design',
      description: 'Tailored solutions that reflect your unique taste and lifestyle preferences.'
    },
    {
      id: 2,
      icon: House,
      title: 'Complete Service',
      description: 'End-to-end solutions from planning to final installation and styling.'
    },
    {
      id: 3,
      icon: Star,
      title: 'Premium Quality',
      description: 'Only the finest materials and furniture pieces for lasting beauty.'
    },
    {
      id: 4,
      icon: ArrowRight,
      title: 'Timely Delivery',
      description: 'Professional project management ensuring on-time completion.'
    }
  ]

  const offerDetailTitles: string[] = ['Space Planning', '3D Visualization', 'Furniture Selection', 'Color Consultation', 'Lighting Design', 'Project Management']
  return (
    <>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
        {interiorDesignOptions.map((option, index) => (
          <div key={index} className='flex items-start gap-3 p-4 bg-gray-50 rounded-xl'>
            <div className='w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0'>
              <option.icon className='text-primary' width={20} height={20} strokeWidth={2} />
            </div>
            <div>
              <h3 className='font-semibold text-gray-900 mb-1'>{option.title}</h3>
              <p className='text-sm text-gray-600'>{option.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className='bg-white border border-gray-200 rounded-2xl p-6'>
        <h3 className='font-bold text-gray-900 mb-4'>
                   What We Offer:
        </h3>
        <div className='grid grid-cols-2 gap-4 text-sm'>
          {offerDetailTitles.map((title, index) => (
            <div
              className='flex items-center gap-2'
              key={index}
            >
              <div className='w-2 h-2 bg-primary rounded-full' />
              <span className='text-gray-700'>{title}</span>
            </div>
          ))}
        </div>
      </div>
      <div className='flex flex-col sm:flex-row gap-4'>
        <Button
          className='group bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-lg
            font-semibold transition-all duration-200 flex items-center justify-center gap-2'
          onClick={() => toast.info('Feature not available in Demo Mode, please contact Developer for more info.')}
        >
                   Schedule Consultation
          <ArrowRight
            size={20}
            className='group-hover:translate-x-1 transition-transform duration-200'
          />
        </Button>
      </div>
    </>
  )
}
export default InteriorDesignOffers
