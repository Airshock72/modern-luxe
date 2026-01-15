import { Mail, MapPin, Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { FooterLinksData } from '@/types'

const FooterLinks = () => {
  const footerLinks: FooterLinksData = {
    company: [
      { name: 'About Us' },
      { name: 'Our Story' },
      { name: 'Careers' },
      { name: 'Press' },
      { name: 'Contact' }
    ],
    products: [
      { name: 'Living Room' },
      { name: 'Bedroom' },
      { name: 'Dining Room' },
      { name: 'Office' },
      { name: 'Outdoor' }
    ],
    services: [
      { name: 'Interior Design' },
      { name: 'Free Consultation' },
      { name: 'Delivery & Assembly' },
      { name: 'Financing' },
      { name: 'Trade Program' }
    ],
    support: [
      { name: 'Help Center' },
      { name: 'Shipping Info' },
      { name: 'Returns' },
      { name: 'Size Guide' },
      { name: 'Care Instructions' }
    ]
  }
  return (
    <div className='grid grid-cols-1 lg:grid-cols-6 gap-12 mb-12'>
      <div className='lg:col-span-2'>
        <div className='flex items-center gap-3 mb-6'>
          <Image
            src='/modern-luxe/logo.png'
            alt='logo'
            width={250}
            height={40}
          />
        </div>
        <p className='text-gray-300 pb-10 leading-relaxed max-w-md '>
                    Transform your living spaces with our premium furniture collection.
                    We create beautiful, functional environments that reflect your unique style.
        </p>
        <div className='space-y-3'>
          <div className='flex items-center gap-3 text-gray-300'>
            <Phone size={18} />
            <span>+1 (555) 123-4567</span>
          </div>
          <div className='flex items-center gap-3 text-gray-300'>
            <Mail size={18} />
            <span>hello@luxehome.com</span>
          </div>
          <div className='flex items-center gap-3 text-gray-300'>
            <MapPin size={18} />
            <span>123 Design Street, NY 10001</span>
          </div>
        </div>
      </div>
      {Object.entries(footerLinks).map(([category, links]) => (
        <div key={category}>
          <h3 className='text-xl font-medium mb-6 capitalize'>{category}</h3>
          <ul className='space-y-3'>
            {links.map((link, index) => (
              <li key={index}>
                <Link
                  href='#'
                  className='relative text-gray-300 hover:text-primary transition-all duration-300 inline-block group pb-1'
                >
                  {link.name}
                  <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300 ease-out' />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
export default FooterLinks
