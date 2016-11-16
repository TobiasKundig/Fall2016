/**
 * Created by toby on 11/14/16.
 */

console.log('Working in 1');


/*var reader = new FileReader();

reader.onload = function(e) {
    //var text = reader.result;
    //var lines = text.split('<SEP>');
    var display = document.getElementById('result');
    display.innerText=reader.result;
    //console.log(lines + " the file" + text);
};


reader.readAsText(files);

});*/

self.addEventListener('message', function(){
    console.log('Got the message');

            var txt = '';
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function(){
                if(xmlhttp.status == 200 && xmlhttp.readyState == 4){
                    txt = xmlhttp.responseText;
                    var line = txt.split('<SEP>');
                    var array = [];

                    for (var a = 2; a <line.length; a+=3){
                        array.push({'TrackID': line[a], 'Artist': line[a+1]});
                    }
                    postMessage(array);
                }
            };
            xmlhttp.open("GET","unique_artists.txt",true);
            xmlhttp.send();


    /*function readerFile(getFile){
        var reader = new FileReader();
        reader.onload = function(event){
            contents = event.target.result;
            lines = contents.split("<SEP>", 3);
            console.log('Working in 2' + reader.result);
            self.postMessage(lines);
        };
        reader.readAsText(getFile);
    }

    readerFile(e);*/
});
