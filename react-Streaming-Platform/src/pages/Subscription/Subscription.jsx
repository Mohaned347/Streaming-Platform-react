import React from "react";
import "./CSS/style.css";

const SubscriptionPage = () => {
 
  

  return (
    <>
    
      <section className="plans">
        <h1>Choose the plan that’s right for you</h1>
        <p>
          Join StreamVibe and select a flexible subscription option to suit your viewing preferences.
        </p>

        <div className="plan-cards">
          {/* كرر خطط الاشتراك */}
          {["Basic", "Standard", "Premium"].map((plan, idx) => (
            <div className="plan" key={idx}>
              <h2>{plan} Plan</h2>
              <p>Plan description here...</p>
              <div className="price">${plan === "Basic" ? "9.99" : plan === "Standard" ? "12.99" : "14.99"} <span>/month</span></div>
              <button className="btn">Start Free Trial</button>
              <button className="btn primary">Choose Plan</button>
            </div>
          ))}
        </div>
      </section>

      <section className="comparison">
        <h2>Compare our plans and find the right one for you</h2>
        <table>
          <thead>
            <tr>
              <th>Features</th>
              <th>Basic</th>
              <th>Standard <span className="badge">New</span></th>
              <th>Premium</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Price</td><td>$9.99</td><td>$12.99</td><td>$14.99</td></tr>
            <tr><td>Content</td><td>Basic selection</td><td>Wider selection</td><td>All content</td></tr>
            <tr><td>Devices</td><td>1</td><td>2</td><td>4</td></tr>
            <tr><td>Free Trial</td><td>7 days</td><td>7 days</td><td>7 days</td></tr>
            <tr><td>Cancel Anytime</td><td>Yes</td><td>Yes</td><td>Yes</td></tr>
            <tr><td>HDR</td><td>No</td><td>Yes</td><td>Yes</td></tr>
            <tr><td>Dolby Atmos</td><td>No</td><td>Yes</td><td>Yes</td></tr>
            <tr><td>Ad-Free</td><td>No</td><td>Yes (limited)</td><td>Yes (all)</td></tr>
            <tr><td>Family Sharing</td><td>No</td><td>Up to 2</td><td>Up to 4</td></tr>
          </tbody>
        </table>
      </section>

      <div className="Container">
        <h2 className="BigText">Start your free trial today!</h2>
        <p className="TextContent">
          This is a clear and concise call to action that encourages users to sign up.
        </p>
        <button className="Button1">Start a Free Trial</button>
      </div>

      <footer className="footer">
        <div className="footer-container">
          {/* روابط الفوتر */}
          {["Home", "Movies", "Shows", "Support", "Subscription"].map((section, index) => (
            <div className="footer-section" key={index}>
              <h4>{section}</h4>
              <ul>
                <li><a href="#">Link 1</a></li>
                <li><a href="#">Link 2</a></li>
              </ul>
            </div>
          ))}
          <div className="footer-section social">
            <h4>Connect With Us</h4>
            <div className="social-icons">
              <a href="#"><img src="/assets/Images/social-facebook-circular.svg" alt="Facebook" /></a>
              <a href="#"><img src="/assets/Images/icons8-x.svg" alt="X" /></a>
              <a href="#"><img src="/assets/Images/linkedin-circle.svg" alt="LinkedIn" /></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2023 streamvibe, All Rights Reserved</p>
          <div className="footer-links">
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default SubscriptionPage;
