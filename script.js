// Function to redirect to the next page when "Yes" is clicked
function nextPage() {
    alert("Yay! You clicked Yes!");
    // Redirect to another page (replace 'nextPage.html' with your desired URL)
    window.location.href = "Main Interface/index.html";
}

// Function to move the "No" button when hovered over
function moveButton() {
    const noButton = document.getElementById("noButton");
    const container = document.querySelector(".container");

    // Generate random positions within the container
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;

    const buttonWidth = noButton.offsetWidth;
    const buttonHeight = noButton.offsetHeight;

    const randomX = Math.random() * (containerWidth - buttonWidth);
    const randomY = Math.random() * (containerHeight - buttonHeight);

    // Apply the new position
    noButton.style.position = "absolute";
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
}