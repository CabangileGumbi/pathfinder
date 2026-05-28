// src/components/CourseDetail.js
import './CourseDetail.css';

function CourseDetail({ course, onBack }) {
  if (!course) {
    return (
      <div className="detail-container">
        <div className="detail-nav">
          <button className="back-btn" onClick={onBack}>← Back</button>
        </div>
        <div className="detail-error">No course selected</div>
      </div>
    );
  }

  return (
    <div className="detail-container">
      {/* Navigation */}
      <div className="detail-nav">
        <button className="back-btn" onClick={onBack}>← Back to Courses</button>
        <span className="detail-logo">PathFinder</span>
        <span className="detail-label">Course Details</span>
      </div>

      <div className="detail-content">
        {/* Header */}
        <div className="detail-header">
          <div className="detail-field">{course.field}</div>
          <h1 className="detail-title">{course.name}</h1>
          <p className="detail-description">{course.description}</p>
          <div className="detail-badges">
            <span className="badge badge-green">{course.type}</span>
            <span className="badge badge-purple">{course.duration}</span>
            <span className="badge badge-orange">APS {course.aps}+</span>
          </div>
        </div>

        {/* Jobs Section */}
        <div className="detail-section">
          <h3>💼 Jobs you can get</h3>
          {course.jobs && course.jobs.map((job, index) => (
            <div key={index} className="job-item">
              <div className="job-dot"></div>
              <div className="job-text">
                <h4>{job.title}</h4>
                <p><strong>Salary:</strong> {job.salary}</p>
                <p><strong>Where:</strong> {job.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Opportunities Section */}
        <div className="detail-section">
          <h3>🌍 Job opportunities in South Africa</h3>
          <p>{course.opportunities}</p>
        </div>

        {/* Alternative Paths Section */}
        <div className="detail-section">
          <h3>🔄 What if you can't find a job directly?</h3>
          <div className="alternative-item">
            <strong>Plan B:</strong> Look for learnerships in your field - many companies train graduates on the job.
          </div>
          <div className="alternative-item">
            <strong>Plan C:</strong> Consider a postgraduate certificate (PGCE) to teach if you enjoy education.
          </div>
          <div className="alternative-item">
            <strong>Plan D:</strong> Add short courses (coding, data analysis) to make your degree more versatile.
          </div>
        </div>

        {/* Locations Section */}
        <div className="detail-section">
          <h3>📍 Where are opportunities based?</h3>
          <div className="locations-grid">
            <div className="location-card">
              <div className="location-icon">🏙</div>
              <div className="location-name">Major Cities</div>
              <div className="location-desc">Most jobs in Jhb, CT, Durban, Pretoria</div>
            </div>
            <div className="location-card">
              <div className="location-icon">🏘</div>
              <div className="location-name">Rural Areas</div>
              <div className="location-desc">Government posts, clinics, water projects</div>
            </div>
            <div className="location-card">
              <div className="location-icon">🌐</div>
              <div className="location-name">Remote</div>
              <div className="location-desc">Possible for tech and data roles</div>
            </div>
          </div>
        </div>

        {/* Where to Study */}
        <div className="detail-section">
          <h3>🏛 Where to study in South Africa</h3>
          <p>{course.unis}</p>
        </div>

        {/* Next Steps */}
        <div className="detail-section next-steps">
          <h3>📞 Next Steps</h3>
          <ul>
            <li>✓ Check APS requirements for your chosen university</li>
            <li>✓ Apply for NSFAS funding if your household income is under R350k</li>
            <li>✓ Look for learnerships in your field while studying</li>
            <li>✓ Join professional bodies for networking (many have student discounts)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CourseDetail;