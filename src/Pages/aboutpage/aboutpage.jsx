import React from 'react';
import './aboutpage.scss'; // Import CSS styles for the page

const AboutPage = () => {
  return (
    <div className="about-container">
      {/* Header Section */}
      <div className="about-header">
        <h1>About Skillbridge</h1>
        <p>
          Welcome to our platform, where we are passionate about empowering individuals 
          to master the world of design and development. We offer a wide range of online 
          courses designed to equip learners with the skills and knowledge needed to 
          succeed in the ever-evolving digital landscape.
        </p>
      </div>

      {/* Achievements Section */}
      <div className="achievements">
        <h2>Achievements</h2>
        <p>
          Our commitment to excellence has led us to achieve significant milestones 
          along our journey. Here are some of our notable achievements:
        </p>
        <div className="achievement-cards">
          <div className="card">
            <h3>Trusted by Thousands</h3>
            <p>We have successfully served thousands of students, helping them unlock their potential and achieve their career goals.</p>
          </div>
          <div className="card">
            <h3>Award-Winning Courses</h3>
            <p>Our courses have received recognition and accolades in the industry for their quality, depth of content, and effective teaching methodologies.</p>
          </div>
          <div className="card">
            <h3>Positive Student Feedback</h3>
            <p>We take pride in the positive feedback we receive from our students, who appreciate the practicality and relevance of our course materials.</p>
          </div>
          <div className="card">
            <h3>Industry Partnerships</h3>
            <p>We have established strong partnerships with industry leaders, enabling us to provide our students with access to the latest tools and technologies.</p>
          </div>
        </div>
      </div>

      {/* Goals Section */}
      <div className="goals">
        <h2>Our Goals</h2>
        <p>
          At SkillBridge, our goal is to empower individuals from all backgrounds to thrive 
          in the world of design and development. We believe that education should be 
          accessible and transformative, enabling learners to pursue their passions and 
          make a meaningful impact.
        </p>
        <div className="goal-cards">
          <div className="card">
            <h3>Provide Practical Skills</h3>
            <p>We focus on delivering practical skills that are relevant to the current industry demands.</p>
          </div>
          <div className="card">
            <h3>Foster Creative Problem-Solving</h3>
            <p>We encourage creative thinking and problem-solving abilities, allowing our students to tackle real-world challenges.</p>
          </div>
          <div className="card">
            <h3>Promote Collaboration and Community</h3>
            <p>Our platform fosters a supportive and inclusive community where learners can connect, share insights, and grow together.</p>
          </div>
          <div className="card">
            <h3>Stay Ahead of the Curve</h3>
            <p>We strive to stay at the forefront of industry trends, ensuring our students receive the latest knowledge and skills.</p>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="cta-section">
        <h2>Together, let’s shape the future of digital innovation</h2>
        <p>Join us on this exciting learning journey and unlock your potential in design and development.</p>
        <button className="join-now">Join Now</button>
      </div>
    </div>
  );
};

export default AboutPage;
