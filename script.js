const container = document.querySelector(`.container`);
const orderList = document.querySelector(`.order-list`);
const btn = document.querySelector(`.add-order`);
const outerModal = document.querySelector(`.outer-modal`);
const innerModal = document.querySelector(`.inner-modal`);

const form = document.querySelector(`.form-input`);
const name = document.querySelector(`#name`);
const select = document.querySelector(`.select-form`);
const size = document.querySelector(`input[type="radio"]`);
const amount = document.querySelector(`#quantity`);
const submitBtn = document.querySelector(`.submitOrder`);
const detailsButton = document.querySelector(`.details`);
const servedButton = document.querySelector(`.served`);


const openModal = (event) => {
    outerModal.classList.add('open');
};
btn.addEventListener('click', openModal);

const closeModal = (e) => {
    outerModal.classList.remove(`open`);
};

outerModal.addEventListener(`click`, event => {
    const isOutside = !event.target.closest(`form`);
      if (isOutside) {
        outerModal.classList.remove(`open`);
}
});

window.addEventListener(`keydown`, event => {
    if (event.key === `Escape`) {
        outerModal.classList.remove(`open`);
    }
});


submitBtn.addEventListener(`click`, ($event) => {
    $event.preventDefault();
    const myHTML = `
    <div class="order-list">
        <div class="order" data-dish="${select.value}" data-size="${size.value}" data-amount="${amount.value}">
            <span class="title">${name.value}</span>
            <button class="details">Details</button>
            <button class="served">Delete order</button>
        </div>
    </div>`;
    
orderList.insertAdjacentHTML(`beforebegin`, myHTML);
});
