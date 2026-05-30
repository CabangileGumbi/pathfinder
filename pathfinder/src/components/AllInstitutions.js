import { useState } from 'react';
import SiteLogo from './SiteLogo';
import { ALL_INSTITUTIONS } from '../Data/AllInstitutions.js';
import './AllInstitutions.css';

function AllInstitutions({ onSelectInstitution, onBack }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  if (!ALL_INSTITUTIONS) {
    console.error('ALL_INSTITUTIONS is undefined. Check import path and export in ../Data/AllInstitutions.js');
  }

  // Combine all institutions for search
  const allInstitutions = [
    ...((ALL_INSTITUTIONS && ALL_INSTITUTIONS.universities) || []),
    ...((ALL_INSTITUTIONS && ALL_INSTITUTIONS.universitiesOfTechnology) || []),
    ...((ALL_INSTITUTIONS && ALL_INSTITUTIONS.distanceLearning) || []),
    ...((ALL_INSTITUTIONS && ALL_INSTITUTIONS.tvetColleges) || [])
  ];

  // Filter institutions
  const filteredInstitutions = allInstitutions.filter(inst => {
    const matchesSearch = searchTerm === '' || 
      inst.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inst.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    let matchesCategory = true;
    if (activeCategory === 'universities') {
      matchesCategory = inst.type === 'Traditional University';
    } else if (activeCategory === 'tech') {
      matchesCategory = inst.type === 'University of Technology';
    } else if (activeCategory === 'distance') {
      matchesCategory = inst.type === 'Distance Learning';
    } else if (activeCategory === 'tvet') {
      matchesCategory = inst.type === 'TVET College';
    }
    
    return matchesSearch && matchesCategory;
  });

  // Group for display when not searching
  const getInstitutionsByType = (type) => {
    if (searchTerm) return [];
    return allInstitutions.filter(inst => inst.type === type);
  };

  return (
    <div className="all-institutions">
      {/* Header */}
      <div className="inst-header">
        <SiteLogo size="small" />
        <button className="back-home-btn" onClick={onBack}>← Back to Home</button>
        <h1>SOUTH AFRICAN UNIVERSITIES & COLLEGES</h1>
        <p>List of courses offered at all public universities and TVET colleges</p>
      </div>

      {/* Search Bar */}
      <div className="inst-search">
        <input
          type="text"
          placeholder="Search for a university or college..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        {searchTerm && (
          <button className="clear-search" onClick={() => setSearchTerm('')}>Clear</button>
        )}
      </div>

      {/* Category Filters */}
      <div className="inst-filters">
        <button className={activeCategory === 'all' ? 'active' : ''} onClick={() => setActiveCategory('all')}>
          All Institutions
        </button>
        <button className={activeCategory === 'universities' ? 'active' : ''} onClick={() => setActiveCategory('universities')}>
          🎓 Traditional Universities
        </button>
        <button className={activeCategory === 'tech' ? 'active' : ''} onClick={() => setActiveCategory('tech')}>
          🔧 Universities of Technology
        </button>
        <button className={activeCategory === 'distance' ? 'active' : ''} onClick={() => setActiveCategory('distance')}>
          💻 Distance Learning
        </button>
        <button className={activeCategory === 'tvet' ? 'active' : ''} onClick={() => setActiveCategory('tvet')}>
          🏫 TVET Colleges
        </button>
      </div>

      {/* Results Count */}
      <div className="inst-count">
        Found {filteredInstitutions.length} institution{filteredInstitutions.length !== 1 ? 's' : ''}
      </div>

      {/* Display Institutions */}
      {searchTerm || activeCategory !== 'all' ? (
        // Flat view when searching or filtered
        <div className="inst-grid">
          {filteredInstitutions.map(inst => (
            <div key={inst.id} className="inst-card" onClick={() => onSelectInstitution(inst)}>
              <div className="inst-card-name">{inst.name}</div>
              <div className="inst-card-location">📍 {inst.location}</div>
              <div className="inst-card-type">{inst.type}</div>
            </div>
          ))}
          {filteredInstitutions.length === 0 && (
            <div className="no-results">No institutions found matching "{searchTerm}"</div>
          )}
        </div>
      ) : (
        // Grouped view by category
        <div className="inst-groups">
          {/* Traditional Universities */}
          <div className="inst-group">
            <h2 className="group-title">🎓 TRADITIONAL UNIVERSITIES</h2>
            <div className="inst-grid">
              {getInstitutionsByType('Traditional University').map(inst => (
                <div key={inst.id} className="inst-card" onClick={() => onSelectInstitution(inst)}>
                  <div className="inst-card-name">{inst.name}</div>
                  <div className="inst-card-location">📍 {inst.location}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Universities of Technology */}
          <div className="inst-group">
            <h2 className="group-title">🔧 UNIVERSITIES OF TECHNOLOGY</h2>
            <div className="inst-grid">
              {getInstitutionsByType('University of Technology').map(inst => (
                <div key={inst.id} className="inst-card" onClick={() => onSelectInstitution(inst)}>
                  <div className="inst-card-name">{inst.name}</div>
                  <div className="inst-card-location">📍 {inst.location}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Distance Learning */}
          <div className="inst-group">
            <h2 className="group-title">💻 DISTANCE LEARNING</h2>
            <div className="inst-grid">
              {getInstitutionsByType('Distance Learning').map(inst => (
                <div key={inst.id} className="inst-card" onClick={() => onSelectInstitution(inst)}>
                  <div className="inst-card-name">{inst.name}</div>
                  <div className="inst-card-location">📍 {inst.location}</div>
                </div>
              ))}
            </div>
          </div>

          {/* TVET Colleges */}
          <div className="inst-group">
            <h2 className="group-title">🏫 TVET COLLEGES</h2>
            <div className="inst-grid">
              {getInstitutionsByType('TVET College').map(inst => (
                <div key={inst.id} className="inst-card" onClick={() => onSelectInstitution(inst)}>
                  <div className="inst-card-name">{inst.name}</div>
                  <div className="inst-card-location">📍 {inst.location}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AllInstitutions;
