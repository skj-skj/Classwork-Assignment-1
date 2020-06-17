
// let btns = document.querySelectorAll('#movie-list .delete');

// btns.forEach( btn => {
//     btn.addEventListener('click', (e) => {

//         const li = e.target.parentElement;
//         console.log(li);

//         li.parentNode.removeChild(li);
//     });
// })


// Event Bubbling
// Delete the list item
const list = document.querySelector('#movie-list ul');

list.addEventListener('click', (e) => {
    if(e.target.className == 'delete'){
        const li = e.target.parentElement;
        // li.parentNode.removeChild(li); 
        list.removeChild(li);
    }
});

// Add a new Movie
const addMovieForm = document.forms['add-movie'];

addMovieForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const value = addMovieForm.querySelector("input[type='text']").value;

    console.log(value);

    const li = document.createElement('li');
    const movieName = document.createElement('span');
    const deleteBtn = document.createElement('span');

    deleteBtn.textContent = 'delete';
    movieName.textContent = value;

    deleteBtn.classList.add('delete')
    movieName.classList.add('name');
    
    li.appendChild(movieName);
    li.appendChild(deleteBtn);

    list.appendChild(li);
})

// Hide List
const hideBox = document.querySelector('#hide');
hideBox.addEventListener('change', () => {
    console.log(hideBox.checked);
    if(hideBox.checked){
        list.style.display = 'none';
    }else{
        list.style.display = 'inline';
    }
})


//Search 
// Task - Search the movie from the list provided:
// 1. As the user types, the list should show the matching pattern movies
// 2. If the movie is not the part of our list then we show nothing as long as the search box has values

const searchForm = document.forms['search-movies'];

searchForm.addEventListener('keyup',(e) => {
    let movieList = document.querySelectorAll('#movie-list ul li');
    
    movieList.forEach( movie => {
        if(! movie.querySelector('.name').textContent.toLowerCase().includes(searchForm.querySelector('input').value.toLowerCase())){
            movie.style.display = 'none';
        }else{
            movie.style.display = 'block';
        }
    }

    );
    
})