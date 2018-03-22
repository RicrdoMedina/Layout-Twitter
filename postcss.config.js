module.exports = {
  plugins: [
    require('postcss-import')({
      plugins: [
        require('stylelint'),
      ]
    }),
    require('postcss-cssnext')({
      features: {
        autoprefixer: {
          grid:true,
          flexbox: false
        },
        customProperties: false,
        calc: false,
      }
    })
  ]
}