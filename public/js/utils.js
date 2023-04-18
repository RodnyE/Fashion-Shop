

/**
 * timeout promise 
 */
function setDelayTime (delay) {
    return new Promise(resolve => {
        setTimeout(resolve, delay);
    });
}

/**
 * Enable and disable a css class
 *
 * @param {HTMLElement}
 * @param {string} class name
 * @return {boolean} enable or disable class 
 */
function toggleClass (el, className) {
    const classList = el.classList;
    
    if (classList.contains(className)) {
        // off
        classList.remove(className);
        return false;
    }
    else {
        // on
        classList.add(className);
        return true;
    }
}