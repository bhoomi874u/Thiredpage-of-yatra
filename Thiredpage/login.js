document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const response = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    const result = await response.json();
    document.getElementById("message").textContent = result.message;

    if (response.ok) {
      document.getElementById("message").style.color = "green";
      // Redirect after success
      setTimeout(() => {
        window.location.href = "dashboard.html";
      }, 1500);
    } else {
      document.getElementById("message").style.color = "red";
    }

  } catch (err) {
    document.getElementById("message").textContent = "Server error!";
    document.getElementById("message").style.color = "red";
  }
});
