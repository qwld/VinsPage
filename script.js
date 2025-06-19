/* Basic reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Fullscreen layout */
body, html {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000;
}

/* Create the top and bottom black bars */
.content {
    position: relative;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

/* Create the fading effect on the image */
.image-container {
    position: relative;
    height: 100%;
    width: 100%;
    overflow: hidden;
}

/* Background Image */
.background-image {
    width: 100%;
    height: auto;
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
    filter: brightness(60%); /* Darken the image slightly to give focus to the center */
}

/* Black bars on the top and bottom */
.content:before, .content:after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    height: 20%;
    background-color: #000;
    z-index: 1;
}

.content:before {
    top: 0;
}

.content:after {
    bottom: 0;
}

/* Fade effect (using linear gradient) */
.image-container::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    background: linear-gradient(to top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%);
    z-index: 2;
}
