
const mockUser = {
    username: "bnb",
    loggedIn: true
}

export const trending = (req, res) => {
    const videos = [
        {
            title: "First Video",
            rating:5,
            comments:2,
            createAt:"2 minuate ag",
            views:52,
            id:1
        },
        {
            title: "Second Video",
            rating:5,
            comments:2,
            createAt:"2 minuate ag",
            views:52,
            id:1
        },
        {
            title: "Third Video",
            rating:5,
            comments:2,
            createAt:"2 minuate ag",
            views:52,
            id:1
        },
    ];
    return res.render("home", { pageTitle: "Home", mockUser, videos });
}
export const see = (req, res) => res.render("watch", { pageTitle: "Watch"});
export const edit = (req, res) => res.render("edit", { pageTitle: "Edit"});
export const upload = (req, res) => {
    console.log(req.params);
    return res.send(`Upload video ${req.params.id}`);
}
export const search = (req, res) => res.send("Search");
export const deleteVideo = (req, res) => res.send("delete video");