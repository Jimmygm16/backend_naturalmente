"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const PORT = 3000;
// TypeScript give us an exception when we use underscore before the parameter name, it wont need it to be used.
app.get('/', (_req, res) => {
    res.send('Hello World!');
});
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
