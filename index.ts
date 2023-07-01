interface Card {
  id: number;
  title: string;
  imageUrl: string;
  body: string;
}
const cards: Card[] = [
  {
    id: 1,
    title: "Carneiros",
    imageUrl: "./images/beachHouse1.jpeg",
    body: "With a sea view, Bangalo Praia dos Carneiros offers accommodations with an outdoor pool..."
  },
  {
    id: 2,
    title: "Pina",
    imageUrl: "./images/beachHouse2.jpg",
    body: "This is the body of Card 2."
  },
  {
    id: 3,
    title: "Paiva",
    imageUrl: "./images/beachHouse3.jpg",
    body: "This is the body of Card 3."
  },
  {
    id: 4,
    title: "Boa Viagem",
    imageUrl: "./images/beachHouse4.jpeg",
    body: "This is the body of Card 4."
  },
  {
    id: 5,
    title: "Tamandaré",
    imageUrl: "./images/beachHouse5.jpg",
    body: "This is the body of Card 5."
  },
  {
    id: 6,
    title: "Porto de Galinhas",
    imageUrl: "./images/beachHouse6.jpg",
    body: "This is the body of Card 6."
  },
];

function getURLParams(): URLSearchParams {
  const url = window.location.href;
  const paramsIndex = url.indexOf('?');
  return new URLSearchParams(url.slice(paramsIndex + 1));
}


function getCardData(): Card {
  const params = getURLParams();
  const id = Number(params.get('id'));
  const card = cards.find(card => card.id === id);
  return card || { id: 0, title: '', imageUrl: '', body: '' };
}


function populateCardElements(cardData: Card) {
  const titleElement = document.querySelector('#card-title');
  const imageElement = document.querySelector('#card-image');
  const bodyElement = document.querySelector('#card-body');

  if (titleElement instanceof HTMLElement) {
    titleElement.textContent = cardData.title;
  }

  if (imageElement instanceof HTMLImageElement) {
    imageElement.src = cardData.imageUrl;
  }

  if (bodyElement instanceof HTMLElement) {
    bodyElement.textContent = cardData.body;
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const cardData = getCardData();
  populateCardElements(cardData);
});

function goBack(): void {
  window.history.back();
}
document.getElementById("backButton")?.addEventListener("click", goBack);

function Comments {
  id: number;
  title: string;
  imageUrl: string;
  body: string;
}