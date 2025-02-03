//////////////////////////////////
// 🔹whatsapp link
const whatsappLinks = document.querySelectorAll(".whatsapp-btn");
if (window.outerWidth > 767) {
  whatsappLinks.forEach((link) => {
    link.href =
      "https://wa.me/201007719507?text=examble%20text%20for%20test%20purposes";
  });
}
