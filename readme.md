# Rapid Serve - 3D Interactive Web Experience

![Project Status](https://img.shields.io/badge/Status-Deployed-success)
![Three.js](https://img.shields.io/badge/Three.js-Black?logo=three.js)
![Vite](https://img.shields.io/badge/Vite-B73BFE?logo=vite&logoColor=FFD62E)

**Live Demo:** [https://rapid-serve.vercel.app/](https://rapid-serve.vercel.app/)

Rapid Serve is an immersive 3D interactive web experience. Originally based on an interactive 3D portfolio layout, the project has been tailored to create a high-performance, dynamic physics-based environment. Users can drive a 3D vehicle around the world and interact with physics elements.

## Features
- **Immersive 3D World:** Built with [Three.js](https://threejs.org/) for rendering and custom shaders.
- **Physics Engine:** Integrated with [Cannon.js](http://schteppe.github.io/cannon.js/) for realistic 3D vehicle physics and object interactions.
- **Animations:** Powered by [GSAP](https://gsap.com/) for smooth transitions and camera controls.
- **Audio:** Spatial and interactive audio using [Howler.js](https://howlerjs.com/).
- **Optimized Bundling:** Configured with [Vite](https://vitejs.dev/) for extremely fast development servers and optimized production builds.

## Technologies Used
- **HTML5 / CSS3 / JavaScript (ES6+)**
- **Three.js** - 3D rendering
- **Cannon.js** - Physics engine
- **GSAP** - Animations
- **Howler.js** - Audio management
- **Vite** - Build tool

## Setup & Local Development

1. **Clone the repository:**
   ```bash
   git clone <your-repository-url>
   cd folio-2019
   ```

2. **Install dependencies:**
   Make sure you have [Node.js](https://nodejs.org/en/download/) installed.
   ```bash
   npm install
   ```

3. **Run the local development server:**
   ```bash
   npm run dev
   ```
   Open your browser and navigate to the address provided by Vite (usually `http://localhost:5173/`).

4. **Build for production:**
   ```bash
   npm run build
   ```
   This will generate a `dist` directory with all optimized production assets

## Deployment

This project is configured for seamless deployment on [Vercel](https://vercel.com). The live version is continuously deployed from the `main` branch. 

Link: [https://rapid-serve.vercel.app/](https://rapid-serve.vercel.app/)

## License

This project is licensed under the [MIT License](LICENSE.md) - see the `LICENSE.md` file for details.


