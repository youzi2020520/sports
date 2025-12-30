import { motion } from 'motion/react';
import { Send, ArrowRightIcon } from 'lucide-react';
import { useState } from 'react';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', { email, phone });
    setEmail('');
    setPhone('');
  };

  return (
    <section className="py-32 bg-black relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-red-500/10 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-orange-500/10 rounded-full blur-[150px]"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        ></div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-8">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-sm tracking-widest">加入三叶草运动力场</span>
            </div>

            <h2 className="text-5xl sm:text-6xl lg:text-7xl tracking-tight mb-6">
              订阅专属优惠
            </h2>
            <p className="text-xl text-gray-400 mb-4">
              第一时间获取新品发布、限时折扣和专业运动资讯
            </p>
            <p className="text-sm text-gray-600">
              新用户专享首单8折优惠券
            </p>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-4 mb-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative group">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="您的邮箱地址"
                  required
                  className="w-full px-8 py-5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl focus:outline-none focus:border-red-500/50 focus:bg-white/10 transition-all placeholder:text-gray-600"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-2xl opacity-0 group-focus-within:opacity-100 transition-opacity -z-10 blur-xl"></div>
              </div>

              <div className="relative group">
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="手机号码（选填）"
                  className="w-full px-8 py-5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl focus:outline-none focus:border-red-500/50 focus:bg-white/10 transition-all placeholder:text-gray-600"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-2xl opacity-0 group-focus-within:opacity-100 transition-opacity -z-10 blur-xl"></div>
              </div>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full group relative px-8 py-6 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl flex items-center justify-center gap-3 overflow-hidden"
            >
              <span className="relative z-10 text-lg tracking-wide">立即订阅</span>
              <Send className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </motion.button>
          </motion.form>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              {
                icon: '🎁',
                title: '专属折扣',
                description: '会员尊享额外优惠',
              },
              {
                icon: '⚡',
                title: '优先购买',
                description: '新品抢先体验',
              },
              {
                icon: '📚',
                title: '运动指南',
                description: '专业训练建议',
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl text-center group hover:bg-white/10 hover:border-red-500/30 transition-all"
              >
                <div className="text-4xl mb-3">{benefit.icon}</div>
                <h3 className="text-lg mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-500">{benefit.description}</p>
              </div>
            ))}
          </motion.div>

          {/* Privacy */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center text-sm text-gray-600 mt-8"
          >
            订阅即表示您同意我们的
            <a href="#" className="text-red-500 hover:underline mx-1">隐私政策</a>
            和
            <a href="#" className="text-red-500 hover:underline mx-1">服务条款</a>
          </motion.p>
        </div>
      </div>
    </section>
  );
}
