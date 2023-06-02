


document.getElementById('calc').addEventListener('click', function() {
    var amount = document.getElementById("amount").value;
    var amount = +amount;
    var quantity = document.getElementById("quantity").value;
    var quantity = +quantity;
    var total = amount * quantity;
    document.getElementById("total").value = total;
  });