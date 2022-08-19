
const screenSize = {
    mobileSmall: '320px',
    mobileMedium: '375px',
    mobileLarge: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopLarge: '1440px',
    desktop: '2560px',
};

const devices = {
    mobileS: `(max-width: ${screenSize.mobileSmall})`,
    mobileM: `(max-width: ${screenSize.mobileMedium})`,
    mobileL: `(max-width: ${screenSize.mobileLarge})`,
    tablet: `(max-width: ${screenSize.tablet})`,
    laptop: `(max-width: ${screenSize.laptop})`,
    laptopL: `(max-width: ${screenSize.laptopLarge})`,
    desktop: `(max-width: ${screenSize.desktop})`,
};


const color = {
    dark: "#000000",
    light: "#FFFFFF",
    low: "#000000",
    medium: "#111111",
    high: "#222222",
    secondaryLow: "#000000",
    secondaryMedium: "#000000",
    secondaryHigh: "#000000",
    text: {
        low: "#bbbbbb",
        medium: "#cccccc",
        high: "#dddddd",
        inverted: "#000000"
    }
};


let data = {
    styles: {
        devices: devices,
        color: color,
    },
}

export { data };