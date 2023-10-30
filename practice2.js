document.addEventListener("DOMContentLoaded", function () {
    const paragraph = document.getElementById("styled-paragraph");
    const textColorInput = document.getElementById("text-color-input");
    const borderWidthInput = document.getElementById("border-width-input");

    // Add event listeners to respond to changes in the input fields
    textColorInput.addEventListener("input", updateParagraphStyle);
    borderWidthInput.addEventListener("input", updateParagraphStyle);

    function updateParagraphStyle() {
        const textColorValue = textColorInput.value;
        const borderWidthValue = borderWidthInput.value;

        // Update the paragraph's text color and add a border around the text
        paragraph.style.color = `rgb(${textColorValue})`;
        paragraph.style.borderWidth = `${borderWidthValue}px`;
    }
});
