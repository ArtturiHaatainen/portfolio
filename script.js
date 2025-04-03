document.addEventListener("DOMContentLoaded", function() {
    fetch("projects.json")
        .then(response => response.json())
        .then(data => {
            const projectList = document.getElementById("project-list");
            data.forEach(project => {
                const projectItem = document.createElement("div");
                projectItem.classList.add("project");
                projectItem.innerHTML = `
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <p>Technologies: ${project.technologies.join(", ")}</p>
                    <a href="${project.link}" target="_blank">Check it out!</a>
                `;
                projectList.appendChild(projectItem);
            });
        })
        .catch(error => console.error("Error when loading projects:", error));
});