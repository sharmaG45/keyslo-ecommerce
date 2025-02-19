"use strict";

function gtm4wp_make_sure_is_float(e) {
    return "string" == typeof e ? (e = parseFloat(e), isNaN(e) && (e = 0)) : "number" != typeof e && (e = 0), e = e.toFixed(2)
}

function gtm4wp_push_ecommerce(e, t, r) {
    var n = 3 < arguments.length && void 0 !== arguments[3] && arguments[3],
        a = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 2e3,
        r = r || {},
        t = (r.items = t, gtm4wp_clear_ecommerce && window[gtm4wp_datalayer_name].push({
            ecommerce: null
        }), {
            event: e,
            ecommerce: r
        });
    n && (t.eventCallback = n, t.eventTimeout = a), window[gtm4wp_datalayer_name].push(t)
}

function gtm4wp_read_from_json(e) {
    var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : ["productlink", "internal_id"];
    try {
        var r = JSON.parse(e);
        if (r) {
            if (r.price && (r.price = gtm4wp_make_sure_is_float(r.price)), t && 0 < t.length)
                for (var n = 0; n < t.length; n++) delete r[t[n]];
            return r
        }
    } catch (e) {
        console && console.error && console.error(e.message)
    }
    return !1
}

function gtm4wp_read_json_from_node(e, t) {
    return !!(e && e.dataset && e.dataset[t]) && gtm4wp_read_from_json(e.dataset[t], 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : ["productlink", "internal_id"])
}

function gtm4wp_update_json_in_node(e, t, r, n) {
    if (e && e.dataset && e.dataset[t]) try {
        var a = JSON.parse(e.dataset[t]);
        if (a) return a.price && (a.price = gtm4wp_make_sure_is_float(a.price)), a[r] = n, e.dataset[t] = JSON.stringify(a), !0
    } catch (e) {
        console && console.error && console.error(e.message)
    }
    return !1
}