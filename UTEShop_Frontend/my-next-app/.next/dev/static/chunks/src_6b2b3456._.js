(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/services/api.services.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "checkEmailAvailable",
    ()=>checkEmailAvailable,
    "checkUsernameAvailable",
    ()=>checkUsernameAvailable,
    "forgotPassword",
    ()=>forgotPassword,
    "login",
    ()=>login,
    "registerConfirm",
    ()=>registerConfirm,
    "registerRequestOtp",
    ()=>registerRequestOtp,
    "resetPassword",
    ()=>resetPassword,
    "verifyForgotOtp",
    ()=>verifyForgotOtp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
const API_BASE_URL = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3001';
const api = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
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
const verifyForgotOtp = async (email, otp)=>{
    // Endpoint này không tồn tại trong backend, sẽ được xử lý trong resetPassword
    throw new Error('Use resetPassword instead');
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ForgotPassword.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ForgotPassword
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/api.services.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function ForgotPassword() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(38);
    if ($[0] !== "8bd9550ebd19ca7fff65e17cd6d35040a109f9b2f071d49ac79c386673806338") {
        for(let $i = 0; $i < 38; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "8bd9550ebd19ca7fff65e17cd6d35040a109f9b2f071d49ac79c386673806338";
    }
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [
            "",
            "",
            "",
            "",
            "",
            ""
        ];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [otp, setOtp] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    const [newPassword, setNewPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [confirmPassword, setConfirmPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    let t1;
    if ($[2] !== email) {
        t1 = ({
            "ForgotPassword[handleEmailSubmit]": async (e)=>{
                e.preventDefault();
                setError("");
                setMessage("");
                ;
                try {
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forgotPassword"])(email);
                    setMessage("OTP \u0111\xE3 \u0111\u01B0\u1EE3c g\u1EEDi \u0111\u1EBFn email c\u1EE7a b\u1EA1n");
                    setStep(2);
                } catch (t2) {
                    const err = t2;
                    setError(err.response?.data?.message || "L\u1ED7i server");
                }
            }
        })["ForgotPassword[handleEmailSubmit]"];
        $[2] = email;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    const handleEmailSubmit = t1;
    let t2;
    if ($[4] !== otp) {
        t2 = ({
            "ForgotPassword[handleOtpChange]": (e_0, index)=>{
                const newOtp = [
                    ...otp
                ];
                newOtp[index] = e_0.target.value;
                setOtp(newOtp);
                if (e_0.target.value && index < 5) {
                    const nextInput = document.getElementById(`otp-${index + 1}`);
                    if (nextInput) {
                        nextInput.focus();
                    }
                }
            }
        })["ForgotPassword[handleOtpChange]"];
        $[4] = otp;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    const handleOtpChange = t2;
    let t3;
    if ($[6] !== otp) {
        t3 = ({
            "ForgotPassword[handleOtpSubmit]": async (e_1)=>{
                e_1.preventDefault();
                setError("");
                setMessage("");
                const otpCode = otp.join("");
                if (otpCode.length !== 6) {
                    setError("Vui l\xF2ng nh\u1EADp \u0111\u1EA7y \u0111\u1EE7 6 s\u1ED1 OTP");
                    return;
                }
                setMessage("OTP h\u1EE3p l\u1EC7, vui l\xF2ng nh\u1EADp m\u1EADt kh\u1EA9u m\u1EDBi");
                setStep(3);
            }
        })["ForgotPassword[handleOtpSubmit]"];
        $[6] = otp;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    const handleOtpSubmit = t3;
    let t4;
    if ($[8] !== confirmPassword || $[9] !== email || $[10] !== newPassword || $[11] !== otp) {
        t4 = ({
            "ForgotPassword[handlePasswordSubmit]": async (e_2)=>{
                e_2.preventDefault();
                setError("");
                setMessage("");
                ;
                try {
                    const otpCode_0 = otp.join("");
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resetPassword"])(email, otpCode_0, newPassword, confirmPassword);
                    setMessage("\u0110\u1EB7t l\u1EA1i m\u1EADt kh\u1EA9u th\xE0nh c\xF4ng");
                    setStep(1);
                    setEmail("");
                    setOtp([
                        "",
                        "",
                        "",
                        "",
                        "",
                        ""
                    ]);
                    setNewPassword("");
                    setConfirmPassword("");
                } catch (t5) {
                    const err_0 = t5;
                    setError(err_0.response?.data?.message || "L\u1ED7i server");
                }
            }
        })["ForgotPassword[handlePasswordSubmit]"];
        $[8] = confirmPassword;
        $[9] = email;
        $[10] = newPassword;
        $[11] = otp;
        $[12] = t4;
    } else {
        t4 = $[12];
    }
    const handlePasswordSubmit = t4;
    let t5;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-3xl font-bold mb-6 text-center text-gray-800",
            children: "Quên mật khẩu"
        }, void 0, false, {
            fileName: "[project]/src/components/ForgotPassword.tsx",
            lineNumber: 129,
            columnNumber: 10
        }, this);
        $[13] = t5;
    } else {
        t5 = $[13];
    }
    let t6;
    if ($[14] !== error) {
        t6 = error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-red-500 mb-4",
            children: error
        }, void 0, false, {
            fileName: "[project]/src/components/ForgotPassword.tsx",
            lineNumber: 136,
            columnNumber: 19
        }, this);
        $[14] = error;
        $[15] = t6;
    } else {
        t6 = $[15];
    }
    let t7;
    if ($[16] !== message) {
        t7 = message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-green-500 mb-4",
            children: message
        }, void 0, false, {
            fileName: "[project]/src/components/ForgotPassword.tsx",
            lineNumber: 144,
            columnNumber: 21
        }, this);
        $[16] = message;
        $[17] = t7;
    } else {
        t7 = $[17];
    }
    let t8;
    if ($[18] !== email || $[19] !== handleEmailSubmit || $[20] !== step) {
        t8 = step === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: handleEmailSubmit,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "block text-gray-700",
                            children: "Email"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ForgotPassword.tsx",
                            lineNumber: 152,
                            columnNumber: 81
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "email",
                            value: email,
                            onChange: {
                                "ForgotPassword[<input>.onChange]": (e_3)=>setEmail(e_3.target.value)
                            }["ForgotPassword[<input>.onChange]"],
                            className: "w-full p-2 border rounded-md focus:ring focus:ring-blue-300",
                            required: true
                        }, void 0, false, {
                            fileName: "[project]/src/components/ForgotPassword.tsx",
                            lineNumber: 152,
                            columnNumber: 133
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ForgotPassword.tsx",
                    lineNumber: 152,
                    columnNumber: 59
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "submit",
                    className: "w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600",
                    children: "Gửi OTP"
                }, void 0, false, {
                    fileName: "[project]/src/components/ForgotPassword.tsx",
                    lineNumber: 154,
                    columnNumber: 144
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ForgotPassword.tsx",
            lineNumber: 152,
            columnNumber: 24
        }, this);
        $[18] = email;
        $[19] = handleEmailSubmit;
        $[20] = step;
        $[21] = t8;
    } else {
        t8 = $[21];
    }
    let t9;
    if ($[22] !== handleOtpChange || $[23] !== handleOtpSubmit || $[24] !== otp || $[25] !== step) {
        t9 = step === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: handleOtpSubmit,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "block text-gray-700",
                            children: "Nhập mã OTP (6 số)"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ForgotPassword.tsx",
                            lineNumber: 164,
                            columnNumber: 79
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex space-x-2",
                            children: otp.map({
                                "ForgotPassword[otp.map()]": (digit, index_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        id: `otp-${index_0}`,
                                        type: "text",
                                        maxLength: 1,
                                        value: digit,
                                        onChange: {
                                            "ForgotPassword[otp.map() > <input>.onChange]": (e_4)=>handleOtpChange(e_4, index_0)
                                        }["ForgotPassword[otp.map() > <input>.onChange]"],
                                        className: "w-12 p-2 border rounded-md text-center focus:ring focus:ring-blue-300",
                                        required: true
                                    }, index_0, false, {
                                        fileName: "[project]/src/components/ForgotPassword.tsx",
                                        lineNumber: 165,
                                        columnNumber: 62
                                    }, this)
                            }["ForgotPassword[otp.map()]"])
                        }, void 0, false, {
                            fileName: "[project]/src/components/ForgotPassword.tsx",
                            lineNumber: 164,
                            columnNumber: 144
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ForgotPassword.tsx",
                    lineNumber: 164,
                    columnNumber: 57
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "submit",
                    className: "w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600",
                    children: "Xác nhận OTP"
                }, void 0, false, {
                    fileName: "[project]/src/components/ForgotPassword.tsx",
                    lineNumber: 168,
                    columnNumber: 55
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ForgotPassword.tsx",
            lineNumber: 164,
            columnNumber: 24
        }, this);
        $[22] = handleOtpChange;
        $[23] = handleOtpSubmit;
        $[24] = otp;
        $[25] = step;
        $[26] = t9;
    } else {
        t9 = $[26];
    }
    let t10;
    if ($[27] !== confirmPassword || $[28] !== handlePasswordSubmit || $[29] !== newPassword || $[30] !== step) {
        t10 = step === 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: handlePasswordSubmit,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "block text-gray-700",
                            children: "Mật khẩu mới"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ForgotPassword.tsx",
                            lineNumber: 179,
                            columnNumber: 85
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "password",
                            value: newPassword,
                            onChange: {
                                "ForgotPassword[<input>.onChange]": (e_5)=>setNewPassword(e_5.target.value)
                            }["ForgotPassword[<input>.onChange]"],
                            className: "w-full p-2 border rounded-md focus:ring focus:ring-blue-300",
                            required: true
                        }, void 0, false, {
                            fileName: "[project]/src/components/ForgotPassword.tsx",
                            lineNumber: 179,
                            columnNumber: 144
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ForgotPassword.tsx",
                    lineNumber: 179,
                    columnNumber: 63
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "block text-gray-700",
                            children: "Xác nhận mật khẩu mới"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ForgotPassword.tsx",
                            lineNumber: 181,
                            columnNumber: 166
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "password",
                            value: confirmPassword,
                            onChange: {
                                "ForgotPassword[<input>.onChange]": (e_6)=>setConfirmPassword(e_6.target.value)
                            }["ForgotPassword[<input>.onChange]"],
                            className: "w-full p-2 border rounded-md focus:ring focus:ring-blue-300",
                            required: true
                        }, void 0, false, {
                            fileName: "[project]/src/components/ForgotPassword.tsx",
                            lineNumber: 181,
                            columnNumber: 234
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ForgotPassword.tsx",
                    lineNumber: 181,
                    columnNumber: 144
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "submit",
                    className: "w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600",
                    children: "Đặt lại mật khẩu"
                }, void 0, false, {
                    fileName: "[project]/src/components/ForgotPassword.tsx",
                    lineNumber: 183,
                    columnNumber: 144
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ForgotPassword.tsx",
            lineNumber: 179,
            columnNumber: 25
        }, this);
        $[27] = confirmPassword;
        $[28] = handlePasswordSubmit;
        $[29] = newPassword;
        $[30] = step;
        $[31] = t10;
    } else {
        t10 = $[31];
    }
    let t11;
    if ($[32] !== t10 || $[33] !== t6 || $[34] !== t7 || $[35] !== t8 || $[36] !== t9) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 via-blue-500 to-purple-600",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md mx-4",
                children: [
                    t5,
                    t6,
                    t7,
                    t8,
                    t9,
                    t10
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ForgotPassword.tsx",
                lineNumber: 194,
                columnNumber: 132
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ForgotPassword.tsx",
            lineNumber: 194,
            columnNumber: 11
        }, this);
        $[32] = t10;
        $[33] = t6;
        $[34] = t7;
        $[35] = t8;
        $[36] = t9;
        $[37] = t11;
    } else {
        t11 = $[37];
    }
    return t11;
}
_s(ForgotPassword, "5khp2FE23XA6ARmMJhXiuYosJIA=");
_c = ForgotPassword;
var _c;
__turbopack_context__.k.register(_c, "ForgotPassword");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_6b2b3456._.js.map