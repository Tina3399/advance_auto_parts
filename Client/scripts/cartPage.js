const cart_arr = [
    {
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
    },
  ];
  const subtotal = document.getElementById("subtotal");
  const cart_items_div = document.getElementById("cart_items_div");
  const total_qty = document.getElementById("total_qty");
  const checkoutBtn = document.getElementById("checkoutBtn");
  checkoutBtn.addEventListener("click", checkOutOnClick());
  ​
  const tbody = document.querySelector("tbody");
  ​
  console.log(cart_arr);
  ​
  show_cart_items(cart_arr);
  function show_cart_items(cart_arr) {
    tbody.innerHTML = null;
    cart_arr.forEach((element, index) => {
      console.log(element, index);
      const table_row = document.createElement("tr");
      const name_td = document.createElement("td");
      name_td.innerText = element.title;
      const image_td = document.createElement("img");
      image_td.src = element.image;
      const price_td = document.createElement("td");
      price_td.innerText = element.price;
      const qty_td = document.createElement("td");
      qty_td.innerText = element.count;
      const total_td = document.createElement("td");
      total_td.innerText = +element.price * +element.count;
      const remove_td = document.createElement("td");
      remove_td.innerHTML = '<i class="fa-sharp fa-solid fa-circle-xmark"></i>';
  ​
      remove_td.addEventListener("click", () => {
        remove_row(index);
      });
  ​
      table_row.append(name_td, image_td, price_td, qty_td, total_td, remove_td);
      console.log(table_row);
      tbody.append(table_row);
    });
    showSubTotal();
    total_qty.innerText = cart_arr.length + " items ";
  }
  ​
  function showSubTotal() {
    let total = 0;
  ​
    for (let i = 0; i < cart_arr.length; i++) {
      total += cart_arr[i].price * cart_arr[i].count;
    }
    subtotal.innerText = "₹" + total;
  }
  ​
  function remove_row(index) {
    console.log(index);
    cart_arr.splice(index, 1);
  ​
    //   localStorage.setItem("cart_arr", JSON.stringify(cart_arr));
    show_cart_items();
    console.log(cart_arr);
  }
  ​
  function checkOutOnClick() {
    fetch("https://63c64dbad307b76967365584.mockapi.io/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        orderDetails: cart_arr,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
      });
  }