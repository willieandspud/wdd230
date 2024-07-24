document.addEventListener("DOMContentLoaded", () => {
    const rentalDataUrl = 'data/rentals.json';

    fetch(rentalDataUrl)
        .then(response => response.json())
        .then(data => {
            const rentalList = document.querySelector('.rental-list');
            const rentalsHtml = data.map(rental => `
                <div class="rental">
                    <h3>${rental.type} (${rental.cc}cc) - ${rental.max_persons} person(s)</h3>
                    <p>Half Day Reservation: $${rental.half_day_reservation}</p>
                    <p>Full Day Reservation: $${rental.full_day_reservation}</p>
                    <p>Half Day Walk-In: $${rental.half_day_walkin}</p>
                    <p>Full Day Walk-In: $${rental.full_day_walkin}</p>
                </div>
            `).join('');
            rentalList.innerHTML = rentalsHtml;
        })
        .catch(error => console.error('Error fetching rental data:', error));
});
