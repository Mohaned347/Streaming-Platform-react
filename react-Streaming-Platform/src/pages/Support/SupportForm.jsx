const SupportForm = () => {
  return (
    <div className="form-Side">
      <form>
        <div className="name-Email-contener">
          <div className="formGroup">
            <label htmlFor="first-name">First Name:</label>
            <input type="text" id="first-name" name="first-name" placeholder="Enter First Name" required />
          </div>
          <div className="formGroup">
            <label htmlFor="last-name">Last Name:</label>
            <input type="text" id="last-name" name="last-name" placeholder="Enter Last Name" required />
          </div>
          <div className="formGroup">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Enter your Email" required />
          </div>
          <div className="formGroup">
            <label htmlFor="phone">Phone Number:</label>
            <div className="phoneContener">
              <select className="country-select">
                <option value="us">🇺🇸</option>
                <option value="de">🇩🇪</option>
                <option value="eg">🇪🇬</option>
                <option value="sd">🇸🇩</option>
              </select>
              <input type="tel" id="phone" name="phone" placeholder="Enter Phone Number" required />
            </div>
          </div>
        </div>
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="4" placeholder="Enter your Message" required></textarea>
        
        <div className="cheack-button-contener">
          <div className="checkbox-container">
            <input type="checkbox" id="terms" name="terms" required />
            <label htmlFor="terms">I agree with Terms of Use and Privacy Policy</label>
          </div>
          <button type="submit">Send Message</button>
        </div>
      </form>
    </div>
  );
};

export default SupportForm;