
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 pointer-events-none" />
      
      <motion.div 
        className="container mx-auto px-4 md:px-6 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-primary/[0.08] to-accent/[0.08] rounded-3xl p-8 md:p-12 border backdrop-blur-sm">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-lg">
              <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-primary/10 text-primary mb-6">
                <Sparkles className="w-4 h-4 mr-2" />
                Démarrez votre parcours de recherche
              </div>
              
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                Prêt à accélérer votre recherche génétique ?
              </h2>
              
              <p className="text-muted-foreground mb-6">
                Rejoignez les instituts de recherche de pointe qui utilisent déjà Gene Genius pour transformer leurs capacités de recherche génétique et faire des découvertes révolutionnaires.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/ai-assistant">
                  <Button size="lg" className="rounded-full">
                    Commencer
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="rounded-full">
                    Programmer une démo
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="bg-primary/10 rounded-xl p-6 backdrop-blur-sm max-w-sm w-full">
              <h3 className="font-medium text-lg mb-4">Gene Genius Entreprise</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center text-primary mr-3 mt-0.5 flex-shrink-0 text-[10px] font-bold">
                    ✓
                  </div>
                  <span className="text-sm">Équipe dédiée de support à la recherche</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center text-primary mr-3 mt-0.5 flex-shrink-0 text-[10px] font-bold">
                    ✓
                  </div>
                  <span className="text-sm">Entraînement de modèle personnalisé sur vos données</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center text-primary mr-3 mt-0.5 flex-shrink-0 text-[10px] font-bold">
                    ✓
                  </div>
                  <span className="text-sm">Sécurité et conformité avancées</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center text-primary mr-3 mt-0.5 flex-shrink-0 text-[10px] font-bold">
                    ✓
                  </div>
                  <span className="text-sm">Intégration avec vos systèmes de recherche</span>
                </li>
              </ul>
              <Link to="/contact">
                <Button variant="secondary" size="sm" className="w-full">Contacter les ventes</Button>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CTASection;
