const sedanPrice = [8000, 12000, 10000, 2000, 'xe 4 chỗ'];
const suvPrice = [9000, 14000, 12000, 3000, 'xe 7 chỗ'];
const convertiblePrice = [10000, 16000, 14000, 4000, 'xe mui trần'];
const carTypes = [suvPrice, sedanPrice, convertiblePrice];
let carType;
let prices = [];
let priceWaiting;
let amount;
let cars = document.querySelectorAll('input[name="car_type"]');
let distance = document.querySelector('input[name="distance"');
let time = document.querySelector('input[name="waiting_time"');
let purchase = document.querySelector("#purchase");
let priceDisplay = document.querySelector(".price");
let invoiceDisplay = document.querySelector(".invoice");
let closeModal = document.querySelector("#close-modal");
let openModal = document.querySelector("#print-invoice");
let total_amount_display = document.querySelector(".total_amount");
let invoice_main_display = document.querySelector(".invoice__display--main");
cars.forEach(car => {
    car.addEventListener('click', () => {
        carType = car.value;
    })
})

function totalPrice(carType) {
    let total = 0;
    prices = calculatePriceDistance(carType, Number(distance.value));
    priceWaiting = calculatePriceWaiting(carType, Number(time.value));
    prices.forEach(price => {
        total += price;
    })
    return total + priceWaiting;
}

function calculatePriceDistance(carType, distance) {
    let priceCar = carTypes[carType];
    let price = [];
    price[0] = priceCar[0];
    if (distance <= 19) {
        price[1] = ((distance - 1) * priceCar[1]);
    } else {
        price[1] = (priceCar[1] * 19);
        price[2] = (distance - 20) * priceCar[2];
    }
    return price;
}

function calculatePriceWaiting(carType, time) {
    let priceWaiting = carTypes[carType][3];
    let price = 0;
    let mod = time % 3;
    if (mod <= 3) {
        price = (mod % 3 * priceWaiting) + (((time - time % 3) / 3) * priceWaiting);
    } else {
        price = ((time - time % 3) / 3) * priceWaiting;
    }
    return price;
}
purchase.addEventListener('click', () => {
    amount = totalPrice(carType);
    priceDisplay.querySelector('span').innerHTML = amount;
    priceDisplay.style.display = 'block';
    openModal.style.pointerEvents = 'all';
    openModal.style.opacity = 1;
})
closeModal.addEventListener('click', () => {
    invoiceDisplay.style.visibility = 'hidden';
    invoiceDisplay.querySelector(".invoice__display").style.transform = 'scale(0)';
})
openModal.addEventListener('click', () => {
    printInvoice(carTypes[carType], distance.value, time, prices, amount);
    invoiceDisplay.style.visibility = 'visible';
    invoiceDisplay.querySelector(".invoice__display").style.transform = 'scale(1)';
})

function addDetailInvoice(detail, usage, unitPrice, amount) {
    let target = document.createElement('ul');
    let arr = [detail, usage, unitPrice, amount];
    arr.forEach(element => {
        let column = document.createElement('li');
        column.innerHTML = element;
        target.appendChild(column);
    })
    return target;
}

function printInvoice(carType, distance, time, prices, amount) {
    let target = document.querySelector('.invoice__display--main--title');
    let invoiceDescription = document.querySelector('.total_amount');
    target.innerHTML = '';
    invoiceDescription.innerHTML = '';
    target.appendChild(addDetailInvoice(carType[4], '1', carType[1], prices[0]));
    if (distance <= 19) {
        target.appendChild(addDetailInvoice(carType[4], (distance - 1), carType[2], prices[1]));
    } else {
        console.log(distance);
        target.appendChild(addDetailInvoice(carType[4], 19, carType[2], prices[1]));
        target.appendChild(addDetailInvoice(carType[4], (distance - 20), carType[3], prices[2]));
    }
    if (time > 0) {
        target.appendChild(addDetailInvoice('Thòi gian chờ', time, carType[3], prices[0]));
    }
    invoiceDescription.appendChild(addDetailInvoice('Tổng tiền phải trả', '', '', amount));
}