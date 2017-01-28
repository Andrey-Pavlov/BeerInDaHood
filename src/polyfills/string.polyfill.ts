if (!String.prototype.format) {
  String.prototype.format = function() {
    let args = arguments;
    return this.replace(/{(\d+)}/g, function(match, num) {
      return typeof args[num] !== 'undefined'
        ? args[num]
        : match
        ;
    });
  };
}
