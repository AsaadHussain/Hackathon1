
const button = document.querySelector('.button1') as HTMLButtonElement;
const skillsSection = document.querySelector('.Skills') as HTMLDivElement;

skillsSection.style.display = 'none';
skillsSection.style.transition = '1s ease-in-out';

const toggleSkillsDisplay = () => {
    skillsSection.style.display = skillsSection.style.display === 'none' ? 'flex' : 'none';
    button.blur();
};

button.addEventListener('click', toggleSkillsDisplay);
