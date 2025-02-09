/*
document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("nav ul li a");

    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent default jump
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop - 20,
                behavior: "smooth"
            });
        });
    });
});
*/

//^^^ To scroll down when pressing a header link
//TO DO: change functionality to scroll when pressing another menu link

//TO DO: Add the functionality of the vines growing as you scroll down

//TO DO: Potentially add flowers blooming? (Might be too much)
