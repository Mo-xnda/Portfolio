# Portfolio Website - Mosetsanakgape Mafuma

A retro-inspired, interactive portfolio website featuring a desktop-style interface with draggable widgets, dynamic backgrounds, and responsive design.

##Features

### Home Page
- **Interactive Desktop Environment** with draggable widgets
- **Fun Facts Widget** - Random tech and personal facts that change on each page reload
  - Women in computing history
  - Personal language skills (Spanish, Hindi, High Valyrian)
  - Unique talents and achievements
- **Polaroid Photo Gallery** - Showcasing personal and project photos
  - **Interactive Animations**: Click polaroid item1 to show pink flowers 
  - **Interactive Animations**: Click polaroid item3 to illuminate pink stars and moon
- **Note Widget** - Personal information display
- **Music Player** - Functional audio player with controls (play, pause, skip, stop, seek) - Disabled 
- **Spotify Player** - Embedded Spotify playlist player
- **Calendar Widget** - Auto-highlights current date
- **Custom Background** - image.png

### About Page
-**Interactive Desktop Environment** with draggable pictures in folder
- **Custom Background** - plainpink.png with blurred image.jpg overlay
- **Manila Folder Design** - Realistic folder styling with tabs
- **Skills Folder** - Displays technical skills in 2-column list format
  - Handwritten-style font (Lucida Handwriting)
  - Paper-like background (#f5f5dc)
  - Skills: Microsoft Excel, Word, Python, HTML, CSS, JavaScript, Visual Studio, SQL Database, Analytics, Statistics, PHP, Laravel
  - Scattered polaroid photos overlaying folder
- **Work Experience Folder** - Professional journey in list format
  - Handwritten-style font (Lucida Handwriting)
  - Paper-like background
  - NWK Learnership Programme (2025-2026)
  - NWK Programmer (2026-Current)

###Contact Page
- **Custom Background** - pinkcheckered.jpg pattern
- **Polaroid Photos** - GitHub, LinkedIn, and Email visual representations
- **Social Links** with Font Awesome icons
  - GitHub profile link
  - LinkedIn profile link
  - Email link (mailto:mosetsanakgape@gmail.com)

##Design 

- **Retro Aesthetic** - Pink color scheme (#ffc1cc, #e75480, #ff69b4)
- **Manila Folder Aesthetic** - Tan/beige folders (#d4a574) with realistic tabs
- **Draggable Elements** - All widgets can be repositioned
- **Interactive Animations** - Click polaroids to trigger pink flowers or stars & moon
- **Smooth Transitions** - Page navigation with background changes
- **Hover Effects** - Interactive buttons and links
- **Custom Fonts** - Courier New for retro feel, Georgia for titles, Lucida Handwriting for folder content

##Interactive Design

The portfolio is fully responsive with three breakpoints:

- **Desktop** (>1024px) - Full desktop experience with draggable widgets
- **Tablet** (≤1024px) - Scaled layout with optimized spacing
- **Tablet Portrait** (≤768px) - Vertical stacking of elements
- **Mobile** (≤480px) - Mobile-optimized layout with touch-friendly controls

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

##Key Features Explained

### Random Fun Facts
JavaScript randomly selects and displays one of 10 different facts each time the page loads, including:
- Women's contributions to computing history
- Personal achievements and language skills
- Historical tech milestones

### Interactive Polaroid Animations
- **Item1 (FlowerCar)**: Click to toggle pink flowers across the screen
  - 12 flowers with bloom and sway animations
  - Pink glow effects
- **Item3 (Computer)**: Click to toggle pink stars and moon
  - 8 twinkling stars with floating animation
  - Glowing moon with pink/gold aura

### Auto-Highlighting Calendar
JavaScript automatically detects and highlights the current date in the calendar widget.

### Dynamic Page Navigation
Single-page application with JavaScript-powered page switching and background changes.

### Draggable Widgets
All desktop widgets can be dragged and repositioned using mouse interactions.

### Responsive Images
All images use `object-fit: cover` for optimal display across different screen sizes.

##Color Palette is mainly pink

- **Primary Pink**: #ffc1cc
- **Accent Pink**: #e75480
- **Hot Pink**: #ff69b4
- **Manila Tan**: #d4a574
- **Folder Tab**: #c49563
- **Paper Beige**: #f5f5dc
- **White**: #ffffff
- **Text Shadow**: rgba(0, 0, 0, 0.3)

## HTML Entity Codes Used

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

## Author:

**Mosetsanakgape Mosebatho Salaminah Mafuma**
- Age: 25
- Gender: Female
- Location: Lichtenburg/North West, South Africa
- Languages: Fluent in English & Sotho/Tswana, Mildly fluent in Afrikaans/Zulu
- LinkedIn: [mosetsanakgape-mafuma](https://www.linkedin.com/in/mosetsanakgape-mafuma/)
- GitHub: [Mo-xnda](https://github.com/Mo-xnda)
- Email: mosetsanakgape@gmail.com

## Reference

- Font Awesome for social media icons
- Monty Python for inspiring Python's name (as mentioned in Fun Facts!)
- NWK for professional development opportunities

---

Made with love and lots of pink!