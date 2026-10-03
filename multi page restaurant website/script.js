// Mobile Menu
const navlinks = document.getElementById("navlinks");
function showMenu() {
    navlinks.style.right = "0";
}
function hideMenu() {
    navlinks.style.right = "-260px";
}
// Active Links
// const links = document.querySelectorAll(".nav-links a");

// links.forEach(link => {

//     link.addEventListener("click", function () {

//         links.forEach(item => {
//             item.classList.remove("active");
//         });

//         this.classList.add("active");

//         if (window.innerWidth <= 768) {
//             hideMenu();
//         }
//     });
// });

// filter button
 const filterButtons =   document.querySelectorAll(".filter-btn");
  const cards =  document.querySelectorAll(".card");
  filterButtons.forEach(button => {
    button.addEventListener("click", function () {
        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });
        this.classList.add("active");
        const category =
            this.dataset.category;
        cards.forEach(card => {
            const cardCategory =
                card.dataset.category;
            if (
                category === "all" ||
                category === cardCategory
            ) {

                card.style.display = "block";

            } else {

                card.style.display = "none";
            }
        });
    });
});



// Show button when scrolling

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});

// ==========================================
// SCROLL TO TOP
// ==========================================

backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


 const currentPage =
     window.location.pathname.split("/").pop() || "index.html";
 const navLinks = document.querySelectorAll(".nav-links a");

 navLinks.forEach(link => {

    const linkPage =
        link.getAttribute("href").split("/").pop();

     if (linkPage === currentPage) {
         link.classList.add("active");
     }

 });



