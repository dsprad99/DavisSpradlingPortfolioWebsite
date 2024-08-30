const hambruger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hambruger.addEventListener("click",() => {
    hambruger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click",() =>{
    hambruger.classList.remove("active");
    navMenu.classList.remove("active");
}))


document.getElementById('showButtonNonProfitSeeker').addEventListener('click', function() {
    var learnMoreContainer = document.getElementById('learnMoreContainer');
    var learnMoreCardNonProfitSeeker = document.getElementById('learnMoreCardNonProfitSeeker');

    if (learnMoreContainer.style.display === 'none') {
        learnMoreContainer.style.display = 'flex'; 
        learnMoreCardNonProfitSeeker.style.display = 'flex';
    } else {
        learnMoreContainer.style.display = 'none'; 
    }
    
});

document.getElementById('showButtonNeuseRiver').addEventListener('click', function() {
    var learnMoreContainer = document.getElementById('learnMoreContainer');
    var learnMoreCardNonProfitSeeker = document.getElementById('learnMoreNeuseRiver');

    if (learnMoreContainer.style.display === 'none') {
        learnMoreContainer.style.display = 'flex'; 
        learnMoreCardNonProfitSeeker.style.display = 'flex';
    } else {
        learnMoreContainer.style.display = 'none'; 
    }
    
});

document.getElementById('showButtonTheAdvisor').addEventListener('click', function() {
    var learnMoreContainer = document.getElementById('learnMoreContainer');
    var learnMoreCardNonProfitSeeker = document.getElementById('learnMoreTheAdvisor');

    if (learnMoreContainer.style.display === 'none') {
        learnMoreContainer.style.display = 'flex'; 
        learnMoreCardNonProfitSeeker.style.display = 'flex';
    } else {
        learnMoreContainer.style.display = 'none'; 
    }
    
});

document.getElementById('showButtonNFLCareer').addEventListener('click', function() {
    var learnMoreContainer = document.getElementById('learnMoreContainer');
    var learnMoreCardNonProfitSeeker = document.getElementById('learnMoreNFLCareer');

    if (learnMoreContainer.style.display === 'none') {
        learnMoreContainer.style.display = 'flex'; 
        learnMoreCardNonProfitSeeker.style.display = 'flex';
    } else {
        learnMoreContainer.style.display = 'none'; 
    }
    
});

document.getElementById('exitButtonNonProfit').addEventListener('click', function() {
    var learnMoreContainer = document.getElementById('learnMoreContainer');
    var learnMoreCardNonProfitSeeker = document.getElementById('learnMoreCardNonProfitSeeker');

    if (learnMoreContainer.style.display === 'flex') {
        learnMoreContainer.style.display = 'none'; 
        learnMoreCardNonProfitSeeker.style.display = 'none'; 
    } 
});

document.getElementById('exitButtonNeuseRiver').addEventListener('click', function() {
    var learnMoreContainer = document.getElementById('learnMoreContainer');
    var learnMoreCardNonProfitSeeker = document.getElementById('learnMoreNeuseRiver');

    if (learnMoreContainer.style.display === 'flex') {
        learnMoreContainer.style.display = 'none'; 
        learnMoreCardNonProfitSeeker.style.display = 'none'; 
    } 
});

document.getElementById('exitButtonTheAdvisor').addEventListener('click', function() {
    var learnMoreContainer = document.getElementById('learnMoreContainer');
    var learnMoreCardNonProfitSeeker = document.getElementById('learnMoreTheAdvisor');

    if (learnMoreContainer.style.display === 'flex') {
        learnMoreContainer.style.display = 'none'; 
        learnMoreCardNonProfitSeeker.style.display = 'none'; 
    } 
});

document.getElementById('exitButtonNFL').addEventListener('click', function() {
    var learnMoreContainer = document.getElementById('learnMoreContainer');
    var learnMoreCardNonProfitSeeker = document.getElementById('learnMoreNFLCareer');

    if (learnMoreContainer.style.display === 'flex') {
        learnMoreContainer.style.display = 'none'; 
        learnMoreCardNonProfitSeeker.style.display = 'none'; 
    } 
});


