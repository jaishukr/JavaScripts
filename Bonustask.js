let customerName = prompt("Enter Customer Name:");

const food = {
    name: "Pizza",
    price: 199
};

let quantity = Number(prompt("Enter Quantity:"));

let totalBill = food.price * quantity;

let discount = totalBill >= 500 ? totalBill * 0.10 : 0;

let finalBill = totalBill - discount;

let confirmOrder = confirm("Do you want to place the order?");

let orderStatus = confirmOrder ? "Order Placed" : "Order Cancelled";

if (confirmOrder) {
    alert(`Thank you ${customerName}! Your order has been placed.`);
} else {
    alert("Order Cancelled.");
}

console.log("==============================");
console.log("      FOOD ORDER SYSTEM");
console.log("==============================\n");

console.log(`Customer Name : ${customerName}`);
console.log(`Food Item     : ${food.name}`);
console.log(`Price         : ₹${food.price}`);
console.log(`Quantity      : ${quantity}`);
console.log(`Total Bill    : ₹${totalBill}`);
console.log(`Discount      : ₹${discount}`);
console.log(`Final Bill    : ₹${finalBill}`);
console.log(`Order Status  : ${orderStatus}`);
