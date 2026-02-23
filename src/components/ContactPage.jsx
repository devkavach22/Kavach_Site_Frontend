// import React, { useState } from 'react';
// import { MapPin, Mail, Phone, Clock, Send, Globe2, Building2 } from 'lucide-react';

// // ─── World Map Data ───────────────────────────────────────────────────────────
// const globalLocations = [
//   { name: 'USA',       x: 18,  y: 36, description: 'North America Hub',  region: 'Americas'    },
//   { name: 'Ireland',   x: 44,  y: 22, description: 'European Gateway',   region: 'Europe'      },
//   { name: 'UK',        x: 46,  y: 24, description: 'United Kingdom',     region: 'Europe'      },
//   { name: 'Dubai',     x: 61,  y: 38, description: 'Middle East Office', region: 'Middle East' },
//   { name: 'India',     x: 68,  y: 40, description: 'Headquarters',       region: 'Asia', isHQ: true },
//   { name: 'Singapore', x: 75,  y: 52, description: 'Asia Pacific Hub',   region: 'Asia'        },
//   { name: 'Australia', x: 80,  y: 68, description: 'Oceania Office',     region: 'Oceania'     },
// ];

// // Simplified but recognizable world land-mass paths (viewBox 0 0 1000 500)
// const LAND_D = `
// M132 80 L148 74 L166 71 L182 74 L196 80 L208 82 L220 78 L234 74 L250 76 L260 82
// L266 92 L272 102 L275 114 L273 124 L268 132 L260 140 L252 148 L246 156 L240 164
// L232 170 L222 173 L212 171 L202 165 L193 158 L185 150 L177 148 L168 148 L160 151
// L153 156 L146 162 L138 165 L130 162 L123 156 L116 148 L112 140 L109 130 L109 120
// L112 110 L116 100 L121 92 L127 85 Z
// M185 172 L193 168 L198 172 L200 180 L197 187 L192 192 L186 193 L181 189 L180 182
// L182 175 Z
// M172 192 L178 188 L186 188 L192 193 L195 202 L198 212 L200 222 L201 234 L199 244
// L194 254 L187 262 L180 266 L172 264 L164 260 L157 252 L152 242 L150 230 L150 218
// L153 208 L158 200 L163 194 L168 190 Z
// M300 38 L316 34 L332 32 L348 34 L358 40 L362 48 L358 56 L348 62 L332 64 L316 62
// L304 56 L298 48 Z
// M356 66 L368 62 L382 60 L396 62 L406 68 L410 76 L408 84 L402 90 L394 94 L384 94
// L374 90 L366 84 L362 76 Z
// M390 68 L404 64 L418 64 L428 70 L432 78 L430 86 L424 92 L414 94 L404 94 L394 88
// L388 80 Z
// M410 82 L422 78 L434 80 L440 88 L438 98 L430 104 L418 106 L408 102 L402 94 L406 86 Z
// M418 50 L428 46 L440 44 L452 46 L460 52 L462 60 L458 68 L450 72 L440 72 L430 68
// L422 62 Z
// M458 62 L500 56 L544 52 L586 50 L628 52 L666 54 L700 56 L724 58 L732 64 L726 70
// L706 74 L672 76 L634 76 L596 74 L558 74 L520 76 L490 78 L464 80 L458 70 Z
// M372 98 L388 94 L406 94 L422 98 L432 106 L432 116 L426 126 L416 132 L404 134
// L392 132 L382 126 L374 118 L370 108 Z
// M426 102 L442 98 L460 98 L474 104 L480 114 L478 124 L470 132 L458 136 L444 134
// L432 128 L426 118 Z
// M464 106 L480 102 L498 102 L512 108 L516 118 L512 128 L502 136 L488 138 L474 134
// L464 126 L460 116 Z
// M476 130 L494 126 L512 128 L524 136 L526 148 L518 158 L504 164 L490 162 L478 156
// L472 144 L474 134 Z
// M486 160 L502 156 L518 158 L530 168 L530 180 L522 190 L508 196 L492 194 L480 186
// L476 174 L480 164 Z
// M494 194 L508 190 L522 194 L530 204 L528 216 L518 224 L504 226 L490 220 L484 208
// L488 198 Z
// M524 120 L564 114 L606 110 L648 108 L688 110 L720 112 L750 116 L766 122 L760 128
// L732 132 L694 134 L652 132 L608 130 L566 130 L532 128 Z
// M574 130 L612 128 L646 130 L664 138 L662 148 L648 156 L630 158 L610 154 L594 146
// L582 138 Z
// M566 148 L578 144 L590 146 L596 154 L594 164 L584 170 L572 168 L564 160 L562 152 Z
// M638 94 L658 90 L678 88 L700 90 L718 94 L724 100 L718 106 L702 110 L680 110 L660 108
// L644 102 Z
// M696 104 L716 100 L738 98 L758 100 L774 106 L776 114 L766 120 L748 122 L728 120
// L710 114 L700 108 Z
// M736 118 L758 114 L780 114 L800 118 L812 126 L808 136 L796 142 L778 144 L758 140
// L742 134 L736 124 Z
// M746 140 L768 136 L788 138 L804 146 L806 158 L794 166 L776 168 L758 164 L746 156
// L744 146 Z
// M752 162 L774 158 L794 162 L806 172 L804 184 L792 192 L774 194 L756 190 L744 180
// L744 168 Z
// M762 190 L784 186 L804 190 L816 202 L812 214 L798 222 L780 222 L762 216 L752 204
// L754 194 Z
// M720 136 L742 132 L758 136 L764 146 L758 156 L742 162 L726 158 L716 148 L716 138 Z
// M696 126 L714 122 L728 126 L732 136 L724 146 L708 148 L694 142 L690 132 Z
// M682 146 L698 142 L712 146 L714 158 L704 166 L688 166 L678 158 L678 150 Z
// M818 176 L836 170 L854 172 L864 180 L862 192 L850 200 L834 202 L820 196 L816 184 Z
// M826 198 L846 194 L864 198 L874 210 L870 222 L856 230 L838 230 L822 222 L818 210 Z
// M836 226 L856 222 L874 228 L882 240 L876 254 L860 260 L842 258 L828 248 L826 234 Z
// M848 252 L870 248 L886 254 L892 268 L884 280 L866 286 L848 282 L836 270 L836 258 Z
// M864 278 L884 274 L900 280 L904 294 L894 306 L874 310 L856 304 L846 292 L848 280 Z
// M816 254 L844 250 L866 256 L874 270 L866 284 L848 290 L826 284 L812 272 L812 260 Z
// M824 226 L844 220 L858 226 L860 238 L850 248 L832 250 L818 242 L816 230 Z
// M838 282 L860 278 L876 284 L880 298 L870 308 L852 310 L836 302 L832 290 Z
// M818 302 L838 298 L854 304 L856 318 L844 326 L826 326 L814 316 L814 306 Z
// M830 144 L848 140 L862 144 L866 154 L858 164 L842 166 L828 160 L824 150 Z
// M840 162 L858 158 L874 164 L876 176 L866 186 L848 188 L834 182 L830 170 Z
// M668 130 L686 128 L700 132 L702 142 L694 150 L678 152 L664 146 L662 136 Z
// M650 148 L666 144 L678 148 L680 160 L670 168 L654 168 L642 160 L642 150 Z
// M656 166 L672 162 L684 166 L684 178 L674 186 L658 186 L648 178 L648 168 Z
// M820 112 L836 108 L850 112 L852 122 L842 130 L826 130 L814 122 L816 114 Z
// M836 126 L854 122 L868 126 L870 138 L858 146 L840 144 L828 136 L828 128 Z
// M854 140 L872 136 L888 142 L888 154 L876 162 L858 160 L846 152 L848 142 Z
// M874 154 L892 150 L906 156 L906 168 L892 176 L874 174 L864 166 L866 156 Z
// M888 168 L906 164 L920 170 L920 182 L906 190 L888 188 L878 180 L880 170 Z
// M900 184 L918 180 L932 188 L930 200 L916 208 L898 204 L888 196 L892 186 Z
// M912 200 L930 196 L944 204 L940 218 L924 224 L906 220 L896 210 L900 202 Z
// M762 74 L778 70 L792 72 L796 80 L790 88 L774 90 L762 84 L760 76 Z
// M790 72 L808 68 L822 72 L824 82 L814 90 L798 90 L788 82 L788 74 Z
// M808 66 L828 62 L844 66 L844 78 L830 84 L812 82 L804 74 Z
// `;

