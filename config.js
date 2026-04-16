var config = {
    style: 'mapbox://styles/lgevisser/cmn81yclp000y01s4c4uqgr4h',
    accessToken: 'pk.eyJ1IjoibGdldmlzc2VyIiwiYSI6ImNtbjg1eWQ3NzAwMDYycXIwZGNwY203aG8ifQ.F6Mg5_7KMpLVOgYQQMASMg',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: false,
    title: 'Income Inequality through the lens of Cycling Infrastructure and Traffic Noise',
    subtitle: 'Copenhagen, DK',
    byline: 'By Leo Gevisser, Julia Le, Jin Gyung Choi',
    footer: 'Sources: KK Statistikbank 2024 (income); Miljøstyrelsen / MiljøGIS 2022 (noise, EU Directive Lden); Københavns Kommune cykeldata (cycling infrastructure); OpenStreetMap via Geofabrik (transit stations and lines); Metroselskabet (metro planning data). Study area: Copenhagen Municipality, 67 neighborhoods.',
    chapters: [
        {
            id: 'chapter-1',
            alignment: 'left',
            hidden: false,
            title: 'A City Known for its Cycling',
            image: '',
            description: 'Copenhagen is one of the world\'s most bicycle-friendly cities. More than six in ten residents commute by bike. But aggregated figures obscure an uneven spatial reality. This map examines three datasets — income, traffic noise, and cycling infrastructure — to ask who benefits from Copenhagen\'s cycling city status, and who does not.',
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
            description: 'Copenhagen\'s 67 neighborhoods reveal a clear income gradient. The darkest blues mark the lowest disposable incomes — a northwest arc through Tingbjerg, Husum, Bellahøj, Bispebjerg, and Haraldsgade. The lightest tones mark the wealthiest areas along the eastern waterfront. Between the poorest and richest neighborhood, a 2.8x income gap.',
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
            alignment: 'right',
            hidden: false,
            title: 'Where the Noise Falls',
            image: './img/legend-noise.png',
            description: 'The 2022 strategic road noise map shows where Copenhagen\'s traffic generates its heaviest burden. The loudest zones trace arterial corridors radiating west and north from the city centre — cutting directly through the same lower-income neighborhoods visible beneath. Residents most exposed to traffic noise are disproportionately those with the fewest resources to escape it.',
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
            description: 'Copenhagen\'s cycling network is not uniform. It distinguishes between protected cycle tracks, Supercycle Highways, recreational green routes, and road-sharing connections without separation from cars. The highest-quality infrastructure concentrates around the city centre. The network thins toward the northwest — the same neighborhoods bearing the heaviest noise burden.',
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
            title: 'The Transit Gap',
            image: './img/legend-transit.png',
            description: 'The M3 circle line, opened in 2019, transformed central Copenhagen but does not reach the northwest. Tingbjerg, Husum, and Bellahøj have no metro at all. A Tingbjerg extension is under investigation but unfunded and unscheduled. Meanwhile, the M4 reached wealthy Nordhavn in 2020, and the next confirmed line — the M5, opening 2036 — serves a new waterfront development on the opposite side of the city. The cycling deficit sits within a broader pattern of transport investment following wealth rather than correcting imbalance.',
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
            description: 'Three datasets tell a consistent spatial story. The neighborhoods with the highest traffic noise are also the lowest-income, the least served by protected cycling infrastructure, and the furthest from rapid transit. The residents most exposed to the city\'s worst noise are precisely those with the fewest means to escape it.',
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
                { layer: 'kvarter-income-2024-0xafhl', opacity: 0.5, duration: 2000 },
                { layer: 'noise-2022', opacity: 0.4, duration: 2000 },
                { layer: 'cykeldata-kk-9id0j6', opacity: 0.7, duration: 2000 },
                { layer: 'copenhagen-stations-09zavy', opacity: 0.8, duration: 2000 },
                { layer: 'copenhagen-metro-lines-cg960m', opacity: 0.7, duration: 2000 }
            ],
            onChapterExit: []
        }
    ]
};