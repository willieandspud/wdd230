const dataURL = "https://willieandspud.github.io/wdd230/scoots/data/rentals.json";

async function getRentalData() {
    try {
        const response = await fetch(dataURL);
        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        // console.log(data);
        displayRatesTable(data.rentals);
        displayRatesCards(data.rentals);
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
}
getRentalData();

const displayRatesTable = (rentals) => {
    // console.log(rentals);
    const priceTable = document.querySelector(".pricing tbody");

    rentals.forEach((type) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${type.type}</td>
            <td>${type.persons}</td>
            <td>$${type.reservation_half_day}</td>
            <td>$${type.reservation_full_day}</td>
            <td>$${type.walk_in_half_day}</td>
            <td>$${type.walk_in_full_day}</td>
        `;
        priceTable.appendChild(row);
    });
};
