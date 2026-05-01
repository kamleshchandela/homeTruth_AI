import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Menu, X, LogOut, ChevronDown, User } from 'lucide-react';
import { logout } from '../store/slices/authSlice';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dispatch = useDispatch();
  const location = useLocation();
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Explore', path: '/explore' },
    { name: 'Map', path: '/map' },
    { name: '3D Tours', path: '/virtual-tours' },
    { name: 'Services', path: '/services' },
    { name: 'Sell Home', path: '/sell-home' },
    { name: 'Schemes', path: '/schemes' },
    { name: 'Loans', path: '/loan-optimizer' }
  ];

  if (isAuthenticated) {
    navLinks.push({ name: 'Dashboard', path: '/dashboard' });
  }

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-500 ${
      scrolled 
        ? 'py-3 bg-dark-bg/60 backdrop-blur-2xl border-b border-white/5 shadow-premium' 
        : 'py-6 bg-transparent'
    }`}>
      <div className="max-w-[1600px] mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-12 h-12 bg-[#0F0905] rounded-full flex items-center justify-center overflow-hidden border border-white/10 shadow-premium group-hover:scale-110 transition-transform duration-500">
            <img src="/favicon.png" alt="Logo" className="w-full h-full object-cover scale-110" />
          </div>
          <span className="text-2xl font-serif font-bold text-white tracking-tight">
            Home<span className="text-gradient">Truth</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-1 glass-panel px-2 py-1.5 rounded-full border-white/5">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link 
                key={link.name}
                to={link.path} 
                className={`relative px-5 py-2 rounded-full text-sm font-bold transition-all duration-300
                  ${isActive 
                    ? 'text-dark-bg bg-amber-primary shadow-amber-glow' 
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                  }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        <div className="hidden lg:flex items-center space-x-6">


          {isAuthenticated ? (
            <div className="relative group">
              <button className="flex items-center space-x-3 bg-white/5 pl-2 pr-4 py-1.5 rounded-full border border-white/10 hover:border-amber-primary/30 transition-all duration-300 relative z-10">
                <div className="w-8 h-8 rounded-full border border-amber-primary/30 overflow-hidden flex items-center justify-center bg-amber-primary/10">
                  {user?.avatar ? (
                    <img src={user.avatar} alt="avatar" className="w-full h-full object-cover" />
                  ) : (
                    <User size={18} className="text-amber-primary" />
                  )}
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-white/90 leading-none">{user?.fullName?.split(' ')[0] || 'User'}</p>
                  <p className="text-[10px] text-white/40 font-mono">Premium</p>
                </div>
                <ChevronDown size={14} className="text-white/40 group-hover:text-amber-primary transition-colors" />
              </button>
              
              <div className="absolute top-[calc(100%-0.5rem)] right-0 pt-4 w-48 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 z-50">
                <div className="glass-panel py-2 rounded-2xl border-white/10 shadow-premium">
                  <button 
                    onClick={() => dispatch(logout())} 
                    className="w-full flex items-center px-4 py-3 text-sm text-red-400 hover:bg-red-400/10 transition-colors"
                  >
                    <LogOut size={16} className="mr-3" /> Sign Out
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <Link to="/login" className="text-white/60 hover:text-white text-sm font-bold">
                Sign In
              </Link>
              <Link to="/signup" className="btn-amber !py-2.5 !px-7 text-sm">
                Sign Up
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex items-center space-x-4">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="p-2 text-white bg-white/5 rounded-xl border border-white/10 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden absolute w-full glass-panel border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col px-6 py-8 space-y-3">
              {navLinks.map((link) => (
                <Link 
                  key={link.name}
                  to={link.path} 
                  className={`px-6 py-4 rounded-2xl text-lg font-bold transition-all ${
                    location.pathname === link.path 
                      ? 'bg-amber-primary text-dark-bg' 
                      : 'text-white/60 hover:bg-white/5 hover:text-white'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="h-px w-full bg-white/5 my-4"></div>
              {isAuthenticated ? (
                <button 
                  onClick={() => { dispatch(logout()); setIsMenuOpen(false); }} 
                  className="flex items-center px-6 py-4 rounded-2xl text-lg font-bold text-red-400 hover:bg-red-400/10 transition-colors"
                >
                  <LogOut size={20} className="mr-4" /> Sign Out
                </button>
              ) : (
                <Link 
                  to="/login" 
                  className="btn-amber text-center py-4 text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign In
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
