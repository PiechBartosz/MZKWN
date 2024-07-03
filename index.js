const burgerBtn = document.querySelector(".burgerBtn");
const mobileNavigation = document.querySelector(".mobileNavigation");
const items = document.querySelector(".mobileNavigation__items");

const activeNavigation = () => {
	mobileNavigation.classList.toggle("navigationHidden");

	if (mobileNavigation.classList.contains("navigationHidden")) {
		items.style.transition = "opacity 1s ease 0.5s";
		items.style.opacity = 1;
		document.body.classList.add("no-scroll");
	} else {
		items.style.transition = "";
		items.style.opacity = 0;
		document.body.classList.remove("no-scroll");
	}
};

burgerBtn.addEventListener("click", activeNavigation);
