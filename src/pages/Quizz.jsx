import React, { useState } from 'react';
import styles from './Quizz.module.css';
import bgImage from 'src/assets/bg.jpg';

export default function Quizz(props) {

  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState([]);

  const chooseOption = i => {
    setAnswers(prev => {
      let arr = [...prev];
      arr[currentIdx] = i;
      return arr;
    });
    if (currentIdx !== questions.length - 1) {
      nextPage();
    }
  }

  const nextPage = () => {
    setCurrentIdx(prev => prev + 1);
  }

  const prevPage = () => {
    setCurrentIdx(prev => prev - 1);
  }

  return (
    <div 
      className={styles.root}
      style={{
        backgroundImage: `url(${bgImage})`
      }}
    >
      <div className={styles.box}>
        <>
          {
            currentIdx !== 0 ?
            (
              <div className={styles.previousBtn}>
                <button onClick={prevPage}>
                  Previous
                </button>
              </div>
            ) : (null)
          }
        </>
        <>
          {
            currentIdx !== (questions.length - 1) ?
            (
              <div className={styles.nextBtn}>
                <button onClick={nextPage}>
                  Next
                </button>
              </div>
            ) : (null)
          }
        </>
        <div>Country Quizz</div>
        <div className={styles.questionNumber}>
          {
            questions.map((question, i) => {
              return (
                <div 
                  key={i}
                  className={`${i === currentIdx ? styles.currentPage : ''}`}
                >
                  {i + 1}
                </div>
              );
            })
          }
        </div>
        <div>
          {questions[currentIdx].question}
        </div>
        <div className={styles.options}>
          {
            questions[currentIdx].options.map((option, i) => {
              return (
                <div 
                  key={i}
                  className={
                    `${answers[currentIdx] === i ? styles.selected : ''}`
                  }
                >
                  <button
                    onClick={() => chooseOption(i)}
                  >
                    {option}
                  </button>
                </div>
              );
            })
          }
        </div>
      </div>
    </div>
  );
}

const questions = [
  {
    question: `1What's the big deal?`,
    options: ['A', 'B', 'C', 'D']
  },
  {
    question: `2What's next?`,
    options: ['E', 'F', 'G', 'H']
  },
  {
    question: `3What's the big deal?`,
    options: ['A', 'B', 'C', 'D']
  },
  {
    question: `4What's next?`,
    options: ['E', 'F', 'G', 'H']
  },
  {
    question: `5What's the big deal?`,
    options: ['A', 'B', 'C', 'D']
  },
  {
    question: `6What's next?`,
    options: ['E', 'F', 'G', 'H']
  },
]