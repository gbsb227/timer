console.log("hello");

const controlButton = document.querySelector(".control-button");

const hrs = document.querySelector(".hrs");

const min = document.querySelector(".min");

const sec = document.querySelector(".sec");

function a() {
  console.log(hrs.value);
  hrs.value--;
}

function b() {
  setInterval(a, 1000);
}

controlButton.addEventListener("click", () => {
  console.log("start");
  const timer = setInterval(a, 1000);

  // setTimeout(function () {
  //   clearInterval(timer);
  // });
});
