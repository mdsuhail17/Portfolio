# Animated Portfolio Website

A highly animated and visually engaging portfolio website built with Next.js, Tailwind CSS, and Framer Motion, inspired by modern design aesthetics.

## 🚀 Features

- **Hero Section**: Animated text, floating particles, mouse-following effects, and smooth entrance animations
- **About Section**: Animated profile card with rotating elements and text reveal animations
- **Skills Section**: Interactive progress bars, animated icons, and skill showcases
- **Projects Section**: Hover animations, project cards with smooth transitions, and interactive overlays
- **YouTube Section**: Animated carousel/grid for video content with interactive controls
- **Experience Section**: Timeline-style animations showing work experience with floating elements
- **Contact Section**: Animated contact form with floating effects and smooth transitions
- **Navigation**: Smooth scrolling navigation with active section indicators

## 🎨 Design Features

- Modern glassmorphism effects
- Gradient animations and text effects
- Smooth scroll animations
- Interactive hover states
- Responsive design
- Custom scrollbar styling
- Floating particle effects
- Dynamic background animations

## 🛠️ Technologies Used

- **Next.js 14** - React framework
- **Framer Motion** - Animation library
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library
- **React Hooks** - State management

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🎯 Customization

### Personal Information
Update the following files with your personal information:

- `app/components/AboutSection.jsx` - Your name, title, and bio
- `app/components/SkillsSection.jsx` - Your technical skills
- `app/components/ProjectsSection.jsx` - Your projects and portfolio items
- `app/components/YouTubeSection.jsx` - Your YouTube videos or content
- `app/components/ExperienceSection.jsx` - Your work experience
- `app/components/ContactSection.jsx` - Your contact information

### Colors and Styling
The color scheme can be customized in:
- `tailwind.config.js` - Custom color palette
- `app/globals.css` - Global styles and animations

### Animation Settings
Adjust animation timing and effects in each component file by modifying the Framer Motion variants and transition properties.

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🎭 Animation Performance

All animations are optimized for performance:
- Uses `transform` and `opacity` properties for smooth animations
- Implements `will-change` CSS property where needed
- Uses `useInView` hook to trigger animations only when elements are visible
- Debounced scroll and mouse events

## 🚀 Deployment

Build the project for production:

```bash
npm run build
npm start
```

Deploy to platforms like:
- Vercel (recommended for Next.js)
- Netlify
- GitHub Pages

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

---

Built with ❤️ using Next.js and Framer Motion
