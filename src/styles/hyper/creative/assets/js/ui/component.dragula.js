!(function(r) {
    'use strict';
    function t() {
        this.$body = r('body');
    }
    (t.prototype.init = function() {
        r('[data-plugin="dragula"]').each(function() {
            var t = r(this).data('containers'),
                a = [];
            if (t) for (var n = 0; n < t.length; n++) a.push(r('#' + t[n])[0]);
            else a = [r(this)[0]];
            var i = r(this).data('handleclass');
            i
                ? dragula(a, {
                      moves: function(t, a, n) {
                          return n.classList.contains(i);
                      },
                  })
                : dragula(a);
        });
    }),
        (r.Dragula = new t()),
        (r.Dragula.Constructor = t);
})(window.jQuery),
    (function() {
        'use strict';
        window.jQuery.Dragula.init();
    })();