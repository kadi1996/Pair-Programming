const express = require('express');
const PORT = 5555;
const app = express();
const { data } = require('./data');
const { sortArrays } = require('./all');
const { checkAdult } = require('./checkAdult');

// console.log(data[0].id);

app.get('/', (_, res) => {
    res.send('Pair Programming - Super Projekt');
})

app.get('/user/all', (_, res) => {
    res.json(data);
})

app.get('/user/:id', (req, res) => {
    const id = Number(req.params.id);
    const foundUser = data.find(user => user.id === id);
    res.json(foundUser);
})

// Post wird beim Formular eingesetzt
// es wird etwas aus dem body gepostet
// get ruft nur etwas ab
// array filter js anschauen

app.get('/user/underage', (req, res) => {
    const id = req.params.id;
    const underageUser = data.find(user => user.age <= 18)

    res.json();
})

app.get('/user/adult', (req, res) => {
    const id = req.params.id;
    res.json(data > 18);
})

app.listen(PORT, () => console.log('Server is listening on Port', PORT));



// API 4 endpunkte, array bekommt ihr von uns

// /users/all
// /users/:id
// /users/underage
// /users/adult 
// [{ name: "Emre", alter: 33 }] 
// [{
//     name: "",
//     alter: ""
// }]
// 6-7 User

// * Express server 
// * localhost:9000/users/all --> Alle user
// * localhost:9000/users/1 --> User mit index 1
// * localhost:9000/users/underage --> Minderjährige user
// * localhost:9000/users/adult --> Volljährige user

// am Ende, wenn der Server läuft soll man in den Browser eingeben können http /users/all für alle User

// /users/underage sollen Minderjährige benutzen

//Grundlagen von Express

//* Bonus: Namensuche als eigene route

//localhost:9000/users/e ---> Array mit allen user die ein "e" oder "E" im Name haben