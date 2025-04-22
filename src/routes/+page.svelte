<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"/>


<script>

    import emblaCarouselSvelte from "embla-carousel-svelte";
    import './page.scss';

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


    <div class="header">
        <div class="wrapper">
            <a href="/" class="logo">
                <h1>TOP</h1>
                <h3>Education</h3>
            </a>
            <div class="menu">
                <ul>
                    <li>
                        <a href="/countries">Страны</a>
                    </li>
                    <li>
                        <a href="/universities">Университеты</a>
                    </li>
                    <li>
                        <a href="/information">Новости</a>
                    </li>
                    <li>
                        <a href="/scholarship">Стипендии</a>
                    </li>
                    <li>
                        <a href="/camp">Летняя школа</a>
                    </li>
                </ul>
            </div>
            <div class="menu-small">
                <button aria-label="Toggle menu" onclick={() => showSideMenu('0%')}>
                    <i class="fa-solid fa-bars"></i>
                </button>
            </div>
        </div>
        <div class="carousel">
            <div class="embla" use:emblaCarouselSvelte={carouselOptions} onemblaInit={onInitCarousel}>
                <div class="embla__container">
                  <div class="embla__slide">
                    <img src="/images/banner-1.jpg" alt="" srcset="">
                  </div>
                  <div class="embla__slide">
                    <img src="/images/banner-2.jpg" alt="" srcset="">
                  </div>
                  <div class="embla__slide">
                    <img src="/images/banner-3.jpg" alt="" srcset="">
                  </div>
                </div>
    
                <div class="embla__control">
                    <button type="button" id="btn-banner-prev" aria-label="Previous slide" onclick={scrollPrev}>
                        <i class="fa-solid fa-chevron-left"></i>
                    </button>
                    <button type="button" id="btn-banner-next" aria-label="Next slide" onclick={scrollNext}>
                        <i class="fa-solid fa-chevron-right"></i>
                    </button>
                </div>
    
                <div class="embla__readmore">
                    <button>Подробнее</button>
                </div>
            </div>
        </div>
    </div>
    
    
    <div class="content">
        <div class="cheader">
            <h1>НОВОСТИ</h1>
        </div>
        <div class="carousel">
            <div class="embla" use:emblaCarouselSvelte={carouselOptions} onemblaInit={onInitCarouselNews}>
                <div class="embla__container">
                    <div class="embla__slide">
                        <a href="/">
                            <div class="flash"></div>
                            <div class="e-poster">
                                <img src="/images/news/1.jpg" alt="">
                            </div>
                            <div class="e-info">
                                <p>Some text here</p>
                            </div>
                        </a>
                    </div>
                    <div class="embla__slide">
                        <a href="/">
                            <div class="flash"></div>
                            <div class="e-poster">
                                <img src="/images/news/1.jpg" alt="">
                            </div>
                            <div class="e-info">
                                <p>Как обучаться в КНР со стипендией</p>
                            </div>
                        </a>
                    </div>
                    <div class="embla__slide">
                        <a href="/">
                            <div class="flash"></div>
                            <div class="e-poster">
                                <img src="/images/news/1.jpg" alt="">
                            </div>
                            <div class="e-info">
                                <p>Как обучаться в КНР со стипендией</p>
                            </div>
                        </a>
                    </div>
                    <div class="embla__slide">
                        <a href="/">
                            <div class="flash"></div>
                            <div class="e-poster">
                                <img src="/images/news/1.jpg" alt="">
                            </div>
                            <div class="e-info">
                                <p>Как обучаться в КНР со стипендией</p>
                            </div>
                        </a>
                    </div>
                    <div class="embla__slide">
                        <a href="/">
                            <div class="flash"></div>
                            <div class="e-poster">
                                <img src="/images/news/1.jpg" alt="">
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
            <a href="/">Посмотреть все</a>
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
                        <a href="/">
                            <div class="flash"></div>
                            <div class="e-poster">
                                <img src="/images/countries/ireland/card.jpg" alt="">
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
                        <a href="/">
                            <div class="flash"></div>
                            <div class="e-poster">
                                <img src="/images/countries/australia/card.jpg" alt="">
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
                        <a href="/">
                            <div class="flash"></div>
                            <div class="e-poster">
                                <img src="/images/countries/canada/card.jpg" alt="">
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
                        <a href="/">
                            <div class="flash"></div>
                            <div class="e-poster">
                                <img src="/images/countries/great_britain/card.jpg" alt="">
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
                        <a href="/">
                            <div class="flash"></div>
                            <div class="e-poster">
                                <img src="/images/countries/philippines/card.jpg" alt="">
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
                        <a href="/">
                            <div class="flash"></div>
                            <div class="e-poster">
                                <img src="/images/countries/usa/card.jpg" alt="">
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
    
    <div class="footer">
        <div class="f-info">
            <div class="f-countries">
                <a href="/">Австралия</a>
                <a href="/">Канада</a>
                <a href="/">Великий Британ</a>
                <a href="/">Ирланд</a>
                <a href="/">Филиппины</a>
                <a href="/">Сингапур</a>
                <a href="/">США</a>
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
                <a href="/countries">Страны</a>
            </li>
            <li>
                <a href="/universities">Университеты</a>
            </li>
            <li>
                <a href="/information">Новости</a>
            </li>
            <li>
                <a href="/scholarship">Стипендии</a>
            </li>
            <li>
                <a href="/camp">Летняя школа</a>
            </li>
        </ul>
    </div>

</div>