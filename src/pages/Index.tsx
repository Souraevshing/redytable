import { Linkedin, Sparkles } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-black overflow-hidden relative">
      {/* Animated background gradients */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-gradient-radial from-purple-500/30 via-transparent to-transparent animate-pulse"
          style={{ animationDuration: "3s" }}
        />
        <div
          className="absolute inset-0 bg-gradient-radial from-orange-500/20 via-transparent to-transparent animate-pulse"
          style={{ animationDuration: "4s" }}
        />
        <div
          className="absolute inset-0 bg-gradient-radial from-pink-500/20 via-transparent to-transparent animate-pulse"
          style={{ animationDuration: "5s" }}
        />

        {/* Additional animated elements */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                opacity: 0.1,
              }}
            >
              <Sparkles className="w-4 h-4 text-white" />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 bg-[url('/lovable-uploads/9c7c7ace-53f4-4079-b2d9-12c8e0ebd030.png')] bg-cover bg-center opacity-30 mix-blend-overlay" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
        {/* Main Content */}
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <div className="flex flex-col items-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold animate-fade-up bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-300 via-violet-400 to-indigo-400 tracking-wider drop-shadow-lg">
              Redytable
            </h2>
            <h1 className="text-5xl md:text-6xl font-bold text-white animate-fade-up bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-white/80">
              Coming soon!
            </h1>
          </div>

          <div
            className="relative p-6 rounded-3xl backdrop-blur-xl bg-black/20 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] animate-fade-up hover:bg-white/[0.04] transition-all duration-300 group w-full max-w-[480px] mx-auto"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-white/[0.08] to-transparent pointer-events-none" />
            <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-b from-white/20 to-white/[0.02] pointer-events-none" />

            {/* Centered content inside the glass box */}
            <div className="relative z-10 space-y-4 text-center py-4">
              <h2 className="text-3xl font-medium text-white mb-2">
                Fast. Fresh. Fair.
              </h2>
              <p className="text-base text-white/70 font-light leading-relaxed">
                Zero commission, Zero emission.
                <br />
                Redytable is redefining food delivery with 15-minute,
                <br />
                commission-free, and eco-friendly meals.
              </p>
              <div className="flex items-center justify-center gap-2 mt-4">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <p className="text-white/60">Launching Very Soon</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="absolute bottom-12 flex gap-4">
          <a
            href="https://www.linkedin.com/company/redytable-com"
            className="p-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors"
            target="_blank"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Index;
