/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Map, Search, ArrowRight, Plus, Quote, Play, Crown, Headset, MapPin, ShieldCheck } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import FrameBackground from './components/FrameBackground';

export default function App() {
  return (
    <div className="w-full min-h-screen text-white font-sans selection:bg-[#ff6b2b]/30">

      {/* Frame-scrubbed flight animation, fixed behind every section */}
      <FrameBackground />

      {/* 1. ORIGINAL HERO BANNER */}
      <div className="h-[900px] flex flex-col items-center w-full relative z-20">
        {/* Header */}
        <header className="flex items-center justify-between px-6 py-6 md:px-12 w-full max-w-[1400px]">
          <div className="flex items-center gap-4 cursor-pointer group">
            <BrandLogo />
            <div className="flex items-baseline text-[22px] md:text-[28px] tracking-[0.25em] font-medium lowercase mt-1 text-white">
              <span>rihlah</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-10 text-[15px] font-medium text-white/90">
            <a href="#" className="hover:text-[#ff6b2b] transition-colors">Destinations</a>
            <a href="#" className="hover:text-[#ff6b2b] transition-colors">Experiences</a>
            <a href="#" className="hover:text-[#ff6b2b] transition-colors">Packages</a>
            <a href="#" className="hover:text-[#ff6b2b] transition-colors">About Us</a>
            <a href="#" className="hover:text-[#ff6b2b] transition-colors">Contact</a>
          </nav>

          <button className="px-6 py-2.5 rounded-full border border-white/20 hover:bg-white hover:text-black transition-colors text-[15px] font-medium whitespace-nowrap">
            Plan Your Journey
          </button>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex flex-col items-center justify-start pt-24 px-4 w-full max-w-4xl text-center">
          {/* Badge */}
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-[13px] font-medium mb-5 border border-white/5 uppercase tracking-wider">
            <span>✦ CURATED JOURNEYS ACROSS THE GULF</span>
          </div>

          {/* Hero Text */}
          <h1 className="text-[40px] sm:text-[48px] md:text-[54px] font-medium tracking-tight leading-[1.05] mb-4 text-white">
            Discover the extraordinary in <br className="hidden sm:block" />
            <span className="italic font-light text-white/90">Dubai & Qatar</span>
          </h1>

          <p className="text-[15px] font-normal text-white/70 max-w-[600px] leading-relaxed mb-7">
            From futuristic skylines to timeless desert landscapes, experience the Gulf through unforgettable journeys crafted just for you.
          </p>

          {/* Search Bar */}
          <div className="flex items-center w-full max-w-[640px] bg-white/5 border border-white/20 rounded-full p-1.5 pl-6 focus-within:border-white/50 transition-colors shadow-lg shadow-black/50">
            <Search className="w-[18px] h-[18px] text-white/50 shrink-0" />
            <input
              type="text"
              placeholder="Where would you like to explore?"
              className="flex-1 bg-transparent border-none outline-none text-white px-4 placeholder:text-white/40 text-[15px] min-w-0"
            />
            <button className="bg-white text-black px-7 py-3 rounded-full text-[15px] font-medium hover:bg-white/90 transition-colors whitespace-nowrap shrink-0">
              Explore Destinations &rarr;
            </button>
          </div>
        </main>
      </div>

      {/* 2. DESIGNING DIGITAL FUTURES SECTION */}
      {/* Reduced padding to close the gap from the hero banner */}
      <section className="w-full relative pt-12 pb-32 flex flex-col items-center -mt-32 z-10">
        {/* Top fade to remove any mismatch clipping line with the hero banner */}
        <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-[#050505] to-transparent pointer-events-none z-0"></div>

        {/* Sunset horizon gradient at the bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-[600px] bg-gradient-to-b from-transparent via-[#ff6b2b]/10 to-[#ff6b2b]/40 pointer-events-none z-0"></div>
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#ffbba5]/40 to-transparent pointer-events-none z-0"></div>

        {/* Subtle radial gradient background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-to-br from-[#ff6b2b]/10 to-transparent blur-[120px] pointer-events-none rounded-full z-0"></div>
        
        <div className="flex flex-col items-center justify-center px-4 w-full text-center relative z-10">
          <div className="relative border border-white/[0.08] p-16 md:p-24 rounded-sm border-dashed">
            {/* Corner Markers */}
            <div className="absolute top-0 left-0 w-1.5 h-1.5 bg-[#ff6b2b] -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-[#ff6b2b] translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-1.5 h-1.5 bg-[#ff6b2b] -translate-x-1/2 translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-1.5 h-1.5 bg-[#ff6b2b] translate-x-1/2 translate-y-1/2"></div>

            {/* Floating Tags (Animated Figma Cursors) */}
            <motion.div 
              animate={{ y: [0, -8, 0], x: [0, 4, 0] }} 
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-[-20px] top-[60%] -translate-y-1/2 flex items-center z-20"
            >
              <div className="bg-[#ff6b2b] text-black px-4 py-1.5 rounded-full text-[13px] font-medium shadow-lg">Agency</div>
              <svg width="18" height="24" viewBox="0 0 17 24" fill="none" className="drop-shadow-md -ml-2 mt-3 -rotate-12">
                <path d="M1.38541 1.70119L15.3995 13.518C16.4862 14.4339 15.9388 16.2086 14.5028 16.4526L9.62001 17.2831L6.71181 22.8468C6.1557 23.9103 4.54415 23.7535 4.2185 22.6105L1.38541 1.70119Z" fill="#ff6b2b" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
              </svg>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 6, 0], x: [0, -3, 0] }} 
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute right-[-20px] top-[15%] flex items-center z-20"
            >
              <svg width="18" height="24" viewBox="0 0 17 24" fill="none" className="drop-shadow-md -mr-1 mt-2 rotate-[150deg]">
                <path d="M1.38541 1.70119L15.3995 13.518C16.4862 14.4339 15.9388 16.2086 14.5028 16.4526L9.62001 17.2831L6.71181 22.8468C6.1557 23.9103 4.54415 23.7535 4.2185 22.6105L1.38541 1.70119Z" fill="white" stroke="#333" strokeWidth="1.5" strokeLinejoin="round"/>
              </svg>
              <div className="bg-white text-black px-4 py-1.5 rounded-full text-[13px] font-medium shadow-lg">Expert</div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, -5, 0], x: [0, -5, 0] }} 
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute right-[15%] bottom-[-25px] flex items-center flex-col z-20"
            >
              <svg width="18" height="24" viewBox="0 0 17 24" fill="none" className="drop-shadow-md -mb-1 ml-6 rotate-[105deg]">
                <path d="M1.38541 1.70119L15.3995 13.518C16.4862 14.4339 15.9388 16.2086 14.5028 16.4526L9.62001 17.2831L6.71181 22.8468C6.1557 23.9103 4.54415 23.7535 4.2185 22.6105L1.38541 1.70119Z" fill="#eeffa0" stroke="#333" strokeWidth="1.5" strokeLinejoin="round"/>
              </svg>
              <div className="bg-[#eeffa0] text-black px-4 py-1.5 rounded-full text-[13px] font-medium shadow-lg">Innovative</div>
            </motion.div>

            {/* Hero Text */}
            <h1 className="text-[42px] sm:text-[64px] md:text-[88px] lg:text-[104px] font-medium tracking-tight leading-[1] mb-8 text-white relative z-10">
              Designing <br />
              Digital <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-[#ffd8cd] to-[#ffbba5]">futures</span>
            </h1>

            <p className="text-[13px] md:text-[14px] font-normal text-white/50 max-w-[600px] leading-relaxed mx-auto">
              Transforming Ideas into Reality Crafting the Digital Future, One Design at a Time Shaping Tomorrow, Today <br className="hidden md:block" />
              Designing Digital Futures with Innovation and Precision
            </p>
          </div>

          {/* CTA Button */}
          <button className="flex items-center gap-3 p-1.5 pr-6 rounded-full border border-white/10 hover:bg-white/5 transition-colors mt-12 bg-black/50 backdrop-blur-sm cursor-pointer z-20">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#ff6b2b] to-[#e85311] flex items-center justify-center">
              <ArrowRight className="w-4 h-4 text-white" />
            </div>
            <span className="text-[15px] font-medium text-white/90">Get Started</span>
          </button>

        </div>
      </section>

      {/* 3. About Section with Scroll Reveal Text */}
      <section className="w-full px-6 py-24 flex flex-col items-center text-center relative z-20">
        <div className="w-full max-w-[1200px] mx-auto flex flex-col items-center">
          <span className="text-white/50 text-[15px] font-medium mb-12 tracking-wider">ABOUT Riḥlah</span>
          
          <ScrollRevealText text="We believe travel is more than visiting a destination it's about experiencing its story. From the futuristic energy of Dubai to the timeless beauty of Qatar, we create seamless journeys filled with unforgettable moments, authentic culture, and extraordinary experiences. Every trip is carefully crafted to let you explore more, worry less, and experience the Gulf your way." />
          
          <button className="flex items-center gap-3 p-1.5 pr-5 rounded-full border border-white/10 hover:bg-white/5 transition-colors mt-12 group">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#ff6b2b] to-[#e85311] flex items-center justify-center group-hover:scale-105 transition-transform">
              <ArrowRight className="w-4 h-4 text-white" />
            </div>
            <span className="text-[15px] font-medium">Discover Our Story &rarr;</span>
          </button>
        </div>
      </section>

      {/* 4. Experiences Section */}
      <section className="w-full max-w-[1400px] mx-auto px-6 md:px-12 pb-32 pt-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <h2 className="text-[36px] sm:text-[48px] md:text-[64px] font-medium leading-[1.1] tracking-tight">
            Experiences <br />
            <span className="italic font-light text-[#ffd8cd]">crafted for you</span>
          </h2>
          <button className="flex items-center gap-3 p-1.5 pr-5 rounded-full border border-white/10 hover:bg-white/5 transition-colors w-fit mb-2 group">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#ff6b2b] to-[#e85311] flex items-center justify-center group-hover:scale-105 transition-transform">
              <ArrowRight className="w-4 h-4 text-white" />
            </div>
            <span className="text-[15px] font-medium">Explore Experiences &rarr;</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Cards */}
          <ServiceCard 
            number="01" 
            title="Desert Adventures" 
            tags={['Dune Bashing', 'Camel Riding', 'Desert Camp', 'BBQ Dinner']}
          />
          <ServiceCard 
            number="02" 
            title="City Discoveries" 
            tags={['City Tours', 'Iconic Landmarks', 'Local Culture', 'Hidden Gems']}
          />
          <ServiceCard 
            number="03" 
            title="Luxury Experiences" 
            tags={['Private Yacht', 'VIP Tours', 'Fine Dining', 'Premium Transport']}
          />
          <ServiceCard 
            number="04" 
            title="Culture & Heritage" 
            tags={['Souq Waqif', 'Museums', 'Old Dubai', 'Local Experiences']}
          />
        </div>
      </section>

      {/* 5. Testimonials Section */}
      <section className="w-full max-w-[1400px] mx-auto px-6 md:px-12 py-32 flex flex-col items-center">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 text-[11px] font-medium mb-8 bg-white/5 uppercase tracking-wider">
          <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b2b]"></span>
          007 TESTIMONIAL
        </div>
        
        <h2 className="text-[36px] sm:text-[48px] md:text-[64px] font-medium leading-[1.1] tracking-tight mb-12 md:mb-20 text-center">
          What They're <span className="italic font-light text-[#ffd8cd]">Saying</span>
        </h2>

        {/* Ticker Container with fade mask */}
        <div className="w-full h-[900px] overflow-hidden relative flex gap-6 justify-center" 
             style={{ WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 5%, black 95%, transparent)', maskImage: 'linear-gradient(to bottom, transparent, black 5%, black 95%, transparent)' }}>
           <div className="flex-1 hidden md:block">
              <ScrollingColumn items={col1Data} duration={45} direction="up" />
           </div>
           <div className="flex-1">
              <ScrollingColumn items={col2Data} duration={35} direction="down" />
           </div>
           <div className="flex-1 hidden lg:block">
              <ScrollingColumn items={col3Data} duration={40} direction="up" />
           </div>
        </div>
      </section>

      {/* 6. Feature Layout Section (Visual Placeholder) */}
      <section className="w-full max-w-[1400px] mx-auto px-6 md:px-12 py-32">
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Left Column - 2 Cards */}
          <div className="flex flex-col gap-6">
            <FeatureDetailCard 
              icon={Crown}
              title="Exclusive Access" 
              description="Gain entry to private venues, VIP airport lounges, and exclusive events usually closed to the public."
            />
            <FeatureDetailCard 
              icon={Headset}
              title="24/7 Support" 
              description="Your dedicated concierge is available around the clock to handle every detail and unexpected change."
            />
          </div>

          {/* Center Empty Space - Reserved for future visual */}
          <div className="hidden lg:block w-full">
            {/* Kept entirely empty as requested */}
          </div>

          {/* Right Column - 2 Cards */}
          <div className="flex flex-col gap-6">
            <FeatureDetailCard 
              icon={MapPin}
              title="Curated Itineraries" 
              description="Every moment is thoughtfully planned by local experts to match your unique pace and interests."
            />
            <FeatureDetailCard 
              icon={ShieldCheck}
              title="Seamless Booking" 
              description="A frictionless experience from flights to fine dining. We handle the logistics, you enjoy the journey."
            />
          </div>

        </div>
      </section>
    </div>
  );
}

