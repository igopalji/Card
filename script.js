function toggleInfo() {
    const card = document.querySelector('.card');
    const infoSection = document.querySelector('.info-section');

    if (infoSection.style.display === 'block') {
        infoSection.style.display = 'none';
        infoSection.style.maxHeight = '0';
        card.style.maxHeight = '200px';
    } else {
        infoSection.style.display = 'block';
        infoSection.style.maxHeight = infoSection.scrollHeight + 'px';
        card.style.maxHeight = '1000px'; // Arbitrary large value to show full card
    }
}
