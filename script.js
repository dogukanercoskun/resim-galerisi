document.addEventListener("DOMContentLoaded", function () {
    const galleryContainer = document.getElementById("galleryContainer");
  
    // Fonksiyon, belirtilen sayıda resmi galeriye ekler
    function populateGallery(numImages) {
      for (let i = 0; i < numImages; i++) {
        const image = document.createElement("img");
        image.src = `https://source.unsplash.com/random/400x400?${i}`;
        image.alt = `Image ${i + 1}`;
        image.classList.add("gallery-image");
        galleryContainer.appendChild(image);
      }
    }
  
    // Sayfa yüklendiğinde galeriyi oluştur
    populateGallery(15); // 3 sütun x 5 satır = 15 resim
  
    // Sayfa yenilendiğinde galeriyi güncelle
    window.onbeforeunload = function () {
      galleryContainer.innerHTML = "";
      populateGallery(15);
    };
  });
  