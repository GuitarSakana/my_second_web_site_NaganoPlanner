const quotes = [
    {
        quotes : "Love asks me no questions, and gives me endless support."
        ,author : "William Shakespeare"
    },
    {
        quotes : "If you would be loved, love and be lovable."
        ,author : "Benjamin Franklin"
    },
    {
        quotes : "The supreme happiness in life is the conviction that we are loved."
        ,author : "Victor Hugo"
    },
    {
        quotes : "Tis better to have loved and lost, than never to have loved at all."
        ,author : "Alfred"
    },
    {
        quotes : "We come to love not by finding a perfect person, but by learning to see an imperfect person perfectly."
        ,author : "Anonymous"
    },
    {  
        quotes : "To love or have loved, that is enough. Ask nothing further. There is no other pearl to be found in the dark folds of life."
        ,author : "Victor Hugo"
    },
    {
        quotes : "You have bewitched me body and soul, and I love, I love, I love you."
        ,author : "Mr. Darcy"
    },
    {
        quotes : "Do I love you? My god, if your love were a grain of sand, mine would be a universe of beaches."
        ,author : "William Goldman"
    }
];

const quote = document.querySelector('#quotes span:first-child');
const author = document.querySelector('#quotes span:last-child');
const randchoice = (Math.floor(Math.random()*quotes.length));
const getquote = quotes[randchoice].quotes;
const getauthor = quotes[randchoice].author;

quote.innerText = getquote;
author.innerText = getauthor;

