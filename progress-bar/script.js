const progres = document.querySelectorAll('.progress-done');
for (const progress of progres) {
    setTimeout(() => {
        progress.style.width = progress.getAttribute('data-done') + '%';
        progress.style.opacity = 1;
    }, 500);
}