// // ─── SVG World Map Component ──────────────────────────────────────────────────
// function WorldMap({ activeLocation, onHover }) {
//   return (
//     <div style={{ position: 'relative', width: '100%', height: '420px' }}>
//       <svg
//         viewBox="0 0 1000 500"
//         width="100%"
//         height="100%"
//         style={{ display: 'block' }}
//       >
//         <defs>
//           <radialGradient id="wm-ocean" cx="50%" cy="50%" r="80%">
//             <stop offset="0%"   stopColor="#1e3a5f" stopOpacity="0.3" />
//             <stop offset="100%" stopColor="#0f172a" stopOpacity="0"   />
//           </radialGradient>
//           <radialGradient id="wm-land" cx="30%" cy="20%" r="80%">
//             <stop offset="0%"   stopColor="#2d4263" />
//             <stop offset="100%" stopColor="#192338" />
//           </radialGradient>
//           <filter id="wm-glow">
//             <feGaussianBlur stdDeviation="4" result="b"/>
//             <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
//           </filter>
//         </defs>

//         {/* ocean glow */}
//         <rect width="1000" height="500" fill="url(#wm-ocean)" />

//         {/* graticule */}
//         {[100,200,300,400].map(y => (
//           <line key={`h${y}`} x1={0} y1={y} x2={1000} y2={y}
//             stroke="rgba(148,163,184,0.06)" strokeWidth="0.8" strokeDasharray="6,10" />
//         ))}
//         {[125,250,375,500,625,750,875].map(x => (
//           <line key={`v${x}`} x1={x} y1={0} x2={x} y2={500}
//             stroke="rgba(148,163,184,0.06)" strokeWidth="0.8" strokeDasharray="6,10" />
//         ))}

//         {/* land */}
//         <path d={LAND_D}
//           fill="url(#wm-land)"
//           stroke="rgba(100,140,190,0.4)"
//           strokeWidth="0.7"
//           strokeLinejoin="round"
//         />

//         {/* connection arcs from India HQ */}
//         {globalLocations.filter(l => !l.isHQ).map(loc => {
//           const sx = loc.x * 10;
//           const sy = loc.y * 5;
//           const tx = 680, ty = 200;
//           const mx = (sx + tx) / 2;
//           const my = Math.min(sy, ty) - 65;
//           const isActive = activeLocation === loc.name;
//           return (
//             <path key={loc.name}
//               d={`M${tx} ${ty} Q${mx} ${my} ${sx} ${sy}`}
//               fill="none"
//               stroke={isActive ? '#f97316' : 'rgba(249,115,22,0.14)'}
//               strokeWidth={isActive ? 1.8 : 0.9}
//               strokeDasharray={isActive ? '0' : '5,7'}
//               style={{ transition: 'all 0.3s' }}
//             />
//           );
//         })}

//         {/* pins */}
//         {globalLocations.map(loc => {
//           const cx = loc.x * 10;
//           const cy = loc.y * 5;
//           const isActive = activeLocation === loc.name;
//           const isHQ = loc.isHQ;
//           const r = isHQ ? 10 : 7;

//           return (
//             <g key={loc.name}
//               style={{ cursor: 'pointer' }}
//               onMouseEnter={() => onHover(loc.name)}
//               onMouseLeave={() => onHover(null)}
//             >
//               {/* animated outer ring */}
//               <circle cx={cx} cy={cy} r={r} fill="none"
//                 stroke={isHQ ? '#fbbf24' : '#f97316'} strokeWidth="1.2" opacity="0">
//                 <animate attributeName="r"       values={`${r};${r+14};${r}`}   dur={isHQ?'2s':'2.8s'} repeatCount="indefinite" />
//                 <animate attributeName="opacity" values="0.5;0;0.5"              dur={isHQ?'2s':'2.8s'} repeatCount="indefinite" />
//               </circle>

//               {/* glow halo */}
//               <circle cx={cx} cy={cy} r={isActive ? r+7 : r+3}
//                 fill={isHQ ? 'rgba(251,191,36,0.18)' : 'rgba(249,115,22,0.18)'}
//                 style={{ transition: 'r 0.25s' }}
//               />

//               {/* core dot */}
//               <circle cx={cx} cy={cy} r={isActive ? r+2 : r}
//                 fill={isHQ ? (isActive ? '#fde68a' : '#fbbf24') : (isActive ? '#fb923c' : '#f97316')}
//                 stroke="white" strokeWidth={isHQ ? 2 : 1.5}
//                 filter="url(#wm-glow)"
//                 style={{ transition: 'all 0.25s' }}
//               />

//               {/* HQ star */}
//               {isHQ && (
//                 <text x={cx} y={cy+0.5} textAnchor="middle" dominantBaseline="middle"
//                   fill="white" fontSize="7" fontWeight="900" pointerEvents="none">★</text>
//               )}

//               {/* label */}
//               <text x={cx} y={cy - r - 7}
//                 textAnchor="middle"
//                 fill={isActive ? (isHQ ? '#fbbf24' : '#fb923c') : 'rgba(226,232,240,0.82)'}
//                 fontSize={isActive ? 11 : 9.5}
//                 fontWeight={isActive ? '800' : '600'}
//                 fontFamily="system-ui,sans-serif"
//                 style={{ transition: 'all 0.25s', pointerEvents: 'none' }}
//               >
//                 {loc.name}
//               </text>
//             </g>
//           );
//         })}
//       </svg>

//       {/* tooltip */}
//       <TooltipCard locations={globalLocations} activeLocation={activeLocation} />

//       {/* stats */}
//       <div style={{
//         position: 'absolute', bottom: 16, left: 16,
//         background: 'rgba(10,15,30,0.88)',
//         backdropFilter: 'blur(14px)',
//         border: '1px solid rgba(249,115,22,0.22)',
//         borderRadius: 14, padding: '11px 20px',
//         display: 'flex', gap: 24, zIndex: 5,
//       }}>
//         {[['7','Countries'],['3','Continents'],['500+','Clients']].map(([n,l]) => (
//           <div key={l} style={{ textAlign: 'center' }}>
//             <div style={{
//               fontWeight: 900, fontSize: 19, lineHeight: 1,
//               background: 'linear-gradient(135deg,#f97316,#ef4444)',
//               WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
//             }}>{n}</div>
//             <div style={{ color:'#64748b', fontSize:10, fontWeight:700, letterSpacing:'0.8px', marginTop:2, textTransform:'uppercase' }}>{l}</div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// function TooltipCard({ locations, activeLocation }) {
//   const data = locations.find(l => l.name === activeLocation);
//   if (!data) return null;
//   return (
//     <div style={{
//       position: 'absolute', top: 16, right: 16,
//       background: 'linear-gradient(135deg,#f97316,#ef4444)',
//       borderRadius: 16, padding: '15px 20px',
//       boxShadow: '0 12px 40px rgba(249,115,22,0.45)',
//       minWidth: 165, zIndex: 20,
//       animation: 'ct-fadeUp 0.2s ease',
//       pointerEvents: 'none',
//     }}>
//       <p style={{ margin:0, fontWeight:900, color:'white', fontSize:15 }}>{data.name}</p>
//       <p style={{ margin:'5px 0 0', color:'rgba(255,255,255,0.88)', fontSize:12 }}>{data.description}</p>
//       <p style={{ margin:'3px 0 0', color:'rgba(255,255,255,0.6)', fontSize:10, textTransform:'uppercase', letterSpacing:'1.2px' }}>{data.region}</p>
//       {data.isHQ && (
//         <div style={{
//           marginTop:10, display:'inline-flex', alignItems:'center', gap:5,
//           background:'rgba(255,255,255,0.22)', borderRadius:20,
//           padding:'4px 10px', color:'white', fontSize:9, fontWeight:900, letterSpacing:'1.5px',
//         }}>★ HEADQUARTERS</div>
//       )}
//     </div>
//   );
// }

