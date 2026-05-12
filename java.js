const form = document.getElementById("bookingForm");
const message = document.getElementById("message");

if (form) {
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        message.textContent = "Заявка успешно отправлена! Мы свяжемся с вами для подтверждения покупки.";

        form.reset();
    });
}