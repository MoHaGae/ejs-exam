const express = require("express");
const app = express();
const PORT = 8080;

const guestbookList = [
	{
		title: "방명록1",
		content: "내용1",
		author: "시루떡",
	},
	{
		title: "방명록2",
		content: "내용2",
		author: "혜빈~!",
	},
	{
		title: "방명록3",
		content: "내용3",
		author: "민준쿤",
	},
	{
		title: "방명록4",
		content: "내용4",
		author: "조강인",
	},
];

// 템플릿 엔진 설정
// 기본적으로 views 디렉토리안에 있는 .ejs파일을 템플릿으로 사용한다.
app.set("view engine", "ejs");

app.get("/", (_, res) => {
	// index.ejs을 렌더링
	res.render("index", { guestbookList });
});

app.listen(PORT, () => {
	console.log(`✅ Server Listen: http://localhost:${PORT}`);
});
