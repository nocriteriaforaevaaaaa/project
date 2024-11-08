import React from 'react'

export default function Home() {
  return (
    <div style={{backgroundImage: "url('../../c0.png')", backgroundSize: "80px 80px", backgroundRepeat:"repeat", backgroundPosition:"center"}} className="w-full h-full">
    <section  className="container mx-auto py-16 px-4 text-center">
<div className="bg-white bg-opacity-100 p-8 rounded-lg shadow-md max-w-lg mx-auto">
    <h2 className="text-6xl font-bold text-blue-900 mb-4">Ace your  <span className="text-pink-500">Interviews</span></h2>
    <p className="text-gray-800 max-w-md mx-auto">With Prepify, an interactive interview preparation platform.</p>
    </div>
    
    
    <div className="mt-12 flex justify-center space-x-4">
        <a href="#" className="bg-white text-pink-700 font-semibold py-2 px-4 border border-pink-700 rounded hover:bg-pink-700 hover:text-white">Create an Account</a>
        <a href="#" className="bg-white text-pink-700 font-semibold py-2 px-4 border border-pink-700 rounded hover:bg-pink-700 hover:text-white">Already have an account?</a>
    </div>

   
   <div className="relative flex justify-center mt-14 space-x-4">

   <div className="relative bg-white shadow-lg rounded-lg overflow-hidden p-4 w-72 h-64 transform rotate-3">
    <img src="4.png" alt="First Image" className="w-full h-full object-cover rounded"/>
   </div>


  <div className="relative bg-white shadow-lg rounded-lg overflow-hidden p-4 w-72 h-64 transform -rotate-2 -mt-4 z-10">
    <img src="2.png" alt="Second Image" className="w-full h-full object-cover rounded"/>
  </div>


  <div className="relative bg-white shadow-lg rounded-lg overflow-hidden p-4 w-72 h-64 transform rotate-2 mt-4">
    <img src="3.png" alt="Third Image" className="w-full h-full object-cover rounded"/>
  </div>


 <div className="relative bg-white shadow-lg rounded-lg overflow-hidden p-4 w-72 h-64 transform -rotate-3 -mt-4">
    <img src="1.png" alt="Fourth Image" className="w-full h-full object-cover rounded"/>
 </div>
</div>

</section>
</div>
  )
}
