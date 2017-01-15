var scroll = require('smoothscroll')
var FontFaceObserver = require('fontfaceobserver')
var loadCSS = require('fg-loadcss')
require('./vendor/prism.js')

var observer = new FontFaceObserver('ff-tisa-sans-web-pro')
// var fontsloaded = (window && typeof window.sessionStorage === 'object') ? sessionStorage.getItem('fontsloaded') : false

var kit = function (id) {
  var typekit = document.createElement('script')
  typekit.src = 'https://use.typekit.net/' + id + '.js'
  typekit.async = true
  typekit.onload = function () {
    setTimeout(function () {
      Typekit.load()
    }, 0)
  }

  document.head.appendChild(typekit)
}

observer.check().then(function () {
  loadCSS('https://fontskennethormandycom-fmtnacsldr.now.sh/css/utility-opentype.css')
  kit('okc3efg')
}, function () {
  console.warn('Tisa is not available')
})
