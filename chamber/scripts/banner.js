function showBanner() {
    const banner = document.getElementById('meetGreetBanner');
    const closeBannerButton = document.getElementById('closeBanner');
    const today = new Date().getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday

    // Show banner on Mondays (1), Tuesdays (2), and Wednesdays (3)
    if (today === 1 || today === 2 || today === 3) {
        banner.style.display = 'flex';
    } else {
        banner.style.display = 'none'; // Hide banner on other days
    }

    closeBannerButton.addEventListener('click', () => {
        banner.style.display = 'none';
    });
}

document.addEventListener('DOMContentLoaded', showBanner);
