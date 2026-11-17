
import { Link } from "react-router-dom";
import {
  FaCoffee,
  FaHeart,
  FaLeaf,
  FaAward,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

function About() {
  const values = [
    {
      icon: <FaCoffee />,
      title: "Quality Coffee",
      description:
        "We serve carefully prepared coffee using quality beans and fresh ingredients.",
    },
    {
      icon: <FaHeart />,
      title: "Made With Love",
      description:
        "Every cup and every dish is prepared with passion and attention to detail.",
    },
    {
      icon: <FaLeaf />,
      title: "Fresh Ingredients",
      description:
        "We believe fresh ingredients make every meal more delicious and special.",
    },
  ];

  return (
    <div className="bg-[#F7F3EB] text-[#3B261B]">

      {/* HERO SECTION */}
      <section className="relative bg-[#3B261B] text-white py-24 px-5 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <p className="text-[#B5C29F] uppercase tracking-[4px] text-sm font-semibold">
            Get To Know Us
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mt-6">
            Our Story,
            <span className="block text-[#B5C29F] italic mt-2">
              Your Happy Place.
            </span>
          </h1>

          <p className="text-[#D8CBBB] max-w-2xl mx-auto mt-7 leading-8">
            More than just a café, we are a place where good coffee,
            delicious food and beautiful memories come together.
          </p>

          <div className="flex justify-center mt-9">
            <Link
              to="/menu"
              className="bg-[#78866B] hover:bg-[#647456] px-8 py-4 rounded-full flex items-center gap-3 transition"
            >
              Explore Our Menu <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-14 items-center">

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=900"
              alt="Beautiful cozy cafe interior"
              className="w-full h-[450px] object-cover rounded-3xl shadow-lg"
            />

            <div className="absolute -bottom-7 -right-2 md:-right-7 bg-[#78866B] text-white p-6 md:p-8 rounded-2xl">
              <FaCoffee className="text-3xl mb-2" />
              <h3 className="text-2xl font-bold">Coffee</h3>
              <p className="text-sm text-[#E8EEDF]">Made With Passion</p>
            </div>
          </div>

          <div className="mt-6 md:mt-0">
            <p className="text-[#78866B] uppercase tracking-[3px] text-sm font-bold">
              Who We Are
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mt-5 leading-tight">
              A Story Brewed With
              <span className="text-[#78866B] italic"> Passion.</span>
            </h2>

            <p className="text-[#806F60] mt-6 leading-8">
              The Cozy Café was created with one simple idea:
              to bring people together over great coffee and delicious food.
              We believe that the best moments are often the simplest ones.
            </p>

            <p className="text-[#806F60] mt-4 leading-8">
              Whether you are meeting friends, working on your next big idea,
              or simply taking a break, we want every visit to feel special.
            </p>

            <div className="mt-7 space-y-4">
              {[
                "Freshly prepared food and drinks",
                "Warm and welcoming atmosphere",
                "Quality ingredients and great taste",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <FaCheckCircle className="text-[#78866B]" />
                  <span className="text-[#5B4638]">{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* OUR PHILOSOPHY */}
      <section className="bg-[#EAE1D2] py-20 px-5 md:px-8">
        <div className="max-w-7xl mx-auto">

          <div className="text-center max-w-2xl mx-auto">
            <p className="text-[#78866B] uppercase tracking-[3px] text-sm font-bold">
              What We Believe
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mt-5">
              Our <span className="text-[#78866B] italic">Philosophy</span>
            </h2>

            <p className="text-[#806F60] mt-5 leading-8">
              We believe good food, great coffee and genuine hospitality
              can turn an ordinary day into something beautiful.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-14">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-[#F7F3EB] rounded-3xl p-9 text-center hover:-translate-y-2 transition duration-300 shadow-sm hover:shadow-lg"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-[#78866B] text-white flex items-center justify-center text-2xl">
                  {value.icon}
                </div>

                <h3 className="text-xl font-bold mt-6">
                  {value.title}
                </h3>

                <p className="text-[#806F60] mt-4 leading-7">
                  {value.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* OUR PLACE */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div>
            <p className="text-[#78866B] uppercase tracking-[3px] text-sm font-bold">
              More Than Coffee
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mt-5 leading-tight">
              Your Space To
              <span className="text-[#78866B] italic"> Relax.</span>
            </h2>

            <p className="text-[#806F60] mt-6 leading-8">
              A cozy corner, a warm cup of coffee and the perfect
              atmosphere to enjoy your day. We want our café to be
              your favorite little escape from the everyday rush.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-3 mt-8 bg-[#78866B] hover:bg-[#647456] text-white px-7 py-4 rounded-full transition"
            >
              Find Us <FaArrowRight />
            </Link>
          </div>

          <img
            src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=900"
            alt="Warm and welcoming cafe atmosphere"
            className="w-full h-[400px] object-cover rounded-3xl"
          />

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#3B261B] text-white py-20 px-5 text-center">
        <FaAward className="text-4xl text-[#B5C29F] mx-auto" />

        <h2 className="text-4xl md:text-5xl font-bold mt-6">
          Come For The Coffee,
          <span className="block text-[#B5C29F] italic mt-2">
            Stay For The Moments.
          </span>
        </h2>

        <p className="text-[#D8CBBB] mt-5">
          We would love to welcome you to The Cozy Café.
        </p>

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

export default About;
