(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/my-next-app/src/utils/authStorage.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clearAuth",
    ()=>clearAuth,
    "getAuth",
    ()=>getAuth,
    "isAuthenticated",
    ()=>isAuthenticated,
    "saveAuth",
    ()=>saveAuth
]);
const saveAuth = (token, user)=>{
    if ("TURBOPACK compile-time truthy", 1) {
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
    }
};
const getAuth = ()=>{
    if ("TURBOPACK compile-time truthy", 1) {
        const token = localStorage.getItem('token');
        const user = localStorage.getItem('user');
        return {
            token,
            user: user ? JSON.parse(user) : null
        };
    }
    //TURBOPACK unreachable
    ;
};
const clearAuth = ()=>{
    if ("TURBOPACK compile-time truthy", 1) {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    }
};
const isAuthenticated = ()=>{
    const { token } = getAuth();
    return !!token;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/my-next-app/src/components/LogoutWithConfirmation.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LogoutWithConfirmation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-next-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-next-app/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-next-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-next-app/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$src$2f$utils$2f$authStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-next-app/src/utils/authStorage.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function LogoutWithConfirmation() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11);
    if ($[0] !== "4f01ceb0c03499715a326747262d362267a45dd40bb47b54c4f7e28ae2b0f6af") {
        for(let $i = 0; $i < 11; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "4f01ceb0c03499715a326747262d362267a45dd40bb47b54c4f7e28ae2b0f6af";
    }
    const [showConfirm, setShowConfirm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "LogoutWithConfirmation[handleLogout]": (e)=>{
                e.preventDefault();
                e.stopPropagation();
                setShowConfirm(true);
            }
        })["LogoutWithConfirmation[handleLogout]"];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const handleLogout = t0;
    let t1;
    if ($[2] !== router) {
        t1 = ({
            "LogoutWithConfirmation[confirmLogout]": ()=>{
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$src$2f$utils$2f$authStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearAuth"])();
                setShowConfirm(false);
                router.push("/");
            }
        })["LogoutWithConfirmation[confirmLogout]"];
        $[2] = router;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    const confirmLogout = t1;
    let t2;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "LogoutWithConfirmation[cancelLogout]": ()=>{
                setShowConfirm(false);
            }
        })["LogoutWithConfirmation[cancelLogout]"];
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    const cancelLogout = t2;
    let t3;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: handleLogout,
            className: "flex items-center px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg border border-red-200 hover:border-red-300 transition-colors",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                    className: "fas fa-sign-out-alt mr-2"
                }, void 0, false, {
                    fileName: "[project]/my-next-app/src/components/LogoutWithConfirmation.tsx",
                    lineNumber: 60,
                    columnNumber: 190
                }, this),
                "Đăng xuất"
            ]
        }, void 0, true, {
            fileName: "[project]/my-next-app/src/components/LogoutWithConfirmation.tsx",
            lineNumber: 60,
            columnNumber: 10
        }, this);
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] !== confirmLogout || $[7] !== showConfirm) {
        t4 = showConfirm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-[9999]",
            onClick: _LogoutWithConfirmationDivOnClick,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-lg p-6 max-w-md w-full mx-4",
                onClick: _LogoutWithConfirmationDivOnClick2,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-6 h-6 text-red-600",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                                    }, void 0, false, {
                                        fileName: "[project]/my-next-app/src/components/LogoutWithConfirmation.tsx",
                                        lineNumber: 67,
                                        columnNumber: 499
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/my-next-app/src/components/LogoutWithConfirmation.tsx",
                                    lineNumber: 67,
                                    columnNumber: 407
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/my-next-app/src/components/LogoutWithConfirmation.tsx",
                                lineNumber: 67,
                                columnNumber: 318
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-semibold text-gray-900",
                                children: "Xác nhận đăng xuất"
                            }, void 0, false, {
                                fileName: "[project]/my-next-app/src/components/LogoutWithConfirmation.tsx",
                                lineNumber: 67,
                                columnNumber: 722
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/my-next-app/src/components/LogoutWithConfirmation.tsx",
                        lineNumber: 67,
                        columnNumber: 278
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600 mb-6",
                        children: "⚠️ Bạn có chắc chắn muốn đăng xuất khỏi hệ thống không?"
                    }, void 0, false, {
                        fileName: "[project]/my-next-app/src/components/LogoutWithConfirmation.tsx",
                        lineNumber: 67,
                        columnNumber: 803
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-end space-x-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: cancelLogout,
                                className: "px-4 py-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors",
                                children: "Hủy"
                            }, void 0, false, {
                                fileName: "[project]/my-next-app/src/components/LogoutWithConfirmation.tsx",
                                lineNumber: 67,
                                columnNumber: 940
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: confirmLogout,
                                className: "px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors",
                                children: "Đăng xuất"
                            }, void 0, false, {
                                fileName: "[project]/my-next-app/src/components/LogoutWithConfirmation.tsx",
                                lineNumber: 67,
                                columnNumber: 1078
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/my-next-app/src/components/LogoutWithConfirmation.tsx",
                        lineNumber: 67,
                        columnNumber: 896
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/my-next-app/src/components/LogoutWithConfirmation.tsx",
                lineNumber: 67,
                columnNumber: 171
            }, this)
        }, void 0, false, {
            fileName: "[project]/my-next-app/src/components/LogoutWithConfirmation.tsx",
            lineNumber: 67,
            columnNumber: 25
        }, this);
        $[6] = confirmLogout;
        $[7] = showConfirm;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    let t5;
    if ($[9] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                t3,
                t4
            ]
        }, void 0, true);
        $[9] = t4;
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    return t5;
}
_s(LogoutWithConfirmation, "Zs5/wMri7tIaSnJxUn5Pa3hXTA0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = LogoutWithConfirmation;
function _LogoutWithConfirmationDivOnClick2(e_1) {
    return e_1.stopPropagation();
}
function _LogoutWithConfirmationDivOnClick(e_0) {
    return e_0.stopPropagation();
}
var _c;
__turbopack_context__.k.register(_c, "LogoutWithConfirmation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/my-next-app/src/components/AdminLayout.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-next-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-next-app/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-next-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-next-app/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$src$2f$components$2f$LogoutWithConfirmation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-next-app/src/components/LogoutWithConfirmation.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$src$2f$utils$2f$authStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-next-app/src/utils/authStorage.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function AdminLayout(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(34);
    if ($[0] !== "84d58b57fec79f7d8487ac68193d795fece8ca8a402db019c235b54218a32d51") {
        for(let $i = 0; $i < 34; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "84d58b57fec79f7d8487ac68193d795fece8ca8a402db019c235b54218a32d51";
    }
    const { children, currentPage: t1 } = t0;
    const currentPage = t1 === undefined ? "dashboard" : t1;
    const [sidebarOpen, setSidebarOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t2;
    let t3;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "AdminLayout[useEffect()]": ()=>{
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$src$2f$utils$2f$authStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAuthenticated"])()) {
                    const { user: user_0 } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$src$2f$utils$2f$authStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAuth"])();
                    setUser(user_0);
                }
            }
        })["AdminLayout[useEffect()]"];
        t3 = [];
        $[1] = t2;
        $[2] = t3;
    } else {
        t2 = $[1];
        t3 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    let t4;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = [
            {
                id: "dashboard",
                label: "Dashboard",
                icon: "fas fa-chart-line",
                href: "/dashboard"
            },
            {
                id: "orders",
                label: "\u0110\u01A1n h\xE0ng",
                icon: "fas fa-shopping-cart",
                href: "/orders"
            },
            {
                id: "products",
                label: "S\u1EA3n ph\u1EA9m",
                icon: "fas fa-box",
                href: "/products"
            },
            {
                id: "categories",
                label: "Lo\u1EA1i s\u1EA3n ph\u1EA9m",
                icon: "fas fa-list",
                href: "/categories"
            },
            {
                id: "users",
                label: "Ng\u01B0\u1EDDi d\xF9ng",
                icon: "fas fa-users",
                href: "/users"
            },
            {
                id: "reviews",
                label: "\u0110\xE1nh gi\xE1",
                icon: "fas fa-star",
                href: "/reviews"
            },
            {
                id: "vouchers",
                label: "Voucher",
                icon: "fas fa-tags",
                href: "/vouchers"
            }
        ];
        $[3] = t4;
    } else {
        t4 = $[3];
    }
    const menuItems = t4;
    const t5 = `fixed inset-y-0 left-0 z-50 w-64 bg-green-600 transform transition-transform duration-300 ease-in-out ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`;
    let t6;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center h-16 px-4 bg-green-700",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                        className: "fas fa-coffee text-white text-2xl mr-3"
                    }, void 0, false, {
                        fileName: "[project]/my-next-app/src/components/AdminLayout.tsx",
                        lineNumber: 94,
                        columnNumber: 118
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-white text-xl font-bold",
                        children: "UTEShop"
                    }, void 0, false, {
                        fileName: "[project]/my-next-app/src/components/AdminLayout.tsx",
                        lineNumber: 94,
                        columnNumber: 174
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/my-next-app/src/components/AdminLayout.tsx",
                lineNumber: 94,
                columnNumber: 83
            }, this)
        }, void 0, false, {
            fileName: "[project]/my-next-app/src/components/AdminLayout.tsx",
            lineNumber: 94,
            columnNumber: 10
        }, this);
        $[4] = t6;
    } else {
        t6 = $[4];
    }
    let t7;
    if ($[5] !== currentPage) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: "mt-8",
            children: menuItems.map({
                "AdminLayout[menuItems.map()]": (item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: item.href,
                        className: `flex items-center px-6 py-3 text-white hover:bg-green-700 transition-colors ${currentPage === item.id ? "bg-green-700 border-r-4 border-white" : ""}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: `${item.icon} mr-3`
                            }, void 0, false, {
                                fileName: "[project]/my-next-app/src/components/AdminLayout.tsx",
                                lineNumber: 102,
                                columnNumber: 249
                            }, this),
                            item.label
                        ]
                    }, item.id, true, {
                        fileName: "[project]/my-next-app/src/components/AdminLayout.tsx",
                        lineNumber: 102,
                        columnNumber: 49
                    }, this)
            }["AdminLayout[menuItems.map()]"])
        }, void 0, false, {
            fileName: "[project]/my-next-app/src/components/AdminLayout.tsx",
            lineNumber: 101,
            columnNumber: 10
        }, this);
        $[5] = currentPage;
        $[6] = t7;
    } else {
        t7 = $[6];
    }
    let t8;
    if ($[7] !== t5 || $[8] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t5,
            children: [
                t6,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/my-next-app/src/components/AdminLayout.tsx",
            lineNumber: 111,
            columnNumber: 10
        }, this);
        $[7] = t5;
        $[8] = t7;
        $[9] = t8;
    } else {
        t8 = $[9];
    }
    let t9;
    if ($[10] !== sidebarOpen) {
        t9 = ({
            "AdminLayout[<button>.onClick]": ()=>setSidebarOpen(!sidebarOpen)
        })["AdminLayout[<button>.onClick]"];
        $[10] = sidebarOpen;
        $[11] = t9;
    } else {
        t9 = $[11];
    }
    let t10;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
            className: "fas fa-bars text-xl"
        }, void 0, false, {
            fileName: "[project]/my-next-app/src/components/AdminLayout.tsx",
            lineNumber: 130,
            columnNumber: 11
        }, this);
        $[12] = t10;
    } else {
        t10 = $[12];
    }
    let t11;
    if ($[13] !== t9) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: t9,
                className: "lg:hidden text-gray-600 hover:text-gray-900 mr-4",
                children: t10
            }, void 0, false, {
                fileName: "[project]/my-next-app/src/components/AdminLayout.tsx",
                lineNumber: 137,
                columnNumber: 46
            }, this)
        }, void 0, false, {
            fileName: "[project]/my-next-app/src/components/AdminLayout.tsx",
            lineNumber: 137,
            columnNumber: 11
        }, this);
        $[13] = t9;
        $[14] = t11;
    } else {
        t11 = $[14];
    }
    const t12 = user?.fullName || "Admin";
    let t13;
    if ($[15] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-gray-700 font-medium",
            children: [
                "Hi, ",
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/my-next-app/src/components/AdminLayout.tsx",
            lineNumber: 146,
            columnNumber: 11
        }, this);
        $[15] = t12;
        $[16] = t13;
    } else {
        t13 = $[16];
    }
    let t14;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$src$2f$components$2f$LogoutWithConfirmation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/my-next-app/src/components/AdminLayout.tsx",
            lineNumber: 154,
            columnNumber: 11
        }, this);
        $[17] = t14;
    } else {
        t14 = $[17];
    }
    let t15;
    if ($[18] !== t13) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center space-x-4",
            children: [
                t13,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/my-next-app/src/components/AdminLayout.tsx",
            lineNumber: 161,
            columnNumber: 11
        }, this);
        $[18] = t13;
        $[19] = t15;
    } else {
        t15 = $[19];
    }
    let t16;
    if ($[20] !== t11 || $[21] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
            className: "sticky top-0 z-40 bg-white shadow-sm border-b",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between px-6 py-4",
                children: [
                    t11,
                    t15
                ]
            }, void 0, true, {
                fileName: "[project]/my-next-app/src/components/AdminLayout.tsx",
                lineNumber: 169,
                columnNumber: 77
            }, this)
        }, void 0, false, {
            fileName: "[project]/my-next-app/src/components/AdminLayout.tsx",
            lineNumber: 169,
            columnNumber: 11
        }, this);
        $[20] = t11;
        $[21] = t15;
        $[22] = t16;
    } else {
        t16 = $[22];
    }
    let t17;
    if ($[23] !== children) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "min-h-screen",
            children: children
        }, void 0, false, {
            fileName: "[project]/my-next-app/src/components/AdminLayout.tsx",
            lineNumber: 178,
            columnNumber: 11
        }, this);
        $[23] = children;
        $[24] = t17;
    } else {
        t17 = $[24];
    }
    let t18;
    if ($[25] !== t16 || $[26] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "lg:ml-64",
            children: [
                t16,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/my-next-app/src/components/AdminLayout.tsx",
            lineNumber: 186,
            columnNumber: 11
        }, this);
        $[25] = t16;
        $[26] = t17;
        $[27] = t18;
    } else {
        t18 = $[27];
    }
    let t19;
    if ($[28] !== sidebarOpen) {
        t19 = sidebarOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden",
            onClick: {
                "AdminLayout[<div>.onClick]": ()=>setSidebarOpen(false)
            }["AdminLayout[<div>.onClick]"]
        }, void 0, false, {
            fileName: "[project]/my-next-app/src/components/AdminLayout.tsx",
            lineNumber: 195,
            columnNumber: 26
        }, this);
        $[28] = sidebarOpen;
        $[29] = t19;
    } else {
        t19 = $[29];
    }
    let t20;
    if ($[30] !== t18 || $[31] !== t19 || $[32] !== t8) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-full bg-gray-50",
            children: [
                t8,
                t18,
                t19
            ]
        }, void 0, true, {
            fileName: "[project]/my-next-app/src/components/AdminLayout.tsx",
            lineNumber: 205,
            columnNumber: 11
        }, this);
        $[30] = t18;
        $[31] = t19;
        $[32] = t8;
        $[33] = t20;
    } else {
        t20 = $[33];
    }
    return t20;
}
_s(AdminLayout, "7gzpctHzispL4ti7+SvYj+fwIS4=");
_c = AdminLayout;
var _c;
__turbopack_context__.k.register(_c, "AdminLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/my-next-app/src/services/api.services.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "checkEmailAvailable",
    ()=>checkEmailAvailable,
    "checkUsernameAvailable",
    ()=>checkUsernameAvailable,
    "createCategory",
    ()=>createCategory,
    "createProduct",
    ()=>createProduct,
    "createReview",
    ()=>createReview,
    "deleteCategory",
    ()=>deleteCategory,
    "deleteReview",
    ()=>deleteReview,
    "deleteVoucher",
    ()=>deleteVoucher,
    "forgotPassword",
    ()=>forgotPassword,
    "getCategories",
    ()=>getCategories,
    "getDrinkRatingStats",
    ()=>getDrinkRatingStats,
    "getOrders",
    ()=>getOrders,
    "getProduct",
    ()=>getProduct,
    "getProducts",
    ()=>getProducts,
    "getReview",
    ()=>getReview,
    "getReviews",
    ()=>getReviews,
    "getReviewsByDrinkId",
    ()=>getReviewsByDrinkId,
    "getUsers",
    ()=>getUsers,
    "getVoucher",
    ()=>getVoucher,
    "getVouchers",
    ()=>getVouchers,
    "hideProduct",
    ()=>hideProduct,
    "login",
    ()=>login,
    "markVoucherAsUsed",
    ()=>markVoucherAsUsed,
    "registerConfirm",
    ()=>registerConfirm,
    "registerRequestOtp",
    ()=>registerRequestOtp,
    "resetPassword",
    ()=>resetPassword,
    "showProduct",
    ()=>showProduct,
    "toggleReviewHidden",
    ()=>toggleReviewHidden,
    "updateCategory",
    ()=>updateCategory,
    "updateProduct",
    ()=>updateProduct,
    "updateReview",
    ()=>updateReview,
    "updateUser",
    ()=>updateUser,
    "updateVoucher",
    ()=>updateVoucher
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/my-next-app/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-next-app/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
const API_BASE_URL = __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3001';
console.log('API Base URL:', API_BASE_URL);
const api = __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    },
    timeout: 10000
});
const login = async (username, password)=>{
    const response = await api.post('/auth/login', {
        username,
        password
    });
    return response.data;
};
const checkUsernameAvailable = async (username)=>{
    const response = await api.get(`/auth/check-username?username=${username}`);
    return response.data;
};
const checkEmailAvailable = async (email)=>{
    const response = await api.get(`/auth/check-email?email=${email}`);
    return response.data;
};
const registerRequestOtp = async (userData)=>{
    const response = await api.post('/auth/register/request-otp', userData);
    return response.data;
};
const registerConfirm = async (otp, userData)=>{
    const response = await api.post('/auth/register/confirm', {
        otp,
        ...userData
    });
    return response.data;
};
const forgotPassword = async (email)=>{
    const response = await api.post('/auth/forgot-password', {
        email
    });
    return response.data;
};
const resetPassword = async (email, otp, newPassword, confirmPassword)=>{
    const response = await api.post('/auth/reset-password', {
        email,
        otp,
        newPassword,
        confirmPassword
    });
    return response.data;
};
const getProducts = async (page = 1, limit = 10)=>{
    try {
        const response = await api.get(`/products?page=${page}&limit=${limit}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};
const getProduct = async (id)=>{
    const response = await api.get(`/products/${id}`);
    return response.data;
};
const createProduct = async (productData, images)=>{
    const formData = new FormData();
    Object.keys(productData).forEach((key)=>{
        if (productData[key] !== undefined && productData[key] !== null) {
            formData.append(key, productData[key]);
        }
    });
    if (images?.length) images.forEach((img)=>formData.append('images', img));
    const response = await api.post('/products', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
    return response.data;
};
const updateProduct = async (id, productData, images)=>{
    const formData = new FormData();
    Object.keys(productData).forEach((key)=>{
        if (productData[key] !== undefined && productData[key] !== null) {
            formData.append(key, productData[key]);
        }
    });
    if (images?.length) images.forEach((img)=>formData.append('images', img));
    const response = await api.patch(`/products/${id}`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
    return response.data;
};
const hideProduct = async (id)=>{
    const response = await api.patch(`/products/${id}/hide`);
    return response.data;
};
const showProduct = async (id)=>{
    const response = await api.patch(`/products/${id}/show`);
    return response.data;
};
const getOrders = async (params)=>{
    try {
        const response = await api.get('/orders', {
            params
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching orders:', error);
        throw error;
    }
};
const getUsers = async (params)=>{
    try {
        const response = await api.get('/users', {
            params
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
};
const updateUser = async (id, userData)=>{
    try {
        const response = await api.put(`/users/${id}`, userData);
        return response.data;
    } catch (error) {
        console.error('Error updating user:', error);
        throw error;
    }
};
const getReviews = async (params)=>{
    const response = await api.get('/reviews', {
        params
    });
    return response.data;
};
const getReview = async (id)=>{
    const response = await api.get(`/reviews/${id}`);
    return response.data;
};
const getReviewsByDrinkId = async (drinkId, params)=>{
    const response = await api.get(`/reviews/drink/${drinkId}`, {
        params
    });
    return response.data;
};
const getDrinkRatingStats = async (drinkId)=>{
    const response = await api.get(`/reviews/drink/${drinkId}/stats`);
    return response.data;
};
const createReview = async (reviewData)=>{
    const response = await api.post('/reviews', reviewData);
    return response.data;
};
const updateReview = async (id, reviewData)=>{
    const response = await api.patch(`/reviews/${id}`, reviewData);
    return response.data;
};
const toggleReviewHidden = async (id)=>{
    const response = await api.patch(`/reviews/${id}/toggle-hidden`);
    return response.data;
};
const deleteReview = async (id)=>{
    const response = await api.delete(`/reviews/${id}`);
    return response.data;
};
const getVouchers = async ()=>{
    const response = await api.get('/vouchers');
    return response.data;
};
const getVoucher = async (id)=>{
    const response = await api.get(`/vouchers/${id}`);
    return response.data;
};
const updateVoucher = async (id, voucherData)=>{
    const response = await api.patch(`/vouchers/${id}`, voucherData);
    return response.data;
};
const deleteVoucher = async (id)=>{
    const response = await api.delete(`/vouchers/${id}`);
    return response.data;
};
const markVoucherAsUsed = async (id)=>{
    const response = await api.patch(`/vouchers/${id}/mark-used`);
    return response.data;
};
const getCategories = async ()=>{
    try {
        const response = await api.get('/categories');
        return response.data;
    } catch (error) {
        console.error('Error fetching categories:', error);
        throw error;
    }
};
const createCategory = async (categoryData)=>{
    try {
        const response = await api.post('/categories', categoryData);
        return response.data;
    } catch (error) {
        console.error('Error creating category:', error);
        throw error;
    }
};
const updateCategory = async (id, categoryData)=>{
    try {
        const response = await api.put(`/categories/${id}`, categoryData);
        return response.data;
    } catch (error) {
        console.error('Error updating category:', error);
        throw error;
    }
};
const deleteCategory = async (id)=>{
    try {
        const response = await api.delete(`/categories/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting category:', error);
        throw error;
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/my-next-app/src/components/UsersManagement.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>UsersManagement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-next-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-next-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$src$2f$services$2f$api$2e$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-next-app/src/services/api.services.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function UsersManagement() {
    _s();
    const [users, setUsers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [totalPages, setTotalPages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [total, setTotal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [dateFrom, setDateFrom] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [dateTo, setDateTo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [showEditModal, setShowEditModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editingUser, setEditingUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editForm, setEditForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const limit = 10;
    const fetchUsers = async ()=>{
        try {
            setLoading(true);
            setError(null);
            const params = {
                page: currentPage,
                limit
            };
            if (searchTerm.trim()) params.search = searchTerm.trim();
            if (dateFrom) params.dateFrom = dateFrom;
            if (dateTo) params.dateTo = dateTo;
            const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$src$2f$services$2f$api$2e$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUsers"])(params);
            // Handle the backend response structure
            if (response && response.success && response.data) {
                setUsers(response.data || []);
                setTotalPages(1); // Since we're not paginating yet
                setTotal(response.data.length || 0);
            } else if (response && response.users) {
                // Handle the expected structure if it exists
                setUsers(response.users || []);
                setTotalPages(response.totalPages || 1);
                setTotal(response.total || 0);
            } else {
                setUsers([]);
                setTotalPages(1);
                setTotal(0);
            }
        } catch (err) {
            console.error('Error fetching users:', err);
            setError(err.response?.data?.message || err.message || 'Có lỗi xảy ra khi tải danh sách khách hàng');
            setUsers([]);
            setTotalPages(1);
            setTotal(0);
        } finally{
            setLoading(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "UsersManagement.useEffect": ()=>{
            const timeout = setTimeout({
                "UsersManagement.useEffect.timeout": ()=>fetchUsers()
            }["UsersManagement.useEffect.timeout"], 300);
            return ({
                "UsersManagement.useEffect": ()=>clearTimeout(timeout)
            })["UsersManagement.useEffect"];
        }
    }["UsersManagement.useEffect"], [
        currentPage,
        searchTerm,
        dateFrom,
        dateTo
    ]);
    const handleEdit = (user)=>{
        setEditingUser(user);
        setEditForm({
            fullName: user.fullName,
            email: user.email,
            dob: user.dob,
            phone: user.phone,
            address: user.address,
            status: user.status
        });
        setShowEditModal(true);
    };
    const handleSave = async ()=>{
        if (!editingUser) return;
        try {
            const response_0 = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$src$2f$services$2f$api$2e$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateUser"])(editingUser.id, editForm);
            if (response_0.success) {
                setUsers((prevUsers)=>prevUsers ? prevUsers.map((u)=>u.id === editingUser.id ? {
                            ...u,
                            ...editForm
                        } : u) : []);
                setShowEditModal(false);
            } else setError('Không thể cập nhật thông tin người dùng');
        } catch (err_0) {
            setError(err_0.message || 'Có lỗi xảy ra khi cập nhật');
        }
    };
    const handleStatusToggle = async (user_0)=>{
        const newStatus = user_0.status === 'active' ? 'inactive' : 'active';
        try {
            const response_1 = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$src$2f$services$2f$api$2e$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateUser"])(user_0.id, {
                status: newStatus
            });
            if (response_1.success) {
                setUsers((prevUsers_0)=>prevUsers_0 ? prevUsers_0.map((u_0)=>u_0.id === user_0.id ? {
                            ...u_0,
                            status: newStatus
                        } : u_0) : []);
            }
        } catch (err_1) {
            setError(err_1.message || 'Có lỗi xảy ra khi cập nhật trạng thái');
        }
    };
    const formatDate = (date)=>date ? new Date(date).toLocaleDateString('vi-VN') : '';
    const handleReset = ()=>{
        setSearchTerm('');
        setDateFrom('');
        setDateTo('');
        setCurrentPage(1);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-2xl font-bold text-gray-900 mb-2",
                children: "Quản lý khách hàng"
            }, void 0, false, {
                fileName: "[project]/my-next-app/src/components/UsersManagement.tsx",
                lineNumber: 131,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-600 mb-6"
            }, void 0, false, {
                fileName: "[project]/my-next-app/src/components/UsersManagement.tsx",
                lineNumber: 132,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-lg shadow overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: "min-w-full divide-y divide-gray-200",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            className: "bg-gray-50",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase",
                                        children: "Họ tên"
                                    }, void 0, false, {
                                        fileName: "[project]/my-next-app/src/components/UsersManagement.tsx",
                                        lineNumber: 140,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase",
                                        children: "Email"
                                    }, void 0, false, {
                                        fileName: "[project]/my-next-app/src/components/UsersManagement.tsx",
                                        lineNumber: 141,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase",
                                        children: "Số điện thoại"
                                    }, void 0, false, {
                                        fileName: "[project]/my-next-app/src/components/UsersManagement.tsx",
                                        lineNumber: 142,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase",
                                        children: "Trạng thái"
                                    }, void 0, false, {
                                        fileName: "[project]/my-next-app/src/components/UsersManagement.tsx",
                                        lineNumber: 143,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase",
                                        children: "Thao tác"
                                    }, void 0, false, {
                                        fileName: "[project]/my-next-app/src/components/UsersManagement.tsx",
                                        lineNumber: 144,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/my-next-app/src/components/UsersManagement.tsx",
                                lineNumber: 139,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/my-next-app/src/components/UsersManagement.tsx",
                            lineNumber: 138,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            className: "bg-white divide-y divide-gray-200",
                            children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    colSpan: 5,
                                    className: "px-6 py-4 text-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"
                                            }, void 0, false, {
                                                fileName: "[project]/my-next-app/src/components/UsersManagement.tsx",
                                                lineNumber: 151,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "ml-2",
                                                children: "Đang tải..."
                                            }, void 0, false, {
                                                fileName: "[project]/my-next-app/src/components/UsersManagement.tsx",
                                                lineNumber: 152,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/my-next-app/src/components/UsersManagement.tsx",
                                        lineNumber: 150,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/my-next-app/src/components/UsersManagement.tsx",
                                    lineNumber: 149,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/my-next-app/src/components/UsersManagement.tsx",
                                lineNumber: 148,
                                columnNumber: 24
                            }, this) : error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    colSpan: 5,
                                    className: "px-6 py-4 text-center text-red-600",
                                    children: error
                                }, void 0, false, {
                                    fileName: "[project]/my-next-app/src/components/UsersManagement.tsx",
                                    lineNumber: 156,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/my-next-app/src/components/UsersManagement.tsx",
                                lineNumber: 155,
                                columnNumber: 31
                            }, this) : !users || users.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    colSpan: 5,
                                    className: "px-6 py-4 text-center text-gray-500",
                                    children: "Không có dữ liệu khách hàng"
                                }, void 0, false, {
                                    fileName: "[project]/my-next-app/src/components/UsersManagement.tsx",
                                    lineNumber: 160,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/my-next-app/src/components/UsersManagement.tsx",
                                lineNumber: 159,
                                columnNumber: 54
                            }, this) : users.map((u_1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    className: "hover:bg-gray-50",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4",
                                            children: u_1.fullName
                                        }, void 0, false, {
                                            fileName: "[project]/my-next-app/src/components/UsersManagement.tsx",
                                            lineNumber: 164,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4",
                                            children: u_1.email
                                        }, void 0, false, {
                                            fileName: "[project]/my-next-app/src/components/UsersManagement.tsx",
                                            lineNumber: 165,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4",
                                            children: u_1.phone
                                        }, void 0, false, {
                                            fileName: "[project]/my-next-app/src/components/UsersManagement.tsx",
                                            lineNumber: 166,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `px-2 py-1 text-xs font-semibold rounded-full ${u_1.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`,
                                                children: u_1.status === 'active' ? 'Hoạt động' : 'Khóa'
                                            }, void 0, false, {
                                                fileName: "[project]/my-next-app/src/components/UsersManagement.tsx",
                                                lineNumber: 168,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/my-next-app/src/components/UsersManagement.tsx",
                                            lineNumber: 167,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4 flex space-x-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>handleEdit(u_1),
                                                    className: "text-blue-600 hover:text-blue-900",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                            className: "fas fa-edit mr-1"
                                                        }, void 0, false, {
                                                            fileName: "[project]/my-next-app/src/components/UsersManagement.tsx",
                                                            lineNumber: 174,
                                                            columnNumber: 23
                                                        }, this),
                                                        "Sửa"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/my-next-app/src/components/UsersManagement.tsx",
                                                    lineNumber: 173,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>handleStatusToggle(u_1),
                                                    className: u_1.status === 'active' ? 'text-red-600 hover:text-red-900' : 'text-green-600 hover:text-green-900',
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                            className: `fas ${u_1.status === 'active' ? 'fa-lock' : 'fa-unlock'} mr-1`
                                                        }, void 0, false, {
                                                            fileName: "[project]/my-next-app/src/components/UsersManagement.tsx",
                                                            lineNumber: 177,
                                                            columnNumber: 23
                                                        }, this),
                                                        u_1.status === 'active' ? 'Khóa' : 'Mở'
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/my-next-app/src/components/UsersManagement.tsx",
                                                    lineNumber: 176,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/my-next-app/src/components/UsersManagement.tsx",
                                            lineNumber: 172,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, u_1.id, true, {
                                    fileName: "[project]/my-next-app/src/components/UsersManagement.tsx",
                                    lineNumber: 163,
                                    columnNumber: 40
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/my-next-app/src/components/UsersManagement.tsx",
                            lineNumber: 147,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/my-next-app/src/components/UsersManagement.tsx",
                    lineNumber: 137,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/my-next-app/src/components/UsersManagement.tsx",
                lineNumber: 136,
                columnNumber: 7
            }, this),
            showEditModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-[9999]",
                onClick: ()=>setShowEditModal(false),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-lg shadow-lg w-full max-w-3xl p-6",
                    onClick: (e)=>e.stopPropagation(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-bold mb-4",
                            children: "Chỉnh sửa người dùng"
                        }, void 0, false, {
                            fileName: "[project]/my-next-app/src/components/UsersManagement.tsx",
                            lineNumber: 189,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    value: editForm.fullName || '',
                                    onChange: (e_0)=>setEditForm({
                                            ...editForm,
                                            fullName: e_0.target.value
                                        }),
                                    placeholder: "Họ tên",
                                    className: "border p-2 rounded"
                                }, void 0, false, {
                                    fileName: "[project]/my-next-app/src/components/UsersManagement.tsx",
                                    lineNumber: 191,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "email",
                                    value: editForm.email || '',
                                    onChange: (e_1)=>setEditForm({
                                            ...editForm,
                                            email: e_1.target.value
                                        }),
                                    placeholder: "Email",
                                    className: "border p-2 rounded"
                                }, void 0, false, {
                                    fileName: "[project]/my-next-app/src/components/UsersManagement.tsx",
                                    lineNumber: 195,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "tel",
                                    value: editForm.phone || '',
                                    onChange: (e_2)=>setEditForm({
                                            ...editForm,
                                            phone: e_2.target.value
                                        }),
                                    placeholder: "Số điện thoại",
                                    className: "border p-2 rounded"
                                }, void 0, false, {
                                    fileName: "[project]/my-next-app/src/components/UsersManagement.tsx",
                                    lineNumber: 199,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    value: editForm.address || '',
                                    onChange: (e_3)=>setEditForm({
                                            ...editForm,
                                            address: e_3.target.value
                                        }),
                                    placeholder: "Địa chỉ",
                                    className: "border p-2 rounded"
                                }, void 0, false, {
                                    fileName: "[project]/my-next-app/src/components/UsersManagement.tsx",
                                    lineNumber: 203,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/my-next-app/src/components/UsersManagement.tsx",
                            lineNumber: 190,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-end mt-6 space-x-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowEditModal(false),
                                    className: "px-4 py-2 bg-gray-400 text-white rounded",
                                    children: "Hủy"
                                }, void 0, false, {
                                    fileName: "[project]/my-next-app/src/components/UsersManagement.tsx",
                                    lineNumber: 209,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleSave,
                                    className: "px-4 py-2 bg-green-600 text-white rounded",
                                    children: "Lưu"
                                }, void 0, false, {
                                    fileName: "[project]/my-next-app/src/components/UsersManagement.tsx",
                                    lineNumber: 210,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/my-next-app/src/components/UsersManagement.tsx",
                            lineNumber: 208,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/my-next-app/src/components/UsersManagement.tsx",
                    lineNumber: 188,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/my-next-app/src/components/UsersManagement.tsx",
                lineNumber: 187,
                columnNumber: 25
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/my-next-app/src/components/UsersManagement.tsx",
        lineNumber: 130,
        columnNumber: 10
    }, this);
}
_s(UsersManagement, "Qeq9v/Fo44oDci0lb6fXJ+Vzlxc=");
_c = UsersManagement;
var _c;
__turbopack_context__.k.register(_c, "UsersManagement");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/my-next-app/src/app/users/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>UsersPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-next-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-next-app/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$src$2f$components$2f$AdminLayout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-next-app/src/components/AdminLayout.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$src$2f$components$2f$UsersManagement$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-next-app/src/components/UsersManagement.tsx [app-client] (ecmascript)");
'use client';
;
;
;
;
function UsersPage() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "9c6bbf0ba4986279b7e7856678404e00ebf3dd80424fd327229eb6b4820d4656") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "9c6bbf0ba4986279b7e7856678404e00ebf3dd80424fd327229eb6b4820d4656";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$src$2f$components$2f$AdminLayout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            currentPage: "users",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$src$2f$components$2f$UsersManagement$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/my-next-app/src/app/users/page.tsx",
                lineNumber: 17,
                columnNumber: 43
            }, this)
        }, void 0, false, {
            fileName: "[project]/my-next-app/src/app/users/page.tsx",
            lineNumber: 17,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
}
_c = UsersPage;
var _c;
__turbopack_context__.k.register(_c, "UsersPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=my-next-app_src_db891ceb._.js.map