var student1 = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    location: 'San Francisco'
};
var student2 = {
    firstName: 'James',
    lastName: 'leBron',
    age: 39,
    location: 'Los Angeles'
};
var student = [student1, student2];
var table = document.createElement('table');
var tbody = document.createElement('tbody');
table.appendChild(tbody);
student.forEach(function (student) {
    var row = document.createElement('tr');
    var name = document.createElement('td');
    var locations = document.createElement('td');
    name.textContent = student.firstName;
    locations.textContent = student.location;
    row.appendChild(name);
    row.appendChild(locations);
    tbody.appendChild(row);
});
document.body.appendChild(table);
