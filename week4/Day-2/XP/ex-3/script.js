

function alertBaner (){
  let baner = document.createElement('div');
  let banerText = document.createTextNode('SALE START IN !) ${'counter'}!');
  baner.appendChild(banerText);
  let body = document.body;
  body.appendChild(baner);
  baner.style.backgroundColor = 'pink';
  baner.style.fontSize = '40px';
}



