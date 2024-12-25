document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM loaded");

    function showModal() {
        console.log("Showing modal");
        const modal = document.getElementById('thank-you-message');
        modal.classList.remove('d-none'); // Show the modal
    }

    document.getElementById('close-modal').addEventListener('click', function() {
        console.log("Closing modal");
        const modal = document.getElementById('thank-you-message');
        modal.classList.add('d-none'); // Hide the modal
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
