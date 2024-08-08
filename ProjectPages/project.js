document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('android-download').addEventListener('click', function() {
        console.log('Android download clicked');
    });

    document.getElementById('windows-download').addEventListener('click', function() {
        console.log('Windows download clicked');
    });

    document.getElementById('webgl-play').addEventListener('click', function() {
        console.log('Play WebGL clicked');
    });
});
