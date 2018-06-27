function Utils() {}

Utils.prototype = {
  constructor: Utils,
  isElementInView: function (element, fullyInView) {
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      const windowWidth = window.innerWidth || document.documentElement.clientWidth;
      const pageTop = window.scrollTop()
      const el = document.getElementById(`work--project-${index}`)
      const projectBounding = document.getElementById(`work--project-${index}`).getBoundingClientRect()

      var pageBottom = pageTop + $(window).height();
      var elementTop = $(element).offset().top;
      var elementBottom = elementTop + $(element).height();

      if (fullyInView === true) {
          return ((pageTop < elementTop) && (pageBottom > elementBottom));
      } else {
          return ((elementTop <= pageBottom) && (elementBottom >= pageTop));
      }
  }
};

export default Utils 