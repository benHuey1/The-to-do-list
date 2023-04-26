export {
    array,
    main,
    button_add_card,
    div,
    article,
    article_pinned_card,
    article_card,
    aside,
    arrayIcon,
};
let array = [];
const main = document.querySelector("main");
const button_add_card = document.getElementById("button_add_card");
const div = document.querySelector("div");
const article = document.querySelector("article");
const article_pinned_card = document.getElementById("article_pinned_card");
const article_card = document.getElementById("article_card");
const aside = document.querySelector("aside");
const arrayIcon = [
    {
        name: "study",
        picture:
            "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn.onlinewebfonts.com%2Fsvg%2Fimg_160721.png&f=1&nofb=1&ipt=523cf7ce26568f3b080a0fa1bb001df1d83c0a8f5beb48cdeef11a668487357f&ipo=images",
    },
    {
        name: "work",
        picture:
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.kP5TxSLxT39PqdOAq1U2TwHaHa%26pid%3DApi&f=1&ipt=47a600b8d7b1e64081a81af43fd14f596edbf3f2bdc44da2988abb1deb56a3c1&ipo=images",
    },
    {
        name: "leisure",
        picture:
            "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn.onlinewebfonts.com%2Fsvg%2Fimg_558513.png&f=1&nofb=1&ipt=466ca0100bd61b0b1340adeba96c510e47a89b832a40052be86672e3ad76c682&ipo=images",
    },
];
