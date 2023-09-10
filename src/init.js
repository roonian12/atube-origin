import "./db";
import app from "./server";

const PORT = 80;

const handleListening = () => {
    console.log(`server listening on port http://localhost:${PORT}`)
}

app.listen(PORT,handleListening);