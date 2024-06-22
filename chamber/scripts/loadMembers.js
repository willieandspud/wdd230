document.addEventListener('DOMContentLoaded', function () {
    fetch('data/members.json')
        .then(response => response.json())
        .then(data => {
            const memberDirectory = document.getElementById('member-directory');
            data.forEach(member => {
                const memberCard = document.createElement('div');
                memberCard.classList.add('member-card');
                memberCard.innerHTML = `
                    <img src="images/${member.image}" alt="${member.name}">
                    <h2>${member.name}</h2>
                    <p>${member.address}</p>
                    <p>${member.phone}</p>
                    <p><a href="${member.website}" target="_blank">${member.website}</a></p>
                    <p>Membership Level: ${member.membership_level}</p>
                    <p>${member.description}</p>
                `;
                memberDirectory.appendChild(memberCard);
            });
        })
        .catch(error => console.error('Error loading members:', error));
});
