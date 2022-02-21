const list_box = document.querySelectorAll('.feature-tab');
const list_tab = document.querySelectorAll('.tab-content');

function detectFeatureBox() {
    let data_id = 1;
    list_box.forEach(box => {
        box.addEventListener('click', (e) => {
            data_id = e.target.getAttribute('data-id');
            list_tab.forEach(tab => {
                if (tab.getAttribute('data-target') == data_id) {
                    tab.classList.add('active');
                } else {
                    tab.classList.remove('active');
                }
            });
            list_box.forEach(box => {
                if (box.getAttribute('data-id') == data_id) {
                    box.classList.add('active');
                } else {
                    box.classList.remove('active');
                }
            })
        })
    })
}
export { detectFeatureBox };