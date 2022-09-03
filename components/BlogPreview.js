import React from 'react'
const poster = [
  {title : "Workation kan gjøre deg til en bedre led1222er",
  category:"OLA ABA TALE TALE OO",
  description:"This si a generic description for the list of tasks",
  slug:"testSlug",
  image: "./blog1.png" },
  {title : "Workation kan gjøre deg til en bedre leder1211",
  category:"OLA ABA TALE TALE OO",
  description:"This si a generic description for the list of tasks",
  slug:"testSlug",
  image: "./blog2.png" },
  {title : "Workation kan gjøre deg til en bedre lede12r",
  category:"OLA ABA TALE TALE OO",
  description:"This si a generic description for the list of tasks",
  slug:"testSlug",
  image: "./blog1.png" },
  {title : "Workation kan gjøre deg til en bedre leder1212",
  category:"OLA ABA TALE TALE OO",
  description:"This si a generic description for the list of tasks",
  slug:"testSlug",
  image: "./blog2.png" },
  {title : "Workation kan gjøre deg til en bedre leder12",
  category:"OLA ABA TALE TALE OO",
  description:"This si a generic description for the list of tasks",
  slug:"testSlug",
  image: "./blog1.png" },
  {title : "Workation kan gjøre deg til en bedre leder1",
  category:"OLA ABA TALE TALE OO",
  description:"This si a generic description for the list of tasks",
  slug:"testSlug",
  image: "./blog2.png" },
]



const BlogPreview = ({posts}) => {
  return (
    <div div
    data-cursor-exclusion style={{backgroundColor: '#fff'}} >
   <section className="text-gray-600 body-font">
   <div className="container px-5 py-24 mx-auto">
     <div className="flex flex-wrap -m-4">
      {posts?.map((post)=>
    
     <div key={post.title} className="p-4 md:w-1/3">
       <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={post.featuredImage.url} alt={post.title} />
        <div className="p-6">
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{poster.category}</h2>
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{post.title} </h1>
          <p className="leading-relaxed mb-3">{post.excerpt} </p>
          <div className="flex items-center flex-wrap ">
            <a href={"/post/"+post.slug}className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"> Les Mer
              <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>

            <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
              <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>18
            </span>
            <span className="text-gray-400 inline-flex items-center leading-none text-sm">
              <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>6
            </span>
          </div>
        </div>
      </div>
    </div>
   
  
      
      )}
    </div>
  </div>
</section>
    
    </div>
  )
}
export default BlogPreview

