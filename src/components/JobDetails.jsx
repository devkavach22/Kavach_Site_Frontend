// import React, { useState, useRef } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { 
//   MapPin, Clock, Briefcase, DollarSign, Users, Calendar, 
//   CheckCircle, ArrowLeft, Send, Upload, Mail, Phone 
// } from 'lucide-react'

// function JobDetails() {
//   const navigate = useNavigate()
//   const [showApplicationForm, setShowApplicationForm] = useState(false)
//   const [dragActive, setDragActive] = useState(false)
//   const fileInputRef = useRef(null)
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     phone: '',
//     experience: '',
//     currentCompany: '',
//     noticePeriod: '',
//     expectedSalary: '',
//     portfolio: '',
//     coverLetter: '',
//     resume: null
//   })

//   // Example job
//   const job = {
//     id: 1,
//     title: 'Senior Full Stack Developer',
//     department: 'IT Services',
//     location: 'Surat, Gujarat, India',
//     type: 'Full-time',
//     experience: '5-7 years',
//     salary: '₹12-18 LPA',
//     postedDate: 'Posted 3 days ago',
//     openings: 3,
//     technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'TypeScript', 'AWS'],
    
//     description: `We are looking for an experienced Full Stack Developer to join our dynamic IT Services team. 
//     You will be responsible for developing and maintaining enterprise-level web applications, working with modern 
//     technologies, and collaborating with cross-functional teams to deliver high-quality solutions.`,
    
//     responsibilities: [
//       'Design, develop, and maintain scalable web applications using React and Node.js',
//       'Build RESTful APIs and microservices with Express and MongoDB',
//       'Collaborate with UI/UX designers to implement responsive user interfaces',
//       'Write clean, maintainable, and well-documented code',
//       'Participate in code reviews and mentor junior developers',
//       'Optimize application performance and ensure security best practices',
//       'Work with DevOps team for CI/CD pipeline and cloud deployments',
//       'Contribute to technical architecture decisions and documentation'
//     ],
    
//     requirements: [
//       '5-7 years of professional experience in full stack development',
//       'Strong proficiency in React.js, Node.js, and Express.js',
//       'Experience with MongoDB and SQL databases',
//       'Solid understanding of TypeScript and modern JavaScript (ES6+)',
//       'Knowledge of cloud platforms (AWS, Azure, or GCP)',
//       'Experience with Git, CI/CD pipelines, and Agile methodologies',
//       'Strong problem-solving skills and attention to detail',
//       'Excellent communication and teamwork abilities',
//       'Bachelor\'s degree in Computer Science or related field'
//     ],
    
//     niceToHave: [
//       'Experience with GraphQL and Apollo',
//       'Knowledge of Docker and Kubernetes',
//       'Familiarity with testing frameworks (Jest, Mocha, Cypress)',
//       'Experience with state management libraries (Redux, MobX)',
//       'Understanding of microservices architecture',
//       'Previous experience in mentoring or leading a team'
//     ],
    
//     benefits: [
//       'Competitive salary with performance bonuses',
//       'Health insurance for employee and family',
//       'Flexible working hours and work-from-home options',
//       'Professional development and training opportunities',
//       'Modern office facilities with latest equipment',
//       'Team outings and company events',
//       'Annual performance reviews with career growth path',
//       'Paid time off and festival holidays'
//     ]
//   }

//   const handleInputChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     })
//   }

//   // Drag and Drop Handlers
//   const handleDrag = (e) => {
//     e.preventDefault()
//     e.stopPropagation()
//     if (e.type === "dragenter" || e.type === "dragover") {
//       setDragActive(true)
//     } else if (e.type === "dragleave") {
//       setDragActive(false)
//     }
//   }

//   const handleDrop = (e) => {
//     e.preventDefault()
//     e.stopPropagation()
//     setDragActive(false)
//     if (e.dataTransfer.files && e.dataTransfer.files[0]) {
//       setFormData({ ...formData, resume: e.dataTransfer.files[0] })
//       console.log("File dropped:", e.dataTransfer.files[0].name)
//     }
//   }

