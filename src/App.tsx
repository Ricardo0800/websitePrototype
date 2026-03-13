import { useState, useEffect } from "react";
import { 
  Activity, 
  ShieldCheck, 
  Zap, 
  MapPin, 
  Phone, 
  Mail, 
  Instagram, 
  Facebook, 
  Twitter, 
  CheckCircle2, 
  Star,
  Menu,
  X,
  ArrowRight,
  ChevronRight,
  HeartPulse,
  Sparkles
} from "lucide-react";
import { motion } from "motion/react";
import Chatbot from "./components/Chatbot";
import SmileSimulator from "./components/SmileSimulator";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [clinicData, setClinicData] = useState({
    name: "Modern Dental Care",
    city: "Your City",
    type: "Dental Clinic"
  });

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const nome = urlParams.get('nome');
    const cidade = urlParams.get('cidade');
    const tipo = urlParams.get('tipo');

    if (nome || cidade || tipo) {
      setClinicData({
        name: nome || "Modern Dental Care",
        city: cidade || "Your City",
        type: tipo || "Dental Clinic"
      });
    }
  }, []);

  const services = [
    {
      title: "Smile Design",
      description: "Customized aesthetic planning to create your perfect, natural-looking smile.",
      icon: <Sparkles className="w-8 h-8 text-indigo-400" />,
    },
    {
      title: "Dental Implants",
      description: "Advanced restorative solutions to replace missing teeth with permanent, natural results.",
      icon: <ShieldCheck className="w-8 h-8 text-indigo-400" />,
    },
    {
      title: "Invisalign®",
      description: "Clear, comfortable orthodontic treatment to straighten your teeth without braces.",
      icon: <Zap className="w-8 h-8 text-indigo-400" />,
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Local Resident",
      content: `The care at ${clinicData.name} is exceptional. I've never felt more confident in my smile after my sessions in ${clinicData.city}.`,
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Patient",
      content: "Professional, clean, and effective. The AI visualization of my potential smile was a complete game changer.",
      rating: 5,
    },
    {
      name: "Elena Rodriguez",
      role: "Business Owner",
      content: `Finally found a place in ${clinicData.city} that understands aesthetic dentistry. Highly recommended.`,
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-[#050505] font-sans text-gray-100 selection:bg-indigo-500 selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 bg-black/50 backdrop-blur-xl border-b border-white/10">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/20">
              <Sparkles className="text-white w-6 h-6" />
            </div>
            <span className="text-xl font-display font-bold tracking-tight uppercase">
              {clinicData.name.split(' ')[0]}<span className="text-indigo-500">{clinicData.name.split(' ').slice(1).join(' ') || 'CARE'}</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Services</a>
            <a href="#about" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">About</a>
            <a href="#testimonials" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Reviews</a>
            <a href="#contact" className="px-5 py-2.5 bg-indigo-600 text-white rounded-full text-sm font-semibold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-500/20">
              Book Appointment
            </a>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black border-t border-white/10 p-6 space-y-4">
            <a href="#services" className="block text-lg font-medium text-gray-300" onClick={() => setIsMenuOpen(false)}>Services</a>
            <a href="#about" className="block text-lg font-medium text-gray-300" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#testimonials" className="block text-lg font-medium text-gray-300" onClick={() => setIsMenuOpen(false)}>Reviews</a>
            <a href="#contact" className="block w-full py-3 bg-indigo-600 text-white text-center rounded-xl font-bold" onClick={() => setIsMenuOpen(false)}>
              Book Appointment
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 -z-10">
          <img 
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-20"
            alt="Modern Clinic Background"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        </div>

        <div className="container mx-auto px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-widest mb-8">
              <Sparkles className="w-4 h-4" />
              Next-Gen {clinicData.type}
            </div>
            <h1 className="text-5xl md:text-8xl font-display font-bold leading-[1.05] mb-8 tracking-tight">
              Modern Care at <span className="text-indigo-500">{clinicData.name}</span> in <span className="text-white underline decoration-indigo-500/50 underline-offset-8">{clinicData.city}</span>
            </h1>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              Experience the future of dentistry. We combine advanced clinical techniques with AI-driven smile design to create your perfect aesthetic.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="#contact" className="px-10 py-5 bg-indigo-600 text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-indigo-700 transition-all shadow-2xl shadow-indigo-500/40 hover:scale-105 active:scale-95">
                Claim Your Consultation <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#services" className="px-10 py-5 bg-white/5 text-white border border-white/10 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-white/10 transition-all backdrop-blur-sm">
                View Our Methods
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">Advanced <span className="text-indigo-500">Aesthetics</span></h2>
              <p className="text-gray-400 text-lg">Our clinic utilizes state-of-the-art technology to design your perfect smile, focusing on both health and beauty.</p>
            </div>
            <div className="hidden md:block">
              <div className="text-right">
                <div className="text-5xl font-display font-bold text-indigo-500">98%</div>
                <div className="text-gray-500 uppercase tracking-widest text-xs font-bold">Success Rate</div>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="p-10 rounded-[40px] bg-white/5 border border-white/10 hover:border-indigo-500/50 hover:bg-white/[0.08] transition-all group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-indigo-500/10 transition-colors" />
                <div className="mb-8 p-5 bg-indigo-500/10 rounded-2xl inline-block group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-8 leading-relaxed text-lg">{service.description}</p>
                <a href="#contact" className="flex items-center gap-2 text-indigo-400 font-bold group-hover:gap-4 transition-all">
                  Book Session <ChevronRight className="w-5 h-5" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-white/[0.02] border-y border-white/5">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="aspect-square rounded-[60px] overflow-hidden border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=1000" 
                alt="Dental Care" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-indigo-600/20 blur-[100px] -z-10" />
          </div>
          <div>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-10 leading-tight">Elite Dentistry for <span className="text-indigo-500">High Performers</span></h2>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              At {clinicData.name}, we understand that your smile is your greatest asset. Whether you're a professional athlete or a busy executive in {clinicData.city}, we provide the specialized care you need to stay at the top of your game.
            </p>
            <div className="space-y-6 mb-12">
              {[
                "AI-Powered Smile Visualization",
                "Digital Impression Scanning",
                "Customized Aesthetic Roadmaps",
                "Priority Scheduling for Members"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-10 h-10 bg-indigo-500/10 text-indigo-400 rounded-xl flex items-center justify-center group-hover:bg-indigo-500 group-hover:text-white transition-all">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <span className="text-lg font-medium text-gray-300">{item}</span>
                </div>
              ))}
            </div>
            <button className="px-10 py-5 bg-white text-black rounded-2xl font-bold hover:bg-gray-200 transition-all shadow-xl shadow-white/5">
              Explore Our Facility
            </button>
          </div>
        </div>
      </section>

      {/* AI Smile Simulator Section */}
      <SmileSimulator />

      {/* Testimonials Section */}
      <section id="testimonials" className="py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">Trusted by <span className="text-indigo-500">Hundreds</span></h2>
            <p className="text-gray-400 text-xl">Real results from real patients in {clinicData.city}.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {testimonials.map((t, i) => (
              <div key={i} className="p-10 rounded-[40px] bg-white/[0.03] border border-white/5 relative">
                <div className="flex text-indigo-500 mb-8">
                  {[...Array(t.rating)].map((_, i) => <Star key={i} fill="currentColor" className="w-5 h-5" />)}
                </div>
                <p className="text-gray-300 italic mb-10 text-lg leading-relaxed">"{t.content}"</p>
                <div className="flex items-center gap-5">
                  <img src={`https://i.pravatar.cc/100?img=${i+30}`} className="w-14 h-14 rounded-2xl grayscale" alt={t.name} />
                  <div>
                    <div className="font-bold text-lg">{t.name}</div>
                    <div className="text-sm text-gray-500 uppercase tracking-widest">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-indigo-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-5xl md:text-7xl font-display font-bold mb-10 text-white">Start Your <span className="text-black/30">Transformation</span></h2>
              <p className="text-indigo-100 mb-12 text-xl leading-relaxed">Don't hide your smile any longer. Schedule your initial consultation at {clinicData.name} today and take the first step towards a more confident you.</p>
              
              <div className="space-y-10">
                <div className="flex items-center gap-8 group">
                  <div className="w-16 h-16 bg-white/10 rounded-3xl flex items-center justify-center group-hover:bg-white group-hover:text-indigo-600 transition-all duration-500">
                    <MapPin className="w-8 h-8" />
                  </div>
                  <div>
                    <div className="font-bold text-2xl text-white mb-1">Visit Us</div>
                    <div className="text-indigo-100 text-lg opacity-80">123 Wellness Way, {clinicData.city}</div>
                  </div>
                </div>
                <div className="flex items-center gap-8 group">
                  <div className="w-16 h-16 bg-white/10 rounded-3xl flex items-center justify-center group-hover:bg-white group-hover:text-indigo-600 transition-all duration-500">
                    <Phone className="w-8 h-8" />
                  </div>
                  <div>
                    <div className="font-bold text-2xl text-white mb-1">Call Us</div>
                    <div className="text-indigo-100 text-lg opacity-80">+1 (800) 555-WELL</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-black rounded-[60px] p-12 text-white shadow-2xl border border-white/10">
              <h3 className="text-3xl font-bold mb-10">Request a Callback</h3>
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-6">
                  <input type="text" className="w-full p-5 bg-white/5 border border-white/10 rounded-2xl focus:border-indigo-500 focus:outline-none transition-all" placeholder="Full Name" />
                  <input type="email" className="w-full p-5 bg-white/5 border border-white/10 rounded-2xl focus:border-indigo-500 focus:outline-none transition-all" placeholder="Email Address" />
                  <textarea className="w-full p-5 bg-white/5 border border-white/10 rounded-2xl focus:border-indigo-500 focus:outline-none transition-all h-32 resize-none" placeholder="How can we help you?"></textarea>
                </div>
                <button className="w-full py-6 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-2xl shadow-indigo-500/20 text-lg">
                  Send Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-black border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center">
                <Sparkles className="text-white w-6 h-6" />
              </div>
              <span className="text-xl font-display font-bold tracking-tight uppercase">{clinicData.name}</span>
            </div>
            
            <div className="flex gap-12 text-sm font-bold text-gray-500 uppercase tracking-widest">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Support</a>
            </div>

            <div className="flex gap-6">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all group">
                  <Icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-20 pt-10 border-t border-white/5 text-center text-sm text-gray-600 uppercase tracking-[0.2em]">
            © 2026 {clinicData.name}. Engineered for Human Performance.
          </div>
        </div>
      </footer>

      {/* AI Components */}
      <Chatbot 
        clinicName={clinicData.name} 
        clinicCity={clinicData.city} 
        clinicType={clinicData.type} 
      />
    </div>
  );
}
