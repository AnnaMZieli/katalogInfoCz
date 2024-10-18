document.addEventListener('DOMContentLoaded', function () {
    const slideshowContainer = document.querySelector('.slideshowContainer');
    const scrollBoxes = document.querySelectorAll('.scrollBox');
    const dots = document.querySelectorAll('.dot');
    const pinkButtons = document.querySelectorAll('.pinkButton');
    const overlays = document.querySelectorAll('.overlay');

    function scrollToSlide(index) {
        const scrollPosition = scrollBoxes[index].offsetLeft;
        slideshowContainer.scrollTo({
            left: scrollPosition,
            behavior: 'smooth'
        });
        activateDot(index);
    }

    function activateDot(index) {
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', function () {
            scrollToSlide(index);
        });
    });

    slideshowContainer.addEventListener('scroll', function () {
        const scrollLeft = slideshowContainer.scrollLeft;
        scrollBoxes.forEach((box, index) => {
            if (scrollLeft >= box.offsetLeft - box.offsetWidth / 2 && scrollLeft < box.offsetLeft + box.offsetWidth / 2) {
                activateDot(index);
            }
        });
    });



  function openPopup(popupId) {
    const popup = document.getElementById(popupId);
    popup.classList.add('active');
  }

  function closePopup(popup) {
    popup.classList.remove('active');
  }

  pinkButtons.forEach(button => {
    button.addEventListener('click', function() {
      const popupId = button.getAttribute('data-popup');
      openPopup(popupId);
    });
  });


  overlays.forEach(overlay => {
    overlay.addEventListener('click', function(event) {
      if (event.target === overlay || event.target.classList.contains('close')) {
        closePopup(overlay);
      }
    });
  });

});

