"use strict";

const draggables = document.querySelectorAll('.js-element')
const containers = document.querySelectorAll('.js-category')

draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', () => {
        draggable.classList.add("dragging");
    })
    draggable.addEventListener('dragend', () => {
        draggable.classList.remove("dragging");
    })
})

containers.forEach(container => {
    container.addEventListener('dragover', e => {
        e.preventDefault();
        const afterElement = getDragAfterElement(container, e.clientY);
        const draggable = document.querySelector(".dragging");
        container.classList.add("dragover");
        if (afterElement == null) {
            container.appendChild(draggable);
        } else {
            container.insertBefore(draggable, afterElement);
        }
    })
    container.addEventListener('drop', e => {
        e.preventDefault();
        container.classList.remove("dragover");
    })
})

function getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll('.js-element:not(.dragging)')];

    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        if (offset < 0 && offset > closest.offset){
            return { offset: offset, element: child};
        } else {
            return closest;
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element;
}
