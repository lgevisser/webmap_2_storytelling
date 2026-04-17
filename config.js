var config = {
    style: 'mapbox://styles/lgevisser/cmn81yclp000y01s4c4uqgr4h',
    accessToken: 'pk.eyJ1IjoibGdldmlzc2VyIiwiYSI6ImNtbjg1eWQ3NzAwMDYycXIwZGNwY203aG8ifQ.F6Mg5_7KMpLVOgYQQMASMg',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: false,
    title: 'Public Transit, Noise Pollution and Income Inequality in Copenhagen, DK',
    subtitle: '',
    byline: 'By Leo Gevisser, Julia Le, Jin Gyung Choi',
    footer: 'Sources: KK Statistikbank 2024 (income); Miljøstyrelsen / MiljøGIS 2022 (noise, EU Directive Lden); Københavns Kommune cykeldata (cycling infrastructure); OpenStreetMap via Geofabrik (transit stations and lines); Metroselskabet (metro planning); City of Copenhagen Bicycle Account 2022; City of Copenhagen agenda bilag (trip distribution by purpose); Mao et al. 2025 (noise emissions of electric vehicles). Study area: Copenhagen Municipality, 67 neighborhoods.',
    chapters: [
        {
            id: 'chapter-1',
            alignment: 'left',
            hidden: false,
            title: 'Copenhagen, a City Known for its Cycling (with an Increase in Cars)',
            image: '',
            description: 'As a leader in climate action and urban design, Copenhagen is one of the world\'s most bicycle-friendly cities. More than six in ten residents commute to work or education via bike, but subsidized electric vehicles (EVs) and the high living costs in the city center have led car usage to increase over the past 15 years. For longer trips (over 30 kilometers), a staggering 58% are driven for leisure purposes, compared to just 23% for work and 9% for errands. These maps examine three datasets — traffic noise (as a proxy for car usage), public transit (trains and cycling infrastructure), and income — to examine who benefits from Copenhagen\'s mobility infrastructure and who does not.',
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
                { layer: 'kvarter-income-2024-0xafhl', opacity: 0, duration: 1000 },
                { layer: 'noise-2022', opacity: 0, duration: 1000 },
                { layer: 'cykeldata-kk-9id0j6', opacity: 0, duration: 1000 },
                { layer: 'copenhagen-stations-09zavy', opacity: 0, duration: 1000 },
                { layer: 'copenhagen-metro-lines-cg960m', opacity: 0, duration: 1000 }
            ],
            onChapterExit: []
        },
        {
            id: 'chapter-2',
            alignment: 'left',
            hidden: false,
            title: 'A City Divided by Income',
            image: './img/legend-income.png',
            description: 'Copenhagen\'s 67 neighborhoods reveal a clear income gradient. The lightest blues mark the lowest disposable incomes — a northwest arc through Tingbjerg, Husum, Bellahøj, Bispebjerg, and Haraldsgade. The darkest tones mark the wealthiest areas along the eastern waterfront. Between the poorest and richest neighborhood, there is a 2.8x income gap.',
            location: {
                center: [12.5200, 55.6850],
                zoom: 11,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                { layer: 'kvarter-income-2024-0xafhl', opacity: 0.8, duration: 2000 },
                { layer: 'noise-2022', opacity: 0, duration: 1000 },
                { layer: 'cykeldata-kk-9id0j6', opacity: 0, duration: 1000 },
                { layer: 'copenhagen-stations-09zavy', opacity: 0, duration: 1000 },
                { layer: 'copenhagen-metro-lines-cg960m', opacity: 0, duration: 1000 }
            ],
            onChapterExit: []
        },
        {
            id: 'chapter-3',
            alignment: 'left',
            hidden: false,
            title: 'Where the Noise Falls',
            image: './img/legend-noise.png',
            description: 'The 2022 Strategic Road Noise Map shows where Copenhagen\'s traffic generates its heaviest burden — where car use is highest. The loudest zones trace arterial corridors radiating west and north from the city centre — cutting directly through the same lower-income neighborhoods visible beneath. Residents most exposed to traffic noise are disproportionately those with the fewest resources to escape it. While EVs are effective at lowering noise by ~1–5 dBA — primarily at low speeds and frequencies, compared to internal combustion engine vehicles — EVs do not contribute significantly to noise reduction at speeds over 50 km/hr.',
            location: {
                center: [12.5200, 55.6850],
                zoom: 11,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                { layer: 'kvarter-income-2024-0xafhl', opacity: 0.6, duration: 2000 },
                { layer: 'noise-2022', opacity: 0.6, duration: 2000 },
                { layer: 'cykeldata-kk-9id0j6', opacity: 0, duration: 1000 },
                { layer: 'copenhagen-stations-09zavy', opacity: 0, duration: 1000 },
                { layer: 'copenhagen-metro-lines-cg960m', opacity: 0, duration: 1000 }
            ],
            onChapterExit: []
        },
        {
            id: 'chapter-4',
            alignment: 'left',
            hidden: false,
            title: 'A Network of Unequal Quality',
            image: './img/legend-cycling.png',
            description: 'Copenhagen\'s cycling network is not uniform. It distinguishes between protected cycle tracks (local, inner-city routes), Supercycle Highways (regional, high-speed networks routing from the city center to suburbs), recreational green routes, and road-sharing connections without separation from cars. The highest-quality infrastructure concentrates around the city centre, with fewer routes in the northwest — the same neighborhoods bearing the heaviest noise burden.',
            location: {
                center: [12.5200, 55.6850],
                zoom: 11,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                { layer: 'kvarter-income-2024-0xafhl', opacity: 0.4, duration: 2000 },
                { layer: 'noise-2022', opacity: 0, duration: 1000 },
                { layer: 'cykeldata-kk-9id0j6', opacity: 0.9, duration: 2000 },
                { layer: 'copenhagen-stations-09zavy', opacity: 0, duration: 1000 },
                { layer: 'copenhagen-metro-lines-cg960m', opacity: 0, duration: 1000 }
            ],
            onChapterExit: []
        },
        {
            id: 'chapter-5',
            alignment: 'right',
            hidden: false,
            title: 'Where Three Patterns Converge',
            image: '',
            description: 'Haraldsgade sits at the intersection of all three layers: low income, high traffic noise along the Tagensvej–Lyngbyvej corridor, and thin protected cycling coverage compared to wealthier neighborhoods to its south. The pattern isn\'t confined to one block. It recurs across the northwest arc, from Haraldsgade to Tingbjerg.',
            location: {
                center: [12.5400, 55.7030],
                zoom: 14,
                pitch: 45,
                bearing: -15
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                { layer: 'kvarter-income-2024-0xafhl', opacity: 0.5, duration: 2000 },
                { layer: 'noise-2022', opacity: 0.65, duration: 2000 },
                { layer: 'cykeldata-kk-9id0j6', opacity: 0.9, duration: 2000 },
                { layer: 'copenhagen-stations-09zavy', opacity: 0, duration: 1000 },
                { layer: 'copenhagen-metro-lines-cg960m', opacity: 0, duration: 1000 }
            ],
            onChapterExit: []
        },
        {
            id: 'chapter-6',
            alignment: 'left',
            hidden: false,
            title: 'Investigating the Public Transit Gap',
            image: './img/legend-transit.png',
            description: 'To further investigate this issue, we examined public transit accessibility. The M3 circle line, opened in 2019, transformed central Copenhagen but does not reach far northwest. Tingbjerg, Husum, and Bellahøj have no metro at all. A Tingbjerg extension is under investigation but unfunded and unscheduled. Meanwhile, the M4 reached wealthy Nordhavn in 2020, and the next confirmed line — the M5, opening 2036 — serves a new waterfront development on the opposite side of the city. The cycling deficit sits within a broader pattern of transport investment following wealth rather than correcting imbalance.',
            location: {
                center: [12.5200, 55.6850],
                zoom: 11,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                { layer: 'kvarter-income-2024-0xafhl', opacity: 0.5, duration: 2000 },
                { layer: 'noise-2022', opacity: 0, duration: 1000 },
                { layer: 'cykeldata-kk-9id0j6', opacity: 0, duration: 1000 },
                { layer: 'copenhagen-stations-09zavy', opacity: 1, duration: 2000 },
                { layer: 'copenhagen-metro-lines-cg960m', opacity: 0.9, duration: 2000 }
            ],
            onChapterExit: []
        },
        {
            id: 'chapter-7',
            alignment: 'left',
            hidden: false,
            title: 'The Question the Map Raises',
            image: '',
            description: 'These datasets tell a consistent spatial story: the neighborhoods with the highest traffic noise are also the lowest-income, the least served by protected cycling infrastructure. Though public transit options still appear to remain available, the residents most exposed to the city\'s worst noise are precisely those with the fewest means to escape it. These maps may serve as a basis for further exploration: how can investment in public transport infrastructure increase accessibility for lower income residents, and lower car usage to reduce health risk due to long-term exposure?',
            location: {
                center: [12.5200, 55.6850],
                zoom: 11,
                pitch: 20,
                bearing: 10
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                { layer: 'kvarter-income-2024-0xafhl', opacity: 0, duration: 2000 },
                { layer: 'noise-2022', opacity: 0, duration: 2000 },
                { layer: 'cykeldata-kk-9id0j6', opacity: 0, duration: 2000 },
                { layer: 'copenhagen-stations-09zavy', opacity: 0, duration: 2000 },
                { layer: 'copenhagen-metro-lines-cg960m', opacity: 0, duration: 2000 }
            ],
            onChapterExit: []
        }
    ]
};