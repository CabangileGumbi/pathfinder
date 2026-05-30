// src/components/InstitutionCourses.js
import { useState } from 'react';
import SiteLogo from './SiteLogo';
import './InstitutionCourses.css';

function InstitutionCourses({ institution, onBack }) {
  const [searchTerm, setSearchTerm] = useState('');

  // Get courses/faculties from the institution
  const hasFaculties = institution.faculties && institution.faculties.length > 0;
  const hasProgrammes = institution.programmes && institution.programmes.length > 0;

  // Flatten all courses for search
  const getAllCourses = () => {
    if (hasFaculties) {
      return institution.faculties.flatMap(f => f.courses);
    }
    if (hasProgrammes) {
      return institution.programmes;
    }
    return [];
  };

  const allCourses = getAllCourses();
  
  // Filter courses based on search
  const filteredCourses = allCourses.filter(course =>
    searchTerm === '' || course.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="inst-courses">
      {/* Header */}
      <div className="courses-header">
        <SiteLogo size="small" />
        <button className="back-btn" onClick={onBack}>← Back to Institutions</button>
        <div className="inst-title">
          <h1>{institution.name}</h1>
        </div>
        <p className="inst-info">{institution.type} | 📍 {institution.location}</p>
        {institution.established && <p className="inst-established">Established: {institution.established}</p>}
        {institution.website && <p className="inst-website">🔗 {institution.website}</p>}
      </div>

      {/* Search */}
      <div className="courses-search">
        <input
          type="text"
          placeholder={`Search courses at ${institution.name}...`}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        {searchTerm && (
          <button className="clear-search" onClick={() => setSearchTerm('')}>Clear</button>
        )}
      </div>

      {/* Results Count */}
      <div className="courses-count">
        Found {filteredCourses.length} course{filteredCourses.length !== 1 ? 's' : ''}
      </div>

      {/* Display Courses by Faculty (if available) */}
      {hasFaculties && !searchTerm ? (
        <div className="faculties-container">
          {institution.faculties.map((faculty, idx) => (
            <div key={idx} className="faculty-section">
              <h2 className="faculty-title">{faculty.name}</h2>
              <div className="courses-grid">
                {faculty.courses.map((course, cidx) => (
                  <div key={cidx} className="course-item">{course}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        // Flat list of courses (when searching or TVET colleges)
        <div className="courses-list">
          <div className="courses-grid">
            {filteredCourses.map((course, idx) => (
              <div key={idx} className="course-item">{course}</div>
            ))}
          </div>
          {filteredCourses.length === 0 && (
            <div className="no-courses">No courses found matching "{searchTerm}"</div>
          )}
        </div>
      )}
    </div>
  );
}

export default InstitutionCourses;