$(document).ready(function () {
  // some variables

  var baseCurrency = "USD";

  var baseNumber = 1;

  var targetCurrency = "INR";

  var targetNumber;

  var url;

  currencyConverter(baseCurrency, baseNumber, targetCurrency, targetNumber);

  // get base currency value

  $("#base").change(function () {
    // base currency

    baseCurrency = $(this).children("option:selected").val();

    // call currencyConverter function

    currencyConverter(baseCurrency, baseNumber, targetCurrency, targetNumber);
  });

  // get base currency number

  $("#baseNumber").change(function () {
    // base number

    baseNumber = $(this).val();

    // call currencyConverter function

    currencyConverter(baseCurrency, baseNumber, targetCurrency, targetNumber);
  });

  // get target currency value

  $("#target").change(function () {
    // target currency

    targetCurrency = $(this).children("option:selected").val();

    // call currencyConverter function

    currencyConverter(baseCurrency, baseNumber, targetCurrency, targetNumber);
  });

  // get target currency number

  $("#targetNumber").change(function () {
    // target number

    targetNumber = $(this).val();

    // call currencyConverter function

    currencyConverter2(baseCurrency, baseNumber, targetCurrency, targetNumber);
  });

  // function to convert BaseCurrency to TargetCurrency

  function currencyConverter(
    baseCurrency,
    baseNumber,
    targetCurrency,
    targetNumber
  ) {
    // api url
    if(baseCurrency.split(" ").length>1) {
      baseCurrency = baseCurrency.split(" ");
      baseCurrency = baseCurrency[baseCurrency.length-1];
    }
    if(targetCurrency.split(" ").length>1) {
      targetCurrency = targetCurrency.split(" ");
      targetCurrency = targetCurrency[targetCurrency.length-1];
    }
    url = `
      https://free.currconv.com/api/v7/convert?q=${baseCurrency}_${targetCurrency}&compact=ultra&apiKey=3e310a11395337eda23a
      `;

    // make a get request to api

    $.get(url, function (data) {
      let rate = data[`${baseCurrency}_${targetCurrency}`];
      $("#targetNumber").val(rate*baseNumber);
    });
  }

  function currencyConverter2(
    baseCurrency,
    baseNumber,
    targetCurrency,
    targetNumber
  ) {
    // api url

    if(baseCurrency.split(" ").length>1) {
      baseCurrency = baseCurrency.split(" ");
      baseCurrency = baseCurrency[baseCurrency.length-1];
    }
    if(targetCurrency.split(" ").length>1) {
      targetCurrency = targetCurrency.split(" ");
      targetCurrency = targetCurrency[targetCurrency.length-1];
    }
    url = `
      https://free.currconv.com/api/v7/convert?q=${targetCurrency}_${baseCurrency}&compact=ultra&apiKey=3e310a11395337eda23a
      `;

    // make a get request to api

    $.get(url, function (data) {
      let rate = data[`${targetCurrency}_${baseCurrency}`];
      console.log(data)
      $("#baseNumber").val(rate*targetNumber);
    });
  }
});
