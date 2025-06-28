document.addEventListener('DOMContentLoaded', function() {
    const accordionItems = document.querySelectorAll('.accordion_item');

    accordionItems.forEach(item => {
        item.addEventListener('click', function() {
            this.classList.toggle('active');

            const content = this.querySelector('.accordion_content');

            if (this.classList.contains('active')) {
                content.style.maxHeight = content.scrollHeight + "px";
            } else {
                content.style.maxHeight = '0';
            }
        });
    });
});