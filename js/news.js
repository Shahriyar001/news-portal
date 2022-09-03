const loadNews = async (idnum) => {
    const url = `https://openapi.programming-hero.com/api/news/category/${idnum}`
    const res = await fetch(url);
    const data = await res.json();
    displayNews(data.data);
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
                                    <p><i class="fa-regular fa-eye"></i> ${news.total_view ? news.total_view : 'no'
            }</p>
                                </div>
                                <div>
                                    <button class="btn btn-white">more..</button>
                                </div>
                            </div>
                        </div>

        `;
        newsContainer.appendChild(newsDiv);


    })
    console.log(newses.length);

    const foundResult = document.getElementById('found-result');
    foundResult.innerText = newses.length;
}

loadNews('01')