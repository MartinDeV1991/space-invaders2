class AudioControl {
    constructor() {
        this.newGame = document.getElementById('newgame');
        this.boom1 = document.getElementById('boom1');
        this.boom2 = document.getElementById('boom2');
        this.boom3 = document.getElementById('boom3');
        this.boom4 = document.getElementById('boom4');
        this.slide = document.getElementById('slide');

        this.win = document.getElementById('win');
        this.lose = document.getElementById('lose');
        this.scream = document.getElementById('scream');

        this.newGame.volume = 0.5;
        this.win.volume = 0.8;
        this.lose.volume = 0.8;
        this.scream.volume = 0.2;
        this.boom1.volume = 0.9;
        this.boom2.volume = 0.9;
        this.boom3.volume = 0.9;
        this.boom4.volume = 0.9;

        this.boomSounds = [this.boom1, this.boom2, this.boom3, this.boom4];
    }
    play(audio) {
        audio.currentTime = 0;
        audio.play();
    }
}