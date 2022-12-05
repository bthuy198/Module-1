var products = ['Sony Xperia', "Nokia 6", 'Apple iPhone 8', 'Apple iPhone 6'];
function display() {
    let displayProduct = '';
    for (let i = 0; i < products.length; i++) {
        displayProduct += `
        <tr id='tr-${i}'>
            <td>${i + 1}</td>
            <td id='td-${i}'>${products[i]}</td>
            <td><button class="btn btn-edit" onclick='edit(${i})'>Edit</button></td>
            <td><button class="btn btn-save d-none" onclick='save(${i})'>Save</button></td>
            <td><button class="btn btn-cancel d-none" onclick='cancel(${i})'>Cancel</button></td>
            <td><button class="btn btn-remove" onclick='remove(${i})'>Delete</button></td>
            <td></td>
        </tr> `
    }
    let i = products.length;
    let n = '';
    n = (i == 0 || i == 1 ? `${i} product` : `${i} products`);
    document.querySelector('.table th:nth-child(3)').innerHTML = n;
    document.querySelector('.table>tbody').innerHTML = displayProduct;
}

function add() {
    let name = document.getElementById('productName').value;
    if(name == null || name.trim() == ''){
        alert('Please enter product name!');
        return;
    }
    products.push(name);
    display();
    reset();
}

function reset() {
    document.getElementById('productName').value = '';
}

function remove(index) {
    let confirmed = window.confirm('Do you want to remove this?');
    if(confirmed){
        products.splice(index, 1);
        display();
    } 
}

function edit(index){
    document.querySelector(`#tr-${index} .btn-edit`).classList.add('d-none');
    document.querySelector(`#tr-${index} .btn-save`).classList.remove('d-none');
    document.querySelector(`#tr-${index} .btn-cancel`).classList.remove('d-none');

    document.querySelector(`#td-${index}`).innerHTML = `<input class='edit-form-control' value='${products[index]}'>`
}

function cancel(index) {
    document.querySelector(`#tr-${index} .btn-edit`).classList.remove('d-none');
    document.querySelector(`#tr-${index} .btn-save`).classList.add('d-none');
    document.querySelector(`#tr-${index} .btn-cancel`).classList.add('d-none');

    document.querySelector(`#td-${index}`).innerHTML = products[index];
}

function save(index){
    let newProductName = document.querySelector(`#td-${index} .edit-form-control`).value;
    products[index] = newProductName;

    cancel(index);
}

display();
