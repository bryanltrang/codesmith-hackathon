// Retrieve all text nodes from the document
const textNodes = document.querySelectorAll("p");

textNodes.forEach((node) => {
  let textArray = node.textContent.split(" ");
  textArray.forEach((element) => {
    if (Number(element)) {
      let globalData;
      let globalDataPromise;

      globalDataPromise = new Promise((resolve, reject) => {
        fetch(`http://numbersapi.com/${Math.floor(element)}/trivia`)
          .then((res) => res.text())
          .then((data) => {
            resolve(data);
          });
      });

      globalDataPromise.then((data) => {
        globalData = data;
        let index = textArray.indexOf(element);
        textArray[index] = data;
        console.log(textArray[index]);
        node.textContent.replace(element, data);
        node.textContent = textArray.join(" ");
      });
    }
  });
});

// potentially needs promise.all