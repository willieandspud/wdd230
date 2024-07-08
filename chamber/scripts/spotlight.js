document.addEventListener('DOMContentLoaded', function() {

    fetch('members.json')
        .then(response => response.json())
        .then(data => {
            const spotlightMembers = data.filter(member => member.membership_level === 'Silver' || member.membership_level === 'Gold');
            
            const selectedMembers = getRandomMembers(spotlightMembers);

            const spotlightGrid = document.getElementById('spotlightGrid');
            if (spotlightGrid) {
                spotlightGrid.innerHTML = '';

                selectedMembers.forEach(member => {
                    const memberElement = createMemberElement(member);
                    spotlightGrid.appendChild(memberElement);
                });
            }
        })
        .catch(error => console.error('Error fetching members data:', error));
});


function getRandomMembers(members) {
    const numMembersToShow = Math.floor(Math.random() * 2) + 2;
    const shuffledMembers = members.sort(() => 0.5 - Math.random());
    return shuffledMembers.slice(0, numMembersToShow);
}


function createMemberElement(member) {
    const div = document.createElement('div');
    div.classList.add('member-spotlight');

    const img = document.createElement('img');
    img.src = 'images/' + member.image;
    img.alt = member.name + ' Image';
    img.classList.add('member-spotlight-img');
    div.appendChild(img);

    const h3 = document.createElement('h3');
    h3.textContent = member.name;
    div.appendChild(h3);

    const p = document.createElement('p');
    p.textContent = member.description;
    div.appendChild(p);

    return div;
}
