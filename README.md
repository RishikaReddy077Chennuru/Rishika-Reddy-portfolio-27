# ✨ Modern Portfolio Website

A stunning, interactive, and fully responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features beautiful animations, glassmorphism design, and modern web technologies.

## 🚀 Features

- **Modern Design**: Glassmorphism effects, gradient backgrounds, and smooth animations
- **Fully Responsive**: Perfect on all devices from mobile to desktop
- **Interactive Animations**: GSAP and AOS powered animations
- **Performance Optimized**: Fast loading with modern web techniques
- **SEO Friendly**: Structured data and meta tags for better search visibility
- **ATS Compatible**: Resume content is text-based and easily crawlable
- **Contact Form**: Working contact form with EmailJS integration
- **Particle Background**: Dynamic particle system for visual appeal

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS + Custom CSS
- **Animations**: GSAP + AOS (Animate On Scroll)
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: Ready for Netlify/Vercel

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── About.tsx       # About section
│   ├── Certifications.tsx # Certifications display
│   ├── Contact.tsx     # Contact form
│   ├── Education.tsx   # Education timeline
│   ├── Hero.tsx        # Hero/landing section
│   ├── Navbar.tsx      # Navigation bar
│   ├── ParticleBackground.tsx # Particle animation
│   ├── Projects.tsx    # Projects showcase
│   └── Skills.tsx      # Skills section
├── pages/
│   └── Index.tsx       # Main page
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── index.css          # Global styles
```

## 🎨 Customization Guide

### 1. Personal Information
Update the following files with your information:

**src/components/Hero.tsx**
```tsx
// Change name and title
<h1>Your Name</h1>
<p>Your Professional Title</p>
```

**src/components/About.tsx**
```tsx
// Update bio, stats, and profile image
```

**src/components/Contact.tsx**
```tsx
// Update contact information
const contactInfo = [
  {
    title: "Email",
    content: "your.email@example.com",
    link: "mailto:your.email@example.com"
  },
  // ... other contact details
];
```

### 2. Projects
**src/components/Projects.tsx**
```tsx
const projects = [
  {
    title: "Your Project Title",
    description: "Project description...",
    image: "path/to/your/image.jpg",
    technologies: ["React", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/yourusername/project",
    liveUrl: "https://yourproject.com"
  },
  // ... add more projects
];
```

### 3. Skills
**src/components/Skills.tsx**
```tsx
const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "Your Skill", level: 90 },
      // ... add your skills
    ]
  },
  // ... other categories
];
```

### 4. Education & Certifications
Update your educational background and certifications in their respective components.

### 5. SEO & Meta Data
**index.html**
```html
<title>Your Name - Your Title</title>
<meta name="description" content="Your description" />
<!-- Update all meta tags with your information -->
```

## 🚀 Quick Start

1. **Clone the repository**
```bash
git clone <repository-url>
cd portfolio-website
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

4. **Build for production**
```bash
npm run build
```

## 🌐 Deployment

### Netlify
1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to [Netlify Drop](https://app.netlify.com/drop)

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel` and follow the prompts

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
```json
{
  "scripts": {
    "deploy": "npm run build && gh-pages -d dist"
  }
}
```
3. Run: `npm run deploy`

## 📱 Features Overview

### Responsive Design
- Mobile-first approach
- Flexible grid layouts
- Adaptive typography
- Touch-friendly interactions

### Performance
- Lazy loading for images
- Optimized animations
- Minimal bundle size
- Fast loading times

### Accessibility
- Semantic HTML
- ARIA labels
- Keyboard navigation
- Screen reader friendly

### SEO
- Meta tags
- Structured data
- Sitemap ready
- Social media cards

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](issues).

## 💡 Tips for Success

1. **Keep content updated**: Regularly update your projects and skills
2. **Use high-quality images**: Ensure all images are optimized and professional
3. **Test on devices**: Check how your portfolio looks on different devices
4. **Monitor performance**: Use tools like Lighthouse to optimize performance
5. **Get feedback**: Ask peers to review your portfolio

## 📞 Support

If you have any questions or need help customizing the portfolio, feel free to reach out!

---

**Made with ❤️ using React + TypeScript + Tailwind CSS**
