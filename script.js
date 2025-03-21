const works = {
    "task1": { "title": "expectation Doc. ", "url": "works/task1/task1.html" },
    "task2": { "title": "basic html styling", "url": "works/task2/task2.html" },
    "task3": { "title": "css hover", "url": "works/task3/bharath.html" },
    "task4": { "title": "welcome to js", "url": "works/task4/task4.html" },
    "task5": { "title": "calculator with js", "url": "works/task5/task5-1.html" },
    "task6": { "title": "github integration", "url": "works/task6/task6.html" },
    "task7": { "title": "console output", "url": "works/task7/task7.html" },
    "task8": { "title": "string operation", "url": "works/task8/b.html" },
    "task9": { "title": "condition", "url": "works/task9/Grade Calculator.html" },
    "task10": { "title": "call-stack with array", "url": "works/task10/Call_stack.html" },
    "task11": { "title": "star with loop", "url": "works/task11/task 11.html" },
    "task12": { "title": "class work", "url": "works/task12/stars.html" },
    "task13": { "title": "class work-obj", "url": "works/task13/1 (1).html" },
    "task14": { "title": "class work-obj2", "url": "works/task14/bharath-3 (1).html" },
    "task15": { "title": "class work-fun.", "url": "works/task15/task14.html" },
    "task16": { "title": "class&Bootstrap", "url": "works/task16/c.html" },
    "task17": { "title": "json", "url": "works/task17/task17.html" }
};

const navDiv = document.getElementById("nav_div");
const contentFrame = document.getElementById("content_frame");

Object.keys(works).forEach(key => {
    const link = document.createElement("a");
    link.textContent = works[key].title;
    link.href = "#";
    link.addEventListener("click", (e) => {
        e.preventDefault();
        contentFrame.src = works[key].url;
    });
    navDiv.appendChild(link);
});