//   const handleFileChange = (e) => {
//     if (e.target.files && e.target.files[0]) {
//       setFormData({ ...formData, resume: e.target.files[0] })
//     }
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     console.log('Form submitted:', formData)
//     alert('Application submitted successfully! We will contact you soon.')
//     setShowApplicationForm(false)
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 pt-[76px]">
//       {/* Header */}
//       <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-12">
//         <div className="max-w-7xl mx-auto px-6">
//           <button 
//             onClick={() => navigate('/career')}
//             className="flex items-center gap-2 text-white hover:text-gray-200 mb-6 transition-colors"
//           >
//             <ArrowLeft className="w-5 h-5" />
//             Back to Careers
//           </button>
//           <h1 className="text-4xl md:text-5xl font-bold mb-2">{job.title}</h1>
//           <p className="text-orange-100 text-lg">{job.department}</p>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-6 py-8">
//         <div className="grid lg:grid-cols-3 gap-8">
//           {/* Main Content */}
//           <div className="lg:col-span-2 space-y-6">
//             <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-100">
//               <div className="grid md:grid-cols-2 gap-6 mb-6">
//                 <div className="flex items-center gap-3">
//                   <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
//                     <MapPin className="w-5 h-5 text-white" />
//                   </div>
//                   <div>
//                     <div className="text-sm text-gray-500 font-medium">Location</div>
//                     <div className="font-bold text-gray-900">{job.location}</div>
//                   </div>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
//                     <Clock className="w-5 h-5 text-white" />
//                   </div>
//                   <div>
//                     <div className="text-sm text-gray-500 font-medium">Job Type</div>
//                     <div className="font-bold text-gray-900">{job.type}</div>
//                   </div>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
//                     <Briefcase className="w-5 h-5 text-white" />
//                   </div>
//                   <div>
//                     <div className="text-sm text-gray-500 font-medium">Experience</div>
//                     <div className="font-bold text-gray-900">{job.experience}</div>
//                   </div>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
//                     <DollarSign className="w-5 h-5 text-white" />
//                   </div>
//                   <div>
//                     <div className="text-sm text-gray-500 font-medium">Salary</div>
//                     <div className="font-bold text-gray-900">{job.salary}</div>
//                   </div>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
//                     <Users className="w-5 h-5 text-white" />
//                   </div>
//                   <div>
//                     <div className="text-sm text-gray-500 font-medium">Openings</div>
//                     <div className="font-bold text-gray-900">{job.openings} positions</div>
//                   </div>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
//                     <Calendar className="w-5 h-5 text-white" />
//                   </div>
//                   <div>
//                     <div className="text-sm text-gray-500 font-medium">Posted</div>
//                     <div className="font-bold text-gray-900">{job.postedDate}</div>
//                   </div>
//                 </div>
//               </div>

//               <div className="border-t-2 border-gray-100 pt-6">
//                 <h3 className="font-bold text-gray-900 mb-3">Required Technologies</h3>
//                 <div className="flex flex-wrap gap-2">
//                   {job.technologies.map(tech => (
//                     <span
//                       key={tech}
//                       className="px-4 py-2 bg-gradient-to-r from-orange-100 to-red-100 text-orange-700 rounded-full text-sm font-bold border border-orange-200"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-100">
//               <h2 className="text-2xl font-bold mb-4 text-gray-900">Job Description</h2>
//               <p className="text-gray-700 leading-relaxed">{job.description}</p>
//             </div>

