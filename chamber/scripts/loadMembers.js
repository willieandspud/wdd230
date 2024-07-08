document.addEventListener('DOMContentLoaded', function () {
    fetch('data/members.json')
        .then(response => response.json())
        .then(data => {
            const memberDirectory = document.getElementById('member-directory');
            data.forEach(member => {
                const memberCard = document.createElement('div');
                memberCard.classList.add('member-card');

                
                const infoDiv1 = document.createElement('div');
                const name = document.createElement('h2');
                const address = document.createElement('p');
                const phone = document.createElement('p');
                const website = document.createElement('a');

                name.textContent = member.name;
                address.textContent = member.address;
                phone.textContent = member.phone;
                website.href = member.website;
                website.target = "_blank";
                website.textContent = member.website;

                infoDiv1.appendChild(name);
                infoDiv1.appendChild(address);
                infoDiv1.appendChild(phone);
                infoDiv1.appendChild(website);

                const infoDiv2 = document.createElement('div');
                const membershipLevel = document.createElement('p');
                const description = document.createElement('p');

                membershipLevel.textContent = `Membership Level: ${member.membership_level}`;
                description.textContent = member.description;

                infoDiv2.appendChild(membershipLevel);
                infoDiv2.appendChild(description);

                
                memberCard.appendChild(infoDiv1);
                memberCard.appendChild(infoDiv2);

                
                memberDirectory.appendChild(memberCard);
            });
        })
        .catch(error => console.error('Error loading members:', error));
});
