import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Categories } from './components/Categories';
import { FeaturedProducts } from './components/FeaturedProducts';
import { BrandPhilosophy } from './components/BrandPhilosophy';
import { TechFeatures } from './components/TechFeatures';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navigation />
      <Hero />
      <Categories />
      <FeaturedProducts />
      <BrandPhilosophy />
      <TechFeatures />
      <Newsletter />
      <Footer />
    </div>
  );
}
