const plusImages = document.querySelectorAll(".plus-img");
const minusImages = document.querySelectorAll(".minus-img");
const answerDivs = document.querySelectorAll('.answer');

plusImages.forEach((plusImage, index) => {
    plusImage.addEventListener("click", function() {
        answerDivs[index].classList.toggle("hidden");

        plusImage.classList.toggle("hidden");
        minusImages[index].classList.toggle("hidden");
    });
});

minusImages.forEach((minusImage,index) => {
    minusImage.addEventListener("click", function(){
        answerDivs[index].classList.add("hidden");
        plusImages[index].classList.remove("hidden");
        minusImages[index].classList.add("hidden");
    })
})





        
    