//             <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-100">
//               <h2 className="text-2xl font-bold mb-4 text-gray-900">Key Responsibilities</h2>
//               <ul className="space-y-3">
//                 {job.responsibilities.map((item, idx) => (
//                   <li key={idx} className="flex gap-3">
//                     <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
//                     <span className="text-gray-700 leading-relaxed">{item}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-100">
//               <h2 className="text-2xl font-bold mb-4 text-gray-900">Requirements</h2>
//               <ul className="space-y-3">
//                 {job.requirements.map((item, idx) => (
//                   <li key={idx} className="flex gap-3">
//                     <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
//                     <span className="text-gray-700 leading-relaxed">{item}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-100">
//               <h2 className="text-2xl font-bold mb-4 text-gray-900">Nice to Have</h2>
//               <ul className="space-y-3">
//                 {job.niceToHave.map((item, idx) => (
//                   <li key={idx} className="flex gap-3">
//                     <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
//                     <span className="text-gray-700 leading-relaxed">{item}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-100">
//               <h2 className="text-2xl font-bold mb-4 text-gray-900">Benefits & Perks</h2>
//               <ul className="space-y-3">
//                 {job.benefits.map((item, idx) => (
//                   <li key={idx} className="flex gap-3">
//                     <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
//                     <span className="text-gray-700 leading-relaxed">{item}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>

//           {/* Sidebar */}
//           <div className="lg:col-span-1">
//             <div className="sticky top-24 space-y-6">
//               <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-100">
//                 <h3 className="text-xl font-bold mb-4 text-gray-900">Ready to Apply?</h3>
//                 <p className="text-gray-600 mb-6 text-sm leading-relaxed">
//                   Submit your application and join our team of talented professionals.
//                 </p>
//                 <button
//                   onClick={() => setShowApplicationForm(true)}
//                   className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-4 rounded-xl transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg"
//                 >
//                   <Send className="w-5 h-5" />
//                   Apply Now
//                 </button>
//                 <button className="w-full mt-3 border-2 border-orange-500 text-orange-500 hover:bg-orange-50 font-bold py-4 rounded-xl transition-all">
//                   Save Job
//                 </button>
//               </div>

//               <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-100">
//                 <h3 className="font-bold mb-4 text-gray-900">Share this Job</h3>
//                 <div className="space-y-2">
//                   <button className="w-full text-left px-4 py-3 border-2 border-gray-200 rounded-xl hover:border-orange-300 hover:bg-orange-50 transition-all font-medium text-gray-700">
//                     Share via Email
//                   </button>
//                   <button className="w-full text-left px-4 py-3 border-2 border-gray-200 rounded-xl hover:border-orange-300 hover:bg-orange-50 transition-all font-medium text-gray-700">
//                     Share on LinkedIn
//                   </button>
//                   <button className="w-full text-left px-4 py-3 border-2 border-gray-200 rounded-xl hover:border-orange-300 hover:bg-orange-50 transition-all font-medium text-gray-700">
//                     Copy Link
//                   </button>
//                 </div>
//               </div>

//               <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 border-2 border-orange-200">
//                 <h3 className="font-bold mb-4 text-gray-900">Have Questions?</h3>
//                 <p className="text-sm text-gray-700 mb-4 leading-relaxed">
//                   Our HR team is here to help with any questions about this position.
//                 </p>
//                 <div className="space-y-3 text-sm">
//                   <div className="flex items-center gap-3">
//                     <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
//                       <Mail className="w-4 h-4 text-white" />
//                     </div>
//                     <span className="font-medium text-gray-900">careers@kavach.com</span>
//                   </div>
//                   <div className="flex items-center gap-3">
//                     <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
//                       <Phone className="w-4 h-4 text-white" />
//                     </div>
//                     <span className="font-medium text-gray-900">+91 72288 88904</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Application Form Modal */}
//       {showApplicationForm && (
//         <div className="fixed inset-0 bg-transparent backdrop-blur-sm flex items-center justify-center z-50 p-4">
//           <div 
//             className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl no-scrollbar"
//             style={{ 
//               scrollbarWidth: 'none', /* Firefox */
//               msOverflowStyle: 'none' /* IE/Edge */
//             }}
//           >
//             {/* Custom style to hide scrollbar for Chrome/Safari */}
//             <style>
//               {`
//                 .no-scrollbar::-webkit-scrollbar {
//                   display: none;
//                 }
//               `}
//             </style>
            
