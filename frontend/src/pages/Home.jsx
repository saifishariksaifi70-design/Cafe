
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaStar,
  FaCoffee,
  FaLeaf,
  FaHeart,
} from "react-icons/fa";

function Home() {
  const popularItems = [
    {
      name: "Cappuccino",
      category: "Freshly Brewed Coffee",
      price: "₹129",
      image:
        "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=600",
    },
    {
      name: "Chocolate Brownie",
      category: "Sweet & Delicious",
      price: "₹119",
      image:
        "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600",
    },
    {
      name: "Fresh Sandwich",
      category: "Made With Love",
      price: "₹149",
      image:
        "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600",
    },
  ];

  return (
    <div className="bg-[#F7F3EB] text-[#3B261B]">

      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Hero Content */}
          <div>
            <span className="inline-flex items-center gap-2 bg-[#EAE1D2] text-[#78866B] px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase">
              <FaStar /> Welcome to The Cozy Café
            </span>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.12] mt-7">
              A Little
              <span className="block text-[#78866B] italic">
                Happiness
              </span>
              In Every Cup.
            </h1>

            <p className="text-[#806F60] text-base md:text-lg leading-8 mt-6 max-w-lg">
              Discover the perfect blend of freshly brewed coffee,
              delicious food and warm moments. Your favorite place
              to relax, refresh and reconnect.
            </p>

            <div className="flex flex-wrap gap-4 mt-9">
              <Link
                to="/menu"
                className="bg-[#78866B] hover:bg-[#647456] text-white px-7 py-4 rounded-full flex items-center gap-3 font-medium transition duration-300"
              >
                Explore Menu <FaArrowRight />
              </Link>

              <Link
                to="/about"
                className="border border-[#C7B9A6] hover:bg-[#EAE1D2] px-7 py-4 rounded-full font-medium transition duration-300"
              >
                Our Story
              </Link>
            </div>

            <div className="flex items-center gap-5 mt-12">
              <div>
                <h3 className="text-2xl font-bold">4.9/5</h3>
                <div className="flex text-[#D69B43] text-sm gap-1 mt-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar key={star} />
                  ))}
                </div>
              </div>

              <div className="w-px h-12 bg-[#D8CBBB]"></div>

              <p className="text-sm text-[#806F60]">
                Made with love,
                <br />
                Served with care.
              </p>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=1000"
              alt="Freshly brewed coffee in a cozy cafe"
              className="w-full h-[400px] md:h-[570px] object-cover rounded-[30px] shadow-xl"
            />

            <div className="absolute -bottom-6 -left-3 md:-left-8 bg-white p-5 md:p-6 rounded-2xl shadow-xl max-w-[230px]">
              <div className="flex items-center gap-3">
                <div className="bg-[#EAE1D2] p-3 rounded-full text-[#78866B]">
                  <FaCoffee size={23} />
                </div>
                <div>
                  <h3 className="font-bold">Fresh Coffee</h3>
                  <p className="text-xs text-[#806F60]">
                    Brewed with passion
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="bg-[#EAE1D2] py-20 px-5 md:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <img
            src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=900"
            alt="Cozy cafe interior"
            className="w-full h-[380px] object-cover rounded-3xl"
          />

          <div>
            <p className="text-[#78866B] uppercase tracking-[3px] text-sm font-semibold">
              A Place to Feel Good
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mt-5 leading-tight">
              More Than Just
              <span className="text-[#78866B] italic"> Coffee.</span>
            </h2>

            <p className="text-[#806F60] leading-8 mt-6">
              We believe that every cup tells a story. At The Cozy Café,
              we bring together great coffee, fresh ingredients and
              a welcoming atmosphere to make every visit special.
            </p>

            <Link
              to="/about"
              className="inline-flex items-center gap-3 mt-8 text-[#78866B] font-bold hover:gap-5 transition-all"
            >
              Discover Our Story <FaArrowRight />
            </Link>
          </div>

        </div>
      </section>

      {/* POPULAR MENU */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 py-20">
        <div className="text-center mb-12">
          <p className="text-[#78866B] uppercase tracking-[3px] text-sm font-semibold">
            Our Favorites
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Popular <span className="text-[#78866B] italic">Delights</span>
          </h2>

          <p className="text-[#806F60] mt-4">
            Taste something special from our carefully crafted menu.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {popularItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 group"
            >
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-6">
                <p className="text-[#78866B] text-sm">
                  {item.category}
                </p>

                <div className="flex items-center justify-between mt-2">
                  <h3 className="text-xl font-bold">{item.name}</h3>
                  <span className="text-[#78866B] font-bold text-lg">
                    {item.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/menu"
            className="inline-flex items-center gap-3 bg-[#3B261B] hover:bg-[#59402F] text-white px-8 py-4 rounded-full transition"
          >
            View Full Menu <FaArrowRight />
          </Link>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-[#3B261B] text-[#F7F3EB] py-20 px-5 md:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[#B5C29F] uppercase tracking-[3px] text-sm">
            Why Choose Us
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Made For Your Happy Moments
          </h2>

          <div className="grid md:grid-cols-3 gap-10 mt-14">
            <div>
              <FaCoffee className="text-4xl text-[#B5C29F] mx-auto" />
              <h3 className="text-xl font-bold mt-5">Fresh Coffee</h3>
              <p className="text-[#C9BBAE] mt-3 leading-7">
                Freshly brewed coffee made from carefully selected beans.
              </p>
            </div>

            <div>
              <FaLeaf className="text-4xl text-[#B5C29F] mx-auto" />
              <h3 className="text-xl font-bold mt-5">Fresh Ingredients</h3>
              <p className="text-[#C9BBAE] mt-3 leading-7">
                Quality ingredients and delicious food in every bite.
              </p>
            </div>

            <div>
              <FaHeart className="text-4xl text-[#B5C29F] mx-auto" />
              <h3 className="text-xl font-bold mt-5">Cozy Atmosphere</h3>
              <p className="text-[#C9BBAE] mt-3 leading-7">
                A comfortable place to enjoy every little moment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#EAE1D2] px-5 py-20 text-center">
        <p className="text-[#78866B] uppercase tracking-[3px] text-sm font-semibold">
          Your Table Is Waiting
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mt-5">
          Good Coffee. Good Mood.
          <span className="block text-[#78866B] italic mt-2">
            Great Memories.
          </span>
        </h2>

        <p className="text-[#806F60] mt-5">
          Come visit us and make your day a little more special.
        </p>

        <Link
          to="/contact"
          className="inline-flex items-center gap-3 bg-[#78866B] hover:bg-[#647456] text-white px-8 py-4 rounded-full mt-8 transition"
        >
          Visit Our Café <FaArrowRight />
        </Link>
      </section>

    </div>
  );
}

export default Home;
