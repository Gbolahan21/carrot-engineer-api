const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 2025;

const carrotEngineer = {
    'cj': {
        'name': 'Chijioke Nna',
        'role': 'Senior Engineer/Team Lead',
    },
    'simon': {
        'name': 'Simon Kuforiji',
        'role': 'Backend Engineer',
    },
    'azeez': {
        'name': 'Azeez Akinkunmi',
        'role': 'Backend Engineer',
    },
    'moh': {
        'name': 'Sodiq Mohammed',
        'role': 'Frontend Engineer'
    },
    'toba': {
        'name': 'Oloruntoba Eweniyi',
        'role': 'Junior Developer'
    },
    'winifred': {
        'name': 'Winifred Ebe-Iduze',
        'role': 'IT Engineer'
    },
    'unknown': {
        'name': 'unknown',
        'role': 'unknown'
    }
}

app.use(cors());
app.use(express.static(path.join(__dirname, '../client')));

app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, '../client/index.html'))
})

app.get('/api/:name', (request, response) => {
    const carrotEngineerName = request.params.name.toLowerCase();
    if (carrotEngineer[carrotEngineerName]) {
        response.json(carrotEngineer[carrotEngineerName])
    } else {
        response.json(carrotEngineer['unknown'])
    }
})

app.listen(PORT, () => {
    console.log(`the backend is running on port ${PORT}`)
    setTimeout(() => {
        console.log('Happy coding')
    }, 1000)
})