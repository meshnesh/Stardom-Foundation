$(document).foundation()
$('.parallax-window').parallax({
    imageSrc: '/path/to/image.jpg'
});

function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}
