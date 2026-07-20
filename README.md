# 🌸 Portfolio Website - Mosetsanakgape Mafuma

A retro-inspired, interactive portfolio website featuring a desktop-style interface with draggable widgets, dynamic backgrounds, and responsive design.

## ✨ Features

### 🏠 Home Page
- **Interactive Desktop Environment** with draggable widgets
- **Fun Facts Widget** - Random tech and personal facts that change on each page reload
  - Women in computing history
  - Personal language skills (Spanish, Hindi, High Valyrian)
  - Unique talents and achievements
- **Polaroid Photo Gallery** - Showcasing personal and project photos
- **Note Widget** - Personal information display
- **Music Player** - Functional audio player with controls (play, pause, skip, stop, seek)
- **Calendar Widget** - Auto-highlights current date
- **Custom Background** - image.png

### 👤 About Page
- **Blurred Background** - Aesthetic image.jpg with 30px blur effect
- **Skills Folder** - Displays technical skills with scattered polaroid photos
  - Microsoft Excel, Word
  - Python, HTML, CSS, JavaScript, PHP, Laravel
  - Visual Studio, SQL Database
  - Analytics & Statistics
- **Work Experience Folder** - Professional journey
  - NWK Learnership Programme (2025-2026)
  - NWK Programmer (2026-Current)

### 📧 Contact Page
- **Custom Background** - pinkcheckered.jpg pattern
- **Polaroid Photos** - GitHub and LinkedIn visual representations
- **Social Links** with Font Awesome icons
  - GitHub profile link
  - LinkedIn profile link

## 🎨 Design Features

- **Retro Aesthetic** - Pink color scheme (#ffc1cc, #e75480, #ff69b4)
- **Draggable Elements** - All widgets can be repositioned
- **Smooth Transitions** - Page navigation with background changes
- **Hover Effects** - Interactive buttons and links
- **Custom Fonts** - Courier New for retro feel, Georgia for titles

## 📱 Responsive Design

The portfolio is fully responsive with three breakpoints:

- **Desktop** (>1024px) - Full desktop experience with draggable widgets
- **Tablet** (≤1024px) - Scaled layout with optimized spacing
- **Tablet Portrait** (≤768px) - Vertical stacking of elements
- **Mobile** (≤480px) - Mobile-optimized layout with touch-friendly controls

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Custom styling, animations, and responsive design
- **JavaScript** - Interactive functionality
- **Font Awesome 6.4.0** - Social media icons
- **Node.js** - Local development server

## 📂 Project Structure

```
Portfolio/
├── index.html          # Main HTML file
├── style.css           # Stylesheet with responsive design
├── info.js             # Draggable widget functionality
├── server.js           # Node.js local server
├── README.md           # Project documentation
├── images/
│   ├── image.png       # Home page background
│   ├── image.jpg       # About page background
│   ├── pinkcheckered.jpg # Contact page background
│   ├── blondie.jpg     # Polaroid photo
│   ├── flowerCar.jpg   # Polaroid photo
│   ├── books.png       # Polaroid photo
│   ├── computer.jpg    # Polaroid photo
│   ├── html.jpg        # Skills photo
│   ├── jsccsa.jpg      # Skills photo
│   ├── vsc.jpg         # Skills photo
│   ├── cs.jpg          # Skills photo
│   ├── NWK3.jpg        # Work experience photo
│   ├── nwk2.png        # Work experience photo
│   ├── nwk.jpg         # Work experience photo
│   ├── NWK4.jpg        # Work experience photo
│   ├── github.jpg      # Contact photo
│   └── linkin.jpg      # Contact photo
└── liquid-daylight-ra-main-version-49029-02-47.mp3  # Music file
```

## 🚀 Getting Started

### Prerequisites
- Node.js installed on your system
- Modern web browser (Chrome, Firefox, Safari, Edge)

### Installation

1. Clone or download the repository
2. Navigate to the project directory
3. Ensure all image files are in the correct location

### Running the Portfolio

#### Method 1: Using Node.js Server
```bash
node server.js
```
Then open your browser and navigate to:
```
http://localhost:8000
```

#### Method 2: Direct File Opening
Simply open `index.html` in your web browser (some features like audio may require a local server)

## 🎵 Music Player Controls

- **▶ Play** - Start audio playback
- **⏸ Pause** - Pause audio
- **⏹ Stop** - Stop and reset audio
- **⏮ Skip Backward** - Jump back 10 seconds
- **⏭ Skip Forward** - Jump forward 10 seconds
- **Progress Bar** - Click to seek to specific time

## 🎯 Key Features Explained

### Random Fun Facts
JavaScript randomly selects and displays one of 10 different facts each time the page loads, including:
- Women's contributions to computing history
- Personal achievements and language skills
- Historical tech milestones

### Auto-Highlighting Calendar
JavaScript automatically detects and highlights the current date in the calendar widget.

### Dynamic Page Navigation
Single-page application with JavaScript-powered page switching and background changes.

### Draggable Widgets
All desktop widgets can be dragged and repositioned using mouse interactions.

### Responsive Images
All images use `object-fit: cover` for optimal display across different screen sizes.

## 🎨 Color Palette

- **Primary Pink**: #ffc1cc
- **Accent Pink**: #e75480
- **Hot Pink**: #ff69b4
- **White**: #ffffff
- **Text Shadow**: rgba(0, 0, 0, 0.3)

## 📝 HTML Entity Codes Used

- Rose: `&#127801;` (🌹)
- Sparkle: `&#10024;` (✨)
- Bullet: `&#8226;` (•)
- Play: `&#9654;` (▶)
- Pause: `&#9208;` (⏸)
- Stop: `&#9209;` (⏹)
- Skip Back: `&#9198;` (⏮)
- Skip Forward: `&#9197;` (⏭)

## 🔧 Customization

### Changing Background Images
Update the CSS in `style.css`:
```css
body.home-bg {
    background-image: url('your-image.png');
}
```

### Updating Personal Information
Edit the note widget content in `index.html`:
```html
<p class="note-text">&#127801; Your Name</p>
```

### Modifying Skills
Update the folder description in the About page section.

### Adding New Widgets
Follow the existing widget structure and add draggable class for repositioning.

## 🌐 Browser Compatibility

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ⚠️ Internet Explorer (not supported)

## 📄 License

This is a personal portfolio project.

## 👤 Author

**Mosetsanakgape Mafuma**
- Age: 26
- Gender: Female
- LinkedIn: [mosetsanakgape-mafuma](https://www.linkedin.com/in/mosetsanakgape-mafuma/)
- GitHub: [Mo-xnda](https://github.com/Mo-xnda)

## 🙏 Acknowledgments

- Font Awesome for social media icons
- Monty Python for inspiring Python's name (as mentioned in Fun Facts!)
- NWK for professional development opportunities

---

Made with 💖 and lots of pink!