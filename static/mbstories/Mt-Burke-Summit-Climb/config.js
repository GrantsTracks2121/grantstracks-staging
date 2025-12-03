var config = {
    style: 'mapbox://styles/mapbox/satellite-streets-v12',
    
    accessToken: 'pk.eyJ1IjoiZ3JhbnRzdHJhY2tzIiwiYSI6ImNtZmVkaTlvMzA1NjgybXBzdjh5ZHBkcHkifQ.mfINvhQdLimVeKSaIdm0oQ',
    showMarkers: true,
    markerColor: '#3FB1CE',
    // projection: 'equirectangular',
    inset: false, //Enables a globe minimap.
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'light',
    use3dTerrain: true, //set true for enabling 3D maps.
    auto: false,
    title: 'Climbing to the Summit of Mt. Burke',
    subtitle: 'August 30, 2025',
    byline: 'By Grant S Wilson',
    footer: 'Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [

    {
    id: 'intro',
    alignment: 'center',
    hidden: false,
    title: 'The Climb to the Summit of Mt. Burke in Kananaskis in 30 Seconds',
    image: '',
    description: '<iframe width="560" height="315" src="https://www.youtube.com/embed/iYs6l83vPGY?si=_gCw-48tYnIbmiiu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="width: 90%; height: auto; aspect-ratio: 16 / 9;"></iframe>',
    location: {
          center: [-114.524414,50.290233],
          zoom: 15.42,
          pitch: 77,
          bearing: 88
    },
    mapAnimation: 'flyTo',
    rotateAnimation: false,
    callback: '',
    onChapterEnter: [],
    onChapterExit: []
},
        {
            id: '005',
            alignment: 'left', // center, left, right, full
            hidden: false,
            title: 'At 7:40 AM the Parking Lot Is Almost Full',
            image: 'assets/005-IMG_5656.jpg',
            description: 'Temperatures had been hovering around 30 C in the days leading up to this one, so we wanted to get as early a start as possible in the hope that we\'d beat at least some of the day\'s heat. Others had the same idea: when we arrived the lot was almost full at the trailhead.',
            location: {
                center: [-114.579619,50.286483],
                zoom: 15.42,
                pitch: 77,
                bearing: 88
            },
            mapAnimation: 'flyTo', // flyTo, easeTo, jumpTo
            rotateAnimation: false, // true, false
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
{
            id: '010',
            alignment: 'left', // center, left, right, full
            hidden: false,
            title: 'The Direct Route Up a Well-Travelled Cutline',
            image: 'assets/010-IMG_5661.jpg',
            description: 'This 2D image doesn\'t accurately show the 3D slope of the "Direct Route" cutline we followed initially. It was an unrelentingly hard slog nowhere but straight up.',
            location: {
                center: [-114.559478,50.285325],
                zoom: 16.44,
                pitch: 83,
                bearing: 90.40
            },
            mapAnimation: 'flyTo', // flyTo, easeTo, jumpTo
            rotateAnimation: false, // true, false
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
{
            id: '015',
            alignment: 'left', // center, left, right, full
            hidden: false,
            title: 'Beauty Shines When You Attend to It',
            image: 'assets/015-IMG_5665.jpg',
            description: 'As you ascend, one\'s focus is on the physical effort and psychological mind games during the climb. But noticing little bits of beauty along the way bring brief reminders of the pure joy of being here.',
            location: {
                center: [-114.543350,50.284850],
                zoom: 15,
                pitch: 63,
                bearing: -83.20
            },
            mapAnimation: 'flyTo', // flyTo, easeTo, jumpTo
            rotateAnimation: false, // true, false
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
{
            id: '020',
            alignment: 'left', // center, left, right, full
            hidden: false,
            title: 'A Gnarly Tree Carcass',
            image: 'assets/020-IMG_5672.jpg',
            description: 'This shows the harshness of the environment up here',
            location: {
                center: [-114.538589,50.286033],
                zoom: 16.88,
                pitch: 85,
                bearing: 64.80
            },
            mapAnimation: 'flyTo', // flyTo, easeTo, jumpTo
            rotateAnimation: false, // true, false
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
{
            id: '025',
            alignment: 'left', // center, left, right, full
            hidden: false,
            title: 'A Sentinel Outcrop Above the Treeline',
            image: 'assets/025-IMG_5690.jpg',
            description: 'Long after leaving the treeline and negotiating the winding, scree-covered path up, this prominent outcrop in the foreground shows the scale of the land and mountains in the background.',
            location: {
                center: [-114.532036,50.287061],
                zoom: 17,
                pitch: 68,
                bearing: -102.40
            },
            mapAnimation: 'flyTo', // flyTo, easeTo, jumpTo
            rotateAnimation: false, // true, false
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
{
            id: '030',
            alignment: 'left', // center, left, right, full
            hidden: false,
            title: 'A Geocache Find Along the Way',
            image: 'assets/030-IMG_5692.jpg',
            description: 'There are number of geocaches hidden along the path up the mountain. The finding hint for this one was "In a hole Covered by rocks", which was almost no help at all given there was nothing but rock and rock covering rock up here. But eventually it was found.',
            location: {
                center: [-114.531669,50.287281],
                zoom: 16.36,
                pitch: 74.50,
                bearing: 0
            },
            mapAnimation: 'flyTo', // flyTo, easeTo, jumpTo
            rotateAnimation: false, // true, false
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
{
            id: '035',
            alignment: 'right', // center, left, right, full
            hidden: false,
            title: 'A Rare Selfie With the Summit in the Background',
            image: 'assets/035-IMG_5700.jpg',
            description: 'You can see the old Cameron Fire Lookout hut just beside my ear. Seeing the goal like that and knowing how much effort was yet needed to get there was almost cruel.',
            location: {
                center: [-114.527764,50.288842],
                zoom: 17,
                pitch: 85,
                bearing: 37.60
            },
            mapAnimation: 'flyTo', // flyTo, easeTo, jumpTo
            rotateAnimation: false, // true, false
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
{
            id: '040',
            alignment: 'left', // center, left, right, full
            hidden: false,
            title: 'The Summit Seems to Be Guarded by Rock Walls',
            image: 'assets/040-IMG_5702.jpg',
            description: 'We\'re getting closer to the top and it seems to be guarded not only by elevation, but rock walls as well.',
            location: {
                center: [-114.526808,50.289456],
                zoom: 17,
                pitch: 68.82,
                bearing: 27.31
            },
            mapAnimation: 'flyTo', // flyTo, easeTo, jumpTo
            rotateAnimation: false, // true, false
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
{
            id: '045',
            alignment: 'left', // center, left, right, full
            hidden: false,
            title: 'The Cameron Lookout',
            image: 'assets/045-IMG_5704.jpg',
            description: 'Cameron Lookout was built in 1929 and finally decommissioned in 1954. During that time it was the highest fire lookout in Canada. The structure is slowly returning to earth.',
            location: {
                center: [-114.524361,50.290122],
                zoom: 18,
                pitch: 80.50,
                bearing: -8
            },
            mapAnimation: 'flyTo', // flyTo, easeTo, jumpTo
            rotateAnimation: false, // true, false
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
{
            id: '050',
            alignment: 'left', // center, left, right, full
            hidden: false,
            title: 'The View From the Lookout Window',
            image: 'assets/050-IMG_5706.jpg',
            description: 'The view in all directions is breathtaking from the lookout window. The commanding mountain range to the west is the most impressive.',
            location: {
                center: [-114.524414,50.290233],
                zoom: 16,
                pitch: 75,
                bearing: -106.40
            },
            mapAnimation: 'flyTo', // flyTo, easeTo, jumpTo
            rotateAnimation: false, // true, false
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

{
            id: '080',
            alignment: 'left', // center, left, right, full
            hidden: false,
            title: 'The Geocaching Event Attendees at the Lookout',
            image: 'assets/080-Mt-Burke-Summit-GC-Event-Pic-Aug-30-2025.jpg',
            description: 'There were nine attendees at the Fourteen Years Later @ the Mount Burke Summit geocaching event. The event organizer, Don, is behind the camera.',
            location: {
                center: [-114.524414,50.290233],
                zoom: 17,
                pitch: 72.50,
                bearing: -124.71
            },
            mapAnimation: 'flyTo', // flyTo, easeTo, jumpTo
            rotateAnimation: true, // true, false
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

{
            id: '055',
            alignment: 'left', // center, left, right, full
            hidden: false,
            title: 'Another Shot of the Old Lookout',
            image: 'assets/055-IMG_5709.jpg',
            description: 'After all the effort it took to get here, I made of point of taking pictures of what had been the end goal "up there" for so long during the climb.',
            location: {
                center: [-114.524292,50.290328],
                zoom: 17,
                pitch: 80,
                bearing: -72.80
            },
            mapAnimation: 'flyTo', // flyTo, easeTo, jumpTo
            rotateAnimation: false, // true, false
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

{
            id: '065',
            alignment: 'left', // center, left, right, full
            hidden: false,
            title: 'Starting Back Down',
            image: 'assets/065-IMG_5721.jpg',
            description: 'The majority of the geocaching event participants shot back down the mountain with four of us taking as much time as we needed (and it was a substantial amount) to descend.',
            location: {
                center: [-114.527108,50.289189],
                zoom: 16.27,
                pitch: 57.50,
                bearing: -125.60
            },
            mapAnimation: 'flyTo', // flyTo, easeTo, jumpTo
            rotateAnimation: false, // true, false
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
{
            id: '070',
            alignment: 'left', // center, left, right, full
            hidden: false,
            title: 'A Prominent Outcrop On the Way Down',
            image: 'assets/070-IMG_5724.jpg',
            description: 'I asked Dan to pose for this shot just to show the scale of "human to rock".',
            location: {
                center: [-114.531883,50.287106],
                zoom: 16,
                pitch: 78,
                bearing: -67.20
            },
            mapAnimation: 'flyTo', // flyTo, easeTo, jumpTo
            rotateAnimation: false, // true, false
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
{
            id: '075',
            alignment: 'left', // center, left, right, full
            hidden: false,
            title: 'Cataract Creek Is Completely Dry',
            image: 'assets/075-IMG_5740.jpg',
            description: 'We took a new trail down to Cataract Creek when descended back to the trailhead. This trail is built on the original trail which was partially obliterated by floods in 2013. This trail offers much more gradual slopes and is recommended.',
            location: {
                center: [-114.563400,50.282428],
                zoom: 16.17,
                pitch: 64.50,
                bearing: -87.20
            },
            mapAnimation: 'flyTo', // flyTo, easeTo, jumpTo
            rotateAnimation: false, // true, false
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
{
            id: '090',
            alignment: 'full', // center, left, right, full
            hidden: false,
            title: 'Elevation Gain From Today\'s GPSr Track Log',
            image: 'TrackLoggraphAnnotated.png',
            description: '',
            location: {
                center: [-114.563400,50.282428],
                zoom: 16.17,
                pitch: 64.50,
                bearing: -87.20
            },
            mapAnimation: 'flyTo', // flyTo, easeTo, jumpTo
            rotateAnimation: false, // true, false
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }

    ]
};