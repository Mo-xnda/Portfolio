# Portfolio Website - Mosetsanakgape Mafuma

A retro-inspired, interactive portfolio website featuring a desktop-style interface with draggable widgets, dynamic backgrounds, dark mode theme, and responsive design.

## Features

### Home Page
- **Interactive Desktop Environment** with draggable widgets
- **Fun Facts Widget** - Random tech and personal facts that change on each page reload
  - Women in computing history
  - Personal language skills
  - Unique talents and achievements
- **Polaroid Photo Gallery** - Showcasing personal and project photos
  - **Interactive Animations**: Click polaroid item1 to show randomized pink flowers 
  - **Interactive Animations**: Click polaroid item3 to illuminate randomized pink stars and moon
- **Note Widget** - Personal information display with typing animation
  - Sequential typing effect for each line
  - Blinking cursor animation
  - Displays name, age, gender, profession, ethnicity, and languages
- **Spotify Player** - Embedded Spotify playlist player
- **Calendar Widget** - Dynamically generated calendar that auto-highlights current date
- **Dark Mode Toggle** - Switch between light and dark themes
- **Custom Backgrounds** - Different images for light and dark modes

### About Page
- **Three-Folder Layout** - Work, Projects, and Skills arranged horizontally
- **Custom Backgrounds** - Different images for light and dark modes with blur effect
- **Manila Folder Design** - Realistic folder styling with tabs and dark mode gradients
- **Work Folder** (Left) - Professional experience
  - NWK Learnership Programme (2025-2026)
  - NWK Programmer (2026-Current)
  - 4 scattered polaroid photos
- **Projects Folder** (Center) - Development projects
  - NWK Online registration system (CSS/HTML/JS/PHPMyAdmin/SQL)
  - NWK Online ERP bridge system (CSS/HTML/JS/PHPMyAdmin/PHP/SQL)
  - 2 project photos
- **Skills Folder** (Right) - Technical skills in 2-column list format
  - Microsoft Excel, Word, Python, HTML, CSS, JavaScript
  - Visual Studio, SQL Database, Analytics, Statistics
  - PHP, Laravel, PHPMyAdmin, C#, Git
  - 4 scattered polaroid photos
- **Dark Mode Support** - Folders use dark gradients with pink text in dark mode

### Contact Page
- **Custom Backgrounds** - Different images for light and dark modes
- **4 Polaroid Photos** - Phone, Email, LinkedIn, and GitHub contact methods
- **Social Links** with Font Awesome icons
  - Phone: +27713568704
  - Email: mosetsanakgape@gmail.com
  - LinkedIn profile
  - GitHub profile
- **Dark Mode Support** - Polaroids use dark widget backgrounds with smooth transitions

## Design Features

