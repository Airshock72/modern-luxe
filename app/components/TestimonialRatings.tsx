import { TestimonialRatingData } from '@/types'

const TestimonialRatings = () => {
  const testimonialRating: TestimonialRatingData[] = [
    {
      id: 1,
      number: 1000,
      icon: '+',
      title: 'Happy Customers'
    },
    {
      id: 2,
      number: 4.9,
      icon: '★',
      title: 'Average Rating'
    },
    {
      id: 3,
      number: 98,
      icon: '%',
      title: 'Customer Satisfaction'
    }
  ]

  return (
    <div className='mt-16 grid grid-cols-1 md:grid-cols-3 gap-8'>
      {testimonialRating.map((rating, index) => (
        <div
          key={`${rating.id}-${index}`}
          className='text-center py-16 bg-primary/5 rounded-2xl'
        >
          <div className='text-3xl font-bold text-gray-900 mb-2'>
            {rating.number} <span className='text-primary'>{rating.icon}</span>
          </div>
          <div className='text-gray-600'>{rating.title}</div>
        </div>
      ))}
    </div>
  )
}
export default TestimonialRatings
