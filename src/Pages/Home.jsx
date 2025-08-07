import { motion } from "framer-motion";
import Hero from "../Components/Hero";
import ProductGrid from "../Components/ProductGrid";
import PromoSection from "../Components/PromoSection";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import iphone15pro from '../assets/iphone15pro.jpg';
import macbook from '../assets/macbook15.jpg';
import watch from '../assets/applewatch.jpg';
import airpods from "../assets/airpods.png";
import pencil from "../assets/pencil.jpg";
import magsafe from "../assets/magsafe.jpg";

const Home = ({ products, addToCart }) => {
  const heroData = {
    title: "iPhone 15 Pro",
    subtitle: "Titanium. So strong. So light. So Pro.",
    bgImage: iphone15pro,
    dark: true,
  };

  // Remove duplicate Apple TV+
  const featuredProducts = products.filter(p => p.title !== "Apple TV+").slice(0, 4);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const categories = [
    {
      name: "Mac",
      image: macbook,
      description: "Powerful. Portable. Perfect."
    },
    {
      name: "iPhone",
      image: iphone15pro,
      description: "Our most advanced cameras."
    },
    {
      name: "Watch",
      image: watch,
      description: "A healthy leap ahead."
    }
  ];

  const accessories = [
    {
      name: "AirPods",
      image: airpods,
    },
    {
      name: "Apple Pencil",
      image: pencil,
    },
    {
      name: "MagSafe",
      image: magsafe,
    },
  ];

  return (
    <>
      <Hero {...heroData} />

      {/* Featured Products */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 py-16"
      >
        <h2 className="text-3xl font-bold text-center mb-12">
          The latest. Take a look at what's new, right now.
        </h2>
        <ProductGrid
          products={featuredProducts}
          addToCart={addToCart}
          cols={4}
        />
      </motion.section>

      {/* Categories Carousel */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <Slider {...settings} className="max-w-7xl mx-auto">
          {categories.map((category, index) => (
            <div key={index} className="px-4">
              <div
                className="h-96 rounded-xl overflow-hidden relative"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${category.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="absolute bottom-8 left-8 text-white">
                  <h3 className="text-4xl font-bold mb-2">{category.name}</h3>
                  <p className="text-xl mb-4">{category.description}</p>
                  <button className="bg-white text-black px-6 py-2 rounded-full hover:bg-opacity-90 transition">
                    Shop now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </motion.section>

      {/* ✅ Only One Apple TV+ Promo */}
      <PromoSection />

      {/* Accessories Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 py-16"
      >
        <h2 className="text-3xl font-bold text-center mb-12">
          Accessories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {accessories.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all text-center"
            >
              <div className="h-48 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-32 object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
              <p className="text-gray-600 mb-4">Perfect match for your Apple devices</p>
              <button className="text-blue-500 hover:underline">Shop {item.name}</button>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </>
  );
};

export default Home;
