var MemoryStore = function(successCallback, errorCallback) {

    this.findByName = function(searchKey, callback) {
        var stadiums = this.stadiums.filter(function(element) {
            var prettyName = element.stadiumName;
            return prettyName.toLowerCase().indexOf(searchKey.toLowerCase()) > -1;
        });
        callLater(callback, stadiums);
    }

    this.findById = function(id, callback) {
        var stadiums = this.stadiums;
        var stadium = null;
        var l = stadiums.length;
        for (var i=0; i < l; i++) {
            if (stadiums[i].id === id) {
                stadium = stadiums[i];
                break;
            }
        }
        callLater(callback, stadium);
    }
	
	this.findByHawkerId = function(id, callback) {
	    var hawkers = this.hawkers;
        var hawker = null;
        var l = hawkers.length;
        for (var i=0; i < l; i++) {
            if (hawkers[i].id === id) {
                hawker = hawkers[i];
                break;
            }
        }
        callLater(callback, stadium);
	}

    // Used to simulate async calls. This is done to provide a consistent interface with stores (like WebSqlStore)
    // that use async data access APIs
    var callLater = function(callback, data) {
        if (callback) {
            setTimeout(function() {
                callback(data);
            });
        }
    }

    this.stadiums = [
            {"id": 1, "stadiumName": "Nationals-Park", "prettyName": "Nationals Park", "city":"Washington, DC", "officePhone":"212-999-8887", "email":"nats@nationals.com", "hawkers":[{"hawkerid":99999}, {"hawkerid":2235325}]},
            {"id": 2, "stadiumName": "Lane-Stadium", "prettyName": "Lane Stadium", "city":"Blacksburg, VA", "officePhone":"212-999-8887", "email":"hokie@vt.edu", "hawkers":[{"hawkerid":555555}, {"hawkerid":2135325}]},
			{"id": 3, "stadiumName": "Byrd-Stadium", "prettyName": "Byrd Stadium", "city":"College Park, MD", "officePhone":"212-999-8887", "email":"terps@umd.edu", "hawkers":[{"hawkerid":444444}, {"hawkerid":2353253}]},
        ];
	
	this.hawkers = [
			{"id":99999, "items":[{"item":"water"}, {"item":"flavored water"}]},
			{"id":2235325, "items":[{"item":"soda"}, {"item":"soda water"}]},
			{"id":555555, "items":[{"item":"hot dogs"}, {"item":"sausages"}]},
			{"id":2135325, "items":[{"item":"beer"}, {"item":"wine"}]},
			{"id":444444, "items":[{"item":"chips"}, {"item":"popcorn"}]},
			{"id":2353253, "items":[{"item":"hot pockets"}, {"item":"pizza rolls"}]}
		];
		
    callLater(successCallback);

}