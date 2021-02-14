
let testimonials = [

    {
        picture: "http://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        name: "Melih Arslan",
        star: 4,
        comment: "I enjoy going there man is always happy friendly. Tells you about specials always says thank you."
    },
    {
        picture: "https://data.whicdn.com/images/322027365/original.jpg?t=1541703413",
        name: 'Sara Delac',
        star: 5,
        comment: 'A good location and has washrooms for women and men. Has tables to sit at and a T.V. to watch while your there. Near a convenience store and a fresco to go shopping. So you can go here to eat after you shop! LOL'
    },
    {
        picture: "https://i.pinimg.com/564x/04/bb/21/04bb2164bbfa3684118a442c17d086bf.jpg",
        name: "Natale Yakoob",
        star: 1,
        comment: "Terrible customer service and quality of food."
    },
    {
        picture: "https://www.dailymoss.com/wp-content/uploads/2019/08/funny-profile-pic59.jpg",
        name: "Rick Woods",
        star: 5,
        comment: "Chapolte sauce base...philly steak.pinapple.onion..xtra cheese...mmmm"
    }
]

createStar = (rateNumber) => {
    let checkStar = "<span class='fa fa-star checked'>";
    let unCheckStar = "<span class='fa fa-star unchecked'>";
    if(rateNumber == 1) {
        return `${checkStar}${unCheckStar}${unCheckStar}${unCheckStar}${unCheckStar}`;
    }
    if(rateNumber == 2){
        return `${checkStar}${checkStar}${unCheckStar}${unCheckStar}${unCheckStar}`;
    }
    if(rateNumber == 3){
        return `${checkStar}${checkStar}${checkStar}${unCheckStar}${unCheckStar}`;
    }
    if(rateNumber == 4){
        return `${checkStar}${checkStar}${checkStar}${checkStar}${unCheckStar}`;
    }
    else{
        return `${checkStar}${checkStar}${checkStar}${checkStar}${checkStar}`;
    }
    
    }

    let start = 0;
    document.getElementById("picture").src = `${testimonials[start]['picture']}`;
    document.getElementById("rating").innerHTML = `${createStar(testimonials[(start)]['star'])}`; 
   // document.getElementById("rating").innerHTML = `${testimonials[start]['star']}`;
    document.getElementById("name").innerHTML = `${testimonials[start]['name']}`;
    document.getElementById("testimonials").innerHTML = `&#8220;${testimonials[start]['comment']}&#8221;`;

rightArrow = () => {

    if(start < testimonials.length-1){

    start +=1;
    document.getElementById("picture").src = `${testimonials[start]['picture']}`;
    document.getElementById("rating").innerHTML = `${createStar(testimonials[(start)]['star'])}`; 
    document.getElementById("name").innerHTML = `${testimonials[(start)]['name']}`;
    document.getElementById("testimonials").innerHTML = `&#8220;${testimonials[(start)]['comment']}&#8221;`;

    }
    
}

leftArrow = () => {
    
    if(start > 0){
    
    start -=1;
    document.getElementById("picture").src = `${testimonials[start]['picture']}`;
    document.getElementById("rating").innerHTML = `${createStar(testimonials[(start)]['star'])}`; 
    document.getElementById("name").innerHTML = `${testimonials[start]['name']}`;
    document.getElementById("testimonials").innerHTML = `&#8220;${testimonials[start]['comment']}&#8221;`;

    }
}




