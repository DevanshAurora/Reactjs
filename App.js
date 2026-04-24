/* RESET */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* BODY */
body {
  font-family: "Poppins", sans-serif;
  background: linear-gradient(135deg, #0f0f0f, #1c1c1c);
  color: white;
}

/* NAV */
.nav {
  display: flex;
  justify-content: space-between;
  padding: 15px 30px;
  background: rgba(0,0,0,0.9);
  backdrop-filter: blur(10px);
}

.nav h2 {
  color: #e50914;
}

.nav a {
  margin-left: 20px;
  text-decoration: none;
  color: white;
}

.nav a:hover {
  color: #e50914;
}

/* SEARCH */
.search {
  display: flex;
  justify-content: center;
  margin: 30px;
  gap: 10px;
}

.search input {
  padding: 12px;
  width: 300px;
  border-radius: 8px;
  border: none;
  background: #2a2a2a;
  color: white;
}

.search button {
  padding: 12px 20px;
  background: #e50914;
  border: none;
  border-radius: 8px;
  color: white;
  cursor: pointer;
}

/* GRID */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 25px;
  padding: 20px;
}

/* CARD */
.card {
  background: #1a1a1a;
  border-radius: 12px;
  overflow: hidden;
  transition: 0.4s;
  cursor: pointer;
}

.card img {
  width: 100%;
  height: 280px;
  object-fit: cover;
}

.card:hover {
  transform: scale(1.08);
  box-shadow: 0 0 20px red;
}

/* DETAILS */
.details {
  display: flex;
  gap: 40px;
  padding: 30px;
  flex-wrap: wrap;
  justify-content: center;
}

.details img {
  width: 280px;
  border-radius: 12px;
}

/* STARS */
.stars span {
  font-size: 28px;
  cursor: pointer;
  color: #555;
}

.stars .active {
  color: gold;
}

/* REVIEW FORM */
.review-form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 15px;
}

.review-form input,
.review-form textarea {
  padding: 12px;
  border-radius: 8px;
  border: none;
  background: #2a2a2a;
  color: white;
}

.review-form button {
  padding: 12px;
  background: #e50914;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

/* REVIEW SECTION */
.reviews-container {
  margin-top: 20px;
}

.review-card {
  background: #2a2a2a;
  padding: 15px;
  border-radius: 10px;
  margin-top: 10px;
  transition: 0.3s;
}

.review-card:hover {
  transform: translateX(5px);
  box-shadow: 0 0 10px red;
}

.review-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
}

.review-name {
  font-weight: bold;
}

.review-rating {
  color: gold;
}
/* PAGE STYLING */
.page {
  padding: 30px;
  max-width: 800px;
  margin: auto;
  line-height: 1.6;
}

.page h1 {
  color: #e50914;
  margin-bottom: 15px;
}

.page h2 {
  margin-top: 20px;
}

.page ul {
  margin-left: 20px;
}

/* CONTACT FORM */
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
}

.contact-form input,
.contact-form textarea {
  padding: 12px;
  border-radius: 8px;
  border: none;
  background: #2a2a2a;
  color: white;
}

.contact-form textarea {
  min-height: 120px;
}
.hero h1 {
  font-size: 3rem;
  color: #e50914;
  text-shadow: 0 0 10px rgba(229,9,20,0.7);
}
.hero {
  height: 70vh;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.hero h1 {
  font-size: 3rem;
  color: #e50914;
}

.hero p {
  color: #ccc;
  margin: 10px 0;
}

.hero button {
  padding: 12px 20px;
  background: #e50914;
  border: none;
  color: white;
  cursor: pointer;
}

.contact-form button {
  padding: 12px;
  background: #e50914;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

.review-text {
  color: #ccc;
}

.empty {
  color: gray;
}

/* ERROR */
.error {
  color: red;
  text-align: center;
}