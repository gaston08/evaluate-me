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

  const changePage = page => {
    setCurrentIdx(page);
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
                  onClick={() => changePage(i)}
                >
                  {i + 1}
                </div>
              );
            })
          }
        </div>
        <div className={styles.question}>
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
    question: `Determine cuál de los siguientes fragmentos es un argumento. Seleccione una opción y escriba el número en el
    talón de respuestas.`,
    options: [
      `La piel de los reptiles es impermeable, delgada y cubierta de escamas. Y eso les permite vivir en tierra firme.`,
      `Los lagartos mudan su piel al crecer. Se la comen luego para obtener calcio y otros nutrientes.`,
      `El yacaré tiene hábitos nocturnos o diurnos. Se sigue que tiene hábitos nocturnos, dado que no tiene hábitos diurnos.`,
      `Si el Mar Argentino ocupa un tercio del territorio, entonces es la zona ecológica más grande del país.`,
      `A`
    ]
  },
  {
    question: `What's next?`,
    options: ['E', 'F', 'G', 'H']
  },
  {
    question: `What's the big deal?`,
    options: ['A', 'B', 'C', 'D']
  },
  {
    question: `What's next?`,
    options: ['E', 'F', 'G', 'H']
  },
  {
    question: `What's the big deal?`,
    options: ['A', 'B', 'C', 'D']
  },
  {
    question: `What's next?`,
    options: ['E', 'F', 'G', 'H']
  },
  {
    question: `What's the big deal?`,
    options: ['A', 'B', 'C', 'D']
  },
  {
    question: `What's next?`,
    options: ['E', 'F', 'G', 'H']
  },
  {
    question: `What's the big deal?`,
    options: ['A', 'B', 'C', 'D']
  },
  {
    question: `What's next?`,
    options: ['E', 'F', 'G', 'H','E', 'F', 'G', 'H']
  },
]