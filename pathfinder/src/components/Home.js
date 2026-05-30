// src/components/Home.js
// This is the HOME screen component

import './Home.css';
import SiteLogo from './SiteLogo';

function Home(props) {
  // This function will run when someone clicks "Start Quiz"
  const handleStartQuiz = () => {
    props.onStartQuiz();
  };

  // This function will run when someone clicks "Browse Courses"
  const handleBrowseCourses = () => {
    props.onBrowseCourses();
  };

  // This is what shows on the screen
  return (
    <div className="home-container">
      <div className="home-glow"></div>
      <div className="home-glow2"></div>

      {/* New CareerGuide Logo - Large size */}
      <div className="home-logo-wrapper">
        <SiteLogo size="large" />
      </div>

      <p className="home-headline">
        You don't need to figure out your future alone.
        <br />
        <em>Let's find careers that match who you are</em> — your subjects, your strengths, and where you want to go.
      </p>

      <div className="home-cards">
        <div className="home-card" onClick={handleStartQuiz}>
          <div className="card-icon">🧭</div>
          <div className="card-title">Find My Career Path</div>
          <div className="card-desc">
            Answer a few questions about yourself — your subjects, skills, and interests — and we'll match you to the right careers and courses.
          </div>
          <div className="card-cta">
            Start the quiz <span className="arrow">→</span>
          </div>
        </div>

        <div className="home-card accent2" onClick={handleBrowseCourses}>
          <div className="card-icon">📚</div>
          <div className="card-title">Explore Courses</div>
          <div className="card-desc">
            Already know which course you want? Browse all degrees, diplomas, and double majors — and find out exactly what jobs they lead to.
          </div>
          <div className="card-cta">
            Browse courses <span className="arrow">→</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;