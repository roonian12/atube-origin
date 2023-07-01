import express from "express";

const PORT = 4000;

const app = new express();

const home = (req, res) => {
    console.log('home !!!');
    return res.send("hello");
}

const login = (req, res) => {
    console.log('login');
    return res.send("login");
}

app.get("/", home);
app.get("/login", login);

const handleListening = () => {
    console.log(`server listening on port http://localhost:${PORT}`)
}

app.listen(PORT,handleListening);
