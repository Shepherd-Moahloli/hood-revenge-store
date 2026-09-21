# Hood Revenge Store

## Overview
Hood Revenge Store is an e-commerce website built with Next.js, providing a seamless shopping experience for users. The application features a dynamic product catalog, user-friendly navigation, and responsive design.

## Features
- Dynamic product pages with detailed information
- Customizable header and footer components
- Global styles for consistent design
- API integration for fetching product data

## Project Structure
```
hood-revenge-store
├── src
│   ├── pages
│   │   ├── api
│   │   │   └── hello.ts
│   │   ├── _app.tsx
│   │   ├── index.tsx
│   │   └── products
│   │       └── [id].tsx
│   ├── components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── ProductCard.tsx
│   ├── styles
│   │   └── globals.css
│   ├── lib
│   │   └── api.ts
│   └── types
│       └── index.ts
├── public
│   └── robots.txt
├── .gitignore
├── package.json
├── tsconfig.json
└── next.config.js
```

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd hood-revenge-store
   ```
3. Install dependencies:
   ```
   npm install
   ```

## Running the Project
To start the development server, run:
```
npm run dev
```
Open your browser and navigate to `http://localhost:3000` to view the application.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.