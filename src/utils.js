import { redirect } from "react-router";
import { vocabulary } from "./vocabularies";

export function getRandomWords() {
    const words = vocabulary.words;
    
    for (let i = words.length - 1; i > 0; i--) {
        const rndmIndex = Math.floor(Math.random() * (i + 1));
        [words[i], words[rndmIndex]] = [words[rndmIndex], words[i]];
    }
    return words.slice(0, 5);
}

export async function requireAuth() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');

    if(!isLoggedIn) {
        const response = redirect('/login?message=Please log in first');
        response.body = true;
        throw response;
    }

    return null
}