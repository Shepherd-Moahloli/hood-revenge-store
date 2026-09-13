# HOOD REVENGE eCommerce Store

Welcome to the HOOD REVENGE eCommerce store project! This project is a fully responsive online store for the streetwear brand "HOOD REVENGE," designed with a minimalist, monochrome aesthetic.

## Project Structure

The project is structured as follows:

```
hood-revenge-store
├── src
│   ├── pages
│   │   ├── _app.tsx
│   │   ├── _document.tsx
│   │   ├── index.tsx
│   │   ├── cart.tsx
│   │   ├── checkout.tsx
│   │   ├── search.tsx
│   │   ├── account
│   │   │   └── index.tsx
│   │   └── product
│   │       └── [slug].tsx
│   ├── components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── ProductCard.tsx
│   │   ├── ProductGrid.tsx
│   │   ├── ProductGallery.tsx
│   │   ├── CartDrawer.tsx
│   │   ├── CheckoutForm.tsx
│   │   └── Icon
│   │       └── CloseIcon.tsx
│   ├── styles
│   │   ├── globals.css
│   │   └── components
│   │       └── header.css
│   ├── lib
│   │   ├── api.ts
│   │   └── stripe.ts
│   ├── hooks
│   │   ├── useCart.ts
│   │   └── useProduct.ts
│   ├── context
│   │   └── CartContext.tsx
│   └── types
│       └── index.ts
├── pages
│   └── api
│       ├── products.ts
│       ├── cart.ts
│       └── checkout.ts
├── public
│   └── fonts
├── .eslintrc.json
├── .gitignore
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## Features

- **Responsive Design**: The website is fully responsive, ensuring a seamless experience across devices.
- **Minimalist Aesthetic**: The design follows a monochrome theme, focusing on simplicity and elegance.
- **Product Management**: Users can browse products, view details, and add items to their cart.
- **Checkout Process**: A streamlined checkout process allows users to complete their purchases easily.
- **User Account Management**: Users can create and manage their accounts.

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd hood-revenge-store
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Run the development server:
   ```
   npm run dev
   ```

5. Open your browser and go to `http://localhost:3000` to view the application.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.