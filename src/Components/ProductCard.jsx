import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function ProductCard({ product, addToCart }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all"
    >
      <Link to={`/product/${product.id}`}>
    <div className="h-64 bg-gray-100 flex items-center justify-center p-4 relative overflow-hidden">
  <img
    src={product.image}
    alt={product.title}
    className="h-full w-full object-contain p-4"
  />
  {product.isNew && (
    <span className="absolute top-2 right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded">
      New
    </span>
  )}
</div>
      </Link>
      <div className="p-6">
        <Link to={`/product/${product.id}`}>
          <h3 className="text-xl font-semibold mb-2 hover:text-blue-500 transition-colors">
            {product.title}
          </h3>
          <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
        </Link>
        <div className="flex justify-between items-center">
          <span className="text-lg font-medium">${product.price}</span>
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => addToCart(product)}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full transition-colors"
          >
            Add to Cart
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

export default ProductCard;