import React, { useRef, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Code2, Database, Smartphone, ShoppingCart, Cloud, Server, Brain, Palette, ArrowLeft } from 'lucide-react'

function LanguageDetails() {
  const navigate = useNavigate()
  const location = useLocation()

  const techRefs = {
    'React': useRef(null),
    'jQuery': useRef(null),
    'iOS': useRef(null),
    'Flutter': useRef(null),
    'Cordova': useRef(null),
    'Mobile App': useRef(null),
    'PHP': useRef(null),
    'Laravel': useRef(null),
    'Django': useRef(null),
    'Node.js': useRef(null),
    'Express': useRef(null),
    '.NET': useRef(null),
    'Shopify': useRef(null),
    'Magento': useRef(null),
    'MongoDB': useRef(null),
    'SQL': useRef(null),
    'Odoo': useRef(null),
    'AI/ML': useRef(null),
    'CSS': useRef(null)
  }

  useEffect(() => {
    if (location.state?.scrollToTech) {
      const techName = location.state.scrollToTech
      const ref = techRefs[techName]

      if (ref && ref.current) {
        setTimeout(() => {
          ref.current.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
          })
          ref.current.style.transform = 'scale(1.02)'
          ref.current.style.transition = 'transform 0.3s ease-in-out'
          setTimeout(() => {
            ref.current.style.transform = 'scale(1)'
          }, 600)
        }, 100)
      }
    }
  }, [location.state])

  const techCategories = [
    {
      name: 'Frontend Development',
      icon: <Code2 className="w-8 h-8" />,
      color: 'from-blue-500 to-blue-600',
      technologies: [
        { name: 'React', level: 'Expert', projects: '50+', description: 'Modern UI development with hooks and context', fullDescription: 'React is a powerful JavaScript library for building user interfaces. We use React with hooks, context API, and modern patterns to create fast, responsive, and scalable web applications. Our team has extensive experience with React Router, Redux, and other React ecosystem tools.' },
        { name: 'jQuery', level: 'Expert', projects: '100+', description: 'DOM manipulation and AJAX operations', fullDescription: 'jQuery is a fast, small, and feature-rich JavaScript library. We leverage jQuery for DOM manipulation, event handling, animation, and AJAX operations. Our expertise includes creating custom jQuery plugins and integrating jQuery with modern frameworks.' },
        { name: 'CSS', level: 'Expert', projects: '100+', description: 'Advanced styling & responsive design', fullDescription: 'CSS is the cornerstone of modern web design. We master CSS Grid, Flexbox, animations, transitions, and responsive design principles. Our expertise includes CSS preprocessors like SASS/SCSS, CSS-in-JS solutions, and modern frameworks like Tailwind CSS. We create beautiful, accessible, and performant interfaces that work seamlessly across all devices.' },
      ]
    },
    {
      name: 'Mobile Development',
      icon: <Smartphone className="w-8 h-8" />,
      color: 'from-green-500 to-green-600',
      technologies: [
        { name: 'iOS', level: 'Expert', projects: '30+', description: 'Native iOS app development with Swift', fullDescription: 'We build native iOS applications using Swift and the latest iOS frameworks. Our iOS development includes UIKit, SwiftUI, Core Data, and integration with Apple services. We follow Apple\'s Human Interface Guidelines to create intuitive and beautiful apps.' },
        { name: 'Flutter', level: 'Expert', projects: '40+', description: 'Cross-platform mobile applications', fullDescription: 'Flutter allows us to build beautiful, natively compiled applications for mobile, web, and desktop from a single codebase. We use Dart and Flutter\'s rich widget library to create stunning, high-performance apps with smooth animations and native feel.' },
        { name: 'Cordova', level: 'Advanced', projects: '25+', description: 'Hybrid mobile app development', fullDescription: 'Apache Cordova enables us to build mobile applications using HTML, CSS, and JavaScript. We create hybrid apps that work across iOS and Android platforms, leveraging native device features through Cordova plugins.' },
        { name: 'Mobile App', level: 'Expert', projects: '80+', description: 'Full-stack mobile solutions', fullDescription: 'Our comprehensive mobile app development covers the entire lifecycle - from concept and design to development, testing, and deployment. We specialize in both native and cross-platform solutions with backend integration.' },
      ]
    },
    {
      name: 'Backend Development',
      icon: <Server className="w-8 h-8" />,
      color: 'from-purple-500 to-purple-600',
      technologies: [
        { name: 'PHP', level: 'Expert', projects: '120+', description: 'Server-side scripting and development', fullDescription: 'PHP is our go-to language for server-side web development. We build robust, scalable backends with PHP, utilizing modern PHP features, PSR standards, and best practices for security and performance.' },
        { name: 'Laravel', level: 'Expert', projects: '60+', description: 'Modern PHP framework for web artisans', fullDescription: 'Laravel is our preferred PHP framework for building elegant web applications. We leverage Laravel\'s expressive syntax, built-in tools like Eloquent ORM, Blade templating, and Queue system to develop feature-rich applications quickly.' },
        { name: 'Django', level: 'Advanced', projects: '35+', description: 'Python web framework for perfectionists', fullDescription: 'Django is a high-level Python web framework that encourages rapid development. We use Django\'s ORM, admin interface, and security features to build secure and maintainable web applications with clean, pragmatic design.' },
        { name: 'Node.js', level: 'Expert', projects: '70+', description: 'JavaScript runtime for server-side', fullDescription: 'Node.js enables us to use JavaScript on the server side. We build fast, scalable network applications using Node.js\'s event-driven architecture, npm ecosystem, and frameworks like Express and NestJS.' },
        { name: 'Express', level: 'Expert', projects: '65+', description: 'Fast, minimalist web framework', fullDescription: 'Express is our preferred Node.js web application framework. We use Express to build RESTful APIs, web applications, and microservices with its flexible routing, middleware system, and extensive ecosystem of plugins.' },
        { name: '.NET', level: 'Advanced', projects: '45+', description: 'Enterprise application development', fullDescription: '.NET is Microsoft\'s framework for building enterprise applications. We develop scalable, high-performance applications using .NET Core, ASP.NET, Entity Framework, and Azure cloud services.' },
      ]
    },
    {
      name: 'E-commerce Platforms',
      icon: <ShoppingCart className="w-8 h-8" />,
      color: 'from-orange-500 to-orange-600',
      technologies: [
        { name: 'Shopify', level: 'Expert', projects: '55+', description: 'Custom Shopify store development', fullDescription: 'We specialize in creating custom Shopify stores that drive sales and growth. Our expertise includes theme customization, app development using Shopify API, payment gateway integration, and inventory management systems.' },
        { name: 'Magento', level: 'Advanced', projects: '30+', description: 'Enterprise e-commerce solutions', fullDescription: 'Magento powers our enterprise e-commerce solutions with its flexible architecture and powerful features. We build custom Magento stores with advanced functionality, third-party integrations, and multi-store capabilities.' },
      ]
    },
    {
      name: 'Database Management',
      icon: <Database className="w-8 h-8" />,
      color: 'from-red-500 to-red-600',
      technologies: [
        { name: 'MongoDB', level: 'Expert', projects: '60+', description: 'NoSQL database for modern apps', fullDescription: 'MongoDB is our preferred NoSQL database for flexible, scalable data storage. We design document-based schemas, implement aggregation pipelines, and optimize performance for high-throughput applications.' },
        { name: 'SQL', level: 'Expert', projects: '150+', description: 'Relational database management', fullDescription: 'We have extensive experience with SQL databases including MySQL, PostgreSQL, and SQL Server. Our expertise covers database design, query optimization, stored procedures, and ensuring data integrity and security.' },
      ]
    },
    {
      // ✅ MERGED: ERP + AI/ML into one card
      name: 'ERP, Business & AI Solutions',
      icon: <Cloud className="w-8 h-8" />,
      color: 'from-indigo-500 to-purple-600',
      technologies: [
        { name: 'Odoo', level: 'Expert', projects: '40+', description: 'Complete ERP business management suite', fullDescription: 'Odoo is our comprehensive ERP platform of choice. We customize Odoo modules, develop custom apps, and integrate Odoo with third-party systems to streamline business operations across sales, inventory, accounting, and HR.' },
        { name: 'AI/ML', level: 'Expert', projects: '25+', description: 'Intelligent systems & predictive analytics', fullDescription: 'We build cutting-edge AI and Machine Learning solutions using TensorFlow, PyTorch, scikit-learn, and other leading frameworks. Our expertise includes natural language processing (NLP), computer vision, predictive analytics, recommendation systems, and deep learning models. We develop custom AI solutions for automation, data analysis, pattern recognition, and decision support systems that transform business operations.' },
      ]
    },
  ]

  const getLevelBadgeColor = (level) => {
    const levels = {
      Expert: 'bg-green-100 text-green-700 border-green-300',
      Advanced: 'bg-blue-100 text-blue-700 border-blue-300',
      Intermediate: 'bg-yellow-100 text-yellow-700 border-yellow-300'
    }
    return levels[level] || levels.Intermediate
  }

  const getTechLogo = (name) => {
    const logos = {
      'Odoo': (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
          <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
        </svg>
      ),
      'iOS': (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
        </svg>
      ),
      'React': (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
          <path d="M12 10.11c1.03 0 1.87.84 1.87 1.89 0 1-.84 1.85-1.87 1.85S10.13 13 10.13 12c0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9c-.6 0-1.17 0-1.71.03-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03.6 0 1.17 0 1.71-.03.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68s-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.38 1.95-1.46-.84-1.62-3.05-1-5.63-2.54-.75-4.37-1.99-4.37-3.68s1.83-2.93 4.37-3.68c-.62-2.58-.46-4.79 1-5.63 1.47-.84 3.46.12 5.38 1.95 1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26 2.1-.63 3.28-1.53 3.28-2.26s-1.18-1.63-3.28-2.26c-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26-2.1.63-3.28 1.53-3.28 2.26s1.18 1.63 3.28 2.26c.25-.76.55-1.51.89-2.26m9 2.26l-.3.51c.31-.05.61-.10.88-.16-.07-.28-.18-.57-.29-.86l-.29.51m-2.89 4.04c1.59 1.5 2.97 2.08 3.59 1.7.64-.35.83-1.82.32-3.96-.77.16-1.58.28-2.4.36-.48.67-.99 1.31-1.51 1.9M8.08 9.74l.3-.51c-.31.05-.61.1-.88.16.07.28.18.57.29.86l.29-.51m2.89-4.04C9.38 4.2 8 3.62 7.37 4c-.63.35-.82 1.82-.31 3.96a22.7 22.7 0 0 1 2.4-.36c.48-.67.99-1.31 1.51-1.9z" />
        </svg>
      ),
      'Flutter': (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
          <path d="M14.314 0L2.3 12 6 15.7 21.684.013h-7.357m.014 11.072L7.857 17.53l6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.37z" />
        </svg>
      ),
      'Laravel': (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
          <path d="M23.642 5.43a.364.364 0 0 1 .014.1v5.149c0 .135-.073.26-.189.326l-4.323 2.49v4.934a.378.378 0 0 1-.188.326L9.93 23.949a.316.316 0 0 1-.066.027c-.008.002-.016.008-.024.01a.348.348 0 0 1-.192 0c-.011-.002-.02-.008-.03-.012-.02-.008-.042-.014-.062-.025L.533 18.755a.376.376 0 0 1-.189-.326V2.974c0-.033.005-.066.014-.098.003-.012.01-.02.014-.032a.369.369 0 0 1 .023-.058c.004-.013.015-.022.023-.033l.033-.045c.012-.01.025-.018.037-.027.014-.012.027-.024.041-.034H.53L5.043.05a.375.375 0 0 1 .375 0L9.93 2.647h.002c.015.01.027.021.04.033l.038.027c.013.014.02.03.033.045.008.011.02.021.025.033.01.02.017.038.024.058.003.011.01.021.013.032.01.031.014.064.014.098v9.652l3.76-2.164V5.527c0-.033.004-.066.013-.098.003-.011.01-.021.013-.032a.487.487 0 0 1 .024-.059c.007-.012.018-.02.025-.033.012-.015.021-.03.033-.043.012-.012.025-.02.037-.028.014-.01.026-.023.041-.032h.001l4.513-2.598a.375.375 0 0 1 .375 0l4.513 2.598c.016.01.027.021.042.031.012.01.025.018.036.028.013.014.022.03.034.044.008.012.019.021.024.033.011.02.018.04.024.06.006.01.01.02.013.031zM20.67 6.24l-3.76 2.164 3.76 2.165V6.24zm-1.4 7.03l-3.76-2.164v4.329l3.76-2.165zm-8.27 6.087v-4.33l-3.76 2.164v4.33l3.76-2.164zm-7.55-11.8l-3.76 2.164 3.76 2.165V7.557zm1.4 7.03l-3.76-2.164v4.329l3.76-2.165zm7.55-5.24l3.76-2.164-3.76-2.165v4.33zm-1.412.81l-3.76-2.164-3.76 2.164 3.76 2.165 3.76-2.165z" />
        </svg>
      ),
      'Node.js': (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
          <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z" />
        </svg>
      ),
      'Shopify': (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
          <path d="M15.337 2.487s-.26-.073-.704-.073c-.022 0-.048 0-.073.002-.134-.136-.302-.204-.47-.204-.618 0-1.214.818-1.54 1.88-.25.825-.438 1.856-.438 1.856s-.91.27-1.54.438c-.022.006-.043.012-.064.016-.133-.862-.74-1.65-1.645-1.65h-.088c-.13-.206-.294-.294-.458-.294C6.736 4.458 6 8.262 6 8.262l6.343 1.194s1.427-8.775 1.438-8.87c.088-.01.17-.013.244-.013.335 0 .528.096.728.22.023.015.048.028.07.042.15.099.293.214.427.338l.087-.686zM18.133 8.262c-.276 0-.529.044-.777.12-.003 0-.007 0-.01.003l-.001-.002c-.25.076-.498.185-.74.318v-.003l-1.08.648v-1.15c0-.1-.01-.198-.024-.293 0 0 .89-.271 1.54-.438.628-.162 1.092-.257 1.092-.257v8.647l-1.8-.33c.005-.01.01-.017.014-.027.285-.52.425-1.08.425-1.635 0-1.726-1.407-3.044-3.33-3.044-.117 0-.23.005-.343.016v-.003l-.777.121V1.84l1.08-.199v9.38c.166-.015.337-.023.51-.023 1.5 0 2.65 1.02 2.65 2.35 0 .81-.292 1.488-.823 1.915-.014.01-.024.023-.037.034-.49.39-1.15.602-1.91.602-.52 0-1.02-.097-1.47-.28v3.43h6.813V8.262h-.003z" />
        </svg>
      ),
      'MongoDB': (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
          <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296 4.888-3.372 4.734-11.078-.01-.307-.03-.614-.063-.924-.06-.927-.09-1.35-.379-1.373z" />
        </svg>
      ),
      'Django': (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
          <path d="M11.146 0h3.924v18.166c-2.013.382-3.491.535-5.096.535-4.791 0-7.288-2.166-7.288-6.32 0-4.002 2.65-6.6 6.753-6.6.637 0 1.121.05 1.707.203zm0 9.143a3.894 3.894 0 00-1.325-.204c-1.988 0-3.134 1.223-3.134 3.365 0 2.09 1.096 3.236 3.109 3.236.433 0 .79-.025 1.35-.102V9.142zM21.314 6.06v9.098c0 3.134-.229 4.638-.917 5.937-.637 1.249-1.478 2.039-3.211 2.905l-3.644-1.733c1.733-.815 2.574-1.529 3.109-2.625.56-1.121.739-2.421.739-5.835V6.059h3.924zM17.39.021h3.924v4.026H17.39z" />
        </svg>
      ),
      '.NET': (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
          <path d="M24 8.77h-2.468v7.565h-1.425V8.77h-2.462V7.53H24zm-6.852 7.565h-4.821V7.53h4.63v1.24h-3.205v2.494h2.953v1.234h-2.953v2.604h3.396zm-6.708 0H8.882L4.78 9.863a2.896 2.896 0 0 1-.258-.51h-.036c.032.189.048.592.048 1.21v5.772H3.157V7.53h1.659l3.965 6.32c.167.261.275.442.323.54h.024c-.04-.233-.06-.629-.06-1.185V7.529h1.372zm-8.703-.693a.868.829 0 0 1-.869.829.868.829 0 0 1-.868-.83.868.829 0 0 1 .868-.828.868.829 0 0 1 .869.829Z" />
        </svg>
      ),
      'Magento': (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
          <path d="M12 24l-7.5-4.313V4.312L12 0l7.5 4.313v15.375L12 24zm5-17.186L12 4.25l-5 2.875v11.25L12 21.25l5-2.875V6.814z" />
        </svg>
      ),
      'SQL': (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
          <path d="M4.5 11h15v2h-15v-2zM4.5 6h15v2h-15V6zm0 10h15v2h-15v-2z" />
        </svg>
      ),
      'AI/ML': (
        <Brain className="w-full h-full" />
      ),
      'CSS': (
        <Palette className="w-full h-full" />
      )
    }
    return logos[name] || <Code2 className="w-full h-full" />
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-[76px]">

      {/* ✅ FIXED Header - dark gradient with stats inside */}
      <div className="bg-gradient-to-br from-orange-900 via-red-800 to-orange-800 text-white py-20 relative overflow-hidden">
        {/* Glow blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl opacity-10"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-red-500 rounded-full blur-3xl opacity-10"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <button
            onClick={() => navigate('/career')}
            className="flex items-center gap-2 bg-white/15 border border-white/30 text-white hover:bg-white/25 px-4 py-2 rounded-lg mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Careers
          </button>

          <div className="text-center mb-14">
            <h1 className="text-5xl font-bold mb-4">Our Technology Stack</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Kavach Global leverages cutting-edge technologies to deliver comprehensive,
              integrated solutions across diverse industries
            </p>
          </div>

          {/* Stats inside header */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '20+', label: 'Technologies' },
              { value: '7', label: 'Tech Categories' },
              { value: '600+', label: 'Projects Delivered' },
              { value: '120+', label: 'Tech Experts' },
            ].map((stat, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl font-bold text-orange-300 mb-2">{stat.value}</div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom wave into page */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
          <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-12">
            <path d="M0,40 C360,0 1080,60 1440,20 L1440,60 L0,60 Z" fill="#f9fafb" />
          </svg>
        </div>
      </div>

      {/* Technology Categories */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="space-y-8">
          {techCategories.map((category, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-lg p-8 border-2 border-gray-100 hover:border-orange-300 transition-all">
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center text-white shadow-lg`}>
                  {category.icon}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{category.name}</h2>
                  <p className="text-gray-600">{category.technologies.length} Technologies</p>
                </div>
              </div>

              {/* Technologies Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {category.technologies.map((tech, techIdx) => (
                  <div
                    key={techIdx}
                    ref={techRefs[tech.name]}
                    className="border-2 border-gray-200 rounded-xl p-6 hover:border-orange-400 hover:shadow-lg transition-all group scroll-mt-24"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center text-white">
                          {getTechLogo(tech.name)}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">{tech.name}</h3>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold border ${getLevelBadgeColor(tech.level)}`}>
                        {tech.level}
                      </span>
                    </div>
                    <p className="text-gray-700 mb-4 leading-relaxed">{tech.fullDescription}</p>
                    <div className="flex items-center gap-2 text-sm text-gray-500 pt-3 border-t border-gray-100">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span className="font-semibold">{tech.projects} projects completed</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* What We Build Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            What We Build With These Technologies
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Code2 className="w-8 h-8 text-white" />, title: 'Web Applications', desc: 'Custom web solutions using React, Laravel, Django, and modern frameworks for responsive and scalable applications.' },
              { icon: <Smartphone className="w-8 h-8 text-white" />, title: 'Mobile Solutions', desc: 'Native and cross-platform mobile apps with iOS, Flutter, and Cordova for seamless user experiences.' },
              { icon: <ShoppingCart className="w-8 h-8 text-white" />, title: 'E-commerce Platforms', desc: 'Full-featured online stores with Shopify and Magento, customized to drive sales and growth.' },
              { icon: <Cloud className="w-8 h-8 text-white" />, title: 'ERP Solutions', desc: 'Comprehensive business management with Odoo ERP for streamlined operations across departments.' },
              { icon: <Database className="w-8 h-8 text-white" />, title: 'Data Solutions', desc: 'Robust database architecture with MongoDB and SQL for efficient data management and analytics.' },
              { icon: <Server className="w-8 h-8 text-white" />, title: 'Backend Systems', desc: 'Powerful server-side solutions with Node.js, Express, PHP, and .NET for enterprise-grade applications.' },
              { icon: <Brain className="w-8 h-8 text-white" />, title: 'AI/ML Solutions', desc: 'Intelligent systems using machine learning, natural language processing, computer vision, and predictive analytics.' },
              { icon: <Palette className="w-8 h-8 text-white" />, title: 'UI/UX Design', desc: 'Beautiful, responsive interfaces with modern CSS, animations, and design systems that delight users.' },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100 hover:border-orange-300 hover:shadow-xl transition-all group">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <section className="rounded-3xl py-16 px-8 bg-gradient-to-br from-orange-900 via-red-800 to-orange-800 relative overflow-hidden shadow-2xl">
          {/* Top wave border */}
          <div className="absolute top-0 left-0 right-0 overflow-hidden leading-none rotate-180">
            <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-16 md:h-20">
              <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="white" />
            </svg>
          </div>

          {/* Glow blobs */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl opacity-10"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-red-500 rounded-full blur-3xl opacity-10"></div>

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-4xl font-extrabold text-white mb-4">
              Ready to Work With{" "}
              <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                These Technologies?
              </span>
            </h2>
            <p className="text-gray-300 text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
              Join our team of experts and work on cutting-edge projects using the latest tech stack
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={() => navigate('/career')}
                className="bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold px-10 py-4 rounded-full hover:scale-105 hover:shadow-orange-500/30 shadow-lg transition-all duration-300"
              >
                View Open Positions
              </button>
              <button
                onClick={() => navigate('/contact')}
                className="bg-white/10 border border-white/20 text-white font-bold px-10 py-4 rounded-full hover:bg-white/20 hover:scale-105 transition-all duration-300 backdrop-blur-sm"
              >
                Learn More
              </button>
            </div>
          </div>
        </section>
      </div>

    </div>
  )
}

export default LanguageDetails