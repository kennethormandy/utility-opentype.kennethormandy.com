// Approach borrowed from @bram_stein
(function () {
  var typekit = document.createElement('script')
  typekit.src = 'https://use.typekit.net/vgs2evo.js'
  typekit.async = true
  typekit.onload = function () {
    setTimeout(function () {
      Typekit.load()
    }, 0)
  }
  document.head.appendChild(typekit)
}())