//             <div className="sticky top-0 bg-gradient-to-r from-orange-500 to-red-500 text-white p-6 rounded-t-2xl z-10">
//               <div className="flex items-center justify-between">
//                 <h2 className="text-2xl font-bold">Apply for {job.title}</h2>
//                 <button
//                   onClick={() => setShowApplicationForm(false)}
//                   className="text-white hover:text-gray-200 text-2xl font-bold"
//                 >
//                   ✕
//                 </button>
//               </div>
//             </div>
            
//             <form onSubmit={handleSubmit} className="p-6 space-y-4">
//               <div>
//                 <label className="block text-sm font-bold text-gray-700 mb-2">
//                   Full Name *
//                 </label>
//                 <input
//                   type="text"
//                   name="fullName"
//                   value={formData.fullName}
//                   onChange={handleInputChange}
//                   required
//                   className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
//                   placeholder="Enter your full name"
//                 />
//               </div>

//               <div className="grid md:grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-sm font-bold text-gray-700 mb-2">
//                     Email *
//                   </label>
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleInputChange}
//                     required
//                     className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
//                     placeholder="your.email@example.com"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-bold text-gray-700 mb-2">
//                     Phone *
//                   </label>
//                   <input
//                     type="tel"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleInputChange}
//                     required
//                     className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
//                     placeholder="+91 XXXXX XXXXX"
//                   />
//                 </div>
//               </div>

//               <div className="grid md:grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-sm font-bold text-gray-700 mb-2">
//                     Years of Experience *
//                   </label>
//                   <input
//                     type="text"
//                     name="experience"
//                     value={formData.experience}
//                     onChange={handleInputChange}
//                     required
//                     className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
//                     placeholder="e.g., 5 years"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-bold text-gray-700 mb-2">
//                     Current Company
//                   </label>
//                   <input
//                     type="text"
//                     name="currentCompany"
//                     value={formData.currentCompany}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
//                     placeholder="Your current employer"
//                   />
//                 </div>
//               </div>

//               <div className="grid md:grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-sm font-bold text-gray-700 mb-2">
//                     Notice Period
//                   </label>
//                   <select
//                     name="noticePeriod"
//                     value={formData.noticePeriod}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
//                   >
//                     <option value="">Select notice period</option>
//                     <option value="immediate">Immediate</option>
//                     <option value="15days">15 Days</option>
//                     <option value="1month">1 Month</option>
//                     <option value="2months">2 Months</option>
//                     <option value="3months">3 Months</option>
//                   </select>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-bold text-gray-700 mb-2">
//                     Expected Salary (LPA)
//                   </label>
//                   <input
//                     type="text"
//                     name="expectedSalary"
//                     value={formData.expectedSalary}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
//                     placeholder="e.g., 15 LPA"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-sm font-bold text-gray-700 mb-2">
//                   Portfolio/LinkedIn URL
//                 </label>
//                 <input
//                   type="url"
//                   name="portfolio"
//                   value={formData.portfolio}
//                   onChange={handleInputChange}
//                   className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
//                   placeholder="https://linkedin.com/in/yourprofile"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-bold text-gray-700 mb-2">
//                   Resume/CV *
//                 </label>
//                 <input 
//                   type="file" 
//                   ref={fileInputRef}
//                   onChange={handleFileChange}
//                   className="hidden" 
//                   accept=".pdf,.doc,.docx"
//                 />
//                 <div 
//                   onDragEnter={handleDrag}
//                   onDragLeave={handleDrag}
//                   onDragOver={handleDrag}
//                   onDrop={handleDrop}
//                   onClick={() => fileInputRef.current.click()}
//                   className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors cursor-pointer ${
//                     dragActive ? 'border-orange-500 bg-orange-50' : 'border-gray-300 hover:border-orange-500'
//                   }`}
//                 >
//                   <Upload className="w-10 h-10 text-gray-400 mx-auto mb-3" />
//                   <p className="text-sm text-gray-600 font-medium">
//                     {formData.resume ? `File selected: ${formData.resume.name}` : 'Click to upload or drag and drop'}
//                   </p>
//                   <p className="text-xs text-gray-500 mt-1">PDF, DOC, DOCX (Max 5MB)</p>
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-sm font-bold text-gray-700 mb-2">
//                   Cover Letter
//                 </label>
//                 <textarea
//                   name="coverLetter"
//                   value={formData.coverLetter}
//                   onChange={handleInputChange}
//                   rows="4"
//                   className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
//                   placeholder="Tell us why you're a great fit for this role..."
//                 ></textarea>
//               </div>

