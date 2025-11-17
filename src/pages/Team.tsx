import React, { useState } from 'react';
import { Mail, User, GraduationCap, Send, MapPin, Phone } from 'lucide-react';
import './Team.css';

interface TeamMember {
  name: string;
  registrationNumber: string;
  email: string;
  role: string;
  photo: string;
}

const Team: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const teamMembers: TeamMember[] = [
    {
      name: 'Sohaib Ahmed',
      registrationNumber: '21K-1234',
      email: 'sohaib.ahmed@nu.edu.pk',
      role: 'Lead Developer & AI Engineer',
      photo: '/api/placeholder/200/200'
    },
    {
      name: 'Tehreem Fatima',
      registrationNumber: '21K-5678',
      email: 'tehreem.fatima@nu.edu.pk',
      role: 'Data Scientist & ML Engineer',
      photo: '/api/placeholder/200/200'
    },
    {
      name: 'Shahzaib Khan',
      registrationNumber: '21K-9012',
      email: 'shahzaib.khan@nu.edu.pk',
      role: 'Frontend Developer & UI/UX Designer',
      photo: '/api/placeholder/200/200'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission - placeholder for now
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="team">
      {/* Team Members Section */}
      <section className="section">
        <div className="container">
          <h2 className="text-center mb-5">Project Team</h2>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card">
                <div className="member-photo">
                  <img 
                    src={member.photo} 
                    alt={member.name}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=149279&color=fff&size=200`;
                    }}
                  />
                </div>
                <div className="member-info">
                  <h3>{member.name}</h3>
                  <p className="member-role">{member.role}</p>
                  <p className="member-registration">
                    <GraduationCap size={16} />
                    {member.registrationNumber}
                  </p>
                  <a 
                    href={`mailto:${member.email}`}
                    className="member-email"
                  >
                    <Mail size={16} />
                    {member.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supervisor Section */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="text-center mb-5">Project Supervisor</h2>
          <div className="supervisor-card">
            <div className="supervisor-photo">
              <User size={48} />
            </div>
            <div className="supervisor-info">
              <h3>Dr. [Supervisor Name]</h3>
              <p className="supervisor-title">Assistant Professor, Computer Science</p>
              <p className="supervisor-department">FAST National University, Karachi Campus</p>
              <a 
                href="mailto:supervisor@nu.edu.pk"
                className="supervisor-email"
              >
                <Mail size={16} />
                supervisor@nu.edu.pk
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section">
        <div className="container">
          <div className="contact-content">
            <div className="contact-info">
              <h2>Get in Touch</h2>
              <p className="contact-description">
                Have questions about our project or interested in collaboration? 
                We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
              
              <div className="contact-details">
                <div className="contact-item">
                  <MapPin size={20} />
                  <div>
                    <h4>Location</h4>
                    <p>FAST National University<br />Karachi Campus, Pakistan</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <Mail size={20} />
                  <div>
                    <h4>Email</h4>
                    <p>project@fastnu.edu.pk</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <Phone size={20} />
                  <div>
                    <h4>Phone</h4>
                    <p>+92 21 111 128 128</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-container">
              <form className="contact-form" onSubmit={handleSubmit}>
                <h3>Send us a Message</h3>
                
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    placeholder="Tell us about your inquiry or collaboration interest..."
                  />
                </div>

                <button type="submit" className="btn btn-primary submit-btn">
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Project Information */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="text-center mb-5">Project Information</h2>
          <div className="project-info-grid">
            <div className="info-card">
              <h4>Project ID</h4>
              <p>F25-46</p>
            </div>
            <div className="info-card">
              <h4>Institution</h4>
              <p>FAST National University</p>
            </div>
            <div className="info-card">
              <h4>Department</h4>
              <p>Computer Science</p>
            </div>
            <div className="info-card">
              <h4>Duration</h4>
              <p>August 2024 - May 2025</p>
            </div>
            <div className="info-card">
              <h4>Domain</h4>
              <p>Artificial Intelligence & Healthcare</p>
            </div>
            <div className="info-card">
              <h4>Status</h4>
              <p>In Progress</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
