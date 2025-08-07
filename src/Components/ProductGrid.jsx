import ProductCard from "./ProductCard";

const ProductGrid = ({ products, cols = 3, addToCart }) => {
  const gridClasses = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4'
  };

  return (
    <div className={`grid grid-cols-1 ${gridClasses[cols] || 'md:grid-cols-2 lg:grid-cols-3'} gap-8`}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductGrid;