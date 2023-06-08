"use client";

import { MAP_LEVELS_COLORS } from '@utils/constants';
import { getStatsLevel, getMaxInfected } from '@utils/statsData';
// import {geoJSONData }from '@utils/voivodeships_min';
import geoJSONData from '@utils/voivodeships_min.json';
import { MapContainer, GeoJSON } from 'react-leaflet';
import { GeoJsonObject } from 'geojson';
import { StructuredEntry } from '@utils/statsData';

// import 'leaflet/dist/leaflet.css';


const CovidMap = ({ stats }: {stats: StructuredEntry} ): JSX.Element => {
    const mapStyle = {
        weight: 2,
        fullOpacity: 1
    };

    const onEachRegion = (region, layer) => {
        const regionStats = stats.regions.filter(
            (stats) => stats.name === region.properties.nazwa
        )[0];
        const totalInfected = regionStats.totalInfected;
        const statLevel = getStatsLevel(
            totalInfected,
            getMaxInfected(stats.regions)
        );
        layer.options.fillColor = MAP_LEVELS_COLORS[statLevel];
        const name = region.properties.nazwa;
        layer.bindPopup(`${name}`);
        layer.bindTooltip(`${totalInfected}`, {
            permanent: true,
            opacity: 0.75
        });
    };
    return (
        <div className="fixed h-screen w-full -z-10 vertical_map_gradient">
            <MapContainer
                style={{ height: '100vh', width: '100%' }}
                zoom={5.5}
                maxZoom={5.5}
                minZoom={5.5}
                zoomControl={false}
                center={[48.629675, 19.21223]}
            >
                <GeoJSON
                    style={mapStyle}
                    data={geoJSONData as GeoJsonObject}
                    onEachFeature={onEachRegion}
                ></GeoJSON>
            </MapContainer>
        </div>
    );
};

export default CovidMap;
