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
exports.deleteMemo = exports.updateMemo = exports.addMemo = exports.getMemo = exports.getMemos = void 0;
const memo_1 = __importDefault(require("../../models/memo"));
const getMemos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const memos = yield memo_1.default.find({ userId: req.body.userId });
        res.status(200).json({ memos });
    }
    catch (error) {
        throw error;
    }
});
exports.getMemos = getMemos;
const getMemo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const memo = yield memo_1.default.findById(req.params.id);
        res.status(200).json({ memo });
    }
    catch (error) {
        throw error;
    }
});
exports.getMemo = getMemo;
const addMemo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const memo = new memo_1.default({
            title: body.title,
            description: body.description,
            pinned: body.pinned,
            userId: body.userId,
        });
        yield memo.save();
        res.status(201).json({ message: 'メモを追加しました。' });
    }
    catch (error) {
        throw error;
    }
});
exports.addMemo = addMemo;
const updateMemo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log();
        const { params: { id }, body, } = req;
        yield memo_1.default.findByIdAndUpdate({ _id: id }, body);
        res.status(200).json({ message: 'メモを更新しました。' });
    }
    catch (error) {
        throw error;
    }
});
exports.updateMemo = updateMemo;
const deleteMemo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedMemo = yield memo_1.default.findByIdAndRemove(req.params.id);
        const allMemos = yield memo_1.default.find();
        res.status(200).json({ message: 'メモを削除しました', memo: deletedMemo, memos: allMemos });
    }
    catch (error) {
        throw error;
    }
});
exports.deleteMemo = deleteMemo;
