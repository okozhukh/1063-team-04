document.addEventListener("partialsLoaded", async () => {
  await import('./banners.and.carousel.js');
  await import("./trending-products-carousel.js");
  await import("./trending-header-text.js");
  await import("./scroll-up.js");
  await import("./shopping-cart.js");
  await import("./recommend-list.js");
  await import("./testimonials.js");
  await import("./new-arrivals.js");
  await import("./new-arrivals-carousel-cards.js");
  await import("./trending-products-carousel.js");
  await import("./about-us.js");
  await import("./carousel-any-products.js");
});
