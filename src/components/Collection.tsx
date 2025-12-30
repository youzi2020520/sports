import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function Collection() {
  return (
    <section className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Main Collection */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group relative overflow-hidden rounded-3xl h-[600px] cursor-pointer"
          >
            <img 
              src="https://images.unsplash.com/photo-1637844528612-064026615fcd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzcG9ydHN3ZWFyfGVufDF8fHx8MTc2NTQyMDUxNXww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Collection"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
            
            <div className="absolute bottom-0 left-0 right-0 p-12">
              <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm mb-4">
                WINTER 2025
              </span>
              <h3 className="text-4xl sm:text-5xl mb-4">
                Performance
                <br />
                <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                  Collection
                </span>
              </h3>
              <p className="text-gray-300 mb-6 max-w-md">
                Elevate your game with our latest performance-driven designs.
              </p>
              <motion.button
                whileHover={{ x: 5 }}
                className="flex items-center gap-2 text-white group-hover:text-red-500 transition-colors"
              >
                <span>Explore Collection</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>

          {/* Two smaller cards */}
          <div className="grid grid-rows-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="group relative overflow-hidden rounded-3xl cursor-pointer"
            >
              <img 
                src="https://images.unsplash.com/photo-1762690285055-fa80848e825b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdGhsZXRpYyUyMHJ1bm5pbmclMjBzaG9lc3xlbnwxfHx8fDE3NjU0MjA1MTR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Footwear"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-2xl sm:text-3xl mb-2">
                  Footwear
                </h3>
                <motion.button
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2 text-gray-300 group-hover:text-white transition-colors"
                >
                  <span>Shop Now</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="group relative overflow-hidden rounded-3xl cursor-pointer"
            >
              <img 
                src="https://images.unsplash.com/photo-1511499008188-de491bbbae98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBzbmVha2VycyUyMGJsYWNrfGVufDF8fHx8MTc2NTQyMDUxNXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Apparel"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-2xl sm:text-3xl mb-2">
                  Apparel
                </h3>
                <motion.button
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2 text-gray-300 group-hover:text-white transition-colors"
                >
                  <span>Shop Now</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
