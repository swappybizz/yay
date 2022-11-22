import React, { useState, useEffect }from "react";
import { getPosts } from "../../services";

export default function ({ posts }) {
  const [blogPost,setBlogPosts ] =  useState([])

  useEffect(() =>{
    getPosts().then((result)=>
    setBlogPosts(result)
    )



  },[])
  return (
    // <>
    // {posts?.map((post)=>(
      
    //   <>
    //   <h2>{post.node.title}</h2>
    //   <h2>{post.node.slug}</h2>
    //   <img src={post.node.featuredImage.url} ></img>
      

    //   </>
    // ))}
    // </>
    <>
    
      {blogPost.map((post) => (
        <div key={post.node.title}>
          <section className="text-gray-600 body-font ">
            <section className="text-gray-600 body-font">
              <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -mx-4 -my-8 ">
                  <div className="py-8 px-4 lg:w-1/3 border-2 rounded-xl bg-gray-100 bg-opacity-75">
                    <div className="h-full flex items-start">
                      <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                        <span className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">
                          Jul
                        </span>
                        <span className="font-medium text-lg text-gray-800 title-font leading-none">
                          18
                        </span>
                      </div>
                      <div className="flex-grow pl-6">
                        {/* {post.node.category.map((cat) => ( */}
                        <h2 className="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1">
                          {/* {cat.name} */}
                          {/* fix this */}
                        </h2>
                        {/* ))} */}

                        <h2 className="title-font text-xl font-medium text-gray-900 mb-3">
                          {post.node.title}
                        </h2>
                        <p className="leading-relaxed mb-5">
                          {post.node.excerpt}
                        </p>
                        <a className="inline-flex items-center cursor-pointer">
                          {/* <img
                            alt="blog"
                            src={post.node.author.photo.url}
                            className="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center"
                          /> */}
                          {/* improve the performance of this image */}
                          {/* <span className="flex-grow flex flex-col pl-3">
                            <span className="title-font font-medium text-gray-900">
                              {post.node.author.name}
                            </span>
                          </span> */}
                        </a>
                      </div>
                    </div>
                    <a
                      href={`/post/${post.node.slug}`}
                      className="inline-flex items-center cursor-pointer"
                    >
                      {/* improve the performance of this image */}
                      <span className="flex-grow flex flex-col pl-3">
                        <span className=" hover:text-admit-red transition-all duration-700 font-thin text-gray-900">
                          LES MER
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </section>
        </div>
      ))}
    </>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}
