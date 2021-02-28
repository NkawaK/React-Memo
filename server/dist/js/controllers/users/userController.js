"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signOut = exports.signUp = exports.signIn = exports.getUser = void 0;
const user_1 = __importDefault(require("../../models/user"));
const passport_1 = __importDefault(require("passport"));
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (res.locals.loggedIn) {
            const user = res.locals.currentUser;
            res.status(200).json({ message: 'ログインしています。', user });
        }
        else {
            res.status(401).json({ message: 'ログインしていません。' });
        }
    }
    catch (error) {
        throw error;
    }
});
exports.getUser = getUser;
const signUp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newUser = new user_1.default(req.body);
        user_1.default.register(newUser, req.body.password, (err, user) => {
            if (user) {
                res.status(201).json({ message: 'ユーザーを作成しました。', user });
            }
            else {
                res.status(404).json({ message: 'ユーザーの作成に失敗しました。', err });
            }
        });
    }
    catch (error) {
        throw error;
    }
});
exports.signUp = signUp;
const signIn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        passport_1.default.authenticate('local', (error, user, info) => {
            if (error)
                res.status(404).json({ message: 'エラーが発生しました。', error });
            if (user) {
                res.status(200).json({ message: '認証に成功しました。', user });
            }
            else {
                res.status(401).json({ message: 'emailかパスワードが間違っています。', info });
            }
        });
    }
    catch (error) {
        throw error;
    }
});
exports.signIn = signIn;
const signOut = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        req.logOut();
    }
    catch (error) {
        throw (error);
    }
});
exports.signOut = signOut;
