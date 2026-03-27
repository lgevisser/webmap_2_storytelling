var config = {
    style: 'mapbox://styles/lgevisser/cmn81yclp000y01s4c4uqgr4h',
    accessToken: 'pk.eyJ1IjoibGdldmlzc2VyIiwiYSI6ImNtbjdlY3kybjAwMjQycXNkcW5wb2diaWkifQ.snhtV7KYMJlGpHsk7W9K-w',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: false,
    title: 'Assignment 5: Story Map',
    subtitle: 'Cycling Infrastructure and Traffic Noise Correlations in Copenhagen, DK',
    byline: 'By Leo Gevisser',
    footer: 'Sources: MiljøGIS Noise 2022 (MST Denmark), OpenStreetMap via Geofabrik',
   chapters: [
        {
            id: 'chapter-1',
            alignment: 'left',
            hidden: false,
            title: 'Road Traffic Noise as an Urban Health Issue',
            image: '',
            description: 'Road traffic noise is one of the most pressing environmental health issues in European cities. Under the EU Environmental Noise Directive (2002/49/EC), member states must produce strategic noise maps every five years. In Denmark, nearly one in three homes — around 785,000 — exceed recommended noise limits, with sustained exposure linked to hypertension, heart disease, and premature death. This story map examines 2022 strategic noise mapping data for Copenhagen alongside OpenStreetMap cycling infrastructure to explore their spatial relationship.',
            location: {
                center: [10.0, 56.0],
                zoom: 5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'noise-2022',
                    opacity: 0,
                    duration: 3000,
                },
                {
                    layer: 'bike-infrastructure',
                    opacity: 0,
                    duration: 3000,
                }
            ],
            onChapterExit: []
        },
        {
            id: 'chapter-2',
            alignment: 'left',
            hidden: false,
            title: 'The 2022 Strategic Noise Map',
            image: '',
            description: 'The noise data shown here comes from the Danish Environmental Protection Agency\'s 2022 strategic noise mapping, measuring road traffic noise at 1.5 metres above ground using the Lden indicator — a day-evening-night weighted average. The dataset contains 6,224 noise contour polygons across greater Copenhagen, ranging from 53 dB to 78 dB. Yellow-green areas indicate moderate exposure (53–58 dB); deep red zones mark the most severely affected areas (73–78 dB).',
            location: {
                center: [12.4753, 55.6924],
                zoom: 11,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'noise-2022',
                    opacity: 0.7,
                    duration: 3000,
                },
                {
                    layer: 'bike-infrastructure',
                    opacity: 0,
                    duration: 3000,
                }
            ],
            onChapterExit: []
        },
        {
            id: 'chapter-3',
            alignment: 'right',
            hidden: false,
            title: 'Where is the Noise Concentrated?',
            image: '',
            description: 'Noise is unevenly distributed across the city. The 73–78 dB band accounts for 14.5% of the total noise-affected area despite comprising only 227 polygons. The largest single high-noise zone is concentrated along the major western arterial corridor — an area of dense through-traffic that cuts through some of Copenhagen\'s most populated inner-city neighbourhoods. These corridors are precisely where residents have the least ability to escape noise exposure in their daily lives.',
            location: {
                center: [12.4748, 55.6943],
                zoom: 13,
                pitch: 45,
                bearing: -20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'noise-2022',
                    opacity: 0.75,
                    duration: 3000,
                },
                {
                    layer: 'bike-infrastructure',
                    opacity: 0,
                }
            ],
            onChapterExit: []
        },
        {
            id: 'chapter-4',
            alignment: 'left',
            hidden: false,
            title: 'Copenhagen\'s Cycling Network',
            image: '',
            description: 'Copenhagen is widely regarded as a global leader in cycling infrastructure, and the network shown here — 9,715 dedicated cycleway segments from OpenStreetMap — reflects decades of sustained investment. The network is well-developed across much of the inner city, and cycling accounts for over 60% of commuter trips. However, the data reveals notable gaps near the city\'s noisiest corridors. For commuters whose routes run along or near major arterial roads, the absence of nearby cycling alternatives means that avoiding high-noise roads is not always a realistic option — cycling through noise rather than away from it.',
            location: {
                center: [12.4753, 55.6924],
                zoom: 12,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'noise-2022',
                    opacity: 0,
                    duration: 3000,
                },
                {
                    layer: 'bike-infrastructure',
                    opacity: 0.9,
                    duration: 3000,
                }
            ],
            onChapterExit: []
        },
        {
            id: 'chapter-5',
            alignment: 'right',
            hidden: false,
            title: 'Noise and Cycling Infrastructure Together',
            image: '',
            description: 'Overlaying both datasets reveals a clear spatial gradient: 2,707 cycleway segments lie within 500 metres of the quietest noise band (53–58 dB), compared to only 1,265 near the loudest zones (73–78 dB). The largest high-noise area in the dataset lies approximately 0.8 km from the nearest cycleway, and several other 68+ dB zones are between 0.5 and 0.7 km from any cycling infrastructure. The gaps in the network are most pronounced precisely where noise burden is highest — raising questions about whether cycling infrastructure investment has kept pace with the city\'s noisiest corridors.',
            location: {
                center: [12.4748, 55.6943],
                zoom: 13,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'noise-2022',
                    opacity: 0.6,
                    duration: 3000,
                },
                {
                    layer: 'bike-infrastructure',
                    opacity: 0.9,
                    duration: 3000,
                }
            ],
            onChapterExit: []
        },
        {
            id: 'chapter-6',
            alignment: 'left',
            hidden: false,
            title: 'Conclusion and Further Research',
            image: '',
            description: 'This map offers a preliminary spatial analysis of road traffic noise and cycling infrastructure in Copenhagen. The data points to a pattern worth investigating further: the areas most exposed to noise are not always well-connected by cycling alternatives, and the fragmented nature of the network means many residents cannot meaningfully route around high-noise corridors. Further research incorporating socioeconomic and population data would be needed to make stronger claims about environmental health equity — but the spatial picture presented here suggests the question is worth asking.',
            location: {
                center: [12.4753, 55.6924],
                zoom: 11,
                pitch: 30,
                bearing: 20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'noise-2022',
                    opacity: 0.5,
                    duration: 3000,
                },
                {
                    layer: 'bike-infrastructure',
                    opacity: 0.7,
                    duration: 3000,
                }
            ],
            onChapterExit: []
        }
    ]
};