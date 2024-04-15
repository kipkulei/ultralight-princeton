const currentHour = new Date().getHours();

const iconElement = document.getElementById("sun-moon-icon");

if (currentHour >= 6 && currentHour < 18) {
    // It's daytime, so add the sun icon
    iconElement.innerHTML = '<img src="local_site_images/sun.jpg" alt="Sun Icon">';
} else {
    // It's nighttime, so add the moon icon
    iconElement.innerHTML = '<img src="local_site_images/moon.jpg" alt="Moon Icon">';
}
