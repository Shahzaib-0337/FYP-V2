import React, { useState, useRef } from 'react';
import { Upload, X, Loader, AlertCircle, CheckCircle, Eye, Target } from 'lucide-react';
import './Demo.css';

interface PredictionResult {
  prediction: 'Benign' | 'Malignant';
  confidence: number;
  roi_image_url: string;
  heatmap_url: string;
}

const Demo: React.FC = () => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<PredictionResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = (file: File) => {
    // Validate file type
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/tiff'];
    if (!allowedTypes.includes(file.type)) {
      setError('Please upload a valid image file (JPEG, PNG, or TIFF)');
      return;
    }

    // Validate file size (max 10MB)
    if (file.size > 10 * 1024 * 1024) {
      setError('File size must be less than 10MB');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      setUploadedImage(e.target?.result as string);
      setError(null);
      setResult(null);
    };
    reader.readAsDataURL(file);
  };

  const handleAnalyze = async () => {
    if (!uploadedImage) return;

    setIsLoading(true);
    setError(null);
    setResult(null);

    try {
      // Simulate API call - replace with actual backend integration
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      // Mock result for demonstration
      const mockResult: PredictionResult = {
        prediction: Math.random() > 0.5 ? 'Malignant' : 'Benign',
        confidence: Math.random() * 0.3 + 0.7, // 70-100% confidence
        roi_image_url: uploadedImage, // In real implementation, this would be processed
        heatmap_url: uploadedImage // In real implementation, this would be generated
      };
      
      setResult(mockResult);
    } catch (err) {
      setError('Failed to analyze image. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setUploadedImage(null);
    setResult(null);
    setError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleBrowseClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="demo">
      {/* Upload Section */}
      <section className="section">
        <div className="container">
          <div className="demo-content">
            <div className="upload-section">
              <h2>Upload Histopathology Image</h2>
              <p className="upload-description">
                Upload a histopathology image in JPEG, PNG, or TIFF format. 
                The image will be analyzed using our hybrid AI system.
              </p>

              <div 
                className={`upload-zone ${dragActive ? 'drag-active' : ''} ${uploadedImage ? 'has-image' : ''}`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
                onClick={handleBrowseClick}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/jpeg,image/jpg,image/png,image/tiff"
                  onChange={handleFileInput}
                  style={{ display: 'none' }}
                />
                
                {uploadedImage ? (
                  <div className="uploaded-image-preview">
                    <img src={uploadedImage} alt="Uploaded" />
                    <button 
                      className="remove-image-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleReset();
                      }}
                    >
                      <X size={20} />
                    </button>
                  </div>
                ) : (
                  <div className="upload-placeholder">
                    <Upload size={48} />
                    <h3>Drag & Drop Image Here</h3>
                    <p>or click to browse files</p>
                    <div className="supported-formats">
                      <span>Supported: JPEG, PNG, TIFF</span>
                      <span>Max size: 10MB</span>
                    </div>
                  </div>
                )}
              </div>

              {error && (
                <div className="error-message">
                  <AlertCircle size={20} />
                  <span>{error}</span>
                </div>
              )}

              {uploadedImage && !result && (
                <div className="analyze-section">
                  <button 
                    className="btn btn-primary analyze-btn"
                    onClick={handleAnalyze}
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Loader className="spinning" size={20} />
                        Analyzing...
                      </>
                    ) : (
                      'Analyze Image'
                    )}
                  </button>
                </div>
              )}
            </div>

            {/* Results Section */}
            {result && (
              <div className="results-section">
                <h2>Analysis Results</h2>
                
                {/* Prediction Banner */}
                <div className={`prediction-banner ${result.prediction.toLowerCase()}`}>
                  <div className="prediction-content">
                    <div className="prediction-icon">
                      {result.prediction === 'Malignant' ? (
                        <AlertCircle size={32} />
                      ) : (
                        <CheckCircle size={32} />
                      )}
                    </div>
                    <div className="prediction-text">
                      <h3>{result.prediction}</h3>
                      <p>Confidence: {(result.confidence * 100).toFixed(1)}%</p>
                    </div>
                  </div>
                </div>

                {/* Visualizations */}
                <div className="visualizations">
                  <div className="visualization-card">
                    <h4>
                      <Target size={20} />
                      Original Image with ROI
                    </h4>
                    <div className="image-container">
                      <img src={result.roi_image_url} alt="ROI Detection" />
                    </div>
                    <p>Region of Interest detected by YOLOv8</p>
                  </div>

                  <div className="visualization-card">
                    <h4>
                      <Eye size={20} />
                      Explainability Heatmap
                    </h4>
                    <div className="image-container">
                      <img src={result.heatmap_url} alt="Heatmap" />
                    </div>
                    <p>Grad-CAM visualization showing AI attention</p>
                  </div>
                </div>


                <button 
                  className="btn btn-outline reset-btn"
                  onClick={handleReset}
                >
                  Upload Another Image
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Instructions Section */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="text-center mb-5">How to Use the Demo</h2>
          <div className="instructions-grid">
            <div className="instruction-step">
              <div className="step-number">1</div>
              <h4>Upload Image</h4>
              <p>Upload a histopathology image using drag & drop or click to browse</p>
            </div>
            <div className="instruction-step">
              <div className="step-number">2</div>
              <h4>AI Analysis</h4>
              <p>Our hybrid AI system processes the image using YOLOv8, ResNet50, ViT, and XGBoost</p>
            </div>
            <div className="instruction-step">
              <div className="step-number">3</div>
              <h4>View Results</h4>
              <p>Examine the prediction, confidence score, and explainability visualizations</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Demo;
