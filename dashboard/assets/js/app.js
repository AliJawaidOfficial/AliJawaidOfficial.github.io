// loader
function loader() {
    $("body").addClass("loading");
    setTimeout(function() {
        $("body").removeClass("loading");
    }, 300);
};

// Right Click Validation
// document.addEventListener("contextmenu", function(event) {
//     event.preventDefault();
// }, false);


// Page
window.addEventListener("load", () => {
    let Page = localStorage.getItem("Page");
    $("." + Page).addClass("active");
    $(".side_bar_nav_link ." + Page).addClass("active");
});



// Theme Change
let body = $("body");
let themeModeBtn = $("#themeBtn");
let phoneThemeBtn = $("#phoneThemeBtn");

if (localStorage.length == 0) {
    localStorage.setItem('SideBar', 'Collapsed');
    localStorage.setItem('Page', 'Dashboard');
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        localStorage.setItem("Theme Mode", "Dark");
    } else {
        localStorage.setItem("Theme Mode", "Light");
    }
    localStorage.setItem("Theme Color", "Blue");
}
// Theme Mode
if (localStorage.getItem("Theme Mode") == "Light") {
    body.removeClass("Dark-Mode");
    themeModeBtn.html('<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" class="icon"><path d="M23,11H18.92a6.924,6.924,0,0,0-.429-1.607l3.527-2.044a1,1,0,1,0-1-1.731l-3.53,2.047a7.062,7.062,0,0,0-1.149-1.15l2.046-3.531a1,1,0,0,0-1.731-1L14.607,5.509A6.9,6.9,0,0,0,13,5.08V1a1,1,0,0,0-2,0V5.08a6.9,6.9,0,0,0-1.607.429L7.349,1.982a1,1,0,0,0-1.731,1L7.664,6.515a7.062,7.062,0,0,0-1.149,1.15L2.985,5.618a1,1,0,1,0-1,1.731L5.509,9.393A6.924,6.924,0,0,0,5.08,11H1a1,1,0,0,0,0,2H5.08a6.924,6.924,0,0,0,.429,1.607L1.982,16.651a1,1,0,1,0,1,1.731l3.53-2.047a7.062,7.062,0,0,0,1.149,1.15L5.618,21.016a1,1,0,0,0,1.731,1l2.044-3.527A6.947,6.947,0,0,0,11,18.92V23a1,1,0,0,0,2,0V18.92a6.947,6.947,0,0,0,1.607-.429l2.044,3.527a1,1,0,0,0,1.731-1l-2.046-3.531a7.062,7.062,0,0,0,1.149-1.15l3.53,2.047a1,1,0,1,0,1-1.731l-3.527-2.044A6.924,6.924,0,0,0,18.92,13H23A1,1,0,0,0,23,11ZM12,17c-6.608-.21-6.606-9.791,0-10C18.608,7.21,18.606,16.791,12,17Z"/></svg>');
    phoneThemeBtn.html('<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" class="icon"><path d="M23,11H18.92a6.924,6.924,0,0,0-.429-1.607l3.527-2.044a1,1,0,1,0-1-1.731l-3.53,2.047a7.062,7.062,0,0,0-1.149-1.15l2.046-3.531a1,1,0,0,0-1.731-1L14.607,5.509A6.9,6.9,0,0,0,13,5.08V1a1,1,0,0,0-2,0V5.08a6.9,6.9,0,0,0-1.607.429L7.349,1.982a1,1,0,0,0-1.731,1L7.664,6.515a7.062,7.062,0,0,0-1.149,1.15L2.985,5.618a1,1,0,1,0-1,1.731L5.509,9.393A6.924,6.924,0,0,0,5.08,11H1a1,1,0,0,0,0,2H5.08a6.924,6.924,0,0,0,.429,1.607L1.982,16.651a1,1,0,1,0,1,1.731l3.53-2.047a7.062,7.062,0,0,0,1.149,1.15L5.618,21.016a1,1,0,0,0,1.731,1l2.044-3.527A6.947,6.947,0,0,0,11,18.92V23a1,1,0,0,0,2,0V18.92a6.947,6.947,0,0,0,1.607-.429l2.044,3.527a1,1,0,0,0,1.731-1l-2.046-3.531a7.062,7.062,0,0,0,1.149-1.15l3.53,2.047a1,1,0,1,0,1-1.731l-3.527-2.044A6.924,6.924,0,0,0,18.92,13H23A1,1,0,0,0,23,11ZM12,17c-6.608-.21-6.606-9.791,0-10C18.608,7.21,18.606,16.791,12,17Z"/></svg>');
} else if (localStorage.getItem("Theme Mode") == "Dark") {
    body.addClass("Dark-Mode");
    themeModeBtn.html('<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" class="icon" data-name="Layer 1" viewBox="0 0 24 24"><path d="M15,24a12.021,12.021,0,0,1-8.914-3.966,11.9,11.9,0,0,1-3.02-9.309A12.122,12.122,0,0,1,13.085.152a13.061,13.061,0,0,1,5.031.205,2.5,2.5,0,0,1,1.108,4.226c-4.56,4.166-4.164,10.644.807,14.41a2.5,2.5,0,0,1-.7,4.32A13.894,13.894,0,0,1,15,24Zm.076-22a10.793,10.793,0,0,0-1.677.127,10.093,10.093,0,0,0-8.344,8.8A9.927,9.927,0,0,0,7.572,18.7,10.476,10.476,0,0,0,18.664,21.43a.5.5,0,0,0,.139-.857c-5.929-4.478-6.4-12.486-.948-17.449a.459.459,0,0,0,.128-.466.49.49,0,0,0-.356-.361A10.657,10.657,0,0,0,15.076,2Z"/></svg>');
    phoneThemeBtn.html('<svg xmlns="<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" class="icon" data-name="Layer 1" viewBox="0 0 24 24"><path d="M15,24a12.021,12.021,0,0,1-8.914-3.966,11.9,11.9,0,0,1-3.02-9.309A12.122,12.122,0,0,1,13.085.152a13.061,13.061,0,0,1,5.031.205,2.5,2.5,0,0,1,1.108,4.226c-4.56,4.166-4.164,10.644.807,14.41a2.5,2.5,0,0,1-.7,4.32A13.894,13.894,0,0,1,15,24Zm.076-22a10.793,10.793,0,0,0-1.677.127,10.093,10.093,0,0,0-8.344,8.8A9.927,9.927,0,0,0,7.572,18.7,10.476,10.476,0,0,0,18.664,21.43a.5.5,0,0,0,.139-.857c-5.929-4.478-6.4-12.486-.948-17.449a.459.459,0,0,0,.128-.466.49.49,0,0,0-.356-.361A10.657,10.657,0,0,0,15.076,2Z"/></svg>');
}

