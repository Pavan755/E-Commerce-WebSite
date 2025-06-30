
# 🛍️ E-commerce Website

A fully responsive and interactive front-end E-commerce website built using **HTML**, **CSS**, and **JavaScript**. This project mimics an online shoe store (Nike-inspired) with product browsing, cart simulation, payment popup, and secure login/registration pages using browser-based local storage.

---

## 🔥 Features

- 🖼️ Modern UI/UX layout with responsive design
- 👟 Interactive product showcase (Air Force, Jordan, Blazer, etc.)
- 🎨 Dynamic image & color switching
- 🛒 Buy Now & Payment popup simulation
- 🔐 User Authentication using `localStorage` (Register & Login)
- 📱 Mobile-friendly design (media query included)
- 💬 Footer with contact, newsletter, and social links

---

## 💻 Tech Stack

| Technology | Description                     |
|------------|---------------------------------|
| HTML5      | Markup for all pages            |
| CSS3       | Styling and responsiveness      |
| JavaScript | Functionality & user interaction|
| localStorage | Simulated user login/register |

---

## 🗂️ Folder Structure

```

E-commerce-website/
├── index.html         # Main website (storefront)
├── style.css          # Styles for index.html
├── app.js             # Dynamic logic for the product section
│
├── login.html         # User login page
├── register.html      # User registration page
├── login.css          # Styling for login and register pages
│
├── img/               # Product and UI-related images
└── README.md          # This file

````

---

## 🔐 Login/Registration Logic

This project uses **HTML + JS localStorage** to simulate login:
- Users can **register** with a username and password
- Data is saved in the browser
- Users can **login** with those credentials
- On successful login, they're redirected to the e-commerce site (`index.html`)

> ⚠️ This method is suitable for learning/demo only. Do **not** use in real-world production without backend security.

---

## 🎯 How to Use

1. **Clone the repo:**
   ```bash
   git clone https://github.com/your-username/e-commerce-website.git
````

2. **Open `register.html` in your browser**

   * Create a new user account
   * Then login using `login.html`

3. **On login success**

   * You’ll be redirected to `index.html`, the actual store

4. **Explore the features**

   * Try switching products, sizes, and "buy now" behavior

---

## 📸 Screenshots

| Login Page                   | Product Page                     | Payment Popup                    |
| ---------------------------- | -------------------------------- | -------------------------------- |
| ![Login](./img/ss-login.png) | ![Product](./img/ss-product.png) | ![Payment](./img/ss-payment.png) |

> You can add screenshots inside `/img` and update the paths accordingly.

---

## ✨ Future Improvements

* Integrate with Firebase/Node.js backend for real authentication
* Add product cart, order history & database support
* Implement search and filter functionality
* Add real payment gateway integration (Razorpay/Stripe)

---

## 🙋‍♀️ Author

**Pavan Kumar B**
Front-End Developer | CSE Student | Passionate about Coding, AI/ML, and Web Development

[![GitHub](https://img.shields.io/badge/GitHub-MugiPravallika-blue)](https://github.com/MugiPravallika)

---

## 📃 License

This project is licensed under the [MIT License](LICENSE).

---

## 🌐 Live Preview

If hosted, add the link here:
👉 [View Site on GitHub Pages](https://yourusername.github.io/e-commerce-website/)

---

```

---

Let me know if you:
- Want to host this on **GitHub Pages**
- Need help adding **screenshots**
- Want to expand this project further with **backend/Firebase**

I'll help you take it to the next level 💻🚀
```
