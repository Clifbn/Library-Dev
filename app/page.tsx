import HeroSection from './components/Hero-section';
import Navbar from './components/Navbar';
import FeaturedBooks from './components/Featured-books';
import Categories from './components/Categories';

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <FeaturedBooks />
      <Categories />
      {/* Other sections go here */}
    </main>
  );
}