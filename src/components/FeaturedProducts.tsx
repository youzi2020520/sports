import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'AeroFly 跑鞋',
    category: '跑步系列',
    price: '¥1,299',
    rating: 4.9,
    reviews: 2847,
    image: 'https://images.unsplash.com/photo-1695459468644-717c8ae17eed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBzaG9lcyUyMHNuZWFrZXJzfGVufDF8fHx8MTc2NTM2Mzc3NXww&ixlib=rb-4.1.0&q=80&w=1080',
    badge: '热销',
    gradient: 'from-red-500 to-orange-500',
  },
  {
    id: 2,
    name: 'ProFit 训练服',
    category: '训练系列',
    price: '¥899',
    rating: 4.8,
    reviews: 1932,
    image: 'https://images.unsplash.com/photo-1763771522867-c26bf75f12bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdGhsZXRpYyUyMGFwcGFyZWwlMjBjbG90aGluZ3xlbnwxfHx8fDE3NjU0MjExMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    badge: '新品',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    id: 3,
    name: 'FlexMove 瑜伽裤',
    category: '瑜伽系列',
    price: '¥699',
    rating: 5.0,
    reviews: 3621,
    image: 'https://images.unsplash.com/photo-1612732362547-14adf627f24e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwZXhlcmNpc2UlMjB3ZWxsbmVzc3xlbnwxfHx8fDE3NjU0MjY5OTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    badge: '推荐',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    id: 4,
    name: 'CourtPro 篮球鞋',
    category: '篮球系列',
    price: '¥1,499',
    rating: 4.9,
    reviews: 2145,
    image: 'https://images.unsplash.com/photo-1762025930827-9f1dda45aff8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXNrZXRiYWxsJTIwcGxheWVyJTIwYWN0aW9ufGVufDF8fHx8MTc2NTQwMTgwMnww&ixlib=rb-4.1.0&q=80&w=1080',
    badge: '限量',
    gradient: 'from-blue-500 to-cyan-500',
  },
];

export function FeaturedProducts() {
  return (
    <section className="py-32 bg-black relative overflow-hidden">
      {/* Gradient Orbs */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-red-500/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[120px]"></div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-[2px] bg-gradient-to-r from-red-500 to-orange-500"></div>
              <span className="text-sm tracking-widest text-gray-500">FEATURED</span>
            </div>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl tracking-tight mb-6">
              精选推荐
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl">
              汇聚全球顶尖运动科技，为你甄选每一件专业装备
            </p>
          </motion.div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-2xl bg-zinc-900 mb-6 aspect-square">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <div className={`px-4 py-2 bg-gradient-to-r ${product.gradient} rounded-full text-xs tracking-wider`}>
                    {product.badge}
                  </div>
                </div>

                {/* Quick Add Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <button className="px-8 py-4 bg-white text-black rounded-full hover:scale-105 transition-transform">
                    快速购买
                  </button>
                </motion.div>
              </div>

              {/* Product Info */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-500 tracking-wide">{product.category}</span>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                    <span className="text-sm">{product.rating}</span>
                  </div>
                </div>
                <h3 className="text-xl mb-2 group-hover:text-red-500 transition-colors">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between">
                  <span className={`text-2xl bg-gradient-to-r ${product.gradient} bg-clip-text text-transparent`}>
                    {product.price}
                  </span>
                  <span className="text-xs text-gray-600">{product.reviews.toLocaleString()} 评价</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-12 py-5 border-2 border-white/10 rounded-full hover:border-red-500/50 hover:bg-red-500/5 transition-all text-lg tracking-wide"
          >
            查看更多产品
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
