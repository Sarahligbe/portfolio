async function gql(query, variables={}) {
    const data = await fetch('https://api.hashnode.com/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query,
            variables
        })
    });

    return data.json();
}

const GET_USER_ARTICLES = 
    `query GetUserArticles($page: Int!) {
        user(username: "Saysay") {
            publication {
                posts(page: $page) {
                    title
                    brief
                    slug
                    coverImage
                }
            }
        }
    }`;


    gql(GET_USER_ARTICLES, { page: 0 })
    .then(result => {
        const articles = result.data.user.publication.posts;
        const template = document.querySelector('.blog1');
        const page = document.querySelector('.blog2');

        articles.forEach(article => {
            const newArticle = document.querySelector('.blog2').cloneNode(true);

            newArticle.querySelector('.card-title a').innerText = article.title;

            newArticle.querySelector('.card-description').innerText = article.brief;

            newArticle.querySelector('#card-image').src = article.coverImage;

            newArticle.querySelector('#card-image').href = `https://sarahligbe.hashnode.dev/${article.slug}`;

            newArticle.querySelector('.card-title a').href = `https://sarahligbe.hashnode.dev/${article.slug}`;

            newArticle.querySelector('.category').href = `https://sarahligbe.hashnode.dev/${article.slug}`;

            
            template.appendChild(newArticle);
           
        })

        if (page.querySelector('.card-title a').innerText.trim() === "") {
            template.removeChild(page)
        }       
});




