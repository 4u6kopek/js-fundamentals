function gramophone(bandName, albumName, songName) {
    let songDuration = Number((albumName.length * bandName.length) * songName.length / 2)
    let timesRotated = Number(songDuration / 2.5);

    console.log(`The plate was rotated ${Math.ceil(timesRotated)} times.`);
}
gramophone("Black Sabbath","Paranoid","War Pigs");
