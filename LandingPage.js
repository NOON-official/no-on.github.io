function menuToggle() {
    const toggleMenu = document.querySelector('.toggleMenu');
    const navigation = document.querySelector('.nav');
    toggleMenu.classList.toggle('active');
    navigation.classList.toggle('active');
}