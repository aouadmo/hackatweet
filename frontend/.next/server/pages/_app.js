/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _reducers_Tweets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/Tweets */ \"./reducers/Tweets.js\");\n/* harmony import */ var _reducers_users__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/users */ \"./reducers/users.js\");\n/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux-persist */ \"redux-persist\");\n/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(redux_persist__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redux-persist/integration/react */ \"redux-persist/integration/react\");\n/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! redux-persist/lib/storage */ \"redux-persist/lib/storage\");\n/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\n\n\n\n\n\nconst reducers = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_9__.combineReducers)({\n    tweets: _reducers_Tweets__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    user: _reducers_users__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n});\nconst persistConfig = {\n    key: \"hackatweet\",\n    storage: (redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_8___default())\n};\nconst store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_9__.configureStore)({\n    reducer: (0,redux_persist__WEBPACK_IMPORTED_MODULE_6__.persistReducer)(persistConfig, reducers),\n    middleware: (getDefaultMiddleware)=>getDefaultMiddleware({\n            serializableCheck: false\n        })\n});\nconst persistor = (0,redux_persist__WEBPACK_IMPORTED_MODULE_6__.persistStore)(store);\nfunction App({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_3__.Provider, {\n        store: store,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_7__.PersistGate, {\n            persistor: persistor,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                            children: \"HackaTweet\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\mothe\\\\Desktop\\\\hackatweet\\\\frontend\\\\pages\\\\_app.js\",\n                            lineNumber: 27,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                            name: \"viewport\",\n                            content: \"width=device-width, initial-scale=1\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\mothe\\\\Desktop\\\\hackatweet\\\\frontend\\\\pages\\\\_app.js\",\n                            lineNumber: 28,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\mothe\\\\Desktop\\\\hackatweet\\\\frontend\\\\pages\\\\_app.js\",\n                    lineNumber: 26,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\mothe\\\\Desktop\\\\hackatweet\\\\frontend\\\\pages\\\\_app.js\",\n                    lineNumber: 30,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\mothe\\\\Desktop\\\\hackatweet\\\\frontend\\\\pages\\\\_app.js\",\n            lineNumber: 25,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\mothe\\\\Desktop\\\\hackatweet\\\\frontend\\\\pages\\\\_app.js\",\n        lineNumber: 24,\n        columnNumber: 9\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUErQjtBQUNGO0FBR1U7QUFDQztBQUNIO0FBRXdCO0FBQ0M7QUFDZDtBQUNtQjtBQUVuRSxNQUFNVSxRQUFRLEdBQUdGLGlFQUFlLENBQUM7SUFBRU4sTUFBTTtJQUFFQyxJQUFJO0NBQUUsQ0FBQztBQUNsRCxNQUFNUSxhQUFhLEdBQUc7SUFBRUMsR0FBRyxFQUFFLFlBQVk7SUFBRUwsT0FBTztDQUFFO0FBQ3BELE1BQU1NLEtBQUssR0FBR0osZ0VBQWMsQ0FBQztJQUN6QkssT0FBTyxFQUFFVCw2REFBYyxDQUFDTSxhQUFhLEVBQUVELFFBQVEsQ0FBQztJQUNoREssVUFBVSxFQUFFLENBQUNDLG9CQUFvQixHQUFLQSxvQkFBb0IsQ0FBQztZQUFFQyxpQkFBaUIsRUFBRSxLQUFLO1NBQUUsQ0FBQztDQUMzRixDQUFDO0FBQ0YsTUFBTUMsU0FBUyxHQUFHZCwyREFBWSxDQUFDUyxLQUFLLENBQUM7QUFFckMsU0FBU00sR0FBRyxDQUFDLEVBQUVDLFNBQVMsR0FBRUMsU0FBUyxHQUFFLEVBQUU7SUFDbkMscUJBQ0ksOERBQUNwQixpREFBUTtRQUFDWSxLQUFLLEVBQUVBLEtBQUs7a0JBQ2xCLDRFQUFDUCx3RUFBVztZQUFDWSxTQUFTLEVBQUVBLFNBQVM7OzhCQUM3Qiw4REFBQ2xCLGtEQUFJOztzQ0FDRCw4REFBQ3NCLE9BQUs7c0NBQUMsWUFBVTs7Ozs7Z0NBQVE7c0NBQ3pCLDhEQUFDQyxNQUFJOzRCQUFDQyxJQUFJLEVBQUMsVUFBVTs0QkFBQ0MsT0FBTyxFQUFDLHFDQUFxQzs7Ozs7Z0NBQUc7Ozs7Ozt3QkFDbkU7OEJBQ1AsOERBQUNMLFNBQVM7b0JBQUUsR0FBR0MsU0FBUzs7Ozs7d0JBQUk7Ozs7OztnQkFDbEI7Ozs7O1lBQ1AsQ0FDYjtDQUNMO0FBRUQsaUVBQWVGLEdBQUcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2hhY2thdHdlZXQtZnJvbnRlbmQvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5cclxuXHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgdHdlZXRzIGZyb20gJy4uL3JlZHVjZXJzL1R3ZWV0cyc7XHJcbmltcG9ydCB1c2VyIGZyb20gJy4uL3JlZHVjZXJzL3VzZXJzJztcclxuXHJcbmltcG9ydCB7IHBlcnNpc3RTdG9yZSwgcGVyc2lzdFJlZHVjZXIgfSBmcm9tICdyZWR1eC1wZXJzaXN0JztcclxuaW1wb3J0IHsgUGVyc2lzdEdhdGUgfSBmcm9tICdyZWR1eC1wZXJzaXN0L2ludGVncmF0aW9uL3JlYWN0JztcclxuaW1wb3J0IHN0b3JhZ2UgZnJvbSAncmVkdXgtcGVyc2lzdC9saWIvc3RvcmFnZSc7XHJcbmltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycywgY29uZmlndXJlU3RvcmUgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcclxuXHJcbmNvbnN0IHJlZHVjZXJzID0gY29tYmluZVJlZHVjZXJzKHsgdHdlZXRzLCB1c2VyIH0pO1xyXG5jb25zdCBwZXJzaXN0Q29uZmlnID0geyBrZXk6ICdoYWNrYXR3ZWV0Jywgc3RvcmFnZSB9O1xyXG5jb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKHtcclxuICAgIHJlZHVjZXI6IHBlcnNpc3RSZWR1Y2VyKHBlcnNpc3RDb25maWcsIHJlZHVjZXJzKSxcclxuICAgIG1pZGRsZXdhcmU6IChnZXREZWZhdWx0TWlkZGxld2FyZSkgPT4gZ2V0RGVmYXVsdE1pZGRsZXdhcmUoeyBzZXJpYWxpemFibGVDaGVjazogZmFsc2UgfSlcclxufSk7XHJcbmNvbnN0IHBlcnNpc3RvciA9IHBlcnNpc3RTdG9yZShzdG9yZSk7XHJcblxyXG5mdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxyXG4gICAgICAgICAgICA8UGVyc2lzdEdhdGUgcGVyc2lzdG9yPXtwZXJzaXN0b3J9PlxyXG4gICAgICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRpdGxlPkhhY2thVHdlZXQ8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgICAgICAgIDwvUGVyc2lzdEdhdGU+XHJcbiAgICAgICAgPC9Qcm92aWRlcj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDsiXSwibmFtZXMiOlsiSGVhZCIsIlByb3ZpZGVyIiwidHdlZXRzIiwidXNlciIsInBlcnNpc3RTdG9yZSIsInBlcnNpc3RSZWR1Y2VyIiwiUGVyc2lzdEdhdGUiLCJzdG9yYWdlIiwiY29tYmluZVJlZHVjZXJzIiwiY29uZmlndXJlU3RvcmUiLCJyZWR1Y2VycyIsInBlcnNpc3RDb25maWciLCJrZXkiLCJzdG9yZSIsInJlZHVjZXIiLCJtaWRkbGV3YXJlIiwiZ2V0RGVmYXVsdE1pZGRsZXdhcmUiLCJzZXJpYWxpemFibGVDaGVjayIsInBlcnNpc3RvciIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./reducers/Tweets.js":
/*!****************************!*\
  !*** ./reducers/Tweets.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"deleteTweet\": () => (/* binding */ deleteTweet),\n/* harmony export */   \"likeTweet\": () => (/* binding */ likeTweet),\n/* harmony export */   \"setTweets\": () => (/* binding */ setTweets)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst initialState = {\n    tweets: []\n};\nconst tweetsSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"tweets\",\n    initialState,\n    reducers: {\n        likeTweet: (state, action)=>{\n            const tweet = state.tweets.find((t)=>t.id === action.payload\n            );\n            if (tweet) {\n                tweet.liked = !tweet.liked; // toggle like\n            }\n        },\n        deleteTweet: (state, action)=>{\n            state.tweets = state.tweets.filter((t)=>t.id !== action.payload\n            );\n        },\n        setTweets: (state, action)=>{\n            state.tweets = action.payload;\n        }\n    }\n});\nconst { likeTweet , deleteTweet , setTweets  } = tweetsSlice.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tweetsSlice.reducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1Y2Vycy9Ud2VldHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQStDO0FBRS9DLE1BQU1DLFlBQVksR0FBRztJQUNuQkMsTUFBTSxFQUFFLEVBQUU7Q0FDWDtBQUVELE1BQU1DLFdBQVcsR0FBR0gsNkRBQVcsQ0FBQztJQUM5QkksSUFBSSxFQUFFLFFBQVE7SUFDZEgsWUFBWTtJQUNaSSxRQUFRLEVBQUU7UUFDUkMsU0FBUyxFQUFFLENBQUNDLEtBQUssRUFBRUMsTUFBTSxHQUFLO1lBQzVCLE1BQU1DLEtBQUssR0FBR0YsS0FBSyxDQUFDTCxNQUFNLENBQUNRLElBQUksQ0FBQ0MsQ0FBQUEsQ0FBQyxHQUFJQSxDQUFDLENBQUNDLEVBQUUsS0FBS0osTUFBTSxDQUFDSyxPQUFPO1lBQUEsQ0FBQztZQUM3RCxJQUFJSixLQUFLLEVBQUU7Z0JBQ1RBLEtBQUssQ0FBQ0ssS0FBSyxHQUFHLENBQUNMLEtBQUssQ0FBQ0ssS0FBSyxDQUFDLENBQUMsY0FBYzthQUMzQztTQUNGO1FBQ0RDLFdBQVcsRUFBRSxDQUFDUixLQUFLLEVBQUVDLE1BQU0sR0FBSztZQUM5QkQsS0FBSyxDQUFDTCxNQUFNLEdBQUdLLEtBQUssQ0FBQ0wsTUFBTSxDQUFDYyxNQUFNLENBQUNMLENBQUFBLENBQUMsR0FBSUEsQ0FBQyxDQUFDQyxFQUFFLEtBQUtKLE1BQU0sQ0FBQ0ssT0FBTztZQUFBLENBQUMsQ0FBQztTQUNsRTtRQUNESSxTQUFTLEVBQUUsQ0FBQ1YsS0FBSyxFQUFFQyxNQUFNLEdBQUs7WUFDNUJELEtBQUssQ0FBQ0wsTUFBTSxHQUFHTSxNQUFNLENBQUNLLE9BQU8sQ0FBQztTQUMvQjtLQUNGO0NBQ0YsQ0FBQztBQUVLLE1BQU0sRUFBRVAsU0FBUyxHQUFFUyxXQUFXLEdBQUVFLFNBQVMsR0FBRSxHQUFHZCxXQUFXLENBQUNlLE9BQU8sQ0FBQztBQUN6RSxpRUFBZWYsV0FBVyxDQUFDZ0IsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGFja2F0d2VldC1mcm9udGVuZC8uL3JlZHVjZXJzL1R3ZWV0cy5qcz9hYzM3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgdHdlZXRzOiBbXSwgXHJcbn07XHJcblxyXG5jb25zdCB0d2VldHNTbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICBuYW1lOiAndHdlZXRzJyxcclxuICBpbml0aWFsU3RhdGUsXHJcbiAgcmVkdWNlcnM6IHtcclxuICAgIGxpa2VUd2VldDogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgY29uc3QgdHdlZXQgPSBzdGF0ZS50d2VldHMuZmluZCh0ID0+IHQuaWQgPT09IGFjdGlvbi5wYXlsb2FkKTtcclxuICAgICAgaWYgKHR3ZWV0KSB7XHJcbiAgICAgICAgdHdlZXQubGlrZWQgPSAhdHdlZXQubGlrZWQ7IC8vIHRvZ2dsZSBsaWtlXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBkZWxldGVUd2VldDogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgc3RhdGUudHdlZXRzID0gc3RhdGUudHdlZXRzLmZpbHRlcih0ID0+IHQuaWQgIT09IGFjdGlvbi5wYXlsb2FkKTtcclxuICAgIH0sXHJcbiAgICBzZXRUd2VldHM6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIHN0YXRlLnR3ZWV0cyA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCB7IGxpa2VUd2VldCwgZGVsZXRlVHdlZXQsIHNldFR3ZWV0cyB9ID0gdHdlZXRzU2xpY2UuYWN0aW9ucztcclxuZXhwb3J0IGRlZmF1bHQgdHdlZXRzU2xpY2UucmVkdWNlcjtcclxuIl0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwiaW5pdGlhbFN0YXRlIiwidHdlZXRzIiwidHdlZXRzU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJsaWtlVHdlZXQiLCJzdGF0ZSIsImFjdGlvbiIsInR3ZWV0IiwiZmluZCIsInQiLCJpZCIsInBheWxvYWQiLCJsaWtlZCIsImRlbGV0ZVR3ZWV0IiwiZmlsdGVyIiwic2V0VHdlZXRzIiwiYWN0aW9ucyIsInJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./reducers/Tweets.js\n");