// // ─── Main ContactPage ─────────────────────────────────────────────────────────
// function ContactPage() {
//   const [formData, setFormData] = useState({ name:'', email:'', phone:'', service:'', message:'' });
//   const [activeLocation, setActiveLocation] = useState(null);

//   const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
//   const handleSubmit = e => { e.preventDefault(); console.log('Form submitted:', formData); };

//   const offices = [
//     {
//       title: 'Ahmedabad',
//       address: 'A/53, 5th floor, New York Tower, Thaltej, S G Highway, Ahmedabad - 380015.',
//       mapUrl: 'https://www.google.com/maps/search/?api=1&query=New+York+Tower+Thaltej+SG+Highway+Ahmedabad+380015'
//     },
//     {
//       title: 'Himachal Pradesh',
//       address: '29, First Floor, Block1, Dev Bhoomi Apartments, Khasra no- 9,10,11,12,13,20,21, kitas-7, mauza jadhog, deonghat, Tehsil & District Solan - 173211',
//       mapUrl: 'https://www.google.com/maps/search/?api=1&query=Dev+Bhoomi+Apartments+Deonghat+Solan+Himachal+Pradesh+173211'
//     },
//     {
//       title: 'Ayodhya',
//       address: '4th Floor, Arundhati Bhawan West, Multilevel Parking, Tedhi Bajar, Dist.- Ayodhya, State:- Uttar Pradesh India, Pin- 224123',
//       mapUrl: 'https://www.google.com/maps/search/?api=1&query=Arundhati+Bhawan+Tedhi+Bajar+Ayodhya+Uttar+Pradesh+224123'
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-white pt-[76px]">

//       {/* ── Hero + Form ── */}
//       <div className="relative bg-gradient-to-br from-orange-50 via-white to-red-50 py-20 px-4 overflow-hidden">
//         <div className="absolute top-0 right-0 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
//         <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
//         <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />

//         <div className="max-w-7xl mx-auto relative z-10">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <div>
//               <div className="inline-block mb-6">
//                 <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
//                   <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
//                   <span className="text-sm uppercase tracking-widest text-gray-700 font-bold">Contact with Kavach Technology</span>
//                 </div>
//               </div>
//               <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
//                 <span className="text-gray-900">Feel free to </span>
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 animate-gradient">get in touch</span>
//                 <span className="text-gray-900"> with us</span>
//               </h1>
//               <p className="text-xl text-gray-600 leading-relaxed mb-8">
//                 We're here to help and answer any question you might have. We look forward to hearing from you.
//               </p>
//             </div>

//             <div className="relative">
//               <div className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-br from-orange-400 to-red-400 rounded-full opacity-10 blur-3xl" />
//               <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br from-red-400 to-orange-400 rounded-full opacity-10 blur-3xl" />

//               <div className="relative bg-white rounded-3xl shadow-2xl p-8 md:p-10 border-2 border-gray-100 overflow-hidden">
//                 <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-orange-500 via-red-500 to-orange-500" />

//                 <div className="text-center mb-6">
//                   <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl mb-3 shadow-lg transform hover:scale-110 transition-transform duration-300">
//                     <Send className="w-8 h-8 text-white" />
//                   </div>
//                   <h2 className="text-2xl font-bold text-gray-900 mb-1">Send Us a Message</h2>
//                   <p className="text-sm text-gray-600">Fill out the form below and we'll get back to you shortly</p>
//                 </div>

//                 <form onSubmit={handleSubmit} className="space-y-4">
//                   <div className="grid grid-cols-2 gap-4">
//                     <div className="relative group">
//                       <label className="block text-xs font-semibold text-gray-700 mb-1">Your Name *</label>
//                       <input type="text" name="name" placeholder="John Doe" value={formData.name} onChange={handleChange}
//                         className="w-full px-4 py-3 bg-gray-50 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:bg-white outline-none transition-all duration-300 group-hover:border-orange-300 text-gray-900 placeholder-gray-400 text-sm" required />
//                     </div>
//                     <div className="relative group">
//                       <label className="block text-xs font-semibold text-gray-700 mb-1">Email Address *</label>
//                       <input type="email" name="email" placeholder="john@example.com" value={formData.email} onChange={handleChange}
//                         className="w-full px-4 py-3 bg-gray-50 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:bg-white outline-none transition-all duration-300 group-hover:border-orange-300 text-gray-900 placeholder-gray-400 text-sm" required />
//                     </div>
//                   </div>

//                   <div className="grid grid-cols-2 gap-4">
//                     <div className="relative group">
//                       <label className="block text-xs font-semibold text-gray-700 mb-1">Phone Number *</label>
//                       <input type="tel" name="phone" placeholder="+91 98765 43210" value={formData.phone} onChange={handleChange}
//                         className="w-full px-4 py-3 bg-gray-50 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:bg-white outline-none transition-all duration-300 group-hover:border-orange-300 text-gray-900 placeholder-gray-400 text-sm" required />
//                     </div>
//                     <div className="relative group">
//                       <label className="block text-xs font-semibold text-gray-700 mb-1">Service Required</label>
//                       <input type="text" name="service" placeholder="e.g., Web Development" value={formData.service} onChange={handleChange}
//                         className="w-full px-4 py-3 bg-gray-50 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:bg-white outline-none transition-all duration-300 group-hover:border-orange-300 text-gray-900 placeholder-gray-400 text-sm" />
//                     </div>
//                   </div>

//                   <div className="relative group">
//                     <label className="block text-xs font-semibold text-gray-700 mb-1">Your Message</label>
//                     <textarea name="message" placeholder="Tell us about your project or inquiry..." value={formData.message} onChange={handleChange}
//                       rows="4"
//                       className="w-full px-4 py-3 bg-gray-50 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:bg-white outline-none transition-all duration-300 resize-none group-hover:border-orange-300 text-gray-900 placeholder-gray-400 text-sm" />
//                   </div>

