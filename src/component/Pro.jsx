import React from "react"
import { useState } from "react"
import Maid from "../assets/maid.webp"
import MaidPro from "../assets/maidpro.svg"
import HomeIcon from "../assets/Home.svg"

const ProCleanPromise = () => {
  const [zipCode, setZipCode] = useState("")
  const [error, setError] = useState(false)
  const [showForm, setShowForm] = useState(false)

  const handleSubmit = (e) => {
    if (e) e.preventDefault()

    // Simple zip code validation
    if (zipCode.length < 5 || !/^\d+$/.test(zipCode)) {
      setError(true)
      return
    }

    setError(false)
    // Here you would typically handle the form submission
    console.log("Submitting zip code:", zipCode)
    // You could redirect to a results page or show results
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 sm:py-12 md:py-16 lg:px-8 xl:px-12 ">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-center">
        {/* Left Column - Image */}
        <div className="w-full lg:w-1/2 relative mb-6 lg:mb-0" data-aos="fade-right" data-aos-duration="1000">
          <div className="overflow-hidden relative">
            <img
              src={Maid}
              alt="Maid service cleaning a couch"
              width={800}
              height={800}
              className="object-cover w-full h-full rounded-tr-3xl rounded-bl-3xl sm:rounded-tr-[4rem] sm:rounded-bl-[4rem] shadow-lg"
            />
            <div className="absolute inset-0  bg-opacity-10 rounded-tr-3xl rounded-bl-3xl sm:rounded-tr-[4rem] sm:rounded-bl-[4rem]"></div>
          </div>
        </div>

        {/* Right Column - Content */}
        <div className="w-full lg:w-1/2 space-y-4 sm:space-y-6" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
          <div className="flex flex-col sm:flex-row justify-between items-start">
            <div className="space-y-3 sm:space-y-4 sm:pr-4 md:pr-6 lg:pr-8 mb-4 sm:mb-0">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 leading-tight m-0">
                Feel Secure With Our
                <br />
                <span className="font-extrabold text-black">PRO Clean Promise</span>
              </h2>

              <div className="text-sm sm:text-base lg:text-lg text-gray-600">
                <p>
                  We're so confident you'll love your clean that we'll come back to finish the job if you're at all
                  dissatisfied. Contact us within 24 hours of your service and we'll re-clean at no additional cost to
                  you.
                </p>
              </div>

              <div className="pt-2 sm:pt-4">
                <button
                  className="bg-black hover:bg-gray-800 text-white font-medium py-2 px-4 sm:py-3 sm:px-6 rounded-md transition-colors w-full sm:w-auto"
                  onClick={() => setShowForm(!showForm)}
                >
                  Get a Free Estimate
                </button>

                {showForm && (
                  <div className="mt-4">
                    <div className="flex flex-col sm:flex-row gap-2">
                      <div className="relative flex-1">
                        <input
                          type="text"
                          placeholder="Zip/Postal Code"
                          className={`w-full p-2 sm:p-3 border ${error ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:ring-2 focus:ring-black`}
                          value={zipCode}
                          onChange={(e) => {
                            setZipCode(e.target.value)
                            setError(false)
                          }}
                          aria-label="Zip/Postal Code"
                        />
                        {error && <p className="text-red-500 text-sm mt-1">Please enter a valid Postal Code</p>}
                      </div>
                      <button
                        onClick={handleSubmit}
                        className="bg-black hover:bg-gray-800 text-white font-medium py-2 px-4 sm:py-3 sm:px-6 rounded-md transition-colors"
                      >
                        Go!
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 mx-auto sm:mx-0 flex-shrink-0">
              <div className="bg-white p-2 rounded-full shadow-md">
                <img
                  src={MaidPro}
                  alt="Pro Clean Promise"
                  width={200}
                  height={200}
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          <div className="bg-white p-4 sm:p-6 rounded-tr-xl rounded-bl-xl sm:rounded-tr-2xl sm:rounded-bl-2xl md:rounded-tr-[2rem] md:rounded-bl-[2rem] border border-gray-200 shadow-md" data-aos="fade-up" data-aos-delay="400">
            <div className="flex flex-col sm:flex-row items-center">
              <div className="flex-shrink-0 mr-0 sm:mr-4 text-gray-800 mb-2 sm:mb-0">
                <img src={HomeIcon} className="h-16 w-16 sm:h-24 sm:w-24" alt="Home icon" />
              </div>
              <div className="text-center">
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-800 m-0 my-0">You're In Wonderful Hands</h3>
                <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black my-0">6,908,966</p>
                <h3 className="text-xl sm:text-2xl lg:text-2xl text-gray-700 m-0 my-0">Homes Cleaned</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProCleanPromise;