import React from 'react';
import { Brain, Target, Zap, Database, Code, Globe, CheckCircle } from 'lucide-react';
import './Project.css';

const Project: React.FC = () => {
  return (
    <div className="project">
      {/* Methodology Section */}
      <section className="section">
        <div className="container">
          <h2 className="text-center mb-5">Hybrid AI Architecture</h2>
          <div className="methodology-content">
            <div className="methodology-flow">
              <div className="flow-step">
                <div className="step-icon">
                  <Target size={24} />
                </div>
                <div className="step-content">
                  <h4>Input Image</h4>
                  <p>Histopathology image preprocessing and normalization</p>
                </div>
              </div>
              
              <div className="flow-arrow">→</div>
              
              <div className="flow-step">
                <div className="step-icon">
                  <Brain size={24} />
                </div>
                <div className="step-content">
                  <h4>YOLOv8 Detection</h4>
                  <p>Region of Interest (ROI) detection and localization using state-of-the-art object detection</p>
                </div>
              </div>
              
              <div className="flow-arrow">→</div>
              
              <div className="flow-step">
                <div className="step-icon">
                  <Zap size={24} />
                </div>
                <div className="step-content">
                  <h4>Feature Extraction</h4>
                  <p>Dual-path feature extraction using ResNet50 and Vision Transformer (ViT)</p>
                </div>
              </div>
              
              <div className="flow-arrow">→</div>
              
              <div className="flow-step">
                <div className="step-icon">
                  <CheckCircle size={24} />
                </div>
                <div className="step-content">
                  <h4>XGBoost Classification</h4>
                  <p>Final benign/malignant classification with confidence scores and uncertainty quantification</p>
                </div>
              </div>
            </div>
            
            <div className="methodology-description">
              <h3>Why This Hybrid Approach?</h3>
              <p>
                Our hybrid architecture combines the strengths of multiple AI paradigms to achieve 
                superior performance in breast cancer detection. YOLOv8 provides precise ROI detection, 
                while ResNet50 and Vision Transformer offer complementary feature extraction capabilities. 
                XGBoost serves as the final classifier, leveraging the extracted features for robust 
                and interpretable classification.
              </p>
              <p>
                This approach addresses the limitations of single-model systems by providing redundancy, 
                improved generalization, and enhanced interpretability through multiple visualization 
                techniques including Grad-CAM and attention maps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="text-center mb-5">Technical Specifications</h2>
          <div className="specs-grid">
            <div className="spec-card">
              <h3>Datasets Used</h3>
              <div className="spec-list">
                <div className="spec-item">
                  <Database size={20} />
                  <div>
                    <strong>BreakHis</strong>
                    <p>7,909 histopathology images across 4 magnification levels</p>
                  </div>
                </div>
                <div className="spec-item">
                  <Database size={20} />
                  <div>
                    <strong>PCam</strong>
                    <p>327,680 patches from histopathology slides</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="spec-card">
              <h3>AI Models</h3>
              <div className="spec-list">
                <div className="spec-item">
                  <Brain size={20} />
                  <div>
                    <strong>YOLOv8</strong>
                    <p>Object detection for ROI localization</p>
                  </div>
                </div>
                <div className="spec-item">
                  <Brain size={20} />
                  <div>
                    <strong>ResNet50</strong>
                    <p>Convolutional feature extraction</p>
                  </div>
                </div>
                <div className="spec-item">
                  <Brain size={20} />
                  <div>
                    <strong>Vision Transformer</strong>
                    <p>Attention-based feature learning</p>
                  </div>
                </div>
                <div className="spec-item">
                  <Brain size={20} />
                  <div>
                    <strong>XGBoost</strong>
                    <p>Gradient boosting classification</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="spec-card">
              <h3>Tech Stack</h3>
              <div className="spec-list">
                <div className="spec-item">
                  <Code size={20} />
                  <div>
                    <strong>Backend</strong>
                    <p>Python, TensorFlow/PyTorch, Flask/FastAPI</p>
                  </div>
                </div>
                <div className="spec-item">
                  <Code size={20} />
                  <div>
                    <strong>Frontend</strong>
                    <p>React.js, TypeScript, CSS3</p>
                  </div>
                </div>
                <div className="spec-item">
                  <Code size={20} />
                  <div>
                    <strong>Deployment</strong>
                    <p>Docker, Cloud platforms</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section">
        <div className="container">
          <h2 className="text-center mb-5">Project Timeline</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker fyp1">FYP-I</div>
              <div className="timeline-content">
                <h4>Phase 1: Research & Development</h4>
                <p className="timeline-date">August 2024 - December 2024</p>
                <ul>
                  <li>Literature review and dataset analysis</li>
                  <li>Model architecture design and implementation</li>
                  <li>Initial training and validation</li>
                  <li>Web application development</li>
                </ul>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-marker fyp2">FYP-II</div>
              <div className="timeline-content">
                <h4>Phase 2: Optimization & Deployment</h4>
                <p className="timeline-date">January 2025 - May 2025</p>
                <ul>
                  <li>Model optimization and fine-tuning</li>
                  <li>Comprehensive testing and validation</li>
                  <li>Explainability analysis and visualization</li>
                  <li>Final deployment and documentation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="text-center mb-5">Expected Performance Metrics</h2>
          <div className="metrics-grid">
            <div className="metric-card">
              <div className="metric-value">95%+</div>
              <div className="metric-label">Accuracy</div>
            </div>
            <div className="metric-card">
              <div className="metric-value">93%+</div>
              <div className="metric-label">Sensitivity</div>
            </div>
            <div className="metric-card">
              <div className="metric-value">97%+</div>
              <div className="metric-label">Specificity</div>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Highlights */}
      <section className="section">
        <div className="container">
          <h2 className="text-center mb-5">Innovation Highlights</h2>
          <div className="innovation-grid">
            <div className="innovation-item">
              <div className="innovation-icon">
                <Brain size={32} />
              </div>
              <h4>Hybrid Architecture</h4>
              <p>Novel combination of object detection, CNN, and Transformer models for comprehensive analysis</p>
            </div>
            <div className="innovation-item">
              <div className="innovation-icon">
                <Target size={32} />
              </div>
              <h4>Explainable AI</h4>
              <p>Advanced visualization techniques providing transparent decision-making insights</p>
            </div>
            <div className="innovation-item">
              <div className="innovation-icon">
                <Globe size={32} />
              </div>
              <h4>Clinical Integration</h4>
              <p>Web-based prototype designed for seamless integration into clinical workflows</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
