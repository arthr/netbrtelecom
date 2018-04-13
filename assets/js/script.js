! function (e) {
    "use strict";
    var a = e(window),
        i = e("body"),
        t = e(".navbar");

    function l() {
        return a.width()
    }
    "ontouchstart" in document.documentElement || i.addClass("no-touch");
    var s = l();
    a.on("resize", function () {
        s = l()
    });
    var n = e(".is-sticky");
    if (n.length > 0) {
        var r = e("#mainnav").offset();
        a.scroll(function () {
            var e = a.scrollTop();
            a.width() > 991 && e > r.top ? n.hasClass("has-fixed") || n.addClass("has-fixed") : n.hasClass("has-fixed") && n.removeClass("has-fixed")
        })
    }
    e('a.menu-link[href*="#"]:not([href="#"])').on("click", function () {
        if (location.pathname.replace(/^\//, "") === this.pathname.replace(/^\//, "") && location.hostname === this.hostname) {
            var a = e(this.hash),
                i = !!this.hash.slice(1) && e("[name=" + this.hash.slice(1) + "]"),
                l = s >= 992 ? t.height() - 1 : 0;
            if ((a = a.length ? a : i).length) return e("html, body").animate({
                scrollTop: a.offset().top - l
            }, 1e3, "easeInOutExpo"), !1
        }
    });

    var o = window.location.href,
        d = o.split("#"),
        c = e(".nav li a");
    c.length > 0 && c.each(function () {
        o === this.href && "" !== d[1] && e(this).closest("li").addClass("active").parent().closest("li").addClass("active")
    });

    var m = e(".dropdown");
    m.length > 0 && (m.on("mouseover", function () {
        a.width() > 991 && (e(".dropdown-menu", this).not(".in .dropdown-menu").stop().fadeIn("400"), e(this).addClass("open"))
    }), m.on("mouseleave", function () {
        a.width() > 991 && (e(".dropdown-menu", this).not(".in .dropdown-menu").stop().fadeOut("400"), e(this).removeClass("open"))
    }), m.on("click", function () {
        if (a.width() < 991) return e(this).children(".dropdown-menu").fadeToggle(400), e(this).toggleClass("open"), !1
    })), a.on("resize", function () {
        e(".navbar-collapse").removeClass("in"), m.children(".dropdown-menu").fadeOut("400")
    });

    var h = e(".navbar-toggler"),
        u = e(".is-transparent");

    h.length > 0 && h.on("click", function () {
        e(".remove-animation").removeClass("animated"), u.hasClass("active") ? u.removeClass("active") : u.addClass("active")
    });

    var g = e("select");

    g.length > 0 && g.select2(), e(".menu-link").on("click", function () {
        e(".navbar-collapse").collapse("hide"), u.removeClass("active")
    });

    var p = e(".timeline-carousel");

    if (p.length > 0) {
        var f = !!i.hasClass("is-rtl");
        p.addClass("owl-carousel").owlCarousel({
            navText: ["<i class='ti ti-angle-left'></i>", "<i class='ti ti-angle-right'></i>"],
            items: 6,
            nav: !0,
            margin: 30,
            rtl: f,
            responsive: {
                0: {
                    items: 1
                },
                400: {
                    items: 2,
                    center: !1
                },
                599: {
                    items: 3
                },
                1024: {
                    items: 5
                },
                1170: {
                    items: 6
                }
            }
        })
    }

    var b = e(".content-popup");
    b.length > 0 && b.magnificPopup({
        type: "inline",
        preloader: !0,
        removalDelay: 400,
        mainClass: "mfp-fade bg-team-exp"
    });

    var w = e(".video-play");
    w.length > 0 && w.magnificPopup({
        type: "iframe",
        removalDelay: 160,
        preloader: !0,
        fixedContentPos: !1,
        callbacks: {
            beforeOpen: function () {
                this.st.image.markup = this.st.image.markup.replace("mfp-figure", "mfp-figure mfp-with-anim"), this.st.mainClass = this.st.el.attr("data-effect")
            }
        }
    });

    var C = e(".imagebg");
    C.length > 0 && C.each(function () {
        var a = e(this),
            i = a.parent(),
            t = a.data("overlay"),
            l = a.children("img").attr("src"),
            s = void 0 !== t && "" !== t && t.split("-");
        void 0 !== l && "" !== l && (i.hasClass("has-bg-image") || i.addClass("has-bg-image"), "" !== s && "dark" === s[0] && (i.hasClass("light") || i.addClass("light")), a.css("background-image", 'url("' + l + '")').addClass("bg-image-loaded"))
    });

    var x = e('[class*="mask-ov"]');
    x.length > 0 && x.each(function () {
        var a = e(this).parent();
        a.hasClass("has-maskbg") || a.addClass("has-maskbg")
    });

    var y = e("#contact-form");

    if (y.length > 0 || k.length > 0) {
        if (!e().validate || !e().ajaxSubmit) return console.log("contactForm: jQuery Form or Form Validate not Defined."), !0;

        if (y.length > 0) {
            var z = y.find("select.required"),
                j = y.find(".form-results");
            y.validate({
                invalidHandler: function () {
                    j.slideUp(400)
                },
                submitHandler: function (a) {
                    j.slideUp(400), e(a).ajaxSubmit({
                        target: j,
                        dataType: "json",
                        success: function (i) {
                            var t = "error" === i.result ? "alert-danger" : "alert-success";
                            j.removeClass("alert-danger alert-success").addClass("alert " + t).html(i.message).slideDown(400), "error" !== i.result && e(a).clearForm().find(".input-field").removeClass("input-focused")
                        }
                    })
                }
            }), z.on("change", function () {
                e(this).valid()
            })
        }
    }

    var A = e(".input-line");
    A.length > 0 && A.each(function () {
        var a = e(this);
        e(this).val().length > 0 && a.parent().addClass("input-focused"), a.on("focus", function () {
            a.parent().addClass("input-focused")
        }), a.on("blur", function () {
            a.parent().removeClass("input-focused"), e(this).val().length > 0 && a.parent().addClass("input-focused")
        })
    });

    var P = e(".animated");
    e().waypoint && P.length > 0 && a.on("load", function () {
        P.each(function () {
            var a = e(this),
                i = a.data("animate"),
                t = a.data("duration"),
                l = a.data("delay");
            a.waypoint(function () {
                a.addClass("animated " + i).css("visibility", "visible"), t && a.css("animation-duration", t + "s"), l && a.css("animation-delay", l + "s")
            }, {
                offset: "93%"
            })
        })
    });

    var S = e("#preloader"),
        _ = e("#loader");

    S.length > 0 && a.on("load", function () {
        _.fadeOut(300), i.addClass("loaded"), S.delay(700).fadeOut(300)
    }), e("#particles-js").length > 0 && particlesJS("particles-js", {
        particles: {
            number: {
                value: 50,
                density: {
                    enable: !0,
                    value_area: 800
                }
            },
            color: {
                value: "#88dc07"
            },
            shape: {
                type: "circle",
                opacity: .2,
                stroke: {
                    width: 0,
                    color: "#88dc07"
                },
                polygon: {
                    nb_sides: 5
                },
                image: {
                    src: "images/github.svg",
                    width: 100,
                    height: 100
                }
            },
            opacity: {
                value: .3,
                random: !1,
                anim: {
                    enable: !1,
                    speed: 1,
                    opacity_min: .12,
                    sync: !1
                }
            },
            size: {
                value: 6,
                random: !0,
                anim: {
                    enable: !1,
                    speed: 40,
                    size_min: .08,
                    sync: !1
                }
            },
            line_linked: {
                enable: !0,
                distance: 150,
                color: "#88dc07",
                opacity: .3,
                width: 1.3
            },
            move: {
                enable: !0,
                speed: 6,
                direction: "none",
                random: !1,
                straight: !1,
                out_mode: "out",
                bounce: !1,
                attract: {
                    enable: !1,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: !0,
                    mode: "repulse"
                },
                onclick: {
                    enable: !0,
                    mode: "push"
                },
                resize: !0
            },
            modes: {
                grab: {
                    distance: 400,
                    line_linked: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3
                },
                repulse: {
                    distance: 200,
                    duration: .4
                },
                push: {
                    particles_nb: 4
                },
                remove: {
                    particles_nb: 2
                }
            }
        },
        retina_detect: !0
    });
}(jQuery);