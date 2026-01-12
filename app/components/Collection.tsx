import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Handbag, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Collection = () => {
  const ProductCollection: ProductCollectionData[] = [
    {
      id: 1,
      name: 'Luxury Office Chair',
      price: 299.99,
      originalPrice: 399.99,
      image: '/modern-luxe/assets/chair.jpg',
      colors: [
        { name: 'Midnight Black', color: '#1a1a1a' },
        { name: 'Charcoal Gray', color: '#4a4a4a' },
        { name: 'Ocean Blue', color: '#2563eb' },
        { name: 'Forest Green', color: '#059669' }
      ],
      rating: 4.8,
      badge: 'Best Sale',
      category: 'Chairs'
    },
    {
      id: 2,
      name: 'Modern Dining Chair',
      price: 159.99,
      originalPrice: 199.99,
      image: '/modern-luxe/assets/chair2.jpg',
      colors: [
        { name: 'Pure White', color: '#ffffff' },
        { name: 'Warm Beige', color: '#f5f5dc' },
        { name: 'Soft Gray', color: '#d1d5db' }
      ],
      rating: 4.6,
      badge: 'New',
      category: 'Chairs'
    },
    {
      id: 3,
      name: 'Designer Table Lamp',
      price: 89.99,
      originalPrice: 129.99,
      image: '/modern-luxe/assets/lamp.jpg',
      colors: [
        { name: 'Gold Brass', color: '#d4af37' },
        { name: 'Rose Gold', color: '#e8b4a6' },
        { name: 'Silver Chrome', color: '#c0c0c0' },
        { name: 'Matte Black', color: '#2d2d2d' },
        { name: 'Copper Bronze', color: '#b87333' }
      ],
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
      colors: [
        { name: 'Classic Black', color: '#000000' },
        { name: 'Nordic White', color: '#fafafa' }
      ],
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
      colors: [
        { name: 'Royal Navy', color: '#1e3a8a' },
        { name: 'Emerald Green', color: '#10b981' },
        { name: 'Burgundy Red', color: '#991b1b' },
        { name: 'Chocolate Brown', color: '#78350f' },
        { name: 'Pearl Gray', color: '#9ca3af' },
        { name: 'Cream White', color: '#fef3c7' }
      ],
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
      colors: [
        { name: 'Natural Wood', color: '#deb887' },
        { name: 'Ebony Black', color: '#1c1c1c' },
        { name: 'Ash Gray', color: '#6b7280' }
      ],
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
                className='w-full object-cover group-hover:scale-105 transition-transform duration-300'
              />

              <div className='absolute top-4 left-4'>
                <Badge className={`${getBadgeColor(product.badge)} flex items-center gap-1 px-3 py-1 text-xs font-medium rounded-md`}>
                  {product.badge}
                </Badge>
              </div>

              <div className='absolute top-4 right-4'>
                <div className='bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-sm border border-gray-200'>
                  <div className='text-xs text-gray-600 mb-1 text-center'>
                    {product.colors.length} Colors
                  </div>
                  <div className='flex gap-1'>
                    {product.colors.slice(0, 3).map((colorItem, index) => (
                      <div
                        key={index}
                        className='w-4 h-4 rounded-full border-2 border-white shadow-sm hover:scale-110 transition-transform duration-200'
                        style={{ backgroundColor: colorItem.color }}
                        title={colorItem.name}
                      />
                    ))}
                    {product.colors.length > 3 && (
                      <div className='w-4 h-4 rounded-full bg-gray-200 border-2 border-white shadow-sm flex items-center justify-center'>
                        <span className='text-[8px] font-medium text-gray-600'>
                            +{product.colors.length - 3}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

            </div>
            <div className='p-6'>
              <div className='flex items-center justify-between mb-3'>
                <div className='flex items-center gap-1'>
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
                <p className='text-xs text-gray-500 uppercase tracking-wider font-medium'>{product.category}</p>
              </div>

              <h3 className='text-xl font-semibold text-primary mb-2 group-hover:text-gray-900 transition-colors duration-200'>
                {product.name}
              </h3>

              <div className='mb-4'>
                <p className='text-sm text-gray-700 mb-2 font-medium'>
                  Available Colors
                </p>
                <div className='flex gap-2'>
                  {product.colors.slice(0, 5).map((colorItem, index) => (
                    <div
                      key={index}
                      className='group/color relative'
                    >
                      <div
                        className='w-8 h-8 rounded-full border-2 border-gray-200 hover:border-gray-400 shadow-sm hover:shadow-md
                          transition-all duration-200 cursor-pointer'
                        style={{ backgroundColor: colorItem.color }}
                        title={colorItem.name}
                      />
                    </div>
                  ))}
                  {product.colors.length > 5 && (
                    <div className='w-8 h-8 rounded-full bg-gray-100 border-2 border-gray-200 flex items-center justify-center text-xs text-gray-600 font-medium'>
                        +{product.colors.length - 5}
                    </div>
                  )}
                </div>
              </div>

              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                  <span className='text-2xl font-bold text-gray-800'>
                    ${product.price}
                  </span>
                  <span className='text-lg text-gray-400 line-through'>
                    ${product.originalPrice}
                  </span>
                </div>

                <button className='bg-gray-100 hover:text-primary p-3 rounded-full transition-colors duration-200
                cursor-pointer hover:scale-105 hover:shadow-sm hover:shadow-primary/40 hover:transition-all hover:duration-500'>
                  <Handbag size={25} />
                </button>
              </div>

              <div className='space-y-3'>
                <div className='inline-flex items-center'>
                  <span className='bg-green-50 text-green-700 text-sm font-medium px-3 py-1 rounded-full border border-green-200'>
                Save{' '}
                    {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                  </span>
                </div>
                <div className='flex items-center justify-between text-xs text-gray-500'>
                  <span className='flex items-center gap-1'>
                    <div className='w-1.5 h-1.5 bg-green-500 rounded-full' />
                  Free Shipping
                  </span>
                  <span className='flex items-center gap-1'>
                    <div className='w-1.5 h-1.5 bg-blue-500 rounded-full' />
                  30-Day Return
                  </span>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
      <div className='text-center'>
        <Button className='px-6 h-12 font-normal tracking-wide'>
          View All Products
        </Button>
      </div>
    </div>
  )
}
export default Collection
