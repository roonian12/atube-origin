
const mockUser = {
    username : "bnb",
    loggedIn : true
}
// const videos = [] // else의 경우(가져올 비디오가 없을 경우, home.pug의 else를 가져온다.)

const videos = [
    {
        title : "first video",
        rating : 4,
        comments : 250,
        createAt : "1 week ago",
        views : 784,
        id : 1,
    },
    {
        title : "second video",
        rating : 5,
        comments : 100,
        createAt : "2 years ago",
        views : 367,
        id : 2,
    },
    {
        title : "third video",
        rating : 5,
        comments : 300,
        createAt : "last year",
        views : 1034,
        id : 3,
    },

];


export const trendings = (req, res) => res.render("home", { pageTitle : "Home", mockUser, videos });
// templates engine에게 맡기려면 send가 아니라 render 함수를 사용한다. base.pug를 인자로 호출한다.

export const watch = (req, res) => {
    // const id = req.params.id;
    // const title = req.params.title;
    const { id } = req.params; // ES6 스타일
    console.log(`id ::: ${id}`)
    const video = videos[id - 1]
    res.render("watch", { pageTitle : "Watch", video : video });
    // res.send(`videos ${req.params.id} watch video!! {videoController}`);
}
// id의 형식을 제한할 필요가 있다. 아무 형식이나 들어가면 안되기 때문에 "(영문자+)숫자"로 형식을 제한하고자 한다. => 정규 표현식을 사용

export const getEdit = (req, res) => {
    const { id } = req.params; // ES6 스타일
    console.log(`id ::: ${id}`)
    const video = videos[id - 1]
    res.render("edit", { pageTitle : "Edit", video : video });
}

export const postEdit = (req, res) => {
    const { id } = req.params;
    console.log(`id ::: ${id}`)
    const { title } = req.body;
    console.log(req.body)
    const video = videos[id - 1]
    videos[id - 1].title = title;
    return res.redirect(`/videos/${id}`)
}

export const upload = (req, res) => res.send("upload video!! {videoController}");
