"use strict";

function botonTrailer(boton) {
  const Id = boton.getAttribute("data-id");
  const video = document.getElementById(Id);

  video.classList.toggle("trailerOff");
  video.classList.toggle("trailerOn");
}
