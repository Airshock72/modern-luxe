import Image from 'next/image'
import { InteriorDesignImagesData } from '@/types'

const InteriorDesignImages = () => {
  const interiorDesignImages: InteriorDesignImagesData[] = [
    {
      id: 1,
      src: '/modern-luxe/assets/Interior1.jpg',
      alt: 'Modern Living Room Design',
      hoverText: 'Modern Living Room Design'
    },
    {
      id: 2,
      src: '/modern-luxe/assets/Interior2.jpg',
      alt: 'Contemporary Bedroom Setup',
      hoverText: 'Contemporary Bedroom Setup'
    },
    {
      id: 3,
      src: '/modern-luxe/assets/Interior3.jpg',
      alt: 'Minimalist Kitchen Design',
      hoverText: 'Minimalist Kitchen Design'
    },
    {
      id: 4,
      src: '/modern-luxe/assets/Interior4.jpg',
      alt: 'Elegant Dining Space',
      hoverText: 'Elegant Dining Space'
    }
  ]
  return (
    <div className='grid grid-cols-2 gap-4'>
      {interiorDesignImages.map((image, index) => (
        <div
          key={image.id}
          className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl 
              transition-all duration-300 ${index === 0 ? 'row-span-2' : ''} 
              ${index === 3 ? 'col-span-2' : ''}`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            width={600}
            height={400}
            className={`w-full object-cover group-hover:scale-105 transition-transform
                 duration-500 ${index === 0 ? 'h-full' : index === 3 ? 'h-64' : 'h-66'}`}
          />
          <div className='absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/60 to-transparent p-4
              opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
            <p className='text-white font-medium text-sm'>
              {image.hoverText}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
export default InteriorDesignImages
