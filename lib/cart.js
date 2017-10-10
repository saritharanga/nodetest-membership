var items = [];

exports.addItem = function(item) {
    items.push(item);
};

exports.getItems = function() {
    return items;
};