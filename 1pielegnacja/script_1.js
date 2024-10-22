document.addEventListener('DOMContentLoaded', function () {
    const slideshowContainer = document.querySelector('.slideshowContainer');
    const scrollBoxes = document.querySelectorAll('.scrollBox');
    const dots = document.querySelectorAll('.dot');

    const pinkButtons = document.querySelectorAll('.infoBtn');
    const overlays = document.querySelectorAll('.overlay');

    const productSlodeshowContainer = document.querySelector('.slideshowProductContainer');
    const scrollProductBoxes = document.querySelectorAll('.scrollProductBox');
    const dots2 = document.querySelectorAll('.dot2');

    const whiteButton = document.querySelector('.whiteButton');
    const overlay2 = document.getElementById('imagePopup');
    const closeButton = document.querySelector('.close'); 


/////////////////////////////////////dots1

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


//////////////////////dots1

function scrollToSlide2(index) {
  const scrollPosition2 = scrollProductBoxes[index].offsetLeft;
  productSlodeshowContainer.scrollTo({
    left: scrollPosition2,
    behavior: 'smooth'
  });
  activateDot2(index);
}

function activateDot2(index) {
  dots2.forEach(dot => dot.classList.remove('active'));
  dots2[index].classList.add('active');
}

dots2.forEach((dot, index) => {
  dot.addEventListener('click', function () {
    console.log(`Dot ${index} clicked`);
    scrollToSlide2(index);
  });
});

productSlodeshowContainer.addEventListener('scroll', function () {
  const scrollLeft = productSlodeshowContainer.scrollLeft;
  scrollProductBoxes.forEach((box, index) => {
    if (scrollLeft >= box.offsetLeft - box.offsetWidth / 2 && scrollLeft < box.offsetLeft + box.offsetWidth / 2) {
      activateDot2(index);
    }
  });
});

//////////////////////////////////////popups

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

  ////////////////////////popup

  function openPopup2(popup) {
    popup.classList.add('active');
}

function closePopup2(popup) {
    popup.classList.remove('active');
}

if (whiteButton) {
    whiteButton.addEventListener('click', function () {
        openPopup2(overlay2);
    });
}

if (overlay2) {
    overlay2.addEventListener('click', function (event) {
        if (event.target === overlay2 || event.target.classList.contains('close')) {
            closePopup2(overlay2);
        }
    });
}

  

});

