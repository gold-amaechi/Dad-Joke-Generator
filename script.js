const btn = document.getElementById('btn');
const joke = document.getElementById('joke');

const apiKey = '11xnzgcGntFhnPCKYj1jmA==2e59gtDiq2dWK6WB';
const apiUrl = 'https://api.api-ninjas.com/v1/dadjokes?limit=1';

const options = {
  method: 'GET',
  headers: {'X-Api-Key': apiKey}
};

async function getJoke() {
try {
    joke.innerText = 'Updating...';
    btn.disabled = true;
    btn.innerText = 'Loading...';
    const response = await fetch(apiUrl, options);
    const data = await response.json();
    joke.innerHTML = data[0].joke;
    btn.disabled = false;
    btn.innerText = 'Tell me a joke.';
  }
 catch (error) {
  joke.innerText = 'Uh Oh! An error has occurred, try again later.';
}
}

btn.addEventListener('click', getJoke);