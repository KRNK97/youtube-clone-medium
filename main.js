const KEY = "GOOGLEAPIKEY"

let term = "cars"
let listToDisplay = []

let testdata = [
    {
        "title": "McLaren 720S - Most Sensational Supercar | Ultimate Drives",
        "desc": "Drive this McLaren - https://www.ultimatedrives.net/ Here is the most detailed review of the McLaren 720S, I tell you everything ...",
        "channel": "Faisal Khan",
        "thumb": "https://i.ytimg.com/vi/uGd4A2Mksmk/hqdefault.jpg",
        "id": "uGd4A2Mksmk"
    },
    {
        "title": "Ferrari 488 Pista vs McLaren 720S  vs Lamborghini Aventador SV: DRAG RACE!",
        "desc": "Here.We.GO! Three incredible supercars, going head-to-head over the quarter-mile! Mat's in the Ferrari 488 Pista, and he's going ...",
        "channel": "carwow",
        "thumb": "https://i.ytimg.com/vi/bmFpNbscp5Q/hqdefault.jpg",
        "id": "bmFpNbscp5Q"
    },
    {
        "title": "McLaren 720S Spider 2020 review - see why it&#39;s the ULTIMATE convertible supercar!",
        "desc": "The competition has now closed, but you can still follow us over on Instagram! https://www.instagram.com/carwowcars/ Here it is, ...",
        "channel": "carwow",
        "thumb": "https://i.ytimg.com/vi/6oZSSB5n_Eg/hqdefault.jpg",
        "id": "6oZSSB5n_Eg"
    },
    {
        "title": "McLaren 720S Drive Impressions | Ft. Ultimate Drives | हिंदी",
        "desc": "Namaste, This video is not a drive impression but just a fun drive & walk around with my dream car McLaren 720S. All thanks to ...",
        "channel": "Gagan Choudhary",
        "thumb": "https://i.ytimg.com/vi/TJEuDALrIzc/hqdefault.jpg",
        "id": "TJEuDALrIzc"
    },
    {
        "title": "McLaren 720S 2019 | Real-life review",
        "desc": "Namaste friends, please LIKE & SUBSCRIBE :) The McLaren 720S is a sports car designed and manufactured by British ...",
        "channel": "Namaste Car",
        "thumb": "https://i.ytimg.com/vi/S1dy3nyIsEg/hqdefault.jpg",
        "id": "S1dy3nyIsEg"
    },
    {
        "title": "Lamborghini Aventador S Roadster vs McLaren 720S Spider - DRAG RACE, ROLLING RACE &amp; BRAKE TEST",
        "desc": "It's time to get serious... Lamborghini Aventador S Roadster vs McLaren 720S Spider! Combined they both bring 1460hp to the ...",
        "channel": "carwow",
        "thumb": "https://i.ytimg.com/vi/fJGxc0x7hzA/hqdefault.jpg",
        "id": "fJGxc0x7hzA"
    },
    {
        "title": "Flame Spitting McLaren 720s | 4K",
        "desc": "Recently had the pleasure of producing some content for LMCT+ and The Lab Detailing Specialist with this incredible Mclaren ...",
        "channel": "Hartnett Media",
        "thumb": "https://i.ytimg.com/vi/33crJ6BiJ20/hqdefault.jpg",
        "id": "33crJ6BiJ20"
    },
    {
        "title": "McLaren 720s with Novitec Kit in Kerala | ആരും ഒന്ന് നോക്കി പോകും! | Flywheel Malayalam",
        "desc": "The McLaren 720S is a 710-horsepower supercar that's far from subtle. Hani recently got an opportunity to experience the car at ...",
        "channel": "Flywheel by Hani Musthafa",
        "thumb": "https://i.ytimg.com/vi/NzXXUmtXDbc/hqdefault.jpg",
        "id": "NzXXUmtXDbc"
    },
    {
        "title": "MCLAREN 720S REVIEW",
        "desc": "Reviews Episode 10 - Mclaren 720S Review Welcome back to another episode of Reviews. Today we dive deep into all the ...",
        "channel": "mph club",
        "thumb": "https://i.ytimg.com/vi/Zbzqx-hGOCg/hqdefault.jpg",
        "id": "Zbzqx-hGOCg"
    },
    {
        "title": "2021 McLaren 720S Coupe - POV Driving Review",
        "desc": "MSRP: From $299000 Engine: 4.0 L V8 twin scroll twin-turbo with dry sump lubrication Horsepower: 710 hp, Torque: 568 lb-ft ...",
        "channel": "TheTopher",
        "thumb": "https://i.ytimg.com/vi/5ZawH-aKmLY/hqdefault.jpg",
        "id": "5ZawH-aKmLY"
    }
]

