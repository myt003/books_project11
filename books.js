var books = [
  { id: 0123, title: "Atomic habits", author: "James avel", price: "40" },
  {
    id: 4567,
    title: "crepuscule d'une idole",
    author: "michel onfray",
    price: "50",
  },
];
document.addEventListener("DOMContentLoaded", () => {
  var k = 2;
  table = document.getElementsByTagName("table");
  newtr = document.createElement("tr");
  table[0].appendChild(newtr);
  tr = document.getElementsByTagName("tr");
  for (j = 0; j < 5; j++) {
    td = document.createElement("td");
    tr[1].appendChild(td);
  }
  bedit = document.createElement("button");
  contenu = document.createTextNode("Edit");
  bedit.appendChild(contenu);
  bedit.setAttribute("id", "bedit" + 1);
  bsup = document.createElement("button");
  contenu1 = document.createTextNode("Delete");
  bsup.appendChild(contenu1);
  bsup.setAttribute("id", "bsup" + 1);
  n11 = document.createTextNode(books[0].id);
  n22 = document.createTextNode(books[0].title);
  n33 = document.createTextNode(books[0].author);
  n44 = document.createTextNode(books[0].price);
  tr[1].children[0].appendChild(n11);
  tr[1].children[1].appendChild(n22);
  tr[1].children[2].appendChild(n33);
  tr[1].children[3].appendChild(n44);
  tr[1].children[4].appendChild(bedit);
  tr[1].children[4].appendChild(bsup);
  table = document.getElementsByTagName("table");
  newtr = document.createElement("tr");
  table[0].appendChild(newtr);
  tr = document.getElementsByTagName("tr");
  for (j = 0; j < 5; j++) {
    td = document.createElement("td");
    tr[2].appendChild(td);
  }
  bedit = document.createElement("button");
  contenu = document.createTextNode("Edit");
  bedit.appendChild(contenu);
  bedit.setAttribute("id", "bedit" + 2);
  bsup = document.createElement("button");
  contenu1 = document.createTextNode("Delete");
  bsup.appendChild(contenu1);
  bsup.setAttribute("id", "bsup" + 2);
  n111 = document.createTextNode(books[1].id);
  n222 = document.createTextNode(books[1].title);
  n333 = document.createTextNode(books[1].author);
  n444 = document.createTextNode(books[1].price);
  tr[2].children[0].appendChild(n111);
  tr[2].children[1].appendChild(n222);
  tr[2].children[2].appendChild(n333);
  tr[2].children[3].appendChild(n444);
  tr[2].children[4].appendChild(bedit);
  tr[2].children[4].appendChild(bsup);
  document.getElementById("ajout").addEventListener("click", function () {
    var form = document.getElementById("editform");
    form.style.display = "block";
  });
  document.getElementById("ajout").addEventListener("click", function () {
    console.log(1);
    k++;
    var nouvnom = document.getElementById("newname").value;
    var nouvauteur = document.getElementById("newauthor").value;
    var nouvid = document.getElementById("newid").value;
    var nouvprix = document.getElementById("newprice").value;
    var newbooks = {
      id: nouvid,
      title: nouvnom,
      author: nouvauteur,
      price: nouvprix,
    };

    books.push(newbooks);
    console.log(books);
    table = document.getElementsByTagName("table");
    tr = document.getElementsByTagName("tr");
    trow = table[0].insertRow();
    td1 = document.createElement("td");
    trow.appendChild(td1);
    td2 = document.createElement("td");
    trow.appendChild(td2);
    td3 = document.createElement("td");
    trow.appendChild(td3);
    td4 = document.createElement("td");
    trow.appendChild(td4);
    td5 = document.createElement("td");
    trow.appendChild(td5);
    bedit = document.createElement("button");
    contenu = document.createTextNode("Edit");
    bedit.appendChild(contenu);
    bedit.setAttribute("id", "bedit" + k);
    bsup = document.createElement("button");
    contenu1 = document.createTextNode("Delete");
    bsup.appendChild(contenu1);
    bsup.setAttribute("id", "bsup" + k);
    n1 = document.createTextNode(books[books.length - 1].id);
    n2 = document.createTextNode(books[books.length - 1].title);
    n3 = document.createTextNode(books[books.length - 1].author);
    n4 = document.createTextNode(books[books.length - 1].price);
    tr[k].children[0].appendChild(n1);
    console.log(k);
    tr[k].children[1].appendChild(n2);
    tr[k].children[2].appendChild(n3);
    tr[k].children[3].appendChild(n4);
    tr[k].children[4].appendChild(bedit);
    tr[k].children[4].appendChild(bsup);
  });
  for (let i = 1; i <= k; i++) {
    console.log(k);
    document.getElementById("bedit" + i).addEventListener("click", function () {
      var nouvnom1 = document.getElementById("newname1").value;
      var nouvauteur1 = document.getElementById("newauthor1").value;
      var nouvid1 = document.getElementById("newid1").value;
      var nouvprix1 = document.getElementById("newprice1").value;
      books[i].author = nouvauteur1;
      books[i].id = nouvid1;
      books[i].price = nouvprix1;
      books[i].title = nouvnom1;
      tr[i].children[0].innerHTML = books[i].id;
      tr[i].children[1].innerHTML = books[i].title;
      tr[i].children[2].innerHTML = books[i].author;
      tr[i].children[3].innerHTML = books[i].price;
    });
  }
  for (let l = 1; l <= k; l++) {
    document.getElementById("bsup" + l).addEventListener("click", function () {
      books.splice(l, 1);
      table[0].deleteRow(l);
    });
  }
});
