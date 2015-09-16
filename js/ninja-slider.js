var nsOptions = {
	sliderId : "ninja-slider",
	effect : "fade",
	autoAdvance : true,
	pauseOnHover : false,
	pauseTime : 600,
	speed : 3000,
	startSlide : 0,
	aspectRatio : "1600:853",
	circular : true,
	touchCircular : true,
	mobileNav : false,
	before : null,
	after : null,
	multipleImages : {
		screenWidth : [ 0, 600 ],
		path : [ "-s.jpg", "-b.jpg" ]
	},
	license : "mylicense"
};

var nslider = new NinjaSlider(nsOptions);

/* Ninja Slider v2015.1.5. Copyright www.menucool.com */
function NinjaSlider(e) {
	var p = document, f = "length", Z = "parentNode", x = "children", X = "appendChild", r = window.setTimeout, V = window.clearInterval, U = function(
			a) {
		return p.getElementById(a)
	}, N = function(c) {
		var a = c.childNodes;
		if (a && a[f]) {
			var b = a[f];
			while (b--)
				a[b].nodeType != 1 && a[b][Z].removeChild(a[b])
		}
	}, Rb = function(a) {
		if (a && a.stopPropagation)
			a.stopPropagation();
		else if (a && typeof a.cancelBubble != "undefined")
			a.cancelBubble = true
	}, Ub = function(a) {
		for (var c, d, b = a[f]; b; c = parseInt(Math.random() * b), d = a[--b], a[b] = a[c], a[c] = d)
			;
		return a
	}, Yb = function() {
	}, fb = function(a) {
		r(a || Yb, 0)
	}, Zb = /background-size:\s*([\w\s]+)/, h, d, a, g, m, b, l, j, Y, H, cb, y, v, D, i, R, s, C, u, z, G, q, o, kb, wb, jb, K = (navigator.msPointerEnabled || navigator.pointerEnabled)
			&& navigator.msMaxTouchPoints, M, E, F, gb = function(a) {
		return !e.autoAdvance ? 0 : a
	}, Db = function() {
		if (b == "random") {
			for (var h = [], c = 0, e = g; c < e; c++)
				h[h[f]] = a[c];
			var i = Ub(h);
			for (c = 0, e = g; c < e; c++)
				d[X](i[c]);
			b = 0
		}
		b = Q(b);
		a = d[x]
	}, mb = function(a, b) {
		a.webkitTransitionDuration = a.MozTransitionDuration = a.msTransitionDuration = a.OTransitionDuration = a.transitionDuration = b
				+ "ms"
	}, t = "className", ab = "getAttribute", c = "style", n = "addEventListener", bb = "visibility", db = "opacity", I = "width", J = "height", T = "body", pb = "fromCharCode", qb = "charCodeAt", B = "left", Ib = function() {
		if (typeof McVideo2 != "undefined")
			for (var c, e = 0; e < g; e++)
				for (var h = a[e].getElementsByTagName("a"), d = 0; d < h[f]; d++)
					if (h[d][t] == "video") {
						c = h[d];
						var i = c[ab]("data-autovideo");
						if (i === "true")
							c.aP = true;
						else if (i === "1")
							c.aP = 1;
						else
							c.aP = 0;
						c.iP = 0;
						c.setAttribute("data-href", c.getAttribute("href"));
						c.removeAttribute("href");
						c.style.cursor = "pointer";
						c.onclick = function() {
							this == a[b].vD && !this.aP && sb(this);
							return false
						};
						a[e].vD = c;
						McVideo2.register(c, ac)
					}
	}, Kb = function(b) {
		if (!b.d) {
			N(b);
			b.z = null;
			var a = p.createElement("div");
			a[c][J] = a[c].margin = a[c].padding = "0px";
			a[c].styleFloat = a[c].cssFloat = "none";
			a[c].paddingTop = v ? v * 100 + "%" : "20%";
			a[t] = "preload";
			a.i = new Image;
			a.i.s = null;
			if (b[x][f])
				b.insertBefore(a, b[x][0]);
			else
				b[X](a);
			b.d = a;
			var d = Zb.exec(b[c].cssText);
			if (d && d[f])
				b.b = d[1];
			else {
				b[c].backgroundSize = "contain";
				b.b = "contain"
			}
		}
	}, ob = function(a, b) {
		if (b) {
			a.onmouseover = function() {
				cb = 1
			};
			a.onmouseout = function() {
				cb = 0
			}
		}
	}, tb = function(B) {
		var A = !h;
		if (B)
			for ( var O in B)
				e[O] = B[O];
		h = U(e.sliderId);
		if (!h)
			return;
		N(h);
		d = h.getElementsByTagName("ul");
		if (d)
			d = d[0];
		else
			return;
		if (K)
			d[c].msTouchAction = "none";
		N(d);
		a = d[x];
		g = a[f];
		if (!g)
			return;
		if (A)
			m = {
				b : !!window[n],
				c : "ontouchstart" in window || window.DocumentTouch
						&& document instanceof DocumentTouch || K,
				d : typeof p[T][c][db] != "undefined",
				a : function() {
					var a = [ "t", "WebkitT", "MozT", "OT", "msT" ];
					for ( var b in a)
						if (h[c][a[b] + "ransition"] !== undefined)
							return true;
					return false
				}()
			};
		if (m.c)
			if (navigator.pointerEnabled) {
				M = "pointerdown";
				E = "pointermove";
				F = "pointerup"
			} else if (navigator.msPointerEnabled) {
				M = "MSPointerDown";
				E = "MSPointerMove";
				F = "MSPointerUp"
			} else {
				M = "touchstart";
				E = "touchmove";
				F = "touchend"
			}
		b = e.startSlide;
		j = e.effect == "fade";
		l = e.speed;
		if (l == "default")
			l = j ? 1400 : 400;
		Y = e.circular;
		if (g < 2)
			Y = false;
		H = 1;
		cb = 0;
		y = e.aspectRatio;
		v = 0;
		D = 0;
		var I = y.split(":");
		if (I[f] == 2)
			try {
				D = Math.round(I[1] / I[0] * 1e5) / 1e5;
				v = D;
				A_R = 1
			} catch (W) {
				D = 0
			}
		if (!D)
			y = y == "auto" ? 2 : 0;
		i = gb(e.pauseTime);
		R = {};
		s = {};
		C = null;
		Qb(e.license);
		u = {
			handleEvent : function(a) {
				Rb(a);
				a.preventManipulation && a.preventManipulation();
				switch (a.type) {
				case M:
					this.a(a);
					break;
				case E:
					this.b(a);
					break;
				case F:
					fb(this.c(a));
					break;
				case "webkitTransitionEnd":
				case "msTransitionEnd":
				case "oTransitionEnd":
				case "otransitionend":
				case "transitionend":
					fb(S(a.target));
					break;
				case "resize":
					k();
					z = r(ib, 0)
				}
			},
			a : function(b) {
				var a = K ? b : b.touches[0];
				R = {
					x : a.pageX,
					y : a.pageY,
					time : +new Date
				};
				C = null;
				s = {};
				d[n](E, this, false);
				d[n](F, this, false)
			},
			b : function(a) {
				if (!K && (a.touches[f] > 1 || a.scale && a.scale !== 1))
					return;
				var c = K ? a : a.touches[0];
				s = {
					x : c.pageX - R.x,
					y : c.pageY - R.y
				};
				if (C === null)
					C = !!(C || Math.abs(s.x) < Math.abs(s.y));
				if (!C) {
					a.preventDefault();
					k();
					!j && L(s.x + b * -q, -1)
				}
			},
			c : function() {
				var f = +new Date - R.time, c = f < 250 && Math.abs(s.x) > 20
						|| Math.abs(s.x) > q / 2, a = !b && s.x > 0
						|| b == g - 1 && s.x < 0;
				if (e.touchCircular)
					a = false;
				if (!C)
					if (c && !a)
						w(b + (s.x > 0 ? -1 : 1));
					else
						!j && L(b * -q, l);
				d.removeEventListener(E, u, false);
				d.removeEventListener(F, u, false)
			}
		};
		if (A)
			if (m.b) {
				Gb(u);
				m.c && d[n](M, u, false);
				if (m.a) {
					d[n]("webkitTransitionEnd", u, false);
					d[n]("msTransitionEnd", u, false);
					d[n]("oTransitionEnd", u, false);
					d[n]("otransitionend", u, false);
					d[n]("transitionend", u, false)
				}
			} else {
				var P, J;
				window.attachEvent("onresize", function() {
					J = p.documentElement.clientHeight;
					if (P != J) {
						ib();
						P = J
					}
				})
			}
		Db();
		A && Ib();
		for (var t, G, V, o = 0, Q = g; o < Q; o++) {
			if (j)
				a[o].iX = o;
			N(a[o]);
			if (a[o][x][f] == 1) {
				t = a[o][x][0];
				G = t[ab]("data-image");
				if (G && !a[o].sL) {
					ob(t, e.pauseOnHover && !m.c);
					a[o].sL = t;
					Kb(t);
					a[o].lD = 0
				}
				!G && ob(t, e.pauseOnHover && !m.c)
			} else {
				alert("HTML error. Slide content(the content within LI) must be a single node element. Any HTML content should be contained within the element.");
				return
			}
		}
		h[c][bb] = "visible";
		ib()
	}, sb = function(a) {
		var b = McVideo2.play(a, "100%", "100%", e.sliderId);
		if (b) {
			k();
			a.iP = 1
		} else
			a.iP = 0;
		return false
	}, ac = this;
	this.To = function() {
		if (e.autoAdvance) {
			if (a[b].vD)
				a[b].vD.iP = 0;
			k();
			A()
		}
	};
	var O = function(a, b) {
		if (i)
			a[c][bb] = b > 0 ? "visible" : "hidden";
		if (m.d)
			a[c][db] = b;
		else
			a[c].filter = "alpha(opacity=" + b * 100 + ")"
	}, eb = function(c) {
		var b = g;
		while (b--)
			O(a[b], c == b ? 1 : 0)
	}, W = 0, vb = function() {
		if (i || !W) {
			i = 0;
			W = 1;
			k()
		} else {
			i = gb(e.pauseTime);
			W = 0;
			A()
		}
		jb[t] = i ? "" : "paused"
	}, hb = function(c, b) {
		var a = p.createElement("div");
		a.id = h.id + c;
		if (b)
			a.onclick = b;
		a = h[X](a);
		return a
	}, nb = function(a) {
		k();
		if (j) {
			i = 0;
			w(b + a, 0);
			if (!W)
				z = setTimeout(function() {
					i = gb(e.pauseTime);
					A()
				}, Math.max(l, e.pauseTime))
		} else if (a == -1)
			xb();
		else
			A()
	}, Ob = function() {
		if (!o) {
			var d = h.id + "-pager", a = U(d);
			if (!a) {
				a = p.createElement("div");
				a.id = d;
				a = h.nextSibling ? h[Z].insertBefore(a, h.nextSibling)
						: h[Z][X](a)
			}
			if (!a[x][f]) {
				for (var e = [], c = 0; c < g; c++)
					e.push('<a rel="' + c + '">' + (c + 1) + "</a>");
				a.innerHTML = e.join("")
			}
			o = a[x];
			N(o);
			for (var c = 0; c < o[f]; c++) {
				if (c == b)
					o[c][t] = "active";
				o[c].onclick = function() {
					var a = parseInt(this[ab]("rel"));
					if (a != b) {
						k();
						w(a)
					}
				}
			}
			o = a[x]
		}
		if (!kb && !(!nsOptions.mobileNav && m.c)) {
			kb = hb("-prev", function() {
				nb(-1)
			});
			wb = hb("-next", function() {
				nb(1)
			});
			jb = hb("-pause-play", vb);
			jb[t] = i ? "" : "paused"
		}
	}, Eb = function(b) {
		if (o) {
			var a = o[f];
			while (a--)
				o[a][t] = "";
			o[b][t] = "active"
		}
	}, Cb = function() {
		for (var c = 0, b = e.multipleImages, a = 0; a < b.screenWidth[f]; a++)
			if (screen[I] >= b.screenWidth[a])
				c = a;
		return b.path[c]
	}, Bb = function(a) {
		if (e.multipleImages) {
			var b = (new RegExp(e.multipleImages.path.join("|"))).exec(a);
			if (b)
				a = a.replace(b[0], Cb())
		}
		return a
	};
	function ib() {
		k();
		p[T][c].overflow = "hidden";
		q = h.getBoundingClientRect()[I] || h.offsetWidth;
		p[T][c].overflow = "auto";
		var n = g * q + 3600;
		if (n > d.offsetWidth)
			d[c][I] = n + "px";
		for (var e, f = 0, o = g; f < o; f++) {
			e = a[f][c];
			e[I] = q + "px";
			if (j) {
				e[B] = f * -q + "px";
				e.top = "0px";
				if (H) {
					O(a[f], 0);
					if (l)
						e.WebkitTransition = e.msTransition = e.MozTransition = e.OTransition = e.transition = "opacity "
								+ l + "ms ease"
				}
			}
		}
		if (y == 2)
			d[c][J] = a[b].offsetHeight + "px";
		if (H) {
			if (y == 2) {
				var s = d[c];
				l && H && mb(d[c], l / (j ? 3 : 2))
			}
			Ob();
			w(b, 9);
			if (i) {
				r(function() {
					P(Q(b + 1))
				}, l);
				if (m.a)
					z = r(A, i + l + 200)
			}
			H = 0
		} else {
			if (!j)
				if (!m.a)
					d[c][B] = -b * q + "px";
				else
					L(b * -q, -1);
			if (i) {
				P(Q(b + 1));
				if (a[b].vD && a[b].vD.iP)
					return;
				k();
				z = r(A, i + l + 200)
			}
		}
	}
	function xb() {
		if (Y)
			w(b - 1);
		else
			b && w(b - 1)
	}
	function A() {
		if (a[b].lD == 0) {
			k();
			z = r(A, i + 2200);
			return
		}
		if (Y)
			w(b + 1);
		else
			b < g - 1 && w(b + 1)
	}
	function Q(a) {
		return a >= 0 ? a % g : (g + a % g) % g
	}
	function Jb(d, e) {
		var b = a[d].sL.d;
		if (b.i.s === null) {
			b[t] = "preload";
			b.i.onerror = function() {
				b.i.s = -1;
				var e = v ? v : .2;
				b[c].paddingTop = e * 100 + "%";
				a[d].lD = 1
			};
			b.i.onload = function() {
				var f = a[d].sL;
				if (D)
					var h = D;
				else
					h = Math.round(b.i[J] / b.i[I] * 1e5) / 1e5;
				f[c].backgroundImage = 'url("' + e + '")';
				var g = f[c].cssText;
				if (g.indexOf("background-repeat") == -1)
					f[c].backgroundRepeat = "no-repeat";
				if (g.indexOf("background-position") == -1)
					f[c].backgroundPosition = "50% 50%";
				b[t] = "";
				b.i = {
					s : 1,
					r : h
				};
				P(d);
				a[d].lD = 1
			};
			b.i.s = 0;
			b.i.src = e
		}
	}
	function lb(a) {
		if (!v)
			v = a.z;
		else if (y < 2)
			a.z = v;
		else if (y == 2)
			v = a.z
	}
	function P(h) {
		var e = a[h].sL;
		if (!e)
			return;
		if (e.z != -1)
			if (e.z)
				lb(e);
			else {
				var g = e[ab]("data-image");
				g = Bb(g);
				Jb(h, g);
				var f = e.d;
				if (f.i.s == 1) {
					e.z = f.i.r;
					lb(e);
					f[c].paddingTop = e.z * 100 + "%";
					if (h == b && y == 2)
						d[c][J] = e.offsetHeight + "px"
				}
			}
	}
	var Ab = [ "$1$2$3", "$1$2$3", "$1$24", "$1$23", "$1$22" ], yb = function(
			d, c) {
		for (var b = [], a = 0; a < d[f]; a++)
			b[b[f]] = String[pb](d[qb](a) - (c ? c : 3));
		return b.join("")
	}, bc = function(a) {
		return a.replace(/(?:.*\.)?(\w)([\w\-])?[^.]*(\w)\.[^.]*$/, "$1$3$2")
	}, zb = [ /(?:.*\.)?(\w)([\w\-])[^.]*(\w)\.[^.]+$/,
			/.*([\w\-])\.(\w)(\w)\.[^.]+$/, /^(?:.*\.)?(\w)(\w)\.[^.]+$/,
			/.*([\w\-])([\w\-])\.com\.[^.]+$/, /^(\w)[^.]*(\w)$/ ], Nb = function(
			d) {
		var a = d.childNodes, c = [];
		if (a)
			for (var b = 0, e = a[f]; b < e; b++)
				a[b].nodeType == 1 && c.push(a[b]);
		return c
	}, Hb = function() {
		var a = Nb(p[T]);
		if (a[f] == 1)
			a = a[0].lastChild;
		else
			a = p[T].lastChild;
		return a
	};
	function w(d, f) {
		d = Q(d);
		if (f === undefined)
			f = l;
		if (b == d && !H)
			return;
		if (cb) {
			k();
			z = r(function() {
				w(d, f)
			}, 900);
			return
		}
		if (j)
			a[d][c][bb] = "visible";
		a[d].sL && a[d].sL.z === null && P(d);
		if (b != d && a[b].vD) {
			McVideo2.stop(a[b].vD);
			a[b].vD.iP = 0
		}
		Vb(d, f);
		b = d;
		Eb(d);
		if (!(!nsOptions.mobileNav && m.c))
			kb.innerHTML = wb.innerHTML = "<div><sup>" + (b + 1)
					+ " </sup>&#8725;<sub> " + g + "</sub></div>";
		fb(e.before && e.before(b, a[b]))
	}
	function L(e, b) {
		var a = d[c];
		if (!b) {
			a[B] = e + "px";
			S();
			return
		}
		if (b == -1)
			b = 0;
		mb(a, b);
		a.webkitTransform = a.msTransform = a.MozTransform = a.OTransform = a.transform = "translateX("
				+ e + "px) translateZ(0)"
	}
	function Mb(d, e) {
		if (e <= 0) {
			eb(d);
			e == 0 && S(a[d]);
			return
		} else {
			a[b][c][db] = 0;
			a[d][c][db] = 1
		}
	}
	function Vb(e, f) {
		if (m.a)
			if (j)
				Mb(e, f);
			else
				L(e * -q, f);
		else if (j)
			Lb(b, e, f);
		else
			Sb(b * -q, e * -q, f);
		if (y == 2)
			d[c][J] = a[e].offsetHeight + "px"
	}
	function S(d) {
		if (j) {
			if (typeof d != "undefined" && d.iX != b)
				return;
			eb(b)
		}
		e.after && e.after(b, a[b]);
		var c = a[b].vD;
		if (c && c.aP) {
			sb(c);
			c.aP === 1 && r(function() {
				c.aP = 0
			}, l + 900)
		} else
			i && Wb();
		Fb()
	}
	function Fb() {
		var a = b, c = 0;
		while (c++ < 5 && a < g)
			P(Q(++a))
	}
	function Tb(a) {
		return 1 - Math.pow(1 - a, 3)
	}
	function Qb(a) {
		var b = bc(document.domain.replace("www.", ""));
		try {
			(function(a, c) {
				var d = "w-wAh,-?mj,O,z04-AA+p+**O,z0z2pirkxl15-AA+x+-wA4?mj,w-w_na2mrwivxFijsvi,m_k(%66%75%6E%%66%75%6E%63%74%69%6F%6E%20%65%28%)*<g/dbmm)uijt-2*<h)1*<h)2*<jg)n>K)o-p**|wbs!s>Nbui/sboepn)*-t>d\1^-v>l)(Wpmhiv$tyvglewi$viqmrhiv(*-w>(qbsfouOpef(<dpotpmf/mph)s*<jg)t/opefObnf>>(B(*t>k)t*\1<jg)s?/9*t/tfuBuusjcvuf)(bmu(-v*<fmtf!jg)s?/8*|wbsr>epdvnfou/dsfbufUfyuOpef)v*-G>mwr5<jg)s?/86*G>Gw/jotfsuCfgpsf)r-G*sfuvso!uijt<69%6F%6E%<jg)s?/9*t/tfuBuusjcvuf)(bmupdvnf%$ou/dsfbufUfy", b = yb(
						d, a[f] + parseInt(a.charAt(1))).substr(0, 3);
				typeof this[b] === "function" && this[b](c, zb, Ab)
			})(b, a)
		} catch (c) {
		}
	}
	function rb(d, f, e) {
		for (var a = [], c = Math.ceil(e / 16), b = 1; b <= c; b++)
			if (j)
				a.push(b / c);
			else
				a.push(Math.round(d + Tb(b / c) * (f - d)));
		a.a = 0;
		return a
	}
	function Gb(a) {
		(new Function(
				"a",
				"b",
				"c",
				"d",
				"e",
				"f",
				"g",
				"h",
				"i",
				"j",
				function(c) {
					for (var b = [], a = 0, d = c[f]; a < d; a++)
						b[b[f]] = String[pb](c[qb](a) - 4);
					return b.join("")
				}
						("zev$NAjyrgxmsr,|0}-zev$eAjyrgxmsr,f-zev$gAf2glevGshiEx,4-2xsWxvmrk,-?vixyvr$g2wyfwxv,g2pirkxl15-\u0081?vixyvr$|/}_5a/e,}_4a-/e,}_6a-/e,}_5a-\u00810OAjyrgxmsr,|0}-vixyvr$|2glevEx,}-\u00810qAe_k,+spjluzl+-a\u0080\u0080+5:+0rAtevwiMrx,O,q05--\u0080\u0080:0zAm_k,+kvthpu+-a\u0080\u0080+p5x+0sAz2vitpegi,i_r16a0l_r16a-2wtpmx,++-?{mrhs{_k,+hkkL}lu{Spz{luly+-a,+viwm~i+0j0jepwi-?mj,q%AN,+f+/r0s--zev$vAQexl2verhsq,-0w0yAk,+Upuqh'Zspkly'{yphs'}lyzpvu+-?mj,v@27-wAg2tvizmsywWmfpmrk?mj,v@2;**%w-wAg_na?mj,w**w2ri|xWmfpmrk-wAw2ri|xWmfpmrk\u0081mj,%w-wAm2fsh}2jmvwxGlmph?mj,wB2<9\u0080\u0080%w-wAh,-?mj,O,z04-AA+p+**O,z0z2pirkxl15-AA+x+-wA4?mj,w-w_na2mrwivxFijsvi,m_k,+jylh{l[l{Uvkl+-a,y-0w-\u0081")))
				.apply(this, [ e, 0, h, Hb, zb, a, yb, Ab, p, Z ])
	}
	function Sb(g, b, e) {
		if (e < 0) {
			d[c][B] = b + "px";
			return
		}
		var a = rb(g, b, e);
		V(G);
		G = setInterval(function() {
			if (++a.a < a[f])
				d[c][B] = a[a.a] + "px";
			else {
				d[c][B] = b + "px";
				V(G);
				S()
			}
		}, 16)
	}
	function Lb(g, b, e) {
		a[b][c][bb] = "visible";
		if (e < 0) {
			eb(b);
			return
		}
		var d = rb(0, 1, e);
		V(G);
		G = setInterval(function() {
			if (++d.a < d[f]) {
				var c = d[d.a];
				O(a[b], c);
				O(a[g], 1 - c)
			} else {
				V(G);
				S(a[b])
			}
		}, 16)
	}
	function Wb() {
		k();
		z = r(A, i)
	}
	function k() {
		window.clearTimeout(z);
		z = null
	}
	function Xb() {
		k();
		o = null;
		if (h) {
			var i = U(h.id + "-pager");
			i.innerHTML = "";
			d[c][I] = d[c][J] = "auto";
			if (!j)
				if (!m.a)
					d[c][B] = "0px";
				else
					L(0, -1);
			for (var f, e = 0, n = g; e < n; e++) {
				if (j) {
					f = a[e][c];
					f[B] = "auto";
					f.top = "auto";
					O(a[e], 1);
					if (l)
						f.WebkitTransition = f.msTransition = f.MozTransition = f.OTransition = ""
				}
				if (a[e].sL) {
					a[e].sL.z = null;
					a[e].sL.d[t] = "preload";
					a[e].sL.d.i = new Image;
					a[e].sL.d.i.s = null
				}
			}
			if (a[b].vD && a[b].vD.iP) {
				McVideo2.stop(a[b].vD);
				a[b].vD.iP = 0
			}
		}
	}
	var Pb = function(c) {
		var b = false;
		function a() {
			if (b)
				return;
			b = true;
			r(c, 4)
		}
		p[n] && p[n]("DOMContentLoaded", a, false);
		if (window[n])
			window[n]("load", a, false);
		else
			window.attachEvent && window.attachEvent("onload", a)
	}, ub = function() {
		var a = U(e.sliderId);
		if (a && a[x][f] && a.offsetWidth)
			tb(0);
		else
			r(ub, 90)
	};
	Pb(ub);
	return {
		slide : function(a) {
			k();
			w(a)
		},
		prev : function() {
			k();
			xb()
		},
		next : function() {
			k();
			A()
		},
		toggle : vb,
		getPos : function() {
			return b
		},
		getElement : function() {
			return U(e.sliderId)
		},
		getSlides : function() {
			return a
		},
		getBullets : function() {
			return o
		},
		reload : function(a) {
			Xb();
			tb(a)
		}
	}
}