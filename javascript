document.getElementById('order-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    const burgerQty = parseInt(document.getElementById('burgerQty').value);
    if (isNaN(burgerQty) || burgerQty < 0 || burgerQty > 10) {
        alert('Please enter a valid quantity for Burger (1-10).');
        return;
    }

    
    const pizzaQty = parseInt(document.getElementById('pizzaQty').value);
    if (isNaN(pizzaQty) || pizzaQty < 0 || pizzaQty > 10) {
        alert('Please enter a valid quantity for Pizza (1-10).');
        return;
    }

    
    const saladQty = parseInt(document.getElementById('saladQty').value);
    if (isNaN(saladQty) || saladQty < 0 || saladQty > 10) {
        alert('Please enter a valid quantity for Salad (1-10).');
        return;
    }

    
    alert('Order placed!');
  
});
