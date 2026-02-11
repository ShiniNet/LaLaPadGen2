(function () {
  var items = document.querySelectorAll('.reveal');
  if (items.length) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    items.forEach(function (item, index) {
      item.style.transitionDelay = Math.min(index * 40, 260) + 'ms';
      observer.observe(item);
    });
  }

  var heroMedia = document.getElementById('hero-media');
  if (heroMedia) {
    window.addEventListener('mousemove', function (event) {
      var x = (event.clientX / window.innerWidth - 0.5) * 8;
      var y = (event.clientY / window.innerHeight - 0.5) * -8;
      heroMedia.style.transform = 'perspective(900px) rotateY(' + x + 'deg) rotateX(' + y + 'deg)';
    });
  }

  var showcaseImage = document.getElementById('showcase-image');
  var showcaseButtons = document.querySelectorAll('.showcase-btn');
  var showcaseImages = [
    '../images/usecase1.png',
    '../images/usecase2.png',
    '../images/product1.png',
    '../images/product2.png.png'
  ];

  if (showcaseImage && showcaseButtons.length) {
    var current = 0;
    var setImage = function (nextIndex) {
      current = (nextIndex + showcaseImages.length) % showcaseImages.length;
      showcaseImage.src = showcaseImages[current];
    };

    showcaseButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var dir = btn.getAttribute('data-dir') === 'prev' ? -1 : 1;
        setImage(current + dir);
      });
    });

    setInterval(function () {
      setImage(current + 1);
    }, 4200);
  }
})();
