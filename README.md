# CS:Legacy Website

A responsive, modern website for CS:Legacy - a classic old-school shooter built on Valve's Source Engine SDK.

![CS:Legacy](assets/images/cslegacy-logo.png)

## Overview

This project is a responsive Bootstrap 5-based website for the CS:Legacy game. The site serves as a landing page showcasing the game, its features, and providing ways for visitors to support the project.

## Website Sections

### 1. Hero Section
- Video background showcasing gameplay footage
- Logo display
- Call-to-action buttons

### 2. Navigation
- Responsive navbar with links to all sections
- Sticky positioning for improved user experience

### 3. Trailer Section
- Embedded YouTube video player
- Responsive sizing for all devices

### 4. About Section
- Game overview and description
- Key features list
- Screenshot display

### 5. Features Section
- Detailed game features with icons
- Responsive card layout

### 6. Release Information
- Release timeline
- Countdown timer to Early Access
- Steam wishlist button

### 7. Support the Project
- Patreon and Ko-fi donation links
- Benefits of supporting
- Progress indicator

### 8. Footer
- Social media links
- Copyright information
- Additional links

## Setup and Installation

### Prerequisites
- A code editor (VS Code, Sublime Text, etc.)
- Basic knowledge of HTML, CSS, and JavaScript
- A modern web browser

### Installation
1. Clone the repository:
```bash
git clone https://github.com/SnowManKvickt/cslegacy-web-project
```

2. Navigate to the project directory:
```bash
cd cslegacy-website
```

3. Open the `index.html` file in your browser to view the website.

## Customization Guide

### Changing the Countdown Timer

The countdown timer is configured in the `js/script.js` file. To modify the target date:

1. Open `js/script.js`
2. Locate the `initCountdown()` function
3. Modify the release date line:

```javascript
// Change this date to your desired target date
const releaseDate = new Date('Jan 1, 2025 00:00:00').getTime();
```

The countdown automatically calculates days, hours, minutes, and seconds remaining until this date.

### Hero Video Background

To change the hero background video:

1. Place your new video file in `assets/videos/` directory
2. Update the source in `index.html`:

```html
<video autoplay muted loop id="hero-video">
    <source src="assets/images/your-new-video.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>
```

For better performance, compress your video files using FFmpeg:
```bash
ffmpeg -i input.mp4 -vcodec libx264 -crf 28 -preset slower -vf scale=1280:-1 -an output.mp4
```

### Customizing Colors

The website uses CSS variables for colors. To change the color scheme, edit the root variables in `css/style.css`:

```css
:root {
    --primary-color: #ff4d00;    /* Main accent color */
    --secondary-color: #1e2124;  /* Dark background color */
    --tertiary-color: #333;      /* Text color */
    --accent-color: #ffb700;     /* Secondary accent color */
    --dark-bg: #121212;          /* Darker background color */
    --light-text: #f5f5f5;       /* Light text color */
}
```

### Support Links

To update support links:

1. Find the support section in `index.html`
2. Update the `href` attributes with your own Patreon and Ko-fi links:

```html
<a href="https://www.patreon.com/YourPatreonName" target="_blank" class="btn btn-danger btn-lg me-3 mb-3">
    <i class="fa-brands fa-patreon"></i> Support on Patreon
</a>
<a href="https://ko-fi.com/YourKofiName" target="_blank" class="btn btn-primary btn-lg mb-3">
    <i class="fas fa-mug-hot"></i> One-time Donation
</a>
```

## Asset Information

The website requires the following assets to function properly:

- `assets/images/cslegacy-logo.png` - Game logo
- `assets/images/poolday_screenshot1.jpg` - Game screenshot
- `assets/videos/cslegacy-hero-trailer-compressed.mp4` - Background video

If you need to replace these assets, ensure the new files maintain the same dimensions for optimal display.

## Dependencies

This project uses the following libraries and frameworks:

- [Bootstrap 5.3.2](https://getbootstrap.com/) - For responsive layout and components
- [Font Awesome 6.4.2](https://fontawesome.com/) - For icons
- [Google Fonts](https://fonts.google.com/) - Oswald and Roboto fonts

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is available under the [MIT License](LICENSE).

## Contact

For questions or support regarding this website template, please contact:
- Your Name - [carl@ladderstats.com](mailto:carl@ladderstats.com)
- Project Link: [https://github.com/SnowManKvickt/cslegacy-web-project](https://github.com/SnowManKvickt/cslegacy-web-project) 