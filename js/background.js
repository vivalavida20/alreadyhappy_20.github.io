const images= [
    "0.jpeg", 
    "1.jpeg", 
    "2.jpeg",
    "3.jpeg",
    "4.jpeg",
    "5.jpeg",
    "6.jpeg",
    "7.jpeg",
    "8.jpeg",
    "9.jpeg",
    "10.jpeg",
    "11.jpeg",
    "12.jpeg",
    "13.jpeg",
    "14.jpeg",
    "15.jpeg",
    "16.jpeg",
    "17.jpeg",
    "18.jpeg",
    "19.jpeg",
    "20.jpeg",
    "21.jpeg",
    "22.jpeg",
    "23.jpeg",
    "24.jpeg",
    "25.jpeg",
    "26.jpeg",
    "27.jpeg",
    "28.jpeg",
    "29.jpeg",
    "30.jpeg",
    "31.jpeg",
    "32.jpeg",
    "33.jpeg",
    "34.jpeg",
    "35.jpeg",
    "36.jpeg",
    "37.jpeg",
    "38.jpeg",
    "39.jpeg",
    "40.jpeg",
    "41.jpeg",
    "42.jpeg",
    "43.jpeg",
    "44.jpeg",
    "45.jpeg", 
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const body = document.querySelector("body");
console.log(body);


// body.style.background = `url(img2/${chosenImage})`
body.style = `background:url(img2/${chosenImage});background-size:cover;background-repeat:no-repeat;background-color:black;background-position:center;`;

// console.log(`img2/${chosenImage}`);