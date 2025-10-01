let themeNames = [];
let currentIndex = 0;
let themes = {}

async function loadThemes(){
    const res = await fetch('./assets/themes.json');
    themes = await res.json();
    themeNames = Object.keys(themes);
    applyTheme(themeNames[0]);
}

function applyTheme(themeName){
    const theme = themes[themeName];
    for (const [key, value] of Object.entries(theme)){
        document.documentElement.style.setProperty(`--${key}`, value)
    }
}

document.getElementById('colour-button').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % themeNames.length;
    applyTheme(themeNames[currentIndex]);
});

loadThemes();