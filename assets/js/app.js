let body = $("body");

// loader
function loader() {
    $("#loader").show();
    body.addClass("loading");
    setTimeout(() => {
        $("#loader").fadeOut("slow");
    }, 900);
    setTimeout(() => {
        body.removeClass("loading");
        body.removeClass("h-hide");
    }, 1000);
};
new Typed('.loading_text_change', {
    strings: $(".loading_text_change").attr('data-typed-items').split(','),
    loop: true,
    typeSpeed: 50,
    backSpeed: 20,
    smartBackspace: true,
    backDelay: 1000,
});



// Tap Sound
let tapSound = new Audio("assets/sounds/Tap.mp3");

function TapSound() {
    tapSound.currentTime = 0;
    tapSound.play();

}
$("a, button").click(function(e) {
    TapSound();
});



// Right Click Validation
document.addEventListener("contextmenu", function(event) {
    event.preventDefault();
    TapSound();
}, false);



// Aos Animation
$(document).ready(function() {
    AOS.init({
        once: true,
    });
});



// Cursor
let cursor = document.getElementById("cursor");
document.addEventListener("mousemove", (e) => {
    let x = e.pageX;
    let y = e.pageY;
    cursor.style.top = y - 50 + "px";
    cursor.style.left = x - 50 + "px";
});



// Theme Change
let themeModeBtn = $("#themeBtn");
let phoneThemeBtn = $("#phoneThemeBtn");
let themeColorBtn = $("#themeColorBtn");

if (localStorage.length == 0) {
    localStorage.setItem('SideBar', 'Collapsed');
    localStorage.setItem("Theme Mode", "Light");
    localStorage.setItem("Theme Color", "Blue");
}



