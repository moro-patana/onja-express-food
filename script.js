// // Grab elements
const outerModal = document.querySelector(`.outer-modal`);
const innerModal = document.querySelector(`.inner-modal`);
const addOrderBtn = document.querySelector(`button.add-order`);
const orderForm = document.querySelector(`form`);
const orderList = document.querySelector(`.order-list`);
const order = document.querySelector(`.order`);


const addOrder = event => {
    orderHTML = `
    <form id="orderForm">
        <p>Your name :</p>
        <input
            class="input-form"
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name here"
            required
        />
        <p>Please select your dish :</p>
        <select name="dish" class="select-form" required>
            <option value="romazava">Romazava</option>
            <option value="koba">Koba</option>
            <option value="ravitoto">Ravitoto</option>
            <option value="mokary">Mokary</option>
            <option value="achard">Achard</option>
            <option value="masikita">Masikita</option>
            <option value="sambos">Sambos</option>
            <option value="mofo-baolina">Mofo baolina</option>
            <option value="ranonapango">Ranonapango</option>
        </select>
        <p>Please select the size of your plate :</p>
        <input type="radio" id="small" name="size" value="small" required />
        <label for="small">Small</label><br />
        <input type="radio" id="medium" name="size" value="medium" />
        <label for="medium">Medium</label><br />
        <input type="radio" id="large" name="size" value="large" />
        <label for="large">Large</label><br />
        <p>How many pieces do you want to order?</p>
        <input
            class="input-form"
            type="number"
            id="quantity"
            name="amount"
            placeholder="Enter a number here"
            required
        />
        <button class="submitOrder" type="submit">Add this order</button>
</form>
`;
    innerModal.innerHTML = orderHTML;
    outerModal.classList.add(`open`);
};

const handleCloseModal = event => {
    const isOutside = !event.target.closest(`.inner-modal`);
    if (isOutside) {
        outerModal.classList.remove(`open`);
    }
};

const handleEscapeKey = event => {
    if (event.key === `Escape`) {
        closeModal();
    }
};
const closeModal = event => {
    outerModal.classList.remove(`open`);
}

const handleSubmit = event => {
    event.preventDefault();
    if (event.target.matches(`#orderForm`)) {
        const form = event.target;
        const {name, dish, size, amount} = form;

        //Create new order html
        const myOrder = `
        <div class="order" data-dish="${dish.value}" data-size="${size.value}" data-amount="${amount.value}">
            <span class="title">
                ${name.value}
            </span>
            <button class="details">Details</button>
            <button class="delete">Delete order</button>
        </div>
`;
      orderList.innerHTML += myOrder;
      closeModal();
      form.reset();
    }
}

const showDetails = () => {
  const {dish, size, amount} = order.dataset;
  order.querySelector(`.title`).textContent;
  const detailHTML = `
  <h3>${name}</h3>
  <h4>Order:</h4>
  <h5>${amount} ${size} ${dish}</h5>
  `; 
  innerModal.innerHTML = detailHTML;
  outerModal.classList.add(`open`);
}
const deleteOrder = order => {
    order.remove()
}
const handleBtnClick = event => {
  if (event.target.matches(`button.details`)) {
      const order = event.target.closest(`.order`)
      showDetails(order);
  }
  if (event.target.matches(`button.delete`)) {
    const order = event.target.closest(`.order`);
    deleteOrder(order);

}
};
// Listeners
window.addEventListener(`click`, handleBtnClick);
window.addEventListener(`submit`, handleSubmit);
window.addEventListener(`keydown`, handleEscapeKey);
outerModal.addEventListener(`click`, handleCloseModal);
addOrderBtn.addEventListener(`click`, addOrder);
