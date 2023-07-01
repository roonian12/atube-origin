export const trending = (req, res) => res.send("Home Page Videos");
export const see = (req, res) => {
    console.log(req.params);
    return res.send(`Watch video ${req.params.id}`);
}
export const edit = (req, res) => {
    console.log(req.params);
    return res.send(`Edit video ${req.params.id}`);
}
export const upload = (req, res) => {
    console.log(req.params);
    return res.send(`Upload video ${req.params.id}`);
}
export const search = (req, res) => res.send("Search");
export const deleteVideo = (req, res) => res.send("delete video");