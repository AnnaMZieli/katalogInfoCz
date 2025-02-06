document.addEventListener('DOMContentLoaded', function () {
    const slideshowContainer = document.querySelector('.slideshowProductContainer');
    const scrollBoxes = document.querySelectorAll('.scrollProductBox');
    const dots = document.querySelectorAll('.dot');

    const whiteButton = document.querySelector('.whiteButton');
    const overlay2 = document.getElementById('imagePopup');

    const navList = document.querySelector('.sticky-header ul');
    const targetItem = navList.children[3];
    
    const itemOffset = targetItem.offsetLeft;
    const itemWidth = targetItem.offsetWidth;
    const containerWidth = navList.offsetWidth;
  
    navList.scrollLeft = itemOffset - (containerWidth / 2) + (itemWidth / 2);


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

