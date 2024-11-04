var button = document.querySelector('.button1');
var skillsSection = document.querySelector('.Skills');
skillsSection.style.display = 'none';
skillsSection.style.transition = '1s ease-in-out';
var toggleSkillsDisplay = function () {
    skillsSection.style.display = skillsSection.style.display === 'none' ? 'flex' : 'none';
    button.blur();
};
button.addEventListener('click', toggleSkillsDisplay);
