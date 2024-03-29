import React from "react";

import moment from "moment";

const PostDetail = ({ post }) => {
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = <b key={index}>{text}</b>;
      }

      if (obj.italic) {
        modifiedText = <em key={index}>{text}</em>;
      }

      if (obj.underline) {
        modifiedText = <u key={index}>{text}</u>;
      }
    }
    switch (type) {
      case "heading-three":
        return (
          <h3 key={index} className="text-xl font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h3>
        );
      case "paragraph":
        return (
          <p key={index} className="mb-8 text-xl font-heroSubText mt-12">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </p>
        );
      case "heading-four":
        return (
          <h4 key={index} className="text-md font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h4>
        );
      case "image":
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      default:
        return modifiedText;
    }
  };

  return (
    <>
      <div className="bg-white  rounded-lg lg:p-8 pb-12 mb-8">
        <div className="relative overflow-hidden shadow-md mb-6">
          <img
            src={post.featuredImage.url}
            alt=""
            className="object-top h-full w-full object-cover  shadow-lg rounded-t-lg lg:rounded-lg"
          />
        </div>
        <div className="px-0 lg:px-0">
          <div className="flex items-center mb-8 w-full">
            {/* <div className="hidden md:flex justify-center lg:mb-0 lg:w-auto mr-8 items-center">
              <img
                alt={post.author.name}
                height="30px"
                width="30px"
                className="align-middle rounded-full"
                src={post.author.photo.url}
              />
              <p className="inline align-middle text-gray-700 ml-2 font-medium text-lg">{post.author.name}</p>
            </div> */}
            <div className="font-medium text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 inline font-heroSubText text-xl  mr-2 text-admit-red"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span className="align-middle font-heroSubText text-lg font-semibold">
                {moment(post.createdAt).format("MMM DD, YYYY")}
              </span>
            </div>
          </div>
          <h2 className="mb-8 md:text-6xl text-4xl font-admitTitle font-semibold max-w-full">
            {post.title}
          </h2>
          {post.content.raw.children.map((typeObj, index) => {
            const children = typeObj.children.map((item, itemindex) =>
              getContentFragment(itemindex, item.text, item)
            );

            return getContentFragment(index, children, typeObj, typeObj.type);
          })}
        </div>
        <div className="flex-col mt-24">
          {post.title == "Hvordan unngå konkurs og nedbemanning ?" ? (
            <a
              className="font-heroSubText font-semibold text-lg text-admit-red hover:scale-105 hover:text-admit-blue transition-all duration-500"
              href="/abc"
              target="_blank"
              rel="noopener noreferrer"
            >
              Test vår Simuleringskalkulator
            </a>
          ) : (
            ""
          )}
          {post.title == "Hvordan unngå konkurs og nedbemanning ?" ? (
            <a
              className="ml-4 font-heroSubText font-semibold text-lg text-admit-blue hover:scale-105 hover:text-admit-red transition-all duration-500"
              href="/post/dybdeartikkel-abc"
              target="_blank"
              rel="noopener noreferrer"
            >
              Blir det svarte år for SMB bedrifter på Vestlandet ?
            </a>
          ) : (
            ""
          )}
          {post.title ==
          "Blir det svarte år for SMB bedrifter på Vestlandet ?" ? (
            <a
              className="ml-4 font-heroSubText font-semibold text-lg text-admit-blue hover:scale-105 hover:text-admit-red transition-all duration-500"
              href="/post/nedbemanning"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hvordan unngå konkurs og nedbemanning ?
            </a>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default PostDetail;
