export function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">运动品牌</h3>
            <p className="text-gray-400 text-sm">
              专注于为运动爱好者提供高品质的运动装备和服务。
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">产品</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">跑鞋</a></li>
              <li><a href="#" className="hover:text-white transition-colors">运动服饰</a></li>
              <li><a href="#" className="hover:text-white transition-colors">配件</a></li>
              <li><a href="#" className="hover:text-white transition-colors">新品</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">支持</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">尺码指南</a></li>
              <li><a href="#" className="hover:text-white transition-colors">配送信息</a></li>
              <li><a href="#" className="hover:text-white transition-colors">退换政策</a></li>
              <li><a href="#" className="hover:text-white transition-colors">联系我们</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">关注我们</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                <span className="text-sm">f</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                <span className="text-sm">t</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                <span className="text-sm">i</span>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2026 运动品牌. 保留所有权利.</p>
        </div>
      </div>
    </footer>
  );
}