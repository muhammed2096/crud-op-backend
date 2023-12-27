let productName = document.getElementById("productName");
let productPrice = document.getElementById("productPrice");
let productDesc = document.getElementById("productDesc");

var productList = [];
var currentID ;
 fetchData();



function fetchData() {
  
  
    fetch(`http://localhost:8080/products`)
    .then((response) => response.json())
    .then((res) => {
      console.log(res);
      if (res.message == "Success") {
        productList = res.data;
        diplayData();
      }
    });
}

function diplayData() {
  let box = '';
  for (let i = 0; i < productList.length; i++) {
    box += `<tr>
<td>${productList[i].name}</td>
<td>${productList[i].price}</td>
<td>${productList[i].description}</td>
<td>
    <button onclick="deleteProduct(${productList[i].id})" class="btn btn-danger">Delete</button>
    <button onclick="updateProduct(${productList[i].id})" class="btn btn-warning">Update</button>

</td>


</tr>`;
  }
  document.getElementById("tbody").innerHTML = box;
}




function addProduct() {
    if (productName.value != "" && productPrice.value != "" && productDesc.value !=""){

        productName.value;
  productPrice.value;
  productDesc.value;
  let productObj = {
    name: productName.value,
    price: productPrice.value,
    desc: productDesc.value,
  };
  fetchApi("POST", "products", productObj);
  clearData()
    }
  
  console.log(productName.value, productPrice.value, productDesc.value);
}







function fetchApi(method, endPoint, data) {
  fetch(`http://localhost:8080/${endPoint}`, {
    method:method,

    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((res) => {
      console.log(res);
      if (res.message == "Success") {
        fetchData();
      }
    });
}

function deleteProduct(id) {
  console.log(id);
  fetchApi("DELETE","products", { id });
}

function updateProduct(id) {
  currentID = id;
  let currentItem = productList.filter((ele) => ele.id == id)[0]; // to get the object that return from the filter in the new array
  productName.value = currentItem.name;
  productPrice.value = currentItem.price;
  productDesc.value = currentItem.description;

  document.getElementById("add").classList.add("d-none");
  document.getElementById("update").classList.add("d-block");

  console.log(currentItem);
  console.log("allah ynwer");
}

function callUpdate() {
  let productObj = {
    name: productName.value,
    price: productPrice.value,
    desc: productDesc.value,
    id: currentID,
  };



  fetchApi("PUT", "products", productObj);
  document.getElementById("add").classList.remove("d-none");
  document.getElementById("update").classList.remove("d-block");
  clearData()
}



function clearData(){
    productName.value = ""
    productPrice.value = ""
    productDesc.value = ""
}