// Theme Mode
if (localStorage.getItem("Theme Mode") == "Light") {
    body.removeClass("Dark-Mode");
    themeModeBtn.html('<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" class="icon"><path d="M23,11H18.92a6.924,6.924,0,0,0-.429-1.607l3.527-2.044a1,1,0,1,0-1-1.731l-3.53,2.047a7.062,7.062,0,0,0-1.149-1.15l2.046-3.531a1,1,0,0,0-1.731-1L14.607,5.509A6.9,6.9,0,0,0,13,5.08V1a1,1,0,0,0-2,0V5.08a6.9,6.9,0,0,0-1.607.429L7.349,1.982a1,1,0,0,0-1.731,1L7.664,6.515a7.062,7.062,0,0,0-1.149,1.15L2.985,5.618a1,1,0,1,0-1,1.731L5.509,9.393A6.924,6.924,0,0,0,5.08,11H1a1,1,0,0,0,0,2H5.08a6.924,6.924,0,0,0,.429,1.607L1.982,16.651a1,1,0,1,0,1,1.731l3.53-2.047a7.062,7.062,0,0,0,1.149,1.15L5.618,21.016a1,1,0,0,0,1.731,1l2.044-3.527A6.947,6.947,0,0,0,11,18.92V23a1,1,0,0,0,2,0V18.92a6.947,6.947,0,0,0,1.607-.429l2.044,3.527a1,1,0,0,0,1.731-1l-2.046-3.531a7.062,7.062,0,0,0,1.149-1.15l3.53,2.047a1,1,0,1,0,1-1.731l-3.527-2.044A6.924,6.924,0,0,0,18.92,13H23A1,1,0,0,0,23,11ZM12,17c-6.608-.21-6.606-9.791,0-10C18.608,7.21,18.606,16.791,12,17Z"/></svg>');
    phoneThemeBtn.html('<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" class="icon"><path d="M23,11H18.92a6.924,6.924,0,0,0-.429-1.607l3.527-2.044a1,1,0,1,0-1-1.731l-3.53,2.047a7.062,7.062,0,0,0-1.149-1.15l2.046-3.531a1,1,0,0,0-1.731-1L14.607,5.509A6.9,6.9,0,0,0,13,5.08V1a1,1,0,0,0-2,0V5.08a6.9,6.9,0,0,0-1.607.429L7.349,1.982a1,1,0,0,0-1.731,1L7.664,6.515a7.062,7.062,0,0,0-1.149,1.15L2.985,5.618a1,1,0,1,0-1,1.731L5.509,9.393A6.924,6.924,0,0,0,5.08,11H1a1,1,0,0,0,0,2H5.08a6.924,6.924,0,0,0,.429,1.607L1.982,16.651a1,1,0,1,0,1,1.731l3.53-2.047a7.062,7.062,0,0,0,1.149,1.15L5.618,21.016a1,1,0,0,0,1.731,1l2.044-3.527A6.947,6.947,0,0,0,11,18.92V23a1,1,0,0,0,2,0V18.92a6.947,6.947,0,0,0,1.607-.429l2.044,3.527a1,1,0,0,0,1.731-1l-2.046-3.531a7.062,7.062,0,0,0,1.149-1.15l3.53,2.047a1,1,0,1,0,1-1.731l-3.527-2.044A6.924,6.924,0,0,0,18.92,13H23A1,1,0,0,0,23,11ZM12,17c-6.608-.21-6.606-9.791,0-10C18.608,7.21,18.606,16.791,12,17Z"/></svg>');
    $(".Title-Logo").attr("href", "assets/images/small-logo-light.png");

} else if (localStorage.getItem("Theme Mode") == "Dark") {
    body.addClass("Dark-Mode");
    themeModeBtn.html('<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" class="icon" data-name="Layer 1" viewBox="0 0 24 24"><path d="M15,24a12.021,12.021,0,0,1-8.914-3.966,11.9,11.9,0,0,1-3.02-9.309A12.122,12.122,0,0,1,13.085.152a13.061,13.061,0,0,1,5.031.205,2.5,2.5,0,0,1,1.108,4.226c-4.56,4.166-4.164,10.644.807,14.41a2.5,2.5,0,0,1-.7,4.32A13.894,13.894,0,0,1,15,24Zm.076-22a10.793,10.793,0,0,0-1.677.127,10.093,10.093,0,0,0-8.344,8.8A9.927,9.927,0,0,0,7.572,18.7,10.476,10.476,0,0,0,18.664,21.43a.5.5,0,0,0,.139-.857c-5.929-4.478-6.4-12.486-.948-17.449a.459.459,0,0,0,.128-.466.49.49,0,0,0-.356-.361A10.657,10.657,0,0,0,15.076,2Z"/></svg>');
    phoneThemeBtn.html('<svg xmlns="<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" class="icon" data-name="Layer 1" viewBox="0 0 24 24"><path d="M15,24a12.021,12.021,0,0,1-8.914-3.966,11.9,11.9,0,0,1-3.02-9.309A12.122,12.122,0,0,1,13.085.152a13.061,13.061,0,0,1,5.031.205,2.5,2.5,0,0,1,1.108,4.226c-4.56,4.166-4.164,10.644.807,14.41a2.5,2.5,0,0,1-.7,4.32A13.894,13.894,0,0,1,15,24Zm.076-22a10.793,10.793,0,0,0-1.677.127,10.093,10.093,0,0,0-8.344,8.8A9.927,9.927,0,0,0,7.572,18.7,10.476,10.476,0,0,0,18.664,21.43a.5.5,0,0,0,.139-.857c-5.929-4.478-6.4-12.486-.948-17.449a.459.459,0,0,0,.128-.466.49.49,0,0,0-.356-.361A10.657,10.657,0,0,0,15.076,2Z"/></svg>');
    $(".Title-Logo").attr("href", "assets/images/small-logo-dark.png");
}

