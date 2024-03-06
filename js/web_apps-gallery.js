document.addEventListener("DOMContentLoaded", function() {
    const gallery = document.getElementById("web_apps-gallery");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");

    const projects = [
        { src: "display/animal-trivia-display.png", target: "_blank", link: "https://developedbyzo.github.io/animal-trivia.v2/" },
        { src: "display/pokedex-display.png", target: "_blank", link: "https://pokedex-ptio.onrender.com/" },
        // { src: "bulba.png", link: "https://example.com/project3" }
        // Add more images and links here
    ];

    projects.forEach(function(project) {
        const projectContainer = document.createElement("div");
        projectContainer.classList.add("project-container");

        const img = document.createElement("img");
        img.src = "/assets/portfolio/web_apps/" + project.src;
        img.alt = "Project Image";

        // Open lightbox when image is clicked
        img.addEventListener("click", function() {
            lightboxImg.src = img.src;
            lightbox.style.display = "block";
        });
        
        projectContainer.appendChild(img);

        // Create hyperlink element
        const link = document.createElement("a");
        link.href = project.link;
        link.target = project.target;
        link.textContent = "View Project";
        link.classList.add("view-project");

        projectContainer.appendChild(link);

        gallery.appendChild(projectContainer);
    });

    // Close lightbox when close button is clicked
    const closeButton = document.querySelector(".close");
    closeButton.addEventListener("click", function() {
        lightbox.style.display = "none";
    });
});