// --- TESTIMONIAL DATA & COMPONENTS ---

const col1Data = [
  { type: 'text', name: 'David Lee', role: 'Frequent Traveler', avatar: 'https://i.pravatar.cc/150?u=david', quote: 'We were spending hours trying to plan our own itinerary. Their curated blueprint saved us endless research and gave us an authentic experience we would never have found on our own.' },
  { type: 'video', title: 'How Riḥlah Curated Our Dubai Escape', bg: 'https://images.unsplash.com/photo-1512632578888-169bbbc64f33?q=80&w=600&auto=format&fit=crop' },
  { type: 'text', name: 'Daniel Kim', role: 'Adventure Seeker', avatar: 'https://i.pravatar.cc/150?u=daniel', quote: 'Our desert adventures used to require manual bookings and separate guides. Now, everything is seamlessly scheduled. We increased our activity time by 35% in just one trip.' },
];

const col2Data = [
  { type: 'text', name: 'Sarah Mitchell', role: 'Family Explorer', avatar: 'https://i.pravatar.cc/150?u=sarah', quote: 'We struggled with inconsistent tour guides and slow response times. Their local experts gave us clarity first, then flawless execution. The whole family was engaged.' },
  { type: 'text', name: 'Jonathan Reed', role: 'Culture Enthusiast', avatar: 'https://i.pravatar.cc/150?u=jonathan', quote: 'We were scaling our travel plans fast but drowning in manual bookings. Their system connected our stays, transport, and dining into one intelligent flow. The result? Pure relaxation.' },
  { type: 'text', name: 'Alex Johnson', role: 'Corporate Retreats', avatar: 'https://i.pravatar.cc/150?u=alex', quote: 'Security and comfort were major concerns for our team. They designed an architecture that was not only efficient but incredibly premium. Best retreat we have ever had.' },
];

