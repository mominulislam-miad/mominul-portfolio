# ⚡ Mominul Islam — Developer Portfolio

A developer portfolio built with **React 19**, **Tailwind CSS**, **Framer Motion**, **GSAP**, and **Lenis Scroll**. Features an iOS/cyberpunk frosted glass aesthetic, kinetic 3D typography, particle fields, planetary orbit skill visualizers, and interactive magnetic controls.

---

## 🌟 Key Features

- **🚀 Ultra Fast & Responsive**: Built with Vite 7 and React 19 for instantaneous hot module replacement (HMR) and optimized production bundles.
- **✨ Apple iOS-Style Frosted Glass**: Dynamic blurred glass panels (`backdrop-filter`) with custom ambient neon glows.
- **🪐 Planetary Orbital Skills Stage**: Multi-orbit cosmic visualization revolving technologies around a core hub, paired with interactive 3D tilt cards.
- **🌊 Lenis Smooth Momentum Scrolling**: Decoupled momentum scrolling synchronized seamlessly with **GSAP ScrollTrigger**.
- **🎯 Interactive Magnetic Buttons**: Buttons that calculate real-time mouse distance and physically pull toward the user's cursor.
- **📱 iOS Control-Center Mobile Navigation**: Floating pill navbar on desktop transitioning into an animated modal drawer on mobile.
- **🖥️ Simulated Browser Mockups**: Realistic Mac-style application windows showcasing projects with gradient overlays and live demo links.
- **📬 Contact Form & Channels**: Interactive messaging interface, direct email/phone links, and quick-connect social channels.

---

## 🛠️ Tech Stack

| Category | Technologies |
| :--- | :--- |
| **Frontend Framework** | [React 19](https://react.dev/) |
| **Build Tool & Bundler** | [Vite 7](https://vitejs.dev/) |
| **Styling & Design System** | [Tailwind CSS 3](https://tailwindcss.com/), [PostCSS](https://postcss.org/), [Autoprefixer](https://github.com/postcss/autoprefixer) |
| **Animations & Motion** | [Framer Motion 12](https://www.framer.com/motion/), [GSAP 3](https://gsap.com/) (ScrollTrigger) |
| **Smooth Scrolling** | [Lenis](https://github.com/darkroomengineering/lenis) |
| **Icons** | [React Icons](https://react-icons.github.io/react-icons/) (FontAwesome, SimpleIcons, Feather) |
| **Typography** | Space Grotesk & Inter via Google Fonts |

---

## 🎨 How to Customize Your Content

All website content is conveniently organized in clean, well-commented files:

### 1. Update Content, Skills & Projects (`src/data.js`)
Edit [`src/data.js`](src/data.js) to modify:
- **`navItems`**: Navigation links.
- **`stats`**: Metric counters displayed in the Hero section.
- **`skills`**: Add/remove technologies, custom icons, and accent colors.
- **`projects`**: Project titles, descriptions, tech tags, and card gradients.
- **`services`**: Development services and descriptions.
- **`socials`**: Social media profiles (GitHub, LinkedIn, WhatsApp, etc.).

### 2. Update Profile Photo & Resume
- **Photo**: Replace `public/avatar.png` with your own square photo (PNG or JPG).
- **Resume/CV**: Place your PDF file in `public/mominul-islam-cv.pdf`.

### 3. Connect the Contact Form to Real Emails
In [`src/components/Contact.jsx`](src/components/Contact.jsx), replace the simulated `submit` handler with an email service like [Formspree](https://formspree.io/) or [EmailJS](https://www.emailjs.com/):
```javascript
async function submit(event) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  
  await fetch("https://formspree.io/f/YOUR_FORM_ID", {
    method: "POST",
    body: formData,
    headers: { Accept: "application/json" },
  });
  
  setSent(true);
  event.currentTarget.reset();
}
```

### 4. Adjust Colors & Theme Tokens
Open [`tailwind.config.js`](tailwind.config.js) to customize the brand palette:
```javascript
colors: {
  space: '#050816',   // Base dark background
  cyan: '#38BDF8',    // Primary highlight
  mint: '#2DD4BF',    // Secondary green accent
  violet: '#7C3AED',  // Accent purple
}
```

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
