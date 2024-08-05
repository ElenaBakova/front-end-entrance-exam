const editableElements = document.querySelectorAll('[contenteditable="true"]');

document.addEventListener("DOMContentLoaded", () => {
    editableElements.forEach((element) => {
        element.addEventListener("input", () => {
            localStorage.setItem(element.id, element.innerText);
        });

        if (localStorage.getItem(element.id)) {
            element.innerText = localStorage[element.id];
        }
        localStorage.setItem(element.id, element.innerText);
    });
});

function downloadCV() {
    console.log("Downloading CV");
    window.print();
}
