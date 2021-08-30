/**
* Template Name: MyResume - v4.2.0
* Template URL: https://bootstrapmade.com/free-html-bootstrap-template-my-resume/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
function calculateAge(birthMonth, birthDay, birthYear) {
  var currentDate = new Date();
  var currentYear = currentDate.getFullYear();
  var currentMonth = currentDate.getMonth();
  var currentDay = currentDate.getDate();
  var calculatedAge = currentYear - birthYear;
  m = 0
  if ((currentMonth - birthMonth) > 0) {
    m = currentMonth - birthMonth;
  }
  else {
    m = currentMonth + 12 - birthMonth;
  }
  console.log(m)
  if (currentMonth < birthMonth - 1) {
    calculatedAge--;
  }
  if (birthMonth - 1 == currentMonth && currentDay < birthDay) {
    calculatedAge--;
  }
  $('#exp_year').html(calculatedAge);
  $('#exp_mnt').html(m);
  // $('#loc').attr("href", "https://goo.gl/maps/yXZUtG17VJxTHSYV9");
  return calculatedAge;
}

var age = calculateAge(5, 31, 2016);

// https://css-tricks.com/snippets/css/typewriter-effect/
function setupTypewriter(t) {
  var HTML = t.innerHTML;

  t.innerHTML = "";

  var cursorPosition = 0,
    tag = "",
    writingTag = false,
    tagOpen = false,
    typeSpeed = Math.random() * 15,
    tempTypeSpeed = 0;

  var type = function () {

    if (writingTag === true) {
      tag += HTML[cursorPosition];
    }

    if (HTML[cursorPosition] === "<") {
      tempTypeSpeed = 0;
      if (tagOpen) {
        tagOpen = false;
        writingTag = true;
      } else {
        tag = "";
        tagOpen = true;
        writingTag = true;
        tag += HTML[cursorPosition];
      }
    }
    if (!writingTag && tagOpen) {
      tag.innerHTML += HTML[cursorPosition];
    }
    if (!writingTag && !tagOpen) {
      if (HTML[cursorPosition] === " ") {
        tempTypeSpeed = 0;
      }
      else {
        tempTypeSpeed = (Math.random() * typeSpeed) + 3;
      }
      t.innerHTML += HTML[cursorPosition];
    }
    if (writingTag === true && HTML[cursorPosition] === ">") {
      tempTypeSpeed = (Math.random() * typeSpeed) + 25;
      writingTag = false;
      if (tagOpen) {
        var newSpan = document.createElement("span");
        t.appendChild(newSpan);
        newSpan.innerHTML = tag;
        tag = newSpan.firstChild;
      }
    }

    cursorPosition += 1;
    if (cursorPosition < HTML.length - 1) {
      setTimeout(type, tempTypeSpeed);
    }

  };

  return {
    type: type
  };
}

var typer = document.getElementById('typewriter');

typewriter = setupTypewriter(typewriter);

typewriter.type();

// shim layer with setTimeout fallback
// window.requestAnimFrame = (function () {
//   return function (callback) {
//     window.setTimeout(callback, 1000);
//   };
// })();

// $(document).ready(function () {

//   var $shadow = $('#my_name');
//   var shadowLimit = 7;
//   var moveEvent = ('ontouchstart' in document.documentElement) ? "touchmove" : "mousemove";

//   (function animloop() {
//     requestAnimFrame(animloop);

//     $(window).bind(moveEvent, function (ev) {
//       var $this = $(this);
//       var w = $this.width();
//       var h = $this.height();
//       var center = { x: w / 2, y: h / 2 };

//       var evX = (moveEvent == 'touchmove') ? ev.originalEvent.touches[0].clientX : ev.clientX;
//       var evY = (moveEvent == 'touchmove') ? ev.originalEvent.touches[0].clientY : ev.clientY;

//       var shadowX = (center.x - evX) / 10;
//       var shadowY = (center.y - evY) / 10;

//       shadowX = (shadowX > shadowLimit) ? shadowLimit : shadowX;
//       shadowX = (shadowX < shadowLimit * -1) ? shadowLimit * -1 : shadowX;
//       shadowY = (shadowY > shadowLimit) ? shadowLimit : shadowY;
//       shadowY = (shadowY < shadowLimit * -1) ? shadowLimit * -1 : shadowY;

//       $shadow.css({ textShadow: Math.ceil(shadowX) + 'px ' + Math.ceil(shadowY) + 'px ' + Math.abs(shadowX * shadowY) / 100 + 'px rgba(197, 168, 0, 1)' });


//     });
//   })();
// });

const p = document.querySelector('#my_name');

const clamp = (a, m, n) => {
  const max = Math.max(m, n);
  const min = Math.min(m, n);

  return Math.max(min, Math.min(max, a));
};

const MAX_SHADOW_OFFSET = 15;

const paint = (x, y) => {
  const r = p.getBoundingClientRect();
  const o = Math.min(r.width, r.height, MAX_SHADOW_OFFSET); // compute max shadow offset

  const mx = clamp(x, r.left - o, r.right + o); // clamp mouse coordinates within the shadow projection bounding box.
  const my = clamp(y, r.top - o, r.bottom + o);
  const px = r.right - r.width / 2; // compute element bb midpoints.
  const py = r.bottom - r.height / 2;
  const nx = (mx - px) / (r.right - r.left + 2 * o); // project mouse position relative to the bounding box to [-.5, .5];
  const ny = (my - py) / (r.bottom - r.top + 2 * o);

  requestAnimationFrame(() => {
    p.style.textShadow = `${-1 * nx * o}px ${-1 * ny * o}px 0px rgba(197, 168, 0, 1)`;
  });
};

document.addEventListener('mousemove', (e) => paint(e.clientX, e.clientY), {
  passive: true
});



$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    loop: true,
    center: true,
    nav: true,
    dots: true,
    items: 5,
    navText: ['<span></span>', '<span></span>'],
    autoplay: false
  })
});


(function () {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos,
      behavior: 'smooth'
    })
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function (e) {
    select('body').classList.toggle('mobile-nav-active')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function (e) {
    if (select(this.hash)) {
      e.preventDefault()
      let body = select('body')
      if (body.classList.contains('mobile-nav-active')) {
        body.classList.remove('mobile-nav-active')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Skills animation
   */
  let skilsContent = select('.skills-content');
  if (skilsContent) {
    new Waypoint({
      element: skilsContent,
      offset: '80%',
      handler: function (direction) {
        let progress = select('.progress .progress-bar', true);
        progress.forEach((el) => {
          el.style.width = el.getAttribute('aria-valuenow') + '%'
        });
      }
    })
  }

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function (e) {
        e.preventDefault();
        portfolioFilters.forEach(function (el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        portfolioIsotope.on('arrangeComplete', function () {
          AOS.refresh()
        });
      }, true);
    }

  });

  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Initiate portfolio details lightbox 
   */
  const portfolioDetailsLightbox = GLightbox({
    selector: '.portfolio-details-lightbox',
    width: '90%',
    height: '90vh'
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

})()