<script>
document.addEventListener("DOMContentLoaded", () => {
  const faqQuestions = document.querySelectorAll('.faq-question');

  faqQuestions.forEach(button => {
    button.addEventListener('click', () => {
      const answer = button.nextElementSibling; // assumes HTML: button immediately before answer
      answer.classList.toggle('active');        // toggles visibility via CSS
    });
  });
});
</script>