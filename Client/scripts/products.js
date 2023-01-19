const rightSection = document.getElementById("rightSection");
const productsData = JSON.parse(localStorage.getItem("productsData"));
const paginationWrapper = document.getElementById("paginationWrapper");
const baseUrl = "https://63c59ffce1292e5bea27a4a8.mockapi.io/products";
const cartProductsArr = JSON.parse(localStorage.getItem("cartProd")) || [];
const totalCount = productsData.length;
showProducts();

function showProducts() {
  productsData.forEach((item) => {
    const container = document.createElement("div");
    const imgDiv = document.createElement("div");
    const image = document.createElement("img");
    image.src = item.image;
    const price = document.createElement("p");
    price.textContent = item.price;
    const brandName = document.createElement("h3");
    brandName.textContent = item.title;
    const description = document.createElement("p");
    description.textContent =
      "Engine Air Filter: Removes up to 95% of Dirt & Debris";
    const cartBtn = document.createElement("button");
    cartBtn.textContent = "Add To Cart";
    cartBtn.addEventListener("click", () => {
      addToCart(item.id, item);
    });
    imgDiv.append(image);
    container.append(imgDiv, price, brandName, description, cartBtn);
    rightSection.append(container);
  });
}

// add to cart

function addToCart(id, item) {
  let flag = false;
  for (let i = 0; i < cartProductsArr.length; i++) {
    if (cartProductsArr[i].id === id) {
      flag = true;
      cartProductsArr[i].count++;
    }
  }
  if (!flag) {
    cartProductsArr.push({ ...item, count: 1 });
  }
  console.log(flag);
  localStorage.setItem("cartProd", JSON.stringify(cartProductsArr));
  console.log(cartProductsArr);
}
