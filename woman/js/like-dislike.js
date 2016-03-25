/**
 * JQuery rating plugin.
 *
 * Copyright 2016, Maxim Tkachuk, uagrace91@gmail.com
 * Version 1.0.0
 */
(function ($) {

    var methods = {
        init: function (options) {
            this.opts = $.extend(true, {}, $.fn.likeDislike.defaults, options);
            var opts = this.opts;

            this.btns = $(this).find('.' + opts.likeBtnClass + ', .' + opts.dislikeBtnClass);

            this.readOnly = methods.readOnly;

            opts.readOnly = !opts.readOnly;
            this.readOnly(!opts.readOnly);

            if (opts.activeBtn) {
                methods._btnDown.call(this, opts.activeBtn);
            }

            return this;
        },
        readOnly: function (value) {
            var opts = this.opts;
            if (opts.readOnly !== value) {
                var btns = this.btns;
                opts.readOnly = value;
                if (!value) {
                    if (!opts.reverseMode) {
                        var notActiveBtn = btns.not('.' + opts.activeClass);
                        if (notActiveBtn.length) {
                            btns = notActiveBtn;
                        }
                    }
                    methods._bind.call(this, btns);
                } else {
                    methods._unbind.call(this, btns);
                }
            }
        },
        _btnDown: function (btnType) {
            var btn = methods._getBtnByType.call(this, btnType);
            btn.addClass(this.opts.activeClass);
            if (!this.opts.reverseMode) {
                methods._unbind.call(this, btn);
            }
        },
        _btnUp: function (btnType) {
            var btn = methods._getBtnByType.call(this, btnType);
            if (!this.opts.reverseMode) {
                methods._bind.call(this, btn);
            }
            btn.removeClass(this.opts.activeClass);
        },
        _getBtnByType: function (btnType) {
            if (btnType === this.opts.likeBtnClass) {
                return $(this).find('.' + this.opts.likeBtnClass);
            } else if (btnType === this.opts.dislikeBtnClass) {
                return $(this).find('.' + this.opts.dislikeBtnClass);
            } else {
                $.error('Wrong button type: ' + btnType);
            }
        },
        _bind: function (btn) {
            var self = this;
            var opts = self.opts;
            var likeBtnClass = opts.likeBtnClass;
            var dislikeBtnClass = opts.dislikeBtnClass;
            btn.removeClass(opts.desibleClass);

            btn.bind('click', function (event) {
                var btn = $(this);
                var btnType = btn.hasClass(likeBtnClass) ? likeBtnClass : dislikeBtnClass;
                var hasActive = self.btns.hasClass(opts.activeClass);
                var isActive = btn.hasClass(opts.activeClass);

                var likes = 0;
                var dislikes = 0;

                if (opts.reverseMode) {
                    if (btnType === likeBtnClass) {
                        if (isActive) {
                            methods._btnUp.call(self, likeBtnClass);
                            btnType = null;
                            likes = -1;
                        } else {
                            methods._btnDown.call(self, likeBtnClass);
                            methods._btnUp.call(self, dislikeBtnClass);
                            dislikes = hasActive ? -1 : dislikes;
                            likes = 1;
                        }
                    } else {
                        if (isActive) {
                            methods._btnUp.call(self, dislikeBtnClass);
                            btnType = null;
                            dislikes = -1;
                        } else {
                            methods._btnDown.call(self, dislikeBtnClass);
                            methods._btnUp.call(self, likeBtnClass);
                            likes = hasActive ? -1 : likes;
                            dislikes = 1;
                        }
                    }
                } else {
                    if (btnType === likeBtnClass) {
                        if (hasActive) {
                            methods._btnUp.call(self, dislikeBtnClass);
                            methods._btnDown.call(self, likeBtnClass);
                            dislikes = !isActive ? -1 : dislikes;
                            likes = 1;
                        } else {
                            methods._btnDown.call(self, likeBtnClass);
                            likes = 1;
                        }
                    } else {
                        if (hasActive) {
                            methods._btnUp.call(self, likeBtnClass);
                            methods._btnDown.call(self, dislikeBtnClass);
                            likes = !isActive ? -1 : likes;
                            dislikes = 1;
                        } else {
                            methods._btnDown.call(self, dislikeBtnClass);
                            dislikes = 1;
                        }
                    }
                }

                opts.click.call(self, btnType, likes, dislikes, event);
            });
        },
        _unbind: function (btn) {
            btn.addClass(this.opts.desibleClass);
            btn.unbind();
        }
    };

    $.fn.likeDislike = function (method) {
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method ' + method + ' does not exist!');
        }
    };

    $.fn.likeDislike.defaults = {
        click: null,
        activeBtn: null,
        reverseMode: false,
        readOnly: false,
        likeBtnClass: 'like',
        dislikeBtnClass: 'dislike',
        activeClass: 'active',
        desibleClass: 'desible'
    };

})(jQuery);
