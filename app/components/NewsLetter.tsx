'use client'

import { ArrowRight, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'

const NewsLetter = () => {
  return (
    <div className="relative bg-cover bg-center bg-no-repeat bg-[url('/modern-luxe/assets/newletter.jpg')] min-h-150">
      <div className='absolute inset-0 bg-black/60' />
      <div className='relative container mx-auto px-4 py-24'>
        <div className='text-center mb-12'>
          <h2 className='text-4xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg'>
              Stay <span className='text-primary'>Updated</span>
          </h2>
          <p className='text-lg text-gray-100 max-w-2xl mx-auto leading-relaxed drop-shadow-md'>
              Subscribe to our newsletter and get the latest furniture trends, exclusive offers,
              and interior design tips delivered straight to your inbox.
          </p>
        </div>
        <div className='max-w-3xl mx-auto'>
          <div className='bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl border border-white/30 p-8 lg:p-12'>
            <div className='text-center'>
              <div className='w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6'>
                <Mail className='text-primary' size={32} strokeWidth={2} />
              </div>
              <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                  Get 15% Off Your First Order
              </h3>
              <p className='text-gray-600 mb-8'>
                  Join our newsletter for exclusive deals and design inspiration.
              </p>
              <form className='space-y-6'>
                <div className='flex flex-col sm:flex-row gap-4 max-w-lg mx-auto'>
                  <input
                    placeholder='Enter your email address'
                    className='flex-1 px-4 py-4 border border-gray-300 rounded-xl focus:ring-2
                       focus:ring-primary focus:border-transparent outline-none transition-all duration-200 shadow-sm'
                  />
                  <Button
                    className='bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-xl
                  font-semibold transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl'
                    onClick={e => {
                      e.preventDefault()
                      toast.info('Feature not available in Demo Mode, please contact Developer for more info.')
                    }}
                  >
                    Subscribe
                    <ArrowRight />
                  </Button>
                </div>
                <p className='text-sm text-gray-500 max-w-md mx-auto'>
                    No spam, unsubscribe at any time. By subscribing you agree to our Privacy Policy.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default NewsLetter
