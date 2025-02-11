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
                    <a href="${project.link}" target="_blank">Katso projekti</a>
                `;
                projectList.appendChild(projectItem);
            });
        })
        .catch(error => console.error("Virhe ladattaessa projekteja:", error));
});