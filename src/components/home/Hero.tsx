
import { Button } from "@/components/ui/button";
import { ChevronRight, Dna, FileSearch, Microscope } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
      
      {/* DNA animation in background (abstract) */}
      <div className="absolute top-1/3 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse-subtle" />
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-pulse-subtle" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-primary/10 text-primary mb-6">
              <Dna className="w-4 h-4 mr-2" />
              Avancées en Recherche Génétique
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              L'Assistant IA pour la{" "}
              <span className="text-primary">Recherche Génétique</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Gene Genius aide les chercheurs à accélérer leurs découvertes génétiques grâce à des prédictions avancées de séquences ADN, des calculs de haut niveau et des connaissances biologiques profondes.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/ai-assistant">
                <Button size="lg" className="rounded-full">
                  Essayer Gene Genius
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/docs">
                <Button size="lg" variant="outline" className="rounded-full">
                  En savoir plus
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Features preview */}
        <motion.div 
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="bg-card/50 backdrop-blur-sm border rounded-xl p-6 flex flex-col items-center text-center hover:shadow-md transition-all">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Dna className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-medium text-lg mb-2">Prédiction de Séquences ADN</h3>
            <p className="text-muted-foreground text-sm">
              Prédisez avec précision les séquences ADN grâce à des algorithmes avancés d'apprentissage automatique.
            </p>
          </div>
          
          <div className="bg-card/50 backdrop-blur-sm border rounded-xl p-6 flex flex-col items-center text-center hover:shadow-md transition-all">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Microscope className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-medium text-lg mb-2">Connaissances Biologiques</h3>
            <p className="text-muted-foreground text-sm">
              Accédez à des connaissances biologiques complètes pour soutenir vos hypothèses de recherche.
            </p>
          </div>
          
          <div className="bg-card/50 backdrop-blur-sm border rounded-xl p-6 flex flex-col items-center text-center hover:shadow-md transition-all">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <FileSearch className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-medium text-lg mb-2">Analyse Avancée</h3>
            <p className="text-muted-foreground text-sm">
              Effectuez facilement des calculs génétiques complexes et des analyses statistiques.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
