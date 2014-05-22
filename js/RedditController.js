myApp.controller('RedditController', ['$scope', function($scope){
    $scope.resultsCount= '';
    $scope.searchTerms='';
    $scope.state = '';
    
    $scope.searchAmas = function(){
        
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
        return xmlHttp.response;
    }
    
    $scope.printLinks = function(){
        var obj = JSON.parse($scope.searchAmas());
        var list='';
        var node = document.getElementById("output");
        node.innerHTML="";
        resultsCount = obj.data.children.length + "Related AMAs";
        
        for(var i =0;i<obj.data.children.length;i++){
            var title = obj.data.children[i].data.title;
            var url = obj.data.children[i].data.url;
            var link = "<a href=\"" + url + "\" target=\"_blank\">" + title + "</a>";
            node.innerHTML += link + "<br/>";

        }
        return list;
    }
    
    
    
    
}]);