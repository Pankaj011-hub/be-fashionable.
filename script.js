// script.js

// Show alert when any button is clicked
document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', () => {
    alert('Product added to cart!');
  });
});

console.log("Welcome to Be Fashionable!");

// If you need to update cart counter (for example), you can do something like:
let cartCount = 0;
document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', () => {
    cartCount++;
    // Update the cart item count text (assuming you have an element for Cart)
    document.querySelector('a[href="#"]').textContent = `Cart (${cartCount})`;
  });
});
