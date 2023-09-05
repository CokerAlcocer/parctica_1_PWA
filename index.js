
const getPeople = async () => {
    await fetch('https://reqres.in/api/users', {
        method: 'GET'
    }).then(res => res.json()).then(res => {
        let tbody = document.getElementById('tbody');
        let content = '';

        res.data.forEach((item, index) => {
            content += `<tr class="">
                            <td>${index + 1}</td>
                            <td><img src="${item.avatar}" alt=""></td>
                            <td>${item.first_name}</td>
                            <td>${item.last_name}</td>
                            <td>${item.email}</td>
                            <td class="text-center">
                                <button class="btn btn-primary" onclick="getPerson(${item.id})" data-bs-toggle="modal" data-bs-target="#update">Editar</button>
                                <button class="btn btn-danger" onclick="destroyPerson(${item.id})">Eliminar</button>
                            </td>
                        </tr>`;
        });

        tbody.innerHTML = content;

    }).catch(console.log);
}

getPeople();

const savePerson = async () => {
    let person = {
        first_name: document.getElementById('c_name').value,
        last_name: document.getElementById('c_last').value,
        email: document.getElementById('c_email').value,
        avatar: document.getElementById('c_url').value
    }

    await fetch('https://reqres.in/api/users', {
        method: 'POST',
        headers: {
            "Content-Type": "appliaction/json"
        },
        body: JSON.stringify(person)
    }).then(() => {
        getRegisterResponse();
    }).catch(() => {
        getErrorResponse();
    });
}

const getPerson = async id => {
    await fetch('https://reqres.in/api/users/'+id, {
        method: 'GET',
        headers: {
            "Content-Type": "appliaction/json"
        }
    }).then(res => res.json()).then(res => {
        document.getElementById('u_name').value = res.data.first_name;
        document.getElementById('u_last').value = res.data.last_name;
        document.getElementById('u_email').value = res.data.email;
        document.getElementById('u_url').value = res.data.avatar;
    }).catch(console.log);
}

const updatePerson = async id => {
    let person = {
        first_name: document.getElementById('u_name').value,
        last_name: document.getElementById('u_last').value,
        email: document.getElementById('u_email').value,
        avatar: document.getElementById('u_url').value
    }

    await fetch('https://reqres.in/api/users/'+id, {
        method: 'PUT',
        headers: {
            "Content-Type": "appliaction/json"
        },
        body: JSON.stringify(person)
    }).then(() => {
        getUpdateResponse();
    }).catch(() => {
        getErrorResponse();
    });
}

const destroyPerson = async id => {
    await fetch('https://reqres.in/api/users/'+id, {
        method: 'DELETE',
        headers: {
            "Content-Type": "appliaction/json"
        }
    }).then(() => {
        getDeleteResponse();
    }).catch(() => {
        getErrorResponse();
    });
}

const getRegisterResponse = () => {
    document.getElementById('a_create').classList.remove('hidden');
    document.getElementById('a_update').classList.add('hidden');
    document.getElementById('a_delete').classList.add('hidden');
    document.getElementById('a_error').classList.add('hidden');
}

const getUpdateResponse = () => {
    document.getElementById('a_create').classList.add('hidden');
    document.getElementById('a_update').classList.remove('hidden');
    document.getElementById('a_delete').classList.add('hidden');
    document.getElementById('a_error').classList.add('hidden');
}

const getDeleteResponse = () => {
    document.getElementById('a_create').classList.add('hidden');
    document.getElementById('a_update').classList.add('hidden');
    document.getElementById('a_delete').classList.remove('hidden');
    document.getElementById('a_error').classList.add('hidden');
}

const getErrorResponse = () => {
    document.getElementById('a_delete').classList().add('hidden');
    document.getElementById('a_error').classList().remove('hidden');
}