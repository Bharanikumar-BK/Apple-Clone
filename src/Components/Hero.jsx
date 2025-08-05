import airpods from "../assets/airpods.png";
import Background from "../assets/Background.jpg";

const Product = () => {
  return (
    <section
      className="flex flex-col items-center relative bg-cover bg-center bg-no-repeat min-h-screen"
      style={{
        backgroundImage: `url(${Background})`,
      }}
    >
      {/* Bubble 1 */}
      <div className="relative bg-[#0071e3] text-white text-3xl font-bold px-6 py-6 rounded-[2rem] w-fit leading-snug text-center  mt-2">
        {/* <span className="absolute -top-6 -right-10 text-6xl">💻</span>
        <span className="absolute top-8 -right-6 text-6xl">🫱🏽</span> */}
        Buy Mac
        <br />
        or iPad
        <br />
        for college
      </div>

      {/* Bubble 2 */}
      <div className="mt-2 bg-[#0077ED] text-white text-sm font-medium px-4 py-2 rounded-[1.5rem] w-fit">
        with education savings
      </div>

      {/* Bubble 3 */}
      <div className="relative mt-4 bg-[#0071e3] text-white text-3xl font-bold px-6 py-6 rounded-[2rem] w-fit leading-snug text-center">
        {/* <span className="absolute -left-6 -top-6 text-4xl">👨‍🎓</span> */}
        Choose
        <br />
        AirPods or
        <br />
        an eligible
        <br />
        accessory<sup className="text-xs align-super">1</sup>
      </div>

      {/* Shop Button */}
      <button className="mt-4 border border-[#0071e3] text-[#0071e3] px-6 py-2 rounded-full hover:bg-blue-50 transition">
        Shop
      </button>

      {/* AirPods Image */}
      <img src={airpods} alt="AirPods" className="mt-6 w-24" />
    </section>
  );
};

export default Product;
