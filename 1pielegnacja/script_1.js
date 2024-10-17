document.addEventListener('DOMContentLoaded', function() {
    const slideshowContainer = document.querySelector('.slideshowContainer');
    const scrollBoxes = document.querySelectorAll('.scrollBox');
    const dots = document.querySelectorAll('.dot');
  
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
      dot.addEventListener('click', function() {
        scrollToSlide(index);
      });
    });
  
    slideshowContainer.addEventListener('scroll', function() {
      const scrollLeft = slideshowContainer.scrollLeft;
      scrollBoxes.forEach((box, index) => {
        if (scrollLeft >= box.offsetLeft - box.offsetWidth / 2 && scrollLeft < box.offsetLeft + box.offsetWidth / 2) {
          activateDot(index);
        }
      });
    });
  });
  