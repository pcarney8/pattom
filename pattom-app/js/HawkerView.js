var HawkerView = function(hawker) {

    this.initialize = function() {
        this.el = $('<div/>');
		$('.item-list').html(HawkerView.liTemplate(hawker.items));
    };

    this.render = function() {
        this.el.html(HawkerView.template(hawker));
        return this;
    };
	
    this.initialize();

}

HawkerView.template = Handlebars.compile($("#hawker-tpl").html());
HawkerView.liTemplate = Handlebars.compile($("#item-li-tpl").html());