function ThemeChanger() {
    if (localStorage.getItem("Theme Mode") == "Light") {
        localStorage.setItem("Theme Mode", "Dark");
        body.addClass("Dark-Mode");
        body.removeClass("Light-Mode");
        themeModeBtn.html('<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" class="icon" data-name="Layer 1" viewBox="0 0 24 24"><path d="M15,24a12.021,12.021,0,0,1-8.914-3.966,11.9,11.9,0,0,1-3.02-9.309A12.122,12.122,0,0,1,13.085.152a13.061,13.061,0,0,1,5.031.205,2.5,2.5,0,0,1,1.108,4.226c-4.56,4.166-4.164,10.644.807,14.41a2.5,2.5,0,0,1-.7,4.32A13.894,13.894,0,0,1,15,24Zm.076-22a10.793,10.793,0,0,0-1.677.127,10.093,10.093,0,0,0-8.344,8.8A9.927,9.927,0,0,0,7.572,18.7,10.476,10.476,0,0,0,18.664,21.43a.5.5,0,0,0,.139-.857c-5.929-4.478-6.4-12.486-.948-17.449a.459.459,0,0,0,.128-.466.49.49,0,0,0-.356-.361A10.657,10.657,0,0,0,15.076,2Z"/></svg>');
        phoneThemeBtn.html('<svg xmlns="<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" class="icon" data-name="Layer 1" viewBox="0 0 24 24"><path d="M15,24a12.021,12.021,0,0,1-8.914-3.966,11.9,11.9,0,0,1-3.02-9.309A12.122,12.122,0,0,1,13.085.152a13.061,13.061,0,0,1,5.031.205,2.5,2.5,0,0,1,1.108,4.226c-4.56,4.166-4.164,10.644.807,14.41a2.5,2.5,0,0,1-.7,4.32A13.894,13.894,0,0,1,15,24Zm.076-22a10.793,10.793,0,0,0-1.677.127,10.093,10.093,0,0,0-8.344,8.8A9.927,9.927,0,0,0,7.572,18.7,10.476,10.476,0,0,0,18.664,21.43a.5.5,0,0,0,.139-.857c-5.929-4.478-6.4-12.486-.948-17.449a.459.459,0,0,0,.128-.466.49.49,0,0,0-.356-.361A10.657,10.657,0,0,0,15.076,2Z"/></svg>');
    } else if (localStorage.getItem("Theme Mode") == "Dark") {
        localStorage.setItem("Theme Mode", "Light");
        body.removeClass("Dark-Mode");
        body.addClass("Light-Mode");
        themeModeBtn.html('<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" class="icon"><path d="M23,11H18.92a6.924,6.924,0,0,0-.429-1.607l3.527-2.044a1,1,0,1,0-1-1.731l-3.53,2.047a7.062,7.062,0,0,0-1.149-1.15l2.046-3.531a1,1,0,0,0-1.731-1L14.607,5.509A6.9,6.9,0,0,0,13,5.08V1a1,1,0,0,0-2,0V5.08a6.9,6.9,0,0,0-1.607.429L7.349,1.982a1,1,0,0,0-1.731,1L7.664,6.515a7.062,7.062,0,0,0-1.149,1.15L2.985,5.618a1,1,0,1,0-1,1.731L5.509,9.393A6.924,6.924,0,0,0,5.08,11H1a1,1,0,0,0,0,2H5.08a6.924,6.924,0,0,0,.429,1.607L1.982,16.651a1,1,0,1,0,1,1.731l3.53-2.047a7.062,7.062,0,0,0,1.149,1.15L5.618,21.016a1,1,0,0,0,1.731,1l2.044-3.527A6.947,6.947,0,0,0,11,18.92V23a1,1,0,0,0,2,0V18.92a6.947,6.947,0,0,0,1.607-.429l2.044,3.527a1,1,0,0,0,1.731-1l-2.046-3.531a7.062,7.062,0,0,0,1.149-1.15l3.53,2.047a1,1,0,1,0,1-1.731l-3.527-2.044A6.924,6.924,0,0,0,18.92,13H23A1,1,0,0,0,23,11ZM12,17c-6.608-.21-6.606-9.791,0-10C18.608,7.21,18.606,16.791,12,17Z"/></svg>');
        phoneThemeBtn.html('<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" class="icon"><path d="M23,11H18.92a6.924,6.924,0,0,0-.429-1.607l3.527-2.044a1,1,0,1,0-1-1.731l-3.53,2.047a7.062,7.062,0,0,0-1.149-1.15l2.046-3.531a1,1,0,0,0-1.731-1L14.607,5.509A6.9,6.9,0,0,0,13,5.08V1a1,1,0,0,0-2,0V5.08a6.9,6.9,0,0,0-1.607.429L7.349,1.982a1,1,0,0,0-1.731,1L7.664,6.515a7.062,7.062,0,0,0-1.149,1.15L2.985,5.618a1,1,0,1,0-1,1.731L5.509,9.393A6.924,6.924,0,0,0,5.08,11H1a1,1,0,0,0,0,2H5.08a6.924,6.924,0,0,0,.429,1.607L1.982,16.651a1,1,0,1,0,1,1.731l3.53-2.047a7.062,7.062,0,0,0,1.149,1.15L5.618,21.016a1,1,0,0,0,1.731,1l2.044-3.527A6.947,6.947,0,0,0,11,18.92V23a1,1,0,0,0,2,0V18.92a6.947,6.947,0,0,0,1.607-.429l2.044,3.527a1,1,0,0,0,1.731-1l-2.046-3.531a7.062,7.062,0,0,0,1.149-1.15l3.53,2.047a1,1,0,1,0,1-1.731l-3.527-2.044A6.924,6.924,0,0,0,18.92,13H23A1,1,0,0,0,23,11ZM12,17c-6.608-.21-6.606-9.791,0-10C18.608,7.21,18.606,16.791,12,17Z"/></svg>');
    }
};



