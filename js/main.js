import fetchMenu from "./api.js";
import { elements, renderCards } from "./ui.js";

document.addEventListener("DOMContentLoaded", async () => {
  // Sayfa yüklendiğinde api isteği at ve gelen veriyi data'ya aktar
  const data = await fetchMenu();

  // Card elemanlarını render et
  renderCards(data);

  elements.inputs.forEach((input) => {
    input.addEventListener("change", () => {
      // İnputun id'sine eriş
      const selected = input.id;

      // Eğer seçili kategori all ise tüm ürünleri render et ama başka bir kategori seçiliyse bu kategorideki ürünleri render et
      if (selected === "all") {
        renderCards(data);
      } else {
        const filtred = data.filter((item) => item.category == selected);
        renderCards(filtred);
      }
    });
  });
});
