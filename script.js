const container = document.querySelector(`.container`);
const btn = document.querySelector(`.add-order`);
const outerModal = document.querySelector(`.outer-modal`);
const innerModal = document.querySelector(`.inner-modal`);

const form = document.getElementsByTagName(`form`)[0];



btn.onclick = (e) => {
    outerModal.style.display = `block`;
    container.style.opacity = `0.5`;
};
form.onclick = function() {
    outerModal.style.display = `none`;
}
window.onclick = function(event) {
    if (event.target === outerModal) {
        outerModal.style.display = `none`;
    }
}
