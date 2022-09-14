var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Ephemeroptera_Polymitarcyidae_1 = new ol.format.GeoJSON();
var features_Ephemeroptera_Polymitarcyidae_1 = format_Ephemeroptera_Polymitarcyidae_1.readFeatures(json_Ephemeroptera_Polymitarcyidae_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ephemeroptera_Polymitarcyidae_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ephemeroptera_Polymitarcyidae_1.addFeatures(features_Ephemeroptera_Polymitarcyidae_1);
var lyr_Ephemeroptera_Polymitarcyidae_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ephemeroptera_Polymitarcyidae_1, 
                style: style_Ephemeroptera_Polymitarcyidae_1,
                interactive: true,
    title: 'Ephemeroptera_Polymitarcyidae<br />\
    <img src="styles/legend/Ephemeroptera_Polymitarcyidae_1_0.png" /> Good<br />\
    <img src="styles/legend/Ephemeroptera_Polymitarcyidae_1_1.png" /> Bad<br />'
        });
var format_Ephemeroptera_Ephemerythidae_2 = new ol.format.GeoJSON();
var features_Ephemeroptera_Ephemerythidae_2 = format_Ephemeroptera_Ephemerythidae_2.readFeatures(json_Ephemeroptera_Ephemerythidae_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ephemeroptera_Ephemerythidae_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ephemeroptera_Ephemerythidae_2.addFeatures(features_Ephemeroptera_Ephemerythidae_2);
var lyr_Ephemeroptera_Ephemerythidae_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ephemeroptera_Ephemerythidae_2, 
                style: style_Ephemeroptera_Ephemerythidae_2,
                interactive: true,
    title: 'Ephemeroptera_Ephemerythidae<br />\
    <img src="styles/legend/Ephemeroptera_Ephemerythidae_2_0.png" /> Good<br />\
    <img src="styles/legend/Ephemeroptera_Ephemerythidae_2_1.png" /> Bad<br />'
        });
var format_Ephemeroptera_Chironomidae_3 = new ol.format.GeoJSON();
var features_Ephemeroptera_Chironomidae_3 = format_Ephemeroptera_Chironomidae_3.readFeatures(json_Ephemeroptera_Chironomidae_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ephemeroptera_Chironomidae_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ephemeroptera_Chironomidae_3.addFeatures(features_Ephemeroptera_Chironomidae_3);
var lyr_Ephemeroptera_Chironomidae_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ephemeroptera_Chironomidae_3, 
                style: style_Ephemeroptera_Chironomidae_3,
                interactive: true,
    title: 'Ephemeroptera_Chironomidae<br />\
    <img src="styles/legend/Ephemeroptera_Chironomidae_3_0.png" /> Bad<br />\
    <img src="styles/legend/Ephemeroptera_Chironomidae_3_1.png" /> Good<br />'
        });
var format_Ephemeroptera_Caenidae_4 = new ol.format.GeoJSON();
var features_Ephemeroptera_Caenidae_4 = format_Ephemeroptera_Caenidae_4.readFeatures(json_Ephemeroptera_Caenidae_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ephemeroptera_Caenidae_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ephemeroptera_Caenidae_4.addFeatures(features_Ephemeroptera_Caenidae_4);
var lyr_Ephemeroptera_Caenidae_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ephemeroptera_Caenidae_4, 
                style: style_Ephemeroptera_Caenidae_4,
                interactive: true,
    title: 'Ephemeroptera_Caenidae<br />\
    <img src="styles/legend/Ephemeroptera_Caenidae_4_0.png" /> Good<br />\
    <img src="styles/legend/Ephemeroptera_Caenidae_4_1.png" /> Bad<br />'
        });
