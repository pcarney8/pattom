var StadiumView = function(stadium) {

    this.initialize = function() {
        this.el = $('<div/>');
		$('.hawker-list').html(StadiumView.liTemplate(stadium.hawkers));
    };

    this.render = function() {
        this.el.html(StadiumView.template(stadium));
        return this;
    };

    this.initialize();

}

StadiumView.template = Handlebars.compile($("#stadium-tpl").html());
StadiumView.liTemplate = Handlebars.compile($("#hawker-li-tpl").html());