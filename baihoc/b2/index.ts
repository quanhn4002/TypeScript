// ! Khai báo kiểu dữ liệu trong typescript với keyword "type"

const message: string = "Hom nay troi dep qua, di choi ko em?";
const myAge: number = 28;
const isMarried: boolean = false;
const mySkills: string[] = [
  "HTML-CSS",
  "Javascript",
  "PHP",
  "MySQL",
  "MongoDB",
]; // array type
const mySkills2: Array<string> = ["HTML-CSS", "JS", "PHP"]; // generic type

type educationType = {
  university: string;
  major: string;
  GPA: number;
};

type porfolioType = {
  fullName: string;
  address: string;
  age: number;
  job: string;
  birthDay: string;
  bio: string;
  skills: string[];
  education: educationType;
};

const myPortfolio: porfolioType = {
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