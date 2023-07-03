"use strict";
var _a;
const comments_cards = [
    {
        id: 1,
        postId: 1,
        email: "user_1@gmail.com",
        body: "This beach house is an absolute dream! The breathtaking ocean views and direct access to the sand make it the perfect vacation retreat."
    },
    {
        id: 2,
        postId: 1,
        email: "user_2@gmail.com",
        body: "I fell in love with this charming beach cottage. The cozy interior, vibrant decor, and proximity to the water create a truly magical beach experience."
    },
    {
        id: 3,
        postId: 1,
        email: "user_2@gmail.com",
        body: "Staying at this beachfront villa was like stepping into paradise. The luxurious amenities, private pool, and stunning sunset views made it an unforgettable getaway."
    },
    {
        id: 4,
        postId: 2,
        email: "user_4@gmail.com",
        body: "I couldn't have asked for a better beach house. The spacious layout, modern furnishings, and large deck overlooking the ocean provided a perfect setting for relaxation."
    },
    {
        id: 5,
        postId: 2,
        email: "user_4@gmail.com",
        body: "I was blown away by the beauty of this beachfront estate. The infinity pool, private cabanas, and direct access to a secluded beach made me feel like a VIP in my own little paradise."
    },
    {
        id: 6,
        postId: 2,
        email: "user_6@gmail.com",
        body: "This beach cottage is a true hidden gem. Tucked away from the crowds, it offered a peaceful retreat with its private beach access, cozy fireplace, and breathtaking sunset views."
    },
    {
        id: 7,
        postId: 3,
        email: "user_7@gmail.com",
        body: "This beachfront retreat exceeded all my expectations. From the beautifully landscaped gardens to the stylish interiors, every detail was meticulously designed for comfort and elegance."
    },
    {
        id: 8,
        postId: 3,
        email: "user_8@gmail.com",
        body: "I absolutely adored this beachfront bungalow. The open floor plan, abundance of natural light, and private beach access made it an idyllic escape from the hustle and bustle of city life."
    },
    {
        id: 9,
        postId: 3,
        email: "user_9@gmail.com",
        body: "This beach house is a true gem. The panoramic views, direct beach access, and outdoor entertainment area with a barbecue grill made it the ideal spot for memorable gatherings with family and friends."
    },
    {
        id: 10,
        postId: 4,
        email: "user_10@gmail.com",
        body: "I couldn't get enough of this stunning beachfront home. The modern architecture, floor-to-ceiling windows, and private deck overlooking the crashing waves created a serene and calming atmosphere."
    },
    {
        id: 11,
        postId: 4,
        email: "user_11@gmail.com",
        body: "This beach house is the epitome of coastal luxury. The spacious bedrooms, gourmet kitchen, and expansive beachfront balcony made it the perfect setting for a lavish seaside vacation."
    },
    {
        id: 12,
        postId: 4,
        email: "user_12@gmail.com",
        body: "I was blown away by the beauty of this beachfront estate. The infinity pool, private cabanas, and direct access to a secluded beach made me feel like a VIP in my own little paradise."
    },
    {
        id: 13,
        postId: 5,
        email: "user_13@gmail.com",
        body: "I couldn't have asked for a better beach house experience. The spacious living areas, outdoor shower, and proximity to both the beach and local attractions made it the perfect home base for exploring and relaxing."
    },
    {
        id: 14,
        postId: 5,
        email: "user_14@gmail.com",
        body: "This beachfront property is a slice of paradise. The tranquil garden, private beachfront deck, and well-appointed interiors create a serene and inviting atmosphere."
    },
    {
        id: 15,
        postId: 5,
        email: "user_15@gmail.com",
        body: "I fell in love with the charm of this beachside cottage. The cozy interiors, hammocks swaying in the sea breeze, and the sound of waves crashing just steps away made it a truly enchanting retreat."
    },
    {
        id: 16,
        postId: 6,
        email: "user_16@gmail.com",
        body: "Staying at this beach house was pure bliss. The expansive windows, ocean-facing balcony, and direct access to a pristine beach allowed me to immerse myself in the beauty of the coastal surroundings."
    }, {
        id: 17,
        postId: 6,
        email: "user_17@gmail.com",
        body: "This beachfront home is an architectural marvel. The sleek design, floor-to-ceiling glass walls, and infinity pool that seamlessly blends with the ocean created an unparalleled sense of luxury and tranquility."
    }, {
        id: 18,
        postId: 6,
        email: "user_18@gmail.com",
        body: "This beach house offers the perfect blend of comfort and coastal charm. The spacious living areas, outdoor lounging spaces, and proximity to the beach made it an ideal place to relax and unwind."
    },
];
const cards = [
    {
        id: 1,
        title: "Carneiros",
        imageUrl: "./images/beachHouse1.jpeg",
        body: "With a sea view, Bangalo Praia dos Carneiros offers accommodations with an outdoor pool, garden, and restaurant, just a few steps from Praia do Carneiro. This beachfront property provides access to a terrace, ping-pong, free private parking, and complimentary WiFi."
    },
    {
        id: 2,
        title: "Pipa",
        imageUrl: "./images/beachHouse2.jpg",
        body: "Surfcamp Arara offers practical beach accommodations 350 meters from Praia do Centro and 300 meters from the center of Pipa. The property features a barbecue area and an outdoor swimming pool. WiFi is free. This is the part of Pipa that our guests like the most, according to independent reviews."
    },
    {
        id: 3,
        title: "Paiva",
        imageUrl: "./images/beachHouse3.jpg",
        body: "Located 8.5 km from Guararapes Shopping Mall, Flat Bugen- Paiva Home Stay offers accommodations in Recife with access to a sauna. Situated 2 km from Candeias Beach, the property provides a terrace and free private parking."
    },
    {
        id: 4,
        title: "Boa Viagem",
        imageUrl: "./images/beachHouse4.jpeg",
        body: "Featuring an outdoor pool and a 24-hour front desk, the Flat in Boa Viagem is ideally located in the Boa Viagem neighborhood of Recife, 300 meters from Boa Viagem Beach and 2.5 km from Piedade Beach. This apartment offers free private parking, room service, and complimentary WiFi."
    },
    {
        id: 5,
        title: "Tamandaré",
        imageUrl: "./images/beachHouse5.jpg",
        body: "Jardim dos Cajueiros features a balcony and is located in Tamandaré, just 400 meters from Carneiro Beach and 50 meters from Tamandaré Beach. This air-conditioned accommodation is 300 meters from Campas Beach, and you can enjoy free private parking on-site and complimentary WiFi."
    },
    {
        id: 6,
        title: "Porto de Galinhas",
        imageUrl: "./images/beachHouse6.jpg",
        body: "Conveniently located in the center of Porto de Galinhas, Toca do Coelho offers air-conditioned rooms, an outdoor pool, free WiFi, and a garden. Situated 500 meters from Porto de Galinhas Beach and 700 meters from Merepe Beach, the property features a terrace and a bar. This non-smoking property is 1.6 km from Cupe Beach."
    },
];
function getURLParams() {
    const url = window.location.href;
    const paramsIndex = url.indexOf('?');
    return new URLSearchParams(url.slice(paramsIndex + 1));
}
function getCardData() {
    const params = getURLParams();
    const id = Number(params.get('id'));
    const card = cards.find(card => card.id === id);
    return card || { id: 0, title: '', imageUrl: '', body: '' };
}
function userComment(comments_cards, cardData) {
    if (cardData) {
        const ids = comments_cards.filter((comment) => comment.postId === cardData.id);
        const commentElement = document.querySelector('#comment');
        commentElement.innerHTML = '';
        ids.forEach((comment) => {
            const userCommentContainer = document.createElement('div');
            userCommentContainer.classList.add('userComment');
            const userNumber = document.createElement('span');
            userNumber.textContent = `user_${comment.id}: `;
            userCommentContainer.appendChild(userNumber);
            const userEmailText = document.createElement('span');
            userEmailText.textContent = `${comment.email}: `;
            userCommentContainer.appendChild(userEmailText);
            const body = document.createElement('label');
            body.textContent = comment.body;
            userCommentContainer.appendChild(body);
            commentElement.appendChild(userCommentContainer);
            const lineBreak = document.createElement('hr');
            lineBreak.classList.add('separatorLine');
            commentElement.appendChild(lineBreak);
        });
    }
}
function populateCardElements(cardData) {
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
    userComment(comments_cards, cardData);
});
function goBack() {
    window.history.back();
}
(_a = document.getElementById("backButton")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", goBack);
