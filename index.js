// selecting element
const adviceBody = document.querySelector(".advice-body");
const adviceText = document.querySelector(".advice-heading");

// url for fetch
const url = "https://api.adviceslip.com/advice";

const fetchAdvice = async () => {
  // fetching data from api
  const res = await fetch(url);
  const data = await res.json();

  console.log(data);

  // appending data 
  adviceText.innerHTML = `ADVICE # ${data.slip.id}`;
  adviceBody.innerHTML = `${data.slip.advice}`;
};

fetchAdvice();
