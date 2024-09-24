/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily : {
        "poppins" : ['poppins'],
        "circular" : ['Circular STD']
      },
      colors : {
        "hijau" : "#176B87",
        "hijauMuda" : "#B4D4FF",
        "oren" : "#FE7A36",
        "grey" : "#222831",
        "custom-gradient" : "linear-gradient(to right, #1e3a8a, #4f46e5, #f43f5e) "
      }
    },
  },
  plugins: [],
}

