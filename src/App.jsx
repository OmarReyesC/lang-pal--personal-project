import { useState } from "react";
import { getRandomWords } from "./utils";

function App() {

  const [words, setWords] = useState(() => getRandomWords());
  const [wordIndex, setWordIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState(null);

  let isAnswered = userAnswer !== null;
  let answerIsCorrect = userAnswer === words[wordIndex].spaVersion;


  function handleAnswer(formData) {
    const answer = formData.get('answer');
    setUserAnswer(answer);
  }

  function getNewWord() {
    setWordIndex((currentIndex) => currentIndex + 1);
    setUserAnswer(null);
  }

  function answerStyle() {
    if (answerIsCorrect) {
      return 'field-correct'
    } else {
      return 'field-wrong'
    }
  }

  return (
    <main className="review">
      <p className="headline">{`${wordIndex + 1}/${words.length}`}</p>
      <p className="review__title label">Write the correct translation into Spanish</p>
      <img className="review__pic" src={words[wordIndex].img} alt={`Example picture of ${words[wordIndex].engVersion}`} />
      <form className="review__form" action={handleAnswer}>
        <input className={`review__field label ${isAnswered ? answerStyle() : ''}`} type="text" name="answer" autoComplete="off" placeholder={isAnswered ? userAnswer : ''} disabled={isAnswered ? true : false} />
      </form>
      <p className="review__translation body" >{words[wordIndex].engVersion}</p>

      {isAnswered &&
        <div className="review__completed">
        <p className="review__completed-message headline">{answerIsCorrect ? 'Good job!' : 'Not quite right' }</p>
        <div className="review__completed-buttons">
          <button className={answerIsCorrect ? "primary-button" : "secondary-button"} onClick={getNewWord} disabled={wordIndex + 1 === words.length} >Continue</button>
          {!answerIsCorrect && 
          <button className="primary-button" onClick={() => {setUserAnswer(null)}}>Try again</button>}
        </div>
        </div>}
    </main>
  )  
}

export default App