import { vocabulary } from "./vocabularies";

export function getRandomWord() {
    const words = vocabulary.words;
    const rndmIndex = Math.floor(Math.random() * words.length);
    return words[rndmIndex]
}