document.addEventListener('DOMContentLoaded', function () {
    fetch('data/members.json')
        .then(response => response.json())
        .then(data => {
            const memberDirectory = document.getElementById('member-directory');
            data.forEach(member => {
                const memberCard = document.createElement('div');
                memberCard.classList.add('member-card');

                
                const img = document.createElement('img');
                img.src = `images/${member.image}`;
                img.alt = member.name;

                
                const infoDiv = document.createElement('div');
                const name = document.createElement('h2');
                const address = document.createElement('p');
                const phone = document.createElement('p');
                const website = document.createElement('a');
                const membershipLevel = document.createElement('p');
                const description = document.createElement('p');

                name.textContent = member.name;
                address.textContent = member.address;
                phone.textContent = member.phone;
                website.href = member.website;
                website.target = "_blank";
                website.textContent = member.website;
                membershipLevel.textContent = `Membership Level: ${member.membership_level}`;
                description.textContent = member.description;

                
                infoDiv.appendChild(name);
                infoDiv.appendChild(address);
                infoDiv.appendChild(phone);
                infoDiv.appendChild(website);
                infoDiv.appendChild(membershipLevel);
                infoDiv.appendChild(description);

                
                memberCard.appendChild(img);
                memberCard.appendChild(infoDiv);

                
                memberDirectory.appendChild(memberCard);
            });
        })
        .catch(error => console.error('Error loading members:', error));
});
