// Retrieve products from localStorage
const products = JSON.parse(localStorage.getItem("products")) || [

		{
			"productName": "iPhone",
			"productDetails": "A smartphone from Apple",
			"productPrice": 999,
			"quantity": 10,
			"date": "2023-03-18",
			"productAvailability": "In_Stock",
			"category": "electronics",
			"image": "images/asus_laptop.jpg"
		},
		{
			"productName": "Puma Men Regular T-Shirt",
			"productDetails": "TeamCUP Training Mens Football Jersey",
			"productPrice": 9.99,
			"quantity": 20,
			"date": "2023-02-15",
			"productAvailability": "In_Stock",
			"category": "fashion",
			"image": "images/man1.jpg"
		},
		{
			"productName": "Puma Men Camo Sweat Pants,Black",
			"productDetails": "Designed for comfortable wear for sports and street-style, PUMA apparels are always fun to wear.",
			"productPrice": 19.99,
			"quantity": 0,
			"date": "2023-01-10",
			"productAvailability": "Out_of_Stock",
			"category": "fashion",
			"image": "images/man_trouser.jpg"
		},
{
			"productName": "ASUS Vivobook 14, Intel Core i7-1165G7 11th Gen",
			"productDetails": "11th Gen Intel Core i7-1165G7 Processor 2.8 GHz (12M Cache, up to 4.7 GHz, 4 cores)11th Gen Intel Core i7-1165G7 Processor 2.8 GHz (12M Cache, up to 4.7 GHz, 4 cores)",
			"productPrice": 900,
			"quantity": 0,
			"date": "2023-03-18",
			"productAvailability": "Out_of_Stock",
			"category": "electronics",
			"image": "images/asus_laptop.jpg"
		},
		{
			"productName": "Canon EOS 1500D 24.1MP Digital SLR Camera (Black)",
			"productDetails": "Built-In Monaural Microphone, Sound-Recording Level Adjustable, Wind Filter Provided",
			"productPrice": 590.22,
			"quantity": 20,
			"date": "2023-01-20",
			"productAvailability": "In_Stock",
			"category": "electronics",
			"image": "images/canon_camera.jpg"
		},
		{
			"productName": "The Lord of the Rings (1)- FELLOWSHIP OF THE RING",
			"productDetails": "Discover The MiddleEast Advencher",
			"productPrice": 8.99,
			"quantity": 1,
			"date": "2023-03-10",
			"productAvailability": "In_Stock",
			"category": "books",
			"image": "images/book_lord.jpg"
		},
{
			"productName": "Harry Potter and the Philosophers Stone",
			"productDetails": "magical classic Harry Potter and the Philosophers Stone!",
			"productPrice": 5.99,
			"quantity": 0,
			"date": "2023-03-01",
			"productAvailability": "Out_of_Stock",
			"category": "books",
			"image": "images/book_harry.jpg"
		},
		{
			"productName": "Nescafé Classic Instant Coffee",
			"productDetails": "Premium frothy instant coffee right at home; a must try for all coffee-lovers. Flavor: Plain",
			"productPrice": 4.99,
			"quantity": 25,
			"date": "2023-01-25",
			"productAvailability": "Out_of_Stock",
			"category": "grocery",
			"image": "images/grocerey_coffe.jpg"
		},
		{
			"productName": "DiSano Pastalicious 100% Durum Wheat Penne Pasta",
			"productDetails": "100% durum wheat;Source of protein",
			"productPrice": 1.89,
			"quantity": 0,
			"date": "2023-01-02",
			"productAvailability": "Out_of_Stock",
			"category": "grocery",
			"image": "images/grocerry_pasta.jpg"
		},
{
			"productName": "MK Handicraft (PurpleCrown, Pack of 3pieces Multicolor Pure Breathable Cotton and high Absorbent bedsheet for Newborn Babies",
			"productDetails": "Ideal for keeping baby in comfort and sweat free due to its soft cushion feel and high absorbent capacity.",
			"productPrice": 5.99,
			"quantity": 10,
			"date": "2023-01-08",
			"productAvailability": "In_Stock",
			"category": "baby",
			"image": "images/baby_blanket.jpg"
		},
		{
			"productName": "TRabbit Convertible Baby Car Seat Jack N Jill Grand Innovative ECE",
			"productDetails": "Safety 1st- Jack N Jill Grand Car Seat is ECE R44/04 Certified for Safety. Its Engineered & crash tested to meet or exceed European Safety standards",
			"productPrice": 60.99,
			"quantity": 0,
			"date": "2023-03-01",
			"productAvailability": "Out_of_Stock",
			"category": "baby",
			"image": "images/baby_trolly.jpg"
		},
		{
			"productName": "Mobil Super 3000 X1 Formula FE 5W-30 Fully Synthetic Petrol/Diesel Engine Oil",
			"productDetails": "90% better wear protection based on ASTM D7320 Seq. IIIG test results versus API SN engine test requirement",
			"productPrice": 19.99,
			"quantity": 5,
			"date": "2023-01-18",
			"productAvailability": "In_Stock",
			"category": "accessories",
			"image": "images/car_engineOil.jpg"
		},
	{
			"productName": "Vega Bolt Black Helmet-M",
			"productDetails": "High Impact ABS Material Shell and Aerodynamic design",
			"productPrice": 24.99,
			"quantity": 0,
			"date": "2023-01-20",
			"productAvailability": "Out_of_Stock",
			"category": "accessories",
			"image": "images/car_helmet.jpg"
		}

];

// Save products to localstorage
	localStorage.setItem("products", JSON.stringify(products))

