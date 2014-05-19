
function httpGet(theUrl)
{
    var xmlHttp = null;
    var baseurl = 'http://www.reddit.com/';
    var amaHome = baseurl + 'iama.json'

    xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false);
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

alert(httpGet('http://www.reddit.com/r/iama.json'))