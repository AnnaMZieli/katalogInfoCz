document.addEventListener('DOMContentLoaded', function () {
    const slideshowContainer = document.querySelector('.slideshowProductContainer');
    const scrollBoxes = document.querySelectorAll('.scrollProductBox');
    const dots = document.querySelectorAll('.dot');

    const mintButtons = document.querySelectorAll('.textBox');
    const overlays = document.querySelectorAll('.overlay1');

    const whiteButton = document.querySelector('.whiteButton');
    const overlay2 = document.getElementById('imagePopup');


    function scrollToSlide(index) {
        const scrollPosition = scrollBoxes[index].offsetLeft;
        slideshowContainer.scrollTo({
            left: scrollPosition,
            behavior: 'auto'
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
    console.log(popup);
    popup.classList.add('active');
  }

  function closePopup(popup) {
    popup.classList.remove('active');
  }

  mintButtons.forEach(button => {
    button.addEventListener('click', function() {
      const popupId = button.getAttribute('data-popup');
      console.log(popupId);
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

