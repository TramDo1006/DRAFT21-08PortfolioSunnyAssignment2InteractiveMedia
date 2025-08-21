<script>
document.getElementById("y").textContent = new Date().getFullYear();
</script>
<script>
document
  .querySelector(".dropdown-btn")
  .addEventListener("click", function () {
    document.querySelector(".dropdown").classList.toggle("active");
  });
</script>

<!-- scaling script -->
<script src="scale.js"></script>
</body>
</html>
