// script.js

// Show alert when any button is clicked
document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', () => {
    alert('Product added to cart!');
  });
});

console.log("Welcome to Be Fashionable!");

const kurtiGrid = document.getElementById('kurti-grid');

for (let i = 1; i <= 27; i++) {
  const productCard = document.createElement('div');
  productCard.className = "border rounded-lg shadow-sm p-4 text-center";

  productCard.innerHTML = `
    <img src="kurtis/${i}.jpeg" alt="Kurti ${i}" class="mx-auto mb-4 max-h-60 object-contain">
    <h4 class="text-lg font-semibold">Kurti #${i}</h4>
    <p class="text-pink-600 font-bold">₹999</p>
    <button class="mt-2 bg-pink-600 text-white px-4 py-1 rounded hover:bg-pink-500">Add to Cart</button>
  `;

  kurtiGrid.appendChild(productCard);
}
