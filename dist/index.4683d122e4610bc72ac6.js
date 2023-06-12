/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};



window.onload = () => {
  console.log("working...");
  document.querySelectorAll('header a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      document.querySelector(link.getAttribute('href')).scrollIntoView({
        behavior: "smooth"
      });
    });
  });
};
/******/ })()
;