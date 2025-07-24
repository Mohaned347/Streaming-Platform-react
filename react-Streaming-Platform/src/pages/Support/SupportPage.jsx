
import SupportForm from './SupportForm';
import FAQ from '../../Components/FAQ';
import "./CSS/Styles.css";

import svgImage from '../../assets/Sub Container.png';

const SupportPage = () => {
  return (
    <div className="app">
 
      
      <div className="contener">
        {/* Support Section */}
        <div className="support-container">
          <div className="greating-Side">
            <h1>Welcome to our support page!</h1>
            <p>We're here to help you with any problems you may be having with our product.</p>
            <div className="image">
              <img src={svgImage} alt="Support Image" />
            </div>
          </div>
          <SupportForm />
        </div>

        <FAQ />
    
      </div>
    </div>
  );
};

export default SupportPage;