//                   <div className="text-center pt-2">
//                     <button type="submit"
//                       className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 hover:from-orange-600 hover:via-red-600 hover:to-orange-600 text-white font-bold text-base rounded-full transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl active:scale-95">
//                       <Send className="w-5 h-5" />
//                       Send Message
//                     </button>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ── Contact Info Cards ── */}
//       <div className="py-16 px-4 bg-gray-50">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               {
//                 icon: <Mail className="w-8 h-8 text-white" />,
//                 title: 'Email Us',
//                 content: (
//                   <a href="mailto:info@kavachglobal.com" className="flex items-center gap-3 text-gray-600 hover:text-orange-500 transition-colors group/link">
//                     <span className="w-2 h-2 bg-orange-500 rounded-full group-hover/link:scale-150 transition-transform" />
//                     <span className="font-medium">info@kavachglobal.com</span>
//                   </a>
//                 )
//               },
//               {
//                 icon: <Phone className="w-8 h-8 text-white" />,
//                 title: 'Call Us',
//                 content: (
//                   <a href="tel:+917228888904" className="flex items-center gap-3 text-gray-600 hover:text-orange-500 transition-colors group/link">
//                     <span className="w-2 h-2 bg-orange-500 rounded-full group-hover/link:scale-150 transition-transform" />
//                     <span className="font-medium">+91 72288 88904</span>
//                   </a>
//                 )
//               },
//               {
//                 icon: <Clock className="w-8 h-8 text-white" />,
//                 title: 'Working Hours',
//                 content: (
//                   <div className="space-y-4">
//                     <div className="flex items-start gap-3">
//                       <span className="w-2 h-2 bg-green-500 rounded-full mt-2" />
//                       <div><p className="font-bold text-gray-900">Mon - Sat</p><p className="text-gray-600">8:00 AM - 6:00 PM</p></div>
//                     </div>
//                     <div className="flex items-start gap-3">
//                       <span className="w-2 h-2 bg-red-500 rounded-full mt-2" />
//                       <div><p className="font-bold text-gray-900">Sunday</p><p className="text-gray-600">CLOSED</p></div>
//                     </div>
//                   </div>
//                 )
//               }
//             ].map((card, i) => (
//               <div key={i} className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-orange-200 overflow-hidden">
//                 <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-500 to-red-500 rounded-full opacity-5 transform translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-500" />
//                 <div className="relative">
//                   <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
//                     {card.icon}
//                   </div>
//                   <h3 className="text-2xl font-bold text-gray-900 mb-6">{card.title}</h3>
//                   <div className="space-y-4">{card.content}</div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* ── Office Locations ── */}
//       <div className="py-20 px-4 bg-white">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <div className="inline-flex items-center gap-2 bg-orange-100 px-6 py-3 rounded-full mb-6">
//               <Building2 className="w-5 h-5 text-orange-600" />
//               <span className="text-orange-600 font-bold text-sm uppercase tracking-wide">Our Locations</span>
//             </div>
//             <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
//               Visit <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">Our Offices</span>
//             </h2>
//             <p className="text-gray-600 text-xl max-w-2xl mx-auto">We have offices across India to serve you better</p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8 mb-16">
//             {offices.map((office, index) => (
//               <div key={index} className="group relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-orange-300 overflow-hidden">
//                 <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-orange-500 to-red-500 opacity-10 rounded-bl-full transform group-hover:scale-150 transition-transform duration-500" />
//                 <div className="relative">
//                   <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg">
//                     <MapPin className="w-8 h-8 text-white" />
//                   </div>
//                   <h3 className="text-2xl font-black text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">{office.title}</h3>
//                   <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mb-6 group-hover:w-24 transition-all duration-300" />
//                   <p className="text-gray-600 leading-relaxed mb-6">{office.address}</p>
//                   <a href={office.mapUrl} target="_blank" rel="noopener noreferrer"
//                     className="inline-flex items-center gap-2 text-orange-600 font-semibold hover:gap-3 transition-all duration-300 group/btn">
//                     <span>View on Map</span>
//                     <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                     </svg>
//                   </a>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Embedded map */}
//           <div className="relative">
//             <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl transform rotate-1" />
//             <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
//               <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.4158384567896!2d72.50633031496285!3d23.04503258491966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b3c6b6b6b6b%3A0x6b6b6b6b6b6b6b6b!2sThaltej%2C%20Ahmedabad%2C%20Gujarat%20380054!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
//                 width="100%" height="500"
//                 style={{ border: 0 }}
//                 allowFullScreen loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//                 title="Office Location Map"
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ── Global Presence ── */}
//       <div className="py-16 px-4 relative overflow-hidden"
//         style={{ background: 'linear-gradient(135deg,#0f172a 0%,#1a2744 50%,#0f172a 100%)' }}>

//         {/* dot grid */}
//         <div className="absolute inset-0 opacity-[0.04]"
//           style={{ backgroundImage:'radial-gradient(circle at 1.5px 1.5px,#f97316 1px,transparent 0)', backgroundSize:'36px 36px', pointerEvents:'none' }} />

//         {/* ambient blobs */}
//         <div className="absolute" style={{ top:'-180px', left:'2%', width:'560px', height:'560px',
//           background:'radial-gradient(circle,rgba(249,115,22,0.09) 0%,transparent 65%)',
//           borderRadius:'50%', filter:'blur(80px)', pointerEvents:'none' }} />
//         <div className="absolute" style={{ bottom:'-140px', right:'2%', width:'480px', height:'480px',
//           background:'radial-gradient(circle,rgba(239,68,68,0.08) 0%,transparent 65%)',
//           borderRadius:'50%', filter:'blur(80px)', pointerEvents:'none' }} />

//         <div className="max-w-6xl mx-auto relative z-10">
//           {/* header */}
//           <div className="text-center mb-10">
//             <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full mb-6"
//               style={{ background:'rgba(249,115,22,0.1)', border:'1px solid rgba(249,115,22,0.3)', backdropFilter:'blur(10px)' }}>
//               <Globe2 className="w-4 h-4" style={{ color:'#fb923c' }} />
//               <span style={{ color:'#fb923c', fontWeight:700, fontSize:11, letterSpacing:'2px', textTransform:'uppercase' }}>
//                 Global Network
//               </span>
//             </div>
//             <h2 className="font-black mb-4 leading-tight" style={{ color:'white', fontSize:'clamp(2rem,5vw,3.2rem)', fontWeight:900 }}>
//               Our Global{' '}
//               <span style={{
//                 background:'linear-gradient(90deg,#f97316,#ef4444,#f97316)',
//                 backgroundSize:'200% auto',
//                 WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent',
//                 animation:'ct-shimmer 3s linear infinite',
//               }}>Presence</span>
//             </h2>
//             <p style={{ color:'#94a3b8', fontSize:16, maxWidth:490, margin:'0 auto', lineHeight:1.7 }}>
//               Serving clients worldwide with offices and partners across multiple continents
//             </p>
//           </div>

//           {/* map box */}
//           <div className="relative mb-6 rounded-2xl overflow-hidden"
//             style={{
//               background:'linear-gradient(160deg,#0f172a 0%,#1a2744 60%,#0f172a 100%)',
//               border:'1px solid rgba(71,85,105,0.4)',
//               boxShadow:'0 35px 70px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.04)',
//             }}>
//             {/* top accent */}
//             <div style={{
//               position:'absolute', top:0, left:0, right:0, height:2, zIndex:5,
//               background:'linear-gradient(90deg,transparent,#f97316,#ef4444,#f97316,transparent)',
//             }} />
//             <WorldMap activeLocation={activeLocation} onHover={setActiveLocation} />
//           </div>

