(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/utils/validate.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "validateRegisterForm",
    ()=>validateRegisterForm
]);
const validateRegisterForm = (form)=>{
    const errors = {};
    if (!form.fullName?.trim()) {
        errors.fullName = 'Vui lòng nhập họ và tên';
    }
    if (!form.username?.trim()) {
        errors.username = 'Vui lòng nhập tên đăng nhập';
    }
    if (!form.email?.trim()) {
        errors.email = 'Vui lòng nhập email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
        errors.email = 'Email không hợp lệ';
    }
    if (!form.phone?.trim()) {
        errors.phone = 'Vui lòng nhập số điện thoại';
    } else if (!/^[0-9]{10,11}$/.test(form.phone)) {
        errors.phone = 'Số điện thoại không hợp lệ';
    }
    if (!form.dob) {
        errors.dob = 'Vui lòng nhập ngày sinh';
    }
    if (!form.password) {
        errors.password = 'Vui lòng nhập mật khẩu';
    } else if (form.password.length < 8) {
        errors.password = 'Mật khẩu phải ít nhất 8 ký tự';
    }
    if (!form.confirmPassword) {
        errors.confirmPassword = 'Vui lòng xác nhận mật khẩu';
    } else if (form.password !== form.confirmPassword) {
        errors.confirmPassword = 'Mật khẩu xác nhận không khớp';
    }
    return errors;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
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
"[project]/src/components/Register.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Register
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye-off.js [app-client] (ecmascript) <export default as EyeOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$validate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/validate.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/api.services.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function Register() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(43);
    if ($[0] !== "5c437bbaf00a998fdabdbd557b4b1535d40b8572320c1377e476d34f4a3efbeb") {
        for(let $i = 0; $i < 43; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "5c437bbaf00a998fdabdbd557b4b1535d40b8572320c1377e476d34f4a3efbeb";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            fullName: "",
            username: "",
            email: "",
            phone: "",
            dob: "",
            address: "",
            password: "",
            confirmPassword: "",
            otp: ""
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {};
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    const [notice, setNotice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("form");
    const [showPassword, setShowPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showConfirmPassword, setShowConfirmPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t2;
    if ($[3] !== form) {
        t2 = ({
            "Register[handleChange]": (e)=>{
                setForm({
                    ...form,
                    [e.target.id]: e.target.value
                });
            }
        })["Register[handleChange]"];
        $[3] = form;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    const handleChange = t2;
    let t3;
    if ($[5] !== form.username) {
        t3 = ({
            "Register[handleUsernameBlur]": async ()=>{
                const username = form.username?.trim();
                if (!username) {
                    return;
                }
                ;
                try {
                    const { available } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkUsernameAvailable"])(username);
                    if (!available) {
                        setErrors(_RegisterHandleUsernameBlurSetErrors);
                    }
                } catch (t4) {
                    const err = t4;
                }
            }
        })["Register[handleUsernameBlur]"];
        $[5] = form.username;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    const handleUsernameBlur = t3;
    let t4;
    if ($[7] !== form.email) {
        t4 = ({
            "Register[handleEmailBlur]": async ()=>{
                const email = form.email?.trim();
                if (!email) {
                    return;
                }
                ;
                try {
                    const { available: available_0 } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkEmailAvailable"])(email);
                    if (!available_0) {
                        setErrors(_RegisterHandleEmailBlurSetErrors);
                    }
                } catch (t5) {
                    const err_0 = t5;
                }
            }
        })["Register[handleEmailBlur]"];
        $[7] = form.email;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    const handleEmailBlur = t4;
    let t5;
    if ($[9] !== form) {
        t5 = ({
            "Register[sendOtp]": async ()=>{
                const errs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$validate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateRegisterForm"])(form);
                setErrors(errs);
                if (Object.keys(errs).length > 0) {
                    return;
                }
                ;
                try {
                    const { fullName, username: username_0, email: email_0, phone, dob, address, password } = form;
                    const payload = {
                        fullName,
                        username: username_0,
                        email: email_0,
                        phone,
                        dob,
                        address,
                        password
                    };
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerRequestOtp"])(payload);
                    setStep("otp");
                    setNotice({
                        type: "info",
                        text: "OTP \u0111\xE3 \u0111\u01B0\u1EE3c g\u1EEDi, vui l\xF2ng ki\u1EC3m tra."
                    });
                } catch (t6) {
                    const err_1 = t6;
                    const serverErrors = err_1?.response?.data?.errors;
                    if (serverErrors && typeof serverErrors === "object") {
                        setErrors(serverErrors);
                    }
                    setNotice({
                        type: "error",
                        text: err_1?.response?.data?.message || "G\u1EEDi OTP th\u1EA5t b\u1EA1i."
                    });
                }
            }
        })["Register[sendOtp]"];
        $[9] = form;
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    const sendOtp = t5;
    let t6;
    if ($[11] !== form) {
        t6 = ({
            "Register[confirmRegister]": async ()=>{
                if (!/^[0-9]{6}$/.test(form.otp)) {
                    setErrors({
                        otp: "OTP ph\u1EA3i g\u1ED3m 6 ch\u1EEF s\u1ED1"
                    });
                    return;
                }
                ;
                try {
                    const { fullName: fullName_0, username: username_1, email: email_1, phone: phone_0, dob: dob_0, address: address_0, password: password_0 } = form;
                    const userData = {
                        fullName: fullName_0,
                        username: username_1,
                        email: email_1,
                        phone: phone_0,
                        dob: dob_0,
                        address: address_0,
                        password: password_0
                    };
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerConfirm"])(form.otp, userData);
                    setNotice({
                        type: "success",
                        text: "\u0110\u0103ng k\xFD th\xE0nh c\xF4ng! B\u1EA1n c\xF3 th\u1EC3 \u0111\u0103ng nh\u1EADp."
                    });
                    setForm({
                        fullName: "",
                        username: "",
                        email: "",
                        phone: "",
                        dob: "",
                        address: "",
                        password: "",
                        confirmPassword: "",
                        otp: ""
                    });
                    setStep("form");
                    setErrors({});
                } catch (t7) {
                    const err_2 = t7;
                    const serverErrors_0 = err_2?.response?.data?.errors;
                    if (serverErrors_0 && typeof serverErrors_0 === "object") {
                        setErrors(serverErrors_0);
                    }
                    setNotice({
                        type: "error",
                        text: err_2?.response?.data?.message || "X\xE1c minh OTP th\u1EA5t b\u1EA1i."
                    });
                }
            }
        })["Register[confirmRegister]"];
        $[11] = form;
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    const confirmRegister = t6;
    let t7;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-3xl font-bold text-gray-800 text-center mb-6",
            children: "Đăng ký"
        }, void 0, false, {
            fileName: "[project]/src/components/Register.tsx",
            lineNumber: 239,
            columnNumber: 10
        }, this);
        $[13] = t7;
    } else {
        t7 = $[13];
    }
    let t8;
    if ($[14] !== errors || $[15] !== form.address || $[16] !== form.confirmPassword || $[17] !== form.dob || $[18] !== form.email || $[19] !== form.fullName || $[20] !== form.password || $[21] !== form.phone || $[22] !== form.username || $[23] !== handleChange || $[24] !== handleEmailBlur || $[25] !== handleUsernameBlur || $[26] !== sendOtp || $[27] !== showConfirmPassword || $[28] !== showPassword || $[29] !== step) {
        t8 = step === "form" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            className: "space-y-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            id: "fullName",
                            value: form.fullName,
                            onChange: handleChange,
                            placeholder: "H\u1ECD v\xE0 t\xEAn",
                            className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Register.tsx",
                            lineNumber: 246,
                            columnNumber: 62
                        }, this),
                        errors.fullName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-red-500 text-sm mt-1",
                            children: errors.fullName
                        }, void 0, false, {
                            fileName: "[project]/src/components/Register.tsx",
                            lineNumber: 246,
                            columnNumber: 345
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Register.tsx",
                    lineNumber: 246,
                    columnNumber: 57
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            id: "username",
                            value: form.username,
                            onChange: handleChange,
                            onBlur: handleUsernameBlur,
                            placeholder: "T\xEAn \u0111\u0103ng nh\u1EADp",
                            className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Register.tsx",
                            lineNumber: 246,
                            columnNumber: 419
                        }, this),
                        errors.username && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-red-500 text-sm mt-1",
                            children: errors.username
                        }, void 0, false, {
                            fileName: "[project]/src/components/Register.tsx",
                            lineNumber: 246,
                            columnNumber: 741
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Register.tsx",
                    lineNumber: 246,
                    columnNumber: 414
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            id: "email",
                            type: "email",
                            value: form.email,
                            onChange: handleChange,
                            onBlur: handleEmailBlur,
                            placeholder: "Email",
                            className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Register.tsx",
                            lineNumber: 246,
                            columnNumber: 815
                        }, this),
                        errors.email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-red-500 text-sm mt-1",
                            children: errors.email
                        }, void 0, false, {
                            fileName: "[project]/src/components/Register.tsx",
                            lineNumber: 246,
                            columnNumber: 1110
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Register.tsx",
                    lineNumber: 246,
                    columnNumber: 810
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            id: "phone",
                            value: form.phone,
                            onChange: handleChange,
                            placeholder: "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i",
                            className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Register.tsx",
                            lineNumber: 246,
                            columnNumber: 1181
                        }, this),
                        errors.phone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-red-500 text-sm mt-1",
                            children: errors.phone
                        }, void 0, false, {
                            fileName: "[project]/src/components/Register.tsx",
                            lineNumber: 246,
                            columnNumber: 1468
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Register.tsx",
                    lineNumber: 246,
                    columnNumber: 1176
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            id: "dob",
                            type: "date",
                            value: form.dob,
                            onChange: handleChange,
                            className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Register.tsx",
                            lineNumber: 246,
                            columnNumber: 1539
                        }, this),
                        errors.dob && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-red-500 text-sm mt-1",
                            children: errors.dob
                        }, void 0, false, {
                            fileName: "[project]/src/components/Register.tsx",
                            lineNumber: 246,
                            columnNumber: 1782
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Register.tsx",
                    lineNumber: 246,
                    columnNumber: 1534
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        id: "address",
                        value: form.address,
                        onChange: handleChange,
                        placeholder: "\u0110\u1ECBa ch\u1EC9",
                        className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Register.tsx",
                        lineNumber: 246,
                        columnNumber: 1851
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/Register.tsx",
                    lineNumber: 246,
                    columnNumber: 1846
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            id: "password",
                            type: showPassword ? "text" : "password",
                            value: form.password,
                            onChange: handleChange,
                            placeholder: "M\u1EADt kh\u1EA9u",
                            className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all pr-12"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Register.tsx",
                            lineNumber: 246,
                            columnNumber: 2146
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: {
                                "Register[<button>.onClick]": ()=>setShowPassword(!showPassword)
                            }["Register[<button>.onClick]"],
                            className: "absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700 transition-colors",
                            children: showPassword ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__["EyeOff"], {
                                size: 20
                            }, void 0, false, {
                                fileName: "[project]/src/components/Register.tsx",
                                lineNumber: 248,
                                columnNumber: 167
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                size: 20
                            }, void 0, false, {
                                fileName: "[project]/src/components/Register.tsx",
                                lineNumber: 248,
                                columnNumber: 190
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Register.tsx",
                            lineNumber: 246,
                            columnNumber: 2455
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Register.tsx",
                    lineNumber: 246,
                    columnNumber: 2120
                }, this),
                errors.password && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-red-500 text-sm mt-1",
                    children: errors.password
                }, void 0, false, {
                    fileName: "[project]/src/components/Register.tsx",
                    lineNumber: 248,
                    columnNumber: 243
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            id: "confirmPassword",
                            type: showConfirmPassword ? "text" : "password",
                            value: form.confirmPassword,
                            onChange: handleChange,
                            placeholder: "X\xE1c nh\u1EADn m\u1EADt kh\u1EA9u",
                            className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all pr-12"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Register.tsx",
                            lineNumber: 248,
                            columnNumber: 332
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: {
                                "Register[<button>.onClick]": ()=>setShowConfirmPassword(!showConfirmPassword)
                            }["Register[<button>.onClick]"],
                            className: "absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700 transition-colors",
                            children: showConfirmPassword ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__["EyeOff"], {
                                size: 20
                            }, void 0, false, {
                                fileName: "[project]/src/components/Register.tsx",
                                lineNumber: 250,
                                columnNumber: 174
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                size: 20
                            }, void 0, false, {
                                fileName: "[project]/src/components/Register.tsx",
                                lineNumber: 250,
                                columnNumber: 197
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Register.tsx",
                            lineNumber: 248,
                            columnNumber: 679
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Register.tsx",
                    lineNumber: 248,
                    columnNumber: 306
                }, this),
                errors.confirmPassword && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-red-500 text-sm mt-1",
                    children: errors.confirmPassword
                }, void 0, false, {
                    fileName: "[project]/src/components/Register.tsx",
                    lineNumber: 250,
                    columnNumber: 257
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: sendOtp,
                    className: "w-full py-3 text-white font-semibold rounded-lg bg-purple-600 hover:bg-purple-700 transition-colors shadow-lg",
                    children: "Gửi OTP"
                }, void 0, false, {
                    fileName: "[project]/src/components/Register.tsx",
                    lineNumber: 250,
                    columnNumber: 327
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-4 text-sm text-gray-600 text-center",
                    children: [
                        "Đã có tài khoản?",
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "/login",
                            className: "text-blue-600 font-semibold hover:text-blue-800 transition-colors",
                            children: "Đăng nhập"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Register.tsx",
                            lineNumber: 250,
                            columnNumber: 582
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Register.tsx",
                    lineNumber: 250,
                    columnNumber: 505
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Register.tsx",
            lineNumber: 246,
            columnNumber: 29
        }, this);
        $[14] = errors;
        $[15] = form.address;
        $[16] = form.confirmPassword;
        $[17] = form.dob;
        $[18] = form.email;
        $[19] = form.fullName;
        $[20] = form.password;
        $[21] = form.phone;
        $[22] = form.username;
        $[23] = handleChange;
        $[24] = handleEmailBlur;
        $[25] = handleUsernameBlur;
        $[26] = sendOtp;
        $[27] = showConfirmPassword;
        $[28] = showPassword;
        $[29] = step;
        $[30] = t8;
    } else {
        t8 = $[30];
    }
    let t9;
    if ($[31] !== confirmRegister || $[32] !== errors || $[33] !== form.otp || $[34] !== handleChange || $[35] !== step) {
        t9 = step === "otp" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    id: "otp",
                    value: form.otp,
                    onChange: handleChange,
                    placeholder: "Nh\u1EADp OTP",
                    className: "w-full mb-1 px-4 py-3 border rounded-lg"
                }, void 0, false, {
                    fileName: "[project]/src/components/Register.tsx",
                    lineNumber: 273,
                    columnNumber: 30
                }, this),
                errors.otp && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-red-500",
                    children: errors.otp
                }, void 0, false, {
                    fileName: "[project]/src/components/Register.tsx",
                    lineNumber: 273,
                    columnNumber: 186
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: confirmRegister,
                    className: "w-full py-3 text-white font-semibold rounded-lg bg-green-600 hover:bg-green-700 mt-3",
                    children: "X\xE1c minh OTP & \u0110\u0103ng k\xFD"
                }, void 0, false, {
                    fileName: "[project]/src/components/Register.tsx",
                    lineNumber: 273,
                    columnNumber: 231
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-4 text-sm text-gray-600 text-center",
                    children: [
                        "Đã có tài khoản?",
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "/login",
                            className: "text-blue-600 font-semibold hover:underline",
                            children: "Đăng nhập"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Register.tsx",
                            lineNumber: 273,
                            columnNumber: 504
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Register.tsx",
                    lineNumber: 273,
                    columnNumber: 427
                }, this)
            ]
        }, void 0, true);
        $[31] = confirmRegister;
        $[32] = errors;
        $[33] = form.otp;
        $[34] = handleChange;
        $[35] = step;
        $[36] = t9;
    } else {
        t9 = $[36];
    }
    let t10;
    if ($[37] !== notice) {
        t10 = notice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `mt-4 p-3 rounded-lg ${notice.type === "success" ? "bg-green-50 text-green-700" : notice.type === "info" ? "bg-blue-50 text-blue-700" : "bg-red-50 text-red-700"}`,
            children: notice.text
        }, void 0, false, {
            fileName: "[project]/src/components/Register.tsx",
            lineNumber: 285,
            columnNumber: 21
        }, this);
        $[37] = notice;
        $[38] = t10;
    } else {
        t10 = $[38];
    }
    let t11;
    if ($[39] !== t10 || $[40] !== t8 || $[41] !== t9) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 via-blue-500 to-purple-600",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md mx-4",
                children: [
                    t7,
                    t8,
                    t9,
                    t10
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Register.tsx",
                lineNumber: 293,
                columnNumber: 132
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Register.tsx",
            lineNumber: 293,
            columnNumber: 11
        }, this);
        $[39] = t10;
        $[40] = t8;
        $[41] = t9;
        $[42] = t11;
    } else {
        t11 = $[42];
    }
    return t11;
}
_s(Register, "OYJ1zXHLfvvnjOUelrMMcHaCGbc=");
_c = Register;
function _RegisterHandleEmailBlurSetErrors(prev_0) {
    return {
        ...prev_0,
        email: "Email \u0111\xE3 \u0111\u01B0\u1EE3c s\u1EED d\u1EE5ng."
    };
}
function _RegisterHandleUsernameBlurSetErrors(prev) {
    return {
        ...prev,
        username: "T\xEAn \u0111\u0103ng nh\u1EADp \u0111\xE3 \u0111\u01B0\u1EE3c s\u1EED d\u1EE5ng."
    };
}
var _c;
__turbopack_context__.k.register(_c, "Register");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_6dc5629b._.js.map