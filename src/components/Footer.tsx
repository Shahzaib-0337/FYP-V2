import React from 'react';
import { Microscope, Mail, MapPin } from 'lucide-react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <Microscope className="logo-icon" />
              <div className="logo-text">
                <span className="logo-title">Automated Breast Cancer Detection</span>
                <span className="logo-subtitle">FAST National University</span>
              </div>
            </div>
            <p className="footer-description">
              A hybrid AI system leveraging YOLOv8, ResNet50, Vision Transformer, and XGBoost 
              for accurate and interpretable breast cancer diagnosis from histopathology images.
            </p>
          </div>

          <div className="footer-section">
            <h4>Project Information</h4>
            <ul className="footer-links">
              <li>Project ID: F25-46</li>
              <li>Institution: FAST-NU, Karachi Campus</li>
              <li>Domain: Computer Science / AI</li>
              <li>SDGs: Good Health, Industry & Innovation</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact</h4>
            <div className="contact-info">
              <div className="contact-item">
                <MapPin size={16} />
                <span>Karachi, Pakistan</span>
              </div>
              <div className="contact-item">
                <Mail size={16} />
                <span>project@fastnu.edu.pk</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2024 FAST National University. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