//           {/* location tags */}
//           <div className="flex flex-wrap justify-center gap-3">
//             {globalLocations.map(loc => {
//               const isActive = activeLocation === loc.name;
//               return (
//                 <button key={loc.name}
//                   onMouseEnter={() => setActiveLocation(loc.name)}
//                   onMouseLeave={() => setActiveLocation(null)}
//                   style={{
//                     padding:'10px 22px', borderRadius:999,
//                     fontWeight:700, fontSize:13, cursor:'pointer',
//                     display:'inline-flex', alignItems:'center', gap:9,
//                     background: isActive ? 'linear-gradient(135deg,#f97316,#ef4444)' : 'rgba(30,41,59,0.85)',
//                     color: isActive ? 'white' : '#cbd5e1',
//                     border:`2px solid ${isActive ? 'rgba(249,115,22,0.55)' : 'rgba(71,85,105,0.5)'}`,
//                     boxShadow: isActive ? '0 6px 24px rgba(249,115,22,0.4)' : 'none',
//                     transform: isActive ? 'translateY(-2px) scale(1.06)' : 'none',
//                     transition:'all 0.22s ease',
//                     outline:'none', letterSpacing:'0.3px',
//                   }}
//                 >
//                   <span style={{
//                     width:8, height:8, borderRadius:'50%', display:'inline-block', flexShrink:0,
//                     background: isActive ? 'white' : '#f97316',
//                     boxShadow:`0 0 ${isActive?'8px':'4px'} rgba(249,115,22,0.7)`,
//                     transition:'all 0.22s',
//                   }} />
//                   {loc.name}
//                   {loc.isHQ && (
//                     <span style={{
//                       fontSize:9, fontWeight:900,
//                       background: isActive ? 'rgba(255,255,255,0.25)' : 'rgba(249,115,22,0.2)',
//                       padding:'2px 7px', borderRadius:6,
//                       color: isActive ? 'white' : '#fb923c',
//                       letterSpacing:'0.8px',
//                     }}>HQ</span>
//                   )}
//                 </button>
//               );
//             })}
//           </div>
//         </div>
//       </div>

//       {/* ── Animations ── */}
//       <style>{`
//         @keyframes blob {
//           0%,100% { transform: translate(0,0) scale(1); }
//           25%      { transform: translate(20px,-20px) scale(1.1); }
//           50%      { transform: translate(-20px,20px) scale(0.9); }
//           75%      { transform: translate(20px,20px) scale(1.05); }
//         }
//         .animate-blob { animation: blob 7s infinite; }
//         .animation-delay-2000 { animation-delay: 2s; }
//         .animation-delay-4000 { animation-delay: 4s; }
//         @keyframes gradient {
//           0%,100% { background-position: 0% 50%; }
//           50%      { background-position: 100% 50%; }
//         }
//         .animate-gradient { background-size:200% 200%; animation: gradient 3s ease infinite; }
//         @keyframes ct-shimmer {
//           0%   { background-position: 0% center; }
//           100% { background-position: 200% center; }
//         }
//         @keyframes ct-fadeUp {
//           from { opacity:0; transform: translateY(-6px); }
//           to   { opacity:1; transform: translateY(0); }
//         }
//       `}</style>
//     </div>
//   );
// }

// export default ContactPage;





import React, { useState } from 'react';
import { MapPin, Mail, Phone, Clock, Send, Globe2, Building2 } from 'lucide-react';

// ─── Marker positions (pixel coords on 960x500 viewBox) ───────────────────────
const MARKERS = [
  { name: "USA",       cx: 162, cy: 158, region: "Americas",    description: "North America Hub" },
  { name: "Ireland",   cx: 424, cy: 124, region: "Europe",      description: "European Gateway" },
  { name: "UK",        cx: 440, cy: 118, region: "Europe",      description: "United Kingdom" },
  { name: "Dubai",     cx: 604, cy: 199, region: "Middle East", description: "Middle East Office" },
  { name: "India",     cx: 648, cy: 182, region: "Asia",        description: "Headquarters", isHQ: true },
  { name: "Singapore", cx: 716, cy: 244, region: "Asia",        description: "Asia Pacific Hub" },
  { name: "Australia", cx: 762, cy: 330, region: "Oceania",     description: "Oceania Office" },
];

const HQ = { cx: 648, cy: 182 };

// ─── World geography (simplified country paths for 960x500 viewBox) ───────────
// Each path is a simplified but geographically-placed polygon
const WORLD_LAND = `
M 62 95 L 78 88 L 96 84 L 116 83 L 134 86 L 148 93 L 156 103 L 154 115
L 143 122 L 128 125 L 112 122 L 97 115 L 83 106 L 70 100 Z
M 86 124 L 100 120 L 114 121 L 122 130 L 118 140 L 105 144 L 92 140 L 85 131 Z
M 108 143 L 126 139 L 144 141 L 156 151 L 158 164 L 149 175 L 134 179
L 118 175 L 106 165 L 103 152 Z
M 155 163 L 172 158 L 189 158 L 200 167 L 200 180 L 191 190 L 176 193
L 161 188 L 153 177 L 152 166 Z
M 106 179 L 120 175 L 134 177 L 140 188 L 136 199 L 123 204 L 110 200
L 103 189 L 104 181 Z
M 135 199 L 148 194 L 162 194 L 170 204 L 167 216 L 154 221 L 140 217
L 133 207 L 133 201 Z
M 147 218 L 160 215 L 171 219 L 174 230 L 168 240 L 156 243 L 144 238
L 140 228 L 143 220 Z
M 156 240 L 168 237 L 178 241 L 180 253 L 173 263 L 161 265 L 150 260
L 148 249 L 151 242 Z
M 164 262 L 174 259 L 183 263 L 184 274 L 177 282 L 166 283 L 158 277
L 158 267 L 161 263 Z
M 223 215 L 240 209 L 260 208 L 278 215 L 287 228 L 283 243 L 268 250
L 249 251 L 231 244 L 220 230 Z
M 238 248 L 255 244 L 272 247 L 280 260 L 276 274 L 260 280 L 243 277
L 234 263 L 235 251 Z
M 250 276 L 264 272 L 276 276 L 278 290 L 270 300 L 255 301 L 245 293
L 244 282 L 247 277 Z
M 270 244 L 295 236 L 325 236 L 350 247 L 362 265 L 356 285 L 334 297
L 306 298 L 280 288 L 264 270 L 264 253 Z
M 140 187 L 158 181 L 177 181 L 193 190 L 198 204 L 191 218 L 174 224
L 156 221 L 142 210 L 138 196 Z
M 380 90 L 390 85 L 402 85 L 411 92 L 410 102 L 400 108 L 388 106
L 380 98 Z
M 414 108 L 428 103 L 443 103 L 453 112 L 452 124 L 440 130 L 426 129
L 415 120 L 412 112 Z
M 428 128 L 440 124 L 451 127 L 455 138 L 449 148 L 437 150 L 427 143
L 424 133 Z
M 420 117 L 427 114 L 434 116 L 436 124 L 430 129 L 422 127 L 418 120 Z
M 452 95 L 470 88 L 492 86 L 510 92 L 517 104 L 511 118 L 494 124
L 473 123 L 456 114 L 449 103 Z
M 460 122 L 476 118 L 493 120 L 501 132 L 496 145 L 480 149 L 464 145
L 455 133 L 456 124 Z
M 462 145 L 477 141 L 494 144 L 502 156 L 497 169 L 481 173 L 465 169
L 457 157 L 458 147 Z
M 468 143 L 479 139 L 490 142 L 492 153 L 484 161 L 472 160 L 465 151
L 466 145 Z
M 510 85 L 540 77 L 578 74 L 614 76 L 643 84 L 660 96 L 655 110
L 635 120 L 606 124 L 573 122 L 543 114 L 517 101 L 507 90 Z
M 600 120 L 622 114 L 648 113 L 670 120 L 680 133 L 674 148 L 655 156
L 630 157 L 607 148 L 596 133 Z
M 526 118 L 548 112 L 572 112 L 590 121 L 595 136 L 585 150 L 564 155
L 541 152 L 524 140 L 520 125 Z
M 527 147 L 545 141 L 565 141 L 579 151 L 580 165 L 567 174 L 548 175
L 530 166 L 523 154 Z
M 558 168 L 576 163 L 596 164 L 608 175 L 606 190 L 591 198 L 571 198
L 556 187 L 552 174 Z
M 595 170 L 613 165 L 632 166 L 643 178 L 641 193 L 625 200 L 606 199
L 594 187 L 592 175 Z
M 596 196 L 610 191 L 625 193 L 631 204 L 626 216 L 611 220 L 597 215
L 591 204 Z
M 630 155 L 645 148 L 662 148 L 674 158 L 674 173 L 660 181 L 642 181
L 629 170 L 627 158 Z
M 660 146 L 678 140 L 698 140 L 710 151 L 708 166 L 692 173 L 672 172
L 660 160 Z
M 700 120 L 726 113 L 756 112 L 781 120 L 791 135 L 785 152 L 764 161
L 736 162 L 709 152 L 697 136 Z
M 700 158 L 718 152 L 738 153 L 750 165 L 745 180 L 727 186 L 707 182
L 697 168 Z
M 748 134 L 763 129 L 779 131 L 784 144 L 777 156 L 760 159 L 746 153
L 742 140 Z
M 768 130 L 780 125 L 793 128 L 796 140 L 787 150 L 774 150 L 766 141
L 764 132 Z
M 450 165 L 474 158 L 504 155 L 534 158 L 557 168 L 564 183 L 554 200
L 529 210 L 498 212 L 467 205 L 446 190 L 442 176 Z
M 428 203 L 448 196 L 471 196 L 486 207 L 483 222 L 464 230 L 442 228
L 426 216 Z
M 480 202 L 501 196 L 523 198 L 534 211 L 529 227 L 509 234 L 487 231
L 473 217 L 474 206 Z
M 524 204 L 544 198 L 564 200 L 573 213 L 568 229 L 548 236 L 526 232
L 514 218 Z
M 550 224 L 568 218 L 586 221 L 591 235 L 583 248 L 564 252 L 547 246
L 541 232 Z
M 490 228 L 507 222 L 525 224 L 531 238 L 522 251 L 504 254 L 488 248
L 482 235 L 484 229 Z
M 500 250 L 516 245 L 531 248 L 534 261 L 524 272 L 507 274 L 494 266
L 490 254 Z
M 536 238 L 554 232 L 572 235 L 577 250 L 567 263 L 548 266 L 532 258
L 528 244 Z
M 700 205 L 718 198 L 738 198 L 752 209 L 750 225 L 733 233 L 712 231
L 699 219 Z
M 736 205 L 753 200 L 770 203 L 774 217 L 763 228 L 745 228 L 732 218
L 732 208 Z
M 712 230 L 718 227 L 725 229 L 725 236 L 718 239 L 711 236 Z
M 722 305 L 740 297 L 762 295 L 784 301 L 798 315 L 797 333 L 780 347
L 757 352 L 733 346 L 717 330 L 715 313 Z
M 795 345 L 805 340 L 816 342 L 818 352 L 809 358 L 798 355 L 793 348 Z
M 560 265 L 568 259 L 578 261 L 580 271 L 571 278 L 560 275 Z
`;

