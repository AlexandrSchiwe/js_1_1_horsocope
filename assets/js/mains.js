let input = document.getElementById("input");
let horImage = document.getElementById('horImage');
let headline = document.getElementById('headline');
let description = document.getElementById('description');
let background = document.getElementById('container');


// const janBody = "../img/aquarius_bg.webp";

// function showHoroscope() {
//         if (input.value = "January");
//         console.log("Aquarius");
//         classlist.add("aquarius");
        
// }

function showHoroscope() {

    switch (input.value) {
        case "January": 
        console.log("aquarius");
        horImage.setAttribute("src", 'https://www.horoscopedates.com/img/icon_aquarius.png');
        headline.innerHTML = "AQUARIUS";
        description.innerHTML = "Have you been feeling a bit bored with your life lately? Well, good news! Today offers you a great…";
        background.classList.add("background");
        document.body.classList.add("bodyBackground");
        break;

        case "February": 
        console.log("pisces");
        horImage.setAttribute("src", 'https://www.horoscopedates.com/img/icon_pisces.png');
        headline.innerHTML = "PISCES";
        description.innerHTML = "Communication is very important today—written, spoken, and even nonverbal body language will all…";
        background.classList.add("background");
        document.body.classList.add("bodyBackground");
        break;

        case "March": 
        console.log("aries");
        horImage.setAttribute("src", 'https://www.horoscopedates.com/img/icon_aries.png');
        headline.innerHTML = "ARIES";
        description.innerHTML = "Today your patience might be tested when one or more of your projects gets put on hold by someone…";
        background.classList.add("background");
        document.body.classList.add("bodyBackground");
        break;

        case "April": 
        horImage.setAttribute("src", 'https://www.horoscopedates.com/img/icon_taurus.png');
        headline.innerHTML = "TAURUS";
        description.innerHTML = "Your intense energy makes you a great candidate for a leadership position right now, so if you are…";
        background.classList.add("background");
        document.body.classList.add("bodyBackground");
        break;

        case "May": 
        horImage.setAttribute("src", 'https://www.horoscopedates.com/img/icon_gemini.png');
        headline.innerHTML = "GEMINI";
        description.innerHTML = "If you aren't sure if you are ready to commit to a party, a date, a new job, or anything else that…";
        background.classList.add("background");
        document.body.classList.add("bodyBackground");
        break;

        case "June": 
        horImage.setAttribute("src", 'https://www.horoscopedates.com/img/icon_cancer.png');
        headline.innerHTML = "CANCER";
        description.innerHTML = "Too many different elements in your life are overlapping with each other right now—and it's your…";
        background.classList.add("background");
        document.body.classList.add("bodyBackground");
        break;

        case "July": 
        horImage.setAttribute("src", 'https://www.horoscopedates.com/img/icon_leo.png');
        headline.innerHTML = "LEO";
        description.innerHTML = "The issues you'll be dealing with today are very complicated ones—you will have to navigate your…";
        background.classList.add("background");
        document.body.classList.add("bodyBackground");
        break;

        case "August": 
        horImage.setAttribute("src", 'https://www.horoscopedates.com/img/icon_virgo.png');
        headline.innerHTML = "VIRGO";
        description.innerHTML = "You'll get along best with people who appeal to your more analytical side, today. Surprisingly, all…";
        background.classList.add("background");
        document.body.classList.add("bodyBackground");
        break;

        case "September": 
        horImage.setAttribute("src", 'https://www.horoscopedates.com/img/icon_libra.png');
        headline.innerHTML = "LIBRA";
        description.innerHTML = "Pick a cultural event that's coming up and get some tickets for it today.";
        background.classList.add("background");
        document.body.classList.add("bodyBackground");
        break;

        case "October": 
        horImage.setAttribute("src", 'https://www.horoscopedates.com/img/icon_scorpio.png');
        headline.innerHTML = "SCORPIO";
        description.innerHTML = "Someone will challenge a belief that you've held for a very long time today—and they will say an…";
        background.classList.add("background");
        document.body.classList.add("bodyBackground");
        break;

        case "November": 
        horImage.setAttribute("src", 'https://www.horoscopedates.com/img/icon_sagittarius.png');
        headline.innerHTML = "SAGITTARIUS";
        description.innerHTML = "Someone in your life needs to step up and take on more responsibility—and you need to tell them to....";
        background.classList.add("background");
        document.body.classList.add("bodyBackground");
        break;

        case "December": 
        horImage.setAttribute("src", 'https://www.horoscopedates.com/img/icon_capricorn.png');
        headline.innerHTML = "CAPRICORN";
        description.innerHTML = "Breaking the rules is not always a bad thing—especially if the rules limit your creativity. ";
        background.classList.add("background");
        document.body.classList.add("bodyBackground");
        break;

        default:
        headline.innerHTML = "Please give a month";
        headline.style.color = "black";
    }
}