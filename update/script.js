(function () {
    const id  = window.location.search.replace("?id=", '')

    fetch(`http://localhost:3001/api/jobs${id}`, {
        method:'GET'
    }).then(function(response) {
        return response.json()
    }).then(function(data) {

        document.getElementById("titles").value = data.titles;

        document.getElementById("description").value = data.description;

        document.getElementById("price").value = data.price
    }).catch(function (err) {
        console.log(err)
    })
})

function updateJob(event, form) {
    event.preventDefault();

    const id = window.location.search.replace("?id=",'')

    const title = this.title.value;
    const description = this.description.value;
    const price = this.price.value;

    fetch(`http://localhost:3001/api/jobs/${id}`, {
        method: "PUT",
        headers: { 'accept': 'application/json', 'content-Typer': 'application/json' },
        body: JSON.stringify({
            title: title,
            description: description,
            price: price
        })
    }).then(function (response) {
        window.location.href = "../Table/Table.html"
    }).catch(function (err) {
        console.log(err)
    })
}