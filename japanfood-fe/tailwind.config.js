/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'sushi': ['linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4))',"url('https://wallpaper.dog/large/20547009.jpg')"],
        'chef': "url('/pngtree-sushi-chef-at-table-preparing-sushi-picture-image_2647709.jpg')",
        'texture': "url('/texture-min.jpg')",
        'sushi-menu': "url('https://img.freepik.com/free-photo/painting-sushi-plate-with-picture-fish-it_188544-12221.jpg')",
        'ramen-menu': "url('https://images.unsplash.com/photo-1623341214825-9f4f963727da?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFtZW58ZW58MHx8MHx8fDA%3D')",
        'appetizer-menu': "url('https://c0.wallpaperflare.com/preview/1/743/594/appetizer-canapes-cheese-crackers.jpg')",
        'sake-menu': "url('https://t3.ftcdn.net/jpg/03/89/71/96/360_F_389719635_Yv0nuk9SUfzBYGsbDA4ijTRqRZJrBhaZ.jpg')",
        'sushi-packet': "url('https://png.pngtree.com/background/20230425/original/pngtree-images-of-various-types-of-sushi-picture-image_2469747.jpg')"
      },
      fontFamily: {
        'Merienda': ["Merienda", 'cursive'],
      },
      colors: {
        'custom-orange': '#e56e0c',
      },
    },
  },
  plugins: [],
}