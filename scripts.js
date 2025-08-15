// btn-product
function setupScrollButtons(prevId, nextId, scrollContainerId) {
    const prevBtn = document.getElementById(prevId);
    const nextBtn = document.getElementById(nextId);
    const scrollContainer = document.getElementById(scrollContainerId);

    const scrollAmount = () => {
        const product = scrollContainer.querySelector('.products');
        return product ? product.offsetWidth + 20 : 300;
    };

    nextBtn.onclick = () => {
        scrollContainer.scrollLeft += scrollAmount();
    };
    prevBtn.onclick = () => {
        scrollContainer.scrollLeft -= scrollAmount();
    };
}
// btn-brand-name
setupScrollButtons('prev-rog', 'next-rog', 'formList-rog');
setupScrollButtons('prev-tuff', 'next-tuff', 'formList-tuff');
setupScrollButtons('prev-asus', 'next-asus', 'formList-asus');
setupScrollButtons('prev-zenbook', 'next-zenbook', 'formList-zenbook');
setupScrollButtons('prev-msi', 'next-msi', 'formList-msi');
setupScrollButtons('prev-legion', 'next-legion', 'formList-legion');

// product-name
let rogContainer = document.querySelector('.listProduct.rog');
let tufContainer = document.querySelector('.listProduct.tuff');
let asusContainer = document.querySelector('.listProduct.asus');
let zenbookContainer = document.querySelector('.listProduct.zenbook');
let msiContainer = document.querySelector('.listProduct.msi');
let legionContainer = document.querySelector('.listProduct.legion');

let listProducts = [];

const renderProducts = (container, products) => {
  container.innerHTML = '';
  products.forEach(product => {
    const newProduct = document.createElement('div');
    newProduct.classList.add('products');
    newProduct.innerHTML = `
      <a href="product.html"><img class="img-fluid mb-3" src="${product.image}" alt=""></a>
      <div class="star">
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
      </div>
      <h5 class="p-name">${product.name}</h5>
      <h4 class="p-price">$${product.price}</h4>
      <button class="p-button">Order Now</button>
    `;
    container.appendChild(newProduct);
  });
};

const initApp = () => {
  Promise.all([
    fetch('./json/ROG.json').then(res => res.json()),
    fetch('./json/TUFF.json').then(res => res.json()),
    fetch('./json/asus.json').then(res => res.json()),
    fetch('./json/zenbook.json').then(res => res.json()),
    fetch('./json/msi.json').then(res => res.json()),
    fetch('./json/legion.json').then(res => res.json())
  ])
  .then(([rogData, tufData, asusData, zenbookData, msiData, legionData]) => {
    renderProducts(rogContainer, rogData);
    renderProducts(tufContainer, tufData);
    renderProducts(asusContainer, asusData);
    renderProducts(zenbookContainer, zenbookData);
    renderProducts(msiContainer, msiData);
    renderProducts(legionContainer, legionData);
  });
};
initApp();

  // btn_scroll_top
  document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('scrollToTop');

    window.addEventListener('scroll', function () {
      if (window.scrollY > 1) {
        button.style.display = 'block';
      } else {
        button.style.display = 'none';
      }
    });

    button.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });






