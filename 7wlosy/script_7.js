document.addEventListener('DOMContentLoaded', function () {
    const slideshowContainer = document.querySelector('.slideshowContainer');
    const scrollBoxes = document.querySelectorAll('.scrollBox');
    const dots = document.querySelectorAll('.dot');

    const pinkButtons = document.querySelectorAll('.infoBtn');
    const overlays = document.querySelectorAll('.overlay');

    const slideshowProductContainer = document.querySelector('.slideshowProductContainer');
    const scrollProductBoxes = document.querySelectorAll('.scrollProductBox');
    const dots2 = document.querySelectorAll('.dot2');

    const slideshowProduct2Container = document.querySelector('.slideshowProduct2Container');
    const scrollProduct2Boxes = document.querySelectorAll('.scrollProduct2Box');
    const dots3 = document.querySelectorAll('.dot3');

    const whiteButton = document.querySelector('.whiteButton');
    const overlay2 = document.getElementById('imagePopup');

    const navList = document.querySelector('.sticky-header ul');

    navList.scrollLeft = navList.scrollWidth; 


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



    function scrollToSlide2(index) {
        const scrollPosition = scrollProductBoxes[index].offsetLeft;
        slideshowProductContainer.scrollTo({
            left: scrollPosition,
            behavior: 'auto'
        });
        activateDot2(index);
    }

    function activateDot2(index) {
        dots2.forEach(dot => dot.classList.remove('active'));
        dots2[index].classList.add('active');
    }

    dots2.forEach((dot, index) => {
        dot.addEventListener('click', function () {
            scrollToSlide2(index);
        });
    });

    slideshowProductContainer.addEventListener('scroll', function () {
        const scrollLeft = slideshowProductContainer.scrollLeft;
        scrollProductBoxes.forEach((box, index) => {
            if (scrollLeft >= box.offsetLeft - box.offsetWidth / 2 && scrollLeft < box.offsetLeft + box.offsetWidth / 2) {
                activateDot2(index);
            }
        });
    });
    

    function scrollToSlide3(index) {
        const scrollPosition = scrollProduct2Boxes[index].offsetLeft;
        slideshowProduct2Container.scrollTo({
            left: scrollPosition,
            behavior: 'auto'
        });
        activateDot3(index);
    }

    function activateDot3(index) {
        dots3.forEach(dot => dot.classList.remove('active'));
        dots3[index].classList.add('active');
    }

    dots3.forEach((dot, index) => {
        dot.addEventListener('click', function () {
            scrollToSlide3(index);
        });
    });

    slideshowProduct2Container.addEventListener('scroll', function () {
        const scrollLeft = slideshowProduct2Container.scrollLeft;
        scrollProduct2Boxes.forEach((box, index) => {
            if (scrollLeft >= box.offsetLeft - box.offsetWidth / 2 && scrollLeft < box.offsetLeft + box.offsetWidth / 2) {
                activateDot3(index);
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
        ['click', 'touchstart'].forEach(eventType => {
          overlay.addEventListener(eventType, function(event) {
            if (event.target === overlay || event.target.classList.contains('close')) {
              closePopup(overlay);
            }
          });
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
    const handleEvent = function (event) {
        if (event.target === overlay2 || event.target.classList.contains('close')) {
            closePopup2(overlay2);
        }
    };

    overlay2.addEventListener('click', handleEvent);
    overlay2.addEventListener('touchend', handleEvent);
}

});

const isMobile = Math.min(window.screen.width) < 768;


if(!isMobile){
  let slideIndex = 1;
  let slideIndex2 = 1;
  showSlides(slideIndex);
  showSlides2(slideIndex2);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function plusSlides2(n) {
    showSlides2(slideIndex2 += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function currentSlide2(n) {
    showSlides2(slideIndex2 = n);
  }
  
  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("scrollProductBox");
    let slidesToShow = window.innerWidth > 768 ? 3 : 5;
  
    if (n > slides.length - slidesToShow + 1) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length - slidesToShow + 1}
  
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
  
    for (i = 0; i < slidesToShow; i++) {
      slides[(slideIndex - 1 + i) % slides.length].style.display = "flex";
    }
  }
  
  window.addEventListener('resize', () => {
    showSlides(slideIndex);
  });

  function showSlides2(n) {
    let i;
    let slides2 = document.getElementsByClassName("scrollProduct2Box");
    let slidesToShow2 = window.innerWidth > 768 ? 3 : 5;
  
    if (n > slides2.length - slidesToShow2 + 1) {slideIndex2 = 1}
    if (n < 1) {slideIndex2 = slides2.length - slidesToShow2 + 1}
  
    for (i = 0; i < slides2.length; i++) {
      slides2[i].style.display = "none";
    }
  
    for (i = 0; i < slidesToShow2; i++) {
      slides2[(slideIndex2 - 1 + i) % slides2.length].style.display = "flex";
    }
  }
  
  window.addEventListener('resize', () => {
    showSlides2(slideIndex2);
  });

}