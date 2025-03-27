
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Hero from "../components/home/Hero";
import Features from "../components/home/Features";
import AIInterface from "../components/home/AIInterface";
import Testimonials from "../components/home/Testimonials";
import CTASection from "../components/home/CTASection";

const Index = () => {
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
        className="flex-grow"
        initial={{ opacity: 0, y: 10 }}
        animate={controls}
      >
        <Hero />
        <Features />
        <AIInterface />
        <Testimonials />
        <CTASection />
      </motion.main>
      
      <Footer />
    </div>
  );
};

export default Index;
