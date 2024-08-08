const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");






document.querySelector('.search-button').addEventListener('click', function() {
  const query = document.getElementById('search-input').value;
  const selectedFilters = [...document.querySelectorAll('.filter-checkbox:checked')].map(cb => cb.value);

  // Use 'query' and 'selectedFilters' to filter the results (fetch from the server or filter a local list)
  console.log('Search Query:', query);
  console.log('Selected Filters:', selectedFilters);
  
  // Example: Filter and display the results based on 'query' and 'selectedFilters'
});







// Example suggestions array (in a real scenario, fetch this from a server)
const suggestions = [
  "Air Jordan 1",
  "Nike Air Max",
  "Blazer",
  "Crater",
  "Hippie",
  "Converse Chuck Taylor"
];

function showSuggestions(query) {
  const suggestionsBox = document.getElementById('suggestions-box');
  suggestionsBox.innerHTML = ''; // Clear previous suggestions
  if (query.length === 0) {
      suggestionsBox.style.display = 'none';
      return;
  }

  const filteredSuggestions = suggestions.filter(item => item.toLowerCase().includes(query.toLowerCase()));

  if (filteredSuggestions.length > 0) {
      filteredSuggestions.forEach(item => {
          const suggestionItem = document.createElement('a');
          suggestionItem.href = '#';
          suggestionItem.textContent = item;
          suggestionsBox.appendChild(suggestionItem);
      });
      suggestionsBox.style.display = 'block';
  } else {
      suggestionsBox.style.display = 'none';
  }
}

// Filtering function can be added here to filter search results based on the selected checkboxes




document.addEventListener('DOMContentLoaded', () => {
  const cartIcon = document.querySelector('.cartIcon');
  const cartModal = document.getElementById('cartModal');
  const closeCart = document.querySelector('.closeCart');
  const checkoutButton = document.querySelector('.checkoutButton');
  const cartItemsList = document.querySelector('.cartItems');
  const cartTotal = document.querySelector('.cartTotal');

  let cart = [];
  let cartCount = 0;

  const updateCart = () => {
      cartItemsList.innerHTML = '';
      let total = 0;

      cart.forEach(item => {
          const li = document.createElement('li');
          li.textContent = `${item.name} - $${item.price}`;
          cartItemsList.appendChild(li);
          total += item.price;
      });

      cartTotal.textContent = total.toFixed(2);
      document.querySelector('.cartCount').textContent = cart.length;
  };

  const openCart = () => {
      cartModal.style.display = 'flex';
  };

  const closeCartModal = () => {
      cartModal.style.display = 'none';
  };

  cartIcon.addEventListener('click', openCart);
  closeCart.addEventListener('click', closeCartModal);
  checkoutButton.addEventListener('click', () => {
      alert('Proceed to checkout!');
      closeCartModal();
  });

  // Example code to add items to the cart
  document.querySelectorAll('.buyButton').forEach((button, index) => {
      button.addEventListener('click', () => {
          const item = {
              name: document.querySelectorAll('.sliderTitle')[index].textContent,
              price: parseFloat(document.querySelectorAll('.sliderPrice')[index].textContent.replace('$', ''))
          };
          cart.push(item);
          updateCart();
      });
  });
});




const dots = document.querySelectorAll('.sliderDot');
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        document.querySelector('.sliderWrapper').style.transform = `translateX(-${index * 100}vw)`;
        dots.forEach(d => d.classList.remove('active'));
        dot.classList.add('active');
    });
});





document.querySelector('.payButton').addEventListener('click', () => {
  const inputs = document.querySelectorAll('.payInput');
  let valid = true;

  inputs.forEach(input => {
      if (input.value === '') {
          valid = false;
          input.style.borderColor = 'red';
      } else {
          input.style.borderColor = 'gray';
      }
  });

  if (!valid) {
      alert('Please fill out all fields.');
      return;
  }

  alert('Payment processed successfully!');
});






const products = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
      {
        code: "black",
        img: "./img/air.png",
      },
      {
        code: "darkblue",
        img: "./img/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "./img/jordan.png",
      },
      {
        code: "green",
        img: "./img/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "./img/blazer.png",
      },
      {
        code: "green",
        img: "./img/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 129,
    colors: [
      {
        code: "black",
        img: "./img/crater.png",
      },
      {
        code: "lightgray",
        img: "./img/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "./img/hippie.png",
      },
      {
        code: "black",
        img: "./img/hippie2.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
