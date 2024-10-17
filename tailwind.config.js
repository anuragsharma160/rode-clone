/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily:{
        inter: ["Inter","sans-serif"],
      },
      colors:{
        myblue: '#007bff',
        myindigo: '#6610f2',
        mypurple: '#6f42c1',
        mypink: '#e83e8c',
        myred: '#dc3545',
        myorange: '#fd7e14',
        myyellow: '#ffc107',
        mygreen: '#28a745',
        myteal: '#20c997',
        mycyan: '#17a2b8',
        white: '#ffffff',
        mygray: '#6c757d',
        mygraydark: '#343a40',
        myprimary: '#007bff',
        mysecondary: '#6c757d',
        mysuccess: '#28a745',
        myinfo: '#17a2b8',
        mywarning: '#ffc107',
        mydanger: '#dc3545',
        mylight: '#f8f9fa',
        mydark: '#343a40',
        mygrey: '#D3D3D3'
      },
    },
  },
  plugins: [],
};
