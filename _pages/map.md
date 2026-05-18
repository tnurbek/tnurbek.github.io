---
layout: page
permalink: /map/
title: map
description: Travel map
nav: false
nav_order: 8
---

<div class="flat-map-page">
  <p class="flat-map-intro">
    Map view: visited countries in blue, unvisited countries in white, black borders.
  </p>
  <div class="flat-map-wrap">
    <svg id="flat-world-map" class="flat-world-map" viewBox="0 0 1200 640" aria-label="Visited countries map"></svg>
  </div>
</div>

<style>
  .flat-map-page {
    max-width: 100%;
  }

  .flat-map-intro {
    margin-bottom: 0.65rem;
    color: var(--global-text-color-light);
  }

  .flat-map-wrap {
    width: 100%;
    border: 0;
    background: #ffffff;
  }

  .flat-world-map {
    display: block;
    width: 100%;
    height: auto;
    min-height: 340px;
    background: #ffffff;
    border: 1px solid #111111;
    border-radius: 8px;
  }

  .flat-country {
    stroke: #111111;
    stroke-width: 0.8;
    vector-effect: non-scaling-stroke;
  }

  .flat-city {
    stroke: #111111;
    stroke-width: 1.2;
    vector-effect: non-scaling-stroke;
  }
</style>

<script src="https://cdn.jsdelivr.net/npm/d3@7/dist/d3.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/topojson-client@3/dist/topojson-client.min.js"></script>
<script>
  window.addEventListener('load', () => {
    const travelData = {{ site.data.travel_map | jsonify }};
    const visitedCountries = Array.isArray(travelData && travelData.visited_countries)
      ? travelData.visited_countries
      : [];
    const visitedPlaces = Array.isArray(travelData && travelData.visited_places) ? travelData.visited_places : [];
    const svg = d3.select('#flat-world-map');
    const width = 1200;
    const height = 640;
    const worldDataUrl = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

    const normalizeText = (value) =>
      String(value || '')
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9]/g, '');

    const countryAliases = {
      us: 'unitedstatesofamerica',
      usa: 'unitedstatesofamerica',
      unitedstates: 'unitedstatesofamerica',
      uae: 'unitedarabemirates',
      republicofkorea: 'southkorea',
      korea: 'southkorea',
    };

    const normalizeCountry = (value) => {
      const normalized = normalizeText(value);
      return countryAliases[normalized] || normalized;
    };

    const visitedCountrySet = new Set(
      visitedCountries
        .concat(visitedPlaces.map((place) => place.country))
        .map(normalizeCountry)
        .filter(Boolean)
    );

    const accentColor =
      getComputedStyle(document.documentElement).getPropertyValue('--global-theme-color').trim() || '#1d4ed8';
    const cityMarkerColor = '#c77a1f';

    const draw = async () => {
      try {
        const topology = await d3.json(worldDataUrl);
        const features = topojson.feature(topology, topology.objects.countries).features.filter((feature) => {
          const props = feature && feature.properties ? feature.properties : {};
          const name = props.name || props.NAME || props.admin || '';
          return name !== 'Antarctica';
        });

        const geoCollection = { type: 'FeatureCollection', features };
        const projection = d3.geoNaturalEarth1().fitExtent(
          [
            [10, 12],
            [width - 10, height - 12],
          ],
          geoCollection
        );
        const path = d3.geoPath(projection);

        svg
          .append('g')
          .selectAll('path')
          .data(features)
          .join('path')
          .attr('class', 'flat-country')
          .attr('d', path)
          .attr('fill', (feature) => {
            const props = feature && feature.properties ? feature.properties : {};
            const name = props.name || props.NAME || props.admin || '';
            return visitedCountrySet.has(normalizeCountry(name)) ? accentColor : '#ffffff';
          })
          .append('title')
          .text((feature) => {
            const props = feature && feature.properties ? feature.properties : {};
            return props.name || props.NAME || props.admin || '';
          });

        const markerData = visitedPlaces
          .map((place) => {
            const lat = Number(place.latitude);
            const lon = Number(place.longitude);
            if (!Number.isFinite(lat) || !Number.isFinite(lon)) return null;
            const point = projection([lon, lat]);
            if (!point) return null;
            return {
              x: point[0],
              y: point[1],
              city: place.city || 'City',
              country: place.country || 'Country',
              event: place.event || '',
              date: place.date || '',
            };
          })
          .filter(Boolean);

        svg
          .append('g')
          .selectAll('circle')
          .data(markerData)
          .join('circle')
          .attr('class', 'flat-city')
          .attr('cx', (d) => d.x)
          .attr('cy', (d) => d.y)
          .attr('r', 4)
          .attr('fill', cityMarkerColor)
          .append('title')
          .text((d) => `${d.city}, ${d.country}${d.event ? ` - ${d.event}` : ''}${d.date ? ` (${d.date})` : ''}`);
      } catch (error) {
        console.error(error);
      }
    };

    draw();
  });
</script>
