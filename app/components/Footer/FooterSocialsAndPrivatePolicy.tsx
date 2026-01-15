'use client'

import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react'
import { PrivacyPolicies, SocialLinks } from '@/types'
import Link from 'next/link'
import { toast } from 'sonner'

const FooterSocialsAndPrivatePolicy = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks: SocialLinks[] = [
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
    { name: 'Youtube', icon: Youtube, href: 'https://youtube.com' }
  ]

  const privacyPolicies: PrivacyPolicies[] = [
    { id: 1, name: 'Privacy Policy' },
    { id: 2, name: 'Terms of Service' },
    { id: 1, name: 'Cookie Policy' }
  ]
  return (
    <div className='border-t border-gray-800 pt-8'>
      <div className='flex flex-col lg:flex-row justify-between items-center gap-6'>
        <div className='flex items-center gap-4'>
          <span className='text-gray-300 mr-2'>Follow us:</span>
          {socialLinks.map((link, index) => (
            <Link
              key={`${link.name}-${index}`}
              href={link.href}
              target='_blank'
              className='w-10 h-10 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-all duration-200 group'
            >
              <link.icon size={18} className='text-gray-300 group-hover:text-white' />
            </Link>
          ))}
        </div>
        <div className='flex flex-wrap items-center gap-6 text-sm'>
          {privacyPolicies.map((policy, index) => (
            <Link
              key={`${policy.id}-${index}`}
              href='#'
              className='text-gray-300 hover:text-primary transition-colors duration-200'
              onClick={() => toast.info('Feature not available in Demo Mode, please contact Developer for more info.')}
            >{policy.name}</Link>
          ))}
        </div>
        <div className='flex items-center gap-1 text-gray-400 text-sm'>
          <span>© {currentYear} - Luxe Home</span>
        </div>
      </div>
    </div>
  )
}
export default FooterSocialsAndPrivatePolicy
