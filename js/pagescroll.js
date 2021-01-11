// event pada saat link di klik
$('.page-scroll').on('click', function(e) {

  // ambil isi href
  var tujuan = $(this).attr('href');
  // tangkap elemen yang bersangkutan
  var elemenTujuan = $(tujuan);


  // Pindahkan Scroll
  $('html, body').animate({
    scrollTop: elemenTujuan.offset().top - 60
  }, 1080, 'easeInOutExpo');

  e.preventDefault();

});



// ALTERNATIF SCRIPT SMOOTH NAVBAR

// $(document).ready(function () {
//      $('a[href="#"]').on('click', function (e) {
//          e.preventDefault();

//          var target = this.hash,
//              $target = $(target);

//          $('html, body').stop().animate({
//              'scrollTop': $target.offset().top - 80
//          }, 900, 'easeInOutExpo', function () {
//              window.location.hash = target;
//          });
//      });
//  });




// $(document).ready(function(){
//   // Add scrollspy to <body>
//   $('body').scrollspy({target: ".navbar", offset: 50});   

//   // Add smooth scrolling on all links inside the navbar
//   $("#navbarNavAltMarkup a").on('click', function(event) {
//     // Make sure this.hash has a value before overriding default behavior
//     if (this.hash !== "") {
//       // Prevent default anchor click behavior
//       event.preventDefault();

//       // Store hash
//       var hash = this.hash;

//       // Using jQuery's animate() method to add smooth page scroll
//       // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
//       $('html, body').animate({
//         scrollTop: $(hash).offset().top
//       }, 800, function(){
   
//         // Add hash (#) to URL when done scrolling (default click behavior)
//         window.location.hash = hash;
//       });
//     }  // End if
//   });
// });






// $('.fitur, .nav-link, .navbar-brand, .new-button').click(function() {
//     var sectionTo = $(this).attr('href');
//     $('html, body').animate({
//       scrollTop: $(sectionTo).offset().top
//     }, 1500);
// });