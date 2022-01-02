const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeModal = document.querySelector(".close-modal");
const openModal = document.querySelectorAll(".show-modal")

for (let modals of openModal){
     modals.addEventListener("click", function(){
        modal.classList.remove("hidden");
        overlay.classList.remove("hidden")
     })
};

closeModal.addEventListener("click", function(){
     modal.classList.add("hidden");
     overlay.classList.add("hidden");
});

overlay.addEventListener("click", function(){
     modal.classList.add("hidden")
     overlay.classList.add("hidden")
});

document.addEventListener("keydown", function(e){
     if(e.key === "Escape" && !modal.classList.contains("hidden")){
          modal.classList.add("hidden")
          overlay.classList.add("hidden")
     }
})




