function Utils() {}

Utils.prototype = {
    constructor: Utils,
    isElementInView: function (element, fullyInView) {
        let windowHeight = window.innerHeight || document.documentElement.clientHeight;
        let windowWidth = window.innerWidth || document.documentElement.clientWidth;
        let pageTop = window.scrollTop || document.documentElement.scrollTop
        let elementHeight = element.getBoundingClientRect().height
        let pageBottom = pageTop + windowHeight
        let elementTop = element.offsetTop
        let elementBottom = elementTop + pageTop

        if (fullyInView === true) {
            return ((pageTop < elementTop) && (pageBottom > elementBottom));
        } else {
            return ((elementTop <= pageBottom) && (elementBottom >= pageTop));
        }
    }
};

export default Utils