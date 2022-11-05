const navbar = document.getElementById("navbar")!;

/**
 * Scrolls to an element with header offset
 */
export default function scrollto(element: HTMLElement) {
  let position = element.offsetTop - parseInt(getComputedStyle(navbar).height);

  window.scrollTo({
    top: position,
    behavior: "smooth",
  });
}
