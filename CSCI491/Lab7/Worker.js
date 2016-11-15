/**
 * Created by toby on 11/14/16.
 */

console.log('Working in 1');
function readerFile(file){
    var reader = new FileReader();
    reader.onload = function(event){
        contents = event.target.result;
        lines = contents.split("<SEP>", 3);
        console.log('Working in 2' + lines);
        postMessage(lines);
    };
    reader.readAsDataURL(file);
}

self.addEventListener('message', function(e){
    console.log('Got the message' + e);
    readerFile(e);
});
