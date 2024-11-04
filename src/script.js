var button = document.querySelector('.button1');
var skillsSection = document.querySelector('.Skills');
skillsSection.style.display = 'none';
skillsSection.style.transition = '1s ease-in-out';
button.innerHTML = 'Show Skills';
var toggleSkillsDisplay = function () {
    if (skillsSection.style.display === 'none') {
        skillsSection.style.display = 'block';
        button.innerHTML = 'Hide Skills';
        button.blur();
    }
    else {
        skillsSection.style.display = 'none';
        button.innerHTML = 'Show Skills';
    }
};
button.addEventListener('click', toggleSkillsDisplay);
