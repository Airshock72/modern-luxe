import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { DollarSign, Handbag, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Collection = () => {
  //TODO EDIT this collection colors (2:32:43)
  const ProductCollection: ProductCollectionData[] = [
    {
      id: 2,
      name: 'Modern Dining Chair',
      price: 159.99,
      originalPrice: 199.99,
      image: '/modern-luxe/assets/chair2.jpg',
      colors: 2,
      rating: 4.7,
      badge: 'Sale',
      category: 'Lightning'
    },
    {
      id: 3,
      name: 'Designer Table Lamp',
      price: 89.99,
      originalPrice: 129.99,
      image: '/modern-luxe/assets/lamp.jpg',
      colors: 5,
      rating: 4.9,
      badge: 'Hot',
      category: 'Lightning'
    },
    {
      id: 4,
      name: 'Modern Floor Lamp',
      price: 199.99,
      originalPrice: 249.99,
      image: '/modern-luxe/assets/lamp2.jpg',
      colors: 2,
      rating: 4.7,
      badge: 'Sale',
      category: 'Lightning'
    },
    {
      id: 5,
      name: 'Premium Sofa Set',
      price: 1299.99,
      originalPrice: 1599.99,
      image: '/modern-luxe/assets/sofa.jpg',
      colors: 6,
      rating: 4.9,
      badge: 'Popular',
      category: 'Sofas'
    },
    {
      id: 6,
      name: 'Minimalist Stool',
      price: 79.99,
      originalPrice: 99.99,
      image: '/modern-luxe/assets/stool.jpg',
      colors: 3,
      rating: 4.5,
      badge: 'New',
      category: 'Stools'
    }
  ]

  const getBadgeColor = (badge: string) => {
    switch (badge) {
    case 'Best Sale': return 'bg-red-500 text-white'
    case 'New': return 'bg-green-500 text-white'
    case 'Hot': return 'bg-orange-500 text-white'
    case 'Sale': return 'bg-blue-500 text-white'
    case 'Popular': return 'bg-purple-500 text-white'
    default: return 'bg-gray-500 text-white'
    }
  }

  return (
    <div className='container mx-auto px-4 py-30'>
      <div className='text-center'>
        <h2 className='text-4xl lg:text-6xl font-semibold text-gray-800 mb-4'>
            Our <span className='text-primary'>Collection</span>
        </h2>
        <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
            Discover our carefully curated selection of premium furniture pieces
            designed to transform your living spaces.
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-20'>
        {ProductCollection.map(product => (
          <div
            key={product.id}
            className='group bg-white hover:bg-transparent rounded-xl shadow-sm hover:shadow-lg transition-all duration-300
             overflow-hidden border border-gray-100 hover:border-gray-200 cursor-pointer p-3'
          >
            <div className='relative overflow-hidden bg-gray-50'>
              <Image
                src={product.image}
                alt={product.name}
                width={400}
                height={300}
                className='w-full  object-cover group-hover:scale-105 transition-transform duration-300'
              />

              <div className='absolute top-4 left-4'>
                <Badge className={`${getBadgeColor(product.badge)} flex items-center gap-1 py-1`}>
                  <DollarSign size={16} />
                  {product.badge}
                </Badge>
              </div>

              <div className='absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium text-gray-700'>
                {product.colors} colors
              </div>

              <div className='absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300
                flex items-center justify-center'>
                <Button>
                  <Handbag size={18} />
                      Add to Cart
                </Button>
              </div>

            </div>
            <div className='p-6'>
              <div className='flex items-center gap-1 mb-2'>
                <div className='flex items-center'>
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={`${
                        i < Math.floor(product.rating)
                          ? 'text-yellow-500 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className='text-sm text-gray-600 ml-1'>
                      ({product.rating})
                </span>
              </div>

              <h3 className='text-xl font-semibold text-primary mb-2 group-hover:text-gray-900 transition-colors duration-200'>
                {product.name}
              </h3>

              <p className='text-sm text-gray-500 mb-3'>{product.category}</p>

              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                  <span className='text-2xl font-bold text-gray-800'>
                    ${product.price}
                  </span>
                  <span className='text-lg text-gray-400 line-through'>
                    ${product.originalPrice}
                  </span>
                </div>

                <button className='bg-gray-100 text-black hover:text-primary p-3
                rounded-full transition-colors duration-200 cursor-pointer'>
                  <Handbag size={25} />
                </button>
              </div>

              <div className='mt-3'>
                <span className='inline-block bg-green-100 text-green-800 text-sm font-medium px-2 py-1 rounded-full'>
                Save{' '}
                  {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                </span>
              </div>

            </div>
          </div>
        ))}
      </div>
      <div className='text-center'>
        <Button className='px-6 h-12'>View All Products</Button>
      </div>
    </div>
  )
}
export default Collection
