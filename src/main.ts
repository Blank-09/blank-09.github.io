import "./ts/navbar";
import Rellax from "rellax";

document
  .querySelectorAll("[data-parallax]")
  .forEach((element) => new Rellax(element));