// Render products on the page
const productList = document.getElementById("product-list");
const categoryButtons = document.querySelectorAll("#category-filters button");
const searchInput = document.getElementById("search-input");



// Filter products based on category
function filterProducts(category, keyword) {
  let filteredProducts = products;
  if (category !== "all") {
    filteredProducts = filteredProducts.filter(product => product.category === category);
  }
  if (keyword) {
    const lowercaseKeyword = keyword.toLowerCase();
    filteredProducts = filteredProducts.filter(product =>
      product.productName.toLowerCase().includes(lowercaseKeyword) ||
      product.productDetails.toLowerCase().includes(lowercaseKeyword)||
      product.category.toLowerCase().includes(lowercaseKeyword)
    );
  }
  return filteredProducts;
}

// Display filtered products on the page
function displayProducts(category, keyword) {
  const filteredProducts = filterProducts(category, keyword);

  productList.innerHTML = "";

  filteredProducts.forEach((product,i) => {
   const productElem = document.createElement("div");
  productElem.classList.add("product");

  const imgElem = document.createElement("img");
  imgElem.src = product.image;
  imgElem.alt = product.productName;
  productElem.appendChild(imgElem);

  const nameElem = document.createElement("div");
  nameElem.classList.add("product-name");
  nameElem.textContent = product.productName;
  productElem.appendChild(nameElem);

  const detailsElem = document.createElement("div");
  detailsElem.classList.add("product-details");
  detailsElem.textContent = product.productDetails;
  productElem.appendChild(detailsElem);

  const pAvailElem = document.createElement("div");
  pAvailElem.classList.add("product-pAvailElem");
  pAvailElem.textContent = "Availability: " + product.productAvailability;
  productElem.appendChild(pAvailElem);

  const priceElem = document.createElement("div");
  priceElem.classList.add("product-cat");
  priceElem.textContent = "Price: "+ `$${product.productPrice}`;
  productElem.appendChild(priceElem);

  // Create Add to Cart button (if available)
  if (product.productAvailability == 'In_Stock' && product.quantity > 0) {
	const add_to_cart_button = document.createElement('button');
	add_to_cart_button.classList.add('add_to_cart');
	add_to_cart_button.dataset.product = i;
	add_to_cart_button.textContent = 'Add to Cart';
	productElem.appendChild(add_to_cart_button);
  }
  productList.appendChild(productElem);
});

}

 // Handle add to cart button clicks
 $('#product-list').on('click', '.add_to_cart', function() {
    const product_index = parseInt($(this).data('product'));
    const product = products[product_index];
    if (product.productAvailability == 'In_Stock' && product.quantity > 0) {
      // TODO: Add product to cart
	  addToCart(product);
    }
  });




// Initialize page with all products
displayProducts("all");

// Event listeners for category filter buttons
categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const category = button.getAttribute("data-category");
    displayProducts(category);
  });
});

searchInput.addEventListener("input", () => {
  displayProducts("all", searchInput.value);
});



//Cart Update
function updateCart() {
  const cartItems = JSON.parse(sessionStorage.getItem("cartItems")) || [];
  const cartItemsElem = document.getElementById("cart-items");
  const cartTotalElem = document.getElementById("cart-total");

  cartItemsElem.innerHTML = "";
  let cartTotal = 0;
  cartItems.forEach((item,index)  => {
    const itemElem = document.createElement("li");
 itemElem.innerHTML = `${item.product.productName} : ${item.quantity} x ${item.product.productPrice} <button onclick="removeFromCart(${index})" > X Remove from Cart</button>`;
    cartItemsElem.appendChild(itemElem);
    cartTotal += item.product.productPrice * item.quantity;
  });

  cartTotalElem.textContent = `Total: $${cartTotal.toFixed(2)}`;

  // Show or hide the cart based on whether there are items in it
  const cartElem = document.getElementById("cart");
  if (cartItems.length === 0) {
    cartElem.classList.add("hidden");
  } else {
    cartElem.classList.remove("hidden");
  }
}

// Add a product to the cart
function addToCart(product) {
  let cartItems = JSON.parse(sessionStorage.getItem("cartItems")) || [];
  let cartItem = cartItems.find(item => item.product.productName === product.productName);

  if (cartItem) {
    // If the product is already in the cart, increment the quantity
    cartItem.quantity++;
let notification = document.getElementById('itemQuantity');
    notification.classList.add('show');
    setTimeout(function() {
    notification.classList.remove('show');
  }, 1000);

 

  } else {
    // Otherwise, add a new cart item
    cartItem = { product: product, quantity: 1 };
    cartItems.push(cartItem);
    let notification = document.getElementById('itemAdd');
    notification.classList.add('show');
    setTimeout(function() {
    notification.classList.remove('show');
  }, 1000);

  }

  sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
  updateCart();
}

// Remove a product from the cart

function removeFromCart(index) {
        let cart = JSON.parse(sessionStorage.getItem('cartItems')) || [];
        cart.splice(index, 1);
        sessionStorage.setItem('cartItems', JSON.stringify(cart));
        updateCart();
let notification = document.getElementById('itemRemove');
    notification.classList.add('show');
    setTimeout(function() {
    notification.classList.remove('show');
  }, 1000);


      }



// View the cart
function viewCart() {
  updateCart();
  const cartElem = document.getElementById("cart");
  cartElem.classList.remove("hidden");
}

// Close the cart
function closeCart() {
  updateCart();
  const cartElem = document.getElementById("cart");
  cartElem.classList.add("hidden");
}


// Checkout
function checkout() {
  alert("Thank you for your purchase!");
  sessionStorage.removeItem("cartItems");
  updateCart();
  
}