var pageList = document.querySelectorAll(".page");

for (let page = 0; page < pageList.length; page++) {
    pageList[page].addEventListener("click", (e) => {
        pageList[page].classList.toggle("availability");
        pageList[(page + 1) % pageList.length].classList.toggle("availability");
    });
}
