import React, { useEffect, useState } from "react";
import GlobalApi from "../Services/GlobalApi";
import firstBlog from "../assets/Images/blogn3.jpeg";
import secondBlog from "../assets/Images/blogn2.jpeg";
import thirdBlog from "../assets/Images/blogn1.jpeg";
import fourthBlog from "../assets/Images/blogn4.jpeg";
import fifthBlog from "../assets/Images/blogn7.jpeg";
import sixBlog from "../assets/Images/blogn6.jpeg";
import { Link } from "react-router-dom";

const IntroPost = ({ post }) => {
  // const [posts, setPost] = useState(null);
  useEffect(() => {
    getPost();
  }, []);
  const [photo, setPhoto] = useState(null);
  const getPost = () => {
    GlobalApi.getPost
      .then((resp) => {
        console.log(resp);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // GET /photos/random
  return (
    <div className="bg-gray-300  ">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex w-full mb-20 flex-wrap">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">
              Share a story to make readers want to know more
            </h1>
            <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
              If you’re running a blog, you know that writing compelling,
              attention-grabbing blog descriptions is crucial for driving
              traffic to your site. But crafting the perfect blog description
              can be easier said than done. In this post, we’ll go over some
              tips for writing compelling blog descriptions to boost your site’s
              traffic.
            </p>
          </div>
          <div className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-1/2">
                <Link to="/post">
                  <img
                    alt="gallery"
                    className="w-full object-cover h-full object-center block"
                    src={firstBlog}
                  />
                </Link>
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <Link to="/post">
                  {" "}
                  <img
                    alt="gallery"
                    className="w-full object-cover h-full object-center block"
                    src={secondBlog}
                  />
                </Link>
              </div>
              <div className="md:p-2 p-1 w-full">
                <Link to="/post">
                  {" "}
                  <img
                    alt="gallery"
                    className="w-full h-full object-cover object-center block"
                    src={thirdBlog}
                  />
                </Link>
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-full">
                <Link to="/post">
                  {" "}
                  <img
                    alt="gallery"
                    className="w-full h-full object-cover object-center block"
                    src={fourthBlog}
                  />
                </Link>
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <Link to="/post">
                  {" "}
                  <img
                    alt="gallery"
                    className="w-full object-cover h-full object-center block"
                    src={fifthBlog}
                  />
                </Link>
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <Link to="/post">
                  {" "}
                  <img
                    alt="gallery"
                    className="w-full object-cover h-full object-center block"
                    src={sixBlog}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IntroPost;
