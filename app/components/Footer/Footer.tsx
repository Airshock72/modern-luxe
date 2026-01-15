import FooterLinks from '@/app/components/Footer/FooterLinks'
import FooterSubscribe from '@/app/components/Footer/FooterSubscribe'
import FooterSocialsAndPrivatePolicy from '@/app/components/Footer/FooterSocialsAndPrivatePolicy'

const Footer = () => {
  return (
    <div className='bg-[#1E2B3A] text-white pt-20'>
      <div className='container mx-auto px-10 py-16'>
        <FooterLinks />
        <hr className='opacity-10' />
        <FooterSubscribe />
        <hr className='opacity-10' />
        <FooterSocialsAndPrivatePolicy />
      </div>
    </div>
  )
}
export default Footer
