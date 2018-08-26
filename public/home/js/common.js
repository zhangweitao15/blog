$.fn.serializeToJson = function() {
    var result = {};
    var formData = this.serializeArray();
    // console.log(formData);
    for (var i = 0; i < formData.length; i++) {
        result[formData[i].name] = formData[i].value;
    }
    return result;
}
