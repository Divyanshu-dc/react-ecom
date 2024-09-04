import React, { useContext, useEffect, useState } from 'react'
import ProShimmer from './ProShimmer';
import { Theme } from './ContextAPI';

const Profile = () => {
  const [user , setUser]  =useState("");
  const {theme , setTheme} = useContext(Theme);
 const fetchData = async ()=>{
  const userData = await fetch('https://api.github.com/users/Divyanshu-dc');
  let data = await userData.json();
  setUser(data);
}
useEffect(()=>{
fetchData();
},[])


if(!user){
  return <ProShimmer></ProShimmer>
}
let darkTheme = "hero-content bg-black flex-col lg:flex-row-reverse shadow-2xl";
let lightTheme = "hero-content bg-white text-black flex-col lg:flex-row-reverse shadow-2xl";

console.log(user);

  return (
    <div className="hero min-h-screen"
    style={{ background: 'linear-gradient(135deg, #4e54c8, #8f94fb)' }}>
  <div className={theme == "light" ? lightTheme : darkTheme}>
    <img
      src={user.avatar_url}
      className="max-w-sm rounded-lg shadow-2xl" />
    <div>
    
      <h1 className="text-5xl font-bold">UserName - {user.name}</h1>
      <p className="pt-4">
      Passionate MERN full-stack developer </p>
      <p className=""> Location : Greater Noida, UP</p>
      <p className="mb-10 flex items-center">
            Currently working at 
            <img
              src="https://media.geeksforgeeks.org/wp-content/uploads/20220413171711/gfgblack.png"
              alt="GeeksforGeeks"
              style={{ width: '80px', height: 'auto', marginLeft: '8px' }}
            />
          </p>
      
      <div className="flex space-x-4">
            <a href={user.html_url} target="_blank" rel="noopener noreferrer">
              <img
                src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                alt="GitHub"
                style={{ width: '32px', height: '32px' }}
              />
            </a>
            <a href='https://www.linkedin.com/in/divyanshu-chaudhary-343a70295/' target="_blank" rel="noopener noreferrer">
              <img
                src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                alt="LinkedIn"
                style={{ width: '32px', height: '32px' }}
              />
            </a>
            <a href='https://x.com/DivyanshuDC2' target="_blank" rel="noopener noreferrer">
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
                alt="Twitter/X"
                style={{ width: '32px', height: '32px' }}
              />
            </a>
            <a href="mailto:chaudharydivyanshu766@gmail.com">
              <img
                src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
                alt="Email"
                style={{ width: '32px', height: '32px' }}
              />
            </a>
          </div>
    </div>
  </div>
</div>
  )
}

export default Profile