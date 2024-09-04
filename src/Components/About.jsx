import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div
  className="hero min-h-screen"
  style={{
    backgroundImage: "url(https://ebz-static.s3.ap-south-1.amazonaws.com/easebuzz-static/upi-credit-cards-v1.png)",
  }}>
  <div className="hero-overlay bg-opacity-70"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w">
      <h1 className="mb-5 text-5xl text-red font-bold">Hello There</h1>
      <p className=" text-2xl text-red font-bold">
      Welcome to MUNTHI-FUSRI, your one-stop destination for quality products at unbeatable prices. We strive to make shopping easy, convenient, and enjoyable by offering a wide range of items to meet all your needs. Our mission is to provide exceptional customer service, fast shipping, and a seamless shopping experience. Shop with confidence, knowing that we’re here to help you every step of the way. Happy Shopping!
      </p>
      <Link  to={"/"}><button className="btn btn-primary mt-4">Get Started</button></Link>
    </div>
  </div>
</div>
  )
}

export default About