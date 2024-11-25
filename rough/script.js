const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");

burger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Automatically show the modal when the page loads
document.addEventListener("DOMContentLoaded", () => {
  const promoModal = new bootstrap.Modal(document.getElementById("promoModal"));
  promoModal.show();
});

// Login functionality
document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Dummy credentials
    const username = "student";
    const password = "12345";

    const userUsername = document.getElementById("username").value;
    const userPassword = document.getElementById("password").value;

    if (userUsername === username && userPassword === password) {
      alert("Login successful!");
      // Hide the modal after successful login
      $("#loginModal").modal("hide");
      // You can now show the user's profile or redirect to a dashboard
    } else {
      alert("Invalid credentials. Please try again.");
    }
  });

// Dummy Data (In real app, this would come from a database)
const userPreferences = {
  username: "student",
  favoriteGenres: ["Science", "History", "Technology"],
};

// Function to display personalized recommendations
function displayRecommendations() {
  const recommendedBooks = document.getElementById("recommendedBooks");

  userPreferences.favoriteGenres.forEach((genre) => {
    let bookCard = document.createElement("div");
    bookCard.classList.add("book-card");
    bookCard.innerHTML = `<h3>${genre} Books</h3><p>Recommendations will appear here...</p>`;
    recommendedBooks.appendChild(bookCard);
  });
}

// Call the function after user logs in
displayRecommendations();

// Search functionality
const searchInput = document.getElementById("searchInput");
const suggestionsList = document.getElementById("suggestionsList");

const books = [
  "JavaScript for Beginners",
  "Learning React.js",
  "HTML and CSS Design",
  "Web Development Essentials",
  "React in Action",
  "JavaScript: The Good Parts",
  "Mastering CSS",
  "Frontend Development with React",
  // Add your own book list here
];

searchInput.addEventListener("input", function () {
  const query = searchInput.value.toLowerCase();
  suggestionsList.innerHTML = "";

  if (query.length > 0) {
    const filteredBooks = books.filter((book) =>
      book.toLowerCase().includes(query)
    );

    if (filteredBooks.length > 0) {
      suggestionsList.style.display = "block";
      filteredBooks.forEach((book) => {
        const listItem = document.createElement("li");
        listItem.textContent = book;
        suggestionsList.appendChild(listItem);
      });
    } else {
      suggestionsList.style.display = "none";
    }
  } else {
    suggestionsList.style.display = "none";
  }
});

// Hide suggestions when clicking outside
document.addEventListener("click", function (event) {
  if (
    !searchInput.contains(event.target) &&
    !suggestionsList.contains(event.target)
  ) {
    suggestionsList.style.display = "none";
  }
});

const chatButton = document.getElementById("chatButton");
const chatWindow = document.getElementById("chatWindow");
const closeChat = document.getElementById("closeChat");
const sendMessage = document.getElementById("sendMessage");
const chatMessages = document.getElementById("chatMessages");
const chatInput = document.getElementById("chatInput");

chatButton.addEventListener("click", () => {
  chatWindow.style.display = "block";
});

closeChat.addEventListener("click", () => {
  chatWindow.style.display = "none";
});

sendMessage.addEventListener("click", () => {
  const message = chatInput.value.trim();

  if (message) {
    // Add user message
    const userMessage = document.createElement("div");
    userMessage.classList.add("user-message");
    userMessage.textContent = message;
    chatMessages.appendChild(userMessage);

    // Clear the input
    chatInput.value = "";

    // Simulate bot response
    setTimeout(() => {
      const botMessage = document.createElement("div");
      botMessage.classList.add("bot-message");
      botMessage.textContent = "We are processing your query...";
      chatMessages.appendChild(botMessage);

      // Auto-scroll to the latest message
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 1000);

    // Auto-scroll to the latest message
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
});

// Fade-in effect for sections
const sections = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);

// Observe each section
sections.forEach((section) => {
  observer.observe(section);
});

// Review form submission
document
  .getElementById("reviewSubmitForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Get the values from the form fields
    const userName = document.getElementById("userName").value;
    const userReview = document.getElementById("userReview").value;
    const rating = document.getElementById("rating").value;

    // Create a review object
    const review = {
      name: userName,
      review: userReview,
      rating: rating,
    };

    // Display the review
    displayReview(review);

    // Clear the form
    document.getElementById("reviewSubmitForm").reset();
  });

// Function to display the review in the reviews container
function displayReview(review) {
  const reviewsContainer = document.getElementById("reviewsContainer");

  const reviewElement = document.createElement("div");
  reviewElement.classList.add("review");

  reviewElement.innerHTML = `
    <h4>${review.name} (${review.rating} Stars)</h4>
    <p>${review.review}</p>
  `;

  reviewsContainer.appendChild(reviewElement);
}

// Exit-Intent Popup
let isPopupShown = false;
document.addEventListener("mouseout", (e) => {
  if (e.clientY < 0 && !isPopupShown) {
    document.getElementById("exitPopup").style.display = "flex";
    isPopupShown = true;
  }
});

document.getElementById("closePopup").addEventListener("click", () => {
  document.getElementById("exitPopup").style.display = "none";
});

// Promo page popup
document.addEventListener("DOMContentLoaded", function () {
  const promoPage = document.getElementById("promoPage");
  const closePopup = document.getElementById("closePopup");

  // Show the popup
  promoPage.style.display = "flex";

  // Close the popup when the "Close" button is clicked
  closePopup.addEventListener("click", function () {
    promoPage.style.display = "none"; // Hide the popup
  });
});
// Close the modal when the close button is clicked
document.getElementById("closeModal").addEventListener("click", function () {
  const promoModal = new bootstrap.Modal(document.getElementById("promoModal"));
  promoModal.hide();
});
// script.js

