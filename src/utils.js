import { vocabulary } from "./vocabularies";

export function getRandomWords() {
    const words = vocabulary.words;
    
    for (let i = words.length - 1; i > 0; i--) {
        const rndmIndex = Math.floor(Math.random() * (i + 1));
        [words[i], words[rndmIndex]] = [words[rndmIndex], words[i]];
    }
    return words.slice(0, 5);
}