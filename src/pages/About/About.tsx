import { useEffect } from "react";
import { motion } from "framer-motion";
import { FaLeaf, FaLightbulb, FaEnvelope } from "react-icons/fa";
import { IoCodeWorkingSharp } from "react-icons/io5";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-stone-100">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24"
      >
        {/* Hero Section */}
        <div className="text-center md:mb-44 mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="md:text-sm text-xs uppercase tracking-wider text-stone-600 mb-3"
          >
            Welcome to Our World
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-bold text-stone-800 mb-6"
          >
            Crafting Stories Through Stationery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="sm:text-lg text-sm md:text-xl text-stone-600 max-w-2xl mx-auto"
          >
            We believe in the power of paper to inspire creativity and connect
            people through the art of written expression.
          </motion.p>
        </div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20"
        >
          <div className="space-y-6 md:text-left text-center">
            <h2 className="text-3xl font-bold text-stone-800">Our Story</h2>
            <p className="text-stone-600 leading-relaxed text-sm md:text-base">
              Founded in 2020, our journey began with a simple vision: to create
              stationery that inspires creativity and brings joy to everyday
              writing. What started as a small passion project has grown into a
              beloved brand, trusted by creatives and professionals alike.
            </p>
            <p className="text-stone-600 leading-relaxed text-sm md:text-base">
              Each piece in our collection is thoughtfully designed and crafted
              using the finest materials, ensuring that every note you write and
              every sketch you draw becomes a moment to cherish.
            </p>
          </div>
          <div className="bg-stone-200 rounded-2xl h-64 sm:h-80 lg:h-full overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
              alt="Artisan crafting paper"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-stone-800 text-center mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Quality",
                description:
                  "We source the finest materials and craft each piece with meticulous attention to detail.",
                icon: (
                  <IoCodeWorkingSharp className="text-4xl text-stone-800 mb-4" />
                ),
              },
              {
                title: "Sustainability",
                description:
                  "Our commitment to the environment drives us to use eco-friendly materials and processes.",
                icon: <FaLeaf className="text-4xl text-stone-800 mb-4" />,
              },
              {
                title: "Innovation",
                description:
                  "We continuously explore new designs while honoring traditional craftsmanship.",
                icon: <FaLightbulb className="text-4xl text-stone-800 mb-4" />,
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-6 rounded-xl text-center md:text-left shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                {value.icon}
                <h3 className="text-xl font-semibold text-stone-800 mb-4">
                  {value.title}
                </h3>
                <p className="text-stone-600 text-sm md:text-base">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quality Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-stone-800 text-white rounded-2xl p-8 sm:p-12 mb-20"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Our Commitment to Excellence
            </h2>
            <p className="text-stone-200 leading-relaxed">
              Every piece of stationery we create is a testament to our
              dedication to quality. From selecting the finest papers to
              ensuring perfect binding and finishing, we take pride in crafting
              products that inspire and delight.
            </p>
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-stone-800 mb-6">
            Get in Touch
          </h2>
          <p className="text-stone-600 mb-8">
            We'd love to hear from you. Whether you have questions about our
            products or want to collaborate, reach out to us.
          </p>
          <a
            href="mailto:contact@yourstationery.com"
            className="inline-block bg-stone-800 text-white px-8 py-3 rounded-lg hover:bg-stone-700 transition-colors duration-300"
          >
            <FaEnvelope className="inline-block mr-2" />
            Contact Us
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
