$("#navbar").prepend(`
        <nav class="navbar navbar-expand-lg navbar-light bg-dark">
            <div style="width: 1024px;" class="container-fluid">
                <a href="kinopoisk.html">
                    <img style="height: 45px;" src="image/kinoico.svg" alt="nope">
                </a>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    </ul>
                </div>
                <a class="m-3" href="https://discord.gg/ztzZmKFX">
                    <img style="height: 33px;" src="image/discord.svg" alt="nope" id="discord">
                </a>
            </div>
        </nav>
    `)

$("#flooter").prepend(`
        <section class="feedback">
            <div class="container">
                <div class="col-sm-12 flooter-text">
                    <spam class="flooter-text-year">© 2023 — 2024, Kinopoisk</spam>
                    <spam class="flooter-text-company">Проект компании <spam class="flooter-text-company-name">Artem?</spam></spam>
                </div>
            </div>
        </section>

        <section class="logo-image">
            <div class="container">
                <div class="col-sm-12" align="center">
                    <a href="https://vk.com/id484095375" class="title-image">
                        <img src="image/vk.svg" class="title-image" alt="nope" id="vk">
                    </a>
                    <a href="https://t.me/xxartyomxx" class="title-image">
                        <img src="image/telegram.svg" class="title-image" alt="nope" id="telegram">
                    </a>
                    <a href="https://youtube.com/@supersadman2022?si=Tk2DqeLEnzfyADe0" class="title-image">
                        <img src="image/youtube.svg" class="title-image" alt="nope" id="youtube">
                    </a>
                    <a href="https://steamcommunity.com/profiles/76561198970098920/" class="title-image">
                        <img src="image/steam.svg" class="title-image" alt="nope" id="steam">
                    </a>
                </div>
            </div>
        </section>
`);