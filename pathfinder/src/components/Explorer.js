// src/components/Explorer.js
import { useState } from 'react';
import './Explorer.css';

// Sample course data (you'll add more later)
const COURSES = [
  {
    id: 1,
    name: 'BSc Computer Science',
    field: 'Computer Science',
    type: '3-year Degree',
    aps: 30,
    duration: '3 years',
    description: 'Learn programming, algorithms, and software development.',
    jobs: [
      { title: 'Software Developer', salary: 'R25,000 - R80,000/month', location: 'Tech companies, banks, remote' },
      { title: 'Data Engineer', salary: 'R35,000 - R90,000/month', location: 'Mining, retail, finance' }
    ],
    opportunities: 'South Africa has a critical shortage of software developers.',
    unis: 'UP, UCT, Wits, UJ, UKZN, Unisa'
  },
  {
    id: 2,
    name: 'BSc Hydrology',
    field: 'Environmental Science',
    type: '3-year Degree',
    aps: 28,
    duration: '3 years',
    description: 'Study water resources, rainfall, and river systems.',
    jobs: [
      { title: 'Hydrologist', salary: 'R30,000 - R90,000/month', location: 'DWS, municipalities, mining' },
      { title: 'Water Resource Planner', salary: 'R40,000 - R100,000/month', location: 'Government, consulting' }
    ],
    opportunities: 'Water is SA\'s most critical resource challenge.',
    unis: 'UP, UKZN, Rhodes, Free State'
  },
  {
    id: 3,
    name: 'LLB Law',
    field: 'Law',
    type: '4-year Degree',
    aps: 33,
    duration: '4 years',
    description: 'Become an attorney or advocate in South Africa.',
    jobs: [
      { title: 'Attorney', salary: 'R25,000 - R100,000/month', location: 'Law firms, Legal Aid' },
      { title: 'Corporate Legal Advisor', salary: 'R50,000 - R150,000/month', location: 'Banks, mining companies' }
    ],
    opportunities: 'Legal Aid SA operates in every province, including rural areas.',
    unis: 'UP, Wits, UCT, UKZN, NWU, Unisa'
  },
  {
    id: 4,
    name: 'BSc Applied Mathematics & Hydrology',
    field: 'Natural Sciences (Double Major)',
    type: '3-year Double Major',
    aps: 28,
    duration: '3 years',
    description: 'Combine maths modelling with water resource knowledge.',
    jobs: [
      { title: 'Hydraulic Modeller', salary: 'R35,000 - R95,000/month', location: 'Engineering consulting' },
      { title: 'Hydrologist', salary: 'R30,000 - R90,000/month', location: 'Dept of Water & Sanitation' }
    ],
    opportunities: 'Water consulting firms and mining companies actively recruit.',
    unis: 'UKZN, UP, Rhodes'
  },
  {
    id: 5,
    name: 'B Nursing',
    field: 'Health Sciences',
    type: '4-year Degree',
    aps: 25,
    duration: '4 years',
    description: 'Professional nursing degree registered with SANC.',
    jobs: [
      { title: 'Registered Nurse', salary: 'R18,000 - R45,000/month', location: 'Government hospitals, clinics' },
      { title: 'Nursing Manager', salary: 'R40,000 - R80,000/month', location: 'Private hospitals' }
    ],
    opportunities: 'Critical shortage - government hospitals constantly recruiting.',
    unis: 'UP, UKZN, UWC, Wits, NWU'
  },
  {
    id: 6,
    name: 'BCom Accounting',
    field: 'Commerce & Finance',
    type: '3-year Degree',
    aps: 28,
    duration: '3 years (+CTA for CA)',
    description: 'Foundation for becoming a Chartered Accountant.',
    jobs: [
      { title: 'Chartered Accountant', salary: 'R60,000 - R200,000/month', location: 'Big 4 firms, banks' },
      { title: 'Financial Manager', salary: 'R45,000 - R130,000/month', location: 'All industries' }
    ],
    opportunities: 'Every company must keep audited financial records.',
    unis: 'UP, UCT, Wits, Stellenbosch, UKZN, UJ'
  }
];

function Explorer({ onViewCourse, onBack }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeField, setActiveField] = useState('All');

  // Get unique fields for filter buttons
  const fields = ['All', ...new Set(COURSES.map(c => c.field))];

  // Filter courses based on search and field
  const filteredCourses = COURSES.filter(course => {
    const matchesSearch = searchTerm === '' || 
      course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.field.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesField = activeField === 'All' || course.field === activeField;
    return matchesSearch && matchesField;
  });

  return (
    <div className="explorer-container">
      {/* Navigation */}
      <div className="explorer-nav">
        <button className="back-btn" onClick={onBack}>← Home</button>
        <span className="explorer-logo">PathFinder</span>
        <span className="explorer-label">Course Explorer</span>
      </div>

      <div className="explorer-content">
        {/* Search Bar */}
        <div className="search-container">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            className="search-input"
            placeholder="Search courses... e.g., 'Hydrology', 'Law', 'Computer Science'"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Filter Buttons */}
        <div className="filter-container">
          {fields.map(field => (
            <button
              key={field}
              className={`filter-btn ${activeField === field ? 'active' : ''}`}
              onClick={() => setActiveField(field)}
            >
              {field}
            </button>
          ))}
        </div>

        {/* Results Count */}
        <div className="results-count">
          Showing {filteredCourses.length} course{filteredCourses.length !== 1 ? 's' : ''}
        </div>

        {/* Courses Grid */}
        <div className="courses-grid">
          {filteredCourses.map(course => (
            <div
              key={course.id}
              className="course-card"
              onClick={() => onViewCourse(course)}
            >
              <div className="course-field">{course.field}</div>
              <h3 className="course-name">{course.name}</h3>
              <div className="course-type">
                {course.type} · {course.duration} · APS {course.aps}+
              </div>
            </div>
          ))}
        </div>

        {/* Show message if no results */}
        {filteredCourses.length === 0 && (
          <div className="no-results">
            <p>No courses found matching "{searchTerm}"</p>
            <button onClick={() => setSearchTerm('')}>Clear search</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Explorer;