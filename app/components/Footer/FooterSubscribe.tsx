'use client'
import { toast } from 'sonner'

const FooterSubscribe = () => {
  return (
    <div className='border-t border-gray-800 pt-12 mb-12'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-center'>
        <div>
          <h3 className='text-2xl font-bold mb-4'>Stay in the Loop</h3>
          <p className='text-gray-300'>
              Subscribe to get special offers, free giveaways, and updates on new arrivals.
          </p>
        </div>
        <div className='flex flex-col sm:flex-row gap-4'>
          <input
            type='email'
            placeholder='Enter your email address'
            className='flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg
            text-white placeholder-gray-400 focus:ring-2 focus:ring-primary focus:border-transparent
             outline-none transition-all duration-200'
          />
          <button
            className='bg-primary hover:bg-primary/90 text-white px-8 py-3
            rounded-lg font-semibold transition-all duration-200 cursor-pointer'
            onClick={() => toast.info('Feature not available in Demo Mode, please contact Developer for more info.')}
          >
              Subscribe
          </button>
        </div>
      </div>
    </div>
  )
}
export default FooterSubscribe
