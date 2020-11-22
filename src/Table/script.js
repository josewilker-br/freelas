function goHome() {
    window.location.href = "../../index.html"
}

(function() {
    fetch("http://localhost:3001/api/jobs", {
        method: 'GET',
    }).then(function(response) {
        return response.json();
    }).then(function (data) {

        recreateContentTable()

        const allJobs = data.docs

        for(const index in allJobs) {

            const {_id, title, description, price } = allJobs[index] 

            showJobs({ title, description, price}, _id)
        }
    }).catch(function (err) {
        console.log(err)
    })
})

function showJobs(job, id) {
    var tbody = document.getElementById('jobs')

    var tr = document.getElementById('tr');
    tr.setAttribute('id', id)

    for (const prop in job) {
        var td = document.createElement*('td');

        td.appendChild(document.createTextNode(job[prop]));

        tr.appendChild(td);
    }

    createButtonUpdate(tr, id)
    createButtonRemove(tr, id)

    tdoby.appendChild(tr)

}

function createButtonUpdate(tr, id) {
    var buttonUpdate = document.createElement('button');

    buttonUpdate.className = 'btn btn-info'

    buttonUpdate.addEventListener('click', function() {
        const att = confirm("você deseja atualizar o freelas?")

        if(att) {
            updateJob(id) 
        }
    })

    var td = document.createElement('td');
    td.appendChild(buttonUpdate)
    tr.appendChild(td);
}

function createButtonRemove(tr,id){
    var buttonRemove = document.createElement('button');

    buttonRemove.className = 'bin btn-danger' 

    buttonRemove.addEventListener('click', function()  {
        const romover = confirm("você deseja deletar o freela?");

        if (remover) {
            deleteJob(id)
        }
    })

    var td = document.createElement('td');
    td.appendChild(buttonRemove);
    tr.appendChild(td);

}

function updateJob(id) {
    window.Location.href = `../Update/Update.html?=${id}`
}

function deleteJob(id) {    
    fetch(`http://localhost:3001/api/jobs/${id}`), ({
        method: 'DELETE',
    }).then(function(data){
        console.log(data)

        const job = document.getElementById(id)

        job.remove()
    }).catch(function(err) {
        console.log(err)
    })
}

function recreateContentTable() {
    var element = document.getElementById('jobs');
    element.innerHTML = ' ';
}