import { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { motion } from 'framer-motion';
import ProductGrid from '../Components/ProductGrid';

// Import all product images
import macbook15 from '../assets/macbook15.jpg';
import ipad from '../assets/ipad.jpg';
import applewatch from '../assets/applewatch.jpg';
import iphone15pro from '../assets/iphone15pro.jpg';
import airpodsPro from '../assets/airpodsPro.jpg';
import airpodsMax from '../assets/airpodsMax.jpg';
import appletv from '../assets/appletv.jpg';
import homepod from '../assets/homepod.jpg';
import magsafe from '../assets/magsafe.jpg';
import pencil from '../assets/pencil.jpg';


// All products data
const allProducts = [
  {
    id: 1,
    title: 'MacBook Air 15"',
    description: "Impressively big. Impossibly thin.",
    price: 1299,
    image: macbook15,
    category: "Mac",
    isNew: true
  },
  {
    id: 2,
    title: "iPad Pro",
    description: "Supercharged by M2",
    price: 799,
    image: ipad,
    category: "iPad",
    isNew: false
  },
  {
    id: 3,
    title: "Apple Watch Series 9",
    description: "Smarter. Brighter. Mightier.",
    price: 399,
    image: applewatch,
    category: "Watch",
    isNew: true
  },
  {
    id: 4,
    title: "iPhone 15 Pro",
    description: "Titanium. So strong. So light. So Pro.",
    price: 999,
    image: iphone15pro,
    category: "iPhone",
    isNew: true
  },
  {
    id: 5,
    title: "MacBook Pro 14",
    description: "Mind-blowing. Head-turning.",
    price: 1999,
    image: macbook15,
    category: "Mac",
    isNew: false
  },
  {
    id: 6,
    title: "iPad Air",
    description: "Light. Bright. Full of might.",
    price: 599,
    image: ipad,
    category: "iPad",
    isNew: false
  },
  {
    id: 7,
    title: "Apple Watch Ultra",
    description: "Next-level adventure.",
    price: 799,
    image: applewatch,
    category: "Watch",
    isNew: false
  },
  {
    id: 8,
    title: "iPhone 15",
    description: "New camera. New design. Newphoria.",
    price: 799,
    image: iphone15pro,
    category: "iPhone",
    isNew: false
  },
  {
    id: 9,
    title: 'AirPods Pro',
    description: 'Active Noise Cancellation for immersive sound.',
    price: 249,
    image: airpodsPro,
    category: 'AirPods',
    isNew: false
  },
  {
    id: 10,
    title: 'AirPods Max',
    description: 'A perfect balance of exhilarating high-fidelity audio.',
    price: 549,
    image: airpodsMax,
    category: 'AirPods',
    isNew: true
  },
  {
    id: 11,
    title: 'Apple TV 4K',
    description: 'A higher definition of TV.',
    price: 129,
    image: appletv,
    category: 'TV & Home',
    isNew: false
  },
  {
    id: 12,
    title: 'HomePod mini',
    description: 'Room-filling sound in five colors.',
    price: 99,
    image: homepod,
    category: 'TV & Home',
    isNew: false
  },
  {
    id: 13,
    title: 'MagSafe Charger',
    description: 'Snap on. Charge up.',
    price: 39,
    image: magsafe,
    category: 'Accessories',
    isNew: false
  },
  {
    id: 14,
    title: 'Apple Pencil',
    description: 'Dream it up. Jot it down.',
    price: 129,
    image: pencil,
    category: 'Accessories',
    isNew: true
  }
];

const Store = ({ addToCart }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const categories = ['All', 'Mac', 'iPhone', 'iPad', 'Watch', 'AirPods', 'TV & Home', 'Accessories'];

  // Filter products based on active category
  const filteredProducts = activeCategory === 'All' 
    ? allProducts 
    : allProducts.filter(product => product.category === activeCategory);

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false
  };

  // Featured products for hero carousel
  const featuredProducts = [
    {
      id: 1,
      title: "New iPhone 15 Series",
      description: "Titanium. So strong. So light. So Pro.",
      image: iphone15pro,
      cta: "Shop now"
    },
    {
      id: 2,
      title: "MacBook Air 15\"",
      description: "Impressively big. Impossibly thin.",
      image: macbook15,
      cta: "Discover"
    },
    {
      id: 3,
      title: "Apple Watch Series 9",
      description: "Smarter. Brighter. Mightier.",
      image: applewatch,
      cta: "Explore"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Carousel */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        <Slider {...sliderSettings}>
          {featuredProducts.map((product) => (
            <div key={product.id}>
              <div 
                className="h-96 w-full bg-cover bg-center flex items-center justify-center"
                style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${product.image})` }}
              >
                <div className="text-center text-white max-w-2xl px-4">
                  <motion.h2 
                    initial={{ y: -20 }}
                    animate={{ y: 0 }}
                    className="text-4xl font-bold mb-4"
                  >
                    {product.title}
                  </motion.h2>
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl mb-6"
                  >
                    {product.description}
                  </motion.p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-black px-6 py-3 rounded-full text-lg font-medium"
                  >
                    {product.cta}
                  </motion.button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Categories Navigation */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex justify-center gap-2 mb-12 overflow-x-auto py-4 sticky top-0 bg-gray-50 z-10"
        >
          {categories.map(category => (
            <motion.button
              key={category}
              whileHover={{ y: -2 }}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full transition-all ${
                activeCategory === category 
                  ? 'bg-black text-white shadow-md' 
                  : 'bg-white hover:bg-gray-100 shadow-sm'
              } whitespace-nowrap font-medium`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8">
            {activeCategory === 'All' ? 'All Products' : activeCategory}
            {activeCategory !== 'All' && (
              <span className="text-lg font-normal text-gray-500 ml-2">
                ({filteredProducts.length} products)
              </span>
            )}
          </h2>
          
          {filteredProducts.length > 0 ? (
            <ProductGrid 
              products={filteredProducts} 
              addToCart={addToCart} 
              cols={4}
            />
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-gray-500">No products found in this category.</p>
            </div>
          )}
        </motion.section>

        {/* Services Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-xl shadow-sm p-8 mb-12"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Apple Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Apple Music",
                description: "Over 100 million songs. Start listening today.",
                icon: "🎵"
              },
              {
                title: "Apple TV+",
                description: "Original stories from the most creative minds in TV and film.",
                icon: "📺"
              },
              {
                title: "Apple Fitness+",
                description: "Fitness for all, powered by Apple Watch.",
                icon: "🏋️"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="p-6 border border-gray-200 rounded-lg text-center"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <button className="text-blue-500 hover:underline font-medium">
                  Learn more
                </button>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Store;