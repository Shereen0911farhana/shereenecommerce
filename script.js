let cartCount = 0;

const cartBtn = document.getElementById('cart-btn');
const cartCountDisplay = document.getElementById('cart-count');
const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');

// Function to handle adding items to the cart
function addToCart() {
    cartCount++;
    cartCountDisplay.textContent = cartCount;
    alert("Item added to cart!");
}

// Add click event to all "Add to Cart" buttons
addToCartButtons.forEach(button => {
    button.addEventListener('click', addToCart);
});
