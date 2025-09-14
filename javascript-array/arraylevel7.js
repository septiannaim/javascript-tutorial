

const dataPerson = [
    {
        name: 'John',
        age: 30,
        stack: 'Fullstack Developer ',
    },
    {
        name: 'Doe',
        age: 25,
        stack: 'Frontend Developer',        
    },
    {
        name: 'Smith',
        age: 28,
        stack: 'Backend Developer',     
    },
]
dataPerson
.sort((a,b) => a.age - b.age)
.filter(person => person.age > 26)
.map((values) => console.log(values))