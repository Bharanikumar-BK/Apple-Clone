function PromoSection() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Apple TV+</h2>
        <p className="text-xl mb-8">
          Get 3 months of Apple TV+ free when you buy an Apple device.
        </p>
        <div className="flex justify-center gap-4">
          <a href="#" className="text-blue-500 hover:underline text-lg">
            Try it free &gt;
          </a>
          <a href="#" className="text-blue-500 hover:underline text-lg">
            Learn more &gt;
          </a>
        </div>
      </div>
    </section>
  );
}
export default PromoSection;