//               <div className="flex gap-4 pt-4">
//                 <button
//                   type="submit"
//                   className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-4 rounded-xl transition-all transform hover:scale-105"
//                 >
//                   Submit Application
//                 </button>
//                 <button
//                   type="button"
//                   onClick={() => setShowApplicationForm(false)}
//                   className="px-8 border-2 border-gray-300 hover:bg-gray-50 font-bold py-4 rounded-xl transition-all"
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }

// export default JobDetails

import React, { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { 
  MapPin, Clock, Briefcase, DollarSign, Users, Calendar, 
  CheckCircle, ArrowLeft, Send, Upload, Mail, Phone, BookmarkCheck 
} from 'lucide-react'

function JobDetails() {
  const navigate = useNavigate()
  const [showApplicationForm, setShowApplicationForm] = useState(false)
  const [isSaved, setIsSaved] = useState(false) // State to handle the save toggle
  const [dragActive, setDragActive] = useState(false)
  const fileInputRef = useRef(null)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    experience: '',
    currentCompany: '',
    noticePeriod: '',
    expectedSalary: '',
    portfolio: '',
    coverLetter: '',
    resume: null
  })

  // Example job
  const job = {
    id: 1,
    title: 'Senior Full Stack Developer',
    department: 'IT Services',
    location: 'Surat, Gujarat, India',
    type: 'Full-time',
    experience: '5-7 years',
    salary: '₹12-18 LPA',
    postedDate: 'Posted 3 days ago',
    openings: 3,
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'TypeScript', 'AWS'],
    
    description: `We are looking for an experienced Full Stack Developer to join our dynamic IT Services team. 
    You will be responsible for developing and maintaining enterprise-level web applications, working with modern 
    technologies, and collaborating with cross-functional teams to deliver high-quality solutions.`,
    
    responsibilities: [
      'Design, develop, and maintain scalable web applications using React and Node.js',
      'Build RESTful APIs and microservices with Express and MongoDB',
      'Collaborate with UI/UX designers to implement responsive user interfaces',
      'Write clean, maintainable, and well-documented code',
      'Participate in code reviews and mentor junior developers',
      'Optimize application performance and ensure security best practices',
      'Work with DevOps team for CI/CD pipeline and cloud deployments',
      'Contribute to technical architecture decisions and documentation'
    ],
    
    requirements: [
      '5-7 years of professional experience in full stack development',
      'Strong proficiency in React.js, Node.js, and Express.js',
      'Experience with MongoDB and SQL databases',
      'Solid understanding of TypeScript and modern JavaScript (ES6+)',
      'Knowledge of cloud platforms (AWS, Azure, or GCP)',
      'Experience with Git, CI/CD pipelines, and Agile methodologies',
      'Strong problem-solving skills and attention to detail',
      'Excellent communication and teamwork abilities',
      'Bachelor\'s degree in Computer Science or related field'
    ],
    
    niceToHave: [
      'Experience with GraphQL and Apollo',
      'Knowledge of Docker and Kubernetes',
      'Familiarity with testing frameworks (Jest, Mocha, Cypress)',
      'Experience with state management libraries (Redux, MobX)',
      'Understanding of microservices architecture',
      'Previous experience in mentoring or leading a team'
    ],
    
    benefits: [
      'Competitive salary with performance bonuses',
      'Health insurance for employee and family',
      'Flexible working hours and work-from-home options',
      'Professional development and training opportunities',
      'Modern office facilities with latest equipment',
      'Team outings and company events',
      'Annual performance reviews with career growth path',
      'Paid time off and festival holidays'
    ]
  }

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  // Drag and Drop Handlers
  const handleDrag = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFormData({ ...formData, resume: e.dataTransfer.files[0] })
      console.log("File dropped:", e.dataTransfer.files[0].name)
    }
  }

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, resume: e.target.files[0] })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Application submitted successfully! We will contact you soon.')
    setShowApplicationForm(false)
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-[76px]">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <button 
            onClick={() => navigate('/career')}
            className="flex items-center gap-2 text-white hover:text-gray-200 mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Careers
          </button>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">{job.title}</h1>
          <p className="text-orange-100 text-lg">{job.department}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-100">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 font-medium">Location</div>
                    <div className="font-bold text-gray-900">{job.location}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 font-medium">Job Type</div>
                    <div className="font-bold text-gray-900">{job.type}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                    <Briefcase className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 font-medium">Experience</div>
                    <div className="font-bold text-gray-900">{job.experience}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                    <DollarSign className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 font-medium">Salary</div>
                    <div className="font-bold text-gray-900">{job.salary}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 font-medium">Openings</div>
                    <div className="font-bold text-gray-900">{job.openings} positions</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 font-medium">Posted</div>
                    <div className="font-bold text-gray-900">{job.postedDate}</div>
                  </div>
                </div>
              </div>

              <div className="border-t-2 border-gray-100 pt-6">
                <h3 className="font-bold text-gray-900 mb-3">Required Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {job.technologies.map(tech => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-gradient-to-r from-orange-100 to-red-100 text-orange-700 rounded-full text-sm font-bold border border-orange-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-100">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Job Description</h2>
              <p className="text-gray-700 leading-relaxed">{job.description}</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-100">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Key Responsibilities</h2>
              <ul className="space-y-3">
                {job.responsibilities.map((item, idx) => (
                  <li key={idx} className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-100">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Requirements</h2>
              <ul className="space-y-3">
                {job.requirements.map((item, idx) => (
                  <li key={idx} className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-100">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Nice to Have</h2>
              <ul className="space-y-3">
                {job.niceToHave.map((item, idx) => (
                  <li key={idx} className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-100">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Benefits & Perks</h2>
              <ul className="space-y-3">
                {job.benefits.map((item, idx) => (
                  <li key={idx} className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-100">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Ready to Apply?</h3>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  Submit your application and join our team of talented professionals.
                </p>
                <button
                  onClick={() => setShowApplicationForm(true)}
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-4 rounded-xl transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg"
                >
                  <Send className="w-5 h-5" />
                  Apply Now
                </button>
                
                {/* Updated Save Button Logic */}
                <button 
                  onClick={() => setIsSaved(!isSaved)}
                  className={`w-full mt-3 font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 border-2 ${
                    isSaved 
                    ? 'bg-green-50 border-green-500 text-green-600' 
                    : 'border-orange-500 text-orange-500 hover:bg-orange-50'
                  }`}
                >
                  {isSaved ? (
                    <>
                      <BookmarkCheck className="w-5 h-5" />
                      Saved
                    </>
                  ) : 'Save Job'}
                </button>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-100">
                <h3 className="font-bold mb-4 text-gray-900">Share this Job</h3>
                <div className="space-y-2">
                  <button className="w-full text-left px-4 py-3 border-2 border-gray-200 rounded-xl hover:border-orange-300 hover:bg-orange-50 transition-all font-medium text-gray-700">
                    Share via Email
                  </button>
                  <button className="w-full text-left px-4 py-3 border-2 border-gray-200 rounded-xl hover:border-orange-300 hover:bg-orange-50 transition-all font-medium text-gray-700">
                    Share on LinkedIn
                  </button>
                  <button className="w-full text-left px-4 py-3 border-2 border-gray-200 rounded-xl hover:border-orange-300 hover:bg-orange-50 transition-all font-medium text-gray-700">
                    Copy Link
                  </button>
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 border-2 border-orange-200">
                <h3 className="font-bold mb-4 text-gray-900">Have Questions?</h3>
                <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                  Our HR team is here to help with any questions about this position.
                </p>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                      <Mail className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-medium text-gray-900">careers@kavach.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                      <Phone className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-medium text-gray-900">+91 72288 88904</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Application Form Modal */}
      {showApplicationForm && (
        <div className="fixed inset-0 bg-transparent backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div 
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl no-scrollbar"
            style={{ 
              scrollbarWidth: 'none', /* Firefox */
              msOverflowStyle: 'none' /* IE/Edge */
            }}
          >
            {/* Custom style to hide scrollbar for Chrome/Safari */}
            <style>
              {`
                .no-scrollbar::-webkit-scrollbar {
                  display: none;
                }
              `}
            </style>
            
            <div className="sticky top-0 bg-gradient-to-r from-orange-500 to-red-500 text-white p-6 rounded-t-2xl z-10">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">Apply for {job.title}</h2>
                <button
                  onClick={() => setShowApplicationForm(false)}
                  className="text-white hover:text-gray-200 text-2xl font-bold"
                >
                  ✕
                </button>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Years of Experience *
                  </label>
                  <input
                    type="text"
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="e.g., 5 years"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Current Company
                  </label>
                  <input
                    type="text"
                    name="currentCompany"
                    value={formData.currentCompany}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Your current employer"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Notice Period
                  </label>
                  <select
                    name="noticePeriod"
                    value={formData.noticePeriod}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                    <option value="">Select notice period</option>
                    <option value="immediate">Immediate</option>
                    <option value="15days">15 Days</option>
                    <option value="1month">1 Month</option>
                    <option value="2months">2 Months</option>
                    <option value="3months">3 Months</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Expected Salary (LPA)
                  </label>
                  <input
                    type="text"
                    name="expectedSalary"
                    value={formData.expectedSalary}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="e.g., 15 LPA"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Portfolio/LinkedIn URL
                </label>
                <input
                  type="url"
                  name="portfolio"
                  value={formData.portfolio}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="https://linkedin.com/in/yourprofile"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Resume/CV *
                </label>
                <input 
                  type="file" 
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  className="hidden" 
                  accept=".pdf,.doc,.docx"
                />
                <div 
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                  onClick={() => fileInputRef.current.click()}
                  className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors cursor-pointer ${
                    dragActive ? 'border-orange-500 bg-orange-50' : 'border-gray-300 hover:border-orange-500'
                  }`}
                >
                  <Upload className="w-10 h-10 text-gray-400 mx-auto mb-3" />
                  <p className="text-sm text-gray-600 font-medium">
                    {formData.resume ? `File selected: ${formData.resume.name}` : 'Click to upload or drag and drop'}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">PDF, DOC, DOCX (Max 5MB)</p>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Cover Letter
                </label>
                <textarea
                  name="coverLetter"
                  value={formData.coverLetter}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
                  placeholder="Tell us why you're a great fit for this role..."
                ></textarea>
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-4 rounded-xl transition-all transform hover:scale-105"
                >
                  Submit Application
                </button>
                <button
                  type="button"
                  onClick={() => setShowApplicationForm(false)}
                  className="px-8 border-2 border-gray-300 hover:bg-gray-50 font-bold py-4 rounded-xl transition-all"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default JobDetails