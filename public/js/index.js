
/**
 * Event: load
 */
document.addEventListener("DOMContentLoaded", start);
function start () {
    
    //
    // browser console
    //
    if (typeof eruda !== "undefined") {
        eruda.init();
    }
    
    
    //
    // icons
    //
    const hambIcon = document.querySelector(".hamb-icon");
    hambIcon.addEventListener("click", () => {
        toggleClass(hambIcon, "open");
        toggleClass(drawer, "open");
    })
    
    //
    // drawer
    //
    const navbar = document.querySelector(".navbar");
    const drawer = document.querySelector(".drawer");
    drawer.style.setProperty("--pt", navbar.clientHeight + "px");
    drawer.style.setProperty("--traslate-top", (- drawer.clientHeight * 4) + "px");
    
    //
    // set interval
    //
    setDelayTime(2500).then(() => {
        toggleClass(
            document.querySelector(".hero"),
            "open",
        );
    });
}