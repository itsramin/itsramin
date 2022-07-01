"use strict";

const headerList = document.querySelector(".header__list");
const sectionItem = document.querySelectorAll(".section__item");
const listItem = document.querySelectorAll(".list__item");
///
headerList.addEventListener("click", function (e) {
  const btn = e.target.closest(".list__item");
  if (!btn) return;
  listItem.forEach((item) => item.classList.remove("list__item--active"));
  btn.classList.add("list__item--active");
  sectionItem.forEach((section) => {
    section.classList.add("hidden");
  });
  const slide = btn.dataset.name;
  document.querySelector(`.${slide}`).classList.remove("hidden");
});
