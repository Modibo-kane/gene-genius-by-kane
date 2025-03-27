
import React from "react";
import { motion } from "framer-motion";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Book, Code, Dna, FlaskConical, Microscope } from "lucide-react";

const DocsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Documentation Gene Genius</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Tout ce dont vous avez besoin pour exploiter pleinement Gene Genius dans vos recherches génétiques.
            </p>
          </motion.div>
          
          <Tabs defaultValue="getting-started" className="max-w-4xl mx-auto">
            <TabsList className="grid grid-cols-4 mb-8">
              <TabsTrigger value="getting-started" className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                <span className="hidden sm:inline">Débuter</span>
              </TabsTrigger>
              <TabsTrigger value="concepts" className="flex items-center gap-2">
                <Book className="h-4 w-4" />
                <span className="hidden sm:inline">Concepts</span>
              </TabsTrigger>
              <TabsTrigger value="api" className="flex items-center gap-2">
                <Code className="h-4 w-4" />
                <span className="hidden sm:inline">API</span>
              </TabsTrigger>
              <TabsTrigger value="examples" className="flex items-center gap-2">
                <FlaskConical className="h-4 w-4" />
                <span className="hidden sm:inline">Exemples</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="getting-started" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Premiers pas avec Gene Genius</CardTitle>
                  <CardDescription>Apprenez à utiliser notre assistant IA pour la recherche génétique</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <h3 className="text-lg font-medium">Mise en route</h3>
                  <p>Gene Genius est un assistant IA conçu pour aider les chercheurs et scientifiques dans leurs travaux sur la génétique et la biologie moléculaire.</p>
                  
                  <h3 className="text-lg font-medium mt-6">Comment utiliser l'outil</h3>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Créez un compte ou connectez-vous</li>
                    <li>Accédez à l'interface principale de l'assistant</li>
                    <li>Posez vos questions ou soumettez vos séquences ADN à analyser</li>
                    <li>Explorez les résultats et les suggestions proposées</li>
                  </ol>
                  
                  <h3 className="text-lg font-medium mt-6">Fonctionnalités principales</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Prédiction de séquences ADN</li>
                    <li>Analyse de structures biologiques</li>
                    <li>Calculs avancés pour la recherche génétique</li>
                    <li>Base de connaissances biologique complète</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="concepts" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Concepts fondamentaux</CardTitle>
                  <CardDescription>Comprendre les principes sur lesquels se base Gene Genius</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Dna className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">Analyse génomique</h3>
                      <p className="text-muted-foreground">Notre IA utilise des modèles avancés pour analyser et prédire les séquences ADN avec une précision exceptionnelle.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 mb-6">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Microscope className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">Connaissances biologiques</h3>
                      <p className="text-muted-foreground">Gene Genius s'appuie sur une vaste base de données scientifiques constamment mise à jour.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <FlaskConical className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">Méthodologie scientifique</h3>
                      <p className="text-muted-foreground">Toutes les analyses sont réalisées selon des méthodes scientifiques éprouvées et validées par des experts.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="api" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Documentation API</CardTitle>
                  <CardDescription>Intégrez Gene Genius dans vos propres applications de recherche</CardDescription>
                </CardHeader>
                <CardContent>
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                    <code>{`// Exemple d'appel à l'API Gene Genius
const response = await fetch('https://api.genegenius.com/analyze', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_API_KEY'
  },
  body: JSON.stringify({
    sequence: 'ATGCCTAGCT...',
    options: {
      predictStructure: true,
      compareToDatabase: true
    }
  })
});

const data = await response.json();
console.log(data.results);`}</code>
                  </pre>
                  
                  <div className="mt-6">
                    <h3 className="text-lg font-medium">Points de terminaison disponibles</h3>
                    <ul className="mt-2 space-y-2">
                      <li className="p-2 bg-muted rounded-md">
                        <span className="font-mono text-sm">/analyze</span> - Analyser des séquences ADN
                      </li>
                      <li className="p-2 bg-muted rounded-md">
                        <span className="font-mono text-sm">/predict</span> - Prédire des structures moléculaires
                      </li>
                      <li className="p-2 bg-muted rounded-md">
                        <span className="font-mono text-sm">/calculate</span> - Effectuer des calculs biologiques complexes
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="examples" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Exemples d'utilisation</CardTitle>
                  <CardDescription>Découvrez comment utiliser Gene Genius avec des cas concrets</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="border rounded-lg p-4">
                    <h3 className="font-medium mb-2">Prédiction de mutations génétiques</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Exemple montrant comment Gene Genius peut aider à prédire les effets de mutations spécifiques.
                    </p>
                    <div className="bg-muted p-3 rounded-md">
                      <p className="text-sm font-mono">
                        Query: Predict effects of SNP rs1234567 on protein function<br/>
                        Result: High probability (87%) of affecting binding site, potential impact on signaling pathway...
                      </p>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <h3 className="font-medium mb-2">Analyse de séquences complexes</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Exemple d'analyse d'une région génomique avec plusieurs éléments régulateurs.
                    </p>
                    <div className="bg-muted p-3 rounded-md">
                      <p className="text-sm font-mono">
                        Query: Analyze regulatory elements in chr7:140,000,000-140,100,000<br/>
                        Result: Identified 3 enhancers, 1 silencer, and potential CTCF binding sites...
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default DocsPage;
