document.getElementById("calcBtn").addEventListener("click", calculatePrice);

function calculatePrice() {
  var initialPrice = parseFloat(document.getElementById("price").value);
  var discountPercent = parseFloat(document.getElementById("discount").value);
  var resultDiv = document.getElementById("result");

  if (isNaN(initialPrice) || isNaN(discountPercent)) {
    resultDiv.innerHTML = "<div class='error'>Please enter valid numbers.</div>";
    return;
  }

  var finalPrice = initialPrice - (initialPrice * discountPercent / 100);

  var outputHtml = "Discounted price is: " + finalPrice.toFixed(2) + " lei<br>";

  if (finalPrice <= 50) {
    outputHtml += "<div class='excellent'>Excellent offer!</div>";
  } else {
    outputHtml += "<div class='standard'>Standard price</div>";
  }

  resultDiv.innerHTML = outputHtml;
}
