/* -----------------------------
   Speculation Rules for Prefetch
------------------------------ */
const speculationRules = {
  prefetch: [
    {
      source: "document",
      where: {
        and: [
          { href_matches: "/*" },
          {
            not: {
              href_matches: [
                "/wp-*.php",
                "/wp-admin/*",
                "/wp-content/uploads/*",
                "/wp-content/*",
                "/wp-content/plugins/*",
                "/wp-content/themes/dannaway/*",
                "/*\\?(.+)"
              ]
            }
          },
          { not: { selector_matches: 'a[rel~="nofollow"]' } },
          { not: { selector_matches: ".no-prefetch, .no-prefetch a" } }
        ]
      },
      eagerness: "conservative"
    }
  ]
};

// Optional: log for debugging
console.log("Speculation rules loaded:", speculationRules);


/* -----------------------------
   i18n Locale Data (WordPress)
------------------------------ */
if (window.wp && wp.i18n && typeof wp.i18n.setLocaleData === "function") {
  wp.i18n.setLocaleData({ "text direction\u0004ltr": ["ltr"] });
}


/* -----------------------------
   Contact Form 7 API Configuration
------------------------------ */
var wpcf7 = {
  api: {
    root: "https://www.adhamdannaway.com/wp-json/",
    namespace: "contact-form-7/v1"
  }
};


/* -----------------------------
   jQuery Main Script Section
------------------------------ */

// Ensure jQuery is loaded before running
$(document).ready(function () {

  console.log("Document ready - initializing portfolio scripts...");

  // Hide browser top bar on mobile devices
  $('body').scrollTop(1);

  // Toggle Navigation for mobile devices
  $('.icon-nav').on('click', function () {
    $('header nav').slideToggle();
    $(this).toggleClass('active');
  });

  // Scroll to top smoothly
  $('a[href=#top]').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 1000, 'easeInOutQuad');
    return false;
  });

  // Fade-in sprite animation
  if ($.fn.fadeSprite) {
    $('.sprite').fadeSprite();
  }

  // Thumbnail hover effect
  if ($.fn.hoverThumb) {
    $('.thumbs li').hoverThumb();
  }

  // Animate page transitions
  if ($.fn.leavePage) {
    $('.transition, #nav .page_item a, #nav-footer a, #thumbs a, #next a, #prev a, #logo, #face a').leavePage();
  }

  // Animate the header on first load
  $('#header').stop().animate({ opacity: '1', top: '0' }, 1000);

  /* -----------------------------
     ClipboardJS for Email Copy
  ------------------------------ */
  if (typeof ClipboardJS !== "undefined") {
    var clipboard = new ClipboardJS('#email');

    clipboard.on('success', function (e) {
      $('#email-tooltip').attr("tooltip", "Yay! My email address has been copied to your clipboard ✅");
      $('#email-tooltip').addClass('success');

      // Reset tooltip after mouse leaves
      $('#email-tooltip').mouseleave(function () {
        setTimeout(function () {
          $('#email-tooltip').attr("tooltip", "Click to copy my email address to your clipboard 😀");
          $('#email-tooltip').removeClass('success');
        }, 300);
      });

      e.clearSelection();
    });

    clipboard.on('error', function (e) {
      $('#email-tooltip').attr("tooltip", "Sorry, there was a technical glitch. Please try again.");
      $('#email-tooltip').toggleClass('fail');
    });
  }

  /* -----------------------------
     Page Preloader (jPreLoader)
  ------------------------------ */
  if ($.fn.jpreLoader) {
    $('body').jpreLoader(
      {
        showSplash: true
      },
      function () {
        // Once images are preloaded
        if ($.fn.animateHome) $('#face').animateHome();
        if ($.fn.resizeFace) $('#face').resizeFace();
      }
    );
  }
});


/* -----------------------------
   IE Version Check
------------------------------ */
// If browser is IE8 or older, show message
if (typeof ie !== "undefined" && ie < 9) {
  if (typeof ieMessage === "function") {
    ieMessage();
  }
}
