document.addEventListener('DOMContentLoaded', function () {
    const slideshowContainer = document.querySelector('.slideshowProductContainer');
    const scrollBoxes = document.querySelectorAll('.scrollProductBox');
    const dots = document.querySelectorAll('.dot');
    const svgDots = document.querySelectorAll('.dot-svg');

    const slideshowProductContainer = document.querySelector('.slideshowContainer');
    const scrollProductBoxes = document.querySelectorAll('.scrollBox');
    const dots2 = document.querySelectorAll('.dot2');

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
        svgDots.forEach(dot => dot.classList.remove('active'));
        console.log(index)
        console.log(dots)

        dots[index].classList.add('active');
        svgDots[index].classList.add('active');
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', function () {
            scrollToSlide(index);
        });
    });

    svgDots.forEach((dot, index) => {
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