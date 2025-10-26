module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/my-next-app/src/utils/authStorage.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
};
const getAuth = ()=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return {
        token: null,
        user: null
    };
};
const clearAuth = ()=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
};
const isAuthenticated = ()=>{
    const { token } = getAuth();
    return !!token;
};
}),
"[project]/my-next-app/src/components/LogoutWithConfirmation.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LogoutWithConfirmation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-next-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-next-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-next-app/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$src$2f$utils$2f$authStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-next-app/src/utils/authStorage.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function LogoutWithConfirmation() {
    const [showConfirm, setShowConfirm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const handleLogout = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        setShowConfirm(true);
    };
    const confirmLogout = ()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$src$2f$utils$2f$authStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearAuth"])();
        setShowConfirm(false);
        router.push('/');
    };
    const cancelLogout = ()=>{
        setShowConfirm(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handleLogout,
                className: "flex items-center px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg border border-red-200 hover:border-red-300 transition-colors",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                        className: "fas fa-sign-out-alt mr-2"
                    }, void 0, false, {
                        fileName: "[project]/my-next-app/src/components/LogoutWithConfirmation.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this),
                    "Đăng xuất"
                ]
            }, void 0, true, {
                fileName: "[project]/my-next-app/src/components/LogoutWithConfirmation.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            showConfirm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-[9999]",
                onClick: (e)=>e.stopPropagation(),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-lg p-6 max-w-md w-full mx-4",
                    onClick: (e)=>e.stopPropagation(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-6 h-6 text-red-600",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                                        }, void 0, false, {
                                            fileName: "[project]/my-next-app/src/components/LogoutWithConfirmation.tsx",
                                            lineNumber: 44,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/my-next-app/src/components/LogoutWithConfirmation.tsx",
                                        lineNumber: 43,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/my-next-app/src/components/LogoutWithConfirmation.tsx",
                                    lineNumber: 42,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg font-semibold text-gray-900",
                                    children: "Xác nhận đăng xuất"
                                }, void 0, false, {
                                    fileName: "[project]/my-next-app/src/components/LogoutWithConfirmation.tsx",
                                    lineNumber: 47,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/my-next-app/src/components/LogoutWithConfirmation.tsx",
                            lineNumber: 41,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-600 mb-6",
                            children: "⚠️ Bạn có chắc chắn muốn đăng xuất khỏi hệ thống không?"
                        }, void 0, false, {
                            fileName: "[project]/my-next-app/src/components/LogoutWithConfirmation.tsx",
                            lineNumber: 50,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-end space-x-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: cancelLogout,
                                    className: "px-4 py-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors",
                                    children: "Hủy"
                                }, void 0, false, {
                                    fileName: "[project]/my-next-app/src/components/LogoutWithConfirmation.tsx",
                                    lineNumber: 55,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: confirmLogout,
                                    className: "px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors",
                                    children: "Đăng xuất"
                                }, void 0, false, {
                                    fileName: "[project]/my-next-app/src/components/LogoutWithConfirmation.tsx",
                                    lineNumber: 61,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/my-next-app/src/components/LogoutWithConfirmation.tsx",
                            lineNumber: 54,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/my-next-app/src/components/LogoutWithConfirmation.tsx",
                    lineNumber: 40,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/my-next-app/src/components/LogoutWithConfirmation.tsx",
                lineNumber: 39,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/my-next-app/src/components/AdminLayout.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-next-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-next-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-next-app/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$src$2f$components$2f$LogoutWithConfirmation$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-next-app/src/components/LogoutWithConfirmation.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$src$2f$utils$2f$authStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-next-app/src/utils/authStorage.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function AdminLayout({ children, currentPage = 'dashboard' }) {
    const [sidebarOpen, setSidebarOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$src$2f$utils$2f$authStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAuthenticated"])()) {
            const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$src$2f$utils$2f$authStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAuth"])();
            setUser(user);
        }
    }, []);
    const menuItems = [
        {
            id: 'dashboard',
            label: 'Dashboard',
            icon: 'fas fa-chart-line',
            href: '/dashboard'
        },
        {
            id: 'orders',
            label: 'Đơn hàng',
            icon: 'fas fa-shopping-cart',
            href: '/orders'
        },
        {
            id: 'products',
            label: 'Sản phẩm',
            icon: 'fas fa-box',
            href: '/products'
        },
        {
            id: 'categories',
            label: 'Loại sản phẩm',
            icon: 'fas fa-list',
            href: '/categories'
        },
        {
            id: 'users',
            label: 'Người dùng',
            icon: 'fas fa-users',
            href: '/users'
        },
        {
            id: 'reviews',
            label: 'Đánh giá',
            icon: 'fas fa-star',
            href: '/reviews'
        },
        {
            id: 'vouchers',
            label: 'Voucher',
            icon: 'fas fa-tags',
            href: '/vouchers'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-full bg-gray-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `fixed inset-y-0 left-0 z-50 w-64 bg-green-600 transform transition-transform duration-300 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-center h-16 px-4 bg-green-700",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                    className: "fas fa-coffee text-white text-2xl mr-3"
                                }, void 0, false, {
                                    fileName: "[project]/my-next-app/src/components/AdminLayout.tsx",
                                    lineNumber: 43,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-white text-xl font-bold",
                                    children: "UTEShop"
                                }, void 0, false, {
                                    fileName: "[project]/my-next-app/src/components/AdminLayout.tsx",
                                    lineNumber: 44,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/my-next-app/src/components/AdminLayout.tsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/my-next-app/src/components/AdminLayout.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "mt-8",
                        children: menuItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: item.href,
                                className: `flex items-center px-6 py-3 text-white hover:bg-green-700 transition-colors ${currentPage === item.id ? 'bg-green-700 border-r-4 border-white' : ''}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        className: `${item.icon} mr-3`
                                    }, void 0, false, {
                                        fileName: "[project]/my-next-app/src/components/AdminLayout.tsx",
                                        lineNumber: 57,
                                        columnNumber: 15
                                    }, this),
                                    item.label
                                ]
                            }, item.id, true, {
                                fileName: "[project]/my-next-app/src/components/AdminLayout.tsx",
                                lineNumber: 50,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/my-next-app/src/components/AdminLayout.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/my-next-app/src/components/AdminLayout.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "lg:ml-64",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "sticky top-0 z-40 bg-white shadow-sm border-b",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between px-6 py-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setSidebarOpen(!sidebarOpen),
                                        className: "lg:hidden text-gray-600 hover:text-gray-900 mr-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                            className: "fas fa-bars text-xl"
                                        }, void 0, false, {
                                            fileName: "[project]/my-next-app/src/components/AdminLayout.tsx",
                                            lineNumber: 74,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/my-next-app/src/components/AdminLayout.tsx",
                                        lineNumber: 70,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/my-next-app/src/components/AdminLayout.tsx",
                                    lineNumber: 69,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center space-x-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gray-700 font-medium",
                                            children: [
                                                "Hi, ",
                                                user?.fullName || 'Admin'
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/my-next-app/src/components/AdminLayout.tsx",
                                            lineNumber: 79,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$src$2f$components$2f$LogoutWithConfirmation$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                            fileName: "[project]/my-next-app/src/components/AdminLayout.tsx",
                                            lineNumber: 82,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/my-next-app/src/components/AdminLayout.tsx",
                                    lineNumber: 78,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/my-next-app/src/components/AdminLayout.tsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/my-next-app/src/components/AdminLayout.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        className: "min-h-screen",
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/my-next-app/src/components/AdminLayout.tsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/my-next-app/src/components/AdminLayout.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this),
            sidebarOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden",
                onClick: ()=>setSidebarOpen(false)
            }, void 0, false, {
                fileName: "[project]/my-next-app/src/components/AdminLayout.tsx",
                lineNumber: 95,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/my-next-app/src/components/AdminLayout.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/assert [external] (assert, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}),
