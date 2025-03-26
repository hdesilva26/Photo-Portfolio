# Photo Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Material-UI to showcase photography work.

## Features

- Responsive design that works on all devices
- Modern UI with smooth animations using Framer Motion
- Photo gallery with filtering capabilities
- Contact form with validation
- About section with skills and equipment
- Social media integration
- Dark mode theme

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Getting Started

1. Clone the repository:

```bash
git clone <your-repository-url>
cd photo-portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

The website will be available at `http://localhost:3000`

## Building for Production

To create a production build:

```bash
npm run build
```

This will create an optimized production build in the `build` folder.

## Deployment

### Option 1: Deploy to Netlify

1. Create a Netlify account if you don't have one
2. Install Netlify CLI:

```bash
npm install -g netlify-cli
```

3. Deploy:

```bash
netlify deploy
```

### Option 2: Deploy to Vercel

1. Create a Vercel account if you don't have one
2. Install Vercel CLI:

```bash
npm install -g vercel
```

3. Deploy:

```bash
vercel
```

### Option 3: Deploy to GitHub Pages

1. Add the following to your `package.json`:

```json
{
  "homepage": "https://yourusername.github.io/photo-portfolio",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

2. Install gh-pages:

```bash
npm install --save-dev gh-pages
```

3. Deploy:

```bash
npm run deploy
```

## Customization

1. Replace the placeholder images in the `src/pages` components with your own photos
2. Update the content in `About.tsx` with your personal information
3. Modify the theme colors in `App.tsx`
4. Update social media links in `Contact.tsx`

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
