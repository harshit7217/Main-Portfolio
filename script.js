function see_more() {
    var see = document.querySelector(".see");
    see.innerText = "";
    var seeMore = document.querySelector(".seeMore");
    seeMore.innerText = "I am passionate about software development and constantly expanding my skills in Java, Javascript, and frontend technologies. With a strong foundation in algorithms, data structure and problem solving, I actively engage in Coding challenges and interactive programming projects.";
}


// Resume open in new tab

document.getElementById('btn2').addEventListener('click', function() {
    window.open('./Resume/Harshit_ChaudharyResume.pdf', '_blank');
});


//  Footer Svg open in new tab

document.getElementById('icon1').addEventListener('click', function() {
    window.open('https://www.linkedin.com/in/harshit-7217-chaudhary/', '_blank');
});

document.getElementById('icon2').addEventListener('click', function() {
    window.open('https://x.com/cha84587', '_blank');
});

document.getElementById('icon3').addEventListener('click', function() {
    window.open('https://www.instagram.com/har_shitchaudhary/', '_blank');
});

document.getElementById('icon4').addEventListener('click', function() {
    window.open('https://www.hackerrank.com/profile/harshitchaudha12 ', '_blank');
});

document.getElementById('icon5').addEventListener('click', function() {
    window.open('https://github.com/harshit7217', '_blank');
});

document.getElementById('icon6').addEventListener('click', function() {
    window.open('https://www.codechef.com/users/harshit_11ch7', '_blank');
});

document.getElementById('icon7').addEventListener('click', function() {
    window.open('https://leetcode.com/u/Mrstiff_chaudhary/', '_blank');
});


// Images in recent work
document.getElementById('image1').addEventListener('click', function() {
    window.open('https://raw.githack.com/harshit7217/rvitmanthan/refs/heads/main/course/index.html', '_blank');
});

document.getElementById('image2').addEventListener('click', function() {
    window.open('https://raw.githack.com/harshit7217/Library-Frontend/refs/heads/main/index.html', '_blank');
});

document.getElementById('image3').addEventListener('click', function() {
    window.open('https://raw.githack.com/harshit7217/Amazon-Clone/refs/heads/main/index.html', '_blank');
});