function listNer(i){
      let num = 0;
      //let priceCounter = ['price-0', 'price-1', 'price-2', 'price-3', 'price-4', 'price-5', 'price-6', 'price-7', 'price-8', 'price-9']
      let itemCounter = ['cont-items-0', 'cont-items-1', 'cont-items-2', 'cont-items-3', 'cont-items-4', 'cont-items-5', 'cont-items-6', 'cont-items-7', 'cont-items-8', 'cont-items-9']
      let contBordo = ['contBordo-0','contBordo-1', 'contBordo-2', 'contBordo-3', 'contBordo-4', 'contBordo-5', 'contBordo-6', 'contBordo-7', 'contBordo-8', 'contBordo-9'];
      let nomeVar = ['contEl-0', 'contEl-1', 'contEl-2', 'contEl-3', 'contEl-4', 'contEl-5','contEl-6', 'contEl-7', 'contEl-8','contEl-9'];
      let nomeDir = nomeVar[i];
      let nomeBordo = contBordo[i];
      let nomeItem = itemCounter[i];
      //let nomePrice = priceCounter[i];
      //let price = document.getElementById(nomePrice).value;
      let item = document.getElementById(nomeItem);
      let dest = document.getElementById(nomeDir);
      let divListnerDown = dest.children[0];
      let divListnerUp = dest.children[2];
      let result = dest.children[1];
      let element = document.getElementById(nomeBordo);

      divListnerDown.onclick = function(){
            if(num <= 1){
                  element.classList.remove('m-border');
                  item.style.display = "none";
            } if(num >= 1){
                  num--;
                  result.innerHTML = num;
                  item.innerHTML = num;
            }
}
      divListnerUp.onclick = function(){
            num++;
            result.innerHTML = num;
            if (num > 0) {
                  element.classList.add('m-border');
                  item.classList.add("items-counter");
                  item.innerHTML = num;
                  item.style.display = "block";
            }
      }
}