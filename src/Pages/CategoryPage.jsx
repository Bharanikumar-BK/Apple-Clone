import { useParams } from "react-router-dom";
import ProductGrid from "../Components/ProductGrid";
import { products } from "../Components/products";

const CategoryPage = ({ addToCart }) => {
  const { category } = useParams();
  
  const categoryProducts = products.filter(
    (product) => product.category === category.toLowerCase()
  );

  const categoryTitles = {
    mac: "Mac",
    ipad: "iPad",
    iphone: "iPhone",
    watch: "Watch",
    airpods: "AirPods",
    "tv-home": "TV & Home",
    accessories: "Accessories"
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">{categoryTitles[category] || category}</h1>
      <ProductGrid products={categoryProducts} addToCart={addToCart} />
    </div>
  );
};

export default CategoryPage;