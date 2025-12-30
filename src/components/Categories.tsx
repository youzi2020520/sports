import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    id: 1,
    title: "专业跑鞋系列",
    description: "采用最新缓震科技，为每一步提供极致舒适",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=600&fit=crop",
    badge: "NEW",
    productCount: "156",
    features: ["缓震科技", "透气网面", "轻量化"],
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    title: "运动服饰系列",
    description: "专业运动面料，助力最佳运动表现",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
    badge: "HOT",
    productCount: "248",
    features: ["速干面料", "弹性设计", "透气舒适"],
    gradient: "from-purple-500 to-pink-500"
  },
  {
    id: 3,
    title: "运动配件系列",
    description: "精致运动配件，完善运动装备",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=600&fit=crop",
    badge: "TRENDING",
    productCount: "89",
    features: ["专业设计", "耐用材质", "多功能"],
    gradient: "from-green-500 to-teal-500"
  },
  {
    id: 4,
    title: "篮球装备系列",
    description: "专业篮球装备，提升球场表现",
    image: "https://images.unsplash.com/photo-1552667466-07770ae110d0?w=800&h=600&fit=crop",
    badge: "PRO",
    productCount: "127",
    features: ["高弹力", "防滑设计", "专业认证"],
    gradient: "from-orange-500 to-red-500"
  },
  {
      id: 5,
      title: "瑜伽健身系列",
      description: "舒适瑜伽装备，专注身心平衡",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=600&fit=crop",
      badge: "WELLNESS",
      productCount: "95",
      features: ["环保材质", "柔软舒适", "修身设计"],
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      id: 6,
      title: "户外运动系列",
      description: "全天候户外装备，应对各种挑战",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=600&fit=crop",
      badge: "OUTDOOR",
      productCount: "178",
      features: ["防水设计", "耐磨材质", "多功能"],
      gradient: "from-teal-500 to-green-500"
    }
];

export function Categories() {
  return (
    <section className="py-32 bg-black relative overflow-hidden">
      {/* Gradient Orbs */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px]"></div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-[2px] bg-gradient-to-r from-red-500 to-orange-500"></div>
                <span className="text-sm tracking-widest text-gray-500">CATEGORIES</span>
              </div>
              <div className="flex items-end justify-between">
                <h2 className="text-5xl sm:text-6xl lg:text-7xl tracking-tight">
                  全品类运动
                </h2>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 group"
                >
                  <span className="text-sm">查看更多</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              {/* Image Container - 3:4 Ratio */}
              <div className="relative overflow-hidden rounded-2xl bg-zinc-900 aspect-[3/4]">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient Overlay - Container */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(0deg, 
                      ${category.gradient.includes('blue') ? 'rgba(59, 130, 246, 0.8)' : 
                        category.gradient.includes('purple') ? 'rgba(128, 0, 128, 0.8)' :
                        category.gradient.includes('green') ? 'rgba(34, 197, 94, 0.8)' :
                        category.gradient.includes('orange') ? 'rgba(251, 146, 60, 0.8)' :
                        category.gradient.includes('teal') ? 'rgba(20, 184, 166, 0.8)' :
                        category.gradient.includes('indigo') ? 'rgba(99, 102, 241, 0.8)' :
                        'rgba(239, 68, 68, 0.8)'}, 
                      rgba(0, 0, 0, 0.5) 50%, 
                      ${category.gradient.includes('blue') ? 'rgba(59, 130, 246, 0.8)' : 
                        category.gradient.includes('purple') ? 'rgba(128, 0, 128, 0.8)' :
                        category.gradient.includes('green') ? 'rgba(34, 197, 94, 0.8)' :
                        category.gradient.includes('orange') ? 'rgba(251, 146, 60, 0.8)' :
                        category.gradient.includes('teal') ? 'rgba(20, 184, 166, 0.8)' :
                        category.gradient.includes('indigo') ? 'rgba(99, 102, 241, 0.8)' :
                        'rgba(239, 68, 68, 0.8)'})`
                  }}
                />
                
                {/* Gradient Overlay - Container2 */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-b from-black via-transparent to-transparent" />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <div className={`px-4 py-2 bg-gradient-to-r ${category.gradient} rounded-full text-xs tracking-wider`}>
                    {category.badge}
                  </div>
                </div>

                {/* Product Count */}
                <div className="absolute top-4 right-4">
                  <div className="px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-xs text-white">
                    {category.productCount} 产品
                  </div>
                </div>

                {/* Category Info - Inside Card */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-white/80 tracking-wide">运动系列</span>
                    <div className="flex items-center gap-1">
                      <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                      <span className="text-sm text-white">{category.productCount}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-500 transition-colors">
                    {category.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className={`text-lg bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent font-medium`}>
                      立即探索
                    </span>
                    <ArrowRight className="w-4 h-4 text-white/70 group-hover:text-blue-500 transition-colors" />
                  </div>
                </div>
              </div>

              {/* Remove Category Info Below Card */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}