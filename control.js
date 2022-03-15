let rain_sound_file = new Audio('rain_sound.wav');
let neon_sound_file = new Audio('neon_sound.wav');

rain_sound_file.addEventListener('timeupdate', () => {
    var buffer = .44;
    if(rain_sound_file.currentTime > rain_sound_file.duration - buffer) {
        rain_sound_file.currentTime = 0;
        rain_sound_file.play();
    }
});

neon_sound_file.addEventListener('timeupdate', () => {
    var buffer = .44;
    if(neon_sound_file.currentTime > neon_sound_file.duration - buffer) {
        neon_sound_file.currentTime = 1;
        neon_sound_file.play();
    }
});

rain_sound_file.play();
neon_sound_file.play();