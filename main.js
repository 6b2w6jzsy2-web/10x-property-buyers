
document.addEventListener("DOMContentLoaded", () => {
  const c = window.SITE_CONFIG || {};
  document.querySelectorAll("[data-phone-display]").forEach(el => el.textContent = c.phoneDisplay || "Call us");
  document.querySelectorAll("[data-email]").forEach(el => el.textContent = c.email || "Email us");
  document.querySelectorAll("[data-phone-link]").forEach(el => {
    el.href = c.phoneLink ? `tel:${c.phoneLink}` : "#contact";
  });
  document.querySelectorAll("[data-email-link]").forEach(el => {
    el.href = c.email && !c.email.startsWith("UPDATE") ? `mailto:${c.email}` : "#contact";
  });
  document.querySelectorAll("[data-whatsapp-link]").forEach(el => {
    el.href = c.whatsappNumber ? `https://wa.me/${c.whatsappNumber}` : "#contact";
  });

  const toggle = document.querySelector(".mobile-toggle");
  const menu = document.querySelector(".menu");
  if (toggle && menu) toggle.addEventListener("click", () => menu.classList.toggle("open"));

  document.querySelectorAll(".faq button").forEach(btn => {
    btn.addEventListener("click", () => btn.parentElement.classList.toggle("open"));
  });

  document.querySelectorAll("form[data-enquiry-form]").forEach(form => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const email = c.email || "";
      if (!email || email.startsWith("UPDATE")) {
        alert("Before publishing, add your email address in assets/js/config.js");
        return;
      }
      const subject = encodeURIComponent("New property enquiry - 10X Property Buyers");
      const body = encodeURIComponent(
`Name: ${data.get("name") || ""}
Phone: ${data.get("phone") || ""}
Email: ${data.get("email") || ""}
Property postcode: ${data.get("postcode") || ""}
Property type: ${data.get("property_type") || ""}
Timescale: ${data.get("timescale") || ""}

Message:
${data.get("message") || ""}`
      );
      window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    });
  });

  document.querySelectorAll("[data-year]").forEach(el => el.textContent = new Date().getFullYear());
});
