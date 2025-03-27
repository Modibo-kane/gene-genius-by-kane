
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Features from "../components/home/Features";

const FeaturesPage = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    });
  }, [controls]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <motion.main 
        className="flex-grow pt-24 md:pt-28"
        initial={{ opacity: 0, y: 10 }}
        animate={controls}
      >
        <div className="container mx-auto px-4 md:px-6 py-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Our Features
          </h1>
          <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-16">
            Discover how Gene Genius helps researchers accelerate genetic discoveries with advanced AI tools
          </p>
          
          <Features />
        </div>
      </motion.main>
      
      <Footer />
    </div>
  );
};

export default FeaturesPage;
