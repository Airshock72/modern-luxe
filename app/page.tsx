import Banner from '@/app/components/Banner'
import Collection from '@/app/components/Collection'
import Growth from '@/app/components/Growth/Growth'
import InteriorDesign from '@/app/components/InteriorDesign/InteriorDesign'
import Testimonials from '@/app/components/Testimonial/Testimonials'
import NewsLetter from '@/app/components/NewsLetter'

const Home = () => {
  return (
    <>
      <Banner />
      <Collection />
      <Growth />
      <InteriorDesign />
      <Testimonials />
      <NewsLetter />
    </>
  )
}

export default Home
