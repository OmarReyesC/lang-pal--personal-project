import { useState } from "react";
import { getRandomWord } from "./utils";

function App() {

  const [word, setWord] = useState(() => getRandomWord());
  console.log(word);

  return (
    <main className="review">
      <p className="review__title label">Write the correct translation into Spanish</p>
      <img className="review__pic" src={word.img} alt={`Example picture of ${word.engVersion}`} />
      <input className="review__field label" type="text" />
      <p className="review__translation body" >{word.engVersion}</p>
    </main>
  )  
}

export default App