const col3Data = [
  { type: 'text', name: 'Michael Tran', role: 'Luxury Nomad', avatar: 'https://i.pravatar.cc/150?u=michael', quote: 'We reduced our transit times by nearly 50% and doubled our actual exploration time. The ROI on their premium packages was faster than expected, and the quality is unmatched.' },
  { type: 'video', title: 'Scaling Luxury Experiences in Qatar', bg: 'https://images.unsplash.com/photo-1528702748617-c64d49f918af?q=80&w=600&auto=format&fit=crop' },
  { type: 'text', name: 'Laura Martinez', role: 'Solo Traveler', avatar: 'https://i.pravatar.cc/150?u=laura', quote: 'Booking travel always felt fragmented — too many sites, not enough cohesion. They unified everything into one seamless itinerary. Airport transfers, hidden gems — all automated with precision.' },
];

function ScrollingColumn({ items, duration = 30, direction = 'up' }: { items: any[], duration?: number, direction?: 'up' | 'down' }) {
  const content = items.map((item, i) => {
    if (item.type === 'video') return <TestimonialVideo key={i} {...item} />;
    return <TestimonialText key={i} {...item} />;
  });

  return (
    <motion.div
      animate={{ y: direction === 'up' ? ["0%", "-33.333333%"] : ["-33.333333%", "0%"] }}
      transition={{ repeat: Infinity, ease: "linear", duration }}
      className="flex flex-col gap-6"
    >
      {content}
      {content}
      {content}
    </motion.div>
  );
}

