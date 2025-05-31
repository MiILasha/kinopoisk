let d = new Date()
$("#flooter").prepend(`
        <section class="feedback">
            <div class="container">
                <div class="col-sm-12 flooter-text">
                    <spam class="flooter-text-year">${d.getFullYear()}, Kinopoisk</spam>
                    <spam class="flooter-text-company">Проек компании  <spam class="flooter-text-company-name">Artem?</spam></spam>
                </div>
            </div>
        </section>

        <section class="logo-image">
            <div class="container">
                <div class="col-sm-12" align="center">
                    <a href="https://vk.com/id484095375" class="title-image">
                        <img src="../static/image/vk.svg" class="title-image" alt="nope" id="vk">
                    </a>
                    <a href="https://t.me/xxartyomxx" class="title-image">
                        <img src="../static/image/telegram.svg" class="title-image" alt="nope" id="telegram">
                    </a>
                    <a href="https://youtube.com/@supersadman2022?si=Tk2DqeLEnzfyADe0" class="title-image">
                        <img src="../static/image/youtube.svg" class="title-image" alt="nope" id="youtube">
                    </a>
                    <a href="https://steamcommunity.com/profiles/76561198970098920/" class="title-image">
                        <img src="../static/image/steam.svg" class="title-image" alt="nope" id="steam">
                    </a>
                </div>
            </div>
        </section>
`);