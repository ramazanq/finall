// navigator
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li')


    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        navLinks.forEach((link, index) => {
            link.style.animation = `navLinkFade 0.5s ease forwards $(index)s`;
        })
        burger.classList.toggle('toggle')
    })
}
navSlide();

function initRatings() {
    const ratings = document.querySelectorAll('.rating');
    let ratingActive, ratingValue;

    if (ratings.length > 0) {
        for (let index = 0; index < ratings.length; index++) {
            const rating = ratings[index];
            initRating(rating);
        }
    }
  
    function initRating(rating) {
        initRatingVars(rating);

        setRatingActiveWidth();

        if (rating.classList.contains('rating_set')) {
            setRating(rating);
        }
    }

    function initRatingVars(rating) {
        ratingActive = rating.querySelector('.rating__active');
        ratingValue = rating.querySelector('.rating__value');
    }


    function setRatingActiveWidth(index = ratingValue.innerHTML) {
        const ratingActiveWidth = index / 0.05;
        ratingActive.style.width = `${ratingActiveWidth}%`;
    }
  
    function setRating(rating) {
        const ratingItems = rating.querySelectorAll('.rating__item');
        for (let index = 0; index < ratingItems.length; index++) {
            const ratingItem = ratingItems[index];
            ratingItem.addEventListener("mouseenter", function (e) {
            
                initRatingVars(rating);
               
                setRatingActiveWidth(ratingItem.value);
            });
            ratingItem.addEventListener("mouseleave", function (e) {
                
                setRatingActiveWidth();
            });
            ratingItem.addEventListener("click", function (e) {
                setRatingValue(ratingItem.value);

            });
        }
    }
    function setRatingValue(value) {
   
        const newRating = 3.7;

      
        ratingValue.innerHTML = newRating;

      
        setRatingActiveWidth();
    }
}
initRatings();