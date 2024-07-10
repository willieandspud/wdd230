
const jsonUrl = 'https://willieandspud.github.io/wdd230/chamber/data/members.json';

document.addEventListener('DOMContentLoaded', () => {
    fetch(jsonUrl)
        .then(response => response.json())
        .then(data => {
            const silverGoldMembers = data.filter(member => member.membership_level === 'Silver' || member.membership_level === 'Gold');
            displaySpotlightMembers(silverGoldMembers);
        })
        .catch(error => console.error('Error fetching the JSON data:', error));
});

function displaySpotlightMembers(members) {
    const spotlightContainer = document.querySelector('#spotlightGrid .cards');
    spotlightContainer.innerHTML = '';
    const selectedMembers = getRandomMembers(members, 2, 3);

    selectedMembers.forEach(member => {
        const memberCard = document.createElement('div');
        memberCard.classList.add('member-card');

        memberCard.innerHTML = `
            <img src="images/${member.image}" alt="${member.name}">
            <h4>${member.name}</h4>
            <p>${member.description}</p>
            <p><a href="${member.website}" target="_blank">Visit Website</a></p>
        `;

        spotlightContainer.appendChild(memberCard);
    });
}

function getRandomMembers(array, min, max) {
    const selectedMembers = [];
    const numMembers = Math.floor(Math.random() * (max - min + 1)) + min;

    while (selectedMembers.length < numMembers) {
        const randomIndex = Math.floor(Math.random() * array.length);
        const member = array[randomIndex];

        if (!selectedMembers.includes(member)) {
            selectedMembers.push(member);
        }
    }

    return selectedMembers;
}
