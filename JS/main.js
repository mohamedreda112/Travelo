let btn = document.querySelector("nav .btn");
let navLinks = document.querySelector("nav .navlinks");
let allLinks = document.querySelectorAll(".mainlinks li  a");

btn.addEventListener("click",() => {
  btn.classList.contains("changeme") ? btn.classList.remove("changeme") : btn.classList.add("changeme");
  navLinks.classList.toggle("openit")
})

allLinks.forEach((link) => {
  link.addEventListener("click", function () {
    document.querySelector(".active")?.classList.remove("active");
    this.classList.add("active");
    btn.classList.remove("changeme");
    navLinks.classList.remove("openit")
  })
});

document.addEventListener("click", (e)=> {
  if(!navLinks.contains(e.target) && !btn.contains(e.target)) {
    navLinks.classList.remove("openit");
    btn.classList.remove("changeme")
  }
})

let placesInfo = [
  {
    name: "Indonesia",
    description:
      "Travel to Indonesia and enjoy the islands, nature, seas and mountains.",
    image: "IMGS/indon.webp",
  },
  {
    name: "Thailand",
    description:
      "Thailand is a country of natural magic, a country of beauty, golden sands and blue waters.",
    image: "IMGS/thiyland.webp",
  },
  {
    name: "Egypt",
    description:
      "Pack your bags and head to Egypt, where the pharaohs and ancient ancient buildings are.",
    image: "IMGS/egypt.webp",
  },
  {
    name: "Maldives",
    description:
      "Rest your eyes on the natural beauty of the Maldives amid the sand, seas and blue waters.",
    image: "IMGS/maldives.webp",
  },
  {
    name: "Italy",
    description:
      "Here there is beauty and romance, in Italy on the mountains magic is born, just come to that charming city.",
    image: "IMGS/italy.webp",
  },
  {
    name: "catalonia",
    description:
      "Catalonia: Rich history, vibrant culture, stunning landscapes. Barcelona's charm, sandy beaches, mouthwatering cuisine. Unforgettable.",
    image: "IMGS/catalonia.jpg",
  },
  {
    name: "Sharm",
    description:
      "Sharm El Sheikh, located on the southern tip of Egypt's Sinai Peninsula, boasts some of the most stunning underwater scenery in the world. Its beauty lies in its crystal-clear waters, vibrant coral reefs, and an abundance of marine life",
    image: "IMGS/SharmEl-Shaikh.jpg",
  },
]

let slide = document.querySelectorAll(".slide");

placesInfo.forEach((value) => {
  let item = document.createElement("div");
  item.className = "item";
  item.style.backgroundImage = `url(${value.image})`;
  let info = document.createElement("div");
  info.className = "info";
  let name = document.createElement("h2");
  name.innerText = value.name;
  let desc = document.createElement("p");
  desc.innerText = value.description;
  info.appendChild(name);
  info.appendChild(desc);
  item.appendChild(info);
  let overlay = document.createElement("div");
  overlay.className = "overlay";
  item.appendChild(overlay);
  slide.forEach((slideElement) => {
    slideElement.appendChild(item)
  })
})

document.querySelector(".next").onclick = function () {
  let lists = document.querySelectorAll(".item");
  document.querySelector(".slide").appendChild(lists[0])
}
document.querySelector(".prev").onclick = function () {
  let lists = document.querySelectorAll(".item");
  document.querySelector(".slide").prepend(lists[lists.length - 1])
}

// Create palces

let palces = [
  {
    id: 1,
    title: "Maldives",
    image: "../IMGS/maldives-1.webp",
    price: 800,
  },
  {
    id: 2,
    title: "Egypt",
    image: "../IMGS/egypt-1.webp",
    price: 450,
  },
  {
    id: 3,
    title: "Italy",
    image: "../IMGS/italy-1.webp",
    price: 350,
  },
  {
    id: 4,
    title: "Indonesia",
    image: "../IMGS/indones-1.webp",
    price: 600,
  },
  {
    id: 5,
    title: "Chian",
    image: "../IMGS/china.webp",
    price: 810,
  },
  {
    id: 6,
    title: "India",
    image: "../IMGS/india.webp",
    price: 530,
  },
  {
    id: 7,
    title: "Australia",
    image: "../IMGS/australia.webp",
    price: 920,
  },
  {
    id: 8,
    title: "France",
    image: "../IMGS/france.webp",
    price: 350,
  },
];

let butns = document.querySelectorAll(".btn-slider");
let sliderDiv = document.querySelector(".slider");
let ulCards = document.createElement("ul");
let body = document.querySelector("body");
let firstCardWidth;

function getPlaces() {
  palces.forEach((value)=> {
    let liCard = document.createElement("li");
    liCard.className = "card";
    ulCards.className = "carousel";
    ulCards.appendChild(liCard);
    liCard.innerHTML = `
    <div class="info">
      <div class="img-container">
        <img src="IMGS/${value.image}" alt="${value.title}"/>
      </div>
      <div class="sub-info">
        <div class="text">
          <h3>${value.title}</h3>
          <i onclick="changeIcon(this)" class="fa-regular fa-heart"></i>
        </div>
        <div class="main">
          <span>$${value.price}</span>
          <ul>
            <li><i class="fa-solid fa-star"></i></li>
            <li><i class="fa-solid fa-star"></i></li>
            <li><i class="fa-solid fa-star"></i></li>
            <li><i class="fa-solid fa-star"></i></li>
            <li><i class="fa-solid fa-star"></i></li>
          </ul>
        </div>
        <button onclick="popUp()" class="bookit">Book Now</button>
      </div>
    </div>
    `;
    sliderDiv.appendChild(ulCards);
    if (!firstCardWidth) {
      firstCardWidth = liCard.offsetWidth;
    }
    // console.log(value)
  })
}
butns.forEach((btn)=> {
  btn.addEventListener("click", ()=> {
    ulCards.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
  })
})
getPlaces()

function changeIcon (icon) {
  if (icon.classList.contains("activeit")) {
    icon.classList.remove("activeit");
    icon.classList.remove("fas");
    let popup = document.createElement("div");
    popup.className = "popup-massage";
    popup.innerText = "Removed Form Favorites";
    document.body.appendChild(popup);
    setTimeout(()=> {
      document.body.removeChild(popup);
    }, 2000);
  }else {
    icon.classList.add("activeit");
    icon.classList.add("fas");
    let popup = document.createElement("div");
    popup.className = "popup-massage";
    popup.innerText = "Added To Favorites";
    document.body.appendChild(popup);
    setTimeout(()=> {
      document.body.removeChild(popup);
    }, 2000);
  }
}

function popUp() {
  let bookingDiv = document.createElement("div");
  bookingDiv.className = "popup-Div";
  bookingDiv.innerHTML = "The Flight Has Been Booked Successfully";
  document.body.appendChild(bookingDiv);
  setTimeout(()=> {
    document.body.removeChild(bookingDiv)
  }, 2000)
}

window.addEventListener("scroll", reveal);
function reveal() {
  let reveals = document.querySelectorAll(".reveal");
  for(let i = 0; i < reveals.length ; i++) {
    let height = window.innerHeight;
    let revealPoint = 100;
    let revealTop = reveals[i].getBoundingClientRect().top;
    if (revealTop < height - revealPoint) {
      reveals[i].classList.add("showCard");
    } else {
      reveals[i].classList.remove("showCard");
    }
  }
}