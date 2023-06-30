import axios from "axios"

const BASE_URL='https://dummyjson.com'

const getPost=axios.get(BASE_URL+'/posts?populate=*');

console.log(getPost);
export default{
    getPost
}


// import React from 'react'

// const GlobalApi = () => {
//   return (
//     <div>GlobalApi</div>
//   )
// }

// export default GlobalApi