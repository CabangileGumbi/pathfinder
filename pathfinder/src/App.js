// src/App.js
import { useState } from 'react';  // Import useState hook
import './App.css';
import Home from './components/Home';
import Quiz from './components/Quiz';
import Results from './components/Results';
import AllInstitutions from './components/AllInstitutions';
import InstitutionCourses from './components/InstitutionCourses';

function App() {
  // This STATE decides which screen to show
  // 'currentPage' can be: 'home', 'quiz', 'results', 'explorer', 'courses'
  const [currentPage, setCurrentPage] = useState('home');
  
  // This STATE stores the user's quiz answers
  const [quizAnswers, setQuizAnswers] = useState({});
  
  // This STATE stores the currently selected institution
  const [selectedInstitution, setSelectedInstitution] = useState(null);

  // This function changes the page
  const navigateTo = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);  // Scroll to top
  };

  // This function saves quiz answers and shows results
  const submitQuiz = (answers) => {
    setQuizAnswers(answers);
    setCurrentPage('results');
  };

  // This function opens the selected institution's course list
  const viewInstitutionCourses = (institution) => {
    setSelectedInstitution(institution);
    setCurrentPage('courses');
  };

  // Decide which screen to show based on currentPage
  let screenToShow;
  
  if (currentPage === 'home') {
    screenToShow = <Home onStartQuiz={() => navigateTo('quiz')} 
                          onBrowseCourses={() => navigateTo('explorer')} />;
  } else if (currentPage === 'quiz') {
    screenToShow = <Quiz onSubmit={submitQuiz} onBack={() => navigateTo('home')} />;
  } else if (currentPage === 'results') {
    screenToShow = <Results answers={quizAnswers} 
                            onRetakeQuiz={() => navigateTo('quiz')} />;
  } else if (currentPage === 'explorer') {
    screenToShow = <AllInstitutions onSelectInstitution={viewInstitutionCourses} 
                             onBack={() => navigateTo('home')} />;
  } else if (currentPage === 'courses') {
    screenToShow = selectedInstitution ? (
      <InstitutionCourses institution={selectedInstitution} onBack={() => navigateTo('explorer')} />
    ) : (
      <AllInstitutions onSelectInstitution={viewInstitutionCourses} onBack={() => navigateTo('home')} />
    );
  }

  return (
    <div className="app">
      {screenToShow}
    </div>
  );
}

export default App;