class Product {
  constructor() {
    this.id = 1
    this.arrayProducts = []
  }
  insertProducts() {
    let product = this.readData()
    if (this.validation(product) == true) {
      this.saveData(product)
    }
    this.listData()
    this.cancel()
  }

  readData() {
    let product = {}

    product.id = this.id
    product.productName = document.getElementById('productName').value
    product.productPrice = document.getElementById('productPrice').value

    return product
  }

  validation(product) {
    let message = ''

    if (product.productName === '') {
      message += 'Informe o nome do produto'
    }

    if (product.productPrice === '') {
      message += 'Informe o valor do produto'
    }

    if (message != '') {
      alert(message)
      return false
    }

    return true
  }

  saveData(product) {
    this.arrayProducts.push(product)
    this.id++
  }

  listData() {
    let tbody = document.getElementById('tbody')
    tbody.innerText = ''

    for (let i = 0; i < this.arrayProducts.length; i++) {
      let tr = tbody.insertRow()
      let td_id = tr.insertCell()
      let td_name = tr.insertCell()
      let td_price = tr.insertCell()
      let td_del = tr.insertCell()

      td_id.innerText = this.arrayProducts[i].id
      td_name.innerText = this.arrayProducts[i].productName
      td_price.innerText = this.normalizePrice(this.arrayProducts[i].productPrice)
      

      let img = document.createElement('img')
      img.src = 'img/trash.svg'
      img.setAttribute(
        'onclick',
        'product.del(' + this.arrayProducts[i].id + ')'
      )
      td_del.appendChild(img)
    }
  }

  cancel() {
    document.getElementById('productName').value = null
    document.getElementById('productPrice').value = null
  }

  del(id) {
    let tbody = document.getElementById('tbody')
    for (let i = 0; i < this.arrayProducts.length; i++) {
      if (this.arrayProducts[i].id === id) {
        this.arrayProducts.splice(i, 1)
        tbody.deleteRow(i)
      }
    }
    alert(`o item com id ${id} foi apagado`)
  }

  normalizePrice(price) {
    if (
      price.includes(',') ||
      price.includes('.')
    ) {
      let priceConverted = price.replace('.', ',')
      price = 'R$ ' + priceConverted
    } else {
      price = 'R$ ' + price + ',00'
    }

    return price
  }
}

var product = new Product()
