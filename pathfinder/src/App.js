// src/App.js
import { useState } from 'react';  // Import useState hook
import './App.css';
import Home from './components/Home';
import Quiz from './components/Quiz';
import Results from './components/Results';
import Explorer from './components/Explorer';
import CourseDetail from './components/CourseDetail';

function App() {
  // This STATE decides which screen to show
  // 'currentPage' can be: 'home', 'quiz', 'results', 'explorer', 'detail'
  const [currentPage, setCurrentPage] = useState('home');
  
  // This STATE stores the user's quiz answers
  const [quizAnswers, setQuizAnswers] = useState({});
  
  // This STATE stores which course was clicked (for detail page)
  const [selectedCourse, setSelectedCourse] = useState(null);

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

  // This function shows course details
  const viewCourseDetail = (course) => {
    setSelectedCourse(course);
    setCurrentPage('detail');
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
                            onViewCourse={viewCourseDetail}
                            onRetakeQuiz={() => navigateTo('quiz')} />;
  } else if (currentPage === 'explorer') {
    screenToShow = <Explorer onViewCourse={viewCourseDetail} 
                             onBack={() => navigateTo('home')} />;
  } else if (currentPage === 'detail') {
    screenToShow = <CourseDetail course={selectedCourse} 
                                 onBack={() => navigateTo('explorer')} />;
  }

  return (
    <div className="app">
      {screenToShow}
    </div>
  );
}

export default App;