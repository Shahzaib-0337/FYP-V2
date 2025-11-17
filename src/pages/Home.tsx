import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Brain, Shield, Zap, Eye, Globe, CheckCircle, Users, BarChart3, Microscope, Activity, TrendingUp, ChevronLeft, ChevronRight, Database, Cpu } from 'lucide-react';
import './Home.css';

const Home: React.FC = () => {
  const [currentFeature, setCurrentFeature] = useState(0);

  // Features carousel data
  const features = [
    {
      icon: <Brain size={48} />,
      title: "Advanced AI Models",
      description: "YOLOv8, ResNet50, Vision Transformer, and XGBoost working in harmony for superior accuracy"
    },
    {
      icon: <Eye size={48} />,
      title: "Explainable AI",
      description: "Grad-CAM and attention maps provide transparent insights into AI decision-making"
    },
    {
      icon: <Zap size={48} />,
      title: "Real-time Analysis",
      description: "Get instant results in under 2 seconds with our optimized processing pipeline"
    },
    {
      icon: <Shield size={48} />,
      title: "Clinical Validation",
      description: "Tested on BreakHis and PCam datasets with proven clinical accuracy"
    }
  ];


  // Auto-rotate feature carousel
  useEffect(() => {
    const featureInterval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 4000);

    return () => {
      clearInterval(featureInterval);
    };
  }, [features.length]);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <div className="hero-pattern"></div>
        </div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-title-section">
              <h1>Automated Breast Cancer Detection</h1>
            </div>
            <div className="hero-main-content">
              <div className="hero-text">
                <p className="hero-subtitle">
                  Leveraging Hybrid AI for Accurate and Interpretable Breast Cancer Diagnosis
                </p>
                <p className="hero-description">
                  Our advanced system combines YOLOv8, ResNet50, Vision Transformer, and XGBoost 
                  to provide precise breast cancer detection from histopathology images with 
                  explainable AI visualizations.
                </p>
                <div className="hero-stats">
                  <div className="stat-item">
                    <div className="stat-number">95%+</div>
                    <div className="stat-label">Accuracy</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">&lt;2s</div>
                    <div className="stat-label">Analysis Time</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">4</div>
                    <div className="stat-label">AI Models</div>
                  </div>
                </div>
              </div>
              <div className="hero-visual">
              <div className="ai-pipeline-container">
                <div className="pipeline-header">
                  <Microscope size={24} />
                  <h3>AI Pipeline</h3>
                </div>
                <div className="ai-pipeline">
                  <div className="pipeline-step">
                    <div className="step-icon">
                      <Target size={24} />
                    </div>
                    <div className="step-content">
                      <h4>Detection</h4>
                      <p>YOLOv8 ROI Detection</p>
                    </div>
                  </div>
                  <div className="pipeline-arrow">
                    <ArrowRight size={20} />
                  </div>
                  <div className="pipeline-step">
                    <div className="step-icon">
                      <Brain size={24} />
                    </div>
                    <div className="step-content">
                      <h4>Feature Extraction</h4>
                      <p>ResNet50 & ViT</p>
                    </div>
                  </div>
                  <div className="pipeline-arrow">
                    <ArrowRight size={20} />
                  </div>
                  <div className="pipeline-step">
                    <div className="step-icon">
                      <Shield size={24} />
                    </div>
                    <div className="step-content">
                      <h4>Classification</h4>
                      <p>XGBoost Analysis</p>
                    </div>
                  </div>
                </div>
                <div className="pipeline-result">
                  <div className="result-badge benign">
                    <CheckCircle size={16} />
                    <span>Benign</span>
                  </div>
                  <div className="result-badge malignant">
                    <Activity size={16} />
                    <span>Malignant</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>


      {/* Key Highlights Section */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose Our Solution?</h2>
            <p className="section-subtitle">
              Advanced AI technology meets clinical excellence for superior breast cancer detection
            </p>
          </div>
          <div className="highlights-grid">
            <div className="highlight-card">
              <div className="highlight-icon">
                <Zap size={32} />
              </div>
              <h3>High Accuracy & Robustness</h3>
              <p>
                Our hybrid approach achieves superior performance by combining multiple AI models, 
                ensuring reliable and consistent results across diverse histopathology images.
              </p>
              <div className="highlight-metric">
                <TrendingUp size={16} />
                <span>95%+ Accuracy Rate</span>
              </div>
            </div>
            
            <div className="highlight-card">
              <div className="highlight-icon">
                <Eye size={32} />
              </div>
              <h3>Explainable AI</h3>
              <p>
                Advanced visualization techniques including Grad-CAM and attention maps provide 
                transparent insights into the AI's decision-making process for clinical validation.
              </p>
              <div className="highlight-metric">
                <BarChart3 size={16} />
                <span>Real-time Visualizations</span>
              </div>
            </div>
            
            <div className="highlight-card">
              <div className="highlight-icon">
                <Globe size={32} />
              </div>
              <h3>Web-Based Clinical Prototype</h3>
              <p>
                A fully functional web application that allows pathologists and researchers to 
                upload images and receive instant AI-powered analysis with detailed visualizations.
              </p>
              <div className="highlight-metric">
                <Users size={16} />
                <span>Clinician-Friendly Interface</span>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Features Carousel */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2>Key Features</h2>
            <p className="section-subtitle">
              Discover the powerful capabilities that make our AI system stand out
            </p>
          </div>
          <div className="features-carousel">
            <button 
              className="carousel-btn prev"
              onClick={() => setCurrentFeature((prev) => (prev - 1 + features.length) % features.length)}
            >
              <ChevronLeft size={24} />
            </button>
            <div className="feature-card">
              <div className="feature-icon">
                {features[currentFeature].icon}
              </div>
              <h3>{features[currentFeature].title}</h3>
              <p>{features[currentFeature].description}</p>
            </div>
            <button 
              className="carousel-btn next"
              onClick={() => setCurrentFeature((prev) => (prev + 1) % features.length)}
            >
              <ChevronRight size={24} />
            </button>
          </div>
          <div className="feature-dots">
            {features.map((_, index) => (
              <button
                key={index}
                className={`feature-dot ${index === currentFeature ? 'active' : ''}`}
                onClick={() => setCurrentFeature(index)}
              />
            ))}
          </div>
        </div>
      </section>


      {/* Technology Stack */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2>Technology Stack</h2>
            <p className="section-subtitle">
              Built with cutting-edge technologies for maximum performance and reliability
            </p>
          </div>
          <div className="tech-grid">
            <div className="tech-item">
              <div className="tech-icon">
                <Brain size={32} />
              </div>
              <h4>YOLOv8</h4>
              <p>Object Detection</p>
            </div>
            <div className="tech-item">
              <div className="tech-icon">
                <Cpu size={32} />
              </div>
              <h4>ResNet50</h4>
              <p>Feature Extraction</p>
            </div>
            <div className="tech-item">
              <div className="tech-icon">
                <Eye size={32} />
              </div>
              <h4>Vision Transformer</h4>
              <p>Attention Mechanism</p>
            </div>
            <div className="tech-item">
              <div className="tech-icon">
                <BarChart3 size={32} />
              </div>
              <h4>XGBoost</h4>
              <p>Classification</p>
            </div>
            <div className="tech-item">
              <div className="tech-icon">
                <Database size={32} />
              </div>
              <h4>BreakHis Dataset</h4>
              <p>Training Data</p>
            </div>
            <div className="tech-item">
              <div className="tech-icon">
                <Globe size={32} />
              </div>
              <h4>React.js</h4>
              <p>Frontend Framework</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section section-alt">
        <div className="container">
          <div className="cta-content text-center">
            <h2>Ready to Experience AI-Powered Diagnosis?</h2>
            <p className="cta-description">
              Upload a histopathology image and see our hybrid AI system in action. 
              Get instant predictions with detailed explanations and visualizations.
            </p>
            <div className="cta-buttons">
              <Link to="/project" className="btn btn-outline">
                Learn More
              </Link>
              <Link to="/demo" className="btn btn-primary">
                Try Demo
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
