document.addEventListener("DOMContentLoaded", () => {
    const sendEl = document.getElementById("send");
    const responseEl = document.getElementById("response");

    sendEl.addEventListener("click", async () => {
        const methodEl = document.getElementById("method");
        const urlEl = document.getElementById("url");

        const res = await fetch(urlEl.value, {
            method: methodEl.value,
        });

        const data = await res.json();

        responseEl.textContent = JSON.stringify(data, null, 4);

        Prism.highlightElement(responseEl);
    });
});