var format_Ephemeroptera_Baetidae_5 = new ol.format.GeoJSON();
var features_Ephemeroptera_Baetidae_5 = format_Ephemeroptera_Baetidae_5.readFeatures(json_Ephemeroptera_Baetidae_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ephemeroptera_Baetidae_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ephemeroptera_Baetidae_5.addFeatures(features_Ephemeroptera_Baetidae_5);
var lyr_Ephemeroptera_Baetidae_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ephemeroptera_Baetidae_5, 
                style: style_Ephemeroptera_Baetidae_5,
                interactive: true,
    title: 'Ephemeroptera_Baetidae<br />\
    <img src="styles/legend/Ephemeroptera_Baetidae_5_0.png" /> Good<br />\
    <img src="styles/legend/Ephemeroptera_Baetidae_5_1.png" /> Bad<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_Ephemeroptera_Polymitarcyidae_1.setVisible(true);lyr_Ephemeroptera_Ephemerythidae_2.setVisible(true);lyr_Ephemeroptera_Chironomidae_3.setVisible(true);lyr_Ephemeroptera_Caenidae_4.setVisible(true);lyr_Ephemeroptera_Baetidae_5.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Ephemeroptera_Polymitarcyidae_1,lyr_Ephemeroptera_Ephemerythidae_2,lyr_Ephemeroptera_Chironomidae_3,lyr_Ephemeroptera_Caenidae_4,lyr_Ephemeroptera_Baetidae_5];
lyr_Ephemeroptera_Polymitarcyidae_1.set('fieldAliases', {'waterBody': 'waterBody', 'year': 'year', 'eventDate': 'eventDate', 'locality': 'locality', 'decimalLatitude': 'decimalLatitude', 'decimalLongitude': 'decimalLongitude', 'order': 'order', 'family': 'family', 'subFamily': 'subFamily', 'genus': 'genus', 'specificEpithet': 'specificEpithet', 'scientificName': 'scientificName', 'organismQuantity': 'organismQuantity', 'Indicator': 'Indicator', });
lyr_Ephemeroptera_Ephemerythidae_2.set('fieldAliases', {'waterBody': 'waterBody', 'year': 'year', 'eventDate': 'eventDate', 'locality': 'locality', 'decimalLatitude': 'decimalLatitude', 'decimalLongitude': 'decimalLongitude', 'order': 'order', 'family': 'family', 'subFamily': 'subFamily', 'genus': 'genus', 'specificEpithet': 'specificEpithet', 'scientificName': 'scientificName', 'organismQuantity': 'organismQuantity', 'Indicator': 'Indicator', });
lyr_Ephemeroptera_Chironomidae_3.set('fieldAliases', {'waterBody': 'waterBody', 'year': 'year', 'eventDate': 'eventDate', 'locality': 'locality', 'decimalLatitude': 'decimalLatitude', 'decimalLongitude': 'decimalLongitude', 'order': 'order', 'family': 'family', 'subFamily': 'subFamily', 'genus': 'genus', 'specificEpithet': 'specificEpithet', 'scientificName': 'scientificName', 'organismQuantity': 'organismQuantity', 'Indicator': 'Indicator', });
lyr_Ephemeroptera_Caenidae_4.set('fieldAliases', {'waterBody': 'waterBody', 'year': 'year', 'eventDate': 'eventDate', 'locality': 'locality', 'decimalLatitude': 'decimalLatitude', 'decimalLongitude': 'decimalLongitude', 'order': 'order', 'family': 'family', 'subFamily': 'subFamily', 'genus': 'genus', 'specificEpithet': 'specificEpithet', 'scientificName': 'scientificName', 'organismQuantity': 'organismQuantity', 'Indicator': 'Indicator', });
lyr_Ephemeroptera_Baetidae_5.set('fieldAliases', {'waterBody': 'waterBody', 'year': 'year', 'eventDate': 'eventDate', 'locality': 'locality', 'decimalLatitude': 'decimalLatitude', 'decimalLongitude': 'decimalLongitude', 'order': 'order', 'family': 'family', 'subFamily': 'subFamily', 'genus': 'genus', 'specificEpithet': 'specificEpithet', 'scientificName': 'scientificName', 'organismQuantity': 'organismQuantity', 'Indicator': 'Indicator', });
lyr_Ephemeroptera_Polymitarcyidae_1.set('fieldImages', {'waterBody': 'TextEdit', 'year': 'Range', 'eventDate': 'TextEdit', 'locality': 'TextEdit', 'decimalLatitude': 'TextEdit', 'decimalLongitude': 'TextEdit', 'order': 'TextEdit', 'family': 'TextEdit', 'subFamily': 'TextEdit', 'genus': 'TextEdit', 'specificEpithet': 'TextEdit', 'scientificName': 'TextEdit', 'organismQuantity': 'TextEdit', 'Indicator': 'TextEdit', });
lyr_Ephemeroptera_Ephemerythidae_2.set('fieldImages', {'waterBody': 'TextEdit', 'year': 'Range', 'eventDate': 'DateTime', 'locality': 'TextEdit', 'decimalLatitude': 'TextEdit', 'decimalLongitude': 'TextEdit', 'order': 'TextEdit', 'family': 'TextEdit', 'subFamily': 'TextEdit', 'genus': 'TextEdit', 'specificEpithet': 'TextEdit', 'scientificName': 'TextEdit', 'organismQuantity': 'TextEdit', 'Indicator': 'TextEdit', });
lyr_Ephemeroptera_Chironomidae_3.set('fieldImages', {'waterBody': 'TextEdit', 'year': 'Range', 'eventDate': 'TextEdit', 'locality': 'TextEdit', 'decimalLatitude': 'TextEdit', 'decimalLongitude': 'TextEdit', 'order': 'TextEdit', 'family': 'TextEdit', 'subFamily': 'TextEdit', 'genus': 'TextEdit', 'specificEpithet': 'TextEdit', 'scientificName': 'TextEdit', 'organismQuantity': 'TextEdit', 'Indicator': 'TextEdit', });
lyr_Ephemeroptera_Caenidae_4.set('fieldImages', {'waterBody': 'TextEdit', 'year': 'Range', 'eventDate': 'TextEdit', 'locality': 'TextEdit', 'decimalLatitude': 'TextEdit', 'decimalLongitude': 'TextEdit', 'order': 'TextEdit', 'family': 'TextEdit', 'subFamily': 'TextEdit', 'genus': 'TextEdit', 'specificEpithet': 'TextEdit', 'scientificName': 'TextEdit', 'organismQuantity': 'TextEdit', 'Indicator': 'TextEdit', });
lyr_Ephemeroptera_Baetidae_5.set('fieldImages', {'waterBody': 'TextEdit', 'year': 'Range', 'eventDate': 'TextEdit', 'locality': 'TextEdit', 'decimalLatitude': 'TextEdit', 'decimalLongitude': 'TextEdit', 'order': 'TextEdit', 'family': 'TextEdit', 'subFamily': 'TextEdit', 'genus': 'TextEdit', 'specificEpithet': 'TextEdit', 'scientificName': 'TextEdit', 'organismQuantity': 'Range', 'Indicator': 'TextEdit', });
lyr_Ephemeroptera_Polymitarcyidae_1.set('fieldLabels', {'waterBody': 'no label', 'year': 'no label', 'eventDate': 'no label', 'locality': 'no label', 'decimalLatitude': 'no label', 'decimalLongitude': 'no label', 'order': 'no label', 'family': 'no label', 'subFamily': 'no label', 'genus': 'no label', 'specificEpithet': 'no label', 'scientificName': 'no label', 'organismQuantity': 'no label', 'Indicator': 'no label', });
lyr_Ephemeroptera_Ephemerythidae_2.set('fieldLabels', {'waterBody': 'no label', 'year': 'no label', 'eventDate': 'no label', 'locality': 'no label', 'decimalLatitude': 'no label', 'decimalLongitude': 'no label', 'order': 'no label', 'family': 'no label', 'subFamily': 'no label', 'genus': 'no label', 'specificEpithet': 'no label', 'scientificName': 'no label', 'organismQuantity': 'no label', 'Indicator': 'no label', });
lyr_Ephemeroptera_Chironomidae_3.set('fieldLabels', {'waterBody': 'no label', 'year': 'no label', 'eventDate': 'no label', 'locality': 'no label', 'decimalLatitude': 'no label', 'decimalLongitude': 'no label', 'order': 'no label', 'family': 'no label', 'subFamily': 'no label', 'genus': 'no label', 'specificEpithet': 'no label', 'scientificName': 'no label', 'organismQuantity': 'no label', 'Indicator': 'no label', });
lyr_Ephemeroptera_Caenidae_4.set('fieldLabels', {'waterBody': 'no label', 'year': 'no label', 'eventDate': 'no label', 'locality': 'no label', 'decimalLatitude': 'no label', 'decimalLongitude': 'no label', 'order': 'no label', 'family': 'no label', 'subFamily': 'no label', 'genus': 'no label', 'specificEpithet': 'no label', 'scientificName': 'no label', 'organismQuantity': 'no label', 'Indicator': 'no label', });
lyr_Ephemeroptera_Baetidae_5.set('fieldLabels', {'waterBody': 'no label', 'year': 'no label', 'eventDate': 'no label', 'locality': 'no label', 'decimalLatitude': 'no label', 'decimalLongitude': 'no label', 'order': 'no label', 'family': 'no label', 'subFamily': 'no label', 'genus': 'no label', 'specificEpithet': 'no label', 'scientificName': 'no label', 'organismQuantity': 'no label', 'Indicator': 'no label', });
lyr_Ephemeroptera_Baetidae_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});