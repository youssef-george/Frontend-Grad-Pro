document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('userForm');
    if (form) {
        const resultSection = document.getElementById('result');
        const resultName = document.getElementById('resultName');
        const resultEmail = document.getElementById('resultEmail');
        const resultMessage = document.getElementById('resultMessage');

        form.addEventListener('submit', function (event) {
            event.preventDefault();

            const name = form.name.value;
            const email = form.email.value;
            const message = form.message.value;

            resultName.textContent = `Name: ${name}`;
            resultEmail.textContent = `Email: ${email}`;
            resultMessage.textContent = `Message: ${message}`;

            resultSection.classList.remove('hidden');
        });
    }
});

function controlCar(direction) {
    console.log(`Car moving ${direction}`);
    // You can replace this with actual logic to control the car
    alert(`Car moving ${direction}`);
}
