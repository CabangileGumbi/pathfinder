// src/components/Quiz.js
import { useState } from 'react';
import './Quiz.css';

// This is ALL our quiz questions
const QUESTIONS = [
  {
    id: 'subjects',
    text: 'Which subjects are you doing or did you do at school?',
    hint: 'Select all that apply.',
    type: 'multi',  // multi = can select multiple answers
    options: [
      'Mathematics', 'Physical Sciences', 'Life Sciences', 'Geography',
      'History', 'Accounting', 'Business Studies', 'Information Technology'
    ]
  },
  {
    id: 'enjoy',
    text: 'Which subject do you enjoy the most?',
    hint: 'Choose one.',
    type: 'single',  // single = pick only one
    options: [
      'Mathematics', 'Physical Sciences', 'Life Sciences', 'Geography',
      'History', 'Accounting', 'Information Technology'
    ]
  },
  {
    id: 'skills',
    text: 'What skills do you want to develop?',
    hint: 'Select all that apply.',
    type: 'multi',
    options: [
      'Technology & coding', 'Problem-solving', 'Working with people',
      'Creativity', 'Science & research', 'Business & leadership'
    ]
  },
  {
    id: 'workstyle',
    text: 'Do you like working with people, data, or nature?',
    hint: 'Pick the one that fits you best.',
    type: 'single',
    options: ['People', 'Data', 'Machines', 'Nature']
  },
  {
    id: 'location',
    text: 'Where would you prefer to work?',
    hint: 'This helps us show realistic opportunities.',
    type: 'single',
    options: ['City', 'Rural town', 'Remote', 'Open to anything']
  }
];

function Quiz({ onSubmit, onBack }) {
  // Track which question we're on (0 = first question)
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Store all answers (starts as empty object)
  const [answers, setAnswers] = useState({});
  
  // Get the current question object
  const currentQuestion = QUESTIONS[currentIndex];
  
  // Get the user's answer for this question (if they answered it already)
  const currentAnswer = answers[currentQuestion.id] || 
    (currentQuestion.type === 'multi' ? [] : '');

  // Handle when user selects an option
  const handleSelect = (option) => {
    const newAnswers = { ...answers };  // Copy existing answers
    
    if (currentQuestion.type === 'single') {
      // For single choice: just set the answer
      newAnswers[currentQuestion.id] = option;
    } else {
      // For multi choice: toggle on/off
      let currentList = [...(newAnswers[currentQuestion.id] || [])];
      if (currentList.includes(option)) {
        // Remove if already selected
        currentList = currentList.filter(item => item !== option);
      } else {
        // Add if not selected
        currentList.push(option);
      }
      newAnswers[currentQuestion.id] = currentList;
    }
    
    setAnswers(newAnswers);
  };

  // Check if current question has been answered (for enabling Next button)
  const isAnswered = () => {
    const answer = answers[currentQuestion.id];
    if (currentQuestion.type === 'multi') {
      return answer && answer.length > 0;
    }
    return answer !== undefined && answer !== '';
  };

  // Go to next question or submit
  const handleNext = () => {
    if (currentIndex < QUESTIONS.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // Last question - submit all answers
      onSubmit(answers);
    }
  };

  // Go back to previous question
  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Calculate progress percentage
  const progress = ((currentIndex + 1) / QUESTIONS.length) * 100;

  return (
    <div className="quiz-container">
      {/* Navigation Bar */}
      <div className="quiz-nav">
        <button className="back-btn" onClick={onBack}>← Home</button>
        <span className="quiz-logo">PathFinder</span>
        <span className="quiz-label">Career Quiz</span>
      </div>

      {/* Progress Bar */}
      <div className="quiz-progress">
        <div className="progress-bar-bg">
          <div className="progress-bar-fill" style={{ width: `${progress}%` }}></div>
        </div>
        <div className="progress-text">
          Question {currentIndex + 1} of {QUESTIONS.length}
        </div>
      </div>

      {/* Question Card */}
      <div className="quiz-card">
        <div className="question-step">
          Step {currentIndex + 1} of {QUESTIONS.length}
        </div>
        <div className="question-text">{currentQuestion.text}</div>
        <div className="question-hint">{currentQuestion.hint}</div>

        {/* Options */}
        <div className="options-container">
          {currentQuestion.options.map(option => (
            <button
              key={option}
              className={`option-btn ${
                currentQuestion.type === 'multi'
                  ? (currentAnswer.includes(option) ? 'selected' : '')
                  : (currentAnswer === option ? 'selected' : '')
              }`}
              onClick={() => handleSelect(option)}
            >
              {option}
            </button>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="quiz-actions">
          <button 
            className="prev-btn" 
            onClick={handlePrevious}
            style={{ visibility: currentIndex === 0 ? 'hidden' : 'visible' }}
          >
            ← Back
          </button>
          <button 
            className="next-btn" 
            onClick={handleNext}
            disabled={!isAnswered()}
          >
            {currentIndex === QUESTIONS.length - 1 ? 'See Results →' : 'Next →'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Quiz;