- **Retro Aesthetic** - Pink color scheme (#ffc1cc, #e75480, #ff69b4, #de5d83)
- **Dark Mode Theme** - Complete dark theme with:
  - CSS variables for easy theme switching
  - Dark backgrounds for all pages
  - Dark gradients for folders (#2a2a2e to #1a1a1e)
  - Dark widget backgrounds (rgba(30, 30, 36, 0.95))
  - Pink text for visibility (#ff69b4)
  - Smooth transitions between themes
  - LocalStorage persistence
  - System preference detection
- **Manila Folder Aesthetic** - Tan/beige folders in light mode, dark gradients in dark mode
- **Draggable Elements** - All widgets can be repositioned
- **Interactive Animations** - Click polaroids to trigger randomized pink flowers or stars & moon
- **Typing Animation** - Note widget text types out sequentially with blinking cursor
- **Smooth Transitions** - Page navigation with background changes
- **Hover Effects** - Interactive buttons and links
- **Custom Fonts** - Courier New for retro feel, Georgia for titles, Lucida Handwriting for folder content

## Responsive Design

The portfolio is fully responsive with three breakpoints:

- **Desktop** (>1024px) - Full desktop experience with draggable widgets and horizontal folder layout
- **Tablet** (≤1024px) - Scaled layout with optimized spacing and smaller theme toggle
- **Tablet Portrait** (≤768px) - Vertical stacking of elements, folders stack vertically
- **Mobile** (≤480px) - Mobile-optimized layout with touch-friendly controls and compact theme toggle

All elements adapt seamlessly including the new Projects folder and Dark Mode toggle button.

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Custom styling, animations, and responsive design
- **JavaScript** - Interactive functionality
- **Font Awesome 6.4.0** - Social media icons
- **Node.js** - Local development server

##Project Structure


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
│   ├── linkin.jpg      # Contact photo
│   ├── email.jpg       # Contact photo
│   ├── plainpink.png   # About page background
│   └── pinkback.jpg    # Background image
└── liquid-daylight-ra-main-version-49029-02-47.mp3  # Music file


## Started

### Prerequisites
- Node.js installed on your system
- Modern web browser (Chrome, Firefox, Safari, Edge)

### Installation

1. Clone or download the repository
2. Navigate to the project directory
3. Ensure all image files are in the correct location

### Running the Portfolio

#### Method 1: Using Node.js Server
bash
node server.js

Then open your browser and navigate to:

http://localhost:8000

or open in GitHub Pages

#### Method 2: Direct File Opening
Simply open `index.html` in your web browser (some features like audio may require a local server)

## Music Player Controls

- Start audio playback
- Pause audio
- Stop and reset audio
- Jump back 10 seconds
- Jump forward 10 seconds
- Click to seek to specific time

## Key Features Explained

### Dark Mode Toggle
- Click the sun/moon button in the top-right corner to switch themes
- Theme preference saved to localStorage
- Automatically detects system dark mode preference
- Smooth transitions between light and dark themes
- All elements (backgrounds, folders, polaroids, widgets) adapt to theme

### Typing Animation
- Note widget text types out character by character
- Each line appears sequentially with 2.2-second delays
- Blinking pink cursor during typing
- Cursor disappears after each line completes
- Uses CSS keyframe animations and JavaScript timing

### Random Fun Facts
JavaScript randomly selects and displays one of 10 different facts each time the page loads, including:
- Women's contributions to computing history
- Personal achievements and language skills
- Historical tech milestones

### Interactive Polaroid Animations
- **Item1 (FlowerCar)**: Click to toggle pink flowers across the screen
  - Flowers appear at randomized positions on each click
  - Bloom and sway animations with pink glow effects
  - Uses HTML entity codes for flower emojis
- **Item3 (Computer)**: Click to toggle pink stars and moon
  - Stars and moon appear at randomized positions
  - Twinkling stars with floating animation
  - Glowing moon with pink/gold aura
  - Uses HTML entity codes for celestial emojis

### Dynamic Calendar
- JavaScript automatically generates calendar for current month
- Highlights today's date in pink
- Updates month name dynamically
- Responsive grid layout

### Dynamic Page Navigation
Single-page application with JavaScript-powered page switching and background changes that adapt to light/dark mode.

### Draggable Widgets
All desktop widgets can be dragged and repositioned using mouse interactions.

### Responsive Images
All images use `object-fit: cover` for optimal display across different screen sizes.

## Color Palette

### Light Mode
- **Primary Pink**: #ffc1cc
- **Accent Pink**: #e75480
- **Hot Pink**: #ff69b4
- **Toggle Pink**: #de5d83
- **Manila Tan**: #d4a574
- **Folder Tab**: #c49563
- **Paper Beige**: #f5f5dc
- **White**: #ffffff

### Dark Mode
- **Dark Background**: #121212
- **Widget Background**: rgba(30, 30, 36, 0.95)
- **Folder Gradient**: #2a2a2e to #1a1a1e
- **Folder Tab Gradient**: #3a3a3e to #2a2a2e
- **Text Pink**: #ff69b4
- **Light Text**: #f4f4f5

## HTML Entity Codes Used

- **Text Shadow**: rgba(0, 0, 0, 0.3)
- Rose: `&#127801;` 
- Sparkle: `&#10024;` 
- Bullet: `&#8226;` 
- Play: `&#9654;` 
- Pause: `&#9208;` 
- Stop: `&#9209;` 
- Skip Back: `&#9198;` 
- Skip Forward: `&#9197;` 

## Customization

### Changing Background Images
Update the CSS in `style.css`:
css
body.home-bg {
    background-image: url('your-image.png');
}


### Updating Personal Information
Edit the note widget content in `index.html`:
html
<p class="note-text">&#127801; Your Name</p>


### Modifying Skills
Update the skills list in the About page section. Skills are displayed in a 2-column format with Lucida Handwriting font on a paper-like background.

### Adding New Widgets
Follow the existing widget structure and add draggable class for repositioning.

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Internet Explorer (not supported)

## License

This is a personal portfolio project.

## Author

**Mosetsanakgape Mosebatho Salaminah Mafuma**
- Age: 26
- Gender: Female
- Profession: Programmer
- Ethnicity: African
- Location: Lichtenburg/North West, South Africa
- Languages: Fluent in English & Sotho/Tswana, Mildly fluent in Afrikaans/Zulu
- LinkedIn: [mosetsanakgape-mafuma](https://www.linkedin.com/in/mosetsanakgape-mafuma/)
- GitHub: [Mo-xnda](https://github.com/Mo-xnda)
- Email: mosetsanakgape@gmail.com
- Phone: +27713568704

## Reference

- Font Awesome for social media icons
- Monty Python for inspiring Python's name (as mentioned in Fun Facts!)
- NWK for professional development opportunities

---

Made with love and lots of pink!