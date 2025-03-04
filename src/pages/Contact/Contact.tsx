import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import toast from "react-hot-toast";
import { Textarea } from "@/components/ui/textarea";
import { RxDoubleArrowRight } from "react-icons/rx";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    toast.success("Message sent successfully! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-stone-100">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24"
      >
        {/* Hero Section */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-5xl font-bold text-stone-800 mb-4"
          >
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-stone-600 max-w-2xl mx-auto"
          >
            We'd love to hear from you. Send us a message and we'll respond as
            soon as possible.
          </motion.p>
        </div>

        {/* Contact Information Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <Phone className="w-10 h-10 text-stone-800 mb-4" />
            <h3 className="text-xl font-semibold text-stone-800 mb-2">Phone</h3>
            <p className="text-stone-600">+1 (555) 123-4567</p>
            <p className="text-stone-600">Mon-Fri: 9:00 AM - 6:00 PM</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <Mail className="w-10 h-10 text-stone-800 mb-4" />
            <h3 className="text-xl font-semibold text-stone-800 mb-2">Email</h3>
            <p className="text-stone-600">info@yourstationery.com</p>
            <p className="text-stone-600">support@yourstationery.com</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <Clock className="w-10 h-10 text-stone-800 mb-4" />
            <h3 className="text-xl font-semibold text-stone-800 mb-2">
              Business Hours
            </h3>
            <p className="text-stone-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p className="text-stone-600">Saturday: 10:00 AM - 4:00 PM</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white p-8 rounded-xl shadow-sm"
          >
            <h2 className="text-2xl font-bold text-stone-800 mb-6">
              Send us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="w-full"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="w-full"
                />
              </div>
              <div>
                <Input
                  type="text"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  required
                  className="w-full"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  className="w-full min-h-[150px]"
                />
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </motion.div>

          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white p-8 rounded-xl shadow-sm"
          >
            <h2 className="text-2xl font-bold text-stone-800 mb-6">
              Visit Our Store
            </h2>
            <div className="mb-6">
              <div className="flex items-start gap-3 text-stone-600 mb-4">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <p>
                  123 Stationery Street
                  <br />
                  New York, NY 10001
                  <br />
                  United States
                </p>
              </div>
            </div>
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976397304603!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1645564346181!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Store Location"
                className="absolute inset-0"
              ></iframe>
            </div>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-white p-8 rounded-xl shadow-sm"
        >
          <h2 className="text-2xl font-bold text-stone-800 mb-6 text-center">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg flex gap-1 items-center font-semibold text-stone-800 mb-2">
                <RxDoubleArrowRight className="text-green-500"/> What are your shipping times?
              </h3>
              <p className="text-stone-600">
                We process orders within 1-2 business days and shipping
                typically takes 3-5 business days within the continental US.
              </p>
            </div>
            <div>
              <h3 className="text-lg flex gap-1 items-center font-semibold text-stone-800 mb-2">
               <RxDoubleArrowRight className="text-green-500"/>  Do you offer international shipping?
              </h3>
              <p className="text-stone-600">
                Yes, we ship worldwide! International shipping times vary by
                location and typically take 7-14 business days.
              </p>
            </div>
            <div>
              <h3 className="text-lg flex gap-1 items-center font-semibold text-stone-800 mb-2">
               <RxDoubleArrowRight className="text-green-500"/>  What's your return policy?
              </h3>
              <p className="text-stone-600">
                We accept returns within 30 days of purchase. Items must be
                unused and in original packaging.
              </p>
            </div>
            <div>
              <h3 className="text-lg flex gap-1 items-center font-semibold text-stone-800 mb-2">
               <RxDoubleArrowRight className="text-green-500"/>  Can I customize my order?
              </h3>
              <p className="text-stone-600">
                Yes! We offer customization services for bulk orders. Please
                contact us for more details.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;
