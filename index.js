
const tablica = [
  {
    imageUrl:
      "./assets/ground-classic-italian-pizza-with-tomatoes-pepper-vegetables-sauce-mozarella-cheese-dark-kitchen-table-copy-space_90380-947.jpg",
    headline: "Najlepszy produkt 1",
    description: "Opis produktu 1",
    identifier: "id1",
    class: "first-product",
  },
  {
    imageUrl:
      "./assets/mixed-pizza-with-olive-bell-pepper-tomato_140725-183.jpg",
    headline: "Najlepszy produkt 2",
    description: "Opis produktu 2",
    identifier: "id2",
    class: "second-Product",
  },
  {
    imageUrl: "./assets/sdw.jpg",
    headline: "Najlepszy produkt 3",
    description: "Opis produktu 2",
    identifier: "id3",
    class: "third-product",
  },
  {
    imageUrl: "./assets/3981417.jpg",
    headline: "Najlepszy produkt 4",
    description: "Opis produktu 2",
    identifier: "id4",
    class: "fourth-product",
    price: 2,
  },
];

const elementWrapper = document.querySelector(".best-products");
const date = Date.now();

function forEveryElement(value) {
  const div = document.createElement("div");
  div.classList.add(value.class);
  div.id = value.identifier;

  div.innerHTML = `<img src="${value.imageUrl}" />
                      ${value.headline}
                      <br />
                      ${value.description}`;
  elementWrapper.appendChild(div);
}

tablica.forEach(forEveryElement);

function headlines(testTable) {
  // let result = "";

  // for (let j = 0; j < testTable.length; j = j + 1) {
  //   result = result + " " + fetchHeadline(testTable[j]);
  // }

  // return result;

  return testTable.map(forEveryElementInArray);
}
const numbers = [1, 2];

const result = numbers.map(function fun(element) {
  return element;
});

console.log("WYNIK:", result);

function forEveryElementInArray(arrayElement) {
  // arrayElement =  {
  //   imageUrl: "./assets/3981417.jpg",
  //   headline: "Najlepszy produkt 4",
  //   description: "Opis produktu 2",
  //   identifier: "id4",
  //   class: "fourth-product",
  //   price: 2,
  // },

  // return arrayElement["headline"]
  return arrayElement.headline;
}

function fetchHeadline(obj) {
  return obj["headline"];
}

// const wynik = headlines(tablica);
// console.log("WYNIK:", wynik);
