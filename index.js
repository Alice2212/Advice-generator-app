// selecting element
const adviceBody = document.querySelector(".advice-body");
const adviceText = document.querySelector(".advice-heading");
const submitBtn = document.getElementById("btn");

// url for fetch
const url = "https://api.adviceslip.com/advice";

submitBtn.addEventListener("click", function () {
  this.style.boxShadow = "0px 2px 30px 5px hsl(150, 100%, 66%)";
  fetchAdvice();
});

const fetchAdvice = async () => {
  // fetching data from api
  const res = await fetch(url);
  const data = await res.json();

  console.log(data);

  // appending data
  adviceText.innerHTML = `ADVICE # ${data.slip.id}`;
  adviceBody.innerHTML = `${data.slip.advice}`;
};
