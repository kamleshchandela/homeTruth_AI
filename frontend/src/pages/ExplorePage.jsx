import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, MapPin, Heart, ArrowRight, Filter, Zap, Loader2, Box, X, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ThreeViewerModal from '../components/ThreeViewerModal';
import api from '../services/api';

const ExplorePage = () => {
  const navigate = useNavigate();
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const [search, setSearch] = useState('');
  const [active3DTour, setActive3DTour] = useState(null);
  
  // Filter States
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [maxPrice, setMaxPrice] = useState(100000);
  const [bedrooms, setBedrooms] = useState(0);
  const [riskLevel, setRiskLevel] = useState('any');

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await api.get('/properties');
        setProperties(response.data.data.properties);
      } catch (error) {
        console.error("Error fetching properties:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProperties();
  }, []);

  const filteredHomes = properties
    .filter(home => {
      const homePrice = home.price || home.rent || 0;
      const homeType = home.propertyType || home.type || '';
      const homeBedrooms = home.bedrooms || home.beds || 0;
      const homeCity = home.city || '';

      const matchSearch = search === '' || 
        home.title.toLowerCase().includes(search.toLowerCase()) || 
        home.address.toLowerCase().includes(search.toLowerCase()) ||
        homeCity.toLowerCase().includes(search.toLowerCase());
      
      const matchType = selectedTypes.length === 0 || selectedTypes.includes(homeType);
      const matchPrice = homePrice <= maxPrice;
      const matchBedrooms = bedrooms === 0 || homeBedrooms >= bedrooms;
      const matchRiskLevel = riskLevel === 'any' || home.riskLevel === riskLevel;
      
      return matchSearch && matchType && matchPrice && matchBedrooms && matchRiskLevel;
    })
    .sort((a, b) => {
      return (b.healthScore || 0) - (a.healthScore || 0); 
    });

  const FilterContent = () => (
    <div className="flex flex-col gap-10">
      <h3 className="text-xl font-bold mb-2 flex items-center gap-3">
        <Filter size={18} className="text-amber-primary" /> Refine Search
      </h3>
      
      {/* Property Type Filter */}
      <div>
        <label className="text-[9px] text-white/20 block mb-6 font-black uppercase tracking-[0.4em]">Property Type</label>
        <div className="space-y-4">
          {['Apartment', 'House', 'Villa', 'Commercial'].map(type => (
            <label key={type} className="flex items-center justify-between cursor-pointer group">
              <span className={`text-xs font-bold transition-colors ${selectedTypes.includes(type) ? 'text-amber-primary' : 'text-white/40 group-hover:text-white'}`}>{type}</span>
              <div className={`w-5 h-5 rounded-lg flex items-center justify-center border-2 transition-all ${
                selectedTypes.includes(type) ? 'bg-amber-primary border-amber-primary' : 'border-white/10 group-hover:border-white/30'
              }`}>
                {selectedTypes.includes(type) && <div className="w-2 h-2 bg-dark-bg rounded-sm" />}
              </div>
              <input type="checkbox" className="hidden" checked={selectedTypes.includes(type)} onChange={() => setSelectedTypes(prev => prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type])} />
            </label>
          ))}
        </div>
      </div>

      {/* Price Range Filter */}
      <div>
        <label className="text-[9px] text-white/20 block mb-6 font-black uppercase tracking-[0.4em]">Max Price (₹)</label>
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-bold">₹0</span>
          <span className="text-sm font-bold text-amber-primary">₹{maxPrice.toLocaleString()}</span>
        </div>
        <input 
          type="range" 
          min="10000" 
          max="200000" 
          step="5000"
          value={maxPrice} 
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="w-full accent-amber-primary"
        />
      </div>

      {/* Bedrooms Filter */}
      <div>
        <label className="text-[9px] text-white/20 block mb-6 font-black uppercase tracking-[0.4em]">Bedrooms</label>
        <div className="grid grid-cols-5 gap-2">
          {[0, 1, 2, 3, 4].map(num => (
            <button 
              key={num}
              onClick={() => setBedrooms(num)}
              className={`py-2 rounded-xl text-xs font-bold transition-all border ${
                bedrooms === num 
                  ? 'bg-amber-primary text-dark-bg border-amber-primary shadow-amber-glow' 
                  : 'bg-white/5 text-white/60 border-white/10 hover:border-white/30 hover:bg-white/10'
              }`}
            >
              {num === 0 ? 'Any' : `${num}+`}
            </button>
          ))}
        </div>
      </div>

      {/* Risk Level Filter */}
      <div>
        <label className="text-[9px] text-white/20 block mb-6 font-black uppercase tracking-[0.4em]">AI Risk Level</label>
        <div className="grid grid-cols-2 gap-3">
          {['any', 'low', 'medium', 'high'].map(level => (
            <button
              key={level}
              onClick={() => setRiskLevel(level)}
              className={`text-left px-4 py-3 rounded-xl text-[10px] font-bold transition-all border ${
                riskLevel === level
                  ? 'bg-amber-primary/10 text-amber-primary border-amber-primary/50'
                  : 'bg-white/5 text-white/60 border-white/10 hover:border-white/30'
              }`}
            >
              {level.charAt(0).toUpperCase() + level.slice(1)} Risk
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-[#0F0905] min-h-screen pt-32 pb-20 px-6 lg:px-12 selection:bg-amber-primary/30">
      <Helmet>
        <title>Explore Properties | HomeTruth AI</title>
        <meta name="description" content="Search and discover the best properties with AI-powered risk analysis and virtual tours." />
      </Helmet>

      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-[60vw] h-[60vw] rounded-full bg-amber-primary/5 blur-[150px]"></div>
      </div>

      <div className="max-w-[1800px] mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full glass-panel border-amber-primary/20 bg-amber-primary/5 text-amber-primary text-[10px] font-black uppercase tracking-[0.3em] mb-6"
            >
              <Zap size={12} /> Live Market Pulse
            </motion.div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold leading-tight mb-2">
              Find Your <span className="text-gradient italic">Sanctuary.</span>
            </h1>
          </div>

          <button 
            onClick={() => setShowMobileFilters(true)}
            className="lg:hidden flex items-center gap-3 px-6 py-3 rounded-2xl bg-amber-primary/10 border border-amber-primary/20 text-amber-primary text-sm font-bold active:scale-95 transition-all"
          >
            <Filter size={18} /> Filters
          </button>
        </div>

        <div className="mb-16 flex flex-col sm:flex-row gap-4 items-center max-w-4xl">
          <div className="relative flex-1 w-full group">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-amber-primary transition-all duration-500" size={20} />
            <input
              type="text"
              placeholder="Search locations or buildings..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-16 pr-6 py-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/20 outline-none focus:border-amber-primary/50 focus:bg-white/10 transition-all text-lg text-white placeholder:text-white/50 shadow-premium"
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Desktop Filters */}
          <aside className="hidden lg:block w-80 sticky top-32 h-[calc(100vh-160px)] overflow-y-auto custom-scrollbar">
            <div className="glass-panel h-full p-8 rounded-[3rem] border-white/5 shadow-premium">
              <FilterContent />
            </div>
          </aside>

          {/* Mobile Filters Drawer */}
          <AnimatePresence>
            {showMobileFilters && (
              <>
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setShowMobileFilters(false)}
                  className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] lg:hidden"
                />
                <motion.div 
                  initial={{ x: '100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '100%' }}
                  transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                  className="fixed right-0 top-0 bottom-0 w-[85%] max-w-sm bg-[#0F0905] border-l border-white/10 z-[101] p-8 overflow-y-auto lg:hidden"
                >
                  <div className="flex justify-between items-center mb-10">
                    <h3 className="text-2xl font-serif font-bold">Filters</h3>
                    <button onClick={() => setShowMobileFilters(false)} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                      <X size={20} />
                    </button>
                  </div>
                  <FilterContent />
                  <button 
                    onClick={() => setShowMobileFilters(false)}
                    className="w-full mt-12 py-5 rounded-2xl bg-amber-primary text-dark-bg font-bold text-lg shadow-amber-glow active:scale-95 transition-all"
                  >
                    Show Results
                  </button>
                </motion.div>
              </>
            )}
          </AnimatePresence>

          <div className="flex-1">
            {loading ? (
              <div className="flex items-center justify-center h-64">
                <Loader2 className="w-8 h-8 animate-spin text-amber-primary" />
              </div>
            ) : filteredHomes.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-64 glass-panel rounded-[3rem] border-white/5">
                <Box className="w-12 h-12 text-white/20 mb-4" />
                <h3 className="text-xl font-bold text-white/60">No properties found</h3>
                <p className="text-sm text-white/40 mt-2">Try adjusting your filters</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {filteredHomes.map((home) => (
                  <motion.div
                    key={home._id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ y: -10 }}
                    className="glass-card group overflow-hidden rounded-[2.5rem] border-white/5 flex flex-col shadow-premium min-h-[580px] cursor-pointer"
                    onClick={() => navigate(`/home/${home._id}`)}
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img src={home.image || (home.images && home.images[0]) || 'https://via.placeholder.com/800'} alt={home.title} className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" />
                      {home.healthScore && (
                        <div className="absolute top-6 right-6 px-4 py-2 rounded-2xl text-[10px] font-black backdrop-blur-2xl bg-dark-bg/40 border border-white/10 text-amber-primary">
                          {home.healthScore} AI SCORE
                        </div>
                      )}
                    </div>

                    <div className="p-10 flex flex-col flex-1">
                      <div className="mb-6">
                        <span className="text-[10px] text-amber-primary font-black uppercase tracking-[0.4em] mb-3 block">{home.propertyType || home.type}</span>
                        <h3 className="text-3xl font-serif font-bold group-hover:text-amber-primary transition-colors leading-[1.1] line-clamp-2">
                          {home.title}
                        </h3>
                      </div>

                      <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-white/5 border border-white/5 w-fit mb-8">
                        <MapPin size={14} className="text-amber-primary" /> 
                        <span className="text-[11px] font-medium text-white/50">{home.address}</span>
                      </div>

                      <div className="mt-auto flex items-center justify-between">
                        <div className="flex flex-col">
                          <span className="text-3xl font-mono font-bold text-white tracking-tighter">₹{(home.price || home.rent || 0).toLocaleString()}</span>
                          <p className="text-[9px] text-white/30 uppercase font-black tracking-widest mt-1">Expected Price</p>
                        </div>
                        
                        <div className="w-12 h-12 rounded-full bg-amber-primary/10 flex items-center justify-center text-amber-primary group-hover:bg-amber-primary group-hover:text-dark-bg transition-all">
                          <ChevronRight size={24} />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <ThreeViewerModal 
        isOpen={!!active3DTour}
        onClose={() => setActive3DTour(null)}
        title={properties.find(h => h._id === active3DTour)?.title}
        address={properties.find(h => h._id === active3DTour)?.address}
      />
    </div>
  );
};

export default ExplorePage;
