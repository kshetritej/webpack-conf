import generateJoke from './generateJoke';
import './styles/main.scss';
import laughing from './assets/laughing.jpg';

const laughImg = document.getElementById('laughImg');
laughImg.src = laughing;

const jokeBtn = document.getElementById('jokeBtn');
jokeBtn.addEventListener('click',generateJoke);

console.log(generateJoke());