/***/ }),

/***/ "./reducers/users.js":
/*!***************************!*\
  !*** ./reducers/users.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"login\": () => (/* binding */ login),\n/* harmony export */   \"logout\": () => (/* binding */ logout),\n/* harmony export */   \"userSlice\": () => (/* binding */ userSlice)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst initialState = {\n    value: {\n        token: null,\n        username: null\n    }\n};\nconst userSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"user\",\n    initialState,\n    reducers: {\n        login: (state, action)=>{\n            state.value.token = action.payload.token;\n            state.value.username = action.payload.username;\n        },\n        logout: (state)=>{\n            state.value.token = null;\n            state.value.username = null;\n        }\n    }\n});\nconst { login , logout  } = userSlice.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (userSlice.reducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1Y2Vycy91c2Vycy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBK0M7QUFFL0MsTUFBTUMsWUFBWSxHQUFHO0lBQ25CQyxLQUFLLEVBQUU7UUFBRUMsS0FBSyxFQUFFLElBQUk7UUFBRUMsUUFBUSxFQUFFLElBQUk7S0FBRTtDQUN2QztBQUVNLE1BQU1DLFNBQVMsR0FBR0wsNkRBQVcsQ0FBQztJQUNuQ00sSUFBSSxFQUFFLE1BQU07SUFDWkwsWUFBWTtJQUNaTSxRQUFRLEVBQUU7UUFDUkMsS0FBSyxFQUFFLENBQUNDLEtBQUssRUFBRUMsTUFBTSxHQUFLO1lBQ3hCRCxLQUFLLENBQUNQLEtBQUssQ0FBQ0MsS0FBSyxHQUFHTyxNQUFNLENBQUNDLE9BQU8sQ0FBQ1IsS0FBSyxDQUFDO1lBQ3pDTSxLQUFLLENBQUNQLEtBQUssQ0FBQ0UsUUFBUSxHQUFHTSxNQUFNLENBQUNDLE9BQU8sQ0FBQ1AsUUFBUSxDQUFDO1NBQ2hEO1FBQ0RRLE1BQU0sRUFBRSxDQUFDSCxLQUFLLEdBQUs7WUFDakJBLEtBQUssQ0FBQ1AsS0FBSyxDQUFDQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1lBQ3pCTSxLQUFLLENBQUNQLEtBQUssQ0FBQ0UsUUFBUSxHQUFHLElBQUksQ0FBQztTQUM3QjtLQUNGO0NBQ0YsQ0FBQyxDQUFDO0FBRUksTUFBTSxFQUFFSSxLQUFLLEdBQUVJLE1BQU0sR0FBRSxHQUFHUCxTQUFTLENBQUNRLE9BQU8sQ0FBQztBQUNuRCxpRUFBZVIsU0FBUyxDQUFDUyxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oYWNrYXR3ZWV0LWZyb250ZW5kLy4vcmVkdWNlcnMvdXNlcnMuanM/ZTM2ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIHZhbHVlOiB7IHRva2VuOiBudWxsLCB1c2VybmFtZTogbnVsbCB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZXJTbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICBuYW1lOiAndXNlcicsXHJcbiAgaW5pdGlhbFN0YXRlLFxyXG4gIHJlZHVjZXJzOiB7XHJcbiAgICBsb2dpbjogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgc3RhdGUudmFsdWUudG9rZW4gPSBhY3Rpb24ucGF5bG9hZC50b2tlbjtcclxuICAgICAgc3RhdGUudmFsdWUudXNlcm5hbWUgPSBhY3Rpb24ucGF5bG9hZC51c2VybmFtZTtcclxuICAgIH0sXHJcbiAgICBsb2dvdXQ6IChzdGF0ZSkgPT4ge1xyXG4gICAgICBzdGF0ZS52YWx1ZS50b2tlbiA9IG51bGw7XHJcbiAgICAgIHN0YXRlLnZhbHVlLnVzZXJuYW1lID0gbnVsbDtcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgeyBsb2dpbiwgbG9nb3V0IH0gPSB1c2VyU2xpY2UuYWN0aW9ucztcclxuZXhwb3J0IGRlZmF1bHQgdXNlclNsaWNlLnJlZHVjZXI7Il0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwiaW5pdGlhbFN0YXRlIiwidmFsdWUiLCJ0b2tlbiIsInVzZXJuYW1lIiwidXNlclNsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwibG9naW4iLCJzdGF0ZSIsImFjdGlvbiIsInBheWxvYWQiLCJsb2dvdXQiLCJhY3Rpb25zIiwicmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./reducers/users.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux-persist":
/*!********************************!*\
  !*** external "redux-persist" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-persist");

/***/ }),

/***/ "redux-persist/integration/react":
/*!**************************************************!*\
  !*** external "redux-persist/integration/react" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-persist/integration/react");

/***/ }),

/***/ "redux-persist/lib/storage":
/*!********************************************!*\
  !*** external "redux-persist/lib/storage" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-persist/lib/storage");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();