document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggle-view');
    const memberDirectory = document.getElementById('member-directory');

    toggleButton.addEventListener('click', function () {
        if (memberDirectory.classList.contains('grid-view')) {
            memberDirectory.classList.remove('grid-view');
            memberDirectory.classList.add('list-view');
        } else {
            memberDirectory.classList.remove('list-view');
            memberDirectory.classList.add('grid-view');
        }
    });
});
