
document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll('.tabs ul li a');
    const tabContents = document.querySelectorAll('.tab-pane');

    tabs.forEach(tab => {
        tab.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetTab = document.getElementById(targetId);
            
            tabContents.forEach(content => {
                content.classList.remove('active');
            });
            tabs.forEach(tab => {
                tab.classList.remove('active');
            });

            targetTab.classList.add('active');
            this.classList.add('active');
        });
    });
});
