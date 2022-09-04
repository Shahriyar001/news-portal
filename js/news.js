const loadNews = async (idnum,) => {
    toggleSpinner(true);
    const url = `https://openapi.programming-hero.com/api/news/category/${idnum}`;
    try {
        const res = await fetch(url);
        const data = await res.json();
        displayNews(data.data);

    }
    catch (error) {
        console.log(error);
    }


}

const displayNews = newses => {
    console.log(newses);
    const newsContainer = document.getElementById('news-container');
    newsContainer.textContent = '';
    newses.forEach(news => {
        const newsDiv = document.createElement('div');
        newsDiv.classList.add('row');
        newsDiv.innerHTML = `
        <div class="col-md-4 my-3">
                            <img src="${news.image_url}" class="img-fluid rounded-start" alt="...">
                        </div>
                        <div class="col-md-8 bg-white rounded my-3">
                            <div class="card-body w-100">
                                <h5 class="card-title">${news.title}</h5>
                                <p class="card-text">${news.details.slice(0, 200)}.</p>
                                <p class="card-text"><small class="text-muted">${news.details.slice(90, 150)}...</small></p>
                            </div>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="d-flex align-items-center">
                                    <div class=" d-flex aling-item-center mx-2">
                                        <img src="${news.author.img}" width="30" height="24"  alt="...">
                                    </div>
                                    <div class"d-flex align-items-center">
                                        <p class"mt-3"><strong>${news.author.name ? news.author.name : 'No Name found'}</strong><br>${news.author.published_date ? news.author.published_date : 'No Publish Date Found'}</p>
                                    </div>
                                </div>
                                <div class="mt-3">
                                    <p><i class="fa-regular fa-eye"></i> ${news.total_view ? news.total_view : 'no viewers found'
            }</p>
                                </div>
                                <div>
                                    <button onclick="loadNewsDetails('${news._id
            }')" type="button" class="btn btn-light" data-bs-toggle="modal" data-bs-target="#newsDetailmodal">
                more...
            </button>
                                </div>
                            </div>
                        </div>

        `;

        newsContainer.appendChild(newsDiv);

        console.log(newses[0]);
        console.log(news._id)



    })
    // stop toggle spiner 

    toggleSpinner(false);

    const foundResult = document.getElementById('found-result');
    foundResult.innerText = newses.length;

}

// function loadNews() {
//     toggleSpinner(true);
// }

const toggleSpinner = isloading => {
    const loaderSection = document.getElementById('loader');
    if (isloading) {
        loaderSection.classList.remove('d-none');
    }
    else {
        loaderSection.classList.add('d-none');
    }
}

const loadNewsDetails = async news_id => {
    const url = `https://openapi.programming-hero.com/api/news/${news_id}`;
    const res = await fetch(url);
    const data = await res.json();
    displayNewsDetails(data.data);
}

const displayNewsDetails = news => {
    console.log(news);
    const newsTitle = document.getElementById('newsDetailmodalLabel');
    newsTitle.innerText = news[0].title;
    const newsDetail = document.getElementById('news-details');
    newsDetail.innerText = news[0].details;
    const authorName = document.getElementById('athr-name');
    authorName.innerText = news[0].author.name ? news[0].author.name : 'no name found';
    const relaseInModal = document.getElementById('modal-relase');
    relaseInModal.innerText = news[0].author.published_date ? news[0].author.published_date : 'no date found';
    const viewInModal = document.getElementById('viewIn-Modal');
    viewInModal.innerText = news[0].total_view ? news[0].total_view : 'no views';

    ;

}

loadNews('08')