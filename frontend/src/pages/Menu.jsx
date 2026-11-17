
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaShoppingBag,
  FaStar,
} from "react-icons/fa";

function Menu() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Breakfast", "Lunch", "Drinks", "Desserts"];

  const menuItems = [
    {
      id: 1,
      name: "Classic Pancakes",
      category: "Breakfast",
      price: 149,
      description: "Fluffy pancakes served with fresh fruits and honey.",
      image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=600",
      popular: true,
    },
    {
      id: 2,
      name: "Fresh Sandwich",
      category: "Breakfast",
      price: 99,
      description: "Fresh vegetables, cheese and delicious sauces.",
      image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600",
      popular: false,
    },
    {
      id: 3,
      name: "Classic Burger",
      category: "Lunch",
      price: 179,
      description: "Juicy burger with fresh lettuce and special sauce.",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600",
      popular: true,
    },
    {
      id: 4,
      name: "Italian Pasta",
      category: "Lunch",
      price: 199,
      description: "Creamy pasta prepared with fresh herbs and cheese.",
      image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=600",
      popular: false,
    },
    {
      id: 5,
      name: "Cappuccino",
      category: "Drinks",
      price: 129,
      description: "Rich espresso topped with smooth steamed milk.",
      image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=600",
      popular: true,
    },
    {
      id: 6,
      name: "Cold Coffee",
      category: "Drinks",
      price: 149,
      description: "Chilled creamy coffee with a refreshing taste.",
      image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600",
      popular: false,
    },
    {
      id: 7,
      name: "Chocolate Brownie",
      category: "Desserts",
      price: 119,
      description: "Rich chocolate brownie with a soft center.",
      image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600",
      popular: true,
    },
    {
      id: 8,
      name: "Chocolate Cake",
      category: "Desserts",
      price: 149,
      description: "Delicious chocolate cake for your sweet cravings.",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600",
      popular: false,
    },
  ];

  const filteredItems =
    activeCategory === "All"
      ? menuItems
      : menuItems.filter(
          (item) => item.category === activeCategory
        );

  return (
    <div className="bg-[#F7F3EB] text-[#3B261B]">

      {/* HERO SECTION */}
      <section className="bg-[#3B261B] text-white py-24 px-5">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[#B5C29F] uppercase tracking-[4px] text-sm font-semibold">
            Taste Something Special
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mt-6">
            Our Delicious
            <span className="block text-[#B5C29F] italic mt-2">
              Menu.
            </span>
          </h1>

          <p className="text-[#D8CBBB] max-w-2xl mx-auto mt-7 leading-8">
            From freshly brewed coffee to delicious meals and
            sweet treats, discover something you'll love.
          </p>
        </div>
      </section>

      {/* CATEGORY FILTER */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 pt-16">
        <div className="text-center">
          <p className="text-[#78866B] uppercase tracking-[3px] text-sm font-bold">
            Explore Our Collection
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Our <span className="text-[#78866B] italic">Favorites</span>
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mt-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition duration-300 ${
                activeCategory === category
                  ? "bg-[#78866B] text-white"
                  : "bg-[#EAE1D2] text-[#5B4638] hover:bg-[#D8CBBB]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* MENU CARDS */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">

          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
                />

                {item.popular && (
                  <span className="absolute top-4 left-4 bg-[#78866B] text-white px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-2">
                    <FaStar /> Popular
                  </span>
                )}
              </div>

              <div className="p-5">
                <p className="text-[#78866B] text-xs uppercase tracking-wider font-semibold">
                  {item.category}
                </p>

                <h3 className="text-xl font-bold mt-2">
                  {item.name}
                </h3>

                <p className="text-[#806F60] text-sm leading-6 mt-3 min-h-[48px]">
                  {item.description}
                </p>

                <div className="flex items-center justify-between mt-5 pt-4 border-t border-[#EAE1D2]">
                  <span className="text-xl font-bold text-[#78866B]">
                    ₹{item.price}
                  </span>

                  <Link
                    to="/contact"
                    className="w-10 h-10 rounded-full bg-[#3B261B] text-white flex items-center justify-center hover:bg-[#78866B] transition"
                    aria-label={`Enquire about ${item.name}`}
                  >
                    <FaShoppingBag />
                  </Link>
                </div>
              </div>
            </div>
          ))}

        </div>

        {filteredItems.length === 0 && (
          <p className="text-center py-16 text-[#806F60]">
            No items available.
          </p>
        )}
      </section>

      {/* SPECIAL OFFER */}
      <section className="bg-[#EAE1D2] px-5 md:px-8 py-16">
        <div className="max-w-7xl mx-auto bg-[#78866B] rounded-3xl p-10 md:p-16 text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="uppercase tracking-[3px] text-sm text-[#E8EEDF]">
              A Little Something Special
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mt-5">
              Coffee & Sweet Treats
            </h2>

            <p className="mt-4 text-[#E8EEDF]">
              Enjoy your favorite coffee with something delicious.
            </p>
          </div>

          <Link
            to="/contact"
            className="shrink-0 bg-[#F7F3EB] text-[#3B261B] px-8 py-4 rounded-full flex items-center gap-3 font-semibold hover:bg-white transition"
          >
            Visit Our Café <FaArrowRight />
          </Link>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#3B261B] text-white text-center py-20 px-5">
        <p className="text-[#B5C29F] uppercase tracking-[3px] text-sm">
          Made Fresh For You
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mt-5">
          Good Food. Good Coffee.
          <span className="block text-[#B5C29F] italic mt-2">
            Good Times.
          </span>
        </h2>

        <Link
          to="/contact"
          className="inline-flex items-center gap-3 bg-[#78866B] hover:bg-[#647456] px-8 py-4 rounded-full mt-8 transition"
        >
          Contact Us <FaArrowRight />
        </Link>
      </section>

    </div>
  );
}

export default Menu;
