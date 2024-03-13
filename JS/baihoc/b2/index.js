"use strict";
// ! Khai báo kiểu dữ liệu trong typescript với keyword "type"
const message = "Hom nay troi dep qua, di choi ko em?";
const myAge = 28;
const isMarried = false;
const mySkills = [
    "HTML-CSS",
    "Javascript",
    "PHP",
    "MySQL",
    "MongoDB",
]; // array type
const mySkills2 = ["HTML-CSS", "JS", "PHP"]; // generic type
const myPortfolio = {
    fullName: "Hoang",
    address: "Hanoi, Vietnam",
    age: 28,
    job: "Software Engineer",
    birthDay: "1992-11-27",
    bio: "Yêu màu hồng, sống mộng mơ, thích làm thơ...",
    skills: ["HTML-CSS", "Javascript", "PHP", "MySQL", "MongoDB"],
    education: {
        university: "FPT Polytectnic Hanoi",
        major: "Information Technology",
        GPA: 3.0,
    },
};
console.log(myPortfolio);
