export const join = (req, res) => res.send('join!!! {userController}');
export const login = (req, res) => res.send('login!!! {userController}');

export const edit = (req, res) => res.send('edit!!! {userController}');
export const remove = (req, res) => res.send('remove!!! {userController}');

// 파일 전체가 아니라 userController의 개별 함수, 코드별로 export를 하는 방법
