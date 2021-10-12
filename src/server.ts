import { app as server } from "./app";
import "./services/mongoConneciton";


const port = process.env.PORT;

server.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});
