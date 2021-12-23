//function for calculating your chinese zodiac sign  
function getChineseZodiac(){
    //asking the user fot their year and tranforming it into a integer 
    var year = prompt("What year were you born in?");
    var yearInput = parseInt (year);
    //formula for calculating your chinese zodiac sign
    const resCalc = (yearInput - 4) % 12;
    //find HTML element by ID and assign it to the variable 
    let chineseZodiac;
    var zodiacResult = document.getElementById("zodiac");
    var image = document.getElementById("chinese-zodiac-image"); 
    let zodiacDesc;
    var descResult = document.getElementById("desc");
    // if user presses cancel or the input is invalid
    if (year === null || (isNaN(yearInput))){
        alert("Invalid input")
        return false
    } 
    //switch function for displaying result
    switch (resCalc){
        case 0:
        chineseZodiac = "Rat"
        image.src = "https://thewoksoflife.com/wp-content/uploads/2020/01/TWOL_chinese-zodiac-03.png"
        zodiacDesc = "Rats are quick-witted, resourceful, and smart but lack courage. With rich imaginations and sharp observations, they can take advantage of various opportunities well."
        break;
        case 1:
        chineseZodiac = "Ox"
        image.src = "https://thewoksoflife.com/wp-content/uploads/2020/01/TWOL_chinese-zodiac-04.png"
        zodiacDesc = "People born in the Year of the Ox are strong, reliable, fair and conscientious, inspiring confidence in others. They are also calm, patient, methodical and can be trusted. Although they say little they can be very opinionated."
        break;
        case 2:
        chineseZodiac = "Tiger"
        image.src = "https://thewoksoflife.com/wp-content/uploads/2020/01/TWOL_chinese-zodiac-05.png"
        zodiacDesc = "People born in a year of the Tiger are brave, competitive, unpredictable, and confident. They are very charming and well-liked by others. But sometimes they are likely to be impetuous, irritable, and overindulgent."
        break;
        case 3:
        chineseZodiac = "Rabbit"
        image.src = "https://thewoksoflife.com/wp-content/uploads/2020/01/TWOL_chinese-zodiac-06.png"
        zodiacDesc = "The rabbit is the fourth animal in the Chinese zodiac. In the Chinese culture, the rabbit is known to be the luckiest out of all the twelve animals. It symbolizes mercy, elegance, and beauty. People who are born in the year of the rabbit are calm and peaceful."
        break;
        case 4:
        chineseZodiac = "Dragon"
        image.src = "https://thewoksoflife.com/wp-content/uploads/2020/01/TWOL_chinese-zodiac-07.png"
        zodiacDesc = "People born in the Year of the Dragon are energetic, healthy and have the gift of good fortune and good luck. They have a magnetic personality and it is hard to miss their presence in a crowd. They love competition and have a strong will to win. ... Dragon people are also perfectionists, setting very high standards."
        break;
        case 5:
        chineseZodiac = "Snake"
        image.src = "https://thewoksoflife.com/wp-content/uploads/2020/01/TWOL_chinese-zodiac-08.png"
        zodiacDesc = "People born in the Year of the Snake are intelligent, wise and charming. They are usually good-looking and alluring. They are also deep thinkers, like to plan well and are determined in whatever they do. Snake people are quiet, reserved and are good at giving advice to others."
        break;
        case 6:
        chineseZodiac = "Horse"
        image.src = "https://thewoksoflife.com/wp-content/uploads/2020/01/TWOL_chinese-zodiac-09.png"
        zodiacDesc = "People born in the Year of the Horse are popular, energetic and confident. They are independent, eager to try new things and are bored by routine, which is why they want to travel and enjoy different cultures. They enjoy entertainment and parties and are naturally good public speakers, although they can talk too much."
        break;
        case 7:
        chineseZodiac = "Goat"
        image.src = "https://thewoksoflife.com/wp-content/uploads/2020/01/TWOL_chinese-zodiac-10.png"
        zodiacDesc = "People born in a year of the Goat are generally believed to be gentle, mild-mannered, shy, stable, sympathetic, amicable, and brimming with a strong sense of kindheartedness and justice. They have very delicate thoughts, strong creativity, and perseverance, and acquire professional skills well."
        break;
        case 8: 
        chineseZodiac = "Monkey"
        image.src = "https://thewoksoflife.com/wp-content/uploads/2020/01/TWOL_chinese-zodiac-11.png"
        zodiacDesc = "People born in the Year of the Monkey are intelligent, witty and strong-willed. They are remarkably inventive, creative and able to solve most problems. Their curiosity means they have a great thirst for knowledge."
        break;
        case 9: 
        chineseZodiac = "Rooster"
        image.src = "https://thewoksoflife.com/wp-content/uploads/2020/01/TWOL_chinese-zodiac-12.png"
        zodiacDesc = "Loyal and trustworthy, people born in the Year of the Rooster are sociable, very accomplished and usually very well-dressed. Shrewd and daring, they are outspoken and even boastful by nature."
        break;
        case 10: 
        chineseZodiac = "Dog"
        image.src = "https://thewoksoflife.com/wp-content/uploads/2020/01/TWOL_chinese-zodiac-13.png"
        zodiacDesc = "People born in the Year of the Dog are highly responsible and compassionate. Dog people are reliable, loyal, faithful and honest with a keen sense of right and wrong and a desire to support the underdog. They can be very pessimistic, looking for all the bad things that might happen."
        break;
        case 11:
        chineseZodiac = "Pig"
        image.src = "https://thewoksoflife.com/wp-content/uploads/2020/01/TWOL_chinese-zodiac-14.png"
        zodiacDesc = "Pigs are diligent, compassionate, and generous. They have great concentration: once they set a goal, they will devote all their energy to achieving it. Though Pigs rarely seek help from others, they will not refuse to give others a hand. Pigs never suspect trickery, so they are easily fooled."
        
    }
        //display the assigned variable into the HTML element 
        zodiacResult.innerText = (`Your chinese zodiac is ${chineseZodiac}`);
        descResult.innerText= (`${zodiacDesc}`)
    
    }