var config = {
    style: 'mapbox://styles/chuochuo3/clucnfptz015x01mj149ob2rl/draft',
    accessToken: 'pk.eyJ1IjoiY2h1b2NodW8zIiwiYSI6ImNsc2IxYWxjMDA3bDQyanF1c3prcjZ4ZWsifQ.37PnXDhAAUKZUCNjtQggvw',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    
    chapters: [
        {
            id: 'first-container',
            alignment: 'left',
            hidden: false,
            title: 'Tranportation',
            description: 'transportation descrition',
            location: {
                center: [-0.12750, 51.51061],
                zoom: 10.6,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'trp',
                    opacity: 1,
                    duration: 0
                },
                {
                    layer: 'park',
                    opacity: 0,
                    duration: 0             
                },
                {
                    layer: 'crr',
                    opacity: 0,
                    duration: 0                
                }
            ],
            onChapterExit: [
                {
                    layer: 'trp',
                    opacity: 0
                },
                {
                    layer: 'park',
                    opacity: 1,
                    duration: 5000                
                },
                {
                    layer: 'crr',
                    opacity: 0                
                }
            ]
        },
        {
            id: 'second-container',
            alignment: 'right',
            hidden: false,
            title: 'Park',
            description: 'Park description',
            location: {
                center: [-0.12750, 51.51061],
                zoom: 10.6,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'trp',
                    opacity: 0,
                    duration: 2000
                },
                {
                    layer: 'park',
                    opacity: 1,
                    duration: 5000
                },
                {
                    layer: 'crr',
                    opacity: 0,
                    duration: 0             
                }
            ],
            onChapterExit: [
                {
                    layer: 'trp',
                    opacity: 1
                },
                {
                    layer: 'park',
                    opacity: 0,
                    duration: 1000                
                },
                {
                    layer: 'crr',
                    opacity: 0,
                    duration: 0               
                }
            ],
        },
        {
            id: 'third-container',
            alignment: 'left',
            hidden: false,
            title: 'Crime Rate',
            description: 'Crime rate description',
            location: {
                center: [-0.12750, 51.51061],
                zoom: 10.6,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'trp',
                    opacity: 0,
                    duration: 5000                              
                },
                {
                    layer: 'park',
                    opacity: 0,
                    duration: 1000                              
                },
                {
                    layer: 'crr',
                    opacity: 1,
                    duration: 2000              
                }
            ],
            onChapterExit: [
                {
                    layer: 'trp',
                    opacity: 0
                },
                {
                    layer: 'park',
                    opacity: 1                
                },
                {
                    layer: 'crr',
                    opacity: 0                
                }
            ]
        }
    ]
};