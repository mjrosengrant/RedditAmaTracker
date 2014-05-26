myApp.controller('RedditController', ['$scope', function($scope){
    $scope.resultsCount= '';
    $scope.searchTerms='';
    $scope.state = '';
    $scope.searchResults;//JSON object that holds search results
    
    $scope.searchAmas = function(){
        //Example URL: http://www.reddit.com/r/IAmA/comments/1ri1y9/i_am_richard_dawkins_scientist_researcher_author/
        
        var keywords = $scope.searchTerms;
        $scope.searchTerms = '';
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
    
}]);
