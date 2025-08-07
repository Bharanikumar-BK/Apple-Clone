import { useParams } from "react-router-dom";
import { products } from "../Components/products";


const ProductDetail = ({ addToCart }) => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-8">
      <div className="bg-gray-100 rounded-lg p-8 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="max-h-96 object-contain"
        />
      </div>
      <div>
        <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
        <p className="text-xl text-gray-600 mb-6">{product.description}</p>
        <div className="text-2xl font-semibold mb-6">${product.price}</div>
        <button
          onClick={() => addToCart(product)}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full transition-colors"
        >
          Add to Bag
        </button>
        <div className="mt-8 pt-8 border-t border-gray-200">
          <h2 className="text-xl font-semibold mb-4">Details</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;