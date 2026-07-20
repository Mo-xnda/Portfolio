// Select all elements with the 'draggable' class
const draggables = document.querySelectorAll('.draggable');

draggables.forEach(draggable => {
    let isDragging = false;
    let offsetX, offsetY;

    draggable.addEventListener('mousedown', (e) => {
        isDragging = true;
        // Calculate the difference between the mouse click and the element's top-left corner
        offsetX = e.clientX - draggable.getBoundingClientRect().left;
        offsetY = e.clientY - draggable.getBoundingClientRect().top;
        
        // Bring the active element to the very front
        draggables.forEach(d => d.style.zIndex = "10");
        draggable.style.zIndex = "100";
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        
        // Update the position of the element based on mouse movement
        draggable.style.left = `${e.clientX - offsetX}px`;
        draggable.style.top = `${e.clientY - offsetY}px`;
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
    });
});