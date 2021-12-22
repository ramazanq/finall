var
    color = 'black',
    canv = document.getElementById('canvas'),
    ctx = canv.getContext('2d'),
    back_color = document.getElementById('background_color'),
    back_color_canv = 'white',
    back_color_log = false,
    isMouseDown = false,
    coords = [],
    rep = false;

function background_color() {
    if (back_color_log) {
        back_color_log = false;
        back_color.style.backgroundColor = '#C0C0C0';
    }
    else {
        back_color_log = true;
        back_color.style.backgroundColor = '#5c5a5a';
    }

}
function color_black() {
    if (back_color_log) {
        canv.style.backgroundColor = 'black';
        back_color_canv = 'black';
    }
    else { color = 'black'; }
}
function color_yellow() {
    if (back_color_log) {
        canv.style.backgroundColor = 'yellow';
        back_color_canv = 'yellow';
    }
    else { color = 'yellow'; }
}
function color_green() {
    if (back_color_log) {
        canv.style.backgroundColor = 'green';
        back_color_canv = 'green';
    }
    else { color = 'green'; }
}
function color_red() {
    if (back_color_log) {
        canv.style.backgroundColor = 'red';
        back_color_canv = 'red';
    }
    else { color = 'red'; }
}
function color_blue() {
    if (back_color_log) {
        canv.style.backgroundColor = 'blue';
        back_color_canv = 'blue';
    }
    else { color = 'blue'; }
}
function color_orange() {
    if (back_color_log) {
        canv.style.backgroundColor = 'orange';
        back_color_canv = 'orange';
    }
    else { color = 'orange'; }
}
function color_white() {
    if (back_color_log) {
        canv.style.backgroundColor = 'white';
        back_color_canv = 'white';
    }
    else { color = 'white'; }
}

canv.width = window.innerWidth
canv.height = window.innerHeight

canv.addEventListener('mousedown', function () {
    isMouseDown = true;
});

canv.addEventListener('mouseup', function () {
    isMouseDown = false;
    ctx.beginPath();
    coords.push('mouseup');
});

ctx.lineWidth = 10;
canv.addEventListener('mousemove', function (e) {
    canv.style.backgroundColor = back_color_canv;
    if (isMouseDown && !rep) {
        ctx.strokeStyle = color;
        ctx.fillStyle = color;
        coords.push([e.clientX, e.clientY, color])
        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(e.clientX, e.clientY, 5, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY);
    }
});
function save() {
    localStorage.setItem('coords', JSON.stringify(coords));
}

function clear() {
    ctx.fillStyle = back_color_canv;
    ctx.fillRect(0, 0, canv.width, canv.height);

    ctx.beginPath();
    ctx.fillStyle = color;
}
ctx.lineWidth = 10;
function replay() {
    var
        timer = setInterval(function () {
            if (!coords.length) {
                rep = false;
                clearInterval(timer);
                ctx.beginPath();
                return;
            } else {
                rep = true;
            }

            var
                crd = coords.shift(),
                e = {
                    clientX: crd["0"],
                    clientY: crd["1"]
                };
            ctx.strokeStyle = crd["2"];
            ctx.fillStyle = crd["2"];
            ctx.lineTo(e.clientX, e.clientY);
            ctx.stroke();

            ctx.beginPath();
            ctx.arc(e.clientX, e.clientY, 5, 0, Math.PI * 2);
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo(e.clientX, e.clientY);

        }, 25);
}

document.addEventListener('keydown', function (e) {

    if (e.keyCode == 83) {
        save();
        console.log('saved')
    }

    if (e.keyCode == 82) {
        coords = JSON.parse(localStorage.getItem('coords'));

        clear();
        replay();
        console.log('replay ...')
    }

    if (e.keyCode == 67) {
        clear();
        console.log('cleared')
    }

});
// navigator
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li')


    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        navLinks.forEach((link, index) => {
            link.style.animation = `navLinkFade 0.5s ease forwards $(index)s`;
        })
        burger.classList.toggle('toggle')
    })
}
navSlide();