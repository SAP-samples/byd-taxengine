/* Sample tax engine - applies the half of current tax rate

/** Environment Variables Required:
 *
 * 
 * */

module.exports = {
  CalcTax: function (inputData, response) {
    return calcTax(inputData, response);
  }
};

function calcTax(data, callback) {
  var newTaxRate;
  console.log("Item: " + data.inItemUUID);
  console.log("Item: " + data.inTaxTypeCode);
  if ((data.inItemUUID == "00163EAEDF8C1EEB8CF703266073F8EE") && (data.inTaxTypeCode == "YB80DZPJY_1")) {
    newTaxRate = 5;
  } else {
    newTaxRate = 15;
  }
  console.log(data);
  result = {newTaxRate}
  callback(null, result);
}