function ThemeChanger() {
    TapSound();
    if (localStorage.getItem("Theme Mode") == "Light") {
        localStorage.setItem("Theme Mode", "Dark");
        body.addClass("Dark-Mode");
        themeModeBtn.html('<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" class="icon" data-name="Layer 1" viewBox="0 0 24 24"><path d="M15,24a12.021,12.021,0,0,1-8.914-3.966,11.9,11.9,0,0,1-3.02-9.309A12.122,12.122,0,0,1,13.085.152a13.061,13.061,0,0,1,5.031.205,2.5,2.5,0,0,1,1.108,4.226c-4.56,4.166-4.164,10.644.807,14.41a2.5,2.5,0,0,1-.7,4.32A13.894,13.894,0,0,1,15,24Zm.076-22a10.793,10.793,0,0,0-1.677.127,10.093,10.093,0,0,0-8.344,8.8A9.927,9.927,0,0,0,7.572,18.7,10.476,10.476,0,0,0,18.664,21.43a.5.5,0,0,0,.139-.857c-5.929-4.478-6.4-12.486-.948-17.449a.459.459,0,0,0,.128-.466.49.49,0,0,0-.356-.361A10.657,10.657,0,0,0,15.076,2Z"/></svg>');
        phoneThemeBtn.html('<svg xmlns="<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" class="icon" data-name="Layer 1" viewBox="0 0 24 24"><path d="M15,24a12.021,12.021,0,0,1-8.914-3.966,11.9,11.9,0,0,1-3.02-9.309A12.122,12.122,0,0,1,13.085.152a13.061,13.061,0,0,1,5.031.205,2.5,2.5,0,0,1,1.108,4.226c-4.56,4.166-4.164,10.644.807,14.41a2.5,2.5,0,0,1-.7,4.32A13.894,13.894,0,0,1,15,24Zm.076-22a10.793,10.793,0,0,0-1.677.127,10.093,10.093,0,0,0-8.344,8.8A9.927,9.927,0,0,0,7.572,18.7,10.476,10.476,0,0,0,18.664,21.43a.5.5,0,0,0,.139-.857c-5.929-4.478-6.4-12.486-.948-17.449a.459.459,0,0,0,.128-.466.49.49,0,0,0-.356-.361A10.657,10.657,0,0,0,15.076,2Z"/></svg>');
        $(".Title-Logo").attr("href", "assets/images/small-logo-dark.png");
    } else if (localStorage.getItem("Theme Mode") == "Dark") {
        localStorage.setItem("Theme Mode", "Light");
        body.removeClass("Dark-Mode");
        themeModeBtn.html('<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" class="icon"><path d="M23,11H18.92a6.924,6.924,0,0,0-.429-1.607l3.527-2.044a1,1,0,1,0-1-1.731l-3.53,2.047a7.062,7.062,0,0,0-1.149-1.15l2.046-3.531a1,1,0,0,0-1.731-1L14.607,5.509A6.9,6.9,0,0,0,13,5.08V1a1,1,0,0,0-2,0V5.08a6.9,6.9,0,0,0-1.607.429L7.349,1.982a1,1,0,0,0-1.731,1L7.664,6.515a7.062,7.062,0,0,0-1.149,1.15L2.985,5.618a1,1,0,1,0-1,1.731L5.509,9.393A6.924,6.924,0,0,0,5.08,11H1a1,1,0,0,0,0,2H5.08a6.924,6.924,0,0,0,.429,1.607L1.982,16.651a1,1,0,1,0,1,1.731l3.53-2.047a7.062,7.062,0,0,0,1.149,1.15L5.618,21.016a1,1,0,0,0,1.731,1l2.044-3.527A6.947,6.947,0,0,0,11,18.92V23a1,1,0,0,0,2,0V18.92a6.947,6.947,0,0,0,1.607-.429l2.044,3.527a1,1,0,0,0,1.731-1l-2.046-3.531a7.062,7.062,0,0,0,1.149-1.15l3.53,2.047a1,1,0,1,0,1-1.731l-3.527-2.044A6.924,6.924,0,0,0,18.92,13H23A1,1,0,0,0,23,11ZM12,17c-6.608-.21-6.606-9.791,0-10C18.608,7.21,18.606,16.791,12,17Z"/></svg>');
        phoneThemeBtn.html('<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" class="icon"><path d="M23,11H18.92a6.924,6.924,0,0,0-.429-1.607l3.527-2.044a1,1,0,1,0-1-1.731l-3.53,2.047a7.062,7.062,0,0,0-1.149-1.15l2.046-3.531a1,1,0,0,0-1.731-1L14.607,5.509A6.9,6.9,0,0,0,13,5.08V1a1,1,0,0,0-2,0V5.08a6.9,6.9,0,0,0-1.607.429L7.349,1.982a1,1,0,0,0-1.731,1L7.664,6.515a7.062,7.062,0,0,0-1.149,1.15L2.985,5.618a1,1,0,1,0-1,1.731L5.509,9.393A6.924,6.924,0,0,0,5.08,11H1a1,1,0,0,0,0,2H5.08a6.924,6.924,0,0,0,.429,1.607L1.982,16.651a1,1,0,1,0,1,1.731l3.53-2.047a7.062,7.062,0,0,0,1.149,1.15L5.618,21.016a1,1,0,0,0,1.731,1l2.044-3.527A6.947,6.947,0,0,0,11,18.92V23a1,1,0,0,0,2,0V18.92a6.947,6.947,0,0,0,1.607-.429l2.044,3.527a1,1,0,0,0,1.731-1l-2.046-3.531a7.062,7.062,0,0,0,1.149-1.15l3.53,2.047a1,1,0,1,0,1-1.731l-3.527-2.044A6.924,6.924,0,0,0,18.92,13H23A1,1,0,0,0,23,11ZM12,17c-6.608-.21-6.606-9.791,0-10C18.608,7.21,18.606,16.791,12,17Z"/></svg>');
        $(".Title-Logo").attr("href", "assets/images/small-logo-light.png");
    }
};



