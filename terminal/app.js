
    consoleText(['cat hello.txt <br> Hello world!!','ls <br> project hello.txt', 'ls project <br> <a href="#">Monitrix<a>', 'clear', ''], 'text', ['#FF0034']);

    function consoleText(words, id, colors) {
        if (colors === undefined) colors = ['#FF0034'];
        var visible = true;
        var con = document.getElementById('console');
        var letterCount = 1;
        var x = 0;
        var waiting = false;
        var target = document.getElementById(id)
        target.setAttribute('style', 'color:' + colors[0])

        window.setInterval(function () {
            if (waiting === false) {
                console.log("AssS");
                target.innerHTML = words[x].substring(0, letterCount)
                letterCount += 1;
                let temp = words[x].substring(letterCount, letterCount+4);
                if(temp == '<br>')
                {
                   letterCount = words[x].length;
                }
                if (letterCount === words[x].length + 1) {

                    waiting = true;
                }
            } else if (words[x] == 'clear') {
                var myNode = document.getElementById("main");
                $('#main').find('span').remove();
                $('#main').find('br').remove();
                words[x] = "done"
            } else if (waiting = true) {
                if (x >= words.length - 1)
                    return;
                x++;
                console.log(words[x - 1]);
                target = document.createElement('span');
                arrow = document.createElement('span');
                let maindiv = document.getElementById('main');
                let consolediv = document.getElementById('console');
                if (words[x - 1] != 'done') {
                    let b = document.createElement('br');
                    maindiv.insertBefore(b, consolediv);
                }
                maindiv.insertBefore(arrow, consolediv);
                maindiv.insertBefore(target, consolediv);
                let root  = 'aryabharat@root';
                root = root + '> '; 
                arrow.innerHTML = root;
                // maindiv.appendChild(arrow);
                // maindiv.appendChild(target);
                target.setAttribute('style', 'color:' + colors[0]);
                letterCount = 0;
                waiting = false;
            }
            sleep(300);
        }, 80)


        /*
         * cursor hide and un_hide
         */
        window.setInterval(function () {
            if (visible === true) {
                con.className = 'console-underscore hidden'
                visible = false;

            } else {
                con.className = 'console-underscore'

                visible = true;
            }
        }, 200)
    }

    function sleep(milliseconds) {
        var start = new Date().getTime();
        for (var i = 0; i < 1e7; i++) {
            if ((new Date().getTime() - start) > milliseconds) {
                break;
            }
        }
    }