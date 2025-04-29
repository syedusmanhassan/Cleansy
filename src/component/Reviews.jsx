import React from "react";
import { Star } from 'lucide-react';

export default function GoogleReviews() {
  const reviews = [
    {
      id: 1,
      name: "Tony Murphy",
      avatar: "/placeholder.svg?height=120&width=120",
      rating: 5,
      date: "2 days ago",
      text: "I had an awesome experience with the Charleston team of cleaners and this cleaning company! They were professional, thorough, and left my space spotless. I highly recommend!"
    },
    {
      id: 2,
      name: "Robin Vien",
      avatar: "/placeholder.svg?height=120&width=120",
      rating: 5,
      date: "3 days ago",
      text: "Very professional, on-time, and understanding of my personal issues with hiring a cleaning service. Highly recommend."
    },
    {
      id: 3,
      name: "adam schneidman",
      avatar: "/placeholder.svg?height=120&width=120",
      rating: 5,
      date: "3 days ago",
      text: "Timber did a great job!!! Fantastic"
    },
    {
      id: 4,
      name: "caroline fisher",
      avatar: "/placeholder.svg?height=120&width=120",
      rating: 5,
      date: "4 days ago",
      text: "I highly recommend Castle Keepers because they are professional, detail-oriented and dependable. We appreciate Max's hard work and she is a pleasure to have in our home."
    },
    {
      id: 5,
      name: "Belinda D. Hunt",
      avatar: "/placeholder.svg?height=120&width=120",
      rating: 5,
      date: "5 days ago",
      text: "Great communication and easy coordination. Happy with my monthly service."
    },
    {
      id: 6,
      name: "Jim Smith",
      avatar: "/placeholder.svg?height=120&width=120",
      rating: 5,
      date: "6 days ago",
      text: "We are very pleased with the work that Castle Keepers has done for us.\nTyra, is very courteous ,and a very positive attidude.\nThanks,\nJim & Teresa"
    },
    {
      id: 7,
      name: "Karen Rhyne",
      avatar: "/placeholder.svg?height=120&width=120",
      rating: 5,
      date: "7 days ago",
      text: "Very nice work!"
    },
    {
      id: 8,
      name: "Kevin Cash",
      avatar: "/placeholder.svg?height=120&width=120",
      rating: 5,
      date: "8 days ago",
      text: "Can home to clean house\nAwesome job Natilie"
    }
  ];

  // Generate avatar initials for the circular avatars
  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  // Generate a grayscale color based on name for the circular avatars
  const getAvatarColor = (name) => {
    const colors = [
      'bg-gray-900', 'bg-gray-800', 'bg-gray-700', 
      'bg-gray-600', 'bg-black', 'bg-gray-500'
    ];
    const index = name.length % colors.length;
    return colors[index];
  };

  return (
    <div className="w-full py-12 px-4 md:px-6 bg-gray-50 relative overflow-hidden">
      {/* Background with subtle gray pattern */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-fixed opacity-30 pointer-events-none" 
        style={{ 
          backgroundImage: "url('https://castle-keepers.com/wp-content/uploads/2023/07/charleston.png')"
        }}
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12" data-aos="fade-up" data-aos-duration="1000">
          <h3 className="text-3xl md:text-4xl font-bold text-black">
            What People Are Saying About Us
          </h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, idx) => (
            <div 
              key={review.id} 
              className="bg-white/75 rounded-lg p-6 flex flex-col  hover:shadow-lg transition-shadow duration-300"
              data-aos="fade-up" 
              data-aos-delay={100 + (idx * 50)}
            >
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 mr-4">
                  <div className={`w-10 h-10 rounded-full overflow-hidden flex items-center justify-center text-white ${getAvatarColor(review.name)}`}>
                    {getInitials(review.name)}
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">{review.name}</h4>
                  <div className="text-xs text-gray-500">{review.date}</div>
                </div>
              </div>
              
              <div className="flex mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    className={`${i < review.rating ? "text-black fill-black" : "text-gray-300"}`} 
                  />
                ))}
              </div>
              
              <p className="text-gray-700 text-sm flex-grow">
                {review.text.length > 100 ? `${review.text.substring(0, 100)}...` : review.text}
              </p>
              
              {review.text.length > 100 && (
                <div className="mt-2">
                  <span className="text-sm text-gray-500 hover:text-black cursor-pointer transition-colors">
                    Read more
                  </span>
                </div>
              )}
              
              <div className="mt-4 pt-2 border-t border-gray-100">
              <img 
  src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" 
  alt="Google" 
  class="h-5 opacity-80" 
/>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center" data-aos="fade-up" data-aos-delay="400">
          <button className="bg-black text-white font-bold py-2 px-12 rounded-full hover:bg-gray-900 transition-colors">
            Load More
          </button>
        </div>
        
        <div className="mt-16 text-center" data-aos="fade-up" data-aos-delay="500">
          <h3 className="text-2xl md:text-3xl font-bold text-black mb-6">
            WE INVITE YOUR HONEST FEEDBACK
          </h3>
          <p className="text-gray-700 max-w-4xl mx-auto">
            Castle Keepers House Cleaning services is proud to serve our clients and give them back time to do the things that matter most in life. We're one of the fastest growing maid services in the nation because we listen to our clients. After every cleaning, we email our clients a Cleaning Scorecard. This allows you as a client to rate your team with just a click of the mouse or a tap on your phone. We do our best to respond to your suggestions for improvement. Your honest feedback is how any company gets better and our goal is to be the very best cleaning service. We get lots of business by word of mouth, but of course we appreciate reviews on Google, Facebook, and Yelp. Thank you!
          </p>
        </div>
      </div>
    </div>
  );
}