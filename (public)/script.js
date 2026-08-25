const playBtn = document.getElementById('playBtn');
const gameContainer = document.getElementById('game-container');
const header = document.getElementById('header');

playBtn.addEventListener('click', async() => {
    header.innerHTML = '';
    gameContainer.innerHTML = `
      <div class="iframe-wrapper">
        <iframe src="./game/Space Battle/index.html" class="game-iframe"></iframe>
        <button onclick="window.location.href='index.html'"class="go-to-web"><svg class="close-btn" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.707092 0.707153L14.7071 14.7072M14.7071 0.707153L0.707092 14.7072" stroke="white" stroke-width="2"/>
</svg>Go to web</button>
      </div>
    `;

    gameContainer.classList.add('game-active');
    
     try {
        if (document.documentElement.requestFullscreen) {
            await document.documentElement.requestFullscreen();
            if (screen.orientation && screen.orientation.lock) {
                await screen.orientation.lock('landscape');
            }
        }
    } catch (error) {
        console.log("Automatic rotation was not permited by browser, applying CSS rotation.");
    }
}

);


