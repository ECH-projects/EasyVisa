<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"/>


<script>

    import { base } from '$app/paths';
    import './page.scss';
    import emblaCarouselSvelte from 'embla-carousel-svelte';


    const universities = [
        "uoow", "hus", "eth", "mit",
    ];


    emblaCarouselSvelte.globalOptions = { loop: true };


    let emblaAPI;
    let emblaAPI_1;
    let emblaAPI_2;

    const carouselOptions = {
        align: 'start',
    }

    function onInitCarousel(event) {
        emblaAPI = event.detail;
    }


    function onInitCarouselNews(event) {
        emblaAPI_1 = event.detail;
    }


    function onInitCarouselCountries(event) {
        emblaAPI_2 = event.detail;
    }


    function scrollPrev() {
        if (emblaAPI) emblaAPI.scrollPrev();
    }


    function scrollNext() {
        if (emblaAPI) emblaAPI.scrollNext();
    }


    let sideMenuLeft = "100%";
    function showSideMenu(left) {
        sideMenuLeft = left;
    }

</script>


<div class="container">

    <div class="background-animation"></div>

    <div class="header">
        <div class="header-menu">
            <div class="header-box">
                <img src="{base}/icons/logo.svg" alt="logo">
                <h1>EasyVisa</h1>
            </div>
            <div class="header-box">
                <div class="header-menu-button">
                    <button type="button" aria-label="Open menu">
                        <i class="fa-solid fa-bars"></i>
                    </button>
                </div>
                <ul>
                    <li>
                        <a class="active" href="{base}/">Главная страница</a>
                    </li>
                    <li>
                        <a href="{base}/countries">Страны</a>
                    </li>
                    <li>
                        <a href="{base}/universities">Университеты</a>
                    </li>
                    <li>
                        <a href="{base}/information">Новости</a>
                    </li>
                    <li>
                        <a href="{base}/scholarship">Стипендии</a>
                    </li>
                    <li>
                        <a href="{base}/camp">Летняя школа</a>
                    </li>
                    <li>
                        <a href="{base}/about">О нас</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="header-content">
            <div class="hc-box">
                <h1>Твоя Мечта Учиться за Границей Начинается Здесь</h1>
                <p>Мы открываем двери в лучшие университеты мира и берём на себя весь путь — от поступления до визы</p>
                <div class="hc-button">
                    <button>Подробнее</button>
                </div>
            </div>
            <div class="hc-box">
                <img src="{base}/images/01.png" alt="">
            </div>
        </div>
        <div class="header-footer">
            <div class="hf-track">
                {#each Array(4) as _}
                    {#each universities as uni, inx}
                        <div class="hft-item">
                            <img src="{base}/icons/{uni}.svg" alt="uni{inx}">
                        </div>
                    {/each}
                {/each}
            </div>
        </div>
    </div>
    
    <div class="content">
        <div class="cheader">
            <h1>СТРАНЫ</h1>
        </div>
        <div class="carousel">
            <div class="embla" use:emblaCarouselSvelte={carouselOptions} onemblaInit={onInitCarouselNews}>
                <div class="embla__container">
                    <div class="embla__slide">
                        <a href="{base}/">
                            <div class="flash"></div>
                            <div class="e-poster">
                                <img src="{base}/images/countries/ireland/card.jpg" alt="">
                            </div>
                            <div class="e-info">
                                <h3>Ирланд</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing 
                                    elit, sed do eiusmod tempor incididunt ut labore 
                                    et dolore magna aliqua...
                                </p>
                            </div>
                        </a>
                    </div>
                    <div class="embla__slide">
                        <a href="{base}/">
                            <div class="flash"></div>
                            <div class="e-poster">
                                <img src="{base}/images/countries/australia/card.jpg" alt="">
                            </div>
                            <div class="e-info">
                                <h3>Австралия</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing 
                                    elit, sed do eiusmod tempor incididunt ut labore 
                                    et dolore magna aliqua...
                                </p>
                            </div>
                        </a>
                    </div>
                    <div class="embla__slide">
                        <a href="{base}/">
                            <div class="flash"></div>
                            <div class="e-poster">
                                <img src="{base}/images/countries/canada/card.jpg" alt="">
                            </div>
                            <div class="e-info">
                                <h3>Канада</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing 
                                    elit, sed do eiusmod tempor incididunt ut labore 
                                    et dolore magna aliqua...
                                </p>
                            </div>
                        </a>
                    </div>
                    <div class="embla__slide">
                        <a href="{base}/">
                            <div class="flash"></div>
                            <div class="e-poster">
                                <img src="{base}/images/countries/great_britain/card.jpg" alt="">
                            </div>
                            <div class="e-info">
                                <h3>Великий Британ</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing 
                                    elit, sed do eiusmod tempor incididunt ut labore 
                                    et dolore magna aliqua...
                                </p>
                            </div>
                        </a>
                    </div>
                    <div class="embla__slide">
                        <a href="{base}/">
                            <div class="flash"></div>
                            <div class="e-poster">
                                <img src="{base}/images/countries/philippines/card.jpg" alt="">
                            </div>
                            <div class="e-info">
                                <h3>Филиппины</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing 
                                    elit, sed do eiusmod tempor incididunt ut labore 
                                    et dolore magna aliqua...
                                </p>
                            </div>
                        </a>
                    </div>
                    <div class="embla__slide">
                        <a href="{base}/">
                            <div class="flash"></div>
                            <div class="e-poster">
                                <img src="{base}/images/countries/usa/card.jpg" alt="">
                            </div>
                            <div class="e-info">
                                <h3>США</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing 
                                    elit, sed do eiusmod tempor incididunt ut labore 
                                    et dolore magna aliqua...
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="marquee-container">
        <div class="marquee-content">
            {#each Array(4) as _}
                {#each universities as uni, inx}
                    <div class="marquee-item">
                        <img src="{base}/icons/{uni}.svg" alt="uni{inx}">
                    </div>
                {/each}
            {/each}
        </div>
    </div>

    <div class="content">
        <div class="cheader">
            <h1>УНИВЕРСИТЕТЫ</h1>
        </div>
        <div class="carousel">
            <div class="embla" use:emblaCarouselSvelte={carouselOptions} onemblaInit={onInitCarouselNews}>
                <div class="embla__container">
                    <div class="embla__slide">
                        <a href="{base}/">
                            <div class="flash"></div>
                            <div class="e-poster">
                                <img src="{base}/images/universities/yale.jpg" alt="">
                            </div>
                            <div class="e-info">
                                <p>Some text here</p>
                            </div>
                        </a>
                    </div>
                    <div class="embla__slide">
                        <a href="{base}/">
                            <div class="flash"></div>
                            <div class="e-poster">
                                <img src="{base}/images/universities/mit.jpg" alt="">
                            </div>
                            <div class="e-info">
                                <p>Как обучаться в КНР со стипендией</p>
                            </div>
                        </a>
                    </div>
                    <div class="embla__slide">
                        <a href="{base}/">
                            <div class="flash"></div>
                            <div class="e-poster">
                                <img src="{base}/images/universities/yale.jpg" alt="">
                            </div>
                            <div class="e-info">
                                <p>Как обучаться в КНР со стипендией</p>
                            </div>
                        </a>
                    </div>
                    <div class="embla__slide">
                        <a href="{base}/">
                            <div class="flash"></div>
                            <div class="e-poster">
                                <img src="{base}/images/universities/mit.jpg" alt="">
                            </div>
                            <div class="e-info">
                                <p>Как обучаться в КНР со стипендией</p>
                            </div>
                        </a>
                    </div>
                    <div class="embla__slide">
                        <a href="{base}/">
                            <div class="flash"></div>
                            <div class="e-poster">
                                <img src="{base}/images/universities/yale.jpg" alt="">
                            </div>
                            <div class="e-info">
                                <p>Как обучаться в КНР со стипендией</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="cfooter">
            <a href="{base}/">Посмотреть все</a>
        </div>
    </div>

    <div class="marquee-container rev">
        <div class="marquee-content">
            {#each Array(4) as _}
                {#each universities as uni, inx}
                    <div class="marquee-item">
                        <img src="{base}/icons/{uni}.svg" alt="uni{inx}">
                    </div>
                {/each}
            {/each}
        </div>
    </div>

    <div class="content">
        <div class="cheader">
            <h1>ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ</h1>
        </div>
        <div class="carousel">
            <div class="embla" use:emblaCarouselSvelte={carouselOptions} onemblaInit={onInitCarouselNews}>
                <div class="embla__container">
                    <div class="embla__slide">
                        <a href="{base}/">
                            <div class="flash"></div>
                            <div class="e-poster">
                                <img src="{base}/images/universities/yale.jpg" alt="">
                            </div>
                            <div class="e-info">
                                <p>Some text here</p>
                            </div>
                        </a>
                    </div>
                    <div class="embla__slide">
                        <a href="{base}/">
                            <div class="flash"></div>
                            <div class="e-poster">
                                <img src="{base}/images/universities/mit.jpg" alt="">
                            </div>
                            <div class="e-info">
                                <p>Как обучаться в КНР со стипендией</p>
                            </div>
                        </a>
                    </div>
                    <div class="embla__slide">
                        <a href="{base}/">
                            <div class="flash"></div>
                            <div class="e-poster">
                                <img src="{base}/images/universities/yale.jpg" alt="">
                            </div>
                            <div class="e-info">
                                <p>Как обучаться в КНР со стипендией</p>
                            </div>
                        </a>
                    </div>
                    <div class="embla__slide">
                        <a href="{base}/">
                            <div class="flash"></div>
                            <div class="e-poster">
                                <img src="{base}/images/universities/mit.jpg" alt="">
                            </div>
                            <div class="e-info">
                                <p>Как обучаться в КНР со стипендией</p>
                            </div>
                        </a>
                    </div>
                    <div class="embla__slide">
                        <a href="{base}/">
                            <div class="flash"></div>
                            <div class="e-poster">
                                <img src="{base}/images/universities/yale.jpg" alt="">
                            </div>
                            <div class="e-info">
                                <p>Как обучаться в КНР со стипендией</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <div class="footer">
        <div class="f-info">
            <div class="f-countries">
                <a href="{base}/">Австралия</a>
                <a href="{base}/">Канада</a>
                <a href="{base}/">Великий Британ</a>
                <a href="{base}/">Ирланд</a>
                <a href="{base}/">Филиппины</a>
                <a href="{base}/">Сингапур</a>
                <a href="{base}/">США</a>
            </div>
        </div>
        <div class="f-info">
            <h3>Социалные сети</h3>
            <div class="social">
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-square-facebook"></i>
                <i class="fa-brands fa-telegram"></i>
                <i class="fa-brands fa-square-x-twitter"></i>
                <i class="fa-brands fa-youtube"></i>
            </div>
        </div>
        <div class="copyright">
            <p>©2025 TOP EDUCATION ООО. Все права защищены</p>
        </div>
    </div>

    <div class="side-menu" style="left: {sideMenuLeft}">
        <ul>
            <li>
                <button onclick={() => showSideMenu('100%')}>
                    <p>Назад</p>
                    <i class="fa-solid fa-xmark"></i>
                </button>
            </li>
            <li>
                <a href="{base}/countries">Страны</a>
            </li>
            <li>
                <a href="{base}/universities">Университеты</a>
            </li>
            <li>
                <a href="{base}/information">Новости</a>
            </li>
            <li>
                <a href="{base}/scholarship">Стипендии</a>
            </li>
            <li>
                <a href="{base}/camp">Летняя школа</a>
            </li>
        </ul>
    </div>

</div>