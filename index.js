
const getPeople = () => {
    fetch('https://reqres.in/api/users', {
        method: 'GET'
    }).then(res => res.json()).then(res => {
        let tbody = document.getElementById('tbody');
        let content = '';

        res.data.forEach((item, index) => {
            content += `<tr class="text-light">
                            <td>${index + 1}</td>
                            <td><img src="${item.avatar}" alt=""></td>
                            <td>${item.first_name}</td>
                            <td>${item.last_name}</td>
                            <td>${item.email}</td>
                        </tr>`;
        });

        tbody.innerHTML = content;

    }).catch(console.log);
}

getPeople();

const savePerson = () => {
    let person = {
        first_name: document.getElementById('c_name').value,
        last_name: document.getElementById('c_last').value,
        email: document.getElementById('c_email').value,
        avatar: document.getElementById('c_url').value
    }

    fetch('https://reqres.in/api/users', {
        method: 'POST',
        headers: {
            "Content-Type": "appliaction/json"
        },
        body: JSON.stringify(person)
    }).then(res => {

    }).catch(console.log);
}

const updatePerson = id => {
    let person = {
        first_name: document.getElementById('c_name').value,
        last_name: document.getElementById('c_last').value,
        email: document.getElementById('c_email').value,
        avatar: document.getElementById('c_url').value
    }

    fetch('https://reqres.in/api/users', {
        method: 'POST',
        headers: {
            "Content-Type": "appliaction/json"
        },
        body: JSON.stringify(person)
    }).then(res => {
        
    }).catch(console.log);
}