// ─── Tooltip ─────────────────────────────────────────────────────────────────
function TooltipCard({ data }) {
  if (!data) return null;
  return (
    <div style={{
      position: "absolute", top: 16, right: 16,
      background: "linear-gradient(135deg,#f97316,#ef4444)",
      borderRadius: 16, padding: "15px 20px",
      boxShadow: "0 12px 40px rgba(249,115,22,0.45)",
      minWidth: 165, zIndex: 20,
      animation: "ct-fadeUp 0.2s ease",
      pointerEvents: "none",
    }}>
      <p style={{ margin: 0, fontWeight: 900, color: "white", fontSize: 15 }}>{data.name}</p>
      <p style={{ margin: "5px 0 0", color: "rgba(255,255,255,0.88)", fontSize: 12 }}>{data.description}</p>
      <p style={{ margin: "3px 0 0", color: "rgba(255,255,255,0.6)", fontSize: 10, textTransform: "uppercase", letterSpacing: "1.2px" }}>{data.region}</p>
      {data.isHQ && (
        <div style={{
          marginTop: 10, display: "inline-flex", alignItems: "center", gap: 5,
          background: "rgba(255,255,255,0.22)", borderRadius: 20,
          padding: "4px 10px", color: "white", fontSize: 9, fontWeight: 900, letterSpacing: "1.5px",
        }}>★ HEADQUARTERS</div>
      )}
    </div>
  );
}

