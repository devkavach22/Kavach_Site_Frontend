import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Briefcase, MapPin, Clock, TrendingUp, Code, Users, Award, Brain, Palette } from 'lucide-react'
import Select from 'react-select'

function CareerPage() {
  const navigate = useNavigate()
  const [selectedTech, setSelectedTech] = useState({ value: 'All', label: 'All' })
  const [selectedType, setSelectedType] = useState({ value: 'All', label: 'All Types' })

  const techStack = [
    { name: 'Odoo', category: 'ERP Solutions', projects: '40+', experts: '15+', gradient: 'from-purple-500 to-purple-700' },
    { name: 'iOS', category: 'Mobile', projects: '30+', experts: '10+', gradient: 'from-gray-700 to-gray-900' },
    { name: 'React', category: 'Frontend', projects: '50+', experts: '20+', gradient: 'from-blue-400 to-cyan-500' },
    { name: 'Flutter', category: 'Mobile', projects: '40+', experts: '15+', gradient: 'from-blue-500 to-blue-700' },
    { name: 'Laravel', category: 'Backend', projects: '60+', experts: '18+', gradient: 'from-red-500 to-red-700' },
    { name: 'Node.js', category: 'Backend', projects: '70+', experts: '25+', gradient: 'from-green-600 to-green-800' },
    { name: 'Shopify', category: 'E-commerce', projects: '55+', experts: '12+', gradient: 'from-green-500 to-green-700' },
    { name: 'MongoDB', category: 'Database', projects: '60+', experts: '20+', gradient: 'from-green-600 to-green-900' },
    { name: 'Django', category: 'Backend', projects: '35+', experts: '10+', gradient: 'from-green-700 to-green-900' },
    { name: '.NET', category: 'Backend', projects: '45+', experts: '15+', gradient: 'from-purple-600 to-blue-700' },
    { name: 'Magento', category: 'E-commerce', projects: '30+', experts: '8+', gradient: 'from-orange-500 to-orange-700' },
    { name: 'SQL', category: 'Database', projects: '150+', experts: '30+', gradient: 'from-blue-600 to-blue-800' },
    { name: 'AI/ML', category: 'Artificial Intelligence', projects: '25+', experts: '12+', gradient: 'from-indigo-500 to-purple-700' },
    { name: 'CSS', category: 'Frontend', projects: '100+', experts: '30+', gradient: 'from-pink-500 to-rose-600' }
  ]

  const technologies = [
    'All', 'Odoo', 'iOS', 'jQuery', 'React', 'PHP', 'Shopify',
    'Laravel', 'Django', 'Magento', 'Flutter', 'Cordova',
    '.NET', 'Node.js', 'Express', 'MongoDB', 'SQL', 'Mobile App', 'AI/ML', 'CSS'
  ]

  const jobs = [
    { id: 1, title: 'Senior Full Stack Developer', department: 'IT Services', location: 'Surat, Gujarat', type: 'Full-time', experience: '5-7 years', technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'CSS'], description: 'Lead development of enterprise web applications using modern tech stack.', openings: 3 },
    { id: 2, title: 'Odoo Developer', department: 'ERP Solutions', location: 'Surat, Gujarat', type: 'Full-time', experience: '3-5 years', technologies: ['Odoo', 'Python', 'SQL'], description: 'Develop and customize Odoo ERP modules for diverse business needs.', openings: 2 },
    { id: 3, title: 'iOS Developer', department: 'Mobile App Development', location: 'Surat, Gujarat', type: 'Full-time', experience: '2-4 years', technologies: ['iOS', 'Swift', 'Mobile App'], description: 'Build innovative iOS applications with clean architecture.', openings: 2 },
    { id: 4, title: 'Flutter Developer', department: 'Mobile App Development', location: 'Surat, Gujarat', type: 'Full-time', experience: '2-5 years', technologies: ['Flutter', 'Mobile App', 'Dart'], description: 'Create cross-platform mobile solutions using Flutter framework.', openings: 3 },
    { id: 5, title: 'Laravel Backend Developer', department: 'Web Development', location: 'Surat, Gujarat', type: 'Full-time', experience: '3-6 years', technologies: ['Laravel', 'PHP', 'SQL'], description: 'Design and develop robust backend systems using Laravel.', openings: 2 },
    { id: 6, title: 'Shopify Developer', department: 'E-commerce Solutions', location: 'Surat, Gujarat', type: 'Full-time', experience: '2-4 years', technologies: ['Shopify', 'jQuery', 'React', 'CSS'], description: 'Customize Shopify stores and develop custom e-commerce solutions.', openings: 2 },
    { id: 7, title: 'Magento Developer', department: 'E-commerce Solutions', location: 'Surat, Gujarat', type: 'Full-time', experience: '4-6 years', technologies: ['Magento', 'PHP', 'MySQL'], description: 'Build and maintain enterprise e-commerce platforms on Magento.', openings: 1 },
    { id: 8, title: '.NET Developer', department: 'Enterprise Solutions', location: 'Surat, Gujarat', type: 'Full-time', experience: '3-5 years', technologies: ['.NET', 'C#', 'SQL'], description: 'Develop enterprise-grade applications using .NET framework.', openings: 2 },
    { id: 9, title: 'Django Python Developer', department: 'Web Development', location: 'Surat, Gujarat', type: 'Full-time', experience: '2-4 years', technologies: ['Django', 'Python', 'SQL'], description: 'Build scalable web applications using Django framework.', openings: 2 },
    { id: 10, title: 'React Frontend Developer', department: 'Web Development', location: 'Surat, Gujarat', type: 'Full-time', experience: '2-5 years', technologies: ['React', 'jQuery', 'JavaScript', 'CSS'], description: 'Create responsive and dynamic user interfaces using React.', openings: 4 },
    { id: 11, title: 'DevOps Engineer', department: 'ICT Infrastructure', location: 'Surat, Gujarat', type: 'Full-time', experience: '4-7 years', technologies: ['Node.js', 'MongoDB', 'SQL'], description: 'Manage cloud infrastructure and deployment pipelines.', openings: 1 },
    { id: 12, title: 'Mobile App Developer (Cordova)', department: 'Mobile App Development', location: 'Surat, Gujarat', type: 'Full-time', experience: '2-4 years', technologies: ['Cordova', 'JavaScript', 'Mobile App', 'CSS'], description: 'Develop hybrid mobile applications using Cordova framework.', openings: 1 },
    { id: 13, title: 'AI/ML Engineer', department: 'Artificial Intelligence', location: 'Surat, Gujarat', type: 'Full-time', experience: '3-6 years', technologies: ['AI/ML', 'Python', 'TensorFlow', 'PyTorch'], description: 'Build intelligent systems using machine learning and AI technologies.', openings: 2 },
    { id: 14, title: 'UI/UX Designer', department: 'Design', location: 'Surat, Gujarat', type: 'Full-time', experience: '2-5 years', technologies: ['CSS', 'HTML', 'Figma', 'React'], description: 'Design beautiful and intuitive user interfaces with modern CSS.', openings: 2 }
  ]

  const filteredJobs = jobs.filter(job => {
    const techMatch = selectedTech.value === 'All' || job.technologies.some(tech =>
      tech.toLowerCase().includes(selectedTech.value.toLowerCase())
    )
    const typeMatch = selectedType.value === 'All' || job.type === selectedType.value
    return techMatch && typeMatch
  })

  const handleTechCardClick = (techName = null) => {
    if (techName) navigate('/career/technologies', { state: { scrollToTech: techName } })
    else navigate('/career/technologies')
  }

  const handleJobClick = (jobId) => navigate(`/career/job/${jobId}`)

  const getTechLogo = (name) => {
    const logos = {
      'React': <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor"><path d="M12 10.11c1.03 0 1.87.84 1.87 1.89 0 1-.84 1.85-1.87 1.85S10.13 13 10.13 12c0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9c-.6 0-1.17 0-1.71.03-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03.6 0 1.17 0 1.71-.03.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68s-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.38 1.95-1.46-.84-1.62-3.05-1-5.63-2.54-.75-4.37-1.99-4.37-3.68s1.83-2.93 4.37-3.68c-.62-2.58-.46-4.79 1-5.63 1.47-.84 3.46.12 5.38 1.95 1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26 2.1-.63 3.28-1.53 3.28-2.26s-1.18-1.63-3.28-2.26c-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26-2.1.63-3.28 1.53-3.28 2.26s1.18 1.63 3.28 2.26c.25-.76.55-1.51.89-2.26m9 2.26l-.3.51c.31-.05.61-.10.88-.16-.07-.28-.18-.57-.29-.86l-.29.51m-2.89 4.04c1.59 1.5 2.97 2.08 3.59 1.7.64-.35.83-1.82.32-3.96-.77.16-1.58.28-2.4.36-.48.67-.99 1.31-1.51 1.9M8.08 9.74l.3-.51c-.31.05-.61.1-.88.16.07.28.18.57.29.86l.29-.51m2.89-4.04C9.38 4.2 8 3.62 7.37 4c-.63.35-.82 1.82-.31 3.96a22.7 22.7 0 0 1 2.4-.36c.48-.67.99-1.31 1.51-1.9z" /></svg>,
      'Node.js': <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor"><path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z" /></svg>,
      'AI/ML': <Brain className="w-full h-full" />,
      'CSS': <Palette className="w-full h-full" />
    }
    return logos[name] || <Code className="w-full h-full" />
  }

  const selectStyles = {
    control: (base, state) => ({
      ...base,
      background: 'rgba(255,255,255,0.12)',
      border: state.isFocused ? '1.5px solid #fb923c' : '1.5px solid rgba(255,255,255,0.25)',
      borderRadius: '12px',
      padding: '2px 4px',
      boxShadow: 'none',
      cursor: 'pointer',
      '&:hover': { border: '1.5px solid rgba(255,255,255,0.5)' },
    }),
    singleValue: (base) => ({ ...base, color: 'white', fontWeight: '600', fontSize: '15px' }),
    placeholder: (base) => ({ ...base, color: 'rgba(255,255,255,0.45)' }),
    input: (base) => ({ ...base, color: 'white' }),
    dropdownIndicator: (base) => ({ ...base, color: 'rgba(255,255,255,0.6)', '&:hover': { color: 'white' } }),
    clearIndicator: (base) => ({ ...base, color: 'rgba(255,255,255,0.6)' }),
    indicatorSeparator: () => ({ display: 'none' }),
    menu: (base) => ({
      ...base,
      background: '#1a0505',
      borderRadius: '14px',
      border: '1px solid rgba(255,100,50,0.2)',
      boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
      zIndex: 9999,
      marginTop: '6px',
    }),
    menuList: (base) => ({
      ...base,
      padding: '6px',
      maxHeight: '260px',
      '&::-webkit-scrollbar': { width: '6px' },
      '&::-webkit-scrollbar-track': { background: 'transparent' },
      '&::-webkit-scrollbar-thumb': { background: 'rgba(255, 100, 50, 0.3)', borderRadius: '10px' },
      '&::-webkit-scrollbar-thumb:hover': { background: 'rgba(255, 100, 50, 0.5)' },
      scrollbarWidth: 'thin',
      scrollbarColor: 'rgba(255, 100, 50, 0.3) transparent',
    }),
    option: (base, state) => ({
      ...base,
      background: state.isSelected ? 'linear-gradient(135deg,#ea580c,#dc2626)' : state.isFocused ? 'rgba(234,88,12,0.18)' : 'transparent',
      backgroundColor: state.isSelected ? '#ea580c' : state.isFocused ? 'rgba(234,88,12,0.18)' : 'transparent',
      color: state.isSelected ? 'white' : 'rgba(255,255,255,0.85)',
      borderRadius: '8px',
      fontWeight: state.isSelected ? '700' : '500',
      fontSize: '14px',
      cursor: 'pointer',
      margin: '1px 0',
      '&:active': { backgroundColor: '#ea580c' },
    }),
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-[76px]">

      {/* ── HERO ── */}
      <div className="relative bg-gradient-to-br from-orange-600 via-red-600 to-orange-300 text-white pt-12 pb-20 overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/15 backdrop-blur-sm border border-white/30 rounded-full mb-5 shadow-md opacity-0 animate-[slideDown_0.6s_ease-out_0.1s_forwards]">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
            <span className="text-white text-xs font-semibold tracking-widest uppercase">Join Our Team</span>
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            <span className="block text-white opacity-0 animate-[slideUp_0.7s_ease-out_0.2s_forwards]">Join Kavach</span>
            <span className="block bg-gradient-to-r from-yellow-200 via-orange-200 to-yellow-100 bg-clip-text text-transparent opacity-0 animate-[slideUp_0.7s_ease-out_0.4s_forwards]">Global</span>
          </h1>

          <p className="text-white/85 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-8 opacity-0 animate-[fadeIn_0.8s_ease-out_0.6s_forwards]">
            Build your career with a leading conglomerate providing comprehensive, integrated solutions across industries worldwide.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-4 opacity-0 animate-[fadeIn_0.8s_ease-out_0.8s_forwards]">
            {[{ value: `${jobs.length}+`, label: 'Open Positions' }, { value: '20+', label: 'Technologies' }, { value: '10+', label: 'Departments' }].map((s, i) => (
              <div key={i} className="flex flex-col items-center px-6 py-3 bg-white/15 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/25 hover:-translate-y-1 transition-all duration-300">
                <span className="text-2xl font-extrabold text-white">{s.value}</span>
                <span className="text-white/70 text-xs font-medium mt-0.5">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
          <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-16 md:h-20">
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="white" />
          </svg>
        </div>
      </div>

      {/* ── TECH STACK ── */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Technology Stack</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">Work with cutting-edge technologies and build amazing products using modern frameworks</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4 mb-12">
          {techStack.map((tech, idx) => (
            <div key={idx} onClick={() => handleTechCardClick(tech.name)}
              className="group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border-2 border-gray-100 hover:border-orange-400 cursor-pointer transform hover:-translate-y-1 p-4">
              <div className={`w-12 h-12 mx-auto mb-3 bg-gradient-to-br ${tech.gradient} rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                {getTechLogo(tech.name)}
              </div>
              <h3 className="text-center font-bold text-gray-900 text-sm mb-1 group-hover:text-orange-600 transition-colors">{tech.name}</h3>
              <p className="text-center text-xs text-gray-500 mb-3">{tech.category}</p>
              <div className="flex justify-between text-xs border-t pt-2 border-gray-100">
                <div className="text-center"><div className="font-bold text-gray-800">{tech.projects}</div><div className="text-gray-500">Projects</div></div>
                <div className="w-px bg-gray-200"></div>
                <div className="text-center"><div className="font-bold text-gray-800">{tech.experts}</div><div className="text-gray-500">Experts</div></div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <button onClick={() => handleTechCardClick()}
            className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-bold px-10 py-4 rounded-full transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
            View All Technologies
          </button>
        </div>
      </div>

      {/* ── WHY JOIN US ── */}
      <div className="max-w-7xl mx-auto px-6 py-16 bg-gray-50 rounded-3xl">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Why Join Kavach?</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { icon: <TrendingUp className="w-10 h-10 text-white" />, title: 'Career Growth', desc: 'Clear path for professional development and leadership roles' },
            { icon: <Code className="w-10 h-10 text-white" />, title: 'Latest Tech Stack', desc: 'Work with cutting-edge technologies and frameworks' },
            { icon: <Users className="w-10 h-10 text-white" />, title: 'Great Team', desc: 'Collaborate with talented professionals across industries' },
            { icon: <Award className="w-10 h-10 text-white" />, title: 'Benefits & Perks', desc: 'Competitive salary, health benefits, and work-life balance' },
          ].map((item, idx) => (
            <div key={idx} className="text-center p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-orange-300 group">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-600 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">{item.icon}</div>
              <h3 className="font-bold text-xl mb-3">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── FILTERS + JOB LISTINGS ── */}
      <div className="max-w-7xl mx-auto px-6 py-8 mt-16">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Open Positions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">Find your perfect role and join our team of talented professionals</p>
        </div>

        {/* Filter Box */}
        <div
          className="relative rounded-2xl shadow-xl p-6 mb-8"
          style={{
            background: 'linear-gradient(135deg, #7f1d1d, #991b1b, #b91c1c, #c2410c)',
            overflow: 'visible'
          }}
        >
          <div className="absolute top-0 right-0 w-48 h-48 bg-orange-500 rounded-full blur-3xl opacity-10 pointer-events-none" style={{ zIndex: 0 }}></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-red-900 rounded-full blur-3xl opacity-20 pointer-events-none" style={{ zIndex: 0 }}></div>

          <div className="relative flex flex-col md:flex-row gap-6" style={{ zIndex: 10 }}>
            <div className="flex-1">
              <label className="block text-sm font-bold text-white/80 mb-2">Filter by Technology</label>
              <Select
                options={technologies.map(t => ({ value: t, label: t }))}
                value={selectedTech}
                onChange={(opt) => setSelectedTech(opt)}
                isSearchable
                placeholder="Search technology..."
                styles={selectStyles}
                menuPortalTarget={document.body}
                menuPosition="fixed"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-bold text-white/80 mb-2">Job Type</label>
              <Select
                options={[
                  { value: 'All', label: 'All Types' },
                  { value: 'Full-time', label: 'Full-time' },
                  { value: 'Part-time', label: 'Part-time' },
                  { value: 'Contract', label: 'Contract' },
                ]}
                value={selectedType}
                onChange={(opt) => setSelectedType(opt)}
                isSearchable={false}
                styles={selectStyles}
                menuPortalTarget={document.body}
                menuPosition="fixed"
              />
            </div>
          </div>
        </div>

        {/* Job Cards */}
        <div className="space-y-6">
          {filteredJobs.map(job => (
            <div key={job.id} onClick={() => handleJobClick(job.id)}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border-2 border-gray-100 hover:border-orange-300 cursor-pointer group">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                <div className="flex-1">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-orange-600 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Briefcase className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">{job.title}</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">{job.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                        <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-orange-500" /><span className="font-medium">{job.location}</span></div>
                        <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-orange-500" /><span className="font-medium">{job.type}</span></div>
                        <div className="flex items-center gap-2"><Briefcase className="w-4 h-4 text-orange-500" /><span className="font-medium">{job.experience}</span></div>
                        <div className="flex items-center gap-2 font-bold text-orange-600">{job.openings} openings</div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {job.technologies.map(tech => (
                          <span key={tech} className="px-4 py-1.5 bg-gradient-to-r from-orange-100 to-red-100 text-orange-700 rounded-full text-sm font-semibold border border-orange-200">{tech}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 md:mt-0 md:ml-6 flex flex-col gap-3">
                  <button className="w-full md:w-auto bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-bold px-8 py-3 rounded-xl transition-all transform hover:scale-105 shadow-lg">Apply Now</button>
                  <button className="w-full md:w-auto border-2 border-orange-500 text-orange-500 hover:bg-orange-50 font-bold px-8 py-3 rounded-xl transition-all">View Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredJobs.length === 0 && (
          <div className="text-center py-16 bg-gray-50 rounded-2xl">
            <Briefcase className="w-20 h-20 mx-auto text-gray-400 mb-4" />
            <h3 className="text-2xl font-bold text-gray-600 mb-2">No positions found</h3>
            <p className="text-gray-500">Try adjusting your filters to see more opportunities</p>
          </div>
        )}
      </div>

      {/* ── DON'T SEE THE RIGHT ROLE ── */}
      <div className="relative bg-gradient-to-br from-orange-900 via-red-800 to-orange-800 text-white py-20 mt-16 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 overflow-hidden leading-none rotate-180">
          <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-16 md:h-20">
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="white" />
          </svg>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl opacity-10"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-red-500 rounded-full blur-3xl opacity-10"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Don't See the Right Role?</h2>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <button onClick={() => navigate("/contact")}
            className="inline-block px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-orange-500/30 hover:scale-105 transition-all duration-300">
            Submit Your Resume
          </button>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
          @keyframes slideUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
          @keyframes slideDown { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); } }
        `
      }} />
    </div>
  )
}

export default CareerPage