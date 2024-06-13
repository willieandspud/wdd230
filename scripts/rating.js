function updateRatingValue(value) {
    document.getElementById('ratingValue').textContent = value;
}

document.getElementById('rating').addEventListener('input', function() {
    updateRatingValue(this.value);
});
