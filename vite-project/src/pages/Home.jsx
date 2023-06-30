import React, { useEffect, useState } from 'react'
// import Navbar from '../components/Navbar'
import IntroPost from '../components/IntroPost'
// import Footer from '../components/Footer'
// import Blogs from '../components/Blogs'
import Content from '../components/Content'
import GlobalApi from '../Services/GlobalApi'

const Home = () => {

  const [post,setPost]=useState([])
  useEffect(()=>{getPost()},[])

  const getPost=()=>{
    GlobalApi.getPost.then(resp=>{
      const result=resp.data.posts.map(item=>({
        id:item.id
      }));
      setPost(result)
    })
  }
  return (
    <div>
  
        <Content/>
    {post.length>0? <IntroPost post={post[0]}/>:null}
      {/* <Blogs/>
        <Footer/>  */} 
    </div>
  )
}

export default Home