// Theme Color
let themeImageColorName = "";
if (localStorage.getItem("Theme Color") == "Purple") {
    body.addClass("Theme-Color-Purple");
    themeImageColorName = "purple";
    $(".wave").each(function() {
        $(this).css({ "background": `url('assets/images/waves/wave-purple.png')` });
    });
} else if (localStorage.getItem("Theme Color") == "Red") {
    body.addClass("Theme-Color-Red");
    themeImageColorName = "red";
    $(".wave").each(function() {
        $(this).css({ "background": `url('assets/images/waves/wave-red.png')` });
    });
} else if (localStorage.getItem("Theme Color") == "Blue") {
    body.addClass("Theme-Color-Blue");
    themeImageColorName = "blue";
    $(".wave").each(function() {
        $(this).css({ "background": `url('assets/images/waves/wave-blue.png')` });
    });
} else if (localStorage.getItem("Theme Color") == "Green") {
    body.addClass("Theme-Color-Green");
    themeImageColorName = "green";
    $(".wave").each(function() {
        $(this).css({ "background": `url('assets/images/waves/wave-green.png')` });
    });
}



function ThemeColorChanger() {

    body.removeClass("Theme-Color-Purple");
    body.removeClass("Theme-Color-Red");
    body.removeClass("Theme-Color-Blue");
    body.removeClass("Theme-Color-Green");

    if (localStorage.getItem("Theme Color") == "Purple") {
        body.addClass("Theme-Color-Red");
        localStorage.setItem("Theme Color", "Red");
        themeImageColorName = "red";
    } else if (localStorage.getItem("Theme Color") == "Red") {
        body.addClass("Theme-Color-Blue");
        localStorage.setItem("Theme Color", "Blue");
        themeImageColorName = "blue";
    } else if (localStorage.getItem("Theme Color") == "Blue") {
        body.addClass("Theme-Color-Green");
        localStorage.setItem("Theme Color", "Green");
        themeImageColorName = "green";
    } else if (localStorage.getItem("Theme Color") == "Green") {
        body.addClass("Theme-Color-Purple");
        localStorage.setItem("Theme Color", "Purple");
        themeImageColorName = "purple";
    }

    $(".wave").each(function() {
        $(this).css({ "background": `url('assets/images/waves/wave-${themeImageColorName}.png')` });
    });
}



// Scroll Top
let desktopNav = $("#desktopNav");
let phoneNav = $("#phoneNav");
let scrollTopBtn = $("#scrollTopBtn");
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollTopBtn.css("display", "flex");
        // scrollTopBtn.addClass("animate__animated animate__backInUp");
        body.addClass("scroll-up-show");
    } else {
        body.removeClass("scroll-up-show");
        scrollTopBtn.css("display", "none");
        // scrollTopBtn.removeClass("animate__animated animate__backOutUp");
    }
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        desktopNav.addClass("sticky");
    } else {
        desktopNav.removeClass("sticky");
    }
}


