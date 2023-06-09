let tab = document.querySelectorAll('.tabs-title');
tab.forEach(function(item){
    item.addEventListener('click', function(){
        let currentTab = document.querySelector(`.tab-content[data-tab-content="${item.dataset.tab}"]`);

        document.querySelector('.tab-content.content-active').classList.remove('content-active');
        document.querySelector('.tabs-title.active').classList.remove('active');

        currentTab.classList.add('content-active');
        item.classList.add('active');
    });
});


//---Feedback---
const customerHidden = document.querySelectorAll('.user-hidden');
const thumbHidden = document.querySelectorAll('.hide-authors-mini');
const thumbnailPhoto = Array.from(document.querySelectorAll('.usercard'));
const prevSlide = document.querySelectorAll('.left');
const nextSlide = document.querySelectorAll('.right');

const applyHiddenClass = (cls, length = cls.length, count = 0) => {
    for (let i = count; i < length; i++) {
        cls[i].style.display = 'none';
    }
};
applyHiddenClass(customerHidden);
applyHiddenClass(thumbHidden);

function showReview() {
    const customerReview = Array.from(document.querySelectorAll('.user-review'));
    customerReview.forEach((value) => value.style.display = 'none');
    const customerData = this.getAttribute('data-customer');ƒ
    const reviewData = customerReview.filter((value) => {
        return value.getAttribute('data-customer') === customerData;
    });
    reviewData[0].style.display = '';
    thumbnailPhoto.forEach((value) => value.classList.remove('usercard-animate'));
    this.classList.add('usercard-animate');
}

const prevReview = () => {
    const currentImageIndex = thumbnailPhoto.findIndex((items) => items.classList.contains('usercard-animate'));
    const currentImage = document.querySelectorAll('.usercard-animate');
    let prevImageIndex = currentImageIndex - 1;
    let prevImage = thumbnailPhoto[prevImageIndex];
    const customerReview = Array.from(document.querySelectorAll('.user-review'));
    customerReview.forEach((items) => items.style.display = 'none');

    if (currentImageIndex === 0) {
        thumbnailPhoto.forEach((items) => items.style.display = '');
        prevImage = thumbnailPhoto[thumbnailPhoto.length - 1];
        prevImageIndex = thumbnailPhoto.length - 1;
        currentImage[currentImageIndex].style.display = 'none';
    }
    if (prevImage.style.display === 'none') {
        prevImage.style.display = '';
        thumbnailPhoto[currentImageIndex + 3].style.display = 'none';
    }
    currentImage[0].classList.remove('usercard-animate');
    prevImage.classList.add('usercard-animate');
    customerReview[prevImageIndex].style.display = '';
    customerReview[prevImageIndex].classList.add('animate__slideInRight');
};

const nextReview = () => {
    const currentImageIndex = thumbnailPhoto.findIndex((items) => items.classList.contains('usercard-animate'));
    const currentImage = document.querySelectorAll('.usercard-animate');
    let nextImageIndex = currentImageIndex + 1;
    let nextImage = thumbnailPhoto[nextImageIndex];
    const customerReview = Array.from(document.querySelectorAll('.user-review'));

    customerReview.forEach((items) => items.style.display = 'none');

    if (currentImageIndex === (thumbnailPhoto.length - 1)) {
        thumbnailPhoto.forEach((items) => items.style.display = '');
        nextImage = thumbnailPhoto[0];
        nextImageIndex = 0;
        currentImage[0].style.display = 'none';
    }
    if (nextImage.style.display === 'none') {
        nextImage.style.display = '';
        thumbnailPhoto[currentImageIndex - 3].style.display = 'none';
    }
    currentImage[0].classList.remove('usercard-animate');
    nextImage.classList.add('usercard-animate');
    customerReview[nextImageIndex].style.display = '';
    customerReview[nextImageIndex].classList.add('animate__slideInLeft');
};

const thumbnail = document.querySelectorAll('.usercard');

thumbnail.forEach(function(item){
    item.addEventListener('click', showReview);
});

prevSlide[0].addEventListener('click', prevReview);
nextSlide[0].addEventListener('click', nextReview);