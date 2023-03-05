const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt to select a media stream, pass to video element, then play

async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();

        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        //Catch Error Here
        console.log('whoopś, error here:', error);
    }
}

button.addEventListener('click', async () => {
    //Disable Buttton
    button.disabled = true;

    //Start Picture in Picture
    await videoElement.requestPictureInPicture();

    //Reset Button
    button.disabled = false;
});

//On Load
selectMediaStream();