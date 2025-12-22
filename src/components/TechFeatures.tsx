import { motion } from 'motion/react';

export function TechFeatures() {
  const features = [
    {
      title: "缓震科技",
      description: "采用先进的缓震材料，有效减少运动冲击",
      stats: {
        value: "45%",
        label: "冲击减少"
      }
    },
    {
      title: "透气系统",
      description: "独特的透气设计，保持双脚干爽舒适",
      stats: {
        value: "3倍",
        label: "透气性能"
      }
    },
    {
      title: "支撑结构",
      description: "科学的支撑设计，提供稳定性与保护",
      stats: {
        value: "360°",
        label: "全方位支撑"
      }
    },
    {
      title: "耐磨材质",
      description: "高品质耐磨材料，延长产品使用寿命",
      stats: {
        value: "2.5x",
        label: "使用寿命"
      }
    },
    {
      title: "智能芯片",
      description: "内置智能传感器，实时监测运动数据",
      stats: {
        value: "100Hz",
        label: "数据采样"
      }
    },
    {
      title: "环保材料",
      description: "可降解环保材质，践行可持续发展",
      stats: {
        value: "100%",
        label: "可回收材料"
      }
    }
  ];

  return (
    <motion.section 
      className="py-24 bg-black relative overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-[2px] bg-gradient-to-r from-red-500 to-orange-500"></div>
            <span className="text-sm tracking-widest text-gray-500">TECHNOLOGY</span>
            <div className="w-12 h-[2px] bg-gradient-to-r from-red-500 to-orange-500"></div>
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl tracking-tight mb-6">
            科技创新
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto" style={{ fontSize: '20px' }}>
            科技创新，融合前沿科技与运动科学，打造突破性能极限的专业装备
          </p>
        </motion.div>

        <div className="grid grid-cols-3 gap-8 max-w-7xl mx-auto px-4" style={{ gap: '32px' }}>
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div 
                className="relative border border-white/10 rounded-2xl p-8 group-hover:border-red-500/50 transition-all duration-300 h-full flex flex-col justify-between cursor-pointer group-hover:shadow-2xl group-hover:shadow-red-500/20"
                style={{
                  height: '366px',
                  borderRadius: '16px',
                  background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.00) 100%)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, rgba(251, 44, 54, 0.05) 0%, rgba(255, 105, 0, 0.05) 100%)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.borderColor = 'rgba(251, 44, 54, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.00) 100%)';
                  e.currentTarget.style.transform = 'translateY(0px)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                }}
              >
                <div className="flex flex-col h-full">
                  <div className="flex-1">
                    <div 
                      className="w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                      style={{
                        borderRadius: '14px',
                        background: 'linear-gradient(135deg, rgba(251, 44, 54, 0.20) 0%, rgba(255, 105, 0, 0.20) 100%)'
                      }}
                    >
                      {index === 0 && (
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"> 
              <path d="M5.33324 18.6666C5.08093 18.6674 4.83355 18.5967 4.61985 18.4625C4.40614 18.3284 4.23489 18.1364 4.12597 17.9088C4.01706 17.6812 3.97497 17.4273 4.00457 17.1768C4.03418 16.9262 4.13428 16.6892 4.29324 16.4932L17.4932 2.89323C17.5923 2.77893 17.7272 2.7017 17.8759 2.6742C18.0246 2.6467 18.1782 2.67058 18.3115 2.7419C18.4449 2.81322 18.55 2.92775 18.6097 3.0667C18.6694 3.20565 18.68 3.36076 18.6399 3.50656L16.0799 11.5332C16.0044 11.7353 15.9791 11.9526 16.006 12.1666C16.033 12.3806 16.1115 12.5848 16.2347 12.7618C16.3579 12.9388 16.5223 13.0832 16.7136 13.1828C16.9049 13.2823 17.1176 13.3339 17.3332 13.3332H26.6666C26.9189 13.3324 27.1663 13.4031 27.38 13.5373C27.5937 13.6714 27.7649 13.8634 27.8738 14.091C27.9828 14.3186 28.0249 14.5724 27.9952 14.823C27.9656 15.0736 27.8655 15.3106 27.7066 15.5066L14.5066 29.1066C14.4076 29.2208 14.2726 29.2981 14.1239 29.3256C13.9752 29.3531 13.8216 29.3292 13.6883 29.2579C13.5549 29.1866 13.4498 29.072 13.3901 28.9331C13.3305 28.7941 13.3198 28.639 13.3599 28.4932L15.9199 20.4666C15.9954 20.2645 16.0207 20.0472 15.9938 19.8332C15.9668 19.6192 15.8884 19.415 15.7651 19.238C15.6419 19.061 15.4775 18.9165 15.2862 18.817C15.0949 18.7175 14.8822 18.6659 14.6666 18.6666H5.33324Z" stroke="#FB2C36" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/> 
            </svg>
          )}
                      {index === 1 && (
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                          <path d="M17.0665 26.1335C17.4045 26.387 17.798 26.5566 18.2144 26.6282C18.6308 26.6999 19.0583 26.6715 19.4616 26.5455C19.8649 26.4195 20.2325 26.1995 20.5341 25.9036C20.8357 25.6077 21.0627 25.2443 21.1963 24.8434C21.3299 24.4426 21.3664 24.0157 21.3027 23.598C21.2389 23.1803 21.0769 22.7837 20.8298 22.4409C20.5828 22.0982 20.2578 21.819 19.8817 21.6264C19.5055 21.4339 19.089 21.3335 18.6665 21.3335H2.6665" stroke="#FB2C36" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M23.3332 10.6668C23.6741 10.2123 24.1255 9.85242 24.6446 9.62142C25.1638 9.39041 25.7333 9.29594 26.2992 9.34697C26.8651 9.39799 27.4085 9.59282 27.878 9.91296C28.3474 10.2331 28.7272 10.6679 28.9813 11.1761C29.2354 11.6843 29.3553 12.249 29.3298 12.8167C29.3043 13.3843 29.1341 13.9359 28.8353 14.4193C28.5366 14.9026 28.1193 15.3015 27.6231 15.5782C27.1268 15.8549 26.568 16.0002 25.9998 16.0002H2.6665" stroke="#FB2C36" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M13.0665 5.86683C13.4045 5.61331 13.798 5.44374 14.2144 5.3721C14.6308 5.30046 15.0583 5.32881 15.4616 5.45479C15.8649 5.58078 16.2325 5.80081 16.5341 6.09674C16.8357 6.39267 17.0627 6.75603 17.1963 7.15689C17.3299 7.55774 17.3664 7.98461 17.3027 8.40232C17.239 8.82002 17.0769 9.21661 16.8298 9.55939C16.5828 9.90217 16.2578 10.1813 15.8817 10.3739C15.5055 10.5664 15.089 10.6668 14.6665 10.6668H2.6665" stroke="#FB2C36" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                      )}
                      {index === 2 && (
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"> 
                          <path d="M26.6668 17.3333C26.6668 23.9999 22.0002 27.3333 16.4535 29.2666C16.163 29.365 15.8475 29.3603 15.5602 29.2533C10.0002 27.3333 5.3335 23.9999 5.3335 17.3333V7.99995C5.3335 7.64633 5.47397 7.30719 5.72402 7.05714C5.97407 6.80709 6.31321 6.66662 6.66683 6.66662C9.3335 6.66662 12.6668 5.06662 14.9868 3.03995C15.2693 2.79861 15.6286 2.66602 16.0002 2.66602C16.3717 2.66602 16.731 2.79861 17.0135 3.03995C19.3468 5.07995 22.6668 6.66662 25.3335 6.66662C25.6871 6.66662 26.0263 6.80709 26.2763 7.05714C26.5264 7.30719 26.6668 7.64633 26.6668 7.99995V17.3333Z" stroke="#FB2C36" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/> 
                        </svg>
                      )}
                      {index === 3 && (
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"> 
                          <path d="M16 18.6668L21.3333 13.3335" stroke="#FB2C36" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/> 
                          <path d="M4.45341 25.3331C3.28304 23.3062 2.66684 21.0069 2.66675 18.6664C2.66666 16.3258 3.28268 14.0265 4.45291 11.9995C5.62313 9.97248 7.30631 8.28923 9.33327 7.11893C11.3602 5.94863 13.6595 5.33252 16.0001 5.33252C18.3406 5.33252 20.6399 5.94863 22.6669 7.11893C24.6939 8.28923 26.377 9.97248 27.5473 11.9995C28.7175 14.0265 29.3335 16.3258 29.3334 18.6664C29.3333 21.0069 28.7171 23.3062 27.5467 25.3331" stroke="#FB2C36" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/> 
                        </svg>
                      )}
                      {index === 4 && (
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"> 
                          <path d="M15.9998 29.3333C18.4752 29.3333 20.8492 28.35 22.5995 26.5997C24.3498 24.8493 25.3332 22.4754 25.3332 20C25.3332 17.3333 23.9998 14.8 21.3332 12.6667C18.6665 10.5333 16.6665 7.33333 15.9998 4C15.3332 7.33333 13.3332 10.5333 10.6665 12.6667C7.99984 14.8 6.6665 17.3333 6.6665 20C6.6665 22.4754 7.64983 24.8493 9.40017 26.5997C11.1505 28.35 13.5245 29.3333 15.9998 29.3333Z" stroke="#FB2C36" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/> 
                        </svg>
                      )}
                      {index === 5 && (
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"> 
               <path d="M17.1068 2.90649C16.7594 2.74802 16.382 2.66602 16.0001 2.66602C15.6183 2.66602 15.2409 2.74802 14.8934 2.90649L3.46678 8.10649C3.23018 8.21082 3.02902 8.38169 2.8878 8.5983C2.74658 8.81491 2.67139 9.06791 2.67139 9.32649C2.67139 9.58507 2.74658 9.83807 2.8878 10.0547C3.02902 10.2713 3.23018 10.4422 3.46678 10.5465L14.9068 15.7598C15.2542 15.9183 15.6316 16.0003 16.0134 16.0003C16.3953 16.0003 16.7727 15.9183 17.1201 15.7598L28.5601 10.5598C28.7967 10.4555 28.9979 10.2846 29.1391 10.068C29.2803 9.85141 29.3555 9.59841 29.3555 9.33982C29.3555 9.08124 29.2803 8.82824 29.1391 8.61163C28.9979 8.39502 28.7967 8.22415 28.5601 8.11983L17.1068 2.90649Z" stroke="#FB2C36" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/> 
               <path d="M2.66651 16C2.66588 16.255 2.7384 16.5049 2.87546 16.7199C3.01253 16.935 3.2084 17.1062 3.43984 17.2133L14.9065 22.4267C15.2521 22.5832 15.6271 22.6641 16.0065 22.6641C16.3859 22.6641 16.7609 22.5832 17.1065 22.4267L28.5465 17.2267C28.7825 17.1206 28.9826 16.9481 29.1222 16.7303C29.2619 16.5125 29.3352 16.2587 29.3332 16" stroke="#FB2C36" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/> 
               <path d="M2.66651 22.6665C2.66588 22.9215 2.7384 23.1714 2.87546 23.3864C3.01253 23.6015 3.2084 23.7727 3.43984 23.8798L14.9065 29.0932C15.2521 29.2497 15.6271 29.3306 16.0065 29.3306C16.3859 29.3306 16.7609 29.2497 17.1065 29.0932L28.5465 23.8932C28.7825 23.7871 28.9826 23.6146 29.1222 23.3968C29.2619 23.179 29.3352 22.9253 29.3332 22.6665" stroke="#FB2C36" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/> 
             </svg>
          )}
                    </div>
                    
                    <h3 className="text-xl mb-3 font-semibold">
                      {feature.title}
                    </h3>
                    
                    <p className="text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                  
                  {/* 分割线 */}
                  <div className="border-t border-white/10 my-4"></div>
                  
                  {/* 数据展示区域 */}
          <div className="text-left">
            <div 
              className="mb-1"
              style={{
                fontFamily: 'Inter',
                fontSize: '24px',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: '32px',
                letterSpacing: '0.07px',
                background: 'linear-gradient(90deg, #FB2C36 0%, #FF6900 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              {feature.stats.value}
            </div>
            <div 
              style={{
                color: '#4A5565',
                fontFamily: 'Inter',
                fontSize: '12px',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: '16px'
              }}
            >
              {feature.stats.label}
            </div>
          </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center" style={{ marginTop: '80px' }}>
          <button 
            style={{
              borderRadius: '16777200px',
              background: 'linear-gradient(90deg, #FB2C36 0%, #FF6900 100%)',
              display: 'flex',
              height: '68px',
              padding: '20px 48.602px 20px 50px',
              justifyContent: 'center',
              alignItems: 'center',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            className="text-white font-medium hover:opacity-90 hover:scale-105"
          >
            了解更多科技详情
          </button>
        </div>
      </div>
    </motion.section>
  );
}