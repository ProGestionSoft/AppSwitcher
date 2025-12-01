var Bi = Object.defineProperty;
var Ki = (e, t, n) => t in e ? Bi(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var yo = (e, t, n) => Ki(e, typeof t != "symbol" ? t + "" : t, n);
/**
* @vue/shared v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function at(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const te = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, Ut = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], ge = () => {
}, br = () => !1, On = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Gn = (e) => e.startsWith("onUpdate:"), ae = Object.assign, Xo = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Wi = Object.prototype.hasOwnProperty, z = (e, t) => Wi.call(e, t), I = Array.isArray, St = (e) => Vn(e) === "[object Map]", Jt = (e) => Vn(e) === "[object Set]", Os = (e) => Vn(e) === "[object Date]", k = (e) => typeof e == "function", le = (e) => typeof e == "string", Xe = (e) => typeof e == "symbol", G = (e) => e !== null && typeof e == "object", Zo = (e) => (G(e) || k(e)) && k(e.then) && k(e.catch), Er = Object.prototype.toString, Vn = (e) => Er.call(e), es = (e) => Vn(e).slice(8, -1), yr = (e) => Vn(e) === "[object Object]", ts = (e) => le(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, cn = /* @__PURE__ */ at(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), zi = /* @__PURE__ */ at(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), lo = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Gi = /-\w/g, $e = lo(
  (e) => e.replace(Gi, (t) => t.slice(1).toUpperCase())
), qi = /\B([A-Z])/g, Et = lo(
  (e) => e.replace(qi, "-$1").toLowerCase()
), co = lo((e) => e.charAt(0).toUpperCase() + e.slice(1)), Vt = lo(
  (e) => e ? `on${co(e)}` : ""
), _t = (e, t) => !Object.is(e, t), jt = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, qn = (e, t, n, o = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: o,
    value: n
  });
}, ao = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Ji = (e) => {
  const t = le(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Vs;
const Cn = () => Vs || (Vs = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function lt(e) {
  if (I(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], s = le(o) ? Zi(o) : lt(o);
      if (s)
        for (const r in s)
          t[r] = s[r];
    }
    return t;
  } else if (le(e) || G(e))
    return e;
}
const Yi = /;(?![^(]*\))/g, Qi = /:([^]+)/, Xi = /\/\*[^]*?\*\//g;
function Zi(e) {
  const t = {};
  return e.replace(Xi, "").split(Yi).forEach((n) => {
    if (n) {
      const o = n.split(Qi);
      o.length > 1 && (t[o[0].trim()] = o[1].trim());
    }
  }), t;
}
function Bt(e) {
  let t = "";
  if (le(e))
    t = e;
  else if (I(e))
    for (let n = 0; n < e.length; n++) {
      const o = Bt(e[n]);
      o && (t += o + " ");
    }
  else if (G(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const el = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", tl = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", nl = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", ol = /* @__PURE__ */ at(el), sl = /* @__PURE__ */ at(tl), rl = /* @__PURE__ */ at(nl), il = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", ll = /* @__PURE__ */ at(il);
function Nr(e) {
  return !!e || e === "";
}
function cl(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let o = 0; n && o < e.length; o++)
    n = Dn(e[o], t[o]);
  return n;
}
function Dn(e, t) {
  if (e === t) return !0;
  let n = Os(e), o = Os(t);
  if (n || o)
    return n && o ? e.getTime() === t.getTime() : !1;
  if (n = Xe(e), o = Xe(t), n || o)
    return e === t;
  if (n = I(e), o = I(t), n || o)
    return n && o ? cl(e, t) : !1;
  if (n = G(e), o = G(t), n || o) {
    if (!n || !o)
      return !1;
    const s = Object.keys(e).length, r = Object.keys(t).length;
    if (s !== r)
      return !1;
    for (const i in e) {
      const l = e.hasOwnProperty(i), a = t.hasOwnProperty(i);
      if (l && !a || !l && a || !Dn(e[i], t[i]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function ns(e, t) {
  return e.findIndex((n) => Dn(n, t));
}
const wr = (e) => !!(e && e.__v_isRef === !0), xe = (e) => le(e) ? e : e == null ? "" : I(e) || G(e) && (e.toString === Er || !k(e.toString)) ? wr(e) ? xe(e.value) : JSON.stringify(e, Or, 2) : String(e), Or = (e, t) => wr(t) ? Or(e, t.value) : St(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [o, s], r) => (n[No(o, r) + " =>"] = s, n),
    {}
  )
} : Jt(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => No(n))
} : Xe(t) ? No(t) : G(t) && !I(t) && !yr(t) ? String(t) : t, No = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Xe(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Me(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let Oe;
class al {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = Oe, !t && Oe && (this.index = (Oe.scopes || (Oe.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].pause();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].resume();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = Oe;
      try {
        return Oe = this, t();
      } finally {
        Oe = n;
      }
    } else process.env.NODE_ENV !== "production" && Me("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Oe, Oe = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (Oe = this.prevScope, this.prevScope = void 0);
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let n, o;
      for (n = 0, o = this.effects.length; n < o; n++)
        this.effects[n].stop();
      for (this.effects.length = 0, n = 0, o = this.cleanups.length; n < o; n++)
        this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        for (n = 0, o = this.scopes.length; n < o; n++)
          this.scopes[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const s = this.parent.scopes.pop();
        s && s !== this && (this.parent.scopes[this.index] = s, s.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function ul() {
  return Oe;
}
let ee;
const wo = /* @__PURE__ */ new WeakSet();
class Vr {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Oe && Oe.active && Oe.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, wo.has(this) && (wo.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Dr(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Cs(this), Sr(this);
    const t = ee, n = Ie;
    ee = this, Ie = !0;
    try {
      return this.fn();
    } finally {
      process.env.NODE_ENV !== "production" && ee !== this && Me(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), xr(this), ee = t, Ie = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        rs(t);
      this.deps = this.depsTail = void 0, Cs(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? wo.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    ko(this) && this.run();
  }
  get dirty() {
    return ko(this);
  }
}
let Cr = 0, an, un;
function Dr(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = un, un = e;
    return;
  }
  e.next = an, an = e;
}
function os() {
  Cr++;
}
function ss() {
  if (--Cr > 0)
    return;
  if (un) {
    let t = un;
    for (un = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; an; ) {
    let t = an;
    for (an = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (o) {
          e || (e = o);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function Sr(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function xr(e) {
  let t, n = e.depsTail, o = n;
  for (; o; ) {
    const s = o.prevDep;
    o.version === -1 ? (o === n && (n = s), rs(o), fl(o)) : t = o, o.dep.activeLink = o.prevActiveLink, o.prevActiveLink = void 0, o = s;
  }
  e.deps = t, e.depsTail = n;
}
function ko(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Tr(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Tr(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === gn) || (e.globalVersion = gn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !ko(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = ee, o = Ie;
  ee = e, Ie = !0;
  try {
    Sr(e);
    const s = e.fn(e._value);
    (t.version === 0 || _t(s, e._value)) && (e.flags |= 128, e._value = s, t.version++);
  } catch (s) {
    throw t.version++, s;
  } finally {
    ee = n, Ie = o, xr(e), e.flags &= -3;
  }
}
function rs(e, t = !1) {
  const { dep: n, prevSub: o, nextSub: s } = e;
  if (o && (o.nextSub = s, e.prevSub = void 0), s && (s.prevSub = o, e.nextSub = void 0), process.env.NODE_ENV !== "production" && n.subsHead === e && (n.subsHead = s), n.subs === e && (n.subs = o, !o && n.computed)) {
    n.computed.flags &= -5;
    for (let r = n.computed.deps; r; r = r.nextDep)
      rs(r, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function fl(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Ie = !0;
const Ar = [];
function Pe() {
  Ar.push(Ie), Ie = !1;
}
function ke() {
  const e = Ar.pop();
  Ie = e === void 0 ? !0 : e;
}
function Cs(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = ee;
    ee = void 0;
    try {
      t();
    } finally {
      ee = n;
    }
  }
}
let gn = 0;
class pl {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class is {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0, process.env.NODE_ENV !== "production" && (this.subsHead = void 0);
  }
  track(t) {
    if (!ee || !Ie || ee === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== ee)
      n = this.activeLink = new pl(ee, this), ee.deps ? (n.prevDep = ee.depsTail, ee.depsTail.nextDep = n, ee.depsTail = n) : ee.deps = ee.depsTail = n, $r(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const o = n.nextDep;
      o.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = o), n.prevDep = ee.depsTail, n.nextDep = void 0, ee.depsTail.nextDep = n, ee.depsTail = n, ee.deps === n && (ee.deps = o);
    }
    return process.env.NODE_ENV !== "production" && ee.onTrack && ee.onTrack(
      ae(
        {
          effect: ee
        },
        t
      )
    ), n;
  }
  trigger(t) {
    this.version++, gn++, this.notify(t);
  }
  notify(t) {
    os();
    try {
      if (process.env.NODE_ENV !== "production")
        for (let n = this.subsHead; n; n = n.nextSub)
          n.sub.onTrigger && !(n.sub.flags & 8) && n.sub.onTrigger(
            ae(
              {
                effect: n.sub
              },
              t
            )
          );
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      ss();
    }
  }
}
function $r(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let o = t.deps; o; o = o.nextDep)
        $r(o);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), process.env.NODE_ENV !== "production" && e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
  }
}
const Fo = /* @__PURE__ */ new WeakMap(), xt = Symbol(
  process.env.NODE_ENV !== "production" ? "Object iterate" : ""
), Ro = Symbol(
  process.env.NODE_ENV !== "production" ? "Map keys iterate" : ""
), mn = Symbol(
  process.env.NODE_ENV !== "production" ? "Array iterate" : ""
);
function he(e, t, n) {
  if (Ie && ee) {
    let o = Fo.get(e);
    o || Fo.set(e, o = /* @__PURE__ */ new Map());
    let s = o.get(n);
    s || (o.set(n, s = new is()), s.map = o, s.key = n), process.env.NODE_ENV !== "production" ? s.track({
      target: e,
      type: t,
      key: n
    }) : s.track();
  }
}
function qe(e, t, n, o, s, r) {
  const i = Fo.get(e);
  if (!i) {
    gn++;
    return;
  }
  const l = (a) => {
    a && (process.env.NODE_ENV !== "production" ? a.trigger({
      target: e,
      type: t,
      key: n,
      newValue: o,
      oldValue: s,
      oldTarget: r
    }) : a.trigger());
  };
  if (os(), t === "clear")
    i.forEach(l);
  else {
    const a = I(e), f = a && ts(n);
    if (a && n === "length") {
      const u = Number(o);
      i.forEach((p, g) => {
        (g === "length" || g === mn || !Xe(g) && g >= u) && l(p);
      });
    } else
      switch ((n !== void 0 || i.has(void 0)) && l(i.get(n)), f && l(i.get(mn)), t) {
        case "add":
          a ? f && l(i.get("length")) : (l(i.get(xt)), St(e) && l(i.get(Ro)));
          break;
        case "delete":
          a || (l(i.get(xt)), St(e) && l(i.get(Ro)));
          break;
        case "set":
          St(e) && l(i.get(xt));
          break;
      }
  }
  ss();
}
function Ft(e) {
  const t = j(e);
  return t === e ? t : (he(t, "iterate", mn), ye(e) ? t : t.map(Re));
}
function uo(e) {
  return he(e = j(e), "iterate", mn), e;
}
function dt(e, t) {
  return Fe(e) ? bt(e) ? zt(Re(t)) : zt(t) : Re(t);
}
const dl = {
  __proto__: null,
  [Symbol.iterator]() {
    return Oo(this, Symbol.iterator, (e) => dt(this, e));
  },
  concat(...e) {
    return Ft(this).concat(
      ...e.map((t) => I(t) ? Ft(t) : t)
    );
  },
  entries() {
    return Oo(this, "entries", (e) => (e[1] = dt(this, e[1]), e));
  },
  every(e, t) {
    return et(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return et(
      this,
      "filter",
      e,
      t,
      (n) => n.map((o) => dt(this, o)),
      arguments
    );
  },
  find(e, t) {
    return et(
      this,
      "find",
      e,
      t,
      (n) => dt(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return et(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return et(
      this,
      "findLast",
      e,
      t,
      (n) => dt(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return et(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return et(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Vo(this, "includes", e);
  },
  indexOf(...e) {
    return Vo(this, "indexOf", e);
  },
  join(e) {
    return Ft(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Vo(this, "lastIndexOf", e);
  },
  map(e, t) {
    return et(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return tn(this, "pop");
  },
  push(...e) {
    return tn(this, "push", e);
  },
  reduce(e, ...t) {
    return Ds(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Ds(this, "reduceRight", e, t);
  },
  shift() {
    return tn(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return et(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return tn(this, "splice", e);
  },
  toReversed() {
    return Ft(this).toReversed();
  },
  toSorted(e) {
    return Ft(this).toSorted(e);
  },
  toSpliced(...e) {
    return Ft(this).toSpliced(...e);
  },
  unshift(...e) {
    return tn(this, "unshift", e);
  },
  values() {
    return Oo(this, "values", (e) => dt(this, e));
  }
};
function Oo(e, t, n) {
  const o = uo(e), s = o[t]();
  return o !== e && !ye(e) && (s._next = s.next, s.next = () => {
    const r = s._next();
    return r.done || (r.value = n(r.value)), r;
  }), s;
}
const hl = Array.prototype;
function et(e, t, n, o, s, r) {
  const i = uo(e), l = i !== e && !ye(e), a = i[t];
  if (a !== hl[t]) {
    const p = a.apply(e, r);
    return l ? Re(p) : p;
  }
  let f = n;
  i !== e && (l ? f = function(p, g) {
    return n.call(this, dt(e, p), g, e);
  } : n.length > 2 && (f = function(p, g) {
    return n.call(this, p, g, e);
  }));
  const u = a.call(i, f, o);
  return l && s ? s(u) : u;
}
function Ds(e, t, n, o) {
  const s = uo(e);
  let r = n;
  return s !== e && (ye(e) ? n.length > 3 && (r = function(i, l, a) {
    return n.call(this, i, l, a, e);
  }) : r = function(i, l, a) {
    return n.call(this, i, dt(e, l), a, e);
  }), s[t](r, ...o);
}
function Vo(e, t, n) {
  const o = j(e);
  he(o, "iterate", mn);
  const s = o[t](...n);
  return (s === -1 || s === !1) && Jn(n[0]) ? (n[0] = j(n[0]), o[t](...n)) : s;
}
function tn(e, t, n = []) {
  Pe(), os();
  const o = j(e)[t].apply(e, n);
  return ss(), ke(), o;
}
const gl = /* @__PURE__ */ at("__proto__,__v_isRef,__isVue"), Ir = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Xe)
);
function ml(e) {
  Xe(e) || (e = String(e));
  const t = j(this);
  return he(t, "has", e), t.hasOwnProperty(e);
}
class Mr {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, o) {
    if (n === "__v_skip") return t.__v_skip;
    const s = this._isReadonly, r = this._isShallow;
    if (n === "__v_isReactive")
      return !s;
    if (n === "__v_isReadonly")
      return s;
    if (n === "__v_isShallow")
      return r;
    if (n === "__v_raw")
      return o === (s ? r ? jr : Lr : r ? Rr : Fr).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(o) ? t : void 0;
    const i = I(t);
    if (!s) {
      let a;
      if (i && (a = dl[n]))
        return a;
      if (n === "hasOwnProperty")
        return ml;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      fe(t) ? t : o
    );
    if ((Xe(n) ? Ir.has(n) : gl(n)) || (s || he(t, "get", n), r))
      return l;
    if (fe(l)) {
      const a = i && ts(n) ? l : l.value;
      return s && G(a) ? jo(a) : a;
    }
    return G(l) ? s ? jo(l) : ls(l) : l;
  }
}
class Pr extends Mr {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, o, s) {
    let r = t[n];
    const i = I(t) && ts(n);
    if (!this._isShallow) {
      const f = Fe(r);
      if (!ye(o) && !Fe(o) && (r = j(r), o = j(o)), !i && fe(r) && !fe(o))
        return f ? (process.env.NODE_ENV !== "production" && Me(
          `Set operation on key "${String(n)}" failed: target is readonly.`,
          t[n]
        ), !0) : (r.value = o, !0);
    }
    const l = i ? Number(n) < t.length : z(t, n), a = Reflect.set(
      t,
      n,
      o,
      fe(t) ? t : s
    );
    return t === j(s) && (l ? _t(o, r) && qe(t, "set", n, o, r) : qe(t, "add", n, o)), a;
  }
  deleteProperty(t, n) {
    const o = z(t, n), s = t[n], r = Reflect.deleteProperty(t, n);
    return r && o && qe(t, "delete", n, void 0, s), r;
  }
  has(t, n) {
    const o = Reflect.has(t, n);
    return (!Xe(n) || !Ir.has(n)) && he(t, "has", n), o;
  }
  ownKeys(t) {
    return he(
      t,
      "iterate",
      I(t) ? "length" : xt
    ), Reflect.ownKeys(t);
  }
}
class kr extends Mr {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return process.env.NODE_ENV !== "production" && Me(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return process.env.NODE_ENV !== "production" && Me(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const vl = /* @__PURE__ */ new Pr(), _l = /* @__PURE__ */ new kr(), bl = /* @__PURE__ */ new Pr(!0), El = /* @__PURE__ */ new kr(!0), Lo = (e) => e, Pn = (e) => Reflect.getPrototypeOf(e);
function yl(e, t, n) {
  return function(...o) {
    const s = this.__v_raw, r = j(s), i = St(r), l = e === "entries" || e === Symbol.iterator && i, a = e === "keys" && i, f = s[e](...o), u = n ? Lo : t ? zt : Re;
    return !t && he(
      r,
      "iterate",
      a ? Ro : xt
    ), {
      // iterator protocol
      next() {
        const { value: p, done: g } = f.next();
        return g ? { value: p, done: g } : {
          value: l ? [u(p[0]), u(p[1])] : u(p),
          done: g
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function kn(e) {
  return function(...t) {
    if (process.env.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      Me(
        `${co(e)} operation ${n}failed: target is readonly.`,
        j(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Nl(e, t) {
  const n = {
    get(s) {
      const r = this.__v_raw, i = j(r), l = j(s);
      e || (_t(s, l) && he(i, "get", s), he(i, "get", l));
      const { has: a } = Pn(i), f = t ? Lo : e ? zt : Re;
      if (a.call(i, s))
        return f(r.get(s));
      if (a.call(i, l))
        return f(r.get(l));
      r !== i && r.get(s);
    },
    get size() {
      const s = this.__v_raw;
      return !e && he(j(s), "iterate", xt), s.size;
    },
    has(s) {
      const r = this.__v_raw, i = j(r), l = j(s);
      return e || (_t(s, l) && he(i, "has", s), he(i, "has", l)), s === l ? r.has(s) : r.has(s) || r.has(l);
    },
    forEach(s, r) {
      const i = this, l = i.__v_raw, a = j(l), f = t ? Lo : e ? zt : Re;
      return !e && he(a, "iterate", xt), l.forEach((u, p) => s.call(r, f(u), f(p), i));
    }
  };
  return ae(
    n,
    e ? {
      add: kn("add"),
      set: kn("set"),
      delete: kn("delete"),
      clear: kn("clear")
    } : {
      add(s) {
        !t && !ye(s) && !Fe(s) && (s = j(s));
        const r = j(this);
        return Pn(r).has.call(r, s) || (r.add(s), qe(r, "add", s, s)), this;
      },
      set(s, r) {
        !t && !ye(r) && !Fe(r) && (r = j(r));
        const i = j(this), { has: l, get: a } = Pn(i);
        let f = l.call(i, s);
        f ? process.env.NODE_ENV !== "production" && Ss(i, l, s) : (s = j(s), f = l.call(i, s));
        const u = a.call(i, s);
        return i.set(s, r), f ? _t(r, u) && qe(i, "set", s, r, u) : qe(i, "add", s, r), this;
      },
      delete(s) {
        const r = j(this), { has: i, get: l } = Pn(r);
        let a = i.call(r, s);
        a ? process.env.NODE_ENV !== "production" && Ss(r, i, s) : (s = j(s), a = i.call(r, s));
        const f = l ? l.call(r, s) : void 0, u = r.delete(s);
        return a && qe(r, "delete", s, void 0, f), u;
      },
      clear() {
        const s = j(this), r = s.size !== 0, i = process.env.NODE_ENV !== "production" ? St(s) ? new Map(s) : new Set(s) : void 0, l = s.clear();
        return r && qe(
          s,
          "clear",
          void 0,
          void 0,
          i
        ), l;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((s) => {
    n[s] = yl(s, e, t);
  }), n;
}
function fo(e, t) {
  const n = Nl(e, t);
  return (o, s, r) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? o : Reflect.get(
    z(n, s) && s in o ? n : o,
    s,
    r
  );
}
const wl = {
  get: /* @__PURE__ */ fo(!1, !1)
}, Ol = {
  get: /* @__PURE__ */ fo(!1, !0)
}, Vl = {
  get: /* @__PURE__ */ fo(!0, !1)
}, Cl = {
  get: /* @__PURE__ */ fo(!0, !0)
};
function Ss(e, t, n) {
  const o = j(n);
  if (o !== n && t.call(e, o)) {
    const s = es(e);
    Me(
      `Reactive ${s} contains both the raw and reactive versions of the same object${s === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const Fr = /* @__PURE__ */ new WeakMap(), Rr = /* @__PURE__ */ new WeakMap(), Lr = /* @__PURE__ */ new WeakMap(), jr = /* @__PURE__ */ new WeakMap();
function Dl(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Sl(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Dl(es(e));
}
function ls(e) {
  return Fe(e) ? e : po(
    e,
    !1,
    vl,
    wl,
    Fr
  );
}
function xl(e) {
  return po(
    e,
    !1,
    bl,
    Ol,
    Rr
  );
}
function jo(e) {
  return po(
    e,
    !0,
    _l,
    Vl,
    Lr
  );
}
function Je(e) {
  return po(
    e,
    !0,
    El,
    Cl,
    jr
  );
}
function po(e, t, n, o, s) {
  if (!G(e))
    return process.env.NODE_ENV !== "production" && Me(
      `value cannot be made ${t ? "readonly" : "reactive"}: ${String(
        e
      )}`
    ), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const r = Sl(e);
  if (r === 0)
    return e;
  const i = s.get(e);
  if (i)
    return i;
  const l = new Proxy(
    e,
    r === 2 ? o : n
  );
  return s.set(e, l), l;
}
function bt(e) {
  return Fe(e) ? bt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Fe(e) {
  return !!(e && e.__v_isReadonly);
}
function ye(e) {
  return !!(e && e.__v_isShallow);
}
function Jn(e) {
  return e ? !!e.__v_raw : !1;
}
function j(e) {
  const t = e && e.__v_raw;
  return t ? j(t) : e;
}
function Tl(e) {
  return !z(e, "__v_skip") && Object.isExtensible(e) && qn(e, "__v_skip", !0), e;
}
const Re = (e) => G(e) ? ls(e) : e, zt = (e) => G(e) ? jo(e) : e;
function fe(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function We(e) {
  return Al(e, !1);
}
function Al(e, t) {
  return fe(e) ? e : new $l(e, t);
}
class $l {
  constructor(t, n) {
    this.dep = new is(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : j(t), this._value = n ? t : Re(t), this.__v_isShallow = n;
  }
  get value() {
    return process.env.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, o = this.__v_isShallow || ye(t) || Fe(t);
    t = o ? t : j(t), _t(t, n) && (this._rawValue = t, this._value = o ? t : Re(t), process.env.NODE_ENV !== "production" ? this.dep.trigger({
      target: this,
      type: "set",
      key: "value",
      newValue: t,
      oldValue: n
    }) : this.dep.trigger());
  }
}
function Il(e) {
  return fe(e) ? e.value : e;
}
const Ml = {
  get: (e, t, n) => t === "__v_raw" ? e : Il(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const s = e[t];
    return fe(s) && !fe(n) ? (s.value = n, !0) : Reflect.set(e, t, n, o);
  }
};
function Hr(e) {
  return bt(e) ? e : new Proxy(e, Ml);
}
class Pl {
  constructor(t, n, o) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new is(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = gn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = o;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    ee !== this)
      return Dr(this, !0), !0;
    process.env.NODE_ENV;
  }
  get value() {
    const t = process.env.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track();
    return Tr(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter ? this.setter(t) : process.env.NODE_ENV !== "production" && Me("Write operation failed: computed value is readonly");
  }
}
function kl(e, t, n = !1) {
  let o, s;
  k(e) ? o = e : (o = e.get, s = e.set);
  const r = new Pl(o, s, n);
  return process.env.NODE_ENV, r;
}
const Fn = {}, Yn = /* @__PURE__ */ new WeakMap();
let Ct;
function Fl(e, t = !1, n = Ct) {
  if (n) {
    let o = Yn.get(n);
    o || Yn.set(n, o = []), o.push(e);
  } else process.env.NODE_ENV !== "production" && !t && Me(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function Rl(e, t, n = te) {
  const { immediate: o, deep: s, once: r, scheduler: i, augmentJob: l, call: a } = n, f = ($) => {
    (n.onWarn || Me)(
      "Invalid watch source: ",
      $,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, u = ($) => s ? $ : ye($) || s === !1 || s === 0 ? it($, 1) : it($);
  let p, g, N, D, x = !1, ie = !1;
  if (fe(e) ? (g = () => e.value, x = ye(e)) : bt(e) ? (g = () => u(e), x = !0) : I(e) ? (ie = !0, x = e.some(($) => bt($) || ye($)), g = () => e.map(($) => {
    if (fe($))
      return $.value;
    if (bt($))
      return u($);
    if (k($))
      return a ? a($, 2) : $();
    process.env.NODE_ENV !== "production" && f($);
  })) : k(e) ? t ? g = a ? () => a(e, 2) : e : g = () => {
    if (N) {
      Pe();
      try {
        N();
      } finally {
        ke();
      }
    }
    const $ = Ct;
    Ct = p;
    try {
      return a ? a(e, 3, [D]) : e(D);
    } finally {
      Ct = $;
    }
  } : (g = ge, process.env.NODE_ENV !== "production" && f(e)), t && s) {
    const $ = g, Q = s === !0 ? 1 / 0 : s;
    g = () => it($(), Q);
  }
  const Y = ul(), H = () => {
    p.stop(), Y && Y.active && Xo(Y.effects, p);
  };
  if (r && t) {
    const $ = t;
    t = (...Q) => {
      $(...Q), H();
    };
  }
  let B = ie ? new Array(e.length).fill(Fn) : Fn;
  const ce = ($) => {
    if (!(!(p.flags & 1) || !p.dirty && !$))
      if (t) {
        const Q = p.run();
        if (s || x || (ie ? Q.some((pe, re) => _t(pe, B[re])) : _t(Q, B))) {
          N && N();
          const pe = Ct;
          Ct = p;
          try {
            const re = [
              Q,
              // pass undefined as the old value when it's changed for the first time
              B === Fn ? void 0 : ie && B[0] === Fn ? [] : B,
              D
            ];
            B = Q, a ? a(t, 3, re) : (
              // @ts-expect-error
              t(...re)
            );
          } finally {
            Ct = pe;
          }
        }
      } else
        p.run();
  };
  return l && l(ce), p = new Vr(g), p.scheduler = i ? () => i(ce, !1) : ce, D = ($) => Fl($, !1, p), N = p.onStop = () => {
    const $ = Yn.get(p);
    if ($) {
      if (a)
        a($, 4);
      else
        for (const Q of $) Q();
      Yn.delete(p);
    }
  }, process.env.NODE_ENV !== "production" && (p.onTrack = n.onTrack, p.onTrigger = n.onTrigger), t ? o ? ce(!0) : B = p.run() : i ? i(ce.bind(null, !0), !0) : p.run(), H.pause = p.pause.bind(p), H.resume = p.resume.bind(p), H.stop = H, H;
}
function it(e, t = 1 / 0, n) {
  if (t <= 0 || !G(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, fe(e))
    it(e.value, t, n);
  else if (I(e))
    for (let o = 0; o < e.length; o++)
      it(e[o], t, n);
  else if (Jt(e) || St(e))
    e.forEach((o) => {
      it(o, t, n);
    });
  else if (yr(e)) {
    for (const o in e)
      it(e[o], t, n);
    for (const o of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, o) && it(e[o], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const Tt = [];
function Ln(e) {
  Tt.push(e);
}
function jn() {
  Tt.pop();
}
let Co = !1;
function y(e, ...t) {
  if (Co) return;
  Co = !0, Pe();
  const n = Tt.length ? Tt[Tt.length - 1].component : null, o = n && n.appContext.config.warnHandler, s = Ll();
  if (o)
    Yt(
      o,
      n,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        e + t.map((r) => {
          var i, l;
          return (l = (i = r.toString) == null ? void 0 : i.call(r)) != null ? l : JSON.stringify(r);
        }).join(""),
        n && n.proxy,
        s.map(
          ({ vnode: r }) => `at <${In(n, r.type)}>`
        ).join(`
`),
        s
      ]
    );
  else {
    const r = [`[Vue warn]: ${e}`, ...t];
    s.length && r.push(`
`, ...jl(s)), console.warn(...r);
  }
  ke(), Co = !1;
}
function Ll() {
  let e = Tt[Tt.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const o = e.component && e.component.parent;
    e = o && o.vnode;
  }
  return t;
}
function jl(e) {
  const t = [];
  return e.forEach((n, o) => {
    t.push(...o === 0 ? [] : [`
`], ...Hl(n));
  }), t;
}
function Hl({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", o = e.component ? e.component.parent == null : !1, s = ` at <${In(
    e.component,
    e.type,
    o
  )}`, r = ">" + n;
  return e.props ? [s, ...Ul(e.props), r] : [s + r];
}
function Ul(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((o) => {
    t.push(...Ur(o, e[o]));
  }), n.length > 3 && t.push(" ..."), t;
}
function Ur(e, t, n) {
  return le(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : fe(t) ? (t = Ur(e, j(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : k(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = j(t), n ? t : [`${e}=`, t]);
}
function Bl(e, t) {
  process.env.NODE_ENV !== "production" && e !== void 0 && (typeof e != "number" ? y(`${t} is not a valid number - got ${JSON.stringify(e)}.`) : isNaN(e) && y(`${t} is NaN - the duration expression might be incorrect.`));
}
const cs = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  0: "setup function",
  1: "render function",
  2: "watcher getter",
  3: "watcher callback",
  4: "watcher cleanup function",
  5: "native event handler",
  6: "component event handler",
  7: "vnode hook",
  8: "directive hook",
  9: "transition hook",
  10: "app errorHandler",
  11: "app warnHandler",
  12: "ref function",
  13: "async component loader",
  14: "scheduler flush",
  15: "component update",
  16: "app unmount cleanup function"
};
function Yt(e, t, n, o) {
  try {
    return o ? e(...o) : e();
  } catch (s) {
    Sn(s, t, n);
  }
}
function Le(e, t, n, o) {
  if (k(e)) {
    const s = Yt(e, t, n, o);
    return s && Zo(s) && s.catch((r) => {
      Sn(r, t, n);
    }), s;
  }
  if (I(e)) {
    const s = [];
    for (let r = 0; r < e.length; r++)
      s.push(Le(e[r], t, n, o));
    return s;
  } else process.env.NODE_ENV !== "production" && y(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
  );
}
function Sn(e, t, n, o = !0) {
  const s = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: i } = t && t.appContext.config || te;
  if (t) {
    let l = t.parent;
    const a = t.proxy, f = process.env.NODE_ENV !== "production" ? cs[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const u = l.ec;
      if (u) {
        for (let p = 0; p < u.length; p++)
          if (u[p](e, a, f) === !1)
            return;
      }
      l = l.parent;
    }
    if (r) {
      Pe(), Yt(r, null, 10, [
        e,
        a,
        f
      ]), ke();
      return;
    }
  }
  Kl(e, n, s, o, i);
}
function Kl(e, t, n, o = !0, s = !1) {
  if (process.env.NODE_ENV !== "production") {
    const r = cs[t];
    if (n && Ln(n), y(`Unhandled error${r ? ` during execution of ${r}` : ""}`), n && jn(), o)
      throw e;
    console.error(e);
  } else {
    if (s)
      throw e;
    console.error(e);
  }
}
const be = [];
let ze = -1;
const Kt = [];
let ht = null, Ht = 0;
const Br = /* @__PURE__ */ Promise.resolve();
let Qn = null;
const Wl = 100;
function Kr(e) {
  const t = Qn || Br;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function zl(e) {
  let t = ze + 1, n = be.length;
  for (; t < n; ) {
    const o = t + n >>> 1, s = be[o], r = vn(s);
    r < e || r === e && s.flags & 2 ? t = o + 1 : n = o;
  }
  return t;
}
function ho(e) {
  if (!(e.flags & 1)) {
    const t = vn(e), n = be[be.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= vn(n) ? be.push(e) : be.splice(zl(t), 0, e), e.flags |= 1, Wr();
  }
}
function Wr() {
  Qn || (Qn = Br.then(qr));
}
function zr(e) {
  I(e) ? Kt.push(...e) : ht && e.id === -1 ? ht.splice(Ht + 1, 0, e) : e.flags & 1 || (Kt.push(e), e.flags |= 1), Wr();
}
function xs(e, t, n = ze + 1) {
  for (process.env.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()); n < be.length; n++) {
    const o = be[n];
    if (o && o.flags & 2) {
      if (e && o.id !== e.uid || process.env.NODE_ENV !== "production" && as(t, o))
        continue;
      be.splice(n, 1), n--, o.flags & 4 && (o.flags &= -2), o(), o.flags & 4 || (o.flags &= -2);
    }
  }
}
function Gr(e) {
  if (Kt.length) {
    const t = [...new Set(Kt)].sort(
      (n, o) => vn(n) - vn(o)
    );
    if (Kt.length = 0, ht) {
      ht.push(...t);
      return;
    }
    for (ht = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), Ht = 0; Ht < ht.length; Ht++) {
      const n = ht[Ht];
      process.env.NODE_ENV !== "production" && as(e, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    ht = null, Ht = 0;
  }
}
const vn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function qr(e) {
  process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const t = process.env.NODE_ENV !== "production" ? (n) => as(e, n) : ge;
  try {
    for (ze = 0; ze < be.length; ze++) {
      const n = be[ze];
      if (n && !(n.flags & 8)) {
        if (process.env.NODE_ENV !== "production" && t(n))
          continue;
        n.flags & 4 && (n.flags &= -2), Yt(
          n,
          n.i,
          n.i ? 15 : 14
        ), n.flags & 4 || (n.flags &= -2);
      }
    }
  } finally {
    for (; ze < be.length; ze++) {
      const n = be[ze];
      n && (n.flags &= -2);
    }
    ze = -1, be.length = 0, Gr(e), Qn = null, (be.length || Kt.length) && qr(e);
  }
}
function as(e, t) {
  const n = e.get(t) || 0;
  if (n > Wl) {
    const o = t.i, s = o && Mi(o.type);
    return Sn(
      `Maximum recursive updates exceeded${s ? ` in component <${s}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(t, n + 1), !1;
}
let Ye = !1;
const Hn = /* @__PURE__ */ new Map();
process.env.NODE_ENV !== "production" && (Cn().__VUE_HMR_RUNTIME__ = {
  createRecord: Do(Jr),
  rerender: Do(Jl),
  reload: Do(Yl)
});
const It = /* @__PURE__ */ new Map();
function Gl(e) {
  const t = e.type.__hmrId;
  let n = It.get(t);
  n || (Jr(t, e.type), n = It.get(t)), n.instances.add(e);
}
function ql(e) {
  It.get(e.type.__hmrId).instances.delete(e);
}
function Jr(e, t) {
  return It.has(e) ? !1 : (It.set(e, {
    initialDef: Xn(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function Xn(e) {
  return Pi(e) ? e.__vccOpts : e;
}
function Jl(e, t) {
  const n = It.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((o) => {
    t && (o.render = t, Xn(o.type).render = t), o.renderCache = [], Ye = !0, o.job.flags & 8 || o.update(), Ye = !1;
  }));
}
function Yl(e, t) {
  const n = It.get(e);
  if (!n) return;
  t = Xn(t), Ts(n.initialDef, t);
  const o = [...n.instances];
  for (let s = 0; s < o.length; s++) {
    const r = o[s], i = Xn(r.type);
    let l = Hn.get(i);
    l || (i !== n.initialDef && Ts(i, t), Hn.set(i, l = /* @__PURE__ */ new Set())), l.add(r), r.appContext.propsCache.delete(r.type), r.appContext.emitsCache.delete(r.type), r.appContext.optionsCache.delete(r.type), r.ceReload ? (l.add(r), r.ceReload(t.styles), l.delete(r)) : r.parent ? ho(() => {
      r.job.flags & 8 || (Ye = !0, r.parent.update(), Ye = !1, l.delete(r));
    }) : r.appContext.reload ? r.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), r.root.ce && r !== r.root && r.root.ce._removeChildStyle(i);
  }
  zr(() => {
    Hn.clear();
  });
}
function Ts(e, t) {
  ae(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function Do(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (o) {
      console.error(o), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let Ae, rn = [], Ho = !1;
function xn(e, ...t) {
  Ae ? Ae.emit(e, ...t) : Ho || rn.push({ event: e, args: t });
}
function us(e, t) {
  var n, o;
  Ae = e, Ae ? (Ae.enabled = !0, rn.forEach(({ event: s, args: r }) => Ae.emit(s, ...r)), rn = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((o = (n = window.navigator) == null ? void 0 : n.userAgent) != null && o.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((r) => {
    us(r, t);
  }), setTimeout(() => {
    Ae || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Ho = !0, rn = []);
  }, 3e3)) : (Ho = !0, rn = []);
}
function Ql(e, t) {
  xn("app:init", e, t, {
    Fragment: me,
    Text: An,
    Comment: ue,
    Static: Kn
  });
}
function Xl(e) {
  xn("app:unmount", e);
}
const Zl = /* @__PURE__ */ fs(
  "component:added"
  /* COMPONENT_ADDED */
), Yr = /* @__PURE__ */ fs(
  "component:updated"
  /* COMPONENT_UPDATED */
), ec = /* @__PURE__ */ fs(
  "component:removed"
  /* COMPONENT_REMOVED */
), tc = (e) => {
  Ae && typeof Ae.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !Ae.cleanupBuffer(e) && ec(e);
};
// @__NO_SIDE_EFFECTS__
function fs(e) {
  return (t) => {
    xn(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
const nc = /* @__PURE__ */ Qr(
  "perf:start"
  /* PERFORMANCE_START */
), oc = /* @__PURE__ */ Qr(
  "perf:end"
  /* PERFORMANCE_END */
);
function Qr(e) {
  return (t, n, o) => {
    xn(e, t.appContext.app, t.uid, t, n, o);
  };
}
function sc(e, t, n) {
  xn(
    "component:emit",
    e.appContext.app,
    e,
    t,
    n
  );
}
let Ee = null, Xr = null;
function Zn(e) {
  const t = Ee;
  return Ee = e, Xr = e && e.type.__scopeId || null, t;
}
function Zr(e, t = Ee, n) {
  if (!t || e._n)
    return e;
  const o = (...s) => {
    o._d && so(-1);
    const r = Zn(t);
    let i;
    try {
      i = e(...s);
    } finally {
      Zn(r), o._d && so(1);
    }
    return process.env.NODE_ENV !== "production" && Yr(t), i;
  };
  return o._n = !0, o._c = !0, o._d = !0, o;
}
function ei(e) {
  zi(e) && y("Do not use built-in directive ids as custom directive id: " + e);
}
function tt(e, t) {
  if (Ee === null)
    return process.env.NODE_ENV !== "production" && y("withDirectives can only be used inside render functions."), e;
  const n = vo(Ee), o = e.dirs || (e.dirs = []);
  for (let s = 0; s < t.length; s++) {
    let [r, i, l, a = te] = t[s];
    r && (k(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && it(i), o.push({
      dir: r,
      instance: n,
      value: i,
      oldValue: void 0,
      arg: l,
      modifiers: a
    }));
  }
  return e;
}
function yt(e, t, n, o) {
  const s = e.dirs, r = t && t.dirs;
  for (let i = 0; i < s.length; i++) {
    const l = s[i];
    r && (l.oldValue = r[i].value);
    let a = l.dir[o];
    a && (Pe(), Le(a, n, 8, [
      e.el,
      l,
      e,
      t
    ]), ke());
  }
}
const rc = Symbol("_vte"), ti = (e) => e.__isTeleport, st = Symbol("_leaveCb"), Rn = Symbol("_enterCb");
function ic() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return ps(() => {
    e.isMounted = !0;
  }), ai(() => {
    e.isUnmounting = !0;
  }), e;
}
const Se = [Function, Array], ni = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: Se,
  onEnter: Se,
  onAfterEnter: Se,
  onEnterCancelled: Se,
  // leave
  onBeforeLeave: Se,
  onLeave: Se,
  onAfterLeave: Se,
  onLeaveCancelled: Se,
  // appear
  onBeforeAppear: Se,
  onAppear: Se,
  onAfterAppear: Se,
  onAppearCancelled: Se
}, oi = (e) => {
  const t = e.subTree;
  return t.component ? oi(t.component) : t;
}, lc = {
  name: "BaseTransition",
  props: ni,
  setup(e, { slots: t }) {
    const n = bs(), o = ic();
    return () => {
      const s = t.default && ii(t.default(), !0);
      if (!s || !s.length)
        return;
      const r = si(s), i = j(e), { mode: l } = i;
      if (process.env.NODE_ENV !== "production" && l && l !== "in-out" && l !== "out-in" && l !== "default" && y(`invalid <transition> mode: ${l}`), o.isLeaving)
        return So(r);
      const a = As(r);
      if (!a)
        return So(r);
      let f = Uo(
        a,
        i,
        o,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (p) => f = p
      );
      a.type !== ue && _n(a, f);
      let u = n.subTree && As(n.subTree);
      if (u && u.type !== ue && !Dt(u, a) && oi(n).type !== ue) {
        let p = Uo(
          u,
          i,
          o,
          n
        );
        if (_n(u, p), l === "out-in" && a.type !== ue)
          return o.isLeaving = !0, p.afterLeave = () => {
            o.isLeaving = !1, n.job.flags & 8 || n.update(), delete p.afterLeave, u = void 0;
          }, So(r);
        l === "in-out" && a.type !== ue ? p.delayLeave = (g, N, D) => {
          const x = ri(
            o,
            u
          );
          x[String(u.key)] = u, g[st] = () => {
            N(), g[st] = void 0, delete f.delayedLeave, u = void 0;
          }, f.delayedLeave = () => {
            D(), delete f.delayedLeave, u = void 0;
          };
        } : u = void 0;
      } else u && (u = void 0);
      return r;
    };
  }
};
function si(e) {
  let t = e[0];
  if (e.length > 1) {
    let n = !1;
    for (const o of e)
      if (o.type !== ue) {
        if (process.env.NODE_ENV !== "production" && n) {
          y(
            "<transition> can only be used on a single element or component. Use <transition-group> for lists."
          );
          break;
        }
        if (t = o, n = !0, process.env.NODE_ENV === "production") break;
      }
  }
  return t;
}
const cc = lc;
function ri(e, t) {
  const { leavingVNodes: n } = e;
  let o = n.get(t.type);
  return o || (o = /* @__PURE__ */ Object.create(null), n.set(t.type, o)), o;
}
function Uo(e, t, n, o, s) {
  const {
    appear: r,
    mode: i,
    persisted: l = !1,
    onBeforeEnter: a,
    onEnter: f,
    onAfterEnter: u,
    onEnterCancelled: p,
    onBeforeLeave: g,
    onLeave: N,
    onAfterLeave: D,
    onLeaveCancelled: x,
    onBeforeAppear: ie,
    onAppear: Y,
    onAfterAppear: H,
    onAppearCancelled: B
  } = t, ce = String(e.key), $ = ri(n, e), Q = (F, q) => {
    F && Le(
      F,
      o,
      9,
      q
    );
  }, pe = (F, q) => {
    const Z = q[1];
    Q(F, q), I(F) ? F.every((S) => S.length <= 1) && Z() : F.length <= 1 && Z();
  }, re = {
    mode: i,
    persisted: l,
    beforeEnter(F) {
      let q = a;
      if (!n.isMounted)
        if (r)
          q = ie || a;
        else
          return;
      F[st] && F[st](
        !0
        /* cancelled */
      );
      const Z = $[ce];
      Z && Dt(e, Z) && Z.el[st] && Z.el[st](), Q(q, [F]);
    },
    enter(F) {
      let q = f, Z = u, S = p;
      if (!n.isMounted)
        if (r)
          q = Y || f, Z = H || u, S = B || p;
        else
          return;
      let A = !1;
      const T = F[Rn] = (X) => {
        A || (A = !0, X ? Q(S, [F]) : Q(Z, [F]), re.delayedLeave && re.delayedLeave(), F[Rn] = void 0);
      };
      q ? pe(q, [F, T]) : T();
    },
    leave(F, q) {
      const Z = String(e.key);
      if (F[Rn] && F[Rn](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return q();
      Q(g, [F]);
      let S = !1;
      const A = F[st] = (T) => {
        S || (S = !0, q(), T ? Q(x, [F]) : Q(D, [F]), F[st] = void 0, $[Z] === e && delete $[Z]);
      };
      $[Z] = e, N ? pe(N, [F, A]) : A();
    },
    clone(F) {
      const q = Uo(
        F,
        t,
        n,
        o,
        s
      );
      return s && s(q), q;
    }
  };
  return re;
}
function So(e) {
  if (Tn(e))
    return e = Ze(e), e.children = null, e;
}
function As(e) {
  if (!Tn(e))
    return ti(e.type) && e.children ? si(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && k(n.default))
      return n.default();
  }
}
function _n(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, _n(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function ii(e, t = !1, n) {
  let o = [], s = 0;
  for (let r = 0; r < e.length; r++) {
    let i = e[r];
    const l = n == null ? i.key : String(n) + String(i.key != null ? i.key : r);
    i.type === me ? (i.patchFlag & 128 && s++, o = o.concat(
      ii(i.children, t, l)
    )) : (t || i.type !== ue) && o.push(l != null ? Ze(i, { key: l }) : i);
  }
  if (s > 1)
    for (let r = 0; r < o.length; r++)
      o[r].patchFlag = -2;
  return o;
}
// @__NO_SIDE_EFFECTS__
function Mt(e, t) {
  return k(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    ae({ name: e.name }, t, { setup: e })
  ) : e;
}
function li(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const $s = /* @__PURE__ */ new WeakSet(), eo = /* @__PURE__ */ new WeakMap();
function fn(e, t, n, o, s = !1) {
  if (I(e)) {
    e.forEach(
      (x, ie) => fn(
        x,
        t && (I(t) ? t[ie] : t),
        n,
        o,
        s
      )
    );
    return;
  }
  if (pn(o) && !s) {
    o.shapeFlag & 512 && o.type.__asyncResolved && o.component.subTree.component && fn(e, t, n, o.component.subTree);
    return;
  }
  const r = o.shapeFlag & 4 ? vo(o.component) : o.el, i = s ? null : r, { i: l, r: a } = e;
  if (process.env.NODE_ENV !== "production" && !l) {
    y(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const f = t && t.r, u = l.refs === te ? l.refs = {} : l.refs, p = l.setupState, g = j(p), N = p === te ? br : (x) => process.env.NODE_ENV !== "production" && (z(g, x) && !fe(g[x]) && y(
    `Template ref "${x}" used on a non-ref value. It will not work in the production build.`
  ), $s.has(g[x])) ? !1 : z(g, x), D = (x) => process.env.NODE_ENV === "production" || !$s.has(x);
  if (f != null && f !== a) {
    if (Is(t), le(f))
      u[f] = null, N(f) && (p[f] = null);
    else if (fe(f)) {
      D(f) && (f.value = null);
      const x = t;
      x.k && (u[x.k] = null);
    }
  }
  if (k(a))
    Yt(a, l, 12, [i, u]);
  else {
    const x = le(a), ie = fe(a);
    if (x || ie) {
      const Y = () => {
        if (e.f) {
          const H = x ? N(a) ? p[a] : u[a] : D(a) || !e.k ? a.value : u[e.k];
          if (s)
            I(H) && Xo(H, r);
          else if (I(H))
            H.includes(r) || H.push(r);
          else if (x)
            u[a] = [r], N(a) && (p[a] = u[a]);
          else {
            const B = [r];
            D(a) && (a.value = B), e.k && (u[e.k] = B);
          }
        } else x ? (u[a] = i, N(a) && (p[a] = i)) : ie ? (D(a) && (a.value = i), e.k && (u[e.k] = i)) : process.env.NODE_ENV !== "production" && y("Invalid template ref type:", a, `(${typeof a})`);
      };
      if (i) {
        const H = () => {
          Y(), eo.delete(e);
        };
        H.id = -1, eo.set(e, H), Ve(H, n);
      } else
        Is(e), Y();
    } else process.env.NODE_ENV !== "production" && y("Invalid template ref type:", a, `(${typeof a})`);
  }
}
function Is(e) {
  const t = eo.get(e);
  t && (t.flags |= 8, eo.delete(e));
}
Cn().requestIdleCallback;
Cn().cancelIdleCallback;
const pn = (e) => !!e.type.__asyncLoader, Tn = (e) => e.type.__isKeepAlive;
function ac(e, t) {
  ci(e, "a", t);
}
function uc(e, t) {
  ci(e, "da", t);
}
function ci(e, t, n = de) {
  const o = e.__wdc || (e.__wdc = () => {
    let s = n;
    for (; s; ) {
      if (s.isDeactivated)
        return;
      s = s.parent;
    }
    return e();
  });
  if (go(t, o, n), n) {
    let s = n.parent;
    for (; s && s.parent; )
      Tn(s.parent.vnode) && fc(o, t, n, s), s = s.parent;
  }
}
function fc(e, t, n, o) {
  const s = go(
    t,
    e,
    o,
    !0
    /* prepend */
  );
  ds(() => {
    Xo(o[t], s);
  }, n);
}
function go(e, t, n = de, o = !1) {
  if (n) {
    const s = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...i) => {
      Pe();
      const l = $n(n), a = Le(t, n, e, i);
      return l(), ke(), a;
    });
    return o ? s.unshift(r) : s.push(r), r;
  } else if (process.env.NODE_ENV !== "production") {
    const s = Vt(cs[e].replace(/ hook$/, ""));
    y(
      `${s} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const ut = (e) => (t, n = de) => {
  (!yn || e === "sp") && go(e, (...o) => t(...o), n);
}, pc = ut("bm"), ps = ut("m"), dc = ut(
  "bu"
), hc = ut("u"), ai = ut(
  "bum"
), ds = ut("um"), gc = ut(
  "sp"
), mc = ut("rtg"), vc = ut("rtc");
function _c(e, t = de) {
  go("ec", e, t);
}
const bc = Symbol.for("v-ndc");
function bn(e, t, n, o) {
  let s;
  const r = n, i = I(e);
  if (i || le(e)) {
    const l = i && bt(e);
    let a = !1, f = !1;
    l && (a = !ye(e), f = Fe(e), e = uo(e)), s = new Array(e.length);
    for (let u = 0, p = e.length; u < p; u++)
      s[u] = t(
        a ? f ? zt(Re(e[u])) : Re(e[u]) : e[u],
        u,
        void 0,
        r
      );
  } else if (typeof e == "number") {
    process.env.NODE_ENV !== "production" && !Number.isInteger(e) && y(`The v-for range expect an integer value but got ${e}.`), s = new Array(e);
    for (let l = 0; l < e; l++)
      s[l] = t(l + 1, l, void 0, r);
  } else if (G(e))
    if (e[Symbol.iterator])
      s = Array.from(
        e,
        (l, a) => t(l, a, void 0, r)
      );
    else {
      const l = Object.keys(e);
      s = new Array(l.length);
      for (let a = 0, f = l.length; a < f; a++) {
        const u = l[a];
        s[a] = t(e[u], u, a, r);
      }
    }
  else
    s = [];
  return s;
}
const Bo = (e) => e ? $i(e) ? vo(e) : Bo(e.parent) : null, At = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ ae(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => process.env.NODE_ENV !== "production" ? Je(e.props) : e.props,
    $attrs: (e) => process.env.NODE_ENV !== "production" ? Je(e.attrs) : e.attrs,
    $slots: (e) => process.env.NODE_ENV !== "production" ? Je(e.slots) : e.slots,
    $refs: (e) => process.env.NODE_ENV !== "production" ? Je(e.refs) : e.refs,
    $parent: (e) => Bo(e.parent),
    $root: (e) => Bo(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => pi(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      ho(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Kr.bind(e.proxy)),
    $watch: (e) => Mc.bind(e)
  })
), hs = (e) => e === "_" || e === "$", xo = (e, t) => e !== te && !e.__isScriptSetup && z(e, t), ui = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: o, data: s, props: r, accessCache: i, type: l, appContext: a } = e;
    if (process.env.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    if (t[0] !== "$") {
      const g = i[t];
      if (g !== void 0)
        switch (g) {
          case 1:
            return o[t];
          case 2:
            return s[t];
          case 4:
            return n[t];
          case 3:
            return r[t];
        }
      else {
        if (xo(o, t))
          return i[t] = 1, o[t];
        if (s !== te && z(s, t))
          return i[t] = 2, s[t];
        if (z(r, t))
          return i[t] = 3, r[t];
        if (n !== te && z(n, t))
          return i[t] = 4, n[t];
        Ko && (i[t] = 0);
      }
    }
    const f = At[t];
    let u, p;
    if (f)
      return t === "$attrs" ? (he(e.attrs, "get", ""), process.env.NODE_ENV !== "production" && no()) : process.env.NODE_ENV !== "production" && t === "$slots" && he(e, "get", t), f(e);
    if (
      // css module (injected by vue-loader)
      (u = l.__cssModules) && (u = u[t])
    )
      return u;
    if (n !== te && z(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      p = a.config.globalProperties, z(p, t)
    )
      return p[t];
    process.env.NODE_ENV !== "production" && Ee && (!le(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (s !== te && hs(t[0]) && z(s, t) ? y(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === Ee && y(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: o, setupState: s, ctx: r } = e;
    return xo(s, t) ? (s[t] = n, !0) : process.env.NODE_ENV !== "production" && s.__isScriptSetup && z(s, t) ? (y(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : o !== te && z(o, t) ? (o[t] = n, !0) : z(e.props, t) ? (process.env.NODE_ENV !== "production" && y(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (process.env.NODE_ENV !== "production" && y(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (process.env.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(r, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : r[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: o, appContext: s, props: r, type: i }
  }, l) {
    let a;
    return !!(n[l] || e !== te && l[0] !== "$" && z(e, l) || xo(t, l) || z(r, l) || z(o, l) || z(At, l) || z(s.config.globalProperties, l) || (a = i.__cssModules) && a[l]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : z(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
process.env.NODE_ENV !== "production" && (ui.ownKeys = (e) => (y(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function Ec(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(At).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => At[n](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: ge
    });
  }), t;
}
function yc(e) {
  const {
    ctx: t,
    propsOptions: [n]
  } = e;
  n && Object.keys(n).forEach((o) => {
    Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[o],
      set: ge
    });
  });
}
function Nc(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(j(n)).forEach((o) => {
    if (!n.__isScriptSetup) {
      if (hs(o[0])) {
        y(
          `setup() return property ${JSON.stringify(
            o
          )} should not start with "$" or "_" which are reserved prefixes for Vue internals.`
        );
        return;
      }
      Object.defineProperty(t, o, {
        enumerable: !0,
        configurable: !0,
        get: () => n[o],
        set: ge
      });
    }
  });
}
function Ms(e) {
  return I(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function wc() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? y(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let Ko = !0;
function Oc(e) {
  const t = pi(e), n = e.proxy, o = e.ctx;
  Ko = !1, t.beforeCreate && Ps(t.beforeCreate, e, "bc");
  const {
    // state
    data: s,
    computed: r,
    methods: i,
    watch: l,
    provide: a,
    inject: f,
    // lifecycle
    created: u,
    beforeMount: p,
    mounted: g,
    beforeUpdate: N,
    updated: D,
    activated: x,
    deactivated: ie,
    beforeDestroy: Y,
    beforeUnmount: H,
    destroyed: B,
    unmounted: ce,
    render: $,
    renderTracked: Q,
    renderTriggered: pe,
    errorCaptured: re,
    serverPrefetch: F,
    // public API
    expose: q,
    inheritAttrs: Z,
    // assets
    components: S,
    directives: A,
    filters: T
  } = t, X = process.env.NODE_ENV !== "production" ? wc() : null;
  if (process.env.NODE_ENV !== "production") {
    const [L] = e.propsOptions;
    if (L)
      for (const K in L)
        X("Props", K);
  }
  if (f && Vc(f, o, X), i)
    for (const L in i) {
      const K = i[L];
      k(K) ? (process.env.NODE_ENV !== "production" ? Object.defineProperty(o, L, {
        value: K.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : o[L] = K.bind(n), process.env.NODE_ENV !== "production" && X("Methods", L)) : process.env.NODE_ENV !== "production" && y(
        `Method "${L}" has type "${typeof K}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (s) {
    process.env.NODE_ENV !== "production" && !k(s) && y(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const L = s.call(n, n);
    if (process.env.NODE_ENV !== "production" && Zo(L) && y(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !G(L))
      process.env.NODE_ENV !== "production" && y("data() should return an object.");
    else if (e.data = ls(L), process.env.NODE_ENV !== "production")
      for (const K in L)
        X("Data", K), hs(K[0]) || Object.defineProperty(o, K, {
          configurable: !0,
          enumerable: !0,
          get: () => L[K],
          set: ge
        });
  }
  if (Ko = !0, r)
    for (const L in r) {
      const K = r[L], je = k(K) ? K.bind(n, n) : k(K.get) ? K.get.bind(n, n) : ge;
      process.env.NODE_ENV !== "production" && je === ge && y(`Computed property "${L}" has no getter.`);
      const _o = !k(K) && k(K.set) ? K.set.bind(n) : process.env.NODE_ENV !== "production" ? () => {
        y(
          `Write operation failed: computed property "${L}" is readonly.`
        );
      } : ge, Qt = hn({
        get: je,
        set: _o
      });
      Object.defineProperty(o, L, {
        enumerable: !0,
        configurable: !0,
        get: () => Qt.value,
        set: (kt) => Qt.value = kt
      }), process.env.NODE_ENV !== "production" && X("Computed", L);
    }
  if (l)
    for (const L in l)
      fi(l[L], o, n, L);
  if (a) {
    const L = k(a) ? a.call(n) : a;
    Reflect.ownKeys(L).forEach((K) => {
      Ac(K, L[K]);
    });
  }
  u && Ps(u, e, "c");
  function oe(L, K) {
    I(K) ? K.forEach((je) => L(je.bind(n))) : K && L(K.bind(n));
  }
  if (oe(pc, p), oe(ps, g), oe(dc, N), oe(hc, D), oe(ac, x), oe(uc, ie), oe(_c, re), oe(vc, Q), oe(mc, pe), oe(ai, H), oe(ds, ce), oe(gc, F), I(q))
    if (q.length) {
      const L = e.exposed || (e.exposed = {});
      q.forEach((K) => {
        Object.defineProperty(L, K, {
          get: () => n[K],
          set: (je) => n[K] = je,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  $ && e.render === ge && (e.render = $), Z != null && (e.inheritAttrs = Z), S && (e.components = S), A && (e.directives = A), F && li(e);
}
function Vc(e, t, n = ge) {
  I(e) && (e = Wo(e));
  for (const o in e) {
    const s = e[o];
    let r;
    G(s) ? "default" in s ? r = Un(
      s.from || o,
      s.default,
      !0
    ) : r = Un(s.from || o) : r = Un(s), fe(r) ? Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (i) => r.value = i
    }) : t[o] = r, process.env.NODE_ENV !== "production" && n("Inject", o);
  }
}
function Ps(e, t, n) {
  Le(
    I(e) ? e.map((o) => o.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function fi(e, t, n, o) {
  let s = o.includes(".") ? gi(n, o) : () => n[o];
  if (le(e)) {
    const r = t[e];
    k(r) ? $t(s, r) : process.env.NODE_ENV !== "production" && y(`Invalid watch handler specified by key "${e}"`, r);
  } else if (k(e))
    $t(s, e.bind(n));
  else if (G(e))
    if (I(e))
      e.forEach((r) => fi(r, t, n, o));
    else {
      const r = k(e.handler) ? e.handler.bind(n) : t[e.handler];
      k(r) ? $t(s, r, e) : process.env.NODE_ENV !== "production" && y(`Invalid watch handler specified by key "${e.handler}"`, r);
    }
  else process.env.NODE_ENV !== "production" && y(`Invalid watch option: "${o}"`, e);
}
function pi(e) {
  const t = e.type, { mixins: n, extends: o } = t, {
    mixins: s,
    optionsCache: r,
    config: { optionMergeStrategies: i }
  } = e.appContext, l = r.get(t);
  let a;
  return l ? a = l : !s.length && !n && !o ? a = t : (a = {}, s.length && s.forEach(
    (f) => to(a, f, i, !0)
  ), to(a, t, i)), G(t) && r.set(t, a), a;
}
function to(e, t, n, o = !1) {
  const { mixins: s, extends: r } = t;
  r && to(e, r, n, !0), s && s.forEach(
    (i) => to(e, i, n, !0)
  );
  for (const i in t)
    if (o && i === "expose")
      process.env.NODE_ENV !== "production" && y(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const l = Cc[i] || n && n[i];
      e[i] = l ? l(e[i], t[i]) : t[i];
    }
  return e;
}
const Cc = {
  data: ks,
  props: Fs,
  emits: Fs,
  // objects
  methods: ln,
  computed: ln,
  // lifecycle
  beforeCreate: _e,
  created: _e,
  beforeMount: _e,
  mounted: _e,
  beforeUpdate: _e,
  updated: _e,
  beforeDestroy: _e,
  beforeUnmount: _e,
  destroyed: _e,
  unmounted: _e,
  activated: _e,
  deactivated: _e,
  errorCaptured: _e,
  serverPrefetch: _e,
  // assets
  components: ln,
  directives: ln,
  // watch
  watch: Sc,
  // provide / inject
  provide: ks,
  inject: Dc
};
function ks(e, t) {
  return t ? e ? function() {
    return ae(
      k(e) ? e.call(this, this) : e,
      k(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Dc(e, t) {
  return ln(Wo(e), Wo(t));
}
function Wo(e) {
  if (I(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function _e(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function ln(e, t) {
  return e ? ae(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Fs(e, t) {
  return e ? I(e) && I(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : ae(
    /* @__PURE__ */ Object.create(null),
    Ms(e),
    Ms(t ?? {})
  ) : t;
}
function Sc(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = ae(/* @__PURE__ */ Object.create(null), e);
  for (const o in t)
    n[o] = _e(e[o], t[o]);
  return n;
}
function di() {
  return {
    app: null,
    config: {
      isNativeTag: br,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let xc = 0;
function Tc(e, t) {
  return function(o, s = null) {
    k(o) || (o = ae({}, o)), s != null && !G(s) && (process.env.NODE_ENV !== "production" && y("root props passed to app.mount() must be an object."), s = null);
    const r = di(), i = /* @__PURE__ */ new WeakSet(), l = [];
    let a = !1;
    const f = r.app = {
      _uid: xc++,
      _component: o,
      _props: s,
      _container: null,
      _context: r,
      _instance: null,
      version: qs,
      get config() {
        return r.config;
      },
      set config(u) {
        process.env.NODE_ENV !== "production" && y(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(u, ...p) {
        return i.has(u) ? process.env.NODE_ENV !== "production" && y("Plugin has already been applied to target app.") : u && k(u.install) ? (i.add(u), u.install(f, ...p)) : k(u) ? (i.add(u), u(f, ...p)) : process.env.NODE_ENV !== "production" && y(
          'A plugin must either be a function or an object with an "install" function.'
        ), f;
      },
      mixin(u) {
        return r.mixins.includes(u) ? process.env.NODE_ENV !== "production" && y(
          "Mixin has already been applied to target app" + (u.name ? `: ${u.name}` : "")
        ) : r.mixins.push(u), f;
      },
      component(u, p) {
        return process.env.NODE_ENV !== "production" && Yo(u, r.config), p ? (process.env.NODE_ENV !== "production" && r.components[u] && y(`Component "${u}" has already been registered in target app.`), r.components[u] = p, f) : r.components[u];
      },
      directive(u, p) {
        return process.env.NODE_ENV !== "production" && ei(u), p ? (process.env.NODE_ENV !== "production" && r.directives[u] && y(`Directive "${u}" has already been registered in target app.`), r.directives[u] = p, f) : r.directives[u];
      },
      mount(u, p, g) {
        if (a)
          process.env.NODE_ENV !== "production" && y(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          process.env.NODE_ENV !== "production" && u.__vue_app__ && y(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const N = f._ceVNode || De(o, s);
          return N.appContext = r, g === !0 ? g = "svg" : g === !1 && (g = void 0), process.env.NODE_ENV !== "production" && (r.reload = () => {
            const D = Ze(N);
            D.el = null, e(D, u, g);
          }), e(N, u, g), a = !0, f._container = u, u.__vue_app__ = f, process.env.NODE_ENV !== "production" && (f._instance = N.component, Ql(f, qs)), vo(N.component);
        }
      },
      onUnmount(u) {
        process.env.NODE_ENV !== "production" && typeof u != "function" && y(
          `Expected function as first argument to app.onUnmount(), but got ${typeof u}`
        ), l.push(u);
      },
      unmount() {
        a ? (Le(
          l,
          f._instance,
          16
        ), e(null, f._container), process.env.NODE_ENV !== "production" && (f._instance = null, Xl(f)), delete f._container.__vue_app__) : process.env.NODE_ENV !== "production" && y("Cannot unmount an app that is not mounted.");
      },
      provide(u, p) {
        return process.env.NODE_ENV !== "production" && u in r.provides && (z(r.provides, u) ? y(
          `App already provides property with key "${String(u)}". It will be overwritten with the new value.`
        ) : y(
          `App already provides property with key "${String(u)}" inherited from its parent element. It will be overwritten with the new value.`
        )), r.provides[u] = p, f;
      },
      runWithContext(u) {
        const p = Wt;
        Wt = f;
        try {
          return u();
        } finally {
          Wt = p;
        }
      }
    };
    return f;
  };
}
let Wt = null;
function Ac(e, t) {
  if (process.env.NODE_ENV !== "production" && (!de || de.isMounted) && y("provide() can only be used inside setup()."), de) {
    let n = de.provides;
    const o = de.parent && de.parent.provides;
    o === n && (n = de.provides = Object.create(o)), n[e] = t;
  }
}
function Un(e, t, n = !1) {
  const o = bs();
  if (o || Wt) {
    let s = Wt ? Wt._context.provides : o ? o.parent == null || o.ce ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides : void 0;
    if (s && e in s)
      return s[e];
    if (arguments.length > 1)
      return n && k(t) ? t.call(o && o.proxy) : t;
    process.env.NODE_ENV !== "production" && y(`injection "${String(e)}" not found.`);
  } else process.env.NODE_ENV !== "production" && y("inject() can only be used inside setup() or functional components.");
}
const $c = Symbol.for("v-scx"), Ic = () => {
  {
    const e = Un($c);
    return e || process.env.NODE_ENV !== "production" && y(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function $t(e, t, n) {
  return process.env.NODE_ENV !== "production" && !k(t) && y(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), hi(e, t, n);
}
function hi(e, t, n = te) {
  const { immediate: o, deep: s, flush: r, once: i } = n;
  process.env.NODE_ENV !== "production" && !t && (o !== void 0 && y(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), s !== void 0 && y(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), i !== void 0 && y(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const l = ae({}, n);
  process.env.NODE_ENV !== "production" && (l.onWarn = y);
  const a = t && o || !t && r !== "post";
  let f;
  if (yn) {
    if (r === "sync") {
      const N = Ic();
      f = N.__watcherHandles || (N.__watcherHandles = []);
    } else if (!a) {
      const N = () => {
      };
      return N.stop = ge, N.resume = ge, N.pause = ge, N;
    }
  }
  const u = de;
  l.call = (N, D, x) => Le(N, u, D, x);
  let p = !1;
  r === "post" ? l.scheduler = (N) => {
    Ve(N, u && u.suspense);
  } : r !== "sync" && (p = !0, l.scheduler = (N, D) => {
    D ? N() : ho(N);
  }), l.augmentJob = (N) => {
    t && (N.flags |= 4), p && (N.flags |= 2, u && (N.id = u.uid, N.i = u));
  };
  const g = Rl(e, t, l);
  return yn && (f ? f.push(g) : a && g()), g;
}
function Mc(e, t, n) {
  const o = this.proxy, s = le(e) ? e.includes(".") ? gi(o, e) : () => o[e] : e.bind(o, o);
  let r;
  k(t) ? r = t : (r = t.handler, n = t);
  const i = $n(this), l = hi(s, r.bind(o), n);
  return i(), l;
}
function gi(e, t) {
  const n = t.split(".");
  return () => {
    let o = e;
    for (let s = 0; s < n.length && o; s++)
      o = o[n[s]];
    return o;
  };
}
const Pc = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${$e(t)}Modifiers`] || e[`${Et(t)}Modifiers`];
function kc(e, t, ...n) {
  if (e.isUnmounted) return;
  const o = e.vnode.props || te;
  if (process.env.NODE_ENV !== "production") {
    const {
      emitsOptions: u,
      propsOptions: [p]
    } = e;
    if (u)
      if (!(t in u))
        (!p || !(Vt($e(t)) in p)) && y(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${Vt($e(t))}" prop.`
        );
      else {
        const g = u[t];
        k(g) && (g(...n) || y(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let s = n;
  const r = t.startsWith("update:"), i = r && Pc(o, t.slice(7));
  if (i && (i.trim && (s = n.map((u) => le(u) ? u.trim() : u)), i.number && (s = n.map(ao))), process.env.NODE_ENV !== "production" && sc(e, t, s), process.env.NODE_ENV !== "production") {
    const u = t.toLowerCase();
    u !== t && o[Vt(u)] && y(
      `Event "${u}" is emitted in component ${In(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${Et(
        t
      )}" instead of "${t}".`
    );
  }
  let l, a = o[l = Vt(t)] || // also try camelCase event handler (#2249)
  o[l = Vt($e(t))];
  !a && r && (a = o[l = Vt(Et(t))]), a && Le(
    a,
    e,
    6,
    s
  );
  const f = o[l + "Once"];
  if (f) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, Le(
      f,
      e,
      6,
      s
    );
  }
}
const Fc = /* @__PURE__ */ new WeakMap();
function mi(e, t, n = !1) {
  const o = n ? Fc : t.emitsCache, s = o.get(e);
  if (s !== void 0)
    return s;
  const r = e.emits;
  let i = {}, l = !1;
  if (!k(e)) {
    const a = (f) => {
      const u = mi(f, t, !0);
      u && (l = !0, ae(i, u));
    };
    !n && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  return !r && !l ? (G(e) && o.set(e, null), null) : (I(r) ? r.forEach((a) => i[a] = null) : ae(i, r), G(e) && o.set(e, i), i);
}
function mo(e, t) {
  return !e || !On(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), z(e, t[0].toLowerCase() + t.slice(1)) || z(e, Et(t)) || z(e, t));
}
let zo = !1;
function no() {
  zo = !0;
}
function Rs(e) {
  const {
    type: t,
    vnode: n,
    proxy: o,
    withProxy: s,
    propsOptions: [r],
    slots: i,
    attrs: l,
    emit: a,
    render: f,
    renderCache: u,
    props: p,
    data: g,
    setupState: N,
    ctx: D,
    inheritAttrs: x
  } = e, ie = Zn(e);
  let Y, H;
  process.env.NODE_ENV !== "production" && (zo = !1);
  try {
    if (n.shapeFlag & 4) {
      const $ = s || o, Q = process.env.NODE_ENV !== "production" && N.__isScriptSetup ? new Proxy($, {
        get(pe, re, F) {
          return y(
            `Property '${String(
              re
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(pe, re, F);
        }
      }) : $;
      Y = Te(
        f.call(
          Q,
          $,
          u,
          process.env.NODE_ENV !== "production" ? Je(p) : p,
          N,
          g,
          D
        )
      ), H = l;
    } else {
      const $ = t;
      process.env.NODE_ENV !== "production" && l === p && no(), Y = Te(
        $.length > 1 ? $(
          process.env.NODE_ENV !== "production" ? Je(p) : p,
          process.env.NODE_ENV !== "production" ? {
            get attrs() {
              return no(), Je(l);
            },
            slots: i,
            emit: a
          } : { attrs: l, slots: i, emit: a }
        ) : $(
          process.env.NODE_ENV !== "production" ? Je(p) : p,
          null
        )
      ), H = t.props ? l : Rc(l);
    }
  } catch ($) {
    dn.length = 0, Sn($, e, 1), Y = De(ue);
  }
  let B = Y, ce;
  if (process.env.NODE_ENV !== "production" && Y.patchFlag > 0 && Y.patchFlag & 2048 && ([B, ce] = vi(Y)), H && x !== !1) {
    const $ = Object.keys(H), { shapeFlag: Q } = B;
    if ($.length) {
      if (Q & 7)
        r && $.some(Gn) && (H = Lc(
          H,
          r
        )), B = Ze(B, H, !1, !0);
      else if (process.env.NODE_ENV !== "production" && !zo && B.type !== ue) {
        const pe = Object.keys(l), re = [], F = [];
        for (let q = 0, Z = pe.length; q < Z; q++) {
          const S = pe[q];
          On(S) ? Gn(S) || re.push(S[2].toLowerCase() + S.slice(3)) : F.push(S);
        }
        F.length && y(
          `Extraneous non-props attributes (${F.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`
        ), re.length && y(
          `Extraneous non-emits event listeners (${re.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (process.env.NODE_ENV !== "production" && !Ls(B) && y(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), B = Ze(B, null, !1, !0), B.dirs = B.dirs ? B.dirs.concat(n.dirs) : n.dirs), n.transition && (process.env.NODE_ENV !== "production" && !Ls(B) && y(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), _n(B, n.transition)), process.env.NODE_ENV !== "production" && ce ? ce(B) : Y = B, Zn(ie), Y;
}
const vi = (e) => {
  const t = e.children, n = e.dynamicChildren, o = gs(t, !1);
  if (o) {
    if (process.env.NODE_ENV !== "production" && o.patchFlag > 0 && o.patchFlag & 2048)
      return vi(o);
  } else return [e, void 0];
  const s = t.indexOf(o), r = n ? n.indexOf(o) : -1, i = (l) => {
    t[s] = l, n && (r > -1 ? n[r] = l : l.patchFlag > 0 && (e.dynamicChildren = [...n, l]));
  };
  return [Te(o), i];
};
function gs(e, t = !0) {
  let n;
  for (let o = 0; o < e.length; o++) {
    const s = e[o];
    if (Gt(s)) {
      if (s.type !== ue || s.children === "v-if") {
        if (n)
          return;
        if (n = s, process.env.NODE_ENV !== "production" && t && n.patchFlag > 0 && n.patchFlag & 2048)
          return gs(n.children);
      }
    } else
      return;
  }
  return n;
}
const Rc = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || On(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Lc = (e, t) => {
  const n = {};
  for (const o in e)
    (!Gn(o) || !(o.slice(9) in t)) && (n[o] = e[o]);
  return n;
}, Ls = (e) => e.shapeFlag & 7 || e.type === ue;
function jc(e, t, n) {
  const { props: o, children: s, component: r } = e, { props: i, children: l, patchFlag: a } = t, f = r.emitsOptions;
  if (process.env.NODE_ENV !== "production" && (s || l) && Ye || t.dirs || t.transition)
    return !0;
  if (n && a >= 0) {
    if (a & 1024)
      return !0;
    if (a & 16)
      return o ? js(o, i, f) : !!i;
    if (a & 8) {
      const u = t.dynamicProps;
      for (let p = 0; p < u.length; p++) {
        const g = u[p];
        if (i[g] !== o[g] && !mo(f, g))
          return !0;
      }
    }
  } else
    return (s || l) && (!l || !l.$stable) ? !0 : o === i ? !1 : o ? i ? js(o, i, f) : !0 : !!i;
  return !1;
}
function js(e, t, n) {
  const o = Object.keys(t);
  if (o.length !== Object.keys(e).length)
    return !0;
  for (let s = 0; s < o.length; s++) {
    const r = o[s];
    if (t[r] !== e[r] && !mo(n, r))
      return !0;
  }
  return !1;
}
function Hc({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const o = t.subTree;
    if (o.suspense && o.suspense.activeBranch === e && (o.el = e.el), o === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const _i = {}, bi = () => Object.create(_i), Ei = (e) => Object.getPrototypeOf(e) === _i;
function Uc(e, t, n, o = !1) {
  const s = {}, r = bi();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), yi(e, t, s, r);
  for (const i in e.propsOptions[0])
    i in s || (s[i] = void 0);
  process.env.NODE_ENV !== "production" && wi(t || {}, s, e), n ? e.props = o ? s : xl(s) : e.type.props ? e.props = s : e.props = r, e.attrs = r;
}
function Bc(e) {
  for (; e; ) {
    if (e.type.__hmrId) return !0;
    e = e.parent;
  }
}
function Kc(e, t, n, o) {
  const {
    props: s,
    attrs: r,
    vnode: { patchFlag: i }
  } = e, l = j(s), [a] = e.propsOptions;
  let f = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(process.env.NODE_ENV !== "production" && Bc(e)) && (o || i > 0) && !(i & 16)
  ) {
    if (i & 8) {
      const u = e.vnode.dynamicProps;
      for (let p = 0; p < u.length; p++) {
        let g = u[p];
        if (mo(e.emitsOptions, g))
          continue;
        const N = t[g];
        if (a)
          if (z(r, g))
            N !== r[g] && (r[g] = N, f = !0);
          else {
            const D = $e(g);
            s[D] = Go(
              a,
              l,
              D,
              N,
              e,
              !1
            );
          }
        else
          N !== r[g] && (r[g] = N, f = !0);
      }
    }
  } else {
    yi(e, t, s, r) && (f = !0);
    let u;
    for (const p in l)
      (!t || // for camelCase
      !z(t, p) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = Et(p)) === p || !z(t, u))) && (a ? n && // for camelCase
      (n[p] !== void 0 || // for kebab-case
      n[u] !== void 0) && (s[p] = Go(
        a,
        l,
        p,
        void 0,
        e,
        !0
      )) : delete s[p]);
    if (r !== l)
      for (const p in r)
        (!t || !z(t, p)) && (delete r[p], f = !0);
  }
  f && qe(e.attrs, "set", ""), process.env.NODE_ENV !== "production" && wi(t || {}, s, e);
}
function yi(e, t, n, o) {
  const [s, r] = e.propsOptions;
  let i = !1, l;
  if (t)
    for (let a in t) {
      if (cn(a))
        continue;
      const f = t[a];
      let u;
      s && z(s, u = $e(a)) ? !r || !r.includes(u) ? n[u] = f : (l || (l = {}))[u] = f : mo(e.emitsOptions, a) || (!(a in o) || f !== o[a]) && (o[a] = f, i = !0);
    }
  if (r) {
    const a = j(n), f = l || te;
    for (let u = 0; u < r.length; u++) {
      const p = r[u];
      n[p] = Go(
        s,
        a,
        p,
        f[p],
        e,
        !z(f, p)
      );
    }
  }
  return i;
}
function Go(e, t, n, o, s, r) {
  const i = e[n];
  if (i != null) {
    const l = z(i, "default");
    if (l && o === void 0) {
      const a = i.default;
      if (i.type !== Function && !i.skipFactory && k(a)) {
        const { propsDefaults: f } = s;
        if (n in f)
          o = f[n];
        else {
          const u = $n(s);
          o = f[n] = a.call(
            null,
            t
          ), u();
        }
      } else
        o = a;
      s.ce && s.ce._setProp(n, o);
    }
    i[
      0
      /* shouldCast */
    ] && (r && !l ? o = !1 : i[
      1
      /* shouldCastTrue */
    ] && (o === "" || o === Et(n)) && (o = !0));
  }
  return o;
}
const Wc = /* @__PURE__ */ new WeakMap();
function Ni(e, t, n = !1) {
  const o = n ? Wc : t.propsCache, s = o.get(e);
  if (s)
    return s;
  const r = e.props, i = {}, l = [];
  let a = !1;
  if (!k(e)) {
    const u = (p) => {
      a = !0;
      const [g, N] = Ni(p, t, !0);
      ae(i, g), N && l.push(...N);
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!r && !a)
    return G(e) && o.set(e, Ut), Ut;
  if (I(r))
    for (let u = 0; u < r.length; u++) {
      process.env.NODE_ENV !== "production" && !le(r[u]) && y("props must be strings when using array syntax.", r[u]);
      const p = $e(r[u]);
      Hs(p) && (i[p] = te);
    }
  else if (r) {
    process.env.NODE_ENV !== "production" && !G(r) && y("invalid props options", r);
    for (const u in r) {
      const p = $e(u);
      if (Hs(p)) {
        const g = r[u], N = i[p] = I(g) || k(g) ? { type: g } : ae({}, g), D = N.type;
        let x = !1, ie = !0;
        if (I(D))
          for (let Y = 0; Y < D.length; ++Y) {
            const H = D[Y], B = k(H) && H.name;
            if (B === "Boolean") {
              x = !0;
              break;
            } else B === "String" && (ie = !1);
          }
        else
          x = k(D) && D.name === "Boolean";
        N[
          0
          /* shouldCast */
        ] = x, N[
          1
          /* shouldCastTrue */
        ] = ie, (x || z(N, "default")) && l.push(p);
      }
    }
  }
  const f = [i, l];
  return G(e) && o.set(e, f), f;
}
function Hs(e) {
  return e[0] !== "$" && !cn(e) ? !0 : (process.env.NODE_ENV !== "production" && y(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function zc(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function wi(e, t, n) {
  const o = j(t), s = n.propsOptions[0], r = Object.keys(e).map((i) => $e(i));
  for (const i in s) {
    let l = s[i];
    l != null && Gc(
      i,
      o[i],
      l,
      process.env.NODE_ENV !== "production" ? Je(o) : o,
      !r.includes(i)
    );
  }
}
function Gc(e, t, n, o, s) {
  const { type: r, required: i, validator: l, skipCheck: a } = n;
  if (i && s) {
    y('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !i)) {
    if (r != null && r !== !0 && !a) {
      let f = !1;
      const u = I(r) ? r : [r], p = [];
      for (let g = 0; g < u.length && !f; g++) {
        const { valid: N, expectedType: D } = Jc(t, u[g]);
        p.push(D || ""), f = N;
      }
      if (!f) {
        y(Yc(e, t, p));
        return;
      }
    }
    l && !l(t, o) && y('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const qc = /* @__PURE__ */ at(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function Jc(e, t) {
  let n;
  const o = zc(t);
  if (o === "null")
    n = e === null;
  else if (qc(o)) {
    const s = typeof e;
    n = s === o.toLowerCase(), !n && s === "object" && (n = e instanceof t);
  } else o === "Object" ? n = G(e) : o === "Array" ? n = I(e) : n = e instanceof t;
  return {
    valid: n,
    expectedType: o
  };
}
function Yc(e, t, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let o = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(co).join(" | ")}`;
  const s = n[0], r = es(t), i = Us(t, s), l = Us(t, r);
  return n.length === 1 && Bs(s) && !Qc(s, r) && (o += ` with value ${i}`), o += `, got ${r} `, Bs(r) && (o += `with value ${l}.`), o;
}
function Us(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function Bs(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function Qc(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const ms = (e) => e === "_" || e === "_ctx" || e === "$stable", vs = (e) => I(e) ? e.map(Te) : [Te(e)], Xc = (e, t, n) => {
  if (t._n)
    return t;
  const o = Zr((...s) => (process.env.NODE_ENV !== "production" && de && !(n === null && Ee) && !(n && n.root !== de.root) && y(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), vs(t(...s))), n);
  return o._c = !1, o;
}, Oi = (e, t, n) => {
  const o = e._ctx;
  for (const s in e) {
    if (ms(s)) continue;
    const r = e[s];
    if (k(r))
      t[s] = Xc(s, r, o);
    else if (r != null) {
      process.env.NODE_ENV !== "production" && y(
        `Non-function value encountered for slot "${s}". Prefer function slots for better performance.`
      );
      const i = vs(r);
      t[s] = () => i;
    }
  }
}, Vi = (e, t) => {
  process.env.NODE_ENV !== "production" && !Tn(e.vnode) && y(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = vs(t);
  e.slots.default = () => n;
}, qo = (e, t, n) => {
  for (const o in t)
    (n || !ms(o)) && (e[o] = t[o]);
}, Zc = (e, t, n) => {
  const o = e.slots = bi();
  if (e.vnode.shapeFlag & 32) {
    const s = t._;
    s ? (qo(o, t, n), n && qn(o, "_", s, !0)) : Oi(t, o);
  } else t && Vi(e, t);
}, ea = (e, t, n) => {
  const { vnode: o, slots: s } = e;
  let r = !0, i = te;
  if (o.shapeFlag & 32) {
    const l = t._;
    l ? process.env.NODE_ENV !== "production" && Ye ? (qo(s, t, n), qe(e, "set", "$slots")) : n && l === 1 ? r = !1 : qo(s, t, n) : (r = !t.$stable, Oi(t, s)), i = t;
  } else t && (Vi(e, t), i = { default: 1 });
  if (r)
    for (const l in s)
      !ms(l) && i[l] == null && delete s[l];
};
let nn, rt;
function Rt(e, t) {
  e.appContext.config.performance && oo() && rt.mark(`vue-${t}-${e.uid}`), process.env.NODE_ENV !== "production" && nc(e, t, oo() ? rt.now() : Date.now());
}
function Lt(e, t) {
  if (e.appContext.config.performance && oo()) {
    const n = `vue-${t}-${e.uid}`, o = n + ":end", s = `<${In(e, e.type)}> ${t}`;
    rt.mark(o), rt.measure(s, n, o), rt.clearMeasures(s), rt.clearMarks(n), rt.clearMarks(o);
  }
  process.env.NODE_ENV !== "production" && oc(e, t, oo() ? rt.now() : Date.now());
}
function oo() {
  return nn !== void 0 || (typeof window < "u" && window.performance ? (nn = !0, rt = window.performance) : nn = !1), nn;
}
function ta() {
  const e = [];
  if (process.env.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const Ve = ia;
function na(e) {
  return oa(e);
}
function oa(e, t) {
  ta();
  const n = Cn();
  n.__VUE__ = !0, process.env.NODE_ENV !== "production" && us(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const {
    insert: o,
    remove: s,
    patchProp: r,
    createElement: i,
    createText: l,
    createComment: a,
    setText: f,
    setElementText: u,
    parentNode: p,
    nextSibling: g,
    setScopeId: N = ge,
    insertStaticContent: D
  } = e, x = (c, d, h, E = null, v = null, _ = null, V = void 0, O = null, w = process.env.NODE_ENV !== "production" && Ye ? !1 : !!d.dynamicChildren) => {
    if (c === d)
      return;
    c && !Dt(c, d) && (E = Mn(c), ft(c, v, _, !0), c = null), d.patchFlag === -2 && (w = !1, d.dynamicChildren = null);
    const { type: b, ref: P, shapeFlag: C } = d;
    switch (b) {
      case An:
        ie(c, d, h, E);
        break;
      case ue:
        Y(c, d, h, E);
        break;
      case Kn:
        c == null ? H(d, h, E, V) : process.env.NODE_ENV !== "production" && B(c, d, h, V);
        break;
      case me:
        A(
          c,
          d,
          h,
          E,
          v,
          _,
          V,
          O,
          w
        );
        break;
      default:
        C & 1 ? Q(
          c,
          d,
          h,
          E,
          v,
          _,
          V,
          O,
          w
        ) : C & 6 ? T(
          c,
          d,
          h,
          E,
          v,
          _,
          V,
          O,
          w
        ) : C & 64 || C & 128 ? b.process(
          c,
          d,
          h,
          E,
          v,
          _,
          V,
          O,
          w,
          Zt
        ) : process.env.NODE_ENV !== "production" && y("Invalid VNode type:", b, `(${typeof b})`);
    }
    P != null && v ? fn(P, c && c.ref, _, d || c, !d) : P == null && c && c.ref != null && fn(c.ref, null, _, c, !0);
  }, ie = (c, d, h, E) => {
    if (c == null)
      o(
        d.el = l(d.children),
        h,
        E
      );
    else {
      const v = d.el = c.el;
      d.children !== c.children && f(v, d.children);
    }
  }, Y = (c, d, h, E) => {
    c == null ? o(
      d.el = a(d.children || ""),
      h,
      E
    ) : d.el = c.el;
  }, H = (c, d, h, E) => {
    [c.el, c.anchor] = D(
      c.children,
      d,
      h,
      E,
      c.el,
      c.anchor
    );
  }, B = (c, d, h, E) => {
    if (d.children !== c.children) {
      const v = g(c.anchor);
      $(c), [d.el, d.anchor] = D(
        d.children,
        h,
        v,
        E
      );
    } else
      d.el = c.el, d.anchor = c.anchor;
  }, ce = ({ el: c, anchor: d }, h, E) => {
    let v;
    for (; c && c !== d; )
      v = g(c), o(c, h, E), c = v;
    o(d, h, E);
  }, $ = ({ el: c, anchor: d }) => {
    let h;
    for (; c && c !== d; )
      h = g(c), s(c), c = h;
    s(d);
  }, Q = (c, d, h, E, v, _, V, O, w) => {
    if (d.type === "svg" ? V = "svg" : d.type === "math" && (V = "mathml"), c == null)
      pe(
        d,
        h,
        E,
        v,
        _,
        V,
        O,
        w
      );
    else {
      const b = c.el && c.el._isVueCE ? c.el : null;
      try {
        b && b._beginPatch(), q(
          c,
          d,
          v,
          _,
          V,
          O,
          w
        );
      } finally {
        b && b._endPatch();
      }
    }
  }, pe = (c, d, h, E, v, _, V, O) => {
    let w, b;
    const { props: P, shapeFlag: C, transition: M, dirs: R } = c;
    if (w = c.el = i(
      c.type,
      _,
      P && P.is,
      P
    ), C & 8 ? u(w, c.children) : C & 16 && F(
      c.children,
      w,
      null,
      E,
      v,
      To(c, _),
      V,
      O
    ), R && yt(c, null, E, "created"), re(w, c, c.scopeId, V, E), P) {
      for (const se in P)
        se !== "value" && !cn(se) && r(w, se, null, P[se], _, E);
      "value" in P && r(w, "value", null, P.value, _), (b = P.onVnodeBeforeMount) && Ke(b, E, c);
    }
    process.env.NODE_ENV !== "production" && (qn(w, "__vnode", c, !0), qn(w, "__vueParentComponent", E, !0)), R && yt(c, null, E, "beforeMount");
    const W = sa(v, M);
    W && M.beforeEnter(w), o(w, d, h), ((b = P && P.onVnodeMounted) || W || R) && Ve(() => {
      b && Ke(b, E, c), W && M.enter(w), R && yt(c, null, E, "mounted");
    }, v);
  }, re = (c, d, h, E, v) => {
    if (h && N(c, h), E)
      for (let _ = 0; _ < E.length; _++)
        N(c, E[_]);
    if (v) {
      let _ = v.subTree;
      if (process.env.NODE_ENV !== "production" && _.patchFlag > 0 && _.patchFlag & 2048 && (_ = gs(_.children) || _), d === _ || Di(_.type) && (_.ssContent === d || _.ssFallback === d)) {
        const V = v.vnode;
        re(
          c,
          V,
          V.scopeId,
          V.slotScopeIds,
          v.parent
        );
      }
    }
  }, F = (c, d, h, E, v, _, V, O, w = 0) => {
    for (let b = w; b < c.length; b++) {
      const P = c[b] = O ? mt(c[b]) : Te(c[b]);
      x(
        null,
        P,
        d,
        h,
        E,
        v,
        _,
        V,
        O
      );
    }
  }, q = (c, d, h, E, v, _, V) => {
    const O = d.el = c.el;
    process.env.NODE_ENV !== "production" && (O.__vnode = d);
    let { patchFlag: w, dynamicChildren: b, dirs: P } = d;
    w |= c.patchFlag & 16;
    const C = c.props || te, M = d.props || te;
    let R;
    if (h && Nt(h, !1), (R = M.onVnodeBeforeUpdate) && Ke(R, h, d, c), P && yt(d, c, h, "beforeUpdate"), h && Nt(h, !0), process.env.NODE_ENV !== "production" && Ye && (w = 0, V = !1, b = null), (C.innerHTML && M.innerHTML == null || C.textContent && M.textContent == null) && u(O, ""), b ? (Z(
      c.dynamicChildren,
      b,
      O,
      h,
      E,
      To(d, v),
      _
    ), process.env.NODE_ENV !== "production" && Bn(c, d)) : V || je(
      c,
      d,
      O,
      null,
      h,
      E,
      To(d, v),
      _,
      !1
    ), w > 0) {
      if (w & 16)
        S(O, C, M, h, v);
      else if (w & 2 && C.class !== M.class && r(O, "class", null, M.class, v), w & 4 && r(O, "style", C.style, M.style, v), w & 8) {
        const W = d.dynamicProps;
        for (let se = 0; se < W.length; se++) {
          const ne = W[se], Ne = C[ne], we = M[ne];
          (we !== Ne || ne === "value") && r(O, ne, Ne, we, v, h);
        }
      }
      w & 1 && c.children !== d.children && u(O, d.children);
    } else !V && b == null && S(O, C, M, h, v);
    ((R = M.onVnodeUpdated) || P) && Ve(() => {
      R && Ke(R, h, d, c), P && yt(d, c, h, "updated");
    }, E);
  }, Z = (c, d, h, E, v, _, V) => {
    for (let O = 0; O < d.length; O++) {
      const w = c[O], b = d[O], P = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        w.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (w.type === me || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Dt(w, b) || // - In the case of a component, it could contain anything.
        w.shapeFlag & 198) ? p(w.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          h
        )
      );
      x(
        w,
        b,
        P,
        null,
        E,
        v,
        _,
        V,
        !0
      );
    }
  }, S = (c, d, h, E, v) => {
    if (d !== h) {
      if (d !== te)
        for (const _ in d)
          !cn(_) && !(_ in h) && r(
            c,
            _,
            d[_],
            null,
            v,
            E
          );
      for (const _ in h) {
        if (cn(_)) continue;
        const V = h[_], O = d[_];
        V !== O && _ !== "value" && r(c, _, O, V, v, E);
      }
      "value" in h && r(c, "value", d.value, h.value, v);
    }
  }, A = (c, d, h, E, v, _, V, O, w) => {
    const b = d.el = c ? c.el : l(""), P = d.anchor = c ? c.anchor : l("");
    let { patchFlag: C, dynamicChildren: M, slotScopeIds: R } = d;
    process.env.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (Ye || C & 2048) && (C = 0, w = !1, M = null), R && (O = O ? O.concat(R) : R), c == null ? (o(b, h, E), o(P, h, E), F(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      d.children || [],
      h,
      P,
      v,
      _,
      V,
      O,
      w
    )) : C > 0 && C & 64 && M && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    c.dynamicChildren ? (Z(
      c.dynamicChildren,
      M,
      h,
      v,
      _,
      V,
      O
    ), process.env.NODE_ENV !== "production" ? Bn(c, d) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (d.key != null || v && d === v.subTree) && Bn(
        c,
        d,
        !0
        /* shallow */
      )
    )) : je(
      c,
      d,
      h,
      P,
      v,
      _,
      V,
      O,
      w
    );
  }, T = (c, d, h, E, v, _, V, O, w) => {
    d.slotScopeIds = O, c == null ? d.shapeFlag & 512 ? v.ctx.activate(
      d,
      h,
      E,
      V,
      w
    ) : X(
      d,
      h,
      E,
      v,
      _,
      V,
      w
    ) : oe(c, d, w);
  }, X = (c, d, h, E, v, _, V) => {
    const O = c.component = da(
      c,
      E,
      v
    );
    if (process.env.NODE_ENV !== "production" && O.type.__hmrId && Gl(O), process.env.NODE_ENV !== "production" && (Ln(c), Rt(O, "mount")), Tn(c) && (O.ctx.renderer = Zt), process.env.NODE_ENV !== "production" && Rt(O, "init"), ga(O, !1, V), process.env.NODE_ENV !== "production" && Lt(O, "init"), process.env.NODE_ENV !== "production" && Ye && (c.el = null), O.asyncDep) {
      if (v && v.registerDep(O, L, V), !c.el) {
        const w = O.subTree = De(ue);
        Y(null, w, d, h), c.placeholder = w.el;
      }
    } else
      L(
        O,
        c,
        d,
        h,
        v,
        _,
        V
      );
    process.env.NODE_ENV !== "production" && (jn(), Lt(O, "mount"));
  }, oe = (c, d, h) => {
    const E = d.component = c.component;
    if (jc(c, d, h))
      if (E.asyncDep && !E.asyncResolved) {
        process.env.NODE_ENV !== "production" && Ln(d), K(E, d, h), process.env.NODE_ENV !== "production" && jn();
        return;
      } else
        E.next = d, E.update();
    else
      d.el = c.el, E.vnode = d;
  }, L = (c, d, h, E, v, _, V) => {
    const O = () => {
      if (c.isMounted) {
        let { next: C, bu: M, u: R, parent: W, vnode: se } = c;
        {
          const Ue = Ci(c);
          if (Ue) {
            C && (C.el = se.el, K(c, C, V)), Ue.asyncDep.then(() => {
              c.isUnmounted || O();
            });
            return;
          }
        }
        let ne = C, Ne;
        process.env.NODE_ENV !== "production" && Ln(C || c.vnode), Nt(c, !1), C ? (C.el = se.el, K(c, C, V)) : C = se, M && jt(M), (Ne = C.props && C.props.onVnodeBeforeUpdate) && Ke(Ne, W, C, se), Nt(c, !0), process.env.NODE_ENV !== "production" && Rt(c, "render");
        const we = Rs(c);
        process.env.NODE_ENV !== "production" && Lt(c, "render");
        const He = c.subTree;
        c.subTree = we, process.env.NODE_ENV !== "production" && Rt(c, "patch"), x(
          He,
          we,
          // parent may have changed if it's in a teleport
          p(He.el),
          // anchor may have changed if it's in a fragment
          Mn(He),
          c,
          v,
          _
        ), process.env.NODE_ENV !== "production" && Lt(c, "patch"), C.el = we.el, ne === null && Hc(c, we.el), R && Ve(R, v), (Ne = C.props && C.props.onVnodeUpdated) && Ve(
          () => Ke(Ne, W, C, se),
          v
        ), process.env.NODE_ENV !== "production" && Yr(c), process.env.NODE_ENV !== "production" && jn();
      } else {
        let C;
        const { el: M, props: R } = d, { bm: W, m: se, parent: ne, root: Ne, type: we } = c, He = pn(d);
        Nt(c, !1), W && jt(W), !He && (C = R && R.onVnodeBeforeMount) && Ke(C, ne, d), Nt(c, !0);
        {
          Ne.ce && // @ts-expect-error _def is private
          Ne.ce._def.shadowRoot !== !1 && Ne.ce._injectChildStyle(we), process.env.NODE_ENV !== "production" && Rt(c, "render");
          const Ue = c.subTree = Rs(c);
          process.env.NODE_ENV !== "production" && Lt(c, "render"), process.env.NODE_ENV !== "production" && Rt(c, "patch"), x(
            null,
            Ue,
            h,
            E,
            c,
            v,
            _
          ), process.env.NODE_ENV !== "production" && Lt(c, "patch"), d.el = Ue.el;
        }
        if (se && Ve(se, v), !He && (C = R && R.onVnodeMounted)) {
          const Ue = d;
          Ve(
            () => Ke(C, ne, Ue),
            v
          );
        }
        (d.shapeFlag & 256 || ne && pn(ne.vnode) && ne.vnode.shapeFlag & 256) && c.a && Ve(c.a, v), c.isMounted = !0, process.env.NODE_ENV !== "production" && Zl(c), d = h = E = null;
      }
    };
    c.scope.on();
    const w = c.effect = new Vr(O);
    c.scope.off();
    const b = c.update = w.run.bind(w), P = c.job = w.runIfDirty.bind(w);
    P.i = c, P.id = c.uid, w.scheduler = () => ho(P), Nt(c, !0), process.env.NODE_ENV !== "production" && (w.onTrack = c.rtc ? (C) => jt(c.rtc, C) : void 0, w.onTrigger = c.rtg ? (C) => jt(c.rtg, C) : void 0), b();
  }, K = (c, d, h) => {
    d.component = c;
    const E = c.vnode.props;
    c.vnode = d, c.next = null, Kc(c, d.props, E, h), ea(c, d.children, h), Pe(), xs(c), ke();
  }, je = (c, d, h, E, v, _, V, O, w = !1) => {
    const b = c && c.children, P = c ? c.shapeFlag : 0, C = d.children, { patchFlag: M, shapeFlag: R } = d;
    if (M > 0) {
      if (M & 128) {
        Qt(
          b,
          C,
          h,
          E,
          v,
          _,
          V,
          O,
          w
        );
        return;
      } else if (M & 256) {
        _o(
          b,
          C,
          h,
          E,
          v,
          _,
          V,
          O,
          w
        );
        return;
      }
    }
    R & 8 ? (P & 16 && Xt(b, v, _), C !== b && u(h, C)) : P & 16 ? R & 16 ? Qt(
      b,
      C,
      h,
      E,
      v,
      _,
      V,
      O,
      w
    ) : Xt(b, v, _, !0) : (P & 8 && u(h, ""), R & 16 && F(
      C,
      h,
      E,
      v,
      _,
      V,
      O,
      w
    ));
  }, _o = (c, d, h, E, v, _, V, O, w) => {
    c = c || Ut, d = d || Ut;
    const b = c.length, P = d.length, C = Math.min(b, P);
    let M;
    for (M = 0; M < C; M++) {
      const R = d[M] = w ? mt(d[M]) : Te(d[M]);
      x(
        c[M],
        R,
        h,
        null,
        v,
        _,
        V,
        O,
        w
      );
    }
    b > P ? Xt(
      c,
      v,
      _,
      !0,
      !1,
      C
    ) : F(
      d,
      h,
      E,
      v,
      _,
      V,
      O,
      w,
      C
    );
  }, Qt = (c, d, h, E, v, _, V, O, w) => {
    let b = 0;
    const P = d.length;
    let C = c.length - 1, M = P - 1;
    for (; b <= C && b <= M; ) {
      const R = c[b], W = d[b] = w ? mt(d[b]) : Te(d[b]);
      if (Dt(R, W))
        x(
          R,
          W,
          h,
          null,
          v,
          _,
          V,
          O,
          w
        );
      else
        break;
      b++;
    }
    for (; b <= C && b <= M; ) {
      const R = c[C], W = d[M] = w ? mt(d[M]) : Te(d[M]);
      if (Dt(R, W))
        x(
          R,
          W,
          h,
          null,
          v,
          _,
          V,
          O,
          w
        );
      else
        break;
      C--, M--;
    }
    if (b > C) {
      if (b <= M) {
        const R = M + 1, W = R < P ? d[R].el : E;
        for (; b <= M; )
          x(
            null,
            d[b] = w ? mt(d[b]) : Te(d[b]),
            h,
            W,
            v,
            _,
            V,
            O,
            w
          ), b++;
      }
    } else if (b > M)
      for (; b <= C; )
        ft(c[b], v, _, !0), b++;
    else {
      const R = b, W = b, se = /* @__PURE__ */ new Map();
      for (b = W; b <= M; b++) {
        const ve = d[b] = w ? mt(d[b]) : Te(d[b]);
        ve.key != null && (process.env.NODE_ENV !== "production" && se.has(ve.key) && y(
          "Duplicate keys found during update:",
          JSON.stringify(ve.key),
          "Make sure keys are unique."
        ), se.set(ve.key, b));
      }
      let ne, Ne = 0;
      const we = M - W + 1;
      let He = !1, Ue = 0;
      const en = new Array(we);
      for (b = 0; b < we; b++) en[b] = 0;
      for (b = R; b <= C; b++) {
        const ve = c[b];
        if (Ne >= we) {
          ft(ve, v, _, !0);
          continue;
        }
        let Be;
        if (ve.key != null)
          Be = se.get(ve.key);
        else
          for (ne = W; ne <= M; ne++)
            if (en[ne - W] === 0 && Dt(ve, d[ne])) {
              Be = ne;
              break;
            }
        Be === void 0 ? ft(ve, v, _, !0) : (en[Be - W] = b + 1, Be >= Ue ? Ue = Be : He = !0, x(
          ve,
          d[Be],
          h,
          null,
          v,
          _,
          V,
          O,
          w
        ), Ne++);
      }
      const ys = He ? ra(en) : Ut;
      for (ne = ys.length - 1, b = we - 1; b >= 0; b--) {
        const ve = W + b, Be = d[ve], Ns = d[ve + 1], ws = ve + 1 < P ? (
          // #13559, fallback to el placeholder for unresolved async component
          Ns.el || Ns.placeholder
        ) : E;
        en[b] === 0 ? x(
          null,
          Be,
          h,
          ws,
          v,
          _,
          V,
          O,
          w
        ) : He && (ne < 0 || b !== ys[ne] ? kt(Be, h, ws, 2) : ne--);
      }
    }
  }, kt = (c, d, h, E, v = null) => {
    const { el: _, type: V, transition: O, children: w, shapeFlag: b } = c;
    if (b & 6) {
      kt(c.component.subTree, d, h, E);
      return;
    }
    if (b & 128) {
      c.suspense.move(d, h, E);
      return;
    }
    if (b & 64) {
      V.move(c, d, h, Zt);
      return;
    }
    if (V === me) {
      o(_, d, h);
      for (let C = 0; C < w.length; C++)
        kt(w[C], d, h, E);
      o(c.anchor, d, h);
      return;
    }
    if (V === Kn) {
      ce(c, d, h);
      return;
    }
    if (E !== 2 && b & 1 && O)
      if (E === 0)
        O.beforeEnter(_), o(_, d, h), Ve(() => O.enter(_), v);
      else {
        const { leave: C, delayLeave: M, afterLeave: R } = O, W = () => {
          c.ctx.isUnmounted ? s(_) : o(_, d, h);
        }, se = () => {
          _._isLeaving && _[st](
            !0
            /* cancelled */
          ), C(_, () => {
            W(), R && R();
          });
        };
        M ? M(_, W, se) : se();
      }
    else
      o(_, d, h);
  }, ft = (c, d, h, E = !1, v = !1) => {
    const {
      type: _,
      props: V,
      ref: O,
      children: w,
      dynamicChildren: b,
      shapeFlag: P,
      patchFlag: C,
      dirs: M,
      cacheIndex: R
    } = c;
    if (C === -2 && (v = !1), O != null && (Pe(), fn(O, null, h, c, !0), ke()), R != null && (d.renderCache[R] = void 0), P & 256) {
      d.ctx.deactivate(c);
      return;
    }
    const W = P & 1 && M, se = !pn(c);
    let ne;
    if (se && (ne = V && V.onVnodeBeforeUnmount) && Ke(ne, d, c), P & 6)
      Ui(c.component, h, E);
    else {
      if (P & 128) {
        c.suspense.unmount(h, E);
        return;
      }
      W && yt(c, null, d, "beforeUnmount"), P & 64 ? c.type.remove(
        c,
        d,
        h,
        Zt,
        E
      ) : b && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !b.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (_ !== me || C > 0 && C & 64) ? Xt(
        b,
        d,
        h,
        !1,
        !0
      ) : (_ === me && C & 384 || !v && P & 16) && Xt(w, d, h), E && bo(c);
    }
    (se && (ne = V && V.onVnodeUnmounted) || W) && Ve(() => {
      ne && Ke(ne, d, c), W && yt(c, null, d, "unmounted");
    }, h);
  }, bo = (c) => {
    const { type: d, el: h, anchor: E, transition: v } = c;
    if (d === me) {
      process.env.NODE_ENV !== "production" && c.patchFlag > 0 && c.patchFlag & 2048 && v && !v.persisted ? c.children.forEach((V) => {
        V.type === ue ? s(V.el) : bo(V);
      }) : Hi(h, E);
      return;
    }
    if (d === Kn) {
      $(c);
      return;
    }
    const _ = () => {
      s(h), v && !v.persisted && v.afterLeave && v.afterLeave();
    };
    if (c.shapeFlag & 1 && v && !v.persisted) {
      const { leave: V, delayLeave: O } = v, w = () => V(h, _);
      O ? O(c.el, _, w) : w();
    } else
      _();
  }, Hi = (c, d) => {
    let h;
    for (; c !== d; )
      h = g(c), s(c), c = h;
    s(d);
  }, Ui = (c, d, h) => {
    process.env.NODE_ENV !== "production" && c.type.__hmrId && ql(c);
    const { bum: E, scope: v, job: _, subTree: V, um: O, m: w, a: b } = c;
    Ks(w), Ks(b), E && jt(E), v.stop(), _ && (_.flags |= 8, ft(V, c, d, h)), O && Ve(O, d), Ve(() => {
      c.isUnmounted = !0;
    }, d), process.env.NODE_ENV !== "production" && tc(c);
  }, Xt = (c, d, h, E = !1, v = !1, _ = 0) => {
    for (let V = _; V < c.length; V++)
      ft(c[V], d, h, E, v);
  }, Mn = (c) => {
    if (c.shapeFlag & 6)
      return Mn(c.component.subTree);
    if (c.shapeFlag & 128)
      return c.suspense.next();
    const d = g(c.anchor || c.el), h = d && d[rc];
    return h ? g(h) : d;
  };
  let Eo = !1;
  const Es = (c, d, h) => {
    c == null ? d._vnode && ft(d._vnode, null, null, !0) : x(
      d._vnode || null,
      c,
      d,
      null,
      null,
      null,
      h
    ), d._vnode = c, Eo || (Eo = !0, xs(), Gr(), Eo = !1);
  }, Zt = {
    p: x,
    um: ft,
    m: kt,
    r: bo,
    mt: X,
    mc: F,
    pc: je,
    pbc: Z,
    n: Mn,
    o: e
  };
  return {
    render: Es,
    hydrate: void 0,
    createApp: Tc(Es)
  };
}
function To({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Nt({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function sa(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Bn(e, t, n = !1) {
  const o = e.children, s = t.children;
  if (I(o) && I(s))
    for (let r = 0; r < o.length; r++) {
      const i = o[r];
      let l = s[r];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = s[r] = mt(s[r]), l.el = i.el), !n && l.patchFlag !== -2 && Bn(i, l)), l.type === An && // avoid cached text nodes retaining detached dom nodes
      l.patchFlag !== -1 && (l.el = i.el), l.type === ue && !l.el && (l.el = i.el), process.env.NODE_ENV !== "production" && l.el && (l.el.__vnode = l);
    }
}
function ra(e) {
  const t = e.slice(), n = [0];
  let o, s, r, i, l;
  const a = e.length;
  for (o = 0; o < a; o++) {
    const f = e[o];
    if (f !== 0) {
      if (s = n[n.length - 1], e[s] < f) {
        t[o] = s, n.push(o);
        continue;
      }
      for (r = 0, i = n.length - 1; r < i; )
        l = r + i >> 1, e[n[l]] < f ? r = l + 1 : i = l;
      f < e[n[r]] && (r > 0 && (t[o] = n[r - 1]), n[r] = o);
    }
  }
  for (r = n.length, i = n[r - 1]; r-- > 0; )
    n[r] = i, i = t[i];
  return n;
}
function Ci(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Ci(t);
}
function Ks(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const Di = (e) => e.__isSuspense;
function ia(e, t) {
  t && t.pendingBranch ? I(e) ? t.effects.push(...e) : t.effects.push(e) : zr(e);
}
const me = Symbol.for("v-fgt"), An = Symbol.for("v-txt"), ue = Symbol.for("v-cmt"), Kn = Symbol.for("v-stc"), dn = [];
let Ce = null;
function U(e = !1) {
  dn.push(Ce = e ? null : []);
}
function la() {
  dn.pop(), Ce = dn[dn.length - 1] || null;
}
let En = 1;
function so(e, t = !1) {
  En += e, e < 0 && Ce && t && (Ce.hasOnce = !0);
}
function Si(e) {
  return e.dynamicChildren = En > 0 ? Ce || Ut : null, la(), En > 0 && Ce && Ce.push(e), e;
}
function J(e, t, n, o, s, r) {
  return Si(
    m(
      e,
      t,
      n,
      o,
      s,
      r,
      !0
    )
  );
}
function gt(e, t, n, o, s) {
  return Si(
    De(
      e,
      t,
      n,
      o,
      s,
      !0
    )
  );
}
function Gt(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Dt(e, t) {
  if (process.env.NODE_ENV !== "production" && t.shapeFlag & 6 && e.component) {
    const n = Hn.get(t.type);
    if (n && n.has(e.component))
      return e.shapeFlag &= -257, t.shapeFlag &= -513, !1;
  }
  return e.type === t.type && e.key === t.key;
}
const ca = (...e) => Ti(
  ...e
), xi = ({ key: e }) => e ?? null, Wn = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? le(e) || fe(e) || k(e) ? { i: Ee, r: e, k: t, f: !!n } : e : null);
function m(e, t = null, n = null, o = 0, s = null, r = e === me ? 0 : 1, i = !1, l = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && xi(t),
    ref: t && Wn(t),
    scopeId: Xr,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: r,
    patchFlag: o,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: Ee
  };
  return l ? (_s(a, n), r & 128 && e.normalize(a)) : n && (a.shapeFlag |= le(n) ? 8 : 16), process.env.NODE_ENV !== "production" && a.key !== a.key && y("VNode created with invalid key (NaN). VNode type:", a.type), En > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  Ce && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && Ce.push(a), a;
}
const De = process.env.NODE_ENV !== "production" ? ca : Ti;
function Ti(e, t = null, n = null, o = 0, s = null, r = !1) {
  if ((!e || e === bc) && (process.env.NODE_ENV !== "production" && !e && y(`Invalid vnode type when creating vnode: ${e}.`), e = ue), Gt(e)) {
    const l = Ze(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && _s(l, n), En > 0 && !r && Ce && (l.shapeFlag & 6 ? Ce[Ce.indexOf(e)] = l : Ce.push(l)), l.patchFlag = -2, l;
  }
  if (Pi(e) && (e = e.__vccOpts), t) {
    t = aa(t);
    let { class: l, style: a } = t;
    l && !le(l) && (t.class = Bt(l)), G(a) && (Jn(a) && !I(a) && (a = ae({}, a)), t.style = lt(a));
  }
  const i = le(e) ? 1 : Di(e) ? 128 : ti(e) ? 64 : G(e) ? 4 : k(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && i & 4 && Jn(e) && (e = j(e), y(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), m(
    e,
    t,
    n,
    o,
    s,
    i,
    r,
    !0
  );
}
function aa(e) {
  return e ? Jn(e) || Ei(e) ? ae({}, e) : e : null;
}
function Ze(e, t, n = !1, o = !1) {
  const { props: s, ref: r, patchFlag: i, children: l, transition: a } = e, f = t ? ua(s || {}, t) : s, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: f,
    key: f && xi(f),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? I(r) ? r.concat(Wn(t)) : [r, Wn(t)] : Wn(t)
    ) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && i === -1 && I(l) ? l.map(Ai) : l,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== me ? i === -1 ? 16 : i | 16 : i,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: a,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Ze(e.ssContent),
    ssFallback: e.ssFallback && Ze(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return a && o && _n(
    u,
    a.clone(u)
  ), u;
}
function Ai(e) {
  const t = Ze(e);
  return I(e.children) && (t.children = e.children.map(Ai)), t;
}
function ro(e = " ", t = 0) {
  return De(An, null, e, t);
}
function Ge(e = "", t = !1) {
  return t ? (U(), gt(ue, null, e)) : De(ue, null, e);
}
function Te(e) {
  return e == null || typeof e == "boolean" ? De(ue) : I(e) ? De(
    me,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Gt(e) ? mt(e) : De(An, null, String(e));
}
function mt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Ze(e);
}
function _s(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null)
    t = null;
  else if (I(t))
    n = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), _s(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !Ei(t) ? t._ctx = Ee : s === 3 && Ee && (Ee.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else k(t) ? (t = { default: t, _ctx: Ee }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [ro(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function ua(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const s in o)
      if (s === "class")
        t.class !== o.class && (t.class = Bt([t.class, o.class]));
      else if (s === "style")
        t.style = lt([t.style, o.style]);
      else if (On(s)) {
        const r = t[s], i = o[s];
        i && r !== i && !(I(r) && r.includes(i)) && (t[s] = r ? [].concat(r, i) : i);
      } else s !== "" && (t[s] = o[s]);
  }
  return t;
}
function Ke(e, t, n, o = null) {
  Le(e, t, 7, [
    n,
    o
  ]);
}
const fa = di();
let pa = 0;
function da(e, t, n) {
  const o = e.type, s = (t ? t.appContext : e.appContext) || fa, r = {
    uid: pa++,
    vnode: e,
    type: o,
    parent: t,
    appContext: s,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new al(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(s.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Ni(o, s),
    emitsOptions: mi(o, s),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: te,
    // inheritAttrs
    inheritAttrs: o.inheritAttrs,
    // state
    ctx: te,
    data: te,
    props: te,
    attrs: te,
    slots: te,
    refs: te,
    setupState: te,
    setupContext: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return process.env.NODE_ENV !== "production" ? r.ctx = Ec(r) : r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = kc.bind(null, r), e.ce && e.ce(r), r;
}
let de = null;
const bs = () => de || Ee;
let io, Jo;
{
  const e = Cn(), t = (n, o) => {
    let s;
    return (s = e[n]) || (s = e[n] = []), s.push(o), (r) => {
      s.length > 1 ? s.forEach((i) => i(r)) : s[0](r);
    };
  };
  io = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => de = n
  ), Jo = t(
    "__VUE_SSR_SETTERS__",
    (n) => yn = n
  );
}
const $n = (e) => {
  const t = de;
  return io(e), e.scope.on(), () => {
    e.scope.off(), io(t);
  };
}, Ws = () => {
  de && de.scope.off(), io(null);
}, ha = /* @__PURE__ */ at("slot,component");
function Yo(e, { isNativeTag: t }) {
  (ha(e) || t(e)) && y(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function $i(e) {
  return e.vnode.shapeFlag & 4;
}
let yn = !1;
function ga(e, t = !1, n = !1) {
  t && Jo(t);
  const { props: o, children: s } = e.vnode, r = $i(e);
  Uc(e, o, r, t), Zc(e, s, n || t);
  const i = r ? ma(e, t) : void 0;
  return t && Jo(!1), i;
}
function ma(e, t) {
  const n = e.type;
  if (process.env.NODE_ENV !== "production") {
    if (n.name && Yo(n.name, e.appContext.config), n.components) {
      const s = Object.keys(n.components);
      for (let r = 0; r < s.length; r++)
        Yo(s[r], e.appContext.config);
    }
    if (n.directives) {
      const s = Object.keys(n.directives);
      for (let r = 0; r < s.length; r++)
        ei(s[r]);
    }
    n.compilerOptions && va() && y(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, ui), process.env.NODE_ENV !== "production" && yc(e);
  const { setup: o } = n;
  if (o) {
    Pe();
    const s = e.setupContext = o.length > 1 ? ba(e) : null, r = $n(e), i = Yt(
      o,
      e,
      0,
      [
        process.env.NODE_ENV !== "production" ? Je(e.props) : e.props,
        s
      ]
    ), l = Zo(i);
    if (ke(), r(), (l || e.sp) && !pn(e) && li(e), l) {
      if (i.then(Ws, Ws), t)
        return i.then((a) => {
          zs(e, a, t);
        }).catch((a) => {
          Sn(a, e, 0);
        });
      if (e.asyncDep = i, process.env.NODE_ENV !== "production" && !e.suspense) {
        const a = In(e, n);
        y(
          `Component <${a}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      zs(e, i, t);
  } else
    Ii(e, t);
}
function zs(e, t, n) {
  k(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : G(t) ? (process.env.NODE_ENV !== "production" && Gt(t) && y(
    "setup() should not return VNodes directly - return a render function instead."
  ), process.env.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = Hr(t), process.env.NODE_ENV !== "production" && Nc(e)) : process.env.NODE_ENV !== "production" && t !== void 0 && y(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), Ii(e, n);
}
const va = () => !0;
function Ii(e, t, n) {
  const o = e.type;
  e.render || (e.render = o.render || ge);
  {
    const s = $n(e);
    Pe();
    try {
      Oc(e);
    } finally {
      ke(), s();
    }
  }
  process.env.NODE_ENV !== "production" && !o.render && e.render === ge && !t && (o.template ? y(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : y("Component is missing template or render function: ", o));
}
const Gs = process.env.NODE_ENV !== "production" ? {
  get(e, t) {
    return no(), he(e, "get", ""), e[t];
  },
  set() {
    return y("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return y("setupContext.attrs is readonly."), !1;
  }
} : {
  get(e, t) {
    return he(e, "get", ""), e[t];
  }
};
function _a(e) {
  return new Proxy(e.slots, {
    get(t, n) {
      return he(e, "get", "$slots"), t[n];
    }
  });
}
function ba(e) {
  const t = (n) => {
    if (process.env.NODE_ENV !== "production" && (e.exposed && y("expose() should be called only once per setup()."), n != null)) {
      let o = typeof n;
      o === "object" && (I(n) ? o = "array" : fe(n) && (o = "ref")), o !== "object" && y(
        `expose() should be passed a plain object, received ${o}.`
      );
    }
    e.exposed = n || {};
  };
  if (process.env.NODE_ENV !== "production") {
    let n, o;
    return Object.freeze({
      get attrs() {
        return n || (n = new Proxy(e.attrs, Gs));
      },
      get slots() {
        return o || (o = _a(e));
      },
      get emit() {
        return (s, ...r) => e.emit(s, ...r);
      },
      expose: t
    });
  } else
    return {
      attrs: new Proxy(e.attrs, Gs),
      slots: e.slots,
      emit: e.emit,
      expose: t
    };
}
function vo(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Hr(Tl(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in At)
        return At[n](e);
    },
    has(t, n) {
      return n in t || n in At;
    }
  })) : e.proxy;
}
const Ea = /(?:^|[-_])\w/g, ya = (e) => e.replace(Ea, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Mi(e, t = !0) {
  return k(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function In(e, t, n = !1) {
  let o = Mi(t);
  if (!o && t.__file) {
    const s = t.__file.match(/([^/\\]+)\.\w+$/);
    s && (o = s[1]);
  }
  if (!o && e) {
    const s = (r) => {
      for (const i in r)
        if (r[i] === t)
          return i;
    };
    o = s(e.components) || e.parent && s(
      e.parent.type.components
    ) || s(e.appContext.components);
  }
  return o ? ya(o) : n ? "App" : "Anonymous";
}
function Pi(e) {
  return k(e) && "__vccOpts" in e;
}
const hn = (e, t) => {
  const n = kl(e, t, yn);
  if (process.env.NODE_ENV !== "production") {
    const o = bs();
    o && o.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function ki(e, t, n) {
  try {
    so(-1);
    const o = arguments.length;
    return o === 2 ? G(t) && !I(t) ? Gt(t) ? De(e, null, [t]) : De(e, t) : De(e, null, t) : (o > 3 ? n = Array.prototype.slice.call(arguments, 2) : o === 3 && Gt(n) && (n = [n]), De(e, t, n));
  } finally {
    so(1);
  }
}
function Na() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, o = { style: "color:#eb2f96" }, s = {
    __vue_custom_formatter: !0,
    header(p) {
      if (!G(p))
        return null;
      if (p.__isVue)
        return ["div", e, "VueInstance"];
      if (fe(p)) {
        Pe();
        const g = p.value;
        return ke(), [
          "div",
          {},
          ["span", e, u(p)],
          "<",
          l(g),
          ">"
        ];
      } else {
        if (bt(p))
          return [
            "div",
            {},
            ["span", e, ye(p) ? "ShallowReactive" : "Reactive"],
            "<",
            l(p),
            `>${Fe(p) ? " (readonly)" : ""}`
          ];
        if (Fe(p))
          return [
            "div",
            {},
            ["span", e, ye(p) ? "ShallowReadonly" : "Readonly"],
            "<",
            l(p),
            ">"
          ];
      }
      return null;
    },
    hasBody(p) {
      return p && p.__isVue;
    },
    body(p) {
      if (p && p.__isVue)
        return [
          "div",
          {},
          ...r(p.$)
        ];
    }
  };
  function r(p) {
    const g = [];
    p.type.props && p.props && g.push(i("props", j(p.props))), p.setupState !== te && g.push(i("setup", p.setupState)), p.data !== te && g.push(i("data", j(p.data)));
    const N = a(p, "computed");
    N && g.push(i("computed", N));
    const D = a(p, "inject");
    return D && g.push(i("injected", D)), g.push([
      "div",
      {},
      [
        "span",
        {
          style: o.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: p }]
    ]), g;
  }
  function i(p, g) {
    return g = ae({}, g), Object.keys(g).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        p
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(g).map((N) => [
          "div",
          {},
          ["span", o, N + ": "],
          l(g[N], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function l(p, g = !0) {
    return typeof p == "number" ? ["span", t, p] : typeof p == "string" ? ["span", n, JSON.stringify(p)] : typeof p == "boolean" ? ["span", o, p] : G(p) ? ["object", { object: g ? j(p) : p }] : ["span", n, String(p)];
  }
  function a(p, g) {
    const N = p.type;
    if (k(N))
      return;
    const D = {};
    for (const x in p.ctx)
      f(N, x, g) && (D[x] = p.ctx[x]);
    return D;
  }
  function f(p, g, N) {
    const D = p[N];
    if (I(D) && D.includes(g) || G(D) && g in D || p.extends && f(p.extends, g, N) || p.mixins && p.mixins.some((x) => f(x, g, N)))
      return !0;
  }
  function u(p) {
    return ye(p) ? "ShallowRef" : p.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(s) : window.devtoolsFormatters = [s];
}
const qs = "3.5.25", Qe = process.env.NODE_ENV !== "production" ? y : ge;
process.env.NODE_ENV;
process.env.NODE_ENV;
/**
* @vue/runtime-dom v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Qo;
const Js = typeof window < "u" && window.trustedTypes;
if (Js)
  try {
    Qo = /* @__PURE__ */ Js.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch (e) {
    process.env.NODE_ENV !== "production" && Qe(`Error creating trusted types policy: ${e}`);
  }
const Fi = Qo ? (e) => Qo.createHTML(e) : (e) => e, wa = "http://www.w3.org/2000/svg", Oa = "http://www.w3.org/1998/Math/MathML", ot = typeof document < "u" ? document : null, Ys = ot && /* @__PURE__ */ ot.createElement("template"), Va = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, o) => {
    const s = t === "svg" ? ot.createElementNS(wa, e) : t === "mathml" ? ot.createElementNS(Oa, e) : n ? ot.createElement(e, { is: n }) : ot.createElement(e);
    return e === "select" && o && o.multiple != null && s.setAttribute("multiple", o.multiple), s;
  },
  createText: (e) => ot.createTextNode(e),
  createComment: (e) => ot.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => ot.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, o, s, r) {
    const i = n ? n.previousSibling : t.lastChild;
    if (s && (s === r || s.nextSibling))
      for (; t.insertBefore(s.cloneNode(!0), n), !(s === r || !(s = s.nextSibling)); )
        ;
    else {
      Ys.innerHTML = Fi(
        o === "svg" ? `<svg>${e}</svg>` : o === "mathml" ? `<math>${e}</math>` : e
      );
      const l = Ys.content;
      if (o === "svg" || o === "mathml") {
        const a = l.firstChild;
        for (; a.firstChild; )
          l.appendChild(a.firstChild);
        l.removeChild(a);
      }
      t.insertBefore(l, n);
    }
    return [
      // first
      i ? i.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, pt = "transition", on = "animation", Nn = Symbol("_vtc"), Ri = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: !0
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
}, Ca = /* @__PURE__ */ ae(
  {},
  ni,
  Ri
), Da = (e) => (e.displayName = "Transition", e.props = Ca, e), Sa = /* @__PURE__ */ Da(
  (e, { slots: t }) => ki(cc, xa(e), t)
), wt = (e, t = []) => {
  I(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, Qs = (e) => e ? I(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function xa(e) {
  const t = {};
  for (const S in e)
    S in Ri || (t[S] = e[S]);
  if (e.css === !1)
    return t;
  const {
    name: n = "v",
    type: o,
    duration: s,
    enterFromClass: r = `${n}-enter-from`,
    enterActiveClass: i = `${n}-enter-active`,
    enterToClass: l = `${n}-enter-to`,
    appearFromClass: a = r,
    appearActiveClass: f = i,
    appearToClass: u = l,
    leaveFromClass: p = `${n}-leave-from`,
    leaveActiveClass: g = `${n}-leave-active`,
    leaveToClass: N = `${n}-leave-to`
  } = e, D = Ta(s), x = D && D[0], ie = D && D[1], {
    onBeforeEnter: Y,
    onEnter: H,
    onEnterCancelled: B,
    onLeave: ce,
    onLeaveCancelled: $,
    onBeforeAppear: Q = Y,
    onAppear: pe = H,
    onAppearCancelled: re = B
  } = t, F = (S, A, T, X) => {
    S._enterCancelled = X, Ot(S, A ? u : l), Ot(S, A ? f : i), T && T();
  }, q = (S, A) => {
    S._isLeaving = !1, Ot(S, p), Ot(S, N), Ot(S, g), A && A();
  }, Z = (S) => (A, T) => {
    const X = S ? pe : H, oe = () => F(A, S, T);
    wt(X, [A, oe]), Xs(() => {
      Ot(A, S ? a : r), nt(A, S ? u : l), Qs(X) || Zs(A, o, x, oe);
    });
  };
  return ae(t, {
    onBeforeEnter(S) {
      wt(Y, [S]), nt(S, r), nt(S, i);
    },
    onBeforeAppear(S) {
      wt(Q, [S]), nt(S, a), nt(S, f);
    },
    onEnter: Z(!1),
    onAppear: Z(!0),
    onLeave(S, A) {
      S._isLeaving = !0;
      const T = () => q(S, A);
      nt(S, p), S._enterCancelled ? (nt(S, g), nr(S)) : (nr(S), nt(S, g)), Xs(() => {
        S._isLeaving && (Ot(S, p), nt(S, N), Qs(ce) || Zs(S, o, ie, T));
      }), wt(ce, [S, T]);
    },
    onEnterCancelled(S) {
      F(S, !1, void 0, !0), wt(B, [S]);
    },
    onAppearCancelled(S) {
      F(S, !0, void 0, !0), wt(re, [S]);
    },
    onLeaveCancelled(S) {
      q(S), wt($, [S]);
    }
  });
}
function Ta(e) {
  if (e == null)
    return null;
  if (G(e))
    return [Ao(e.enter), Ao(e.leave)];
  {
    const t = Ao(e);
    return [t, t];
  }
}
function Ao(e) {
  const t = Ji(e);
  return process.env.NODE_ENV !== "production" && Bl(t, "<transition> explicit duration"), t;
}
function nt(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Nn] || (e[Nn] = /* @__PURE__ */ new Set())).add(t);
}
function Ot(e, t) {
  t.split(/\s+/).forEach((o) => o && e.classList.remove(o));
  const n = e[Nn];
  n && (n.delete(t), n.size || (e[Nn] = void 0));
}
function Xs(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Aa = 0;
function Zs(e, t, n, o) {
  const s = e._endId = ++Aa, r = () => {
    s === e._endId && o();
  };
  if (n != null)
    return setTimeout(r, n);
  const { type: i, timeout: l, propCount: a } = $a(e, t);
  if (!i)
    return o();
  const f = i + "end";
  let u = 0;
  const p = () => {
    e.removeEventListener(f, g), r();
  }, g = (N) => {
    N.target === e && ++u >= a && p();
  };
  setTimeout(() => {
    u < a && p();
  }, l + 1), e.addEventListener(f, g);
}
function $a(e, t) {
  const n = window.getComputedStyle(e), o = (D) => (n[D] || "").split(", "), s = o(`${pt}Delay`), r = o(`${pt}Duration`), i = er(s, r), l = o(`${on}Delay`), a = o(`${on}Duration`), f = er(l, a);
  let u = null, p = 0, g = 0;
  t === pt ? i > 0 && (u = pt, p = i, g = r.length) : t === on ? f > 0 && (u = on, p = f, g = a.length) : (p = Math.max(i, f), u = p > 0 ? i > f ? pt : on : null, g = u ? u === pt ? r.length : a.length : 0);
  const N = u === pt && /\b(?:transform|all)(?:,|$)/.test(
    o(`${pt}Property`).toString()
  );
  return {
    type: u,
    timeout: p,
    propCount: g,
    hasTransform: N
  };
}
function er(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, o) => tr(n) + tr(e[o])));
}
function tr(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function nr(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function Ia(e, t, n) {
  const o = e[Nn];
  o && (t = (t ? [t, ...o] : [...o]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const or = Symbol("_vod"), Ma = Symbol("_vsh"), Pa = Symbol(process.env.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : ""), ka = /(?:^|;)\s*display\s*:/;
function Fa(e, t, n) {
  const o = e.style, s = le(n);
  let r = !1;
  if (n && !s) {
    if (t)
      if (le(t))
        for (const i of t.split(";")) {
          const l = i.slice(0, i.indexOf(":")).trim();
          n[l] == null && zn(o, l, "");
        }
      else
        for (const i in t)
          n[i] == null && zn(o, i, "");
    for (const i in n)
      i === "display" && (r = !0), zn(o, i, n[i]);
  } else if (s) {
    if (t !== n) {
      const i = o[Pa];
      i && (n += ";" + i), o.cssText = n, r = ka.test(n);
    }
  } else t && e.removeAttribute("style");
  or in e && (e[or] = r ? o.display : "", e[Ma] && (o.display = "none"));
}
const Ra = /[^\\];\s*$/, sr = /\s*!important$/;
function zn(e, t, n) {
  if (I(n))
    n.forEach((o) => zn(e, t, o));
  else if (n == null && (n = ""), process.env.NODE_ENV !== "production" && Ra.test(n) && Qe(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const o = La(e, t);
    sr.test(n) ? e.setProperty(
      Et(o),
      n.replace(sr, ""),
      "important"
    ) : e[o] = n;
  }
}
const rr = ["Webkit", "Moz", "ms"], $o = {};
function La(e, t) {
  const n = $o[t];
  if (n)
    return n;
  let o = $e(t);
  if (o !== "filter" && o in e)
    return $o[t] = o;
  o = co(o);
  for (let s = 0; s < rr.length; s++) {
    const r = rr[s] + o;
    if (r in e)
      return $o[t] = r;
  }
  return t;
}
const ir = "http://www.w3.org/1999/xlink";
function lr(e, t, n, o, s, r = ll(t)) {
  o && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(ir, t.slice(6, t.length)) : e.setAttributeNS(ir, t, n) : n == null || r && !Nr(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : Xe(n) ? String(n) : n
  );
}
function cr(e, t, n, o, s) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Fi(n) : n);
    return;
  }
  const r = e.tagName;
  if (t === "value" && r !== "PROGRESS" && // custom elements may use _value internally
  !r.includes("-")) {
    const l = r === "OPTION" ? e.getAttribute("value") || "" : e.value, a = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (l !== a || !("_value" in e)) && (e.value = a), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let i = !1;
  if (n === "" || n == null) {
    const l = typeof e[t];
    l === "boolean" ? n = Nr(n) : n == null && l === "string" ? (n = "", i = !0) : l === "number" && (n = 0, i = !0);
  }
  try {
    e[t] = n;
  } catch (l) {
    process.env.NODE_ENV !== "production" && !i && Qe(
      `Failed setting prop "${t}" on <${r.toLowerCase()}>: value ${n} is invalid.`,
      l
    );
  }
  i && e.removeAttribute(s || t);
}
function vt(e, t, n, o) {
  e.addEventListener(t, n, o);
}
function ja(e, t, n, o) {
  e.removeEventListener(t, n, o);
}
const ar = Symbol("_vei");
function Ha(e, t, n, o, s = null) {
  const r = e[ar] || (e[ar] = {}), i = r[t];
  if (o && i)
    i.value = process.env.NODE_ENV !== "production" ? fr(o, t) : o;
  else {
    const [l, a] = Ua(t);
    if (o) {
      const f = r[t] = Wa(
        process.env.NODE_ENV !== "production" ? fr(o, t) : o,
        s
      );
      vt(e, l, f, a);
    } else i && (ja(e, l, i, a), r[t] = void 0);
  }
}
const ur = /(?:Once|Passive|Capture)$/;
function Ua(e) {
  let t;
  if (ur.test(e)) {
    t = {};
    let o;
    for (; o = e.match(ur); )
      e = e.slice(0, e.length - o[0].length), t[o[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Et(e.slice(2)), t];
}
let Io = 0;
const Ba = /* @__PURE__ */ Promise.resolve(), Ka = () => Io || (Ba.then(() => Io = 0), Io = Date.now());
function Wa(e, t) {
  const n = (o) => {
    if (!o._vts)
      o._vts = Date.now();
    else if (o._vts <= n.attached)
      return;
    Le(
      za(o, n.value),
      t,
      5,
      [o]
    );
  };
  return n.value = e, n.attached = Ka(), n;
}
function fr(e, t) {
  return k(e) || I(e) ? e : (Qe(
    `Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`
  ), ge);
}
function za(e, t) {
  if (I(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (o) => (s) => !s._stopped && o && o(s)
    );
  } else
    return t;
}
const pr = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Ga = (e, t, n, o, s, r) => {
  const i = s === "svg";
  t === "class" ? Ia(e, o, i) : t === "style" ? Fa(e, n, o) : On(t) ? Gn(t) || Ha(e, t, n, o, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : qa(e, t, o, i)) ? (cr(e, t, o), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && lr(e, t, o, i, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !le(o)) ? cr(e, $e(t), o, r, t) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o), lr(e, t, o, i));
};
function qa(e, t, n, o) {
  if (o)
    return !!(t === "innerHTML" || t === "textContent" || t in e && pr(t) && k(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const s = e.tagName;
    if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE")
      return !1;
  }
  return pr(t) && le(n) ? !1 : t in e;
}
const qt = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return I(t) ? (n) => jt(t, n) : t;
};
function Ja(e) {
  e.target.composing = !0;
}
function dr(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const ct = Symbol("_assign");
function hr(e, t, n) {
  return t && (e = e.trim()), n && (e = ao(e)), e;
}
const Mo = {
  created(e, { modifiers: { lazy: t, trim: n, number: o } }, s) {
    e[ct] = qt(s);
    const r = o || s.props && s.props.type === "number";
    vt(e, t ? "change" : "input", (i) => {
      i.target.composing || e[ct](hr(e.value, n, r));
    }), (n || r) && vt(e, "change", () => {
      e.value = hr(e.value, n, r);
    }), t || (vt(e, "compositionstart", Ja), vt(e, "compositionend", dr), vt(e, "change", dr));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: o, trim: s, number: r } }, i) {
    if (e[ct] = qt(i), e.composing) return;
    const l = (r || e.type === "number") && !/^0\d/.test(e.value) ? ao(e.value) : e.value, a = t ?? "";
    l !== a && (document.activeElement === e && e.type !== "range" && (o && t === n || s && e.value.trim() === a) || (e.value = a));
  }
}, sn = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, t, n) {
    e[ct] = qt(n), vt(e, "change", () => {
      const o = e._modelValue, s = wn(e), r = e.checked, i = e[ct];
      if (I(o)) {
        const l = ns(o, s), a = l !== -1;
        if (r && !a)
          i(o.concat(s));
        else if (!r && a) {
          const f = [...o];
          f.splice(l, 1), i(f);
        }
      } else if (Jt(o)) {
        const l = new Set(o);
        r ? l.add(s) : l.delete(s), i(l);
      } else
        i(Li(e, r));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: gr,
  beforeUpdate(e, t, n) {
    e[ct] = qt(n), gr(e, t, n);
  }
};
function gr(e, { value: t, oldValue: n }, o) {
  e._modelValue = t;
  let s;
  if (I(t))
    s = ns(t, o.props.value) > -1;
  else if (Jt(t))
    s = t.has(o.props.value);
  else {
    if (t === n) return;
    s = Dn(t, Li(e, !0));
  }
  e.checked !== s && (e.checked = s);
}
const Ya = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, o) {
    const s = Jt(t);
    vt(e, "change", () => {
      const r = Array.prototype.filter.call(e.options, (i) => i.selected).map(
        (i) => n ? ao(wn(i)) : wn(i)
      );
      e[ct](
        e.multiple ? s ? new Set(r) : r : r[0]
      ), e._assigning = !0, Kr(() => {
        e._assigning = !1;
      });
    }), e[ct] = qt(o);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    mr(e, t);
  },
  beforeUpdate(e, t, n) {
    e[ct] = qt(n);
  },
  updated(e, { value: t }) {
    e._assigning || mr(e, t);
  }
};
function mr(e, t) {
  const n = e.multiple, o = I(t);
  if (n && !o && !Jt(t)) {
    process.env.NODE_ENV !== "production" && Qe(
      `<select multiple v-model> expects an Array or Set value for its binding, but got ${Object.prototype.toString.call(t).slice(8, -1)}.`
    );
    return;
  }
  for (let s = 0, r = e.options.length; s < r; s++) {
    const i = e.options[s], l = wn(i);
    if (n)
      if (o) {
        const a = typeof l;
        a === "string" || a === "number" ? i.selected = t.some((f) => String(f) === String(l)) : i.selected = ns(t, l) > -1;
      } else
        i.selected = t.has(l);
    else if (Dn(wn(i), t)) {
      e.selectedIndex !== s && (e.selectedIndex = s);
      return;
    }
  }
  !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
}
function wn(e) {
  return "_value" in e ? e._value : e.value;
}
function Li(e, t) {
  const n = t ? "_trueValue" : "_falseValue";
  return n in e ? e[n] : t;
}
const Qa = ["ctrl", "shift", "alt", "meta"], Xa = {
  stop: (e) => e.stopPropagation(),
  prevent: (e) => e.preventDefault(),
  self: (e) => e.target !== e.currentTarget,
  ctrl: (e) => !e.ctrlKey,
  shift: (e) => !e.shiftKey,
  alt: (e) => !e.altKey,
  meta: (e) => !e.metaKey,
  left: (e) => "button" in e && e.button !== 0,
  middle: (e) => "button" in e && e.button !== 1,
  right: (e) => "button" in e && e.button !== 2,
  exact: (e, t) => Qa.some((n) => e[`${n}Key`] && !t.includes(n))
}, ji = (e, t) => {
  const n = e._withMods || (e._withMods = {}), o = t.join(".");
  return n[o] || (n[o] = (s, ...r) => {
    for (let i = 0; i < t.length; i++) {
      const l = Xa[t[i]];
      if (l && l(s, t)) return;
    }
    return e(s, ...r);
  });
}, Za = /* @__PURE__ */ ae({ patchProp: Ga }, Va);
let vr;
function eu() {
  return vr || (vr = na(Za));
}
const tu = (...e) => {
  const t = eu().createApp(...e);
  process.env.NODE_ENV !== "production" && (ou(t), su(t));
  const { mount: n } = t;
  return t.mount = (o) => {
    const s = ru(o);
    if (!s) return;
    const r = t._component;
    !k(r) && !r.render && !r.template && (r.template = s.innerHTML), s.nodeType === 1 && (s.textContent = "");
    const i = n(s, !1, nu(s));
    return s instanceof Element && (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), i;
  }, t;
};
function nu(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function ou(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => ol(t) || sl(t) || rl(t),
    writable: !1
  });
}
function su(e) {
  {
    const t = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        Qe(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const n = e.config.compilerOptions, o = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return Qe(o), n;
      },
      set() {
        Qe(o);
      }
    });
  }
}
function ru(e) {
  if (le(e)) {
    const t = document.querySelector(e);
    return process.env.NODE_ENV !== "production" && !t && Qe(
      `Failed to mount app: mount target selector "${e}" returned null.`
    ), t;
  }
  return process.env.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && Qe(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), e;
}
/**
* vue v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function iu() {
  Na();
}
process.env.NODE_ENV !== "production" && iu();
const lu = { class: "filters" }, cu = { class: "search-box" }, au = ["value"], uu = ["value"], fu = ["value"], pu = /* @__PURE__ */ Mt({
  __name: "Filters",
  props: {
    searchQuery: {},
    selectedCategory: {},
    categories: {}
  },
  emits: ["update:searchQuery", "update:selectedCategory"],
  setup(e) {
    return (t, n) => (U(), J("div", lu, [
      m("div", cu, [
        n[2] || (n[2] = m("svg", {
          class: "search-icon",
          viewBox: "0 0 24 24",
          width: "18",
          height: "18"
        }, [
          m("path", { d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" })
        ], -1)),
        m("input", {
          value: e.searchQuery,
          onInput: n[0] || (n[0] = (o) => t.$emit("update:searchQuery", o.target.value)),
          type: "text",
          placeholder: "Rechercher...",
          class: "search-input"
        }, null, 40, au)
      ]),
      m("select", {
        value: e.selectedCategory,
        onChange: n[1] || (n[1] = (o) => t.$emit("update:selectedCategory", o.target.value)),
        class: "category-filter"
      }, [
        n[3] || (n[3] = m("option", { value: "" }, "Toutes catégories", -1)),
        (U(!0), J(me, null, bn(e.categories, (o) => (U(), J("option", {
          key: o,
          value: o
        }, xe(o), 9, fu))), 128))
      ], 40, uu)
    ]));
  }
}), Pt = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, s] of t)
    n[o] = s;
  return n;
}, du = /* @__PURE__ */ Pt(pu, [["__scopeId", "data-v-45b9fae5"]]), hu = { class: "view-switch" }, gu = /* @__PURE__ */ Mt({
  __name: "ViewSwitch",
  props: {
    viewMode: {}
  },
  emits: ["update:viewMode"],
  setup(e) {
    return (t, n) => (U(), J("div", hu, [
      m("button", {
        onClick: n[0] || (n[0] = (o) => t.$emit("update:viewMode", "grid")),
        class: Bt([{ active: e.viewMode === "grid" }, "view-button"]),
        title: "Vue grille"
      }, [...n[3] || (n[3] = [
        m("svg", {
          viewBox: "0 0 24 24",
          width: "18",
          height: "18"
        }, [
          m("path", { d: "M4 11h5V5H4v6zm0 7h5v-6H4v6zm6 0h5v-6h-5v6zm6 0h5v-6h-5v6zm-6-7h5V5h-5v6zm6-6v6h5V5h-5z" })
        ], -1)
      ])], 2),
      m("button", {
        onClick: n[1] || (n[1] = (o) => t.$emit("update:viewMode", "list")),
        class: Bt([{ active: e.viewMode === "list" }, "view-button"]),
        title: "Vue liste"
      }, [...n[4] || (n[4] = [
        m("svg", {
          viewBox: "0 0 24 24",
          width: "18",
          height: "18"
        }, [
          m("path", { d: "M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z" })
        ], -1)
      ])], 2),
      m("button", {
        onClick: n[2] || (n[2] = (o) => t.$emit("update:viewMode", "kanban")),
        class: Bt([{ active: e.viewMode === "kanban" }, "view-button"]),
        title: "Vue kanban"
      }, [...n[5] || (n[5] = [
        m("svg", {
          viewBox: "0 0 24 24",
          width: "18",
          height: "18"
        }, [
          m("path", { d: "M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z" })
        ], -1)
      ])], 2)
    ]));
  }
}), mu = /* @__PURE__ */ Pt(gu, [["__scopeId", "data-v-0725c556"]]), vu = ["href", "target", "rel", "title", "onClick"], _u = ["src", "alt"], bu = { class: "app-name" }, Eu = /* @__PURE__ */ Mt({
  __name: "GridView",
  props: {
    apps: {},
    itemsPerRow: {},
    openInNewTab: { type: Boolean }
  },
  emits: ["appClick"],
  setup(e) {
    return (t, n) => (U(), J("div", {
      class: "apps-grid",
      style: lt({ gridTemplateColumns: `repeat(${e.itemsPerRow}, 1fr)` })
    }, [
      (U(!0), J(me, null, bn(e.apps, (o) => (U(), J("a", {
        key: o.id,
        href: o.url,
        target: e.openInNewTab ? "_blank" : "_self",
        rel: e.openInNewTab ? "noopener noreferrer" : void 0,
        class: "app-item",
        title: o.description,
        onClick: (s) => t.$emit("appClick", o, s)
      }, [
        m("div", {
          class: "app-icon",
          style: lt({ backgroundColor: o.color + "20" })
        }, [
          o.icon ? (U(), J("img", {
            key: 0,
            src: o.icon,
            alt: o.name,
            loading: "lazy"
          }, null, 8, _u)) : (U(), J("div", {
            key: 1,
            class: "app-icon-fallback",
            style: lt({ backgroundColor: o.color })
          }, xe(o.name.charAt(0).toUpperCase()), 5))
        ], 4),
        m("span", bu, xe(o.name), 1)
      ], 8, vu))), 128))
    ], 4));
  }
}), yu = /* @__PURE__ */ Pt(Eu, [["__scopeId", "data-v-c9c4fa5e"]]), Nu = { class: "apps-list" }, wu = ["href", "target", "rel", "onClick"], Ou = ["src", "alt"], Vu = { class: "app-list-content" }, Cu = { class: "app-list-name" }, Du = { class: "app-list-category" }, Su = /* @__PURE__ */ Mt({
  __name: "ListView",
  props: {
    apps: {},
    openInNewTab: { type: Boolean }
  },
  emits: ["appClick"],
  setup(e) {
    return (t, n) => (U(), J("div", Nu, [
      (U(!0), J(me, null, bn(e.apps, (o) => (U(), J("a", {
        key: o.id,
        href: o.url,
        target: e.openInNewTab ? "_blank" : "_self",
        rel: e.openInNewTab ? "noopener noreferrer" : void 0,
        class: "app-list-item",
        onClick: (s) => t.$emit("appClick", o, s)
      }, [
        o.icon ? (U(), J("img", {
          key: 0,
          src: o.icon,
          alt: o.name,
          class: "app-list-icon",
          loading: "lazy"
        }, null, 8, Ou)) : (U(), J("div", {
          key: 1,
          class: "app-list-icon-fallback",
          style: lt({ backgroundColor: o.color })
        }, xe(o.name.charAt(0).toUpperCase()), 5)),
        m("div", Vu, [
          m("span", Cu, xe(o.name), 1),
          m("span", Du, xe(o.category), 1)
        ])
      ], 8, wu))), 128))
    ]));
  }
}), xu = /* @__PURE__ */ Pt(Su, [["__scopeId", "data-v-c0f2ddbb"]]), Tu = { class: "apps-kanban" }, Au = { class: "kanban-column-title" }, $u = { class: "kanban-cards" }, Iu = ["href", "target", "rel", "onClick"], Mu = ["src", "alt"], Pu = { class: "kanban-card-name" }, ku = /* @__PURE__ */ Mt({
  __name: "KanbanView",
  props: {
    apps: {},
    openInNewTab: { type: Boolean }
  },
  emits: ["appClick"],
  setup(e) {
    const t = e, n = hn(() => {
      const s = new Set(t.apps.map((r) => r.category));
      return Array.from(s).sort();
    }), o = (s) => t.apps.filter((r) => r.category === s);
    return (s, r) => (U(), J("div", Tu, [
      (U(!0), J(me, null, bn(n.value, (i) => (U(), J("div", {
        key: i,
        class: "kanban-column"
      }, [
        m("h3", Au, xe(i), 1),
        m("div", $u, [
          (U(!0), J(me, null, bn(o(i), (l) => (U(), J("a", {
            key: l.id,
            href: l.url,
            target: e.openInNewTab ? "_blank" : "_self",
            rel: e.openInNewTab ? "noopener noreferrer" : void 0,
            class: "kanban-card",
            onClick: (a) => s.$emit("appClick", l, a)
          }, [
            l.icon ? (U(), J("img", {
              key: 0,
              src: l.icon,
              alt: l.name,
              class: "kanban-card-icon",
              loading: "lazy"
            }, null, 8, Mu)) : (U(), J("div", {
              key: 1,
              class: "kanban-card-icon-fallback",
              style: lt({ backgroundColor: l.color })
            }, xe(l.name.charAt(0).toUpperCase()), 5)),
            m("span", Pu, xe(l.name), 1)
          ], 8, Iu))), 128))
        ])
      ]))), 128))
    ]));
  }
}), Fu = /* @__PURE__ */ Pt(ku, [["__scopeId", "data-v-355c86d9"]]), Ru = { class: "settings-body" }, Lu = { class: "setting-group" }, ju = { class: "setting-control" }, Hu = {
  key: 0,
  class: "setting-group"
}, Uu = { class: "setting-label" }, Bu = { class: "setting-value" }, Ku = { class: "setting-control" }, Wu = { class: "setting-group" }, zu = { class: "setting-control" }, Gu = { class: "setting-toggle" }, qu = { class: "setting-group" }, Ju = { class: "setting-control" }, Yu = { class: "setting-toggle" }, Qu = { class: "setting-group" }, Xu = { class: "setting-control" }, Zu = { class: "setting-toggle" }, ef = { class: "setting-group" }, tf = { class: "setting-control" }, nf = { class: "setting-toggle" }, of = { class: "setting-group" }, sf = { class: "setting-control" }, rf = { class: "setting-toggle" }, lf = { class: "setting-group" }, cf = { class: "setting-control setting-color" }, af = /* @__PURE__ */ Mt({
  __name: "SettingsPanel",
  props: {
    isOpen: { type: Boolean },
    currentSettings: {}
  },
  emits: ["close", "save"],
  setup(e, { emit: t }) {
    const n = e, o = t, s = We({ ...n.currentSettings });
    $t(() => n.currentSettings, (a) => {
      s.value = { ...a };
    }, { deep: !0 });
    const r = () => {
      o("close");
    }, i = () => {
      o("save", s.value), r();
    }, l = () => {
      s.value = {
        viewMode: "grid",
        itemsPerRow: 3,
        sortAlphabetically: !0,
        enableFilters: !0,
        enableViewSwitch: !0,
        openInNewTab: !1,
        userLinksOpenInNewTab: !1,
        triggerIconColor: "currentColor"
      };
    };
    return (a, f) => (U(), gt(Sa, { name: "settings-fade" }, {
      default: Zr(() => [
        e.isOpen ? (U(), J("div", {
          key: 0,
          class: "settings-overlay",
          onClick: r
        }, [
          m("div", {
            class: "settings-panel",
            onClick: f[9] || (f[9] = ji(() => {
            }, ["stop"]))
          }, [
            m("div", { class: "settings-header" }, [
              f[11] || (f[11] = m("h2", { class: "settings-title" }, [
                m("svg", {
                  viewBox: "0 0 24 24",
                  width: "24",
                  height: "24",
                  fill: "currentColor"
                }, [
                  m("path", { d: "M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z" })
                ]),
                ro(" Paramètres de l'App Switcher ")
              ], -1)),
              m("button", {
                class: "settings-close",
                onClick: r,
                "aria-label": "Fermer les paramètres"
              }, [...f[10] || (f[10] = [
                m("svg", {
                  viewBox: "0 0 24 24",
                  width: "24",
                  height: "24"
                }, [
                  m("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" })
                ], -1)
              ])])
            ]),
            m("div", Ru, [
              m("div", Lu, [
                f[13] || (f[13] = m("label", { class: "setting-label" }, "Mode d'affichage", -1)),
                m("div", ju, [
                  tt(m("select", {
                    "onUpdate:modelValue": f[0] || (f[0] = (u) => s.value.viewMode = u),
                    class: "setting-select"
                  }, [...f[12] || (f[12] = [
                    m("option", { value: "grid" }, "Grille", -1),
                    m("option", { value: "list" }, "Liste", -1),
                    m("option", { value: "kanban" }, "Kanban", -1)
                  ])], 512), [
                    [Ya, s.value.viewMode]
                  ])
                ])
              ]),
              s.value.viewMode === "grid" ? (U(), J("div", Hu, [
                m("label", Uu, [
                  f[14] || (f[14] = ro(" Applications par ligne ", -1)),
                  m("span", Bu, xe(s.value.itemsPerRow), 1)
                ]),
                m("div", Ku, [
                  tt(m("input", {
                    "onUpdate:modelValue": f[1] || (f[1] = (u) => s.value.itemsPerRow = u),
                    type: "range",
                    min: "2",
                    max: "6",
                    step: "1",
                    class: "setting-range"
                  }, null, 512), [
                    [
                      Mo,
                      s.value.itemsPerRow,
                      void 0,
                      { number: !0 }
                    ]
                  ]),
                  f[15] || (f[15] = m("div", { class: "range-labels" }, [
                    m("span", null, "2"),
                    m("span", null, "6")
                  ], -1))
                ])
              ])) : Ge("", !0),
              m("div", Wu, [
                f[17] || (f[17] = m("label", { class: "setting-label" }, "Tri alphabétique", -1)),
                m("div", zu, [
                  m("label", Gu, [
                    tt(m("input", {
                      "onUpdate:modelValue": f[2] || (f[2] = (u) => s.value.sortAlphabetically = u),
                      type: "checkbox"
                    }, null, 512), [
                      [sn, s.value.sortAlphabetically]
                    ]),
                    f[16] || (f[16] = m("span", { class: "toggle-slider" }, null, -1))
                  ])
                ])
              ]),
              m("div", qu, [
                f[19] || (f[19] = m("label", { class: "setting-label" }, "Afficher les filtres", -1)),
                m("div", Ju, [
                  m("label", Yu, [
                    tt(m("input", {
                      "onUpdate:modelValue": f[3] || (f[3] = (u) => s.value.enableFilters = u),
                      type: "checkbox"
                    }, null, 512), [
                      [sn, s.value.enableFilters]
                    ]),
                    f[18] || (f[18] = m("span", { class: "toggle-slider" }, null, -1))
                  ])
                ])
              ]),
              m("div", Qu, [
                f[21] || (f[21] = m("label", { class: "setting-label" }, "Changement de vue", -1)),
                m("div", Xu, [
                  m("label", Zu, [
                    tt(m("input", {
                      "onUpdate:modelValue": f[4] || (f[4] = (u) => s.value.enableViewSwitch = u),
                      type: "checkbox"
                    }, null, 512), [
                      [sn, s.value.enableViewSwitch]
                    ]),
                    f[20] || (f[20] = m("span", { class: "toggle-slider" }, null, -1))
                  ])
                ])
              ]),
              m("div", ef, [
                f[23] || (f[23] = m("label", { class: "setting-label" }, "Ouvrir apps dans nouvel onglet", -1)),
                m("div", tf, [
                  m("label", nf, [
                    tt(m("input", {
                      "onUpdate:modelValue": f[5] || (f[5] = (u) => s.value.openInNewTab = u),
                      type: "checkbox"
                    }, null, 512), [
                      [sn, s.value.openInNewTab]
                    ]),
                    f[22] || (f[22] = m("span", { class: "toggle-slider" }, null, -1))
                  ])
                ])
              ]),
              m("div", of, [
                f[25] || (f[25] = m("label", { class: "setting-label" }, "Ouvrir liens utilisateur dans nouvel onglet", -1)),
                m("div", sf, [
                  m("label", rf, [
                    tt(m("input", {
                      "onUpdate:modelValue": f[6] || (f[6] = (u) => s.value.userLinksOpenInNewTab = u),
                      type: "checkbox"
                    }, null, 512), [
                      [sn, s.value.userLinksOpenInNewTab]
                    ]),
                    f[24] || (f[24] = m("span", { class: "toggle-slider" }, null, -1))
                  ])
                ])
              ]),
              m("div", lf, [
                f[26] || (f[26] = m("label", { class: "setting-label" }, "Couleur de l'icône", -1)),
                m("div", cf, [
                  tt(m("input", {
                    "onUpdate:modelValue": f[7] || (f[7] = (u) => s.value.triggerIconColor = u),
                    type: "color",
                    class: "setting-color-input"
                  }, null, 512), [
                    [Mo, s.value.triggerIconColor]
                  ]),
                  tt(m("input", {
                    "onUpdate:modelValue": f[8] || (f[8] = (u) => s.value.triggerIconColor = u),
                    type: "text",
                    class: "setting-text-input",
                    placeholder: "#667eea"
                  }, null, 512), [
                    [Mo, s.value.triggerIconColor]
                  ])
                ])
              ])
            ]),
            m("div", { class: "settings-footer" }, [
              m("button", {
                onClick: l,
                class: "btn-secondary"
              }, " Réinitialiser "),
              m("button", {
                onClick: i,
                class: "btn-primary"
              }, " Enregistrer ")
            ])
          ])
        ])) : Ge("", !0)
      ]),
      _: 1
    }));
  }
}), uf = /* @__PURE__ */ Pt(af, [["__scopeId", "data-v-8f505bb4"]]), Po = {}, ff = { class: "app-switcher-wrapper" }, pf = ["aria-expanded"], df = { class: "menu-header" }, hf = { class: "header-actions" }, gf = {
  key: 0,
  class: "menu-controls"
}, mf = {
  key: 1,
  class: "menu-loading"
}, vf = {
  key: 2,
  class: "menu-error"
}, _f = {
  key: 4,
  class: "menu-footer"
}, bf = ["href", "target", "rel"], _r = "pgs-appswitcher-settings", Ef = /* @__PURE__ */ Mt({
  __name: "AppSwitcher.standalone",
  props: {
    apiUrl: { default: void 0 },
    customApps: {},
    onAppClick: {},
    userData: {},
    profileUrl: { default: "https://pgs-user.netlify.app/me" },
    accountUrl: { default: "https://pgs-user.netlify.app/" },
    logoutUrl: { default: "https://pgs-user.netlify.app/logout" },
    openInNewTab: { type: Boolean, default: !1 },
    userLinksOpenInNewTab: { type: Boolean, default: !1 },
    itemsPerRow: { default: 3 },
    viewMode: { default: "grid" },
    enableFilters: { type: Boolean, default: !0 },
    enableViewSwitch: { type: Boolean, default: !0 },
    triggerIconColor: { default: "currentColor" },
    sortAlphabetically: { type: Boolean, default: !0 },
    enableSettings: { type: Boolean, default: !1 }
  },
  setup(e) {
    const o = `${((Po == null ? void 0 : Po.PGS_API_URL) || "").replace(/\/$/, "")}/solution/platform`, s = e, r = We(!1), i = We(!1), l = We([]), a = We(!1), f = We(null), u = We(""), p = We(""), g = () => ({
      viewMode: s.viewMode,
      itemsPerRow: s.itemsPerRow,
      sortAlphabetically: s.sortAlphabetically,
      enableFilters: s.enableFilters,
      enableViewSwitch: s.enableViewSwitch,
      openInNewTab: s.openInNewTab,
      userLinksOpenInNewTab: s.userLinksOpenInNewTab,
      triggerIconColor: s.triggerIconColor
    }), D = We((() => {
      if (!s.enableSettings)
        return g();
      if (typeof window < "u" && window.localStorage)
        try {
          const A = localStorage.getItem(_r);
          if (A)
            return { ...g(), ...JSON.parse(A) };
        } catch (A) {
          console.warn("Failed to load settings:", A);
        }
      return g();
    })()), x = We(D.value.viewMode), ie = hn(() => s.userData ? s.userData : {
      profileUrl: s.profileUrl,
      accountUrl: s.accountUrl,
      logoutUrl: s.logoutUrl
    }), Y = hn(() => {
      const A = new Set(l.value.map((T) => T.category));
      return Array.from(A).sort();
    }), H = hn(() => {
      let A = l.value.filter((T) => {
        const X = T.name.toLowerCase().includes(u.value.toLowerCase()), oe = !p.value || T.category === p.value;
        return X && oe;
      });
      return D.value.sortAlphabetically && (A = A.sort((T, X) => T.name.localeCompare(X.name))), A;
    }), B = () => {
      r.value = !r.value;
    }, ce = () => {
      r.value = !1;
    }, $ = () => {
      i.value = !0;
    }, Q = () => {
      i.value = !1;
    }, pe = (A) => {
      if (D.value = A, x.value = A.viewMode, s.enableSettings && typeof window < "u" && window.localStorage)
        try {
          localStorage.setItem(_r, JSON.stringify(A));
        } catch (T) {
          console.error("Failed to save settings:", T);
        }
    }, re = (A, T) => {
      s.onAppClick && (T.preventDefault(), s.onAppClick(A)), ce();
    }, F = (A) => {
      let T = 0;
      for (let oe = 0; oe < A.length; oe++)
        T = A.charCodeAt(oe) + ((T << 5) - T);
      const X = (T & 16777215).toString(16).toUpperCase();
      return "#" + "00000".substring(0, 6 - X.length) + X;
    }, q = (A) => ({
      "Developer Tools": "#4285F4",
      "Business Suite": "#0F9D58",
      Bot: "#EA4335",
      "Recruitment & Talent": "#F9AB00",
      "SEO & Analytics": "#673AB7"
    })[A] || F(A), Z = async () => {
      if (s.customApps) {
        l.value = s.customApps;
        return;
      }
      a.value = !0, f.value = null;
      const A = s.apiUrl || o;
      try {
        console.log("🔍 Fetching apps from:", A);
        const T = await fetch(A);
        if (!T.ok)
          throw new Error(`Erreur HTTP ${T.status}: ${T.statusText}`);
        const X = T.headers.get("content-type");
        if (X && X.includes("text/html"))
          throw new Error(`L'API a retourné du HTML au lieu de JSON. URL tentée: ${A}. Vérifiez que votre serveur API est démarré et que l'URL est correcte.`);
        const oe = await T.json();
        if (oe.success && Array.isArray(oe.data))
          l.value = oe.data.map((L) => ({
            id: L.slug || L.id,
            name: L.name,
            description: L.description,
            icon: L.logo,
            url: L.ctaLink,
            category: L.category,
            color: q(L.category)
          })), console.log("✅ Apps loaded successfully:", l.value.length, "apps");
        else
          throw new Error("Format de réponse invalide");
      } catch (T) {
        f.value = T instanceof Error ? `${T.message}` : "Une erreur est survenue", console.error("❌ Error fetching apps from", A, ":", T);
      } finally {
        a.value = !1;
      }
    }, S = (A) => {
      A.key === "Escape" && (i.value ? Q() : r.value && ce());
    };
    return ps(() => {
      Z(), document.addEventListener("keydown", S);
    }), ds(() => {
      document.removeEventListener("keydown", S);
    }), $t(() => s.apiUrl, () => {
      Z();
    }), $t(() => s.customApps, (A) => {
      A && (l.value = A);
    }), $t(() => s.viewMode, (A) => {
      s.enableSettings || (x.value = A, D.value.viewMode = A);
    }), (A, T) => (U(), J("div", ff, [
      m("button", {
        class: "app-switcher-trigger",
        onClick: B,
        "aria-expanded": r.value,
        "aria-label": "Sélecteur d'applications"
      }, [
        (U(), J("svg", {
          class: "apps-icon",
          viewBox: "0 0 24 24",
          width: "24",
          height: "24",
          style: lt({ fill: D.value.triggerIconColor })
        }, [...T[4] || (T[4] = [
          m("path", { d: "M6 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm12 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM6 14c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM6 20c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" }, null, -1)
        ])], 4))
      ], 8, pf),
      r.value ? (U(), J("div", {
        key: 0,
        class: "app-switcher-overlay",
        onClick: ce
      }, [
        m("div", {
          class: "app-switcher-menu",
          onClick: T[3] || (T[3] = ji(() => {
          }, ["stop"])),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "app-switcher-title"
        }, [
          m("div", df, [
            T[7] || (T[7] = m("h2", {
              id: "app-switcher-title",
              class: "menu-title"
            }, " Applications PGS ", -1)),
            m("div", hf, [
              e.enableSettings ? (U(), J("button", {
                key: 0,
                class: "settings-button",
                onClick: $,
                "aria-label": "Paramètres"
              }, [...T[5] || (T[5] = [
                m("svg", {
                  viewBox: "0 0 24 24",
                  width: "20",
                  height: "20"
                }, [
                  m("path", { d: "M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z" })
                ], -1)
              ])])) : Ge("", !0),
              m("button", {
                class: "close-button",
                onClick: ce,
                "aria-label": "Fermer le menu"
              }, [...T[6] || (T[6] = [
                m("svg", {
                  viewBox: "0 0 24 24",
                  width: "24",
                  height: "24"
                }, [
                  m("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" })
                ], -1)
              ])])
            ])
          ]),
          D.value.enableFilters || D.value.enableViewSwitch ? (U(), J("div", gf, [
            D.value.enableFilters ? (U(), gt(du, {
              key: 0,
              searchQuery: u.value,
              "onUpdate:searchQuery": T[0] || (T[0] = (X) => u.value = X),
              selectedCategory: p.value,
              "onUpdate:selectedCategory": T[1] || (T[1] = (X) => p.value = X),
              categories: Y.value
            }, null, 8, ["searchQuery", "selectedCategory", "categories"])) : Ge("", !0),
            D.value.enableViewSwitch ? (U(), gt(mu, {
              key: 1,
              viewMode: x.value,
              "onUpdate:viewMode": T[2] || (T[2] = (X) => x.value = X)
            }, null, 8, ["viewMode"])) : Ge("", !0)
          ])) : Ge("", !0),
          a.value ? (U(), J("div", mf, [...T[8] || (T[8] = [
            m("div", { class: "spinner" }, null, -1),
            m("p", null, "Chargement...", -1)
          ])])) : f.value ? (U(), J("div", vf, [
            m("p", null, xe(f.value), 1),
            m("button", {
              onClick: Z,
              class: "retry-button"
            }, " Réessayer ")
          ])) : (U(), J(me, { key: 3 }, [
            x.value === "grid" ? (U(), gt(yu, {
              key: 0,
              apps: H.value,
              itemsPerRow: D.value.itemsPerRow,
              openInNewTab: D.value.openInNewTab,
              onAppClick: re
            }, null, 8, ["apps", "itemsPerRow", "openInNewTab"])) : x.value === "list" ? (U(), gt(xu, {
              key: 1,
              apps: H.value,
              openInNewTab: D.value.openInNewTab,
              onAppClick: re
            }, null, 8, ["apps", "openInNewTab"])) : x.value === "kanban" ? (U(), gt(Fu, {
              key: 2,
              apps: H.value,
              openInNewTab: D.value.openInNewTab,
              onAppClick: re
            }, null, 8, ["apps", "openInNewTab"])) : Ge("", !0)
          ], 64)),
          !a.value && !f.value && ie.value ? (U(), J("div", _f, [
            m("a", {
              href: ie.value.accountUrl,
              target: D.value.userLinksOpenInNewTab ? "_blank" : "_self",
              rel: D.value.userLinksOpenInNewTab ? "noopener noreferrer" : void 0,
              class: "footer-link"
            }, [...T[9] || (T[9] = [
              m("svg", {
                viewBox: "0 0 24 24",
                width: "18",
                height: "18"
              }, [
                m("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" })
              ], -1),
              ro(" Gérer votre compte ", -1)
            ])], 8, bf)
          ])) : Ge("", !0)
        ])
      ])) : Ge("", !0),
      e.enableSettings ? (U(), gt(uf, {
        key: 1,
        isOpen: i.value,
        currentSettings: D.value,
        onClose: Q,
        onSave: pe
      }, null, 8, ["isOpen", "currentSettings"])) : Ge("", !0)
    ]));
  }
}), yf = /* @__PURE__ */ Pt(Ef, [["__scopeId", "data-v-670d6dab"]]);
class Nf {
  constructor(t = {}) {
    yo(this, "app", null);
    yo(this, "container", null);
    this.mount(t);
  }
  mount(t = {}) {
    let n = null;
    t.target && (typeof t.target == "string" ? n = document.querySelector(t.target) : n = t.target), n || (n = document.createElement("div"), n.id = "pgs-app-switcher", document.body.appendChild(n)), this.container = n, this.app = tu({
      render: () => ki(yf, {
        apiUrl: t.apiUrl,
        customApps: t.customApps,
        onAppClick: t.onAppClick,
        userData: t.userData,
        profileUrl: t.profileUrl,
        accountUrl: t.accountUrl,
        logoutUrl: t.logoutUrl,
        openInNewTab: t.openInNewTab,
        userLinksOpenInNewTab: t.userLinksOpenInNewTab,
        itemsPerRow: t.itemsPerRow,
        viewMode: t.viewMode,
        enableFilters: t.enableFilters,
        enableViewSwitch: t.enableViewSwitch,
        triggerIconColor: t.triggerIconColor,
        sortAlphabetically: t.sortAlphabetically,
        enableSettings: t.enableSettings
      })
    }), this.app.mount(this.container);
  }
  unmount() {
    this.app && (this.app.unmount(), this.app = null), this.container && this.container.id === "pgs-app-switcher" && this.container.remove(), this.container = null;
  }
  update(t) {
    this.unmount(), this.mount(t);
  }
}
typeof window < "u" && (window.PGSAppSwitcher = Nf);
export {
  Nf as PGSAppSwitcher,
  Nf as default
};
