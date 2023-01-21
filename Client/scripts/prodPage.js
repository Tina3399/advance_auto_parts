let product = JSON.parse(localStorage.getItem("viewDetail"));
console.log(product);
const container = document.getElementById("floating_div");
const name_tag = document.getElementById("product_name");
const price_tag = document.getElementById("product_price");
showData(product);
function showData(product) {
  console.log(product, "prod");
  name_tag.innerText = product.title;
  price_tag.innerText = "$ " + product.price;
  let sub_div = document.createElement("div");
  let image_div = document.createElement("div");
  image_div.setAttribute("id", "product_image_div");
  let image = document.createElement("img");
  const description = document.createElement("div");
  description.innerText = product.description;
  const subCategory = document.createElement("h4");
  subCategory.textContent = product.sub_category;
  const reviews = document.createElement("p");
  reviews.textContent = product.review;
  const rating = document.createElement("p");
  rating.textContent = product.rating;
  const category = document.createElement("h4");
  category.textContent = product.category;
  image.src = product.image;
  image_div.append(image);
  sub_div.append(
    image_div,
    description,
    subCategory,
    reviews,
    rating,
    category
  );
  container.append(sub_div);
}
