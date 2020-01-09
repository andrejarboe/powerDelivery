function getSgItem() {
  let dataURL = "https://api.myjson.com/bins/w87bg";

  fetch(dataURL)
    .then(res => res.json())
    .then(data => {
      let sg = "";

      data.forEach(function(item) {
        sg += `
            <div class="data">
              <div class="image">
                <img src="../images/scherer01.webp" alt="" />
              </div>
              <div class="dataContent">
                <h2>${item.sgice}</h2>
                <h1>${item.name}</h1>
                <div class="button">
                  <div class="buttonInfo">
                    <h3>SHIPS#</h3>
                    <h3>${item.ships}</h3>
                  </div>
                  <button>
                    <a href=${item.link}>CLICK HERE</a>
                  </button>
                </div>
              </div>
            </div>
          `;
      });
      document.getElementById("sg").innerHTML = sg;
      console.log("****************");
      console.log(data);
      console.log("****************");
    })
    .catch(err => console.log(err));
}

getSgItem();
