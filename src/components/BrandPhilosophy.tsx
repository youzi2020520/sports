import { motion } from 'motion/react';

export function BrandPhilosophy() {
  const features = [
    {
      id: '01',
      title: '创新科技',
      description: '持续研发突破性运动科技',
    },
    {
      id: '02',
      title: '专业品质',
      description: '严苛标准确保卓越性能',
    },
    {
      id: '03',
      title: '可持续发展',
      description: '环保材料守护地球未来',
    },
    {
      id: '04',
      title: '社区文化',
      description: '连接全球运动爱好者',
    },
  ];

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background - Transparent without nested backgrounds */}
      <div className="absolute inset-0"></div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Layout - Title and Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Section Header - Same style as FeaturedProducts */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-[2px] bg-gradient-to-r from-red-500 to-orange-500"></div>
                <span className="text-sm tracking-widest text-gray-500">PHILOSOPHY</span>
              </div>
              <h2 className="text-5xl sm:text-6xl lg:text-7xl tracking-tight mb-6 text-left">
                <div>不止于</div>
                <div>运动装备</div>
              </h2>
            </div>

            {/* Content */}
            <div 
              className="space-y-6"
              style={{
                fontSize: '18px',
                fontWeight: '400',
                lineHeight: '29.25px',
                letterSpacing: '-0.439px',
              }}
            >
              <p className="text-gray-300">
                运动力场诞生于对极限的追求和对完美的执着。我们相信，每一次突破都源于精密的科技支撑，每一个胜利都离不开专业的装备护航。
              </p>
              <p className="text-gray-300">
                15年来，我们专注于将前沿运动科技与人体工学完美结合，为全球超过50万运动爱好者提供专业级装备。从跑道到球场，从健身房到瑜伽垫，我们始终与你同行。
              </p>
            </div>

            {/* Statistics */}
            <div 
              className="mt-12"
              style={{
                display: 'grid',
                width: '632px',
                height: '68px',
                rowGap: '32px',
                columnGap: '32px',
                gridTemplateRows: 'repeat(1, minmax(0, 1fr))',
                gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
              }}
            >
              <div className="text-left flex items-center gap-3">
                <div className="w-0.5 h-20 bg-gradient-to-b from-red-500 to-orange-500 rounded-full"></div>
                <div className="ml-1">
                  <div 
                    className="font-bold mb-2"
                    style={{
                      fontSize: '36px',
                      fontStyle: 'normal',
                      letterSpacing: '0.369px',
                      background: 'linear-gradient(135deg, #FB2C36 0%, #FF6900 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    98%
                  </div>
                  <div className="text-sm text-gray-500 tracking-wide -mt-1">客户满意度</div>
                </div>
              </div>
              <div className="text-left flex items-center gap-3">
                <div className="w-0.5 h-20 bg-gradient-to-b from-red-500 to-orange-500 rounded-full"></div>
                <div className="ml-1">
                  <div 
                    className="font-bold mb-2"
                    style={{
                      fontSize: '36px',
                      fontStyle: 'normal',
                      letterSpacing: '0.369px',
                      background: 'linear-gradient(135deg, #FB2C36 0%, #FF6900 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    50+
                  </div>
                  <div className="text-sm text-gray-500 tracking-wide -mt-1">专业技术</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Layout - Four Feature Boxes */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              display: 'grid',
              width: '632px',
              height: '409.5px',
              rowGap: '24px',
              columnGap: '24px',
              flexShrink: '0',
              gridTemplateRows: 'repeat(2, minmax(0, 1fr))',
              gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
            }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="group cursor-pointer"
              >
                <div 
                  className="p-6 rounded-2xl border border-white/10 hover:border-red-500/30 transition-all duration-300 h-full flex flex-col justify-between"
                  style={{
                    background: 'linear-gradient(135deg, rgba(251, 44, 54, 0.10) 0%, rgba(255, 105, 0, 0.10) 100%)',
                    opacity: 0.5,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = '0.7';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = '0.5';
                  }}
                >
                  <div>
                    <div 
                      className="text-2xl font-bold mb-3 transition-colors"
                      style={{
                        color: 'rgba(255, 255, 255, 0.7)',
                      }}
                    >
                      {feature.id}
                    </div>
                    <h3 
                      className="text-xl font-semibold mb-2 transition-colors"
                      style={{
                        color: '#FFFFFF',
                      }}
                    >
                      {feature.title}
                    </h3>
                  </div>
                  <p 
                    className="leading-relaxed"
                    style={{
                      fontSize: '14px',
                      color: '#99A1AF',
                    }}
                  >
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}