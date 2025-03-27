
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const AboutPage = () => {
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
            About Gene Genius
          </h1>
          
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-lg mb-6">
              Gene Genius is an advanced AI platform designed to assist researchers in the field of genetic research. 
              Our mission is to accelerate scientific discoveries by providing powerful tools for DNA sequence prediction, 
              analysis, and biological insight.
            </p>
            
            <p className="text-lg mb-6">
              Founded by a team of experts in both artificial intelligence and genetics, Gene Genius combines 
              cutting-edge machine learning techniques with deep biological knowledge to create a unique solution 
              for researchers around the world.
            </p>
            
            <p className="text-lg mb-6">
              Our AI has been trained on vast datasets of genetic information, enabling it to make accurate predictions 
              and provide valuable insights that would otherwise take researchers significant time and resources to discover.
            </p>
            
            <h2 className="text-2xl font-semibold mt-10 mb-4">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="text-center">
                <div className="w-32 h-32 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-primary text-5xl font-light">DB</span>
                </div>
                <h3 className="font-medium text-xl">Dr. Bernard</h3>
                <p className="text-muted-foreground">Chief Scientific Officer</p>
              </div>
              
              <div className="text-center">
                <div className="w-32 h-32 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-primary text-5xl font-light">ML</span>
                </div>
                <h3 className="font-medium text-xl">Dr. Marie Laporte</h3>
                <p className="text-muted-foreground">AI Research Director</p>
              </div>
              
              <div className="text-center">
                <div className="w-32 h-32 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-primary text-5xl font-light">JL</span>
                </div>
                <h3 className="font-medium text-xl">Jean Leclerc</h3>
                <p className="text-muted-foreground">Head of Engineering</p>
              </div>
            </div>
          </div>
        </div>
      </motion.main>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
