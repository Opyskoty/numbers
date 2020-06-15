const BASE_URL = "http://numbersapi.com/"

async function getNumberResponse() {
  let response = await axios.get(`${BASE_URL}23?json`);
  console.log(response);
}

getNumberResponse();


async function getNumberFacts() {
  let response = await axios.get(`${BASE_URL}2..4,9,18`);

  for (let fact in response.data) {
    let numFact = $('<p>').text(response.data[fact]);
    $('body').append(numFact);
  }
}

getNumberFacts();

async function showSameNumFacts() {
  
  // let fact1 = axios.get(`${BASE_URL}3`);
  // let fact2 = axios.get(`${BASE_URL}3`);
  // let fact3 = axios.get(`${BASE_URL}3`);
  // let fact4 = axios.get(`${BASE_URL}3`);

  //better way with a for loop instead of declaring 4 variables.
  let facts = [];

  for (let i = 0; i < 5; i++){
    let fact = axios.get(`${BASE_URL}3`);
    facts.push(fact);
  }
  let factsPromise = await Promise.all(facts);

  for (let fact of factsPromise) {
    let numFact = $('<p>').text(fact.data);
    $('body').append(numFact);
  }
}

showSameNumFacts();