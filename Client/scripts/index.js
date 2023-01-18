const categoriesDiv = document.getElementById("categoriesDiv");
const multipleServicesDiv = document.getElementById("multipleServicesDiv");
const categoriesArr = [
  {
    imageUrl:
      "https://shop.advanceautoparts.com/wcsstore/CVWEB/Attachment/staticbusinesscontent/image/home/flyer-lg.jpg",
    name: "Sales Flyer",
  },
  {
    imageUrl:
      "https://shop.advanceautoparts.com/wcsstore/CVWEB/Attachment/staticbusinesscontent/image/home/18-Driveworks-Fuel-Filter.jpg",
    name: "Small Engine",
  },
  {
    imageUrl:
      "https://shop.advanceautoparts.com/wcsstore/CVWEB/Attachment/staticbusinesscontent/image/2018/07/air-filter.jpg",
    name: "Engine Air Filters",
  },
  {
    imageUrl:
      "https://shop.advanceautoparts.com/wcsstore/CVWEB/Attachment/staticbusinesscontent/image/home/TC-FRAM-Oil-and-Filter.jpg",
    name: "Oil Change Bundles",
  },
  {
    imageUrl:
      "https://shop.advanceautoparts.com/wcsstore/CVWEB/Attachment/staticbusinesscontent/image/home/hm-topcat-wipers.jpg",
    name: "Wipers",
  },
  {
    imageUrl:
      "https://shop.advanceautoparts.com/wcsstore/CVWEB/Attachment/staticbusinesscontent/image/2018/07/brake-rotors.jpg",
    name: "Rotors & Drums",
  },
  {
    imageUrl:
      "https://shop.advanceautoparts.com/wcsstore/CVWEB/Attachment/staticbusinesscontent/image/home/04-CQ-Radiator.jpg",
    name: "Radiators",
  },
  {
    imageUrl:
      "https://shop.advanceautoparts.com/wcsstore/CVWEB/Attachment/staticbusinesscontent/image/home/TC-Brakes.jpg",
    name: "Brake Pads & Shoes",
  },
  {
    imageUrl:
      "https://shop.advanceautoparts.com/wcsstore/CVWEB/Attachment/staticbusinesscontent/image/home/TC-ShocksStruts.jpg",
    name: "Shocks & Struts",
  },
  {
    imageUrl:
      "https://shop.advanceautoparts.com/wcsstore/CVWEB/Attachment/staticbusinesscontent/image/landing/battery/diehard/HP-Category-Grid-DieHard-Gold-95x95.jpg",
    name: "Batteries",
  },
  {
    imageUrl:
      "	https://shop.advanceautoparts.com/wcsstore/CVWEB/Attachment/staticbusinesscontent/image/2018/07/spark-plugs.jpg",
    name: "Spark Plugs",
  },
  {
    imageUrl:
      "https://shop.advanceautoparts.com/wcsstore/CVWEB/Attachment/staticbusinesscontent/image/home/06-Spectre-Air-Intake-Kit.jpg",
    name: "Performance Parts",
  },
];
const multipleServicesArr = [
  {
    logo: '<i class="fa-solid fa-house"></i>',
    heading: "Free In Store Services",
    para: "Personalized care including battery testing and installation, oil recycling, wiper installation and more!",
  },
  {
    logo: '<i class="fa-solid fa-car-side"></i>',
    heading: "Advance Same Day",
    para: "Free in store or curbside pickup.  Plus delivery available in select markets.",
  },
  {
    logo: '<i class="fa-solid fa-gauge-simple-high"></i>',
    heading: "Speed Perks",
    para: "Get points for every purchase.  Redeem points for rewards.",
  },
  {
    logo: '<i class="fa-solid fa-users"></i>',
    heading: "Hiring Now: In Store &amp; Corporate",
    para: "Be seen, heard &amp; valued. Careers start &amp; thrive here. Apply now.",
  },
  {
    logo: '<i class="fa-solid fa-dollar-sign"></i>',
    heading: "Rebates and Sweepstakes",
    para: "Find out about rebate and sweepstake offers, submit your rebate online and more!",
  },
  {
    logo: '<i class="fa-solid fa-user"></i>',
    heading: "Need a Certified Technician?",
    para: "We have approved professionals to repair any problem you have.",
  },
];

showCategories();
function showCategories() {
  categoriesArr.forEach((el) => {
    const card = document.createElement("div");
    card.setAttribute("class", "categoryDivCard");
    const imgDiv = document.createElement("div");
    imgDiv.setAttribute("class", "categoryDivImgDiv");
    const image = document.createElement("img");
    image.src = el.imageUrl;
    const name = document.createElement("h3");
    name.textContent = el.name;

    imgDiv.append(image, name);
    card.append(imgDiv);
    categoriesDiv.append(card);
  });

  multipleServicesArr.forEach((el) => {
    const outerDiv = document.createElement("div");
    outerDiv.setAttribute("class", "outerDiv");
    const mainDivServices = document.createElement("div");
    mainDivServices.setAttribute("class", "mainDivServices");
    const iconDiv = document.createElement("div");
    iconDiv.innerHTML = el.logo;

    iconDiv.setAttribute("class", "iconDiv");
    const head = document.createElement("h3");
    head.textContent = el.heading;
    const desc = document.createElement("p");
    desc.textContent = el.para;

    mainDivServices.append(iconDiv, head, desc);
    outerDiv.append(mainDivServices);
    multipleServicesDiv.append(outerDiv);
  });
}