// ─── SVG World Map (zero dependencies) ───────────────────────────────────────
function WorldMap({ activeLocation, onHover }) {
  return (
    <div style={{ position: "relative", width: "100%", height: 420 }}>
      <svg viewBox="0 0 960 500" width="100%" height="100%" style={{ display: "block" }}>
        <defs>
          <radialGradient id="wm-ocean" cx="50%" cy="50%" r="80%">
            <stop offset="0%" stopColor="#1e3a5f" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#0f172a" stopOpacity="0" />
          </radialGradient>
          <filter id="wm-glow">
            <feGaussianBlur stdDeviation="4" result="b"/>
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>

        <rect width="960" height="500" fill="url(#wm-ocean)" />

        {/* Graticule lines */}
        {[100,200,300,400].map(y => (
          <line key={`h${y}`} x1={0} y1={y} x2={960} y2={y}
            stroke="rgba(148,163,184,0.05)" strokeWidth="0.8" strokeDasharray="6,12"/>
        ))}
        {[120,240,360,480,600,720,840].map(x => (
          <line key={`v${x}`} x1={x} y1={0} x2={x} y2={500}
            stroke="rgba(148,163,184,0.05)" strokeWidth="0.8" strokeDasharray="6,12"/>
        ))}

        {/* World land mass */}
        <path d={WORLD_LAND}
          fill="rgba(45,66,99,0.58)"
          stroke="rgba(100,140,190,0.2)"
          strokeWidth="0.5"
          strokeLinejoin="round"
        />

        {/* Highlighted glow zones behind markers */}
        {MARKERS.map(loc => {
          const isActive = activeLocation === loc.name;
          const isHQ = loc.isHQ;
          return (
            <circle key={`zone-${loc.name}`}
              cx={loc.cx} cy={loc.cy}
              r={isHQ ? 26 : 18}
              fill={isActive
                ? isHQ ? "rgba(251,191,36,0.18)" : "rgba(249,115,22,0.18)"
                : isHQ ? "rgba(251,191,36,0.07)" : "rgba(249,115,22,0.07)"}
              stroke={isActive
                ? isHQ ? "rgba(251,191,36,0.6)" : "rgba(249,115,22,0.55)"
                : isHQ ? "rgba(251,191,36,0.2)" : "rgba(249,115,22,0.2)"}
              strokeWidth={isActive ? 1.5 : 0.8}
              style={{ transition: "all 0.3s", cursor: "pointer" }}
              onMouseEnter={() => onHover(loc.name)}
              onMouseLeave={() => onHover(null)}
            />
          );
        })}

        {/* Connection arcs from India HQ */}
        {MARKERS.filter(m => !m.isHQ).map(loc => {
          const isActive = activeLocation === loc.name;
          const mx = (loc.cx + HQ.cx) / 2;
          const my = Math.min(loc.cy, HQ.cy) - 65;
          return (
            <path key={`arc-${loc.name}`}
              d={`M${HQ.cx} ${HQ.cy} Q${mx} ${my} ${loc.cx} ${loc.cy}`}
              fill="none"
              stroke={isActive ? "#f97316" : "rgba(249,115,22,0.18)"}
              strokeWidth={isActive ? 1.8 : 0.9}
              strokeDasharray={isActive ? "0" : "5,8"}
              strokeLinecap="round"
              style={{ transition: "all 0.3s" }}
            />
          );
        })}

        {/* Markers */}
        {MARKERS.map(loc => {
          const isActive = activeLocation === loc.name;
          const isHQ = loc.isHQ;
          const r = isHQ ? 9 : 6;
          return (
            <g key={loc.name}
              style={{ cursor: "pointer" }}
              onMouseEnter={() => onHover(loc.name)}
              onMouseLeave={() => onHover(null)}
            >
              {/* Pulse ring */}
              <circle cx={loc.cx} cy={loc.cy} r={r} fill="none"
                stroke={isHQ ? "#fbbf24" : "#f97316"} strokeWidth="1.2" opacity="0">
                <animate attributeName="r" values={`${r};${r+14};${r}`} dur={isHQ ? "2s" : "2.8s"} repeatCount="indefinite"/>
                <animate attributeName="opacity" values="0.7;0;0.7" dur={isHQ ? "2s" : "2.8s"} repeatCount="indefinite"/>
              </circle>
              {/* Halo */}
              <circle cx={loc.cx} cy={loc.cy} r={isActive ? r + 7 : r + 3}
                fill={isHQ ? "rgba(251,191,36,0.22)" : "rgba(249,115,22,0.22)"}
                style={{ transition: "r 0.25s" }}
              />
              {/* Core */}
              <circle cx={loc.cx} cy={loc.cy} r={isActive ? r + 2 : r}
                fill={isHQ ? (isActive ? "#fde68a" : "#fbbf24") : (isActive ? "#fb923c" : "#f97316")}
                stroke="white" strokeWidth={isHQ ? 2 : 1.5}
                filter="url(#wm-glow)"
                style={{ transition: "all 0.25s" }}
              />
              {/* HQ star */}
              {isHQ && (
                <text x={loc.cx} y={loc.cy + 0.5}
                  textAnchor="middle" dominantBaseline="middle"
                  fill="white" fontSize="6" fontWeight="900" style={{ pointerEvents: "none" }}>★</text>
              )}
              {/* Label */}
              <text x={loc.cx} y={loc.cy - r - 8}
                textAnchor="middle"
                fill={isActive ? (isHQ ? "#fbbf24" : "#fb923c") : "rgba(226,232,240,0.85)"}
                fontSize={isActive ? 10.5 : 9}
                fontWeight={isActive ? "800" : "600"}
                fontFamily="system-ui,sans-serif"
                style={{ transition: "all 0.25s", pointerEvents: "none", userSelect: "none" }}>
                {loc.name}
              </text>
            </g>
          );
        })}
      </svg>

      <TooltipCard data={MARKERS.find(m => m.name === activeLocation) || null} />

      {/* Stats */}
      <div style={{
        position: "absolute", bottom: 16, left: 16,
        background: "rgba(10,15,30,0.88)", backdropFilter: "blur(14px)",
        border: "1px solid rgba(249,115,22,0.22)",
        borderRadius: 14, padding: "11px 20px",
        display: "flex", gap: 24, zIndex: 5,
      }}>
        {[["7","Countries"],["3","Continents"],["500+","Clients"]].map(([n, l]) => (
          <div key={l} style={{ textAlign: "center" }}>
            <div style={{
              fontWeight: 900, fontSize: 19, lineHeight: 1,
              background: "linear-gradient(135deg,#f97316,#ef4444)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            }}>{n}</div>
            <div style={{ color: "#64748b", fontSize: 10, fontWeight: 700, letterSpacing: "0.8px", marginTop: 2, textTransform: "uppercase" }}>{l}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Main ContactPage ─────────────────────────────────────────────────────────
function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [activeLocation, setActiveLocation] = useState(null);

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = e => { e.preventDefault(); console.log('Form submitted:', formData); };

  const offices = [
    {
      title: 'Ahmedabad',
      address: 'A/53, 5th floor, New York Tower, Thaltej, S G Highway, Ahmedabad - 380015.',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=New+York+Tower+Thaltej+SG+Highway+Ahmedabad+380015'
    },
    {
      title: 'Himachal Pradesh',
      address: '29, First Floor, Block1, Dev Bhoomi Apartments, Khasra no- 9,10,11,12,13,20,21, kitas-7, mauza jadhog, deonghat, Tehsil & District Solan - 173211',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Dev+Bhoomi+Apartments+Deonghat+Solan+Himachal+Pradesh+173211'
    },
    {
      title: 'Ayodhya',
      address: '4th Floor, Arundhati Bhawan West, Multilevel Parking, Tedhi Bajar, Dist.- Ayodhya, State:- Uttar Pradesh India, Pin- 224123',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Arundhati+Bhawan+Tedhi+Bajar+Ayodhya+Uttar+Pradesh+224123'
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-[76px]">

      {/* ── Hero + Form ── */}
      <div className="relative bg-gradient-to-br from-orange-50 via-white to-red-50 py-20 px-4 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-6">
                <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
                  <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
                  <span className="text-sm uppercase tracking-widest text-gray-700 font-bold">Contact with Kavach Technology</span>
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
                <span className="text-gray-900">Feel free to </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 animate-gradient">get in touch</span>
                <span className="text-gray-900"> with us</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                We're here to help and answer any question you might have. We look forward to hearing from you.
              </p>
            </div>

            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-br from-orange-400 to-red-400 rounded-full opacity-10 blur-3xl" />
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br from-red-400 to-orange-400 rounded-full opacity-10 blur-3xl" />
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 md:p-10 border-2 border-gray-100 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-orange-500 via-red-500 to-orange-500" />
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl mb-3 shadow-lg transform hover:scale-110 transition-transform duration-300">
                    <Send className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-1">Send Us a Message</h2>
                  <p className="text-sm text-gray-600">Fill out the form below and we'll get back to you shortly</p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="relative group">
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Your Name *</label>
                      <input type="text" name="name" placeholder="John Doe" value={formData.name} onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-50 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:bg-white outline-none transition-all duration-300 group-hover:border-orange-300 text-gray-900 placeholder-gray-400 text-sm" required />
                    </div>
                    <div className="relative group">
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Email Address *</label>
                      <input type="email" name="email" placeholder="john@example.com" value={formData.email} onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-50 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:bg-white outline-none transition-all duration-300 group-hover:border-orange-300 text-gray-900 placeholder-gray-400 text-sm" required />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="relative group">
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Phone Number *</label>
                      <input type="tel" name="phone" placeholder="+91 98765 43210" value={formData.phone} onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-50 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:bg-white outline-none transition-all duration-300 group-hover:border-orange-300 text-gray-900 placeholder-gray-400 text-sm" required />
                    </div>
                    <div className="relative group">
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Service Required</label>
                      <input type="text" name="service" placeholder="e.g., Web Development" value={formData.service} onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-50 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:bg-white outline-none transition-all duration-300 group-hover:border-orange-300 text-gray-900 placeholder-gray-400 text-sm" />
                    </div>
                  </div>
                  <div className="relative group">
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Your Message</label>
                    <textarea name="message" placeholder="Tell us about your project or inquiry..." value={formData.message} onChange={handleChange}
                      rows="4"
                      className="w-full px-4 py-3 bg-gray-50 rounded-xl border-2 border-gray-200 focus:border-orange-500 focus:bg-white outline-none transition-all duration-300 resize-none group-hover:border-orange-300 text-gray-900 placeholder-gray-400 text-sm" />
                  </div>
                  <div className="text-center pt-2">
                    <button type="submit"
                      className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 hover:from-orange-600 hover:via-red-600 hover:to-orange-600 text-white font-bold text-base rounded-full transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl active:scale-95">
                      <Send className="w-5 h-5" />
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Contact Info Cards ── */}
      <div className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Mail className="w-8 h-8 text-white" />,
                title: 'Email Us',
                content: (
                  <a href="mailto:info@kavachglobal.com" className="flex items-center gap-3 text-gray-600 hover:text-orange-500 transition-colors group/link">
                    <span className="w-2 h-2 bg-orange-500 rounded-full group-hover/link:scale-150 transition-transform" />
                    <span className="font-medium">info@kavachglobal.com</span>
                  </a>
                )
              },
              {
                icon: <Phone className="w-8 h-8 text-white" />,
                title: 'Call Us',
                content: (
                  <a href="tel:+917228888904" className="flex items-center gap-3 text-gray-600 hover:text-orange-500 transition-colors group/link">
                    <span className="w-2 h-2 bg-orange-500 rounded-full group-hover/link:scale-150 transition-transform" />
                    <span className="font-medium">+91 72288 88904</span>
                  </a>
                )
              },
              {
                icon: <Clock className="w-8 h-8 text-white" />,
                title: 'Working Hours',
                content: (
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2" />
                      <div><p className="font-bold text-gray-900">Mon - Sat</p><p className="text-gray-600">8:00 AM - 6:00 PM</p></div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2" />
                      <div><p className="font-bold text-gray-900">Sunday</p><p className="text-gray-600">CLOSED</p></div>
                    </div>
                  </div>
                )
              }
            ].map((card, i) => (
              <div key={i} className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-orange-200 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-500 to-red-500 rounded-full opacity-5 transform translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-500" />
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                    {card.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">{card.title}</h3>
                  <div className="space-y-4">{card.content}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Office Locations ── */}
      <div className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-orange-100 px-6 py-3 rounded-full mb-6">
              <Building2 className="w-5 h-5 text-orange-600" />
              <span className="text-orange-600 font-bold text-sm uppercase tracking-wide">Our Locations</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
              Visit <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">Our Offices</span>
            </h2>
            <p className="text-gray-600 text-xl max-w-2xl mx-auto">We have offices across India to serve you better</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {offices.map((office, index) => (
              <div key={index} className="group relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-orange-300 overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-orange-500 to-red-500 opacity-10 rounded-bl-full transform group-hover:scale-150 transition-transform duration-500" />
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">{office.title}</h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mb-6 group-hover:w-24 transition-all duration-300" />
                  <p className="text-gray-600 leading-relaxed mb-6">{office.address}</p>
                  <a href={office.mapUrl} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-orange-600 font-semibold hover:gap-3 transition-all duration-300 group/btn">
                    <span>View on Map</span>
                    <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl transform rotate-1" />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.4158384567896!2d72.50633031496285!3d23.04503258491966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b3c6b6b6b6b%3A0x6b6b6b6b6b6b6b6b!2sThaltej%2C%20Ahmedabad%2C%20Gujarat%20380054!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%" height="500"
                style={{ border: 0 }}
                allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location Map"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ── Global Presence ── */}
      <div className="py-16 px-4 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg,#0f172a 0%,#1a2744 50%,#0f172a 100%)' }}>

        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'radial-gradient(circle at 1.5px 1.5px,#f97316 1px,transparent 0)', backgroundSize: '36px 36px', pointerEvents: 'none' }} />
        <div className="absolute" style={{ top: '-180px', left: '2%', width: '560px', height: '560px', background: 'radial-gradient(circle,rgba(249,115,22,0.09) 0%,transparent 65%)', borderRadius: '50%', filter: 'blur(80px)', pointerEvents: 'none' }} />
        <div className="absolute" style={{ bottom: '-140px', right: '2%', width: '480px', height: '480px', background: 'radial-gradient(circle,rgba(239,68,68,0.08) 0%,transparent 65%)', borderRadius: '50%', filter: 'blur(80px)', pointerEvents: 'none' }} />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full mb-6"
              style={{ background: 'rgba(249,115,22,0.1)', border: '1px solid rgba(249,115,22,0.3)', backdropFilter: 'blur(10px)' }}>
              <Globe2 className="w-4 h-4" style={{ color: '#fb923c' }} />
              <span style={{ color: '#fb923c', fontWeight: 700, fontSize: 11, letterSpacing: '2px', textTransform: 'uppercase' }}>Global Network</span>
            </div>
            <h2 className="font-black mb-4 leading-tight" style={{ color: 'white', fontSize: 'clamp(2rem,5vw,3.2rem)', fontWeight: 900 }}>
              Our Global{' '}
              <span style={{
                background: 'linear-gradient(90deg,#f97316,#ef4444,#f97316)',
                backgroundSize: '200% auto',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                animation: 'ct-shimmer 3s linear infinite',
              }}>Presence</span>
            </h2>
            <p style={{ color: '#94a3b8', fontSize: 16, maxWidth: 490, margin: '0 auto', lineHeight: 1.7 }}>
              Serving clients worldwide with offices and partners across multiple continents
            </p>
          </div>

          {/* Map Box */}
          <div className="relative mb-6 rounded-2xl overflow-hidden"
            style={{
              background: 'linear-gradient(160deg,#0f172a 0%,#1a2744 60%,#0f172a 100%)',
              border: '1px solid rgba(71,85,105,0.4)',
              boxShadow: '0 35px 70px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.04)',
            }}>
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0, height: 2, zIndex: 5,
              background: 'linear-gradient(90deg,transparent,#f97316,#ef4444,#f97316,transparent)',
            }} />
            <WorldMap activeLocation={activeLocation} onHover={setActiveLocation} />
          </div>

          {/* Location Tags */}
          <div className="flex flex-wrap justify-center gap-3">
            {MARKERS.map(loc => {
              const isActive = activeLocation === loc.name;
              return (
                <button key={loc.name}
                  onMouseEnter={() => setActiveLocation(loc.name)}
                  onMouseLeave={() => setActiveLocation(null)}
                  style={{
                    padding: '10px 22px', borderRadius: 999,
                    fontWeight: 700, fontSize: 13, cursor: 'pointer',
                    display: 'inline-flex', alignItems: 'center', gap: 9,
                    background: isActive ? 'linear-gradient(135deg,#f97316,#ef4444)' : 'rgba(30,41,59,0.85)',
                    color: isActive ? 'white' : '#cbd5e1',
                    border: `2px solid ${isActive ? 'rgba(249,115,22,0.55)' : 'rgba(71,85,105,0.5)'}`,
                    boxShadow: isActive ? '0 6px 24px rgba(249,115,22,0.4)' : 'none',
                    transform: isActive ? 'translateY(-2px) scale(1.06)' : 'none',
                    transition: 'all 0.22s ease',
                    outline: 'none', letterSpacing: '0.3px',
                  }}
                >
                  <span style={{
                    width: 8, height: 8, borderRadius: '50%', display: 'inline-block', flexShrink: 0,
                    background: isActive ? 'white' : '#f97316',
                    boxShadow: `0 0 ${isActive ? '8px' : '4px'} rgba(249,115,22,0.7)`,
                    transition: 'all 0.22s',
                  }} />
                  {loc.name}
                  {loc.isHQ && (
                    <span style={{
                      fontSize: 9, fontWeight: 900,
                      background: isActive ? 'rgba(255,255,255,0.25)' : 'rgba(249,115,22,0.2)',
                      padding: '2px 7px', borderRadius: 6,
                      color: isActive ? 'white' : '#fb923c', letterSpacing: '0.8px',
                    }}>HQ</span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Animations ── */}
      <style>{`
        @keyframes blob {
          0%,100% { transform: translate(0,0) scale(1); }
          25%      { transform: translate(20px,-20px) scale(1.1); }
          50%      { transform: translate(-20px,20px) scale(0.9); }
          75%      { transform: translate(20px,20px) scale(1.05); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
        @keyframes gradient {
          0%,100% { background-position: 0% 50%; }
          50%      { background-position: 100% 50%; }
        }
        .animate-gradient { background-size:200% 200%; animation: gradient 3s ease infinite; }
        @keyframes ct-shimmer {
          0%   { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
        @keyframes ct-fadeUp {
          from { opacity:0; transform: translateY(-6px); }
          to   { opacity:1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

export default ContactPage;