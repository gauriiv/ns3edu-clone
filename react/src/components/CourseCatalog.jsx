import { useState } from 'react'

const CourseCatalog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Courses' },
    { id: 'beginner', name: 'Beginner' },
    { id: 'intermediate', name: 'Intermediate' },
    { id: 'advanced', name: 'Advanced' },
    { id: 'wireless', name: 'Wireless Networks' },
    { id: 'protocols', name: 'Network Protocols' }
  ]

  const courses = [
    {
      id: 1,
      title: "NS3 Fundamentals",
      description: "Learn the basics of NS3 network simulator and get started with your first simulation.",
      category: "beginner",
      duration: "8 weeks",
      level: "Beginner",
      rating: 4.8,
      students: 1250,
      price: "$49",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop",
      instructor: "Dr. Sarah Johnson",
      topics: ["NS3 Installation", "Basic Topology", "Simple Simulations"]
    },
    {
      id: 2,
      title: "Wireless Network Simulation",
      description: "Master wireless network modeling and simulation techniques using NS3.",
      category: "wireless",
      duration: "10 weeks",
      level: "Intermediate",
      rating: 4.9,
      students: 890,
      price: "$79",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=250&fit=crop",
      instructor: "Prof. Michael Chen",
      topics: ["WiFi Modeling", "Mobility Models", "Channel Propagation"]
    },
    {
      id: 3,
      title: "TCP/IP Protocol Implementation",
      description: "Deep dive into TCP/IP protocols and their implementation in NS3.",
      category: "protocols",
      duration: "12 weeks",
      level: "Advanced",
      rating: 4.7,
      students: 650,
      price: "$99",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop",
      instructor: "Dr. Emily Rodriguez",
      topics: ["TCP Variants", "Congestion Control", "Performance Analysis"]
    },
    {
      id: 4,
      title: "Network Performance Analysis",
      description: "Learn to analyze and optimize network performance using NS3 tools.",
      category: "intermediate",
      duration: "6 weeks",
      level: "Intermediate",
      rating: 4.6,
      students: 720,
      price: "$69",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=250&fit=crop",
      instructor: "Prof. David Kim",
      topics: ["Performance Metrics", "Statistical Analysis", "Optimization"]
    },
    {
      id: 5,
      title: "5G Network Simulation",
      description: "Explore 5G network technologies and simulation methodologies.",
      category: "advanced",
      duration: "14 weeks",
      level: "Advanced",
      rating: 4.9,
      students: 450,
      price: "$129",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop",
      instructor: "Dr. Lisa Wang",
      topics: ["5G Architecture", "mmWave", "Network Slicing"]
    },
    {
      id: 6,
      title: "IoT Network Modeling",
      description: "Model and simulate Internet of Things networks using NS3.",
      category: "intermediate",
      duration: "8 weeks",
      level: "Intermediate",
      rating: 4.5,
      students: 580,
      price: "$59",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=250&fit=crop",
      instructor: "Prof. Robert Smith",
      topics: ["IoT Protocols", "Sensor Networks", "Edge Computing"]
    }
  ]

  const filteredCourses = selectedCategory === 'all' 
    ? courses 
    : courses.filter(course => course.category === selectedCategory)

  return (
    <section id="courses" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Explore Our Courses
          </h2>
          <p className="text-xl text-pink-600 max-w-3xl mx-auto">
            Choose from our comprehensive collection of NS3 network simulation courses 
            designed for all skill levels.
          </p>
        </div>

        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-colors duration-300 ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <div 
              key={course.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              
              <div className="relative h-48 bg-gradient-to-br from-blue-400 to-indigo-600">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-16 h-16 text-white opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="absolute top-4 right-4 bg-white text-blue-600 px-2 py-1 rounded-full text-sm font-semibold">
                  {course.price}
                </div>
              </div>

              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    course.level === 'Beginner' ? 'bg-green-100 text-green-800' :
                    course.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {course.level}
                  </span>
                  <div className="flex items-center text-yellow-400">
                    <span className="text-sm font-semibold text-gray-600 mr-1">{course.rating}</span>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {course.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {course.description}
                </p>

                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {course.duration} • {course.students} students
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    By {course.instructor}
                  </span>
                  <button className="bg-blue-600 hover:bg-pink-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-300">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        
        <div className="text-center mt-12">
          <button className="border-2 border-pink-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
            View All Courses
          </button>
        </div>
      </div>
    </section>
  )
}

export default CourseCatalog 