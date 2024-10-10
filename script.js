// script.js
document.getElementById('generateWishButton').addEventListener('click', function() {
    const friendName = document.getElementById('friendNameInput').value;
    const friendColor = document.getElementById('friendColorInput').value;

    if (friendName && friendColor) {
        const wish = `🌼 Happy Durga Puja, dear ${friendName}! May this festive season bring you joy, happiness, and the vibrant colors of ${friendColor} to brighten your days! 🌸`;
        
        document.getElementById('wishText').innerText = wish;
        document.getElementById('wishText').style.color = friendColor; // Change text color based on user input
        
        // Set the image source (you can choose a default image or based on user input)
        const defaultImage = './images/durga-idol.png'; // Change this to your image path
        document.getElementById('wishImage').src = defaultImage;
        document.getElementById('wishImage').style.display = 'block'; // Show the image

        // Show share section
        document.querySelector('.share-section').style.display = 'block';

        // Set up sharing URLs
        const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(wish)}`;
        const twitterShareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(wish)}`;
        const whatsappShareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(wish)}`;

        // Add event listeners for sharing buttons
        document.getElementById('shareFacebook').onclick = function() {
            window.open(facebookShareUrl, '_blank');
        };
        document.getElementById('shareTwitter').onclick = function() {
            window.open(twitterShareUrl, '_blank');
        };
        document.getElementById('shareWhatsApp').onclick = function() {
            window.open(whatsappShareUrl, '_blank');
        };

    } else {
        alert('Please enter both your friend\'s name and their favorite color.');
    }
});
