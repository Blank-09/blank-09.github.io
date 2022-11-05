import scrollto from "./scroll";

const navbar = //
  document.getElementById("navbar")! as HTMLDivElement;

navbar.querySelectorAll("a").forEach((item) => {
  item.onclick = (e) => {
    e.preventDefault();
    const targetElement = document.querySelector(item.dataset["target"]!);
    if (targetElement instanceof HTMLElement) scrollto(targetElement);
  };
});

let navHeight = //
  parseInt(getComputedStyle(navbar).height);

let limit = window.innerHeight - navHeight;

window.onresize = () => {
  navHeight = parseInt(getComputedStyle(navbar).height);
  limit = window.innerHeight - navHeight;
};

window.onscroll = () => {
  const prop = window.scrollY > limit ? "add" : "remove";
  navbar.classList[prop]("scrolled", "shadow-sm");
  navbar.classList[window.scrollY <= window.innerHeight ? "add" : "remove"](
    "transparent"
  );
};

export default navbar;
