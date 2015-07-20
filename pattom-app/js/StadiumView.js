var StadiumView = function(stadium) {

    this.initialize = function() {
        this.el = $('<div/>');
		$('.hawker-list').html(StadiumView.liTemplate([{"hawkerid":"99999"}, {"hawkerid":"44444"}]));
    };

    this.render = function() {
        this.el.html(StadiumView.template(stadium));
        return this;
    };

    this.initialize();

}

StadiumView.template = Handlebars.compile($("#stadium-tpl").html());
StadiumView.liTemplate = Handlebars.compile($("#hawker-li-tpl").html());