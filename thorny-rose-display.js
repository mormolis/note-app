(function (exports) {

function CreateDiv(type){
  this.type = type;
}

CreateDiv.prototype.setMessage = function (message){
  var type = document.createElement("div");
  type.setAttribute('class', this.type);
  var text = document.createTextNode(message);
  type.appendChild(text);
  document.body.appendChild(type);

}
exports.CreateDiv = CreateDiv;
})(this);