import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = ({ title, subtitle, bgImage, dark }) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative bg-cover bg-center bg-no-repeat min-h-screen flex flex-col items-center justify-center text-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bgImage})`,
      }}
    >
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className={`max-w-3xl px-4 ${dark ? 'text-white' : 'text-black'}`}
      >
        <h1 className="text-5xl font-bold mb-4">{title}</h1>
        <p className="text-2xl mb-8">{subtitle}</p>
        <div className="flex justify-center gap-6">
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link
              to="/store"
              className="text-blue-500 hover:text-blue-400 text-lg px-6 py-2 border border-blue-500 rounded-full transition-colors"
            >
              Learn more
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link
              to="/store"
              className="bg-blue-500 hover:bg-blue-600 text-white text-lg px-6 py-2 rounded-full transition-colors"
            >
              Buy
            </Link>
          </motion.div>
        </div>
      </motion.div>
      
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </motion.section>
  );
};

export default Hero;