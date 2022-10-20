const artists = [
    {image : '.\\images\\artists\\billie_eilish.jpg',
    name : 'Billie Eilish',
    location : 'Los Angeles, California, USA',
    category : ['Music', 'Performing'],
    details : 'Eilish said her brother and mother inspired her to get into music. Their parents encouraged the siblings to express themselves and explore whatever they wanted, including art, dancing, and acting. Eilish also performed at talent shows and joined the Los Angeles Children\'s Chorus at age eight. At age six, she started playing the ukulele. She wrote her first "real" song at age 11 for her mother\'s songwriting class. The song is about the zombie apocalypse, inspired by the television series The Walking Dead from which she took script lines and episode titles for the song.'
    },
    {image : '.\\images\\artists\\bryan_adams.jpg',
    name : 'Bryan Adams',
    location : 'Kingston, Ontario, Canada',
    category : ['Music', 'Performing'],
    details : 'One of the world\'s best-selling music artists and Canadian rock artist of all time. Reckless and (Everything I Do) I Do It for You, best-selling singles. He is a Canadian guitarist, singer, composer, and photographer.'
    },
    {image : '.\\images\\artists\\bob_marley.jpg',
    name : 'Nesta Robert Marley',
    location : 'Nine Mile, Saint Ann, Jamaica',
    category : ['Music', 'Performing'],
    details : 'Bob Marley is an inspiration because he gave back to the people who are in need of help. His story of becoming an inspiration to many begins in his childhood where his motives are found. "Bob and Bunny grew up in an environment where violent crime was glorified by many young people as one of the few ways of getting ahead. Music was seen as another means of escape. He gave back to where he knew was a troubled place by supporting them with things that can help Jamaica become a more peaceful place. Bob Marley is an inspiration because he practiced what he preached. He did not want to just sing about change to make change he also wanted to act physically to do this.'
    },
    {image : '.\\images\\artists\\da_vinci.jpg',
    name : 'Leonardo Da Vinci',
    location : 'Florence, Italy',
    category : ['Painting', 'Sculpture', 'Architecture'],
    details : 'Leonardo di ser Piero da Vinci was an Italian polymath of the High Renaissance who was active as a painter, draughtsman, engineer, scientist, theorist, sculptor, and architect. Among the qualities that make da Vinci\'s work unique are the innovative techniques that he used in laying on the paint, his detailed knowledge of anatomy, his innovative use of the human form in figurative composition, and his use of sfumato. It is estimated to have had IQ scores ranging from 180 to 220.'
    },
    {image : '.\\images\\artists\\tom_hanks.jpg',
    name : 'Tom Hanks',
    location : 'Concord, California, U.S.',
    category : ['Cinema'],
    details : 'American actor whose cheerful everyman persona made him a natural for starring roles in many popular films. In the 1990s he expanded his comedic repertoire and began portraying lead characters in dramas. Hanks was the recipient of numerous acting honours, including the Cecil B. DeMille Award (a Golden Globe for lifetime achievement). In addition, he received a Kennedy Center Honor in 2014 and the Presidential Medal of Freedom in 2016.'
    },
    {image : '.\\images\\artists\\jk_rowling.jpg',
    name : 'Joanne Rowling',
    location : 'Yate, Gloucestershire, England',
    category : ['Literature'],
    details : 'J.K. Rowling is a popular writer and producer of film and TV industry in England. She is a British author and philanthropist. She wrote Harry Potter, a seven-volume children\'s fantasy series published from 1997 to 2007. The series has sold over 500 million copies. She actively contributes to public welfare, especially for children.'
    },
    {image : '.\\images\\artists\\homer.jpg',
    name : 'Homer',
    location : 'Greece',
    category : ['Literature'],
    details : 'Timeless Greek poet Homer is known for his epic poems that continue to be studied by literature students and enthusiasts alike. His most well-known works are the Odyssey and the Iliad. Referred to as the king of all poets, Homer is known for creating the foundational works of Greek literature. The influence of Homer’s poems can be seen in today’s literature. The Iliad and the Odyssey both were written in epic hexameter style. Historians debate whether the events in Homer’s epic poems were historical accounts or fictional tales designed to further his storylines.'
    },
    {image : '.\\images\\artists\\mikis_theo.jpg',
    name : 'Mikis Theodorakis',
    location : 'Chios, Greece',
    category : ['Music', 'Performing', 'Literature'],
    details : 'Michail "Mikis" Theodorakis was a Greek composer and lyricist credited with over 1,000 works. His work, its importance for history and the people, transcend the person and his conscious choices. By dint of Mikis -as a receiver of the vibrations of his time- heroisms and defeats were transformed into an artistic work that is now, in its own right, the epic of the Greek people of modern times. He scored for the films Zorba the Greek, Z, and Serpico. He started composing songs at the age of 12 years old. He won the awards Lenin Peace Prize and BAFTA Award for Best Original Score.'
    },
    {image : '.\\images\\artists\\marina_satti.jpg',
    name : 'Marina Satti',
    location : 'Athens, Greece',
    category : ['Music', 'Performing', 'Cinema'],
    details : 'She began classical piano training at an early age and classical vocal training in high school. She enrolled at the National Technical University of Athens to study architecture without graduating. In 2008, after studying with the baritone Panos Dimas, Satti earned a first degree in lyrical monody with honors and a first prize. One year later, she earned a second degree in advanced classical studies, while also studying jazz at the Nakas Conservatory. In 2010, she completed two semesters in jazz composition and also in contemporary writing & production at the Berklee College of Music through a scholarship. She has worked as actress or music score composer with the National Theater of Greece, the Greek National Opera, the Athens Festival, and others. Her most popular song is "Koupes" with more than 24 million views on YouTube, and was included in Ravin & Bob Sinclar\'s Buddha Bar 20 Years Anniversary album.'
    },
    {image : '.\\images\\artists\\ana_tsilimpiou.jpg',
    name : 'Anastasia Tsilimpiou',
    location : 'Athens, Greece',
    category : ['Cinema', 'Performing'],
    details : 'Anastasia Tsilimpiou is a Greek-Romanian actress and model. She began her career at the age of five as child actor and model. She is multilingual and can speak Greek, Romanian, English and Turkish. She acted in  Greek and Turkish series as well as at films and theatre. She was awarded with the Corfu acting theatre award.'
    },
    {image : '.\\images\\artists\\anna_vissi.jpg',
    name : 'Anna Vissi',
    location : 'Pyla, Cyprus',
    category : ['Music', 'Performing', 'Cinema'],
    details : 'Anna is a Greek Cypriot singer and songwriter. She studied music at conservatories and performed locally before moving to the professional scene in Athens, in 1973. Over the course of her career she has released over two dozen albums, most of which have been certified at least gold in the two countries and has also starred in three theatrical productions and briefly ventured into television and radio. Vissi experimented with different styles of music; after becoming one of the first Greek artists to introduce Western pop and dance elements into Greek laïko and entehno, she became one of the most prominent portrayers of the laïko-pop hybrid genre and culture that was thriving from the mid-1990s into the mid-2000s. Vissi has won six Arion Music Awards, 15 Pop Corn Music Awards, and nine MAD Video Music Awards. Vissi has received 37 Platinum and 16 Gold certifications from IFPI Greece and has become one of the country\'s best-selling artists of all time. Forbes listed her as the 15th most powerful and influential celebrity in Greece and fourth highest ranked singer.'
    }
];

