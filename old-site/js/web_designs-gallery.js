document.addEventListener("DOMContentLoaded", function() {
    const gallery = document.getElementById("web_designs-gallery");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");

    const projects = [
        { src: "display/figma-mockup-2020-display.png", target:"_blank", link: "https://www.figma.com/proto/0Nto3yBqGlvnS1eZBttEIn/Figma-Homepage-Design?type=design&node-id=0-1&scaling=min-zoom&page-id=0%3A1" },
        { src: "display/dragonflychat-app-mockup-display.png", target:"_blank", link: "https://www.figma.com/file/9dGcqB9CwvJR2o7yw2jeME/Chat-App-Homepage-Design?type=design&node-id=107%3A17&mode=design&t=mn7uz7oXTxyQo0km-1" },
        { src: "display/together-we-go-mockup-display.png", target:"_blank", link: "https://developedbyzo.com/together-we-go/"},
        { src: "display/wanderkind-mockup-display.png", target:"_blank", link: "https://developedbyzo.com/every-journey-starts-with-you/"},
        // { src: "bulba.png", link: "https://example.com/project3" }
        // Add more images and links here
    ];

    projects.forEach(function(project) {
        const projectContainer = document.createElement("div");
        projectContainer.classList.add("project-container");

        const img = document.createElement("img");
        img.src = "/assets/portfolio/web_designs/" + project.src;
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
