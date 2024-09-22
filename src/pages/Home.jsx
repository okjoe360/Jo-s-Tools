import React from 'react'
import { Link } from "react-router-dom";

const heroSection = {padding: '50px 0'}

const Home = () => {
  return (
        <>
          <section className="text-center bg-info text-white" style={heroSection}>
            <div className="container">
              <h1 className="display-4">Shorten Your URLs Effortlessly</h1>
              <p className="lead">
                Our simple URL shortening service helps you create short, clean links in
                seconds.
              </p>
              <Link to="/shortener" className="btn btn-info btn-lg border border-light">
                Get Started
              </Link>
            </div>
          </section>

          <section className="py-5 container">
            <div className="container text-center">
              <h3>Why Choose Us?</h3>
              <div className="row mt-4">
                <div className="col-md-4">
                  <h5>Fast and Reliable</h5>
                  <p>Generate shortened URLs in seconds and share them instantly.</p>
                </div>
                <div className="col-md-4">
                  <h5>Analytics</h5>
                  <p>Track your shortened URL performance with real-time analytics.</p>
                </div>
                <div className="col-md-4">
                  <h5>Custom Links</h5>
                  <p>Create custom short links to make them easy to remember.</p>
                </div>
              </div>
            </div>
          </section>
        </>
      )
}

export default Home