import { calculateTotalDuration } from "./calculation.js";

export const initLessons = () =>{
    const container = document.querySelector('#lessons');
    lessons.forEach(lessons => {
        container.innerHTML += `
            <div class="lesson">
                <input ${lessons.isCompleted ? 'checked' : ''} type="checkbox">
                <span>${lessons.name}- ${lessons.duration} minutes</span>
            </div>   
        `
    });

    const saveButton = document.getElementById('save-button');
    saveButton.addEventListener('click', () => {
        document.querySelectorAll('input').forEach((input, index)=>{

        })
        lessons.forEach(lesson => console.log(lesson));
    });

    const totalDuratinElement = document.querySelector('#total-duration');
    totalDuratinElement.textContent = `${calculateTotalDuration(lessons.map(lesson => lesson.duration))} minutes`;
}
const lesson1 = {
    name: 'Modern JavaScript',
    duration: 75,
    isComplete: false
}
const lesson2 = {
    name: 'Modern JavaScript practice',
    duration: 90,
    isCompleted: false
}

const lesson3 = {
    name: 'HTTP and asynchronous behaviour (with Promise)',
    duration: 88,
    isCompleted: false
}

const lesson4 = {
    name: 'HTTP and asynchronous behaviour practice',
    duration: 93,
    isCompleted: false
}

const lesson5 = {
    name: 'Advanced CSS (FlexBox)',
    duration: 80,
    isCompleted: false
}

const lesson6 = {
    name: 'WebComponents',
    duration: 76,
    isCompleted: false
}
let lessonBaseName = 'Weather application';
lessonBaseName = 'Weather Application';

const lesson7 = {
    name: `${lessonBaseName} 1.`,
    duration: 70,
    isCompleted: false
}

const lesson8 = {
    name: `${lessonBaseName} 2.`,
    duration: 84,
    isCompleted: true
}

const lessons = [
    lesson1,
    lesson2,
    lesson3,
    lesson4,
    lesson5,
    lesson6,
    lesson7,
    lesson8
]

console.log(lessons);