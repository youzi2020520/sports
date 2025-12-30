import { motion } from 'motion/react';
import { Zap, Wind, Shield, Gauge } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Energy Return',
    description: 'Advanced cushioning technology that converts impact into explosive energy.'
  },
  {
    icon: Wind,
    title: 'Lightweight',
    description: 'Ultra-light materials that feel like nothing, perform like everything.'
  },
  {
    icon: Shield,
    title: 'Durability',
    description: 'Engineered to withstand the most intense training sessions.'
  },
  {
    icon: Gauge,
    title: 'Performance',
    description: 'Precision-crafted for peak athletic performance in every movement.'
  }
];

export function Features() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-[2px] bg-gradient-to-r from-red-500 to-orange-500"></div>
            <span className="text-sm tracking-widest text-gray-500">TECHNOLOGY</span>
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl tracking-tight mb-6">
            科技创新
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl">
            融合前沿科技与运动科学，打造突破性能极限的专业装备
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative bg-zinc-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 group-hover:border-red-500/50 transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8" />
                    </div>
                    
                    <h3 className="text-xl mb-3">
                      {feature.title}
                    </h3>
                    
                    <p className="text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
