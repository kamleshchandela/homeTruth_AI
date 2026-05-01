import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Container from '../common/Container';

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 transition-all duration-300 bg-black/50 backdrop-blur-md border-b border-white/5">
      <Container className="flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-12 h-12 bg-[#0F0905] rounded-full flex items-center justify-center overflow-hidden border border-white/10 shadow-premium group-hover:scale-110 transition-transform duration-500">
            <img src="/favicon.png" alt="Logo" className="w-full h-full object-cover scale-110" />
          </div>
          <span className="text-2xl font-serif font-bold text-white tracking-tight">
            Home<span className="text-gradient">Truth</span>
          </span>
        </Link>
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
          {['Explore', 'Map', '3D Tours', 'Services', 'Schemes'].map(item => (
            <a href="#" key={item} className="hover:text-amber-500 transition-colors">{item}</a>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <button className="text-white">🌙</button>
          <button className="px-5 py-2 border border-white/10 rounded-lg hover:border-amber-500 hover:text-amber-500 transition-all">Login</button>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