function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0
        // scrollTopBtn.addClass("animate__animated animate__backOutUp");
    body.removeClass("scroll-up-show");
}

// Easy selector helper function
let select = (el, all = false) => {
    el = el.trim()
    if (all) {
        return [...document.querySelectorAll(el)]
    } else {
        return document.querySelector(el)
    }
}

// Easy event listener function
let on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
        if (all) {
            selectEl.forEach(e => e.addEventListener(type, listener))
        } else {
            selectEl.addEventListener(type, listener)
        }
    }
}

// Easy on scroll event listener 
let onscroll = (el, listener) => {
        el.addEventListener("scroll", listener)
    }
    // Navbar links active state on scroll
let navbarlinks = select('#desktopNav .nav-link', true)
let navbarlinksActive = () => {
    let position = window.scrollY;
    navbarlinks.forEach(navbarlink => {
        if (!navbarlink.hash) return
        let section = select(navbarlink.hash)
        if (!section) return
        if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
            navbarlink.classList.add('active')
        } else {
            navbarlink.classList.remove('active')
        }
    })
}
window.addEventListener('load', navbarlinksActive);
onscroll(document, navbarlinksActive);
// Scrolls to an element with header offset
let scrollto = (el) => {
        let elementPos = select(el).offsetTop
        window.scrollTo({
            top: elementPos,
            behavior: 'smooth'
        })
    }
    // Scrool with ofset on links with a class name .scrollto
on('click', '.nav-link', function(e) {
    if (select(this.hash)) {
        e.preventDefault()
        scrollto(this.hash);
    }
}, true)



// Phone Nav
let phoneNavbarlinks = select('#phoneNav .nav-link', true)
let phoneNavbarlinksActive = () => {
    let position = window.scrollY;
    phoneNavbarlinks.forEach(navbarlink => {
        if (!navbarlink.hash) return
        let section = select(navbarlink.hash)
        if (!section) return
        if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
            navbarlink.classList.add('active')
        } else {
            navbarlink.classList.remove('active')
        }
    })
}
window.addEventListener('load', phoneNavbarlinksActive);
onscroll(document, phoneNavbarlinksActive);