/*Functions*/
function openCategory(evt, categoryName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(categoryName).style.display = "block";
    evt.currentTarget.className += " active";
}

function sendContactForm() {
    let fname = document.getElementById("fullname");
    let email = document.getElementById("email");
    let subject = document.getElementById("subject");
    let message = document.getElementById("message");

    window.alert("Thank you for you message!");

    fname.innerText = "";
    email.innerText = "";
    subject.innerText = "";
    message.innerText = "";
}

function showOrHideElement(item_id) {
    let x = document.getElementById(item_id);
    
    if (x.style.display == "none") {
      x.style.display = "block";
    } 
    else {
      x.style.display = "none";
    }
}

function showArtists(category) {
    //let artists = readArtists();
    let container = document.getElementById('artists-container');

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
   
    container.style.margin = "30px 0px";
    container.style.marginLeft = "auto";
    container.style.marginRight = "auto";
    container.style.padding = "5px";
    container.style.display = "flex";
    container.style.flexDirection = "row";
    container.style.flexWrap = "wrap";
    container.style.gap = "15px";
    container.style.textAlign = "center";
    
    let showartists = artists;
    if (category == "0") { showartists = artists}
    else if (category == "1") {showartists = artists.filter(artist =>  {
        return artist.category.includes("Music");
    })}
    else if (category == "2") {showartists = artists.filter(artist =>  {
        return artist.category.includes("Performing");
    })}
    else if (category == "3") {showartists = artists.filter(artist =>  {
        return artist.category.includes("Cinema");
    })}
    else if (category == "4") {showartists = artists.filter(artist =>  {
        return artist.category.includes("Painting");
    })}
    else if (category == "5") {showartists = artists.filter(artist =>  {
        return artist.category.includes("Literature");
    })}
    else if (category == "6") {showartists = artists.filter(artist =>  {
        return artist.category.includes("Architecture");
    })}
    else if (category == "7") {showartists = artists.filter(artist =>  {
        return artist.category.includes("Sculpture");
    })}

    for(i=0; i<showartists.length; i++){
        let artist = showartists[i];
        let artist_card = document.createElement("div");
        artist_card.style.margin = "10px 0px";
        artist_card.style.marginLeft = "auto";
        artist_card.style.marginRight = "auto";
        artist_card.style.padding = "7px";
        artist_card.style.textAlign = "center";
        artist_card.style.maxWidth = "300px";
        artist_card.style.backgroundColor = "#478fb6";
        artist_card.style.borderRadius = "20px";
        artist_card.style.boxShadow = "2px 2px #999999";
        artist_card.addEventListener('mouseover', function handleMouseOver() {
            artist_card.style.backgroundColor = "#9FAFC1";
            artist_card.style.boxShadow = "0px 0px #999999";
        });
        artist_card.addEventListener('mouseout', function handleMouseOver() {
            artist_card.style.backgroundColor = "#478fb6";
            artist_card.style.boxShadow = "2px 2px #999999";
        });

        const picture = document.createElement("img");
        picture.src = artist['image'];
        picture.style.maxHeight = "50%";
        picture.style.maxWidth = "100%";
        picture.style.marginBottom = "5px";
        picture.style.overflow = "hidden";
        artist_card.appendChild(picture);

        const name = document.createElement("h3");
        name.innerText = artist['name'];
        name.style.marginBottom = "3px";
        artist_card.appendChild(name);

        const place = document.createElement("p");
        place.innerText = artist['location'];
        place.style.marginBottom = "5px";
        artist_card.appendChild(place);

        const category = document.createElement("p");
        category.innerText = artist['category'];
        category.style.fontStyle = "italic";
        category.style.marginBottom = "5px";
        artist_card.appendChild(category);

        const details = document.createElement("p");
        details.innerText = artist['details'];
        details.style.textAlign = "justify";
        artist_card.appendChild(details);

        container.appendChild(artist_card);
    }
}

function getLatestArtists() {
    let latest1 =  document.getElementById("latest-artist-1");
    let latest2 = document.getElementById("latest-artist-2");
    let latest3 = document.getElementById("latest-artist-3");

    latest1.children[0].src = artists[artists.length-1]["image"];
    latest1.children[1].innerText = artists[artists.length-1]["name"];
    latest1.children[2].innerText = artists[artists.length-1]["category"];
    latest1.children[3].innerText = artists[artists.length-1]["details"];

    latest2.children[0].src = artists[artists.length-2]["image"];
    latest2.children[1].innerText = artists[artists.length-2]["name"];
    latest2.children[2].innerText = artists[artists.length-2]["category"];
    latest2.children[3].innerText = artists[artists.length-2]["details"];

    latest3.children[0].src = artists[artists.length-3]["image"];
    latest3.children[1].innerText = artists[artists.length-3]["name"];
    latest3.children[2].innerText = artists[artists.length-3]["category"];
    latest3.children[3].innerText = artists[artists.length-3]["details"];
}