document.querySelectorAll('.nav-button').forEach(function(button) {
    button.addEventListener('click', function() {
        document.body.classList.add('fade-out');
        let buttonText = this.textContent.toLowerCase();
        console.log(buttonText)
        // Saves the text of the clicked button
        setTimeout(function(){
            window.location.href = '/' + buttonText
        }, 500)
    });
});


window.onload = function() {
    document.body.style.opacity = '1';
}


function fadeOutAndRedirectToHome() {
    document.body.classList.add('fade-out');
    setTimeout(function(){ 
        window.location.href = '/home';
    }, 500)
}


function fadeOutAndRedirectToAbout() {
    document.body.classList.add('fade-out');
    setTimeout(function() {
        window.location.href = '/about'
    }, 500)
}