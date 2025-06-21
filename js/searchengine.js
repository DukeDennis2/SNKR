document.addEventListener('DOMContentLoaded', function() {
    const searchBar = document.getElementById('searchBar');
    const boxes = document.querySelectorAll('.box');

    // Listen for input events on the search bar
    searchBar.addEventListener('keyup', function(e) {
        const searchTerm = e.target.value.toLowerCase();

        boxes.forEach(box => {
            const sneakerName = box.querySelector('h2') ? box.querySelector('h2').textContent.toLowerCase() : '';
            const sneakerPrice = box.querySelector('h3') ? box.querySelector('h3').textContent.toLowerCase() : '';
            const releaseDate = box.querySelector('h2') ? box.querySelector('h2').textContent.toLowerCase() : '';

            if (sneakerName.includes(searchTerm) || sneakerPrice.includes(searchTerm) || releaseDate.includes(searchTerm)) {
                box.style.display = 'block';
            } else {
                box.style.display = 'none';
            }
        });
    });
});