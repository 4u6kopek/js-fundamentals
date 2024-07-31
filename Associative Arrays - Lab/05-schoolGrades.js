function manageStudents(input) {
    const students = new Map();

    input.forEach(entry => {
        let [name, ...grades] = entry.split(' ');
        grades = grades.map(Number);

        if (students.has(name)) {
            students.get(name).push(...grades);
        } else {
            students.set(name, grades);
        }
    });

    const sortedStudents = Array.from(students.keys()).sort();

    sortedStudents.forEach(name => {
        const grades = students.get(name);
        const average = grades.reduce((a, b) => a + b, 0) / grades.length;
        console.log(`${name}: ${average.toFixed(2)}`);
    });
}

let input = [
    'Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6'
];

manageStudents(input);
