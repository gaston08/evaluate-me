import React from 'react';
import styles from './Quizz.module.css';
import bgImage from 'src/assets/bg.jpg';

export default function Quizz(props) {
  return (
    <div 
      className={styles.root}
      style={{
        backgroundImage: `url(${bgImage})`
      }}
    >
      <div className={styles.box}>
        <div>Title</div>
        <div className={styles.questionNumber}>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div>7</div>
          <div>8</div>
        </div>
        <div>
          What's the big deal?
        </div>
        <div>Options</div>
      </div>
    </div>
  );
}