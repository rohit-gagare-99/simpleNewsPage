let API = '1412b03e14504767b9572adcb2ffa0eb';
let conTainer = document.querySelector(".container")

let apiUrl = ' https://newsapi.org/v2/top-headlines?category=technology&apiKey=  ';

function addnews(result){

    for(let i =0; i< result.articles.length ; i++){
        console.log(result.articles[i]);
        conTainer.innerHTML += ` 
            <div class="auther-date">
                <h3 class="auther-name">${result.articles[i].author}</h3>
                <h3 class="post-date">${result.articles[i].publishedAt.slice(0,10)}</h3>

            </div>
       
            <div class="description-image-container">
      
                <h1 class="heading">${result.articles[i].title}</h1>

                <div class="des-img">
                    <div class="description">
                      ${result.articles[i].description} 
                      ${result.articles[i].content
                      } 

                      Voluptates architecto consequuntur odio iure amet veniam error laudantium esse harum nemo, est, iste mollitia consequatur nisi atque quibusdam. Magnam voluptatibus minus amet quos, qui odit consequuntur totam quo illo nisi, nobis, nulla ad dolorum iste esse veniam temporibus culpa cupiditate nihil optio aut aliquid. At incidunt non eos iste, ex quia magni aliquam minus, reprehenderit suscipit laudantium nobis eum amet odit ipsum maiores repellendus autem, dignissimos veniam natus sequi. Ab repellat, quis est ipsam, cum nemo laudantium eum quidem doloremque, non veritatis. Architecto doloremque vitae hic quod cupiditate deserunt, atque officiis odit, blanditiis nihil omnis earum possimus ad provident repellat, nisi iste adipisci reiciendis autem mollitia voluptatem placeat ab perferendis. Possimus sint, ipsam, natus inventore, suscipit et officia numquam sit necessitatibus a recusandae repellat soluta aut asperiores accusantium totam similique temporibus commodi repudiandae! Iusto illo nesciunt obcaecati doloremque saepe ex fuga quibusdam corrupti commodi veritatis reiciendis est impedit tempore modi veniam, officiis nobis, fugiat atque possimus dolor voluptate culpa soluta? Nihil itaque repellat at eaque, numquam adipisci sequi. Laborum ullam nisi obcaecati repudiandae doloremque nemo neque! Cupiditate, nostrum. Velit beatae accusamus modi ad odit nulla nostrum, corporis nesciunt exercitationem odio unde quibusdam dignissimos hic? Sit vero totam expedita quaerat? Saepe iusto aut asperiores, quo labore provident. Ipsum, amet id mollitia nostrum saepe recusandae ipsam nemo. Architecto sunt qui, nam maiores sapiente ad itaque accusamus autem ducimus, fugit sit rerum eaque blanditiis quisquam ipsum exercitationem, soluta culpa tenetur! Beatae odio atque sunt perspiciatis tempore accusamus voluptatem enim suscipit magni repellat architecto neque repellendus officia quo quia laudantium ab maxime nostrum, similique amet minus earum! Qui excepturi eaque vero distinctio autem consectetur minima voluptatibus amet quae repudiandae dicta tenetur omnis, culpa nemo ut totam atque beatae cum libero optio placeat animi explicabo odit? Nihil quis repellat quibusdam delectus. Quod labore dolorum, mollitia veritatis enim deserunt quos omnis odit itaque. Pariatur aut suscipit ut dolore nam modi incidunt optio neque aperiam magni, quidem explicabo ipsum rem cupiditate unde culpa quibusdam non corporis. Ea architecto cumque veritatis, ex omnis corporis labore dolores dolore voluptatem alias quisquam voluptates et officia distinctio ipsum repudiandae sequi sit est, fugit possimus quam quasi. Aspernatur exercitationem, pariatur magnam sint fugit deserunt perferendis suscipit expedita dicta tempora dolorum doloremque facilis maiores distinctio sunt nobis? Voluptas rerum, iusto non cum blanditiis, aliquam facere, soluta iste dolorem a veniam. Ipsa, earum neque! Itaque sint minima magnam blanditiis corrupti officiis odit, repellendus num

                    </div>
                    <div class="image">
                        <img src=" ${result.articles[i].urlToImage}" alt="">

                        <div class="ads">
                        <div class="adsname">AD</div>
                        
                            <img src="ads.webp" alt="">
                        </div>
                    </div>

                </div>
            </div> `

    }
    
}
function fetchNews() {

    fetch(`https://newsapi.org/v2/top-headlines?category=technology&apiKey=1412b03e14504767b9572adcb2ffa0eb`)
        .then(raw => raw.json())
        .then(result => {
            if(result.status === "ok"){
                addnews(result);
            }else{
                alert("news app servwer down !!! ")
            }
        })

}



// calling function 
fetchNews();




