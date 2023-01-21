let product = {
    category: "Battery",
    description:
      "Battery: 3478DT Group Size, 800 CCA, 1000 CA, 115 Minute Reserve Capacity, For Lower Power Demands",
    id: 1,
    image:
      "https://shop.advanceautoparts.com/wcsstore/CVWEB/staticproductimage/2916/thumb/2040107_svr_51r1_pri_thmb.jpg",
    price: 179.19,
    rating: 5,
    reviews: 38,
    sub_category: "Batteries",
    title: "DieHard Red",
    count: 1,
  };
  const current_user = [{ isAuth: true }];
  ​
  const cart_arr = JSON.parse(localStorage.getItem("cart_arr")) || [];
  const increase_button = document.getElementById("increase");
  increase_button.addEventListener("click", increase_qty);
  const decrease_button = document.getElementById("decrease");
  decrease_button.addEventListener("click", decrease_qty);
  const total_quantity = document.getElementById("total_quantity");
  total_quantity.innerText = product.count;
  const user_login_tag = document.getElementById("user_login_tag");
  const product_added_msg = document.getElementById("product_added_msg");
  const add_to_cart_button = document.getElementById("add_to_cart_button");
  ​
  add_to_cart_button.addEventListener("click", add_to_cart);
  const container = document.getElementById("main_product");
  const name_tag = document.getElementById("product_name");
  const price_tag = document.getElementById("product_price");
  showData(product);
  ​
  function showData(product) {
    console.log(product, "prod");
  ​
    name_tag.innerText = product.title;
    price_tag.innerText = "$ " + product.price;
    let sub_div = document.createElement("div");
    let image_div = document.createElement("div");
    image_div.setAttribute("id", "product_image_div");
    let image = document.createElement("img");
    image.src = product.image;
    image_div.append(image);
    sub_div.append(image_div);
    container.append(sub_div);
  }
  ​
  // function priceTotal() {
  //   let totalVal = 0;
  //   totalVal += +product.count * +product.price;
  //   price_tag.innerText = "₹" + totalVal;
  //   localStorage.setItem("product", JSON.stringify(product));
  //   console.log(totalVal);
  // }
  ​
  function increase_qty() {
    +product.count++;
    total_quantity.innerText = product.count;
    // priceTotal();
  }
  ​
  function decrease_qty() {
    if (total_quantity.innerText == 1) {
      return;
    }
    +product.count--;
    total_quantity.innerText = product.count;
    // priceTotal();
  }
  ​
  function add_to_cart() {
    if (current_user.length === 0) {
      user_login_tag.style.display = "block";
    } else {
      let isPresent = false;
      for (let i = 0; i < cart_arr.length; i++) {
        if (cart_arr[i].id === product.id) {
          isPresent = true;
        }
      }
      if (!isPresent) {
        cart_arr.push(product);
      }
    }
    if (current_user.length) {
      product_added_msg.style.display = "block";
    }
    setTimeout(() => (product_added_msg.style.display = "none"), 3000);
    localStorage.setItem("cart_arr", JSON.stringify(cart_arr));
    console.log(current_user);
    console.log(product);
    console.log(cart_arr);
  }
  ​
  // function logout_user() {
  //   current_user[0].isAuth = false;
  ​
  //   localStorage.clear("current_user");
  //   location.reload();
  // }