import React from 'react'

const aboutSection = {padding: '50px 0'}

const About = () => {
  return (
    <>
    {/* About Us Section */}
    <section className="text-center bg-info text-white" style={aboutSection}>
      <div className="container">
        <h1>About URL Shortener</h1>
        <p className="lead">
          We're here to make sharing links easier and faster than ever.
        </p>
      </div>
    </section>

      {/* About Details */}
  <section className="py-5 container">
    <div className="container">
      <h2 className="text-center mb-4 text-info">Our Story</h2>
      <p className="text-center">
        The URL Shortener team started with a simple goal: to streamline the way
        people share and manage links. Our tool not only shortens URLs but also
        allows you to track, manage, and customize your links. With a focus on
        simplicity, speed, and user-friendliness, we aim to provide the best URL
        shortening experience.
      </p>
      <p className="text-center">
        Whether you're a business looking to brand your links or just someone
        who wants a neat and tidy URL, our service is designed to meet your
        needs.
      </p>
      <h2 className="text-center mb-4 text-info">Our Mission</h2>
      <p className="text-center">
        Our mission is to provide a fast, reliable, and user-friendly platform
        for shortening, tracking, and managing URLs that help users boost their
        online presence and efficiency.
      </p>
    </div>
  </section>
  </>
  )
}

export default About