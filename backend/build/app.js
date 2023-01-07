"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var db_1 = __importDefault(require("./config/db"));
var dotenv_1 = __importDefault(require("dotenv"));
var cors_1 = __importDefault(require("cors"));
var index_1 = __importDefault(require("./routes/index"));
var urls_1 = __importDefault(require("./routes/urls"));
dotenv_1.default.config();
var app = (0, express_1.default)();
(0, db_1.default)();
// Body Parser
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}));
app.get("/", function (req, res) {
    res.send("welcome to stthi shortUrl backend");
});
app.use("/", index_1.default);
app.use("/api", urls_1.default);
// if ((process.env.NODE_ENV === "production")) {
//   app.use(express.static(path.join(__dirname, "../build")));
//   app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "../build/index.html"));
//   });
// }
// Server Setup
var PORT = process.env.PORT || 3333;
app.listen(PORT, function () {
    console.log("Server is running at PORT ".concat(PORT));
});
