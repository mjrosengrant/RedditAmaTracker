myApp.controller('RedditController', ['$scope', function($scope){
    $scope.resultsCount= '';
    $scope.searchTerms='';
    $scope.state = '';
    $scope.searchResults;//JSON object that holds search results
    
    $scope.searchAmas = function(){
        var keywords = $scope.searchTerms;
        var xmlHttp = null;
        var startOfUrl = 'http://www.reddit.com/r/IamA/search.json?q=';
        
        //When placed in the url this limits search terms to specific subreddit and sorts results by relevance
        var endOfUrl = '&sort=relevance&restrict_sr=on';
        
        keywords = keywords.trim(); //Removes leading and trailing spaces,
        keywords = keywords.replace(/ +(?= )/g,''); //Removes consecutive white spaces
        keywords = keywords.split(' ').join('+'); //replaces spaces in SearchTerm with + signs

        var theUrl = startOfUrl+keywords+endOfUrl;
        xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", theUrl, false);
        
        xmlHttp.send(null);
        return xmlHttp.responseText;
    }
    
    $scope.setSearchResults = function (){
        $scope.searchResults = JSON.parse($scope.searchAmas());
    }
    
    //Makes the link that the main HTML page prints in Search Results.
    //Current format is "03/17/2014- Title of AMA (Upvote Count)"
    $scope.searchQueryLinkText = function (index){
        $scope.state= "searchQueryStarted";
        var utc   = $scope.searchResults.data.children[index].data.created_utc;
        var title = $scope.searchResults.data.children[index].data.title;
        var score = $scope.searchResults.data.children[index].data.score;
        
        var date = new Date(utc*1000);
        date = date.getMonth() + "/" + date.getDay() + "/" + date.getFullYear();
        $scope.state = utc;
        
        return date +"- " + title + " (" + score + ")";
    }
    
}]);
