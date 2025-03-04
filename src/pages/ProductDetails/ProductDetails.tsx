import { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Heart, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import NewsletterForm from "@/components/home/NewsletterForm/NewsletterForm";

const ProductDetails = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  const images = [
    "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  ];

  const features = [
    "14-inch Retina XDR display",
    "M2 Pro chip with 12-core CPU",
    "19-core GPU",
    "32GB unified memory",
    "1TB SSD storage",
  ];

  return (
    <div>
      {" "}
      <div className="min-h-screen bg-background px-4 py-8 md:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="overflow-hidden rounded-2xl bg-white">
                <motion.img
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  src={images[selectedImage]}
                  alt="Product"
                  className="h-[500px] w-full object-cover image-zoom"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`overflow-hidden rounded-lg ${
                      selectedImage === index
                        ? "ring-2 ring-primary"
                        : "ring-1 ring-border"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Product ${index + 1}`}
                      className="h-24 w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div className="space-y-2">
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                  New Release
                </Badge>
                <h1 className="text-4xl font-semibold tracking-tight slide-up">
                  MacBook Pro
                </h1>
                <p className="text-2xl font-medium text-primary/90">$2,499</p>
              </div>

              <Separator className="my-4" />

              <div className="space-y-4">
                <p className="text-muted-foreground fade-in">
                  Supercharged by M2 Pro or M2 Max, MacBook Pro takes its power
                  and efficiency further than ever. It delivers exceptional
                  performance whether it's plugged in or not, and now has even
                  longer battery life.
                </p>

                <Card className="border border-border/50 bg-card/50 backdrop-blur">
                  <CardContent className="p-6 space-y-4">
                    <h3 className="text-lg font-medium">Key Features</h3>
                    <ul className="space-y-2">
                      {features.map((feature, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center space-x-2 text-sm text-muted-foreground"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                          <span>{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="flex flex-wrap gap-4 pt-6">
                <Button
                  size="lg"
                  className="flex-1 space-x-2 bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <ShoppingCart className="h-5 w-5" />
                  <span>Add to Cart</span>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="flex-1 space-x-2"
                >
                  <Heart className="h-5 w-5" />
                  <span>Save</span>
                </Button>
                <Button size="icon" variant="ghost" className="h-12 w-12">
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NewsletterForm />
    </div>
  );
};

export default ProductDetails;
