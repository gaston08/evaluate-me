import React, { useState } from 'react';
import styles from './Quizz.module.css';
import bgImage from 'src/assets/bg.jpg';

export default function Quizz(props) {

  const [currentIdx, setCurrentIdx] = useState(0);

  return (
    <div 
      className={styles.root}
      style={{
        backgroundImage: `url(${bgImage})`
      }}
    >
      <div className={styles.box}>
        <div>Country Quizz</div>
        <div className={styles.questionNumber}>
          {
            questions.map((question, i) => {
              return (
                <div key={i}>{i + 1}</div>
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
                <div>
                  {option}
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
    question: `What's the big deal?`,
    options: ['A', 'B', 'C', 'D']
  },
  {
    question: `What's next?`,
    options: ['A', 'B', 'C', 'D']
  },
  {
    question: `What's the big deal?`,
    options: ['A', 'B', 'C', 'D']
  },
  {
    question: `What's next?`,
    options: ['A', 'B', 'C', 'D']
  },
  {
    question: `What's the big deal?`,
    options: ['A', 'B', 'C', 'D']
  },
  {
    question: `What's next?`,
    options: ['A', 'B', 'C', 'D']
  },
]