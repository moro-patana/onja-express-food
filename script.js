// Grab elements
const container = document.querySelector(`.container`);
const orderList = document.querySelector(`.order-list`);
const btn = document.querySelector(`.add-order`);
const outerModal = document.querySelector(`.outer-modal`);
const innerModal = document.querySelector(`.inner-modal`);
const outerSecondModal = document.querySelector(`.outer-second-modal`);
const innerSecondModal = document.querySelector(`.inner-second-modal`);
const choices = document.querySelector(`.choices`);

const form = document.querySelector(`.form-input`);
const name = document.querySelector(`#name`);
const select = document.querySelector(`.select-form`);
const size = document.querySelector(`input[type="radio"]`);
const amount = document.querySelector(`#quantity`);

const submitBtn = document.querySelector(`.submitOrder`);
const detailsButton = document.querySelector(`.details`);
const servedButton = document.querySelector(`.served`);


// Add class to the outerModal and event listener

const openModal = (event) => {
    outerModal.classList.add('open');
};
btn.addEventListener('click', openModal);

// Remove the class

const closeModal = (e) => {
    outerModal.classList.remove(`open`);
};

// Add an event listener to the outer modal to close it

outerModal.addEventListener(`click`, event => {
    const isOutside = !event.target.closest(`form`);
      if (isOutside) {
        outerModal.classList.remove(`open`);
}
});
// We need to add an event listener to the window and remove the class to escape

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

// Listen to the detail button

const handleDetailsBtn = (e) => {
    const detailsButton = e.target;
    const order = document.querySelector(`.order`);

// grab the detail
    if (e.target.matches('.details')) {
        const name = order.dataset.name;
        const select = order.dataset.select;
        const size = order.dataset.size;
        const amount = order.dataset.amount;
        const myChoices = `
            <h2>${name}</h2>
            <p>${amount} ${size} ${select}</p>
        `;
        innerModal.innerHTML = myChoices;
        outerModal.classList.add('open');
    }
};

// Listen to the delete order button
window.addEventListener(`click`, e => {
    if (e.target.matches(`.served`)) {
        orderList.style.display = `none`;
    }

});