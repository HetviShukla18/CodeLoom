function run() {
    const htmlCode = document.getElementById("html-code").value;
    const cssCode = document.getElementById("css-code").value;
    const jsCode = document.getElementById("js-code").value;
    const output = document.getElementById("output");

    const fullCode = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <style>${cssCode}</style>
        </head>
        <body>
            ${htmlCode}
            <script>
                try {
                    ${jsCode}
                } catch (error) {
                    console.error('Error in your JavaScript:', error);
                }
            <\\/script>
        </body>
        </html>
    `;

    output.srcdoc = fullCode;
}

function suggest(language) {
    const suggestions = {
        html: "<!-- Use semantic tags like <header>, <main>, and <footer> for better structure. -->",
        css: "/* Use CSS variables for consistency, e.g., --primary-color: #007acc; */",
        js: "// Use functions or event listeners for better JavaScript performance."
    };

    const textarea = document.getElementById(`${language}-code`);
    const value = textarea.value;

    if (!value.includes(suggestions[language])) {
        textarea.value = `${suggestions[language]}\n\n${value}`;
    }
}

function resizeOutput(view) {
    const output = document.getElementById("output");
    if (view === "laptop") {
        output.style.width = "100%";
        output.style.height = "calc(100% - 50px)";
    } else if (view === "tablet") {
        output.style.width = "768px";
        output.style.height = "80%";
    } else if (view === "mobile") {
        output.style.width = "375px";
        output.style.height = "667px";
    }
}