// // Phone Nav Menu
jquerySwipeHandler.handleSwipe("#phoneNav", [
    jquerySwipeHandler.SWIPE_LEFT,
    jquerySwipeHandler.SWIPE_RIGHT,
    jquerySwipeHandler.SWIPE_DOWN,
    jquerySwipeHandler.SWIPE_UP,
    jquerySwipeHandler.CLICK
], function(direction) {
    if (direction == "SWIPE_UP") {
        body.addClass("phone-nav-open");
    } else if (direction == "SWIPE_DOWN") {
        body.removeClass("phone-nav-open");
    }
});
jquerySwipeHandler.handleSwipe("#phoneNav .logo", [
    jquerySwipeHandler.SWIPE_LEFT,
    jquerySwipeHandler.SWIPE_RIGHT,
    jquerySwipeHandler.SWIPE_DOWN,
    jquerySwipeHandler.SWIPE_UP,
    jquerySwipeHandler.CLICK
], function(direction) {
    if (direction == "CLICK") {
        scrollToTop();
        TapSound();
        body.removeClass("phone-nav-open");
    } else if (direction == "SWIPE_UP") {
        body.addClass('phone-nav-open');
    } else if (direction == "SWIPE_DOWN") {
        body.removeClass('phone-nav-open');
    }
});
jquerySwipeHandler.handleSwipe("#phoneThemeBtn", [
    jquerySwipeHandler.SWIPE_LEFT,
    jquerySwipeHandler.SWIPE_RIGHT,
    jquerySwipeHandler.SWIPE_DOWN,
    jquerySwipeHandler.SWIPE_UP,
    jquerySwipeHandler.CLICK
], function(direction) {
    if (direction == "CLICK") {
        ThemeChanger();
        TapSound();
    } else if (direction == "SWIPE_UP") {
        body.addClass('phone-nav-open');
    } else if (direction == "SWIPE_DOWN") {
        body.removeClass('phone-nav-open');
    }
});
jquerySwipeHandler.handleSwipe("#navLinkHome", [
    jquerySwipeHandler.SWIPE_LEFT,
    jquerySwipeHandler.SWIPE_RIGHT,
    jquerySwipeHandler.SWIPE_DOWN,
    jquerySwipeHandler.SWIPE_UP,
    jquerySwipeHandler.CLICK
], function(direction) {
    if (direction == "CLICK") {
        scrollto(document.getElementById("navLinkHome").hash);
        TapSound();
        body.removeClass("phone-nav-open");
    } else if (direction == "SWIPE_DOWN") {
        body.removeClass('phone-nav-open');
    }
});
jquerySwipeHandler.handleSwipe("#navLinkAbout", [
    jquerySwipeHandler.SWIPE_LEFT,
    jquerySwipeHandler.SWIPE_RIGHT,
    jquerySwipeHandler.SWIPE_DOWN,
    jquerySwipeHandler.SWIPE_UP,
    jquerySwipeHandler.CLICK
], function(direction) {
    if (direction == "CLICK") {
        scrollto(document.getElementById("navLinkAbout").hash);
        TapSound();
        body.removeClass("phone-nav-open");
    } else if (direction == "SWIPE_DOWN") {
        body.removeClass('phone-nav-open');
    }
});
jquerySwipeHandler.handleSwipe("#navLinkFeatures", [
    jquerySwipeHandler.SWIPE_LEFT,
    jquerySwipeHandler.SWIPE_RIGHT,
    jquerySwipeHandler.SWIPE_DOWN,
    jquerySwipeHandler.SWIPE_UP,
    jquerySwipeHandler.CLICK
], function(direction) {
    if (direction == "CLICK") {
        scrollto(document.getElementById("navLinkFeatures").hash);
        TapSound();
        body.removeClass("phone-nav-open");
    } else if (direction == "SWIPE_DOWN") {
        body.removeClass('phone-nav-open');
    }
});
jquerySwipeHandler.handleSwipe("#navLinkPortfolio", [
    jquerySwipeHandler.SWIPE_LEFT,
    jquerySwipeHandler.SWIPE_RIGHT,
    jquerySwipeHandler.SWIPE_DOWN,
    jquerySwipeHandler.SWIPE_UP,
    jquerySwipeHandler.CLICK
], function(direction) {
    if (direction == "CLICK") {
        scrollto(document.getElementById("navLinkPortfolio").hash);
        TapSound();
        body.removeClass("phone-nav-open");
    } else if (direction == "SWIPE_DOWN") {
        body.removeClass('phone-nav-open');
    }
});
jquerySwipeHandler.handleSwipe("#navLinkResume", [
    jquerySwipeHandler.SWIPE_LEFT,
    jquerySwipeHandler.SWIPE_RIGHT,
    jquerySwipeHandler.SWIPE_DOWN,
    jquerySwipeHandler.SWIPE_UP,
    jquerySwipeHandler.CLICK
], function(direction) {
    if (direction == "CLICK") {
        scrollto(document.getElementById("navLinkResume").hash);
        TapSound();
        body.removeClass("phone-nav-open");
    } else if (direction == "SWIPE_DOWN") {
        body.removeClass('phone-nav-open');
    }
});
jquerySwipeHandler.handleSwipe("#navLinkContactMe", [
    jquerySwipeHandler.SWIPE_LEFT,
    jquerySwipeHandler.SWIPE_RIGHT,
    jquerySwipeHandler.SWIPE_DOWN,
    jquerySwipeHandler.SWIPE_UP,
    jquerySwipeHandler.CLICK
], function(direction) {
    if (direction == "CLICK") {
        scrollto(document.getElementById("navLinkContactMe").hash);
        TapSound();
        body.removeClass("phone-nav-open");
    } else if (direction == "SWIPE_DOWN") {
        body.removeClass('phone-nav-open');
    }
});



