document.addEventListener('DOMContentLoaded', () => {
    const titles = document.querySelectorAll('.smoothie-title');
    titles.forEach(title => {
        title.addEventListener('click', () => {
            const id = title.getAttribute('data-id');
            const desc = document.getElementById('desc-' + id);
            // Toggle visibility
            if (desc.style.display === 'block') {
                desc.style.display = 'none';
            } else {
                // Hide all others
                document.querySelectorAll('.smoothie-desc').forEach(d => d.style.display = 'none');
                desc.style.display = 'block';
            }
        });
    });
});