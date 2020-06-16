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

function appendDOM(img) {
  // console.log("append DOM");
  let angle = Math.random() * 90-45;
  let x = Math.random() * 50;
  let y = Math.random() * 20;
  // $("#cards-container").append(`<img src='${msg}' style="position:absolute;"></img>`).css('transform', `rotate(${angle}deg)`);

  // $("#cards-container").append($("<img>", { src: img, css: {transform: translate(`${x} ${y} ${angle}`)}})
  $("#cards-container").append(
    $("<img>", { src: img, css: {transform: `translate(${x}px, ${y}px) rotate(${angle}deg)`, position : 'absolute'}})
    );
}

$(function () {
  setup();
  $("button").on("click", drawCard);
});
