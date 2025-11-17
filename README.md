# Automated Breast Cancer Detection - Frontend

A professional React.js frontend application for the Automated Breast Cancer Detection project developed by FAST National University students.

## 🎯 Project Overview

This is a web-based prototype that showcases a hybrid AI system for breast cancer detection from histopathology images. The system combines YOLOv8, ResNet50, Vision Transformer, and XGBoost to provide accurate and interpretable breast cancer diagnosis.

## 🚀 Features

### 🏠 Home Page
- **Hero Section**: Compelling introduction with clear call-to-action buttons
- **Project Introduction**: Detailed overview of the hybrid AI approach
- **Key Highlights**: Showcase of accuracy, explainability, and clinical integration
- **Methodology Preview**: Visual representation of the AI pipeline

### 📊 Project Details Page
- **Hybrid AI Architecture**: Detailed explanation of the multi-model approach
- **Technical Specifications**: Comprehensive tech stack and dataset information
- **Project Timeline**: Visual timeline of FYP-I and FYP-II phases
- **Performance Metrics**: Expected accuracy and performance indicators
- **Innovation Highlights**: Key differentiators and research contributions

### 🔬 Live Demo Page
- **Image Upload**: Drag-and-drop interface for histopathology images
- **AI Analysis**: Simulated processing with loading states
- **Results Display**: Clear prediction with confidence scores
- **Visualizations**: ROI detection and explainability heatmaps
- **Clinical Disclaimer**: Appropriate warnings for research use

### 👥 Team & Contact Page
- **Team Members**: Professional cards for each team member
- **Supervisor Information**: Project supervisor details
- **Contact Form**: Functional inquiry form
- **Project Information**: Complete project metadata

## 🎨 Design System

### Color Palette
- **Primary**: Navy Blue (#0F2C59) - Headers, primary buttons
- **Secondary**: Teal (#149279) - Accents, highlights
- **Neutral 1**: Light Gray (#F8F9FA) - Backgrounds
- **Neutral 2**: Dark Gray (#495057) - Body text
- **Accent**: Soft Red (#E63946) - Alerts, malignant labels

### Typography
- **Headings**: Poppins (clean, modern sans-serif)
- **Body Text**: Inter (highly readable sans-serif)

## 🛠️ Technical Stack

- **Framework**: React.js with TypeScript
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Styling**: Custom CSS with CSS Grid and Flexbox
- **Responsive Design**: Mobile-first approach

## 📱 Responsive Design

The application is fully responsive and optimized for:
- **Desktop**: Full-featured experience with multi-column layouts
- **Tablet**: Adapted layouts with touch-friendly interactions
- **Mobile**: Single-column layouts with optimized navigation

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd breast-cancer-detection
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)

## 🔧 Backend Integration

The frontend is designed to integrate with a backend API. The demo page includes:

- **Image Upload Endpoint**: `POST /api/predict`
- **Expected Response Format**:
```json
{
  "prediction": "Malignant",
  "confidence": 0.94,
  "roi_image_url": "path/to/roi/image",
  "heatmap_url": "path/to/heatmap/image"
}
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Header.css
│   ├── Footer.tsx          # Site footer
│   └── Footer.css
├── pages/
│   ├── Home.tsx            # Landing page
│   ├── Home.css
│   ├── Project.tsx         # Project details
│   ├── Project.css
│   ├── Demo.tsx            # Live demo
│   ├── Demo.css
│   ├── Team.tsx            # Team & contact
│   └── Team.css
├── App.tsx                 # Main app component
├── App.css                 # Global styles
└── index.tsx               # App entry point
```

## 🎯 Key Features Implemented

### ✅ Design Requirements
- [x] Clean & minimalist design with ample white space
- [x] Professional & scientific color palette
- [x] User-friendly UI/UX with intuitive navigation
- [x] Fully responsive across all devices
- [x] Professional typography with Google Fonts

### ✅ Page Specifications
- [x] Home/Landing page with hero section
- [x] Project Details page with methodology
- [x] Live Demo page with image upload
- [x] Team & Contact page with member cards

### ✅ Technical Requirements
- [x] React.js with TypeScript
- [x] State management for demo functionality
- [x] API integration ready
- [x] Image handling with validation
- [x] Loading states and error handling

## 🔮 Future Enhancements

- [ ] Real backend API integration
- [ ] User authentication system
- [ ] Image preprocessing options
- [ ] Advanced visualization tools
- [ ] Export functionality for results
- [ ] Multi-language support

## 📄 License

This project is developed as part of the Final Year Project at FAST National University, Karachi Campus.

## 👥 Team

- **Sohaib Ahmed** - Lead Developer & AI Engineer
- **Tehreem Fatima** - Data Scientist & ML Engineer  
- **Shahzaib Khan** - Frontend Developer & UI/UX Designer

## 📞 Contact

- **Email**: project@fastnu.edu.pk
- **Institution**: FAST National University, Karachi Campus
- **Project ID**: F25-46

---

**Disclaimer**: This is a research prototype. Not for use in actual clinical diagnosis.