// Theme Color
let themeImageColorName = "";
if (localStorage.getItem("Theme Color") == "Purple") {
    body.addClass("Theme-Color-Purple");
    themeImageColorName = "purple";
} else if (localStorage.getItem("Theme Color") == "Red") {
    body.addClass("Theme-Color-Red");
    themeImageColorName = "red";
} else if (localStorage.getItem("Theme Color") == "Blue") {
    body.addClass("Theme-Color-Blue");
    themeImageColorName = "blue";
} else if (localStorage.getItem("Theme Color") == "Green") {
    body.addClass("Theme-Color-Green");
    themeImageColorName = "green";
}

function ThemeColorChanger() {
    body.removeClass("Theme-Color-Purple");
    body.removeClass("Theme-Color-Red");
    body.removeClass("Theme-Color-Blue");
    body.removeClass("Theme-Color-Green");
    if (localStorage.getItem("Theme Color") == "Purple") {
        body.addClass("Theme-Color-Red");
        localStorage.setItem("Theme Color", "Red");
        $(".Title-Logo").attr("href", "assets/images/using-images/logo-red.png");
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





// Side Bar
let sidebar = $("#sideBar");
let sidebarToggleBtn = $("#sidebarToggleBtn");

function sideBarToggle() {
    console.log("click");
    if (localStorage.getItem('SideBar') == 'Full') {
        localStorage.setItem('SideBar', 'Collapsed');
        sidebar.addClass("collapsed");
        sidebar.removeClass("full");
    } else if (localStorage.getItem('SideBar') == 'Collapsed') {
        localStorage.setItem('SideBar', 'Full');
        sidebar.addClass("full");
        sidebar.removeClass("collapsed");
    }
}
if (localStorage.getItem('SideBar') == 'Full') {
    sidebar.addClass("full");
    sidebar.removeClass("collapsed");
} else if (localStorage.getItem('SideBar') == 'Collapsed') {
    sidebar.addClass("collapsed");
    sidebar.removeClass("full");
}
$("#sideBar .side_bar_nav_list").on("click", ".side_bar_nav_link", function() {
    let pageName = $(this).attr("data-bs-href");
    // Remove Active
    $("section").each(function() {
        $(this).removeClass("active");
    });
    loader();
    $(".side_bar_nav_link.active").removeClass("active");
    // Add Active
    $(this).addClass("active");
    $("." + pageName).addClass("active");
    $("title").text(`${pageName} - Dashboard - Ali Jawaid`);
    localStorage.setItem('Page', pageName);
});