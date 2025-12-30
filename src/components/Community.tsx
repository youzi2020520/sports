export function Community() {
  return (
    <section className="py-16 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">运动社区</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4">加入我们的运动大家庭</h3>
            <p className="text-gray-300 mb-6">
              与来自世界各地的运动爱好者一起分享经验、交流心得、参加活动。
              无论你是初学者还是专业运动员，都能在这里找到属于自己的位置。
            </p>
            <ul className="space-y-3 text-gray-300">
              <li>• 定期举办线下运动活动</li>
              <li>• 专业教练在线指导</li>
              <li>• 会员专属优惠和福利</li>
              <li>• 运动数据追踪与分析</li>
            </ul>
          </div>
          <div className="bg-gray-800 rounded-lg p-8 text-center">
            <div className="text-4xl font-bold text-blue-500 mb-2">50,000+</div>
            <div className="text-gray-400 mb-6">活跃会员</div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors">
              立即加入
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}