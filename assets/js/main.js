/* VueJS */
var header = new Vue({
    el: "#header",
    data: {
        logoHeaderImageTitle: "Kiều Vũ",
        logoHeaderImageSrc:
            "https://raw.githubusercontent.com/kieuvu/kmv/main/assets/images/avatar.png",
        navBarItems: ["Home", "Courses", "About", "Contact", "Documents"],
    },
});

var home = new Vue({
    el: "#home",
    data: {
        bgrImg: {
            backgroundImage:
                "url(https://www.bailiwick.com/images/headers/help-desk.webp",
        },
        headingLargerText: "Learning Front-End With",
        framework: "VueJS",
        headingSmallerText: "The Progressive JavaScript Framework",
    },
});

setInterval(() => {
    home.framework = "ReactJS";
}, 2000);
setInterval(() => {
    home.framework = "Jquery";
}, 4000);
setInterval(() => {
    home.framework = "AngularJS";
}, 6000);
setInterval(() => {
    home.framework = "HTML5";
}, 8000);
setInterval(() => {
    home.framework = "CSS3";
}, 10000);
setInterval(() => {
    home.framework = "VueJS";
}, 12000);

var service = new Vue({
    el: "#service",
    data: {
        cards: [
            {
                img: "https://vuejs.org/images/logo.png",
                framework: "VueJS",
                author: "Evan You",
                levelOfDifficult: "5/10",
                color: "#2980b9",
                describ:
                    "The 2nd place in our best JavaScript framework of 2020 rankings in the front-end category.",
            },
            {
                img: "https://cdn.auth0.com/blog/react-js/react.png",
                framework: "ReactJS",
                author: "Facebook",
                color: "#f1c40f",
                levelOfDifficult: "6/10",

                describ:
                    "React was chosen as the #1 front end JavaScript framework in State Of JS 2019 survey of JavaScript developers around the world for the 4th consecutive year.",
            },
            {
                img: "https://sdtimes.com/wp-content/uploads/2018/04/angular.png",
                framework: "AngularJS",
                author: "Google",
                levelOfDifficult: "8/10",
                color: "#c0392b",
                describ:
                    "The 3rd place in our list of best JavaScript framework of 2020 in the front-end category.",
            },
            {
                img: "https://cdn.iconscout.com/icon/free/png-256/html5-10-569380.png",
                framework: "HTML5",
                author: "Opera Software",
                levelOfDifficult: "4/10",
                color: "#2980b9",
                describ:
                    "HTML5 is a markup language used for structuring and presenting content on the World Wide Web.",
            },
            {
                img: "https://cdn.iconscout.com/icon/free/png-256/css-131-722685.png",
                framework: "CSS3",
                author: "World Wide Web Consortium",
                levelOfDifficult: "4/10",
                color: "#2980b9",
                describ:
                    "Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML.",
            },
            {
                img: "https://cdn.iconscout.com/icon/free/png-256/jquery-9-1175154.png",
                framework: "Jquery",
                author: "The jQuery Team",
                levelOfDifficult: "5/10",
                color: "#2980b9",
                describ:
                    "jQuery is a JavaScript library designed to simplify HTML DOM tree traversal and manipulation, as well as event handling, CSS animation, and Ajax.",
            },
        ],
    },
});
var about = new Vue({
    el: "#about",
    data: {

    },
})
var btt = new Vue({
    el: "#back_to_top",
    data: {
        bttTitle: "Scroll To Top Of Page",
    },
});
