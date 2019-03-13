// const maps = [GetMap, GetMap2, GetMap3, GetMap4];

function GetMap() {
    let map = new Microsoft.Maps.Map('#myMap1', {
        center: new Microsoft.Maps.Location(35.663055, 139.711953),
        zoom: 14 //Location center position
    });

    //Get MAP Infomation
    let center = map.getCenter();

    //Create custom Pushpin
    let pin = new Microsoft.Maps.Pushpin(center, {
        color: 'red', //Color
        draggable: true, //MouseDraggable
        enableClickedStyle: true, //Click
        enableHoverStyle: true, //MouseOver
        visible: true //show/hide
    });

    //Add the pushpin to the map
    map.entities.push(pin);



    let map2 = new Microsoft.Maps.Map('#myMap2', {
        center: new Microsoft.Maps.Location(35.6696, 139.763848),
        zoom: 14 //Location center position
    });

    //Get MAP Infomation
    let center2 = map2.getCenter();

    //Create custom Pushpin
    let pin2 = new Microsoft.Maps.Pushpin(center2, {
        color: 'blue', //Color
        draggable: true, //MouseDraggable
        enableClickedStyle: true, //Click
        enableHoverStyle: true, //MouseOver
        visible: true //show/hide
    });

    //Add the pushpin to the map
    map2.entities.push(pin2);


    let map3 = new Microsoft.Maps.Map('#myMap3', {
        center: new Microsoft.Maps.Location(35.6696, 139.763848),
        zoom: 14 //Location center position
    });

    //Get MAP Infomation
    let center3 = map3.getCenter();

    //Create custom Pushpin
    let pin3 = new Microsoft.Maps.Pushpin(center3, {
        color: 'orange', //Color
        draggable: true, //MouseDraggable
        enableClickedStyle: true, //Click
        enableHoverStyle: true, //MouseOver
        visible: true //show/hide
    });

    //Add the pushpin to the map
    map3.entities.push(pin3);


    let map4 = new Microsoft.Maps.Map('#myMap4', {
        center: new Microsoft.Maps.Location(35.6696, 139.763848),
        zoom: 14 //Location center position
    });

    //Get MAP Infomation
    let center4 = map4.getCenter();

    //Create custom Pushpin
    let pin4 = new Microsoft.Maps.Pushpin(center4, {
        color: 'purple', //Color
        draggable: true, //MouseDraggable
        enableClickedStyle: true, //Click
        enableHoverStyle: true, //MouseOver
        visible: true //show/hide
    });

    //Add the pushpin to the map
    map4.entities.push(pin4);
}