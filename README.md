# 📝 Todo List App

A modern, responsive todo list application built with vanilla JavaScript, HTML5, and CSS3. Features glassmorphism design, smooth animations, and local data persistence.


## ✨ Features

- **Modern UI/UX** - Glassmorphism effects with gradient backgrounds
- **Fully Responsive** - Works seamlessly on all devices
- **Local Storage** - Automatic data persistence
- **Smart Sorting** - Incomplete tasks shown first
- **Real-time Stats** - Track completion progress
- **Form Validation** - Input sanitization and error handling
- **Smooth Animations** - CSS transitions and keyframe animations


## 🛠️ Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Flexbox, animations, gradients
- **JavaScript ES6+** - Classes, localStorage API

## 📦 Quick Start

```bash
# Clone repository
git clone https://github.com/fzpzmz/to-do-list.git

# Navigate to project
cd to-do-list

# Open in browser
open index.html
```

Or run with local server:
```bash
python -m http.server 8000  # Python
npx http-server             # Node.js
```

## 📁 Project Structure

```
├── index.html    # Main HTML file
├── styles.css    # All styling
├── script.js     # App logic
└── README.md     # Documentation
```

## 💻 Usage

1. **Add Task** - Type and press Enter or click +
2. **Complete Task** - Click checkbox to toggle
3. **Delete Task** - Click × button
4. **View Stats** - See progress at bottom

## 🎨 Key Implementation Details

### CSS Features
- CSS Grid & Flexbox layouts
- Custom scrollbar styling
- Glassmorphism backdrop-filter effects
- Smooth hover transitions
- Mobile-first responsive design

### JavaScript Architecture
- ES6 Class-based structure
- LocalStorage for data persistence
- DOM manipulation with error handling
- Event delegation patterns
- Input validation and sanitization

### Performance Optimizations
- Efficient DOM updates
- Debounced input handling
- Minimal reflows and repaints
- Lightweight vanilla JS (no dependencies)

## 🔧 Customization

Update CSS variables in `styles.css`:
```css
:root {
  --primary-gradient: linear-gradient(135deg, #your-colors);
  --container-bg: rgba(255, 255, 255, 0.95);
}
```

Extend functionality in `script.js`:
```javascript
class TodoApp {
  // Add new methods here
}
```

## 🚀 Future Enhancements

- [ ] Categories and tags
- [ ] Due dates with notifications
- [ ] Priority levels
- [ ] Search and filtering
- [ ] Export/import functionality
- [ ] Dark/light theme toggle
- [ ] PWA capabilities


## 📧 Contact

**Timofei Starovoitov** - fezpezmez@gmail.com

Project Link: [https://github.com/fzpzmz/to-do-list](https://github.com/fzpzmz/to-do-list)

---
