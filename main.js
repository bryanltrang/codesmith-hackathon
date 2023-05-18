// Retrieve all text nodes from the document
const textNodes = document.querySelectorAll("p");
const mainContainer = document.createElement('div');
const numberFactTitle = document.createElement('h1');
numberFactTitle.textContent = 'Here are your number facts!';
mainContainer.appendChild(numberFactTitle);
mainContainer.style.backgroundColor = 'rgb(112, 229, 191)';
mainContainer.setAttribute('class', 'main');
mainContainer.style.display = 'flex';
mainContainer.style.justifyContent = 'space-between';
mainContainer.style.maxWidth = '100%';
mainContainer.style.flexWrap = 'wrap';
mainContainer.style.flexDirection = 'column';

const endOfMain = document.createElement('h1');
endOfMain.textContent = 'Now you can enjoy your website! :)';
endOfMain.style.backgroundColor = 'rgb(112, 229, 191)';
document.body.prepend(endOfMain);

document.body.prepend(mainContainer);

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
          popup.style.color = "rgb(156, 54, 62)";
          popup.style.fontWeight = 'bold';
          popup.style.marginTop = '8px';
          popup.style.top = "0";
          popup.style.maxWidth = 'max-content';
          /**
           * if the current div is not overlapping any new divs, node.prepend(popup)
           * else, body.prepend(popup)
           */
          mainContainer.appendChild(popup);
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
