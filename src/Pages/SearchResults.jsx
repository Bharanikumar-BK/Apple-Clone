import ProductGrid from "../Components/ProductGrid";

const SearchResults = ({ products, addToCart, searchQuery }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">
        Search Results for "{searchQuery}"
      </h1>
      {products.length > 0 ? (
        <ProductGrid products={products} addToCart={addToCart} />
      ) : (
        <div className="text-center py-12">
          <p className="text-xl">No products found matching your search.</p>
        </div>
      )}
    </div>
  );
};

export default SearchResults;