$(document).ready(()=>{

    async function callAPI(term){
        let response = await $.ajax({
            method: "GET",
            url: `https://www.googleapis.com/youtube/v3/search?q=${term}&key=${KEY}&part=snippet&maxResults=10`,
            success:function(res){
                console.log(res)
                return res
            }
        })
        return response
    }

    async function createList(items){
        listToDisplay = [];
        $(items).each((index,video)=>{
            let temp_data = {}
            temp_data["title"] = video.snippet.title;            
            temp_data["desc"] = video.snippet.description;            
            temp_data["channel"] = video.snippet.channelTitle;            
            temp_data["thumb"] = video.snippet.thumbnails.high.url;            
            temp_data["id"] = video.id.videoId;            
            listToDisplay.push(temp_data);
        })
        return listToDisplay
    }

    function displayList(videos){
        $('.video-list-item').remove();
        $(videos).each((i,video)=>{
            let videoDiv = `
            <div class="video-list-item shadow-sm d-flex" >
                <div class="img-parent">
                    <img src="${video.thumb}" class="thumb-small" alt="" />
                </div>    
                <div class="list-item-meta text-muted d-flex flex-column justify-content-between">
                    <div>    
                        <h6 class="m-0 p-0 fs-5 fw-bold text-muted">${video.title.slice(0,50)}</h6>
                        <p class="mt-2 m-0 p-0 truncate-desc text-muted">${video.desc}</p>
                    </div>
                    <div>
                        <button class="m-0 p-0 fw-bold btn btn-danger btn-sm channel-btn p-2 font2">${video.channel.split(' ',)[0]}</button>
                        <button class="m-0 p-0 fw-bold btn btn-outline-danger btn-sm play-btn ms-1 p-2 font2" id=${video.id}><i class="fa fa-play play-btn me-1 " aria-hidden="true"></i>Play</button>
                    </div>
                </div>
            </div>`
            $('.video-list').append(videoDiv);
        })
    }

    $('#search-bar').on('keyup',(e)=>{
        term = $(e.target).val();

        if (term.length > 3){                                                   // call API only if char length is > 3 (conserve API calls)   
            // callAPI(term).then((response)=>{
            //     createList(response.items).then(                               // call function to create list of videos to display
            //         (success)=>{
            //             displayList(success)                                    // list created, now display it on screen
            //         },(error)=>{
            //             console.log(error) 
            //         }
            //     )                                                               
            // },(error)=>{
            //     console.log(error.responseJSON.error.message,"error")           // error while getting videos
            // })
            displayList(testdata)
        }
    })

    function playNewVideo(id,title,desc){
        let iframe = $('#ytplayer')
        $(iframe).attr('src',`https://www.youtube.com/embed/${id}?autoplay=1`)
        $('.video-title-text').remove()
        $('.video-desc-text').remove()
        $('.video-title').append(`<h1 class="video-title-text fw-bold border-bottom border-dark text-danger fs-1">${title}</h1>`)
        $('.video-desc').append(`<p class="video-desc-text text-muted">${desc}</p>`)
    }

    $(document).on('click','.play-btn',(e)=>{
        let idOfClickedVideo = $(e.target).attr('id')
        $('.border-danger').removeClass('border-danger')
        let title = $(e.target).parent().parent().find('h6').text()
        let desc = $(e.target).parent().parent().find('p').text()

        if (idOfClickedVideo){
            playNewVideo(idOfClickedVideo,title,desc);
        }
        $(e.target).parent().parent().parent().addClass("border-danger")

    })





})