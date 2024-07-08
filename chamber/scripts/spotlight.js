const infoURL = "https://willieandspud.github.io/wdd230/chamber/data/members.json";

async function GetInfo() {
    try {
        const response = await fetch(infoURL);
        const data = await response.json();
        displaySpotlights(data.companies);
    } catch (error) {
        console.error("Error fetching member data:", error);
    }
}

function getHighStatusCompanies(companies) {
    const highStatus = companies.filter(company =>
        company.membership === "Silver" || company.membership === "Gold"
    );
    return highStatus.sort(() => 0.5 - Math.random()).slice(0, 3);
}

function displaySpotlights(companies) {
    const highStatusCompanies = getHighStatusCompanies(companies);

    highStatusCompanies.forEach((company) => {
        let card = document.createElement("section");
        let logo = document.createElement("img");
        let address = document.createElement("p");
        let number = document.createElement("p");
        let website = document.createElement("a");

        address.innerHTML = company.address;
        number.innerHTML = company.phone;
        website.innerHTML = "Website";

        card.setAttribute('class', "card");
        logo.setAttribute('class', "logo");
        logo.setAttribute('src', company.image);
        logo.setAttribute('alt', `${company.name}'s logo`);
        logo.setAttribute('loading', "lazy");

        website.setAttribute('href', company.website);

        card.appendChild(logo);
        card.appendChild(address);
        card.appendChild(number);
        card.appendChild(website);

        document.querySelector('.cards').appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", GetInfo);
