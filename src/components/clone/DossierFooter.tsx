const DossierFooter = () => {
  return (
    <footer className="relative bg-gradient-to-t from-gray-950 via-gray-900 to-black py-16 px-4 md:px-8 text-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23fb923c%22%20fill-opacity%3D%220.4%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221.5%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Main Content */}
        <div className="mb-12">
          <div className="relative inline-block mb-6">
            <div className="absolute inset-0 bg-orange-400/20 rounded-full blur-xl"></div>
            <img 
              src="https://cdn.poehali.dev/files/b41cc154-960e-487e-bc47-03469d7602e4.png" 
              alt="Эмблема Галактической Республики" 
              className="relative w-16 h-16 mx-auto brightness-0 invert drop-shadow-2xl"
            />
          </div>
          
          <h3 className="text-3xl md:text-4xl font-orbitron font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-400 mb-6 tracking-wider">
            ДЛЯ РЕСПУБЛИКИ. ДЛЯ ДЕМОКРАТИИ.
          </h3>
          
          <div className="inline-flex items-center gap-3 bg-gray-900/50 backdrop-blur-sm border border-orange-400/30 rounded-full px-6 py-3 mb-8">
            <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
            <span className="text-orange-300 font-orbitron font-semibold tracking-wide">Отряд "Призрак" - ЭРК В.А.Р.</span>
            <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
          </div>
        </div>
        
        {/* Decorative Divider */}
        <div className="flex items-center justify-center mb-8">
          <div className="h-px bg-gradient-to-r from-transparent via-orange-400/50 to-transparent flex-1 max-w-xs"></div>
          <div className="mx-4 w-3 h-3 border-2 border-orange-400/50 rotate-45"></div>
          <div className="h-px bg-gradient-to-r from-transparent via-orange-400/50 to-transparent flex-1 max-w-xs"></div>
        </div>
        
        {/* Copyright Info */}
        <div className="space-y-3">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm">
            <div className="flex items-center gap-2 text-orange-400/80">
              <div className="w-1 h-1 bg-orange-400 rounded-full"></div>
              <span className="font-mono">© 22 ДБЯ - 19 ДБЯ</span>
            </div>
            <div className="hidden md:block w-1 h-1 bg-orange-400/50 rounded-full"></div>
            <div className="flex items-center gap-2 text-orange-400/80">
              <div className="w-1 h-1 bg-orange-400 rounded-full"></div>
              <span className="font-mono">Войны клонов</span>
            </div>
            <div className="hidden md:block w-1 h-1 bg-orange-400/50 rounded-full"></div>
            <div className="flex items-center gap-2 text-orange-400/80">
              <div className="w-1 h-1 bg-orange-400 rounded-full"></div>
              <span className="font-mono">Gmod RP Server Void</span>
            </div>
          </div>
          <div className="text-orange-500/60 text-xs font-orbitron tracking-widest">
            АВТОР: <span className="text-orange-400 font-bold">RAMPA</span>
          </div>
        </div>
      </div>
      
      {/* Subtle Glow Effects */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-32 bg-orange-400/5 rounded-full blur-3xl"></div>
    </footer>
  );
};

export default DossierFooter;