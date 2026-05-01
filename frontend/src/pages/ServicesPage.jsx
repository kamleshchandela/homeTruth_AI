import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, MapPin, Star, ShieldCheck, Clock, Phone, AlertCircle, ArrowRight, Zap, Sparkles, Filter, Users, CheckCircle2, Loader2, LayoutGrid, Wrench, Snowflake, Droplets, Hammer, Paintbrush, SprayCan, Bug, Scale } from 'lucide-react';
import { useSelector } from 'react-redux';
import api from '../services/api';
import toast from 'react-hot-toast';

const categories = [
  { name: 'All', icon: LayoutGrid },
  { name: 'All-Rounder', icon: Wrench },
  { name: 'Electrician', icon: Zap },
  { name: 'AC Repair', icon: Snowflake },
  { name: 'Plumber', icon: Droplets },
  { name: 'Carpenter', icon: Hammer },
  { name: 'Painter', icon: Paintbrush },
  { name: 'Cleaning', icon: SprayCan },
  { name: 'Pest Control', icon: Bug },
  { name: 'Home Inspector', icon: Search },
  { name: 'Legal', icon: Scale },
];

const ServicesPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [sortOption, setSortOption] = useState('Highest Reliability');
  const [providers, setProviders] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    fetchProviders();
  }, []);

  const fetchProviders = async () => {
    try {
      setLoading(true);
      const response = await api.get('/auth/providers');
      const apiProviders = response.data.data.providers || [];

      const mappedProviders = apiProviders.map((p) => ({
        id: p._id,
        name: p.fullName,
        service: (p.serviceCategory || 'General Pro').charAt(0).toUpperCase() + (p.serviceCategory || 'General Pro').slice(1),
        experience: p.experience || 0,
        reliabilityScore: p.reliabilityScore || Math.floor(Math.random() * 10) + 90,
        jobsCompleted: p.jobsCompleted || 0,
        responseTime: p.responseTime || '15-30 mins',
        priceRange: p.baseFee ? `₹${p.baseFee}+` : '₹300+',
        status: p.status || 'Available',
        rating: Number((p.rating || (4.5 + (Math.random() * 0.5))).toFixed(1)),
        reviews: p.reviews || (Math.floor(Math.random() * 100) + 10),
        avatar: p.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(p.fullName)}&background=random`,
        location: p.location || 'Junagadh',
        phone: p.phone || '9979265140'
      }));

      setProviders(mappedProviders);
    } catch (error) {
      console.error('Error fetching providers:', error);
      toast.error('Failed to load professionals');
    } finally {
      setLoading(false);
    }
  };

  const filteredProviders = providers.filter(provider => {
    const matchesCategory = activeCategory === 'All' ||
      provider.service.toLowerCase().includes(activeCategory.toLowerCase());
    const matchesSearch = provider.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      provider.service.toLowerCase().includes(searchQuery.toLowerCase()) ||
      provider.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortOptions = ['Highest Reliability', 'Response Speed', 'Most Experienced'];

  return (
    <div className="bg-[#0F0905] min-h-screen pt-32 pb-20 px-6 lg:px-12 selection:bg-amber-primary/30">

      {/* Background Atmosphere */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[60vw] h-[60vw] rounded-full bg-amber-primary/5 blur-[150px]"></div>
        <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] rounded-full bg-blue-500/5 blur-[150px]"></div>
      </div>

      <div className="max-w-[1800px] mx-auto relative z-10">

        {/* Cinematic Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 md:mb-20 gap-8 md:gap-12 px-4 md:px-0">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full glass-panel border-amber-primary/20 bg-amber-primary/5 text-amber-primary text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] mb-6 md:mb-8"
            >
              <ShieldCheck size={12} /> Trusted Professionals Network
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-8xl font-serif font-bold leading-tight mb-6 md:mb-8"
            >
              Home <span className="text-gradient italic">Essentials.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white/40 text-base md:text-xl lg:text-2xl font-light max-w-2xl leading-relaxed"
            >
              Access a curated network of highly reliable home service professionals. Verified, rated, and ready to help.
            </motion.p>
          </div>

          {/* Emergency Alert Widget */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-panel p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] border-critical/20 bg-critical/5 flex flex-col gap-4 md:gap-6 w-full lg:w-96 shadow-[0_20px_50px_rgba(239,68,68,0.1)] relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:rotate-12 transition-transform hidden md:block">
              <AlertCircle size={80} className="text-critical" />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-3 md:mb-4 text-critical">
                <div className="w-2 h-2 rounded-full bg-critical animate-ping"></div>
                <span className="text-[10px] font-black uppercase tracking-widest">Emergency Priority</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-2">Need Help Now?</h3>
              <p className="text-white/40 text-xs md:text-sm leading-relaxed mb-6">Dispatch a verified pro to your door in under 60 minutes.</p>
              <button
                onClick={() => window.open('tel:9979265140')}
                className="w-full bg-critical hover:bg-critical/80 text-white py-3.5 md:py-4 rounded-xl md:rounded-2xl font-bold text-xs md:text-sm transition-all shadow-lg shadow-critical/20 flex items-center justify-center gap-3"
              >
                <Phone size={16} /> Request Quick Help
              </button>
            </div>
          </motion.div>
        </div>

        {/* Categories Section */}
        <div className="mb-20 md:mb-32">
          <div className="flex items-center gap-4 mb-8 md:mb-10 px-4 md:px-0">
            <Sparkles size={18} md:size={20} className="text-amber-primary" />
            <h2 className="text-xl md:text-2xl font-bold">Service Categories</h2>
          </div>
          <div className="flex gap-4 md:gap-6 overflow-x-auto pb-8 pt-2 px-4 md:px-2 -mx-4 md:-mx-2 no-scrollbar scroll-smooth">
            {categories.map((cat, i) => {
              const count = cat.name === 'All'
                ? providers.length
                : providers.filter(p => p.service.toLowerCase().includes(cat.name.toLowerCase())).length;

              return (
                <motion.button
                  key={cat.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setActiveCategory(cat.name)}
                  className={`group relative flex-shrink-0 w-36 md:w-44 p-5 md:p-6 rounded-[1.5rem] md:rounded-[2rem] transition-all duration-500 flex flex-col items-start border ${
                    activeCategory === cat.name
                      ? 'border-amber-primary/40 bg-gradient-to-br from-amber-primary/10 to-transparent shadow-[0_8px_32px_rgba(242,195,107,0.15)]'
                      : 'border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 hover:-translate-y-1'
                  }`}
                >
                  {/* Subtle Background Glow for Active */}
                  {activeCategory === cat.name && (
                    <div className="absolute top-0 right-0 w-24 md:w-32 h-24 md:h-32 bg-amber-primary/10 blur-[40px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
                  )}

                  <div className={`relative z-10 w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl flex items-center justify-center mb-5 md:mb-6 transition-all duration-500 ${
                    activeCategory === cat.name 
                      ? 'bg-amber-primary text-dark-bg shadow-amber-glow scale-110' 
                      : 'bg-white/5 text-white/40 group-hover:text-white group-hover:bg-white/10 group-hover:scale-110'
                  }`}>
                    <cat.icon size={20} md:size={24} strokeWidth={activeCategory === cat.name ? 2.5 : 2} />
                  </div>

                  <div className="relative z-10 text-left w-full">
                    <p className={`text-sm md:text-base font-bold tracking-tight mb-1 transition-colors ${
                      activeCategory === cat.name ? 'text-white' : 'text-white/80 group-hover:text-white'
                    }`}>
                      {cat.name}
                    </p>
                    <div className="flex items-center gap-1.5">
                      <div className={`w-1 h-1 md:w-1.5 md:h-1.5 rounded-full ${count > 0 ? 'bg-success shadow-[0_0_8px_rgba(34,197,94,0.5)]' : 'bg-white/20'}`}></div>
                      <p className={`text-[8px] md:text-[10px] font-black uppercase tracking-widest transition-colors ${
                        activeCategory === cat.name ? 'text-amber-primary' : 'text-white/30 group-hover:text-white/50'
                      }`}>
                        {count} PROS
                      </p>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Providers Section with Search */}
        <section className="px-4 md:px-0">
          <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end mb-10 md:mb-16 gap-8 md:gap-10">
            <div className="flex-1 w-full max-w-2xl">
              <div className="flex flex-col md:flex-row md:items-end gap-4 md:gap-8 mb-6 md:mb-10">
                <div>
                  <h2 className="text-3xl md:text-5xl font-serif font-bold mb-2 md:mb-4">
                    {activeCategory === 'All' ? 'Our Network of Pros' : `Elite ${activeCategory}s`}
                  </h2>
                  <p className="text-white/30 text-base md:text-lg">Top-rated verified professionals ready for dispatch.</p>
                </div>
              </div>

              <div className="relative group w-full">
                <Search className="absolute left-5 md:left-6 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-amber-primary transition-all duration-500" size={18} md:size={20} />
                <input
                  type="text"
                  placeholder="Search by name or specialty..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 md:pl-16 pr-5 md:pr-6 py-3.5 md:py-4 rounded-xl md:rounded-2xl bg-white/5 backdrop-blur-xl border border-white/20 outline-none focus:border-amber-primary/50 focus:bg-white/10 transition-all text-sm md:text-lg text-white placeholder:text-white/50 shadow-premium"
                />
              </div>
            </div>

            {/* CUSTOM PREMIUM DROPDOWN */}
            <div className="relative w-full md:w-auto">
              <button
                onClick={() => setIsSortOpen(!isSortOpen)}
                className={`flex items-center justify-between md:justify-start gap-6 px-6 md:px-8 py-4 md:py-5 w-full md:w-auto glass-panel rounded-xl md:rounded-2xl border-white/5 transition-all duration-300 ${isSortOpen ? 'border-amber-primary/30 bg-amber-primary/5' : ''}`}
              >
                <div className="flex items-center gap-4">
                  <Filter size={16} className={isSortOpen ? 'text-amber-primary' : 'text-white/30'} />
                  <span className="text-[9px] md:text-[10px] text-white font-black uppercase tracking-widest min-w-[120px] md:min-w-[140px] text-left">
                    {sortOption}
                  </span>
                </div>
                <motion.div animate={{ rotate: isSortOpen ? 180 : 0 }}>
                  <Zap size={14} className={isSortOpen ? 'text-amber-primary' : 'text-white/20'} />
                </motion.div>
              </button>

              <AnimatePresence>
                {isSortOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute right-0 left-0 md:left-auto mt-3 w-full md:w-72 glass-panel border-white/10 p-2 md:p-3 rounded-2xl md:rounded-3xl z-[50] shadow-2xl backdrop-blur-3xl overflow-hidden bg-black/90"
                  >
                    {sortOptions.map((option) => (
                      <button
                        key={option}
                        onClick={() => {
                          setSortOption(option);
                          setIsSortOpen(false);
                        }}
                        className={`w-full text-left px-5 md:px-6 py-3.5 md:py-4 rounded-xl md:rounded-2xl text-[9px] md:text-[10px] font-black uppercase tracking-widest transition-all ${sortOption === option
                          ? 'bg-amber-primary/10 text-amber-primary'
                          : 'text-white/40 hover:bg-white/5 hover:text-white'
                          }`}
                      >
                        {option}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {loading ? (
            <div className="flex flex-col items-center justify-center py-20 md:py-32 gap-6">
              <Loader2 size={40} md:size={48} className="text-amber-primary animate-spin" />
              <p className="text-white/40 font-serif text-lg md:text-xl italic">Curating professionals...</p>
            </div>
          ) : filteredProviders.length === 0 ? (
            <div className="glass-panel p-16 md:p-32 text-center flex flex-col items-center justify-center rounded-[2rem] md:rounded-[3rem] border-dashed border-white/10">
              <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-white/5 flex items-center justify-center mb-6 md:mb-8 border border-white/5">
                <Search className="text-white/10" size={30} md:size={40} />
              </div>
              <h3 className="text-xl md:text-3xl font-bold mb-3 md:mb-4">No results found</h3>
              <p className="text-white/30 max-w-sm mx-auto text-sm md:text-lg font-light">Try searching for something else.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-10">
              <AnimatePresence mode='popLayout'>
                {filteredProviders.map((provider, index) => (
                  <motion.div
                    key={provider.id}
                    layout
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ delay: index * 0.1 }}
                    className="glass-card p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] border-white/5 shadow-premium flex flex-col group hover:border-amber-primary/20 transition-all duration-500 h-full"
                  >
                    {/* Provider Header */}
                    <div className="flex items-start justify-between mb-6 md:mb-10">
                      <div className="flex gap-4 md:gap-6">
                        <div className="relative shrink-0">
                          <img src={provider.avatar} alt={provider.name} className="w-16 h-16 md:w-20 md:h-20 rounded-2xl md:rounded-[2rem] object-cover border-2 border-white/10 group-hover:border-amber-primary/50 transition-all duration-500 shadow-premium" />
                          <div className="absolute -bottom-1 -right-1 md:-bottom-2 md:-right-2 w-6 h-6 md:w-8 md:h-8 rounded-full bg-success flex items-center justify-center border-2 md:border-4 border-dark-bg text-white">
                            <CheckCircle2 size={12} md:size={16} />
                          </div>
                        </div>
                        <div>
                          <h3 className="text-xl md:text-2xl font-serif font-bold mb-1">{provider.name}</h3>
                          <p className="text-[10px] md:text-[11px] text-amber-primary font-black uppercase tracking-widest mb-2 md:mb-3">{provider.service}</p>
                          <div className="flex items-center gap-1.5 md:gap-2 text-white/30 text-xs md:text-sm">
                            <Star size={12} md:size={14} className="text-warning fill-warning" />
                            <span className="font-bold text-white">{provider.rating}</span>
                            <span className="text-[10px] md:text-xs text-white/20">({provider.reviews})</span>
                          </div>
                        </div>
                      </div>
                      <div className={`px-2.5 md:px-4 py-1.5 md:py-2 rounded-xl md:rounded-2xl text-[8px] md:text-[9px] font-black uppercase tracking-widest border shrink-0 ${provider.status === 'Available'
                        ? 'bg-success/5 text-success border-success/20 animate-pulse'
                        : 'bg-warning/5 text-warning border-warning/20'
                        }`}>
                        {provider.status}
                      </div>
                    </div>

                    {/* Metrics Grid */}
                    <div className="grid grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-10">
                      <div className="glass-panel p-4 md:p-5 rounded-xl md:rounded-2xl border-white/5 bg-white/[0.02] group-hover:bg-amber-primary/5 transition-all">
                        <p className="text-[8px] md:text-[9px] text-white/20 uppercase font-black tracking-widest mb-1.5 md:mb-2">Reliability</p>
                        <p className="text-2xl md:text-3xl font-mono font-bold text-success">{provider.reliabilityScore}%</p>
                      </div>
                      <div className="glass-panel p-4 md:p-5 rounded-xl md:rounded-2xl border-white/5 bg-white/[0.02] group-hover:bg-blue-500/5 transition-all">
                        <p className="text-[8px] md:text-[9px] text-white/20 uppercase font-black tracking-widest mb-1.5 md:mb-2">Response</p>
                        <p className="text-2xl md:text-3xl font-mono font-bold text-blue-400">{provider.responseTime.split(' ')[0]}</p>
                      </div>
                    </div>

                    {/* Stats Row */}
                    <div className="space-y-4 md:space-y-5 mb-8 md:mb-12 flex-1">
                      <div className="flex justify-between items-center py-3 md:py-4 border-y border-white/5">
                        <div className="flex items-center gap-2 md:gap-3 text-white/40">
                          <ShieldCheck size={14} md:size={16} />
                          <span className="text-xs md:text-sm font-medium">Verified Jobs</span>
                        </div>
                        <span className="text-base md:text-lg font-bold text-white">{provider.jobsCompleted}+</span>
                      </div>
                      <div className="flex justify-between items-center py-3 md:py-4 border-b border-white/5">
                        <div className="flex items-center gap-2 md:gap-3 text-white/40">
                          <Clock size={14} md:size={16} />
                          <span className="text-xs md:text-sm font-medium">Experience</span>
                        </div>
                        <span className="text-base md:text-lg font-bold text-white">{provider.experience}Y</span>
                      </div>
                    </div>

                    {/* Footer CTAs */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/5 mt-auto gap-4">
                      <div className="flex flex-col">
                        <p className="text-[8px] md:text-[9px] text-white/20 font-black uppercase tracking-widest mb-1">Fee</p>
                        <p className="text-base md:text-lg font-bold text-white">{provider.priceRange.split('+')[0]}</p>
                      </div>
                      <div className="flex gap-2 md:gap-3">
                        <button
                          onClick={() => window.open(`tel:${provider.phone || '9979265140'}`)}
                          className="p-3 md:p-4 rounded-xl md:rounded-2xl glass-panel border-white/10 text-white hover:bg-white/10 transition-all"
                        >
                          <Phone size={18} md:size={20} />
                        </button>
                        <button
                          onClick={() => window.open(`https://wa.me/${(provider.phone || '9979265140').replace(/\D/g, '')}?text=${encodeURIComponent(
                            `Hello! I am ${user?.fullName || 'a customer'} from ${user?.location || 'your area'}. I am interested in booking a session with you for ${provider.service} services through HomeTruth AI.`
                          )}`)}
                          className="btn-amber !py-3 md:!py-4 !px-4 md:!px-8 text-xs md:text-sm font-bold flex items-center justify-center gap-2 md:gap-3 shadow-amber-glow"
                        >
                          Book <span className="hidden sm:inline">Session</span> <ArrowRight size={16} md:size={18} />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </section>

        {/* Global CTA */}
        <section className="mt-24 md:mt-48 px-4 md:px-0">
          <div className="glass-panel p-10 md:p-20 rounded-[2.5rem] md:rounded-[4rem] text-center relative overflow-hidden border-white/5 bg-white/[0.01]">
            <div className="absolute inset-0 bg-amber-primary/[0.02] pointer-events-none"></div>
            <div className="w-16 h-16 md:w-24 md:h-24 rounded-[1.5rem] md:rounded-[2.5rem] bg-amber-primary/10 border border-amber-primary/30 flex items-center justify-center mb-6 md:mb-10 mx-auto shadow-amber-glow-strong">
              <Users size={32} md:size={48} className="text-amber-primary" />
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-serif font-bold mb-6 md:mb-8 leading-tight">Ready to <span className="text-gradient italic">Join?</span></h2>
            <p className="text-white/30 text-base md:text-xl max-w-2xl mx-auto mb-8 md:mb-12 font-light leading-relaxed">Are you a professional providing world-class home services? Apply to join our elite verified network.</p>
            <Link to="/signup" className="btn-amber inline-block !py-4 md:!py-6 !px-10 md:!px-16 text-sm md:text-lg font-bold shadow-amber-glow-strong">Apply as Professional</Link>
          </div>
        </section>

      </div>
    </div>
  );
};

export default ServicesPage;
