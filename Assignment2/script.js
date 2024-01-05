let inputData = {
    date: '',
    latitude: '',
    longitude: '',
    title: '',
    description: ''
};

function handleSubmit(e) {
    e.preventDefault();

    // store our input data 
    inputData.title = document.querySelector('#title').value;
    inputData.latitude = document.querySelector('#latitude').value;
    inputData.longitude = document.querySelector('#longitude').value;
    inputData.description = document.querySelector('#description').value;
    inputData.date = document.querySelector('#date').value;
    console.log(inputData);

    // empty all the fields
    document.querySelector('#title').value="";
    document.querySelector('#latitude').value="";
    document.querySelector('#longitude').value="";
    document.querySelector('#description').value="";
    document.querySelector('#date').value="";

    // render our input data by using mustache
    const template = document.querySelector('#info-template').innerHTML;
    const rendered = Mustache.render(template, inputData);
    document.querySelector('.info').innerHTML = rendered;
}

const form = document.querySelector('.form');
form.addEventListener('submit', handleSubmit);
