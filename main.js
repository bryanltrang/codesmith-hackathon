// Retrieve all text nodes from the document
const textNodes = document.querySelectorAll("p");

textNodes.forEach((node) => {
  let textArray = node.textContent.split(" ");
  textArray.forEach((element) => {
    if (Number(element)) {
      fetch(`http://numbersapi.com/${Math.floor(element)}`)
        .then((res) => res.text())
        .then((data) => {
          console.log(data);
          // get the curret node and give it a relative style
          node.style.position = "relative";

          const popup = document.createElement("div");
          popup.innerText = `${data}`;
          popup.style.color = "red";
          popup.style.backgroundColor = "white";
          popup.style.border = "4px";
          popup.style.position = "absolute";
          popup.style.marginTop = "-20px";
          popup.style.top = "0";

          node.appendChild(popup);
        });
    }
  });
});

// potentially needs promise.all

// below is me just playing around with trying to grab p elements on pages and overlaying them onto one another. I was thinking of creating a 3D effect.

// textNodes.forEach((node) => {
//   const cloneNode = document.createElement("p");
//   cloneNode.className = "clone";
//   cloneNode.innerText = node.innerText;

//   cloneNode.style.position = "absolute";
//   cloneNode.style.color = "blue";
//   cloneNode.style.marginLeft = "-7px";
//   cloneNode.style.marginTop = "3px";
//   cloneNode.style.opacity = "30%";
//   cloneNode.style.top = 0;
//   cloneNode.style.left = 0;
//   cloneNode.style.width = node.style.width;

//   const cloneNode2 = document.createElement("p");
//   cloneNode2.className = "cloneTwo";
//   cloneNode2.innerText = node.innerText;

//   cloneNode2.style.position = "absolute";
//   cloneNode2.style.color = "red";
//   cloneNode2.style.marginLeft = "7px";
//   cloneNode2.style.marginTop = "-3px";
//   cloneNode2.style.opacity = "30%";
//   cloneNode2.style.top = 0;
//   cloneNode2.style.left = 0;
//   cloneNode2.style.width = node.style.width;

//   node.className = "parentTextNode";
//   node.style.position = "relative";

//   console.log(node);

//   node.appendChild(cloneNode);
//   node.appendChild(cloneNode2);
// });
