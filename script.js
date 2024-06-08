document.addEventListener('DOMContentLoaded', () => {
    const certificates = document.querySelectorAll('.certificate img');
    const modal = document.getElementById('modal');
    const modalPdf = document.getElementById('modal-pdf');

    certificates.forEach(cert => {
        cert.addEventListener('click', (e) => {
            e.preventDefault();
            modalPdf.src = e.target.closest('.certificate').dataset.full;
            modal.classList.add('active');
        });
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            setTimeout(() => {
                modalPdf.src = '';
            }, 300); // Відповідає тривалості анімації
        }
    });

    function setTheme(themeName) {
        localStorage.setItem('theme', themeName);
        document.documentElement.className = themeName;
    }

    function toggleTheme() {
        if (localStorage.getItem('theme') === 'theme-dark') {
            setTheme('theme-light');
        } else {
            setTheme('theme-dark');
        }
    }

    (function () {
        if (localStorage.getItem('theme') === 'theme-dark') {
            setTheme('theme-dark');
            document.getElementById('slider').checked = true;
        } else {
            setTheme('theme-light');
            document.getElementById('slider').checked = false;
        }
    })();

    document.getElementById('slider').addEventListener('change', toggleTheme);
});
