window.addEventListener('load', ()=>{
    APIkey="LHTgMDpZxV1gewJV3wnwjVbQDXJh2VUknMdpIHJw";
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${APIkey}`)
    .then(response => response.json())
    .then(data =>{
        const date = document.querySelector('.container #date');
        const name = document.querySelector('.container #name');
        const multimedia = document.querySelector('.container #multimedia');
        const details = document.querySelector('.container #details');

        date.innerHTML = `${data.date}`;
        name.innerHTML = `"${data.title}"`;
        details.innerHTML = `${data.explanation}`
        
        if(data.media_type === 'video'){
            multimedia.innerHTML = `<iframe class="embed-responsive-item" src="${data.url}"></iframe>`;
        }
        else{
            multimedia.innerHTML = `<img class="img-fluid" src="${data.url}">`;
        }
    });
});