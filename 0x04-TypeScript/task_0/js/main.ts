interface students {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1 = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    location: 'San Francisco'
}

const student2 = {
    firstName: 'James',
    lastName: 'leBron',
    age: 39,
    location: 'Los Angeles'
}

const student: students[] = [student1, student2];

const table = document.createElement('table');
const tbody = document.createElement('tbody');

table.appendChild(tbody);

student.forEach((student) => {
    const row = document.createElement('tr');
    const name = document.createElement('td');
    const locations = document.createElement('td');

    name.textContent = student.firstName;
    locations.textContent = student.location;

    row.appendChild(name);
    row.appendChild(locations);
    tbody.appendChild(row);
})

document.body.appendChild(table);