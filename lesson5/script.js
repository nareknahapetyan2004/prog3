function main() {
    var socket = io.connect('http://localhost:8080');
    var chatDiv = document.getElementById('chat');
    var input = document.getElementById('message');
    var button = document.getElementById('submit');
    var jnjel = document.getElementById('delete');

    function handleSubmit(evt) {
        var val = input.value;
        if (val != "") {
            socket.emit("send message", val);
        }
    }

    button.onclick = handleSubmit;
    jnjel.onclick = deleteTags;

    function handleMessage(msg) {
        var p = document.createElement('p');
        p.innerText = msg;
        chatDiv.appendChild(p);
        input.value = "";
    }

    socket.on('display message', handleMessage);
    socket.on("jnjeq teger@", deleteTags);

    function deleteTags() {
        var elements = document.getElementsByTagName("p");

        for (var i in elements) {
            elements[0].remove();

            if (elements.length == 0) {
                break;
            }
        }
    };
    window.onkeydown = keySubmit;


    function keySubmit(evt) {
        if (evt.keyCode == 13) {
            var val = input.value;
            if (val != "") {
                socket.emit("send message", val);
            }
        }
    }
}


    // main closing bracket

    window.onload = main;