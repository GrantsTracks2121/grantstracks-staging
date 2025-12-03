var config = {
    style: 'mapbox://styles/mapbox/satellite-streets-v12',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1IjoiZ3JhbnRzdHJhY2tzIiwiYSI6ImNtZGh2cTNodTA2ZHcybW9ubHBoZjZuNXAifQ.GOWaZGPEDbuHPJ6c3ZObgQ',
    showMarkers: true,
    markerColor: '#3FB1CE',
    // projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: true, //set true for enabling 3D maps.
    auto: false,
    title: 'The First Three Temples of the 88 Temple Pilgrimage',
    subtitle: 'Getting Started on the Circular Path',
    byline: 'Grant S Wilson',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Ryōzen-ji 霊山寺 - (Vulture Peak Temple)',
            image: './assets/Blackfoot.gif',
            description: 'The first chapter contains a title, image, and camera view for San Francisco, California. <b>Update</b> the chapter data to make it your own. <a href="https://google.ca">Google</a></br><img src=\"/assets/Blackfoot.gif\" align=\"center\">',
            location: {
                center: [134.50262, 34.15926],
                zoom: 17.47,
                pitch: 49,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Gokuraku-ji (極楽寺)',
            image: './assets/Nisshozan_Gokurakuji_02.jpg',
            description: 'Gokuraku-ji is a Kōya-san Shingon temple in Naruto, Tokushima Prefecture, Japan. Temple 2 of the Shikoku 88 temple pilgrimage, the main image is of Amida Nyorai. The temple is said to have been founded by Gyōki.<iframe width="560" height="315" src="https://www.youtube.com/embed/MEXk_eHPClM?si=PTwEWAuQA7fATMai" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
            location: {
                center: [134.49045, 34.15565],
                zoom: 17.73,
                pitch: 48.50,
                bearing: -93.60,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                speed: 1, // make the flying slow
                curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Geneva',
            image: './assets/geneva.jpg',
            description: 'Geneva, Switzerland, is a picturesque city nestled along the shores of Lake Geneva, surrounded by the Alps and Jura mountains. Known as a global hub for diplomacy and finance, it is home to numerous international organizations, including the United Nations and the Red Cross.',
            location: {
                center: [6.15116, 46.20595],
                zoom: 12.52,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'Buenos Aires',
            image: './assets/buenos-aires.jpg',
            description: 'Buenos Aires, the capital of Argentina, is a dynamic city known for its European-inspired architecture, vibrant tango culture, and rich culinary scene. Often called the "Paris of South America," it blends historic charm with modern energy.  You can add as many chapters as you need, just copy the JSON data and make changes.',
            location: {
                center: [-58.54195, -34.71600],
                zoom: 4,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
