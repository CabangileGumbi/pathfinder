// src/components/Results.js
import './Results.css';
import SiteLogo from './SiteLogo';

// Sample career data
const CAREERS = [
  {
    title: 'Software Developer',
    icon: '💻',
    sector: 'Tech',
    demand: 'Very High',
    description: 'Build apps and websites. One of the most in-demand jobs in SA.',
    courses: ['BSc Computer Science', 'BSc Information Technology'],
    matchKeywords: ['Technology & coding', 'Problem-solving']
  },
  {
    title: 'Data Scientist',
    icon: '📊',
    sector: 'Finance / Tech',
    demand: 'High',
    description: 'Find patterns in data to help companies make decisions.',
    courses: ['BSc Mathematical Sciences', 'BSc Statistics'],
    matchKeywords: ['Data', 'Mathematics', 'Problem-solving']
  },
  {
    title: 'Civil Engineer',
    icon: '🏗',
    sector: 'Construction',
    demand: 'High',
    description: 'Design roads, bridges, and buildings. SA needs more engineers.',
    courses: ['BEng Civil Engineering'],
    matchKeywords: ['Machines', 'Mathematics', 'Physical Sciences']
  },
  {
    title: 'Registered Nurse',
    icon: '🩺',
    sector: 'Health',
    demand: 'Very High',
    description: 'Provide patient care in clinics and hospitals nationwide.',
    courses: ['B Nursing', 'Diploma in Nursing'],
    matchKeywords: ['People', 'Health', 'Working with people']
  },
  {
    title: 'Hydrologist',
    icon: '💧',
    sector: 'Government / Mining',
    demand: 'High',
    description: 'Manage water resources - very important for South Africa.',
    courses: ['BSc Hydrology', 'BSc Environmental Science'],
    matchKeywords: ['Geography', 'Nature', 'Science & research']
  },
  {
    title: 'Chartered Accountant',
    icon: '📈',
    sector: 'Finance',
    demand: 'High',
    description: 'Audit and manage finances. Respected qualification in SA.',
    courses: ['BCom Accounting'],
    matchKeywords: ['Business & leadership', 'Data', 'Accounting']
  }
];

function Results({ answers, onViewCourse, onRetakeQuiz }) {
  
  // Calculate which careers match best
  const getMatchScore = (career) => {
    let score = 0;
    const allUserAnswers = [
      answers.enjoy || '',
      ...(answers.skills || []),
      answers.workstyle || '',
    ].join(' ').toLowerCase();
    
    career.matchKeywords.forEach(keyword => {
      if (allUserAnswers.includes(keyword.toLowerCase())) {
        score += 1;
      }
    });
    return score;
  };

  // Sort careers by match score (highest first)
  const matchedCareers = [...CAREERS]
    .map(career => ({ ...career, score: getMatchScore(career) }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 5);  // Take top 5

  // Get all unique courses from matched careers
  const recommendedCourses = [...new Set(
    matchedCareers.flatMap(career => career.courses)
  )];

  return (
    <div className="results-container">
      <SiteLogo size="small" />
      {/* Navigation */}
      <div className="results-nav">
        <button className="back-btn" onClick={onRetakeQuiz}>← Retake Quiz</button>
        <span className="results-logo">PathFinder</span>
        <span className="results-label">Your Results</span>
      </div>

      <div className="results-content">
        {/* Hero Section */}
        <div className="results-hero">
          <h2>Your Career Matches</h2>
          <p>Based on your answers, here are careers that fit your strengths.</p>
        </div>

        {/* Careers Grid */}
        <div className="careers-grid">
          {matchedCareers.map(career => (
            <div key={career.title} className="career-card">
              <div className="career-icon">{career.icon}</div>
              <h3>{career.title}</h3>
              <div className="career-meta">
                {career.sector} · {career.demand} demand
              </div>
              <p className="career-desc">{career.description}</p>
            </div>
          ))}
        </div>

        {/* Recommended Courses */}
        <div className="courses-section">
          <h3>📚 Courses You Should Consider</h3>
          <p>Click any course to see full details about jobs, locations, and requirements.</p>
          <div className="course-pills">
            {recommendedCourses.map(course => (
              <button
                key={course}
                className="course-pill"
                onClick={() => {
                  // For now, just show alert - we'll connect real data later
                  alert(`Showing details for: ${course}\n\nIn the full version, this would open a detailed page with jobs, salaries, and where to study.`);
                }}
              >
                {course}
              </button>
            ))}
          </div>
        </div>

        {/* Try Again Button */}
        <div className="retake-section">
          <button className="retake-btn" onClick={onRetakeQuiz}>
            🔄 Take the Quiz Again
          </button>
        </div>
      </div>
    </div>
  );
}

export default Results;