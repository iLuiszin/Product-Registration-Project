class Product {
  constructor() {
    this.id = 1
    this.arrayProducts = []
  }
  insertProducts() {
    let product = this.readData()
    if (this.validation(product) == true) {
      this.saveDate(product)
    }

    console.log(this.arrayProducts)
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

  saveDate(product) {
    this.arrayProducts.push(product)
    this.id++
  }
}

var product = new Product()