function TestimonialText({ name, role, quote, avatar }: any) {
  return (
    <div className="p-8 rounded-[32px] bg-[#111111] border border-white/5 flex flex-col gap-6 relative">
      <Quote className="absolute top-8 right-8 w-6 h-6 text-white/10 fill-white/5" />
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-white/10 overflow-hidden shrink-0">
           <img src={avatar} alt={name} className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col">
           <span className="text-[15px] font-medium text-white/90">{name}</span>
           <span className="text-[13px] text-white/40">{role}</span>
        </div>
      </div>
      <p className="text-[14.5px] leading-relaxed text-white/70">
        {quote}
      </p>
    </div>
  );
}

function TestimonialVideo({ title, bg }: any) {
  return (
    <div className="p-8 rounded-[32px] bg-[#111111] border border-white/5 flex flex-col justify-between min-h-[400px] relative overflow-hidden group">
      <img src={bg} alt={title} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
      
      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center relative z-10 cursor-pointer hover:bg-white/30 transition-colors">
        <Play className="w-5 h-5 text-white ml-1 fill-white" />
      </div>
      
      <div className="relative z-10 mt-auto">
        <div className="flex items-center gap-2 mb-3 group/logo cursor-pointer w-fit">
          <BrandLogo className="w-6 h-5 text-white" />
          <span className="text-[13px] font-medium text-white/90 lowercase tracking-[0.2em] mt-0.5">rihlah</span>
        </div>
        <h3 className="text-[24px] font-medium leading-[1.2] text-white">
          {title}
        </h3>
      </div>
    </div>
  )
}

