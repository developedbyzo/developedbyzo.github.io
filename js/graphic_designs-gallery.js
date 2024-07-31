document.addEventListener("DOMContentLoaded", function() {
    const gallery = document.getElementById("graphic_designs-gallery");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");

    const projects = [
        { src: "display/Baby Bison - Baby Bulldog on board.jpeg", target:"_blank", link: "https://developedbyzo.com/assets/portfolio/graphic_designs/display/Baby%20Bison%20-%20Baby%20Bulldog%20on%20board.jpeg" },
        { src: "display/Family Reunion - Logo.jpeg", target:"_blank", link: "https://developedbyzo.com/assets/portfolio/graphic_designs/display/Family%20Reunion%20-%20Logo.jpeg" },
        { src: "display/HeartBond - Logo - 3.jpg", target:"_blank", link: "https://developedbyzo.com/assets/portfolio/graphic_designs/display/HeartBond%20-%20Logo%20-%203.jpg"},
        // { src: "bulba.png", link: "https://example.com/project3" }
        // Add more images and links here
    ];

    projects.forEach(function(project) {
        const projectContainer = document.createElement("div");
        projectContainer.classList.add("project-container");

        const img = document.createElement("img");
        img.src = "/assets/portfolio/graphic_designs/" + project.src;
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