"[externals]/tty [external] (tty, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[project]/my-next-app/src/services/api.services.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-next-app/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
;
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3001';
console.log('API Base URL:', API_BASE_URL);
const api = __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].create({
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
}),
"[project]/my-next-app/src/components/UsersManagement.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>UsersManagement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-next-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-next-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$src$2f$services$2f$api$2e$services$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-next-app/src/services/api.services.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
function UsersManagement() {
    const [users, setUsers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [totalPages, setTotalPages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [total, setTotal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [dateFrom, setDateFrom] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [dateTo, setDateTo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [showEditModal, setShowEditModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editingUser, setEditingUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editForm, setEditForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
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
            const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$src$2f$services$2f$api$2e$services$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUsers"])(params);
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const timeout = setTimeout(()=>fetchUsers(), 300);
        return ()=>clearTimeout(timeout);
    }, [
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
            const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$src$2f$services$2f$api$2e$services$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateUser"])(editingUser.id, editForm);
            if (response.success) {
                setUsers((prevUsers)=>prevUsers ? prevUsers.map((u)=>u.id === editingUser.id ? {
                            ...u,
                            ...editForm
                        } : u) : []);
                setShowEditModal(false);
            } else setError('Không thể cập nhật thông tin người dùng');
        } catch (err) {
            setError(err.message || 'Có lỗi xảy ra khi cập nhật');
        }
    };
    const handleStatusToggle = async (user)=>{
        const newStatus = user.status === 'active' ? 'inactive' : 'active';
        try {
            const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$src$2f$services$2f$api$2e$services$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateUser"])(user.id, {
                status: newStatus
            });
            if (response.success) {
                setUsers((prevUsers)=>prevUsers ? prevUsers.map((u)=>u.id === user.id ? {
                            ...u,
                            status: newStatus
                        } : u) : []);
            }
        } catch (err) {
            setError(err.message || 'Có lỗi xảy ra khi cập nhật trạng thái');
        }
    };
    const formatDate = (date)=>date ? new Date(date).toLocaleDateString('vi-VN') : '';
    const handleReset = ()=>{
        setSearchTerm('');
        setDateFrom('');
        setDateTo('');
        setCurrentPage(1);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-2xl font-bold text-gray-900 mb-2",
                children: "Quản lý khách hàng"
            }, void 0, false, {
                fileName: "[project]/my-next-app/src/components/UsersManagement.tsx",
                lineNumber: 135,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-600 mb-6"
            }, void 0, false, {
                fileName: "[project]/my-next-app/src/components/UsersManagement.tsx",
                lineNumber: 136,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-lg shadow overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: "min-w-full divide-y divide-gray-200",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            className: "bg-gray-50",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase",
                                        children: "Họ tên"
                                    }, void 0, false, {
                                        fileName: "[project]/my-next-app/src/components/UsersManagement.tsx",
                                        lineNumber: 144,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase",
                                        children: "Email"
                                    }, void 0, false, {
                                        fileName: "[project]/my-next-app/src/components/UsersManagement.tsx",
                                        lineNumber: 145,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase",
                                        children: "Số điện thoại"
                                    }, void 0, false, {
                                        fileName: "[project]/my-next-app/src/components/UsersManagement.tsx",
                                        lineNumber: 146,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase",
                                        children: "Trạng thái"
                                    }, void 0, false, {
                                        fileName: "[project]/my-next-app/src/components/UsersManagement.tsx",
                                        lineNumber: 147,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase",
                                        children: "Thao tác"
                                    }, void 0, false, {
                                        fileName: "[project]/my-next-app/src/components/UsersManagement.tsx",
                                        lineNumber: 148,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/my-next-app/src/components/UsersManagement.tsx",
                                lineNumber: 143,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/my-next-app/src/components/UsersManagement.tsx",
                            lineNumber: 142,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            className: "bg-white divide-y divide-gray-200",
                            children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    colSpan: 5,
                                    className: "px-6 py-4 text-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"
                                            }, void 0, false, {
                                                fileName: "[project]/my-next-app/src/components/UsersManagement.tsx",
                                                lineNumber: 156,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "ml-2",
                                                children: "Đang tải..."
                                            }, void 0, false, {
                                                fileName: "[project]/my-next-app/src/components/UsersManagement.tsx",
                                                lineNumber: 157,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/my-next-app/src/components/UsersManagement.tsx",
                                        lineNumber: 155,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/my-next-app/src/components/UsersManagement.tsx",
                                    lineNumber: 154,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/my-next-app/src/components/UsersManagement.tsx",
                                lineNumber: 153,
                                columnNumber: 15
                            }, this) : error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    colSpan: 5,
                                    className: "px-6 py-4 text-center text-red-600",
                                    children: error
                                }, void 0, false, {
                                    fileName: "[project]/my-next-app/src/components/UsersManagement.tsx",
                                    lineNumber: 163,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/my-next-app/src/components/UsersManagement.tsx",
                                lineNumber: 162,
                                columnNumber: 15
                            }, this) : !users || users.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    colSpan: 5,
                                    className: "px-6 py-4 text-center text-gray-500",
                                    children: "Không có dữ liệu khách hàng"
                                }, void 0, false, {
                                    fileName: "[project]/my-next-app/src/components/UsersManagement.tsx",
                                    lineNumber: 169,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/my-next-app/src/components/UsersManagement.tsx",
                                lineNumber: 168,
                                columnNumber: 15
                            }, this) : users.map((u)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    className: "hover:bg-gray-50",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4",
                                            children: u.fullName
                                        }, void 0, false, {
                                            fileName: "[project]/my-next-app/src/components/UsersManagement.tsx",
                                            lineNumber: 176,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4",
                                            children: u.email
                                        }, void 0, false, {
                                            fileName: "[project]/my-next-app/src/components/UsersManagement.tsx",
                                            lineNumber: 177,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4",
                                            children: u.phone
                                        }, void 0, false, {
                                            fileName: "[project]/my-next-app/src/components/UsersManagement.tsx",
                                            lineNumber: 178,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `px-2 py-1 text-xs font-semibold rounded-full ${u.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`,
                                                children: u.status === 'active' ? 'Hoạt động' : 'Khóa'
                                            }, void 0, false, {
                                                fileName: "[project]/my-next-app/src/components/UsersManagement.tsx",
                                                lineNumber: 180,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/my-next-app/src/components/UsersManagement.tsx",
                                            lineNumber: 179,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4 flex space-x-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>handleEdit(u),
                                                    className: "text-blue-600 hover:text-blue-900",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                            className: "fas fa-edit mr-1"
                                                        }, void 0, false, {
                                                            fileName: "[project]/my-next-app/src/components/UsersManagement.tsx",
                                                            lineNumber: 191,
                                                            columnNumber: 23
                                                        }, this),
                                                        "Sửa"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/my-next-app/src/components/UsersManagement.tsx",
                                                    lineNumber: 187,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>handleStatusToggle(u),
                                                    className: u.status === 'active' ? 'text-red-600 hover:text-red-900' : 'text-green-600 hover:text-green-900',
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                            className: `fas ${u.status === 'active' ? 'fa-lock' : 'fa-unlock'} mr-1`
                                                        }, void 0, false, {
                                                            fileName: "[project]/my-next-app/src/components/UsersManagement.tsx",
                                                            lineNumber: 199,
                                                            columnNumber: 23
                                                        }, this),
                                                        u.status === 'active' ? 'Khóa' : 'Mở'
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/my-next-app/src/components/UsersManagement.tsx",
                                                    lineNumber: 193,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/my-next-app/src/components/UsersManagement.tsx",
                                            lineNumber: 186,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, u.id, true, {
                                    fileName: "[project]/my-next-app/src/components/UsersManagement.tsx",
                                    lineNumber: 175,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/my-next-app/src/components/UsersManagement.tsx",
                            lineNumber: 151,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/my-next-app/src/components/UsersManagement.tsx",
                    lineNumber: 141,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/my-next-app/src/components/UsersManagement.tsx",
                lineNumber: 140,
                columnNumber: 7
            }, this),
            showEditModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-[9999]",
                onClick: ()=>setShowEditModal(false),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-lg shadow-lg w-full max-w-3xl p-6",
                    onClick: (e)=>e.stopPropagation(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-bold mb-4",
                            children: "Chỉnh sửa người dùng"
                        }, void 0, false, {
                            fileName: "[project]/my-next-app/src/components/UsersManagement.tsx",
                            lineNumber: 214,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    value: editForm.fullName || '',
                                    onChange: (e)=>setEditForm({
                                            ...editForm,
                                            fullName: e.target.value
                                        }),
                                    placeholder: "Họ tên",
                                    className: "border p-2 rounded"
                                }, void 0, false, {
                                    fileName: "[project]/my-next-app/src/components/UsersManagement.tsx",
                                    lineNumber: 216,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "email",
                                    value: editForm.email || '',
                                    onChange: (e)=>setEditForm({
                                            ...editForm,
                                            email: e.target.value
                                        }),
                                    placeholder: "Email",
                                    className: "border p-2 rounded"
                                }, void 0, false, {
                                    fileName: "[project]/my-next-app/src/components/UsersManagement.tsx",
                                    lineNumber: 223,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "tel",
                                    value: editForm.phone || '',
                                    onChange: (e)=>setEditForm({
                                            ...editForm,
                                            phone: e.target.value
                                        }),
                                    placeholder: "Số điện thoại",
                                    className: "border p-2 rounded"
                                }, void 0, false, {
                                    fileName: "[project]/my-next-app/src/components/UsersManagement.tsx",
                                    lineNumber: 230,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    value: editForm.address || '',
                                    onChange: (e)=>setEditForm({
                                            ...editForm,
                                            address: e.target.value
                                        }),
                                    placeholder: "Địa chỉ",
                                    className: "border p-2 rounded"
                                }, void 0, false, {
                                    fileName: "[project]/my-next-app/src/components/UsersManagement.tsx",
                                    lineNumber: 237,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/my-next-app/src/components/UsersManagement.tsx",
                            lineNumber: 215,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-end mt-6 space-x-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowEditModal(false),
                                    className: "px-4 py-2 bg-gray-400 text-white rounded",
                                    children: "Hủy"
                                }, void 0, false, {
                                    fileName: "[project]/my-next-app/src/components/UsersManagement.tsx",
                                    lineNumber: 246,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleSave,
                                    className: "px-4 py-2 bg-green-600 text-white rounded",
                                    children: "Lưu"
                                }, void 0, false, {
                                    fileName: "[project]/my-next-app/src/components/UsersManagement.tsx",
                                    lineNumber: 247,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/my-next-app/src/components/UsersManagement.tsx",
                            lineNumber: 245,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/my-next-app/src/components/UsersManagement.tsx",
                    lineNumber: 213,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/my-next-app/src/components/UsersManagement.tsx",
                lineNumber: 212,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/my-next-app/src/components/UsersManagement.tsx",
        lineNumber: 134,
        columnNumber: 5
    }, this);
}
}),
"[project]/my-next-app/src/app/users/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>UsersPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-next-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$src$2f$components$2f$AdminLayout$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-next-app/src/components/AdminLayout.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$src$2f$components$2f$UsersManagement$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-next-app/src/components/UsersManagement.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
function UsersPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$src$2f$components$2f$AdminLayout$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        currentPage: "users",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$next$2d$app$2f$src$2f$components$2f$UsersManagement$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/my-next-app/src/app/users/page.tsx",
            lineNumber: 11,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/my-next-app/src/app/users/page.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__73d4252b._.js.map