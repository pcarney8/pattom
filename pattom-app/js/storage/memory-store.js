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
            {"id": 1, "stadiumName": "Nationals-Park", "prettyName": "Nationals Park", "city":"Washington, DC", "officePhone":"212-999-8887", "email":"nats@nationals.com", "hawkers":[{"hawkerid":"#1234"}, {"hawkerid":"#235325"}]},
            {"id": 2, "stadiumName": "Lane-Stadium", "prettyName": "Lane Stadium", "city":"Blacksburg, VA", "officePhone":"212-999-8887", "email":"hokie@vt.edu", "hawkers":[{"hawkerid":"#1234"}, {"hawkerid":"#235325"}]},
			{"id": 3, "stadiumName": "Byrd-Stadium", "prettyName": "Byrd Stadium", "city":"College Park, MD", "officePhone":"212-999-8887", "email":"terps@umd.edu", "hawkers":[{"hawkerid":"#1234"}, {"hawkerid":"#235325"}]},
        ];
	
    callLater(successCallback);

}