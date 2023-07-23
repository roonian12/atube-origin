
const mockUser = {
    username : "bnb",
    loggedIn : true
}

export const trendings = (req, res) => res.render("home", { pageTitle : "Home", mockUser});
// templates engine에게 맡기려면 send가 아니라 render 함수를 사용한다. base.pug를 인자로 호출한다.
export const search = (req, res) => res.send("search video!! {videoController}");

export const upload = (req, res) => res.send("upload video!! {videoController}");
export const see = (req, res) => {
    res.send(`videos ${req.params.id} watch video!! {videoController}`);
}
// id의 형식을 제한할 필요가 있다. 아무 형식이나 들어가면 안되기 때문에 "(영문자+)숫자"로 형식을 제한하고자 한다. => 정규 표현식을 사용
export const edit = (req, res) => {res.send(` videos ${req.params.id} edit!! {videoController}`);}
export const remove = (req, res) => {res.send(` videos ${req.params.id} remove!! {videoController}`);}