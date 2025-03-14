import { useState } from "react";
import { getRandomWord } from "./utils";

function App() {

  const [word, setWord] = useState(() => getRandomWord());
  const [userAnswer, setUserAnswer] = useState(null);

  let isAnswered = userAnswer !== null;
  let answerIsCorrect = userAnswer === word.spaVersion;


  function handleAnswer(formData) {
    const answer = formData.get('answer');
    setUserAnswer(answer);
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
      <p className="review__title label">Write the correct translation into Spanish</p>
      <img className="review__pic" src={word.img} alt={`Example picture of ${word.engVersion}`} />
      <form className="review__form" action={handleAnswer}>
        <input className={`review__field label ${isAnswered ? answerStyle() : ''}`} type="text" name="answer" autoComplete="off" placeholder={isAnswered ? userAnswer : ''} disabled={isAnswered ? true : false} />
      </form>
      <p className="review__translation body" >{word.engVersion}</p>

      {isAnswered &&
        <div className="review__completed">
        <p className="review__completed-message headline">{answerIsCorrect ? 'Good job!' : 'Not quite right' }</p>
        <div className="review__completed-buttons">
          <button className="primary-button">Continue</button>
        </div>
        </div>}
    </main>
  )  
}

export default App