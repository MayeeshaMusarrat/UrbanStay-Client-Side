/** @type {import('tailwindcss').Config} */
module.exports = {
  "content": [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  "theme": {
    "extend": {
      "colors": {
        "shade-01": "#fff",
        "gray": {
          "100": "#83818c",
          "200": "#767575",
          "300": "#2d2c2c",
          "400": "#10162e",
          "500": "#0d1329",
          "600": "rgba(255, 255, 255, 0.1)",
          "700": "rgba(0, 0, 0, 0.4)",
          "800": "rgba(0, 0, 0, 0.2)",
          "900": "#848484",
          "1300": "#201a1a",
          "1600": "rgba(0, 0, 0, 0.5)"
        },
        "whitesmoke": "#f2f2f2",
        "ghostwhite": "#f7f6ff",
        "neutral-04": "#d3d3d3",
        "dimgray": {
          "100": "#717171",
          "200": "#766d6d",
          "300": "#4f4f4f",
          "400": "#707070",
          "600": "#5a5656"
        },
        "midnightblue": {
          "100": "#2c2e97",
          "200": "#1e1d85",
          "300": "#0e0e46",
          "400": "rgba(30, 29, 133, 0.69)",
          "500": "#2e1c81"
        },
        "darkslategray": {
          "100": "#474747",
          "200": "#1c2d3a"
        },
        "red": "#ff0000",
        "slateblue": {
          "100": "#4b55c4",
          "200": "#513bb7"
        },
        "black": "#000",
        "darkgray": {
          "100": "#a6a6a6",
          "200": "#959595"
        },
        "lightgray": {
          "100": "#d4d2d2",
          "200": "#cdcdcd",
          "300": "rgba(209, 209, 209, 0.95)"
        },
        "silver": {
          "100": "#c5c2c2",
          "200": "#bababa",
          "300": "#b8b7b7"
        },
        "shade-02": "#222",
        "darkblue": {
          "100": "#371dae",
          "200": "rgba(55, 29, 174, 0.83)",
          "300": "rgba(55, 29, 174, 0.98)",
          "400": "rgba(56, 29, 173, 0.83)",
          "500": "rgba(39, 15, 146, 0.98)",
          "600": "rgba(56, 29, 173, 0.82)"
        },
        "blueviolet": {
          "100": "rgba(88, 57, 227, 0.83)",
          "200": "rgba(88, 57, 227, 0.93)"
        },
        "gainsboro": {
          "100": "#dcdcdc",
          "200": "#d9d9d9"
        },
        "text-color": "#252b42",
        "royalblue": "#2754ca",
        "orangered": {
          "100": "#f4511e",
          "200": "rgba(244, 81, 30, 0.01)"
        },
        "second-text-color": "#737373",
        "neutral-08": "#5e5e5e",
        "neutral-06": "#b0b0b0",
        "neutral-03": "#ddd"
      },
      "spacing": {},
      "fontFamily": {
        "plus-jakarta-sans": "'Plus Jakarta Sans'",
        "poppins": "Poppins",
        "montserrat": "Montserrat",
        "roboto": "Roboto",
        "lato": "Lato",
        "header-22pt-regular": "'SF Pro'",
        "inter": "Inter"
      },
      "borderRadius": {
        "3xs": "10px",
        "8xs": "5px",
        "mini": "15px",
        "4xs": "9px",
        "11xl": "30px",
        "31xl": "50px",
        "58xl-5": "77.5px",
        "3xs-1": "9.1px",
        "12xs-5": "0.5px",
        "15xl": "34px"
      }
    },
    "fontSize": {
      "sm": "14px",
      "base": "16px",
      "5xl": "24px",
      "lg": "18px",
      "3xl": "22px",
      "11xl": "30px",
      "base-5": "15.5px",
      "smi": "13px",
      "mid": "17px",
      "3xs": "10px",
      "2xl": "21px",
      "mini": "15px",
      "21xl": "40px",
      "43xl": "62px",
      "2xs": "11px",
      "xl": "20px",
      "6xl": "25px",
      "2xl-8": "21.8px",
      "xs": "12px",
      "inherit": "inherit"
    }
  },
  "corePlugins": {
    "preflight": false
  }
}