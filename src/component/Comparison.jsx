import { CheckCircle, XCircle } from "lucide-react"
import { useEffect, useState } from "react"

const Comparison = () => {
  const [isMobile, setIsMobile] = useState(false)

  const features = [
    "Locally Owned and Operated",
    "Over The Phone Estimates",
    "Bonded and Insured",
    "Environmentally Friendly",
    "Customized Cleans",
    "PRO Clean Promise",
    "Background Checks",
  ]

  const comparisonData = {
    maidpro: {
      name: "MaidPro",
      features: [true, true, true, true, true, true, true],
    },
    independent: {
      name: "Independent Maids",
      features: [true, false, false, false, true, false, false],
    },
  }

  // Check screen size for responsive design
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    // Initial check
    checkScreenSize()
    
    // Add event listener
    window.addEventListener('resize', checkScreenSize)
    
    // Cleanup
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  // Initialize AOS animation library on component mount
  useEffect(() => {
    // Check if AOS is available
    if (typeof window !== "undefined" && window.AOS) {
      window.AOS.init({
        duration: 800,
        once: false,
        mirror: true,
      })
    } else {
      // If AOS is not already loaded, add it dynamically
      const script = document.createElement("script")
      script.src = "https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js"
      script.async = true
      script.onload = () => {
        window.AOS.init({
          duration: 800,
          once: false,
          mirror: true,
        })
      }
      document.body.appendChild(script)

      // Also add AOS CSS
      const link = document.createElement("link")
      link.rel = "stylesheet"
      link.href = "https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css"
      document.head.appendChild(link)
    }

    // Cleanup function
    return () => {
      // CSS will remain, but that's usually fine
      const script = document.querySelector('script[src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js"]')
      if (script && script.parentNode && script.getAttribute("data-added-by-comparison")) {
        script.parentNode.removeChild(script)
      }
    }
  }, [])

  // Mobile view comparison component
  const MobileComparison = () => (
    <div className="space-y-8">
      {/* MaidPro Section */}
      <div 
        className="bg-black text-white rounded-lg shadow-lg overflow-hidden"
        data-aos="fade-up" 
        data-aos-delay="200"
      >
        <div className="p-4 bg-black border-b border-gray-700">
          <p className="text-xl font-bold text-center">MaidPro</p>
        </div>
        <div className="divide-y divide-gray-700">
          {features.map((feature, index) => (
            <div key={`maidpro-${index}`} className="flex justify-between items-center p-3">
              <span className="text-sm font-medium">{feature}</span>
              <CheckCircle className="w-5 h-5 text-white" />
            </div>
          ))}
        </div>
      </div>

      {/* Independent Maids Section */}
      <div 
        className="bg-gray-100 rounded-lg border border-gray-200 shadow-lg overflow-hidden"
        data-aos="fade-up" 
        data-aos-delay="400"
      >
        <div className="p-4 bg-gray-200 border-b border-gray-300">
          <p className="text-xl font-bold text-gray-800 text-center">Independent Maids</p>
        </div>
        <div className="divide-y divide-gray-200">
          {features.map((feature, index) => (
            <div key={`independent-${index}`} className="flex justify-between items-center p-3">
              <span className="text-sm font-medium text-gray-800">{feature}</span>
              {comparisonData.independent.features[index] ? 
                <CheckCircle className="w-5 h-5 text-gray-600" /> : 
                <XCircle className="w-5 h-5 text-gray-400" />
              }
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  // Desktop view comparison component
  const DesktopComparison = () => (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg">
      {/* Headers */}
      <div className="grid grid-cols-3" data-aos="fade-up" data-aos-delay="200">
        <div className="p-4"></div>
        <div className="p-4 bg-black text-center rounded-t-lg">
          <p className="text-xl font-bold text-white">MaidPro</p>
        </div>
        <div className="p-4 bg-gray-100 text-center rounded-t-lg">
          <p className="text-xl font-bold text-gray-800">Independent Maids</p>
        </div>
      </div>
      
      {/* Features */}
      {features.map((feature, index) => (
        <div 
          key={index} 
          className="grid grid-cols-3 border-t border-gray-200"
        >
          <div 
            className="p-4 text-right font-medium text-gray-800 flex items-center justify-end"
            data-aos="fade-right" 
            data-aos-delay={300 + (index * 100)}
          >
            {feature}
          </div>
          <div className="p-4 flex justify-center items-center bg-gray-50">
            <div 
              data-aos="zoom-in" 
              data-aos-delay={400 + (index * 100)}
            >
              <CheckCircle className="w-6 h-6 text-black" />
            </div>
          </div>
          <div className="p-4 flex justify-center items-center bg-gray-100">
            {comparisonData.independent.features[index] ? 
              <div 
                data-aos="zoom-in" 
                data-aos-delay={500 + (index * 100)}
              >
                <CheckCircle className="w-6 h-6 text-gray-600" />
              </div> : 
              <div 
                data-aos="zoom-in" 
                data-aos-delay={500 + (index * 100)}
              >
                <XCircle className="w-6 h-6 text-gray-400" />
              </div>
            }
          </div>
        </div>
      ))}
    </div>
  )

  return (
    <section className="py-12 md:py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 md:mb-12" data-aos="fade-up" data-aos-duration="1000">
          <h2 className="font-medium mb-2 text-gray-800 text-xl md:text-2xl">
            The MaidPro
            <br />
            <span className="font-bold text-3xl md:text-4xl text-black">Difference</span>
          </h2>
          <div className="max-w-xl mx-auto">
            <p className="text-gray-600 text-sm md:text-base">
              We're leading the cleaning industry in customer satisfaction and service quality. Try MaidPro and see why
              cleaning is a big deal to us.
            </p>
          </div>
        </div>

        {isMobile ? <MobileComparison /> : <DesktopComparison />}
      </div>
    </section>
  )
}

export default Comparison