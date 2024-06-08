document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
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
});
