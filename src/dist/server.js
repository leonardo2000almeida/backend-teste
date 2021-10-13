"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
require("./services/mongoConneciton");
const port = process.env.PORT;
app_1.app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`);
});
