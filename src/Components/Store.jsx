import { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { motion } from 'framer-motion';
import ProductGrid from '../Components/ProductGrid';

// Import all your product images
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

// Define all products with proper categories
const allProducts = [
  {
    id: 1,
    title: 'MacBook Air 15"',
    description: "Impressively big. Impossibly thin.",
    price: 1299,
    image: macbook15,
    category: "Mac"
  },
  {
    id: 2,
    title: "iPad Pro",
    description: "Supercharged by M2",
    price: 799,
    image: ipad,
    category: "iPad"
  },
  {
    id: 3,
    title: "Apple Watch Series 9",
    description: "Smarter. Brighter. Mightier.",
    price: 399,
    image: applewatch,
    category: "Watch"
  },
  {
    id: 4,
    title: "iPhone 15 Pro",
    description: "Titanium. So strong. So light. So Pro.",
    price: 999,
    image: iphone15pro,
    category: "iPhone"
  },
  {
    id: 5,
    title: "MacBook Pro 14",
    description: "Mind-blowing. Head-turning.",
    price: 1999,
    image: macbook15,
    category: "Mac"
  },
  {
    id: 6,
    title: "iPad Air",
    description: "Light. Bright. Full of might.",
    price: 599,
    image: ipad,
    category: "iPad"
  },
  {
    id: 7,
    title: "Apple Watch Ultra",
    description: "Next-level adventure.",
    price: 799,
    image: applewatch,
    category: "Watch"
  },
  {
    id: 8,
    title: "iPhone 15",
    description: "New camera. New design. Newphoria.",
    price: 799,
    image: iphone15pro,
    category: "iPhone"
  },
  {
    id: 9,
    title: 'AirPods Pro',
    description: 'Active Noise Cancellation for immersive sound.',
    price: 249,
    image: airpodsPro,
    category: 'AirPods'
  },
  {
    id: 10,
    title: 'AirPods Max',
    description: 'A perfect balance of exhilarating high-fidelity audio.',
    price: 549,
    image: airpodsMax,
    category: 'AirPods'
  },
  {
    id: 11,
    title: 'Apple TV 4K',
    description: 'A higher definition of TV.',
    price: 129,
    image: appletv,
    category: 'TV & Home'
  },
  {
    id: 12,
    title: 'HomePod mini',
    description: 'Room-filling sound in five colors.',
    price: 99,
    image: homepod,
    category: 'TV & Home'
  },
  {
    id: 13,
    title: 'MagSafe Charger',
    description: 'Snap on. Charge up.',
    price: 39,
    image: magsafe,
    category: 'Accessories'
  },
  {
    id: 14,
    title: 'Apple Pencil',
    description: 'Dream it up. Jot it down.',
    price: 129,
    image: pencil,
    category: 'Accessories'
  }
];

const Store = ({ addToCart }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const categories = ['All', 'Mac', 'iPhone', 'iPad', 'Watch', 'AirPods', 'TV & Home', 'Accessories'];

  // Filter products based on active category
  const filteredProducts = activeCategory === 'All' 
    ? allProducts 
    : allProducts.filter(product => product.category === activeCategory);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* ... (keep your existing header and carousel code) ... */}
      
      {/* Categories Navigation */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="flex justify-center gap-2 mb-12 overflow-x-auto py-4 sticky top-0 bg-white z-10"
      >
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-2 rounded-full transition-all ${
              activeCategory === category 
                ? 'bg-black text-white' 
                : 'bg-gray-100 hover:bg-gray-200'
            } whitespace-nowrap`}
          >
            {category}
          </button>
        ))}
      </motion.div>

      {/* Products Grid */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-8">
          {activeCategory === 'All' ? 'All Products' : activeCategory}
        </h2>
        <ProductGrid 
          products={filteredProducts} 
          addToCart={addToCart} 
          cols={4}
        />
      </motion.section>

      {/* ... (rest of your existing code) ... */}
    </div>
  );
};

export default Store;