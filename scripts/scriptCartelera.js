"use strict";

function botonTrailer(boton) {
  const id = boton.getAttribute("data-id");
  const video = document.getElementById(id);

  video.classList.toggle("trailerOn");
  boton.classList.toggle("cerrarTrailer");
  video.classList.toggle("trailerOff");
}