// Side Bar
let sideBarToggleBtn = $("#sideBarToggleBtn");

function sideBarToggle() {
    body.toggleClass("side-bar-opened");
    body.toggleClass("h-hide");
}



// Header
if (!$("body").hasClass("thanks_page")) {
    new Typed('.profession', {
        strings: $(".profession").attr('data-typed-items').split(','),
        loop: true,
        typeSpeed: 50,
        backSpeed: 20,
        smartBackspace: true,
        backDelay: 1000,
    });
}


// Resume Tabs
function unActiveAllTabs() {
    $(".tabs-bar .tab").each(function() {
        $(".tabs-bar .tab").removeClass("active");
    });
}

function unActiveAllTabsContents(action1, action2) {
    $(".tab-content").each(function() {
        $(".tab-content").hide();
    });
}
unActiveAllTabsContents();
$("#education-tab-content").fadeIn();
$("#Resume .tabs-bar").on("click", ".tab", function() {
    TapSound();
    unActiveAllTabs();
    unActiveAllTabsContents();
    $(this).addClass("active");
    $("#" + $(this).attr("data-bs-tab-name") + "-content").fadeIn(800);
    $('.progress-bar .progress').each(function() {
        $(this).css({ width: 0 });
    });
    $('.progress-bar .progress').each(function() {
        $(this).animate({ width: $(this).attr("data-bs-progress") });
    });
});



// Projects Slider
var projectSwiper = new Swiper(".projects-swiper", {
    autoHeight: true,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});



// Project Modal
let projectModal = $("#projectModal");
let projectModalContent = $("#projectModal .modal");
let projectModalCloseBtn = $("#projectModalCloseBtn");
projectModal.hide();
$("#allProjects").on("click", ".card", function() {

    projectModal.fadeIn();
    body.addClass("h-hide");

    projectModalCloseBtn.click(function(e) {
        e.preventDefault();
        projectModal.fadeOut();
        body.removeClass("h-hide");
    });

    $(document).mouseup(function(e) {
        if (!projectModalContent.is(e.target) && projectModalContent.has(e.target).length === 0) {
            projectModal.fadeOut();
            body.removeClass("h-hide");
        }
    });
});
$("#like").click(function(e) {
    e.preventDefault();
    if ($("#like").hasClass("liked")) {
        $("#like").removeClass("liked");
        $("#like svg").html('<path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"/>');
    } else {
        $("#like").addClass("liked");
        $("#like svg").html('<path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"/>');
    }
});



// Testimonial Slider
var testimonialSwiper = new Swiper(".testimonial-swiper", {
    speed: 1500,
    autoHeight: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});



// Ad Contact Button
$('.bg-video').defaultPlaybackRate = 5.0;
$("#adContactButton").click(function(e) {
    e.preventDefault();
    scrollto(this.hash);
});



// Contact Form
$().ready(function() {
    $("#contactForm").validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            phone: {
                required: true,
                minlength: 10,
                maxlength: 13
            },
            email: {
                required: true,
                email: true
            },
            subject: {
                required: true,
                minlength: 1,
            },
            message: {
                required: true,
                minlength: 1
            },
        },
        messages: {
            name: {
                required: "Please enter a name",
                minlength: "Your name must consist of at least 2 characters"
            },
            phone: {
                required: "Please enter a phone number",
                minlength: "Your phone number must consist of at least 10 characters",
                maxlength: "Your phone number must consist of at least 13 characters"
            },
            email: {
                required: "Please enter a email",
                email: "Please enter a valid email address"
            },
            subject: {
                required: "Please enter a subject",
                minlength: "Your subject must consist of at least 2 characters",
            },
            message: {
                required: "Please enter a message",
            }
        }
    });
});



// Thanks
if ($("body").hasClass("thanks_page")) {
    setInterval(() => {
        let getCount = $(".count").html();
        if (getCount > 0) {
            $(".count").html(getCount - 1)
        } else {
            window.history.back();
        }
    }, 1000);
}