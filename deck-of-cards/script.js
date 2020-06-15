const BASE_URL = "https://deckofcardsapi.com/api/deck/";
let deckId = null;

async function setup() {
  $("#cards-container").empty();
  var shuffledDeck = await axios.get(`${BASE_URL}new/shuffle/?deck_count=1`);
  deckId = shuffledDeck.data.deck_id;
}

async function drawCard() {
    
    let card = await axios.get(`${BASE_URL}${deckId}/draw/?count=1`);
    if (!card.data.success) {
      $("button").hide();
      return;
    }
    console.log(card);
    // let value = card.data.cards[0].value;
    // let suit = card.data.cards[0].suit;
    // let msg = `${value} of ${suit}`;
    let img = card.data.cards[0].image;
    // console.log(msg);

    appendDOM(img);
  
};

function appendDOM(msg) {
  console.log("append DOM");
  $("body").append(`<img src='${msg}'></img>`);

}

$(function () {
  setup();
  $("button").on("click", drawCard);
});