function ScrollRevealText({ text }: { text: string }) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  
  // Track scroll progress within the container's viewport area
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 85%", "end 50%"]
  });

  const words = text.split(" ");
  
  return (
    <p 
      ref={containerRef} 
      className="text-[20px] sm:text-[24px] md:text-[32px] lg:text-[36px] leading-[1.5] font-medium max-w-[1000px] flex flex-wrap justify-center gap-x-1.5 md:gap-x-2 gap-y-1 md:gap-y-1.5"
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + (1 / words.length);
        return <Word key={i} word={word} progress={scrollYProgress} range={[start, end]} />;
      })}
    </p>
  );
}

function Word({ word, progress, range }: { word: string, progress: any, range: [number, number] }) {
  // Map this word's specific portion of the scroll progress from 0.1 opacity to 1
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <motion.span style={{ opacity }} className="text-white/90">
      {word}
    </motion.span>
  );
}

function ServiceCard({ number, title, tags }: { number: string, title: string, tags: string[] }) {
  return (
    <div className="relative flex flex-col p-8 rounded-[32px] bg-[#111111] border border-white/5 overflow-hidden group min-h-[420px]">
      {/* Orange glow at bottom */}
      <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-64 h-64 bg-[#ff6b2b] rounded-full blur-[100px] opacity-10 group-hover:opacity-25 transition-opacity duration-500 pointer-events-none"></div>
      
      <div className="relative z-10 flex-1 flex flex-col h-full">
        <span className="text-white/30 text-[13px] font-medium mb-8">{number}</span>
        
        {/* Title splits to two lines if there's a space */}
        <h3 className="text-[32px] font-medium leading-[1.1] mb-8 whitespace-pre-line tracking-tight">
          {title.replace(' ', '\n')}
        </h3>
        
        <div className="flex flex-wrap gap-2 mt-auto mb-10">
          {tags.map((tag, i) => (
            <span key={i} className="px-3 py-1.5 rounded-full border border-white/5 text-[11px] text-white/50 bg-white/[0.03]">
              {tag}
            </span>
          ))}
        </div>

        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#ff6b2b] to-[#e85311] flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-[0_0_15px_rgba(255,107,43,0.2)] group-hover:shadow-[0_0_20px_rgba(255,107,43,0.4)]">
          <Plus className="w-5 h-5 text-white" />
        </div>
      </div>
    </div>
  );
}

function FeatureDetailCard({ title, description, icon: Icon }: { title: string, description: string, icon: any }) {
  return (
    <div className="p-6 md:p-8 rounded-[32px] bg-[#111111] border border-white/5 flex flex-col h-full min-h-[300px] hover:bg-[#151515] transition-colors group">
      <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center mb-8 bg-white/5 text-white/70 group-hover:text-[#ffd8cd] group-hover:bg-white/10 group-hover:scale-110 transition-all duration-300">
        <Icon className="w-5 h-5" strokeWidth={1.5} />
      </div>
      
      <div className="mt-auto">
        <h3 className="text-[24px] font-medium leading-[1.2] tracking-tight mb-3 text-white transition-colors">
          {title}
        </h3>
        <p className="text-[15px] leading-relaxed text-white/50 group-hover:text-white/70 transition-colors">
          {description}
        </p>
      </div>
    </div>
  );
}

const BrandLogo = ({ className = "w-12 h-10 text-white" }: { className?: string }) => (
  <svg viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={`group-hover:translate-x-1 transition-transform duration-700 shrink-0 ${className}`}>
    {/* Upper main wing/body sweep */}
    <path 
      d="M10 20 C 40 50, 70 60, 110 60 C 90 60, 60 50, 30 20 Z" 
      fill="currentColor" 
      className="transition-colors duration-500" 
    />
    {/* Lower secondary wing/tail sweep */}
    <path 
      d="M30 65 C 50 65, 60 75, 75 95 C 60 85, 45 75, 25 75 Z" 
      fill="currentColor" 
      className="transition-colors duration-500" 
    />
  </svg>
);
