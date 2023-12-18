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
    question: `Determine cuál de los siguientes fragmentos es un argumento. Seleccione una opción.`,
    options: [
      `La piel de los reptiles es impermeable, delgada y cubierta de escamas. Y eso les permite vivir en tierra firme.`,
      `Los lagartos mudan su piel al crecer. Se la comen luego para obtener calcio y otros nutrientes.`,
      `El yacaré tiene hábitos nocturnos o diurnos. Se sigue que tiene hábitos nocturnos, dado que no tiene hábitos diurnos.`,
      `Si el Mar Argentino ocupa un tercio del territorio, entonces es la zona ecológica más grande del país.`,
    ],
    corrects: [2],
  },
  {
    question: `Indique cuál es la conclusión del siguiente argumento. Seleccione una opción. La mayoría de los anfibios son animales nocturnos. La rana marsupial es un anfibio. Por lo tanto, es un animal nocturno.`,
    options: [
      `La mayoría de los anfibios son animales nocturnos.`,
      `La rana marsupial es un animal nocturno.`,
      `La rana marsupial es un anfibio.`,
      `Es un animal nocturno.`,
    ],
    corrects: [1],
  },
  {
    question: `Dadas las siguientes oraciones verdaderas: -La caranca es un ave que se puede observar en el Parque Nacional Tierra del Fuego (PNTF). - La caranca se alimenta de algas. Determine cuál de los siguientes enunciados es verdadero. Seleccione una opción.`,
    options: [
      `La caranca es un ave que se puede observar en el PNTF y además no se alimenta de algas.`,
      `Si la caranca es un ave que se puede observar en el PNTF, entonces se alimenta de algas.`,
      `O bien la caranca se alimenta de algas o bien es un ave que se puede observar en el PNTF.`,
      `La caranca no es un ave que se puede observar en el PNTF.`,
    ],
    corrects: [1],
  },
  {
    question: `Complete el siguiente enunciado para que sea una tautología. Seleccione una opción. Los macaes son aves zambullidoras ...`,
    options: [
      `pero no son patos.`,
      `pero no son aves zambullidoras.`,
      `o no son aves zambullidoras.`,
      `y bucean con facilidad.`,
    ],
    corrects: [2],
  },
  {
    question: `Dados los siguientes argumentos, determine cuál es válido. Seleccione una opción y escriba el número en el talón
    de respuestas.`,
    options: [
      `El lago Nahuel Huapi, el valle de Talampaya, el glaciar Perito Moreno y las cataratas del Iguazú son todos parques
      nacionales, y también zonas cuya fauna y flora son protegidas por el Estado. Por lo tanto, todos los parques nacionales
      son zonas cuya fauna y flora son protegidas por el Estado.`,
      `Si el valle de Talampaya es un parque nacional, entonces es una zona cuya fauna y flora son protegidas por el Estado.
      Pero el valle de Talampaya no es una zona cuya fauna y flora son protegidas por el Estado. Por lo tanto, no es un
      parque nacional.`,
      `Si el valle de Talampaya es un parque nacional, entonces es una zona cuya fauna y flora son protegidas por el Estado.
      Pero el valle de Talampaya no es un parque nacional. Por lo tanto, no es una zona cuya fauna y flora sean protegidas
      por el Estado.`,
      `Si el valle de Talampaya es un parque nacional, entonces es una zona cuya fauna y flora son protegidas por el Estado.
      Y el valle de Talampaya de hecho es una zona cuya fauna y flora son protegidas por el Estado. Por lo tanto, es un
      parque nacional.`,
    ],
    corrects: [1]
  },
  {
    question: `Seleccione la opción que permite completar la oración siguiente de modo que resulte ser correcta.
    Si un argumento es válido, ...`,
    options: [
      `sus premisas deben ser verdaderas.`,
      `su conclusión no puede ser falsa.`,
      `sus premisas pueden ser falsas.`,
      `sus premisas pueden ser inválidas.`,
      `sus premisas o su conclusión deben ser verdaderas.`,
    ],
    corrects: [2],
  },
  {
    question: `Dado el siguiente conjunto de
    enunciados:
    El águila coronada es un ave que habita en los Esteros del Iberá y está en
    peligro de extinción.
    El cachilo de antifaz es un ave que habita en los Esteros del Iberá y está en
    peligro de extinción.
    Seleccione cuáles de los siguientes enunciados corresponden respectivamente a la premisa faltante y a la
conclusión, de modo tal que el argumento resulte un argumento inductivo por analogía. Escriba en el talón de
respuestas la opción seleccionada como premisa donde dice "P" y la opción seleccionada como conclusión donde
dice "C".`,
    options: [
      `El cardenal amarillo es un ave que habita en los Esteros del Iberá.`,
      `El cachilo de antifaz está en peligro de extinción.`,
      `Todas las aves que habitan los Esteros del Iberá están en peligro de extinción.`,
      `La mayoría de las aves que habitan los Esteros del Iberá está en peligro de extinción.`,,
      `El cardenal amarillo está en peligro de extinción.`
    ],
    corrects: [0, 4]  
  },
  {
    question: `Determine qué premisa sirve para fortalecer el siguiente argumento inductivo sin que deje de ser un argumento
    inductivo por enumeración incompleta. Seleccione una opción y escriba el número en el talón de respuestas.
    Los parques nacionales argentinos contienen una gran diversidad de fauna y flora. Porque Iberá, Tierra del Fuego, Iguazú y
    Arrayanes contienen una gran diversidad de fauna y flora, y son parques nacionales argentinos.`,
    options: [
      `Iberá, Tierra del Fuego, Iguazú y Arrayanes son todos los parques nacionales argentinos que hay.`,
      `El Impenetrable contiene una gran diversidad de fauna y flora y es un parque nacional argentino.`,
      `El parque nacional argentino Los Glaciares no contiene una gran diversidad de fauna y flora.`,
      `Tijuca contiene una gran variedad de fauna y flora y es un parque nacional brasileño.`,
    ],
    corrects: [1]
  },
  {
    question: `Dado un sistema axiomático que incluye los siguientes axiomas y regla de inferencia, determine cuál de los
    enunciados que se enumeran a continuación es un teorema del sistema y responda a la pregunta que se formula a
    continuación.
    Regla de inferencia: Modus ponens Axiomas:
    Si A entonces B - Si Los Glaciares es un parque nacional, entonces es un área
    protegida por el Estado.
    A - Los Glaciares es un parque nacional.
    B - Los Glaciares no es un área protegida por el Estado.
    A. Seleccione el teorema y escriba el número en el talón de respuestas.`,
    options: [
      `Los Glaciares es un área protegida por el Estado.`,
      `Los Glaciares es un parque nacional.`,
      `Los Glaciares no es un área protegida por el Estado.`,
      `Los Glaciares no es un parque nacional.`,
      `B ¿El sistema es consistente? Escriba "SI" o "NO" en el recuadro correspondiente del talón de respuestas.`
    ],
    corrects: [0]
  },
  {
    question: `Ejercicio 10
    A. Determine si el siguiente enunciado es verdadero (V) o falso (F) según la concepción contemporánea de los
    sistemas axiomáticos. Escriba "V" o "F" en el recuadro correspondiente del talón de respuestas.
    Los axiomas se eligen convencionalmente como puntos de partida de un sistema.
    B. Seleccione la opción que justifica su respuesta y escriba el número en el talón de respuestas.`,
    options: [
      `Los axiomas son aceptados como punto de partida de un sistema sin necesidad de demostrarlos.`,
      `Ningún enunciado se elige convencionalmente como punto de partida del sistema.`,
      `Los axiomas deben ser demostrados para evitar la regresión al infinito.`,
      `Todos los enunciados del sistema se eligen convencionalmente.`,
    ],
    corrects: [0]
  },
]