// Toggle Password Visibility
document.getElementById("togglePassword").addEventListener("click", function () {
  const passwordInput = document.getElementById("password");
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    this.textContent = "🙈"; // Change icon
  } else {
    passwordInput.type = "password";
    this.textContent = "👁️";
  }
});

// Form Submission Handling
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent page reload
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Simple validation
  if (email && password) {
    alert("Login successful! Redirecting to your library...");
    // Redirect to library homepage or perform further actions
    window.location.href = "library-home.html";
  } else {
    alert("Please fill out all fields.");
  }
});
const email = document.getElementById('email').value;
const password = document.getElementById('password').value;

if (email === "test@library.com" && password === "password123") {
    window.location.href = 'home.html';
} else {
    alert("Invalid login credentials!");
}
document.querySelectorAll('.membership-card').forEach((card, index) => {
  card.addEventListener('click', () => {
    const benefits = [
      'Personalized Study Plans: Our experts help design a schedule perfect for your preparation.',
      'Batch-Specific Networking: Connect with like-minded individuals and grow together.',
      'Flexible Timings: Choose from morning, afternoon, or evening slots based on your convenience.'
    ];
    alert(benefits[index]);
  });
});
document.querySelectorAll('.tech-card').forEach((card, index) => {
  card.addEventListener('click', () => {
    const features = [
      'Digital Batch Tracking: View and manage your study batch details digitally.',
      'Profile Management: Update personal details and track progress effortlessly.',
      'Advanced Search: Quickly locate resources or find events in seconds.'
    ];
    alert(features[index]);
  });
});
document.querySelectorAll('.perks-card').forEach((card, index) => {
  card.addEventListener('click', () => {
    const perksDetails = [
      'Hydration & Refreshments: Available all day to keep you energized.',
      'Motivational Events: Regularly scheduled sessions to keep you inspired.',
      'Progress Tracking: Monitor your study hours and achievements in real-time.'
    ];
    alert(perksDetails[index]);
  });
});
// Select the container
const cardsContainer = document.querySelector('.testimonials-cards');

// Auto-slide testimonials every 5 seconds
let scrollPosition = 0;
setInterval(() => {
  scrollPosition += 300; // Scroll width of one card
  if (scrollPosition >= cardsContainer.scrollWidth) {
    scrollPosition = 0; // Reset to start
  }
  cardsContainer.scrollTo({
    left: scrollPosition,
    behavior: 'smooth'
  });
}, 5000);
// Countdown Timer for Event Date
const eventDate = new Date("Nov 25, 2024 00:00:00").getTime();

setInterval(function() {
  const now = new Date().getTime();
  const distance = eventDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);
function toggleTip(index) {
  const tips = document.querySelectorAll('.study-tip');
  
  // Toggle the open class to show/hide content
  tips[index].classList.toggle('open');
}
// Handle Review Submission
document.getElementById('reviewForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = event.target.name.value;
  const reviewText = event.target.review.value;
  const rating = document.querySelector('input[name="rating"]:checked')?.value;

  if (rating) {
    const reviewItem = document.createElement('div');
    reviewItem.classList.add('review-item');

    // Add Name, Rating, and Review Text
    reviewItem.innerHTML = `
      <p class="review-name">${name}</p>
      <p class="review-rating">${'&#9733;'.repeat(rating)}</p>
      <p class="review-text">${reviewText}</p>
    `;

    // Append the review to the reviews list
    document.getElementById('reviews-list').appendChild(reviewItem);

    // Clear the form
    event.target.reset();
    alert("Thank you for your review!");
  } else {
    alert("Please select a rating before submitting.");
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const burgerMenu = document.getElementById("burgerMenu");
  const navLinks = document.getElementById("navLinks");

  burgerMenu.addEventListener("click", (e) => {
      e.stopPropagation(); // Prevent interaction from affecting other elements
      navLinks.classList.toggle("active");
      burgerMenu.classList.toggle("open");
  });
});

burgerMenu.addEventListener("click", () => {
  const body = document.body;
  const promoModal = document.getElementById("promoModal");
  if (!promoModal.classList.contains("open")) {
      body.classList.toggle("no-scroll");
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const heroContent = document.querySelector(".hero-content");

  window.addEventListener("scroll", () => {
    const heroPosition = heroContent.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.5;

    if (heroPosition < screenPosition) {
      heroContent.style.opacity = "1";
      heroContent.style.transform = "translateY(0)";
    } else {
      heroContent.style.opacity = "0";
      heroContent.style.transform = "translateY(20px)";
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector('.burger');
  const navLinks = document.querySelector('.nav-links');

  // Add toggle behavior only for mobile
  burger.addEventListener('click', () => {
    navLinks.classList.toggle('show'); // Toggle visibility for mobile menu

    // Update aria-expanded for accessibility
    const isExpanded = burger.getAttribute('aria-expanded') === 'true' || false;
    burger.setAttribute('aria-expanded', !isExpanded);
  });
});
document.addEventListener("mouseleave", function (e) {
  if (e.clientY < 0) {
    document.getElementById("exitPopup").style.display = "block";
  }
});

document.getElementById("closePopup").addEventListener("click", function () {
  document.getElementById("exitPopup").style.display = "none";
});
var exitModal = new bootstrap.Modal(document.getElementById('exitIntentModal'));
document.addEventListener("mouseleave", function (e) {
  if (e.clientY < 0) {
    exitModal.show();
  }
});
