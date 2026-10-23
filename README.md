# FishWhistle

A mobile-friendly Battenkill River fishing planner. Choose a river area or use your current location, pick the way you want to fish, and get a seasonal hatch read, a weather-based outing window, nearby river-area suggestions, and a fly-tying materials list.

## Run locally

Location access requires `localhost` or HTTPS. From this folder, run:

```sh
python3 -m http.server 8000
```

Then open <http://localhost:8000>.

## Data and limitations

- Forecast and daylight: [Open-Meteo](https://open-meteo.com/).
- Streamflow: [USGS Water Services](https://waterservices.usgs.gov/), using the Arlington, VT (`01329000`) or Battenville, NY (`01329500`) gauge according to the selected area (or the nearest of the two after using GPS).
- Hatch suggestions are a general seasonal guide, not live insect observations. Timing varies by reach, elevation, and weather.
- The five results are river-area suggestions, not confirmed public access points. Check state access maps, landowner permissions, and current fishing regulations before visiting.
- Tying-video links open a YouTube search, prioritizing Tim Flagler in the search terms. The app does not claim that a specific video has been verified.
- Forecasts, river gauges, seasonal patterns, and recommendations are informational only. Check current conditions and local advisories; do not wade unsafe or rising water.

The app is a static site with no package install or build step. It requests location only after the user presses the location button.
