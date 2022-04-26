fetch('product-list.json')
    .then(response => response.json())
    .then(data => {
        let menuItems = data.responses[0][0].params.userCategories

        menuItems.map((item) => {

            $('#menuItems').append(`
            <li class="nav-item menu-item ">
                <a href="#" class="nav-link active" aria-current="page">` + item + `</a>
            </li>
            `)
        })

        $(".nav-link").on("click", (e) => {
            changeProductList(e.target.textContent, data.responses[0][0].params.recommendedProducts)
        })

        changeProductList(data.responses[0][0].params.userCategories[0], data.responses[0][0].params.recommendedProducts)

    })


function getElementByXpath(path) {
    return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

function changeProductList(header, productList) {
    let clickedMenuItem = getElementByXpath('//*[text()="' + header + '"]');

    // Find all menu items and clear "active" class
    let allMenuItems = $(".nav-link")
    allMenuItems.removeClass('active')
    // Add "active" class to the last selected menu item.
    clickedMenuItem.classList.add('active')
    $(".product").remove()

    productList[header].map((item) => {
        $('#vento').append(`
                <div class="product">
                    <div class="product-thumb">
                        <img src="${item.image}" alt="" loading=lazy>
                    </div>
                    <div class="product-content">
                        <h2 class="title">${item.name}</h2>
                        <span class="price">${item.priceText}</span>
                        <div class="icon-box">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="#36b458"><path d="M23.808 9.733L21.552 6.6A1.421 1.421 0 0020.4 6h-4.08V4.5c0-.828-.645-1.5-1.44-1.5H1.44C.645 3 0 3.672 0 4.5v12c0 .828.645 1.5 1.44 1.5h1.44c0 1.657 1.29 3 2.88 3 1.59 0 2.88-1.343 2.88-3h5.76c0 1.657 1.29 3 2.88 3 1.59 0 2.88-1.343 2.88-3h1.92c1.06 0 1.92-.895 1.92-2v-5.667c0-.216-.067-.427-.192-.6zM5.76 20c-1.06 0-1.92-.895-1.92-2s.86-2 1.92-2 1.92.895 1.92 2c-.001 1.104-.86 1.999-1.92 2zm11.52 0c-1.06 0-1.92-.895-1.92-2s.86-2 1.92-2 1.92.895 1.92 2c-.001 1.104-.86 1.999-1.92 2zm5.76-9h-6.72V7h4.08c.15 0 .293.075.384.2l2.256 3.133V11z"></path></svg>
                            <span>Ücretsiz Kargo</span>
                        </div>
                        <a class="addtocart" href="#">Sepete Ekle</a>
                    </div>
                </div>
            `)
    })
    try {$('.slider-wrapper').slick("unslick")} catch (e) {}
    $('.slider-wrapper').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: ".product-slider .slider-arrows .pre-arrow",
        nextArrow: ".product-slider .slider-arrows .next-arrow",
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    });

    $(".addtocart").click(function () {
        $(".addtocart-alert").fadeIn(600).delay(3000).fadeOut(500);
    });
    $(".close").click(function () {
        $(".addtocart-alert").hide();
    });
}
  
