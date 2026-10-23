const AREAS = {
  "west-arlington": { name: "West Arlington, Vermont", latitude: 43.071, longitude: -73.192, gauge: "north" },
  arlington: { name: "Arlington, Vermont", latitude: 43.074, longitude: -73.156, gauge: "north" },
  sunderland: { name: "Sunderland, Vermont", latitude: 43.092, longitude: -73.111, gauge: "north" },
  shushan: { name: "Shushan, New York", latitude: 43.103, longitude: -73.261, gauge: "south" },
  greenwich: { name: "Greenwich, New York", latitude: 43.092, longitude: -73.493, gauge: "south" }
};

const GAUGES = {
  north: { site: "01329000", name: "Batten Kill at Arlington", latitude: 43.076189, longitude: -73.156772 },
  south: { site: "01329500", name: "Batten Kill at Battenville", latitude: 43.100528, longitude: -73.431222 }
};

const TIGHTLINEVIDEO_CHANNEL = "https://www.youtube.com/@Tightlinevideo";

const REACHES = [
  { name: "West Arlington reach", area: "West Arlington", latitude: 43.071, longitude: -73.192, state: "Vermont" },
  { name: "Arlington reach", area: "Arlington", latitude: 43.074, longitude: -73.156, state: "Vermont" },
  { name: "Sunderland reach", area: "Sunderland", latitude: 43.092, longitude: -73.111, state: "Vermont" },
  { name: "Shushan reach", area: "Shushan", latitude: 43.103, longitude: -73.261, state: "New York" },
  { name: "Greenwich reach", area: "Greenwich", latitude: 43.092, longitude: -73.493, state: "New York" }
];

const TECHNIQUES = {
  dry: {
    label: "Dry fly fishing",
    window: "Late morning into the evening",
    reason: "Stay focused on surface activity. Look for rising fish and visible insects before changing patterns; a quiet surface can mean waiting for a hatch, not changing your technique.",
    flies: [
      { title: "Blue-Winged Olive", description: "A useful small mayfly imitation for cool, overcast days and fall activity. Match the size you actually see on the water.", materials: ["Hook: dry-fly hook, sizes 16–20", "Olive dubbing and fine olive thread", "Medium dun hackle", "Gray or olive CDC / wing material"], query: "Blue Winged Olive fly tying" },
      { title: "Parachute Adams", description: "A dependable searching dry when you need a visible, general mayfly profile. Adjust size to the naturals.", materials: ["Hook: dry-fly hook, sizes 14–20", "Gray dubbing and fine thread", "Grizzly hackle", "White post material"], query: "Parachute Adams tying" },
      { title: "Elk Hair Caddis", description: "A buoyant caddis pattern for evenings and active caddis on the water.", materials: ["Hook: dry-fly hook, sizes 14–18", "Olive or tan dubbing", "Brown hackle", "Elk hair wing"], query: "Elk Hair Caddis tying" },
      { title: "Sulphur Dun", description: "A pale mayfly pattern for the warmer months when sulphurs are present. Confirm color and size at the stream.", materials: ["Hook: dry-fly hook, sizes 14–18", "Pale yellow dubbing", "Light ginger hackle", "Light dun wing material"], query: "Sulphur dry fly tying" }
    ]
  },
  "dry-dropper": {
    label: "Dry-dropper",
    window: "Late morning through afternoon",
    reason: "Use a buoyant dry as both an attractor and an indicator, with a small nymph underneath. Keep the dropper short in shallow runs and avoid dragging the rig through rising fish.",
    flies: [
      { title: "Parachute Adams + Pheasant Tail", description: "A visible mayfly dry paired with a slim nymph to cover two feeding lanes without abandoning your dry-dropper approach.", materials: ["Dry: hook sizes 14–18, gray dubbing, grizzly hackle, white post", "Dropper: nymph hook sizes 16–20, pheasant tail fibers", "Copper wire, peacock herl, fine thread", "Optional small bead for the nymph"], query: "Pheasant Tail nymph tying" },
      { title: "Elk Hair Caddis + Hare's Ear", description: "A buoyant caddis imitation above a buggy nymph. A practical searching pair when you see no clear hatch.", materials: ["Dry: hook sizes 14–18, dubbing, hackle, elk hair", "Dropper: nymph hook sizes 14–18", "Hare's ear dubbing, gold wire, pheasant tail", "Fine thread and optional bead"], query: "Hare's Ear nymph tying" },
      { title: "Stimulator + Pheasant Tail", description: "A sturdy dry-dropper combination for broken water, with an attractor dry above a more natural nymph.", materials: ["Dry: hook sizes 10–14, orange/yellow dubbing, hackle", "Elk hair wing and fine wire", "Dropper: nymph hook sizes 14–18", "Pheasant tail, copper wire, peacock herl"], query: "Stimulator fly tying" },
      { title: "Parachute Adams + Zebra Midge", description: "A subtle mayfly-style surface fly with a small, simple subsurface midge for slower pools.", materials: ["Dry: hook sizes 16–20, gray dubbing and hackle", "White post material", "Dropper: midge hook sizes 18–22", "Black thread, fine silver wire, optional bead"], query: "Zebra Midge tying" }
    ]
  },
  streamer: {
    label: "Streamer fishing",
    window: "Early and late light; cloudy hours",
    reason: "Keep the streamer plan. Lower light and cloud cover can help, while higher or off-color water may call for a larger silhouette and slower presentation. Use caution around rising flows.",
    flies: [
      { title: "Woolly Bugger", description: "A versatile searching streamer to swing or strip through deeper seams and pools. Start with a natural olive or black profile.", materials: ["Streamer hook, sizes 6–10", "Marabou tail and chenille body", "Palmered saddle hackle", "Optional brass or tungsten bead"], query: "Woolly Bugger fly tying" },
      { title: "Muddler Minnow", description: "A classic baitfish and attractor pattern that can be fished across current or near structure.", materials: ["Streamer hook, sizes 6–10", "Mottled turkey or mallard wing", "Gold tinsel and brown hackle", "Deer-hair head and natural dubbing"], query: "Muddler Minnow fly tying" },
      { title: "Sculpzilla", description: "A compact sculpin-style streamer for a deliberate retrieve near the bottom. Check hook rules before fishing.", materials: ["Streamer hook, sizes 4–8", "Olive or brown marabou", "Sculpin-style head or dubbing", "Flash, wire, and natural hackle"], query: "sculpin streamer fly tying" },
      { title: "Black Woolly Bugger", description: "A darker silhouette can be easier to track in stained water or low light; reduce weight in shallow runs.", materials: ["Streamer hook, sizes 6–10", "Black marabou tail", "Black chenille and saddle hackle", "Optional cone or bead"], query: "Woolly Bugger fly tying" }
    ]
  },
  wet: {
    label: "Swinging wet flies",
    window: "Morning through the last light",
    reason: "Look for current seams and soft edges where a wet fly can swing naturally. A gentle swing is the plan; keep the fly unweighted or lightly weighted unless depth calls for more.",
    flies: [
      { title: "Partridge and Orange", description: "A classic soft-hackle wet fly with a sparse profile that comes alive as it swings.", materials: ["Wet-fly hook, sizes 14–18", "Orange silk or fine thread", "Sparse partridge hackle", "Optional touch of dubbed thorax"], query: "Partridge and Orange soft hackle tying" },
      { title: "Partridge and Green", description: "A versatile soft-hackle pattern for a searching swing when there is no single hatch to match.", materials: ["Wet-fly hook, sizes 14–18", "Green silk or fine thread", "Sparse partridge hackle", "Peacock herl thorax"], query: "soft hackle wet fly tying" },
      { title: "March Brown Wet Fly", description: "A traditional wet-fly profile to swing when larger mayflies are active or as a general attractor.", materials: ["Wet-fly hook, sizes 10–14", "Brown dubbing and thread", "Mallard or wood-duck wing", "Soft hen hackle"], query: "wet fly tying" },
      { title: "Pheasant Tail Soft Hackle", description: "A slim mayfly nymph profile with mobile hackle, well suited to a controlled swing.", materials: ["Wet-fly hook, sizes 14–18", "Pheasant tail fibers", "Copper wire and fine thread", "Sparse partridge or hen hackle"], query: "Pheasant Tail soft hackle tying" }
    ]
  },
  euro: {
    label: "Euro-nymphing",
    window: "Mid-morning through afternoon",
    reason: "Work the subsurface with a controlled contact drift. Focus on depth, speed, and clean drifts through likely holding water; use the lighter setup that still reaches the target lane.",
    flies: [
      { title: "Frenchie", description: "A compact, buggy nymph with a hot spot that makes a useful point fly in a two-fly European nymph rig.", materials: ["Jig hook, sizes 14–18", "Slotted tungsten bead", "Pheasant tail fibers and fine wire", "Peacock herl and bright thread collar"], query: "Frenchie nymph tying" },
      { title: "Perdigon", description: "A slim, fast-sinking pattern for reaching deeper lanes with minimal drag.", materials: ["Jig hook, sizes 14–18", "Slotted tungsten bead", "Fine thread body and rib", "UV resin or clear coat"], query: "Perdigon nymph tying" },
      { title: "Pheasant Tail Jig", description: "A simple natural nymph profile on a jig hook, useful as a point or dropper fly.", materials: ["Jig hook, sizes 14–18", "Slotted tungsten bead", "Pheasant tail fibers", "Copper wire and fine thread"], query: "Pheasant Tail nymph tying" },
      { title: "Rainbow Warrior", description: "A small, reflective nymph to add a touch of flash when a natural pattern is not drawing interest.", materials: ["Jig hook, sizes 16–20", "Slotted tungsten bead", "Pearl tinsel body", "Red thread collar and fine wire"], query: "Rainbow Warrior nymph tying" }
    ]
  }
};

const HATCHES = {
  winter: { name: "Midges; occasional winter stoneflies", season: "WINTER READ" },
  spring: { name: "Blue-winged olives, Hendricksons, early caddis", season: "SPRING READ" },
  summer: { name: "Sulphurs, caddis, terrestrials", season: "SUMMER READ" },
  fall: { name: "Blue-winged olives, caddis, midges", season: "FALL READ" }
};

const $ = (selector) => document.querySelector(selector);
const areaSelect = $("#area-select");
const tripDate = $("#trip-date");
const locationStatus = $("#location-status");
let currentOrigin = null;
let planRequestId = 0;
let latestWeather = null;
let latestFlow = null;

function localDateString(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function seasonFor(month) {
  if (month === 11 || month <= 1) return HATCHES.winter;
  if (month >= 2 && month <= 4) return HATCHES.spring;
  if (month >= 5 && month <= 7) return HATCHES.summer;
  return HATCHES.fall;
}

function selectedTechnique() {
  return $('input[name="technique"]:checked').value;
}

function selectedFly(technique, month) {
  const flies = TECHNIQUES[technique].flies;
  const seasonalIndex = month >= 2 && month <= 4 ? 1 : month >= 5 && month <= 7 ? 2 : month >= 8 && month <= 10 ? 0 : 3;
  return flies[seasonalIndex];
}

function localRiverHour() {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    hourCycle: "h23"
  }).formatToParts(new Date());
  const values = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  return `${values.year}-${values.month}-${values.day}T${values.hour}`;
}

function haversineMiles(a, b) {
  const radians = (degrees) => degrees * Math.PI / 180;
  const latitudeDelta = radians(b.latitude - a.latitude);
  const longitudeDelta = radians(b.longitude - a.longitude);
  const value = Math.sin(latitudeDelta / 2) ** 2
    + Math.cos(radians(a.latitude)) * Math.cos(radians(b.latitude)) * Math.sin(longitudeDelta / 2) ** 2;
  return 3958.8 * 2 * Math.atan2(Math.sqrt(value), Math.sqrt(1 - value));
}

function renderReaches(origin) {
  const sorted = REACHES.map((reach) => ({ ...reach, distance: haversineMiles(origin, reach) }))
    .sort((a, b) => a.distance - b.distance);
  $("#location-list").innerHTML = sorted.map((reach, index) => {
    const query = encodeURIComponent(`${reach.area} Battenkill River ${reach.state}`);
    const mapUrl = `https://www.google.com/maps/search/?api=1&query=${query}`;
    return `<li><span class="location-number">${index + 1}</span><span class="location-info"><strong>${reach.name}</strong><small>${reach.state} · river area, verify access</small></span><span class="location-distance">${reach.distance.toFixed(1)} mi</span><a class="location-distance" href="${mapUrl}" target="_blank" rel="noreferrer" aria-label="Open map for ${reach.name}">↗</a></li>`;
  }).join("");
}

function weatherCodeLabel(code) {
  if (code === 0) return "Clear";
  if (code === 1 || code === 2) return "Partly cloudy";
  if (code === 3) return "Overcast";
  if (code >= 45 && code <= 48) return "Fog";
  if (code >= 51 && code <= 67) return "Drizzle / rain";
  if (code >= 71 && code <= 77) return "Snow";
  if (code >= 80 && code <= 82) return "Showers";
  if (code >= 95) return "Thunderstorms";
  return "Variable";
}

function formatHour(isoTime) {
  return new Date(isoTime).toLocaleTimeString([], { hour: "numeric" });
}

function hourInDaylight(hour, sunrise, sunset) {
  const hourNumber = Number(hour.slice(11, 13));
  return hour >= sunrise && hour <= sunset && hourNumber >= 6 && hourNumber <= 20;
}

function chooseWeatherWindow(weather, technique, tripDateValue) {
  const day = weather.hourly.time.map((time, index) => ({
    time,
    temperature: weather.hourly.temperature_2m[index],
    rain: weather.hourly.precipitation_probability[index] ?? 0,
    wind: weather.hourly.wind_speed_10m[index] ?? 0,
    code: weather.hourly.weather_code[index] ?? -1
  })).filter((hour) => hour.time.startsWith(tripDateValue));
  const sunrise = weather.daily.sunrise[0];
  const sunset = weather.daily.sunset[0];
  const candidates = day.filter((hour) => hourInDaylight(hour.time, sunrise, sunset));
  if (candidates.length === 0) return null;

  const techniquePreference = { dry: [10, 16], "dry-dropper": [9, 16], streamer: [6, 10, 17, 18, 19], wet: [7, 11, 16, 18], euro: [9, 15] }[technique];
  const scored = candidates.map((hour) => {
    const hourNumber = Number(hour.time.slice(11, 13));
    let score = 0;
    if (techniquePreference.some((preferred) => Math.abs(preferred - hourNumber) <= 1)) score += 3;
    if (technique === "dry" && (hour.code === 3 || hour.code === 2)) score += 1;
    if (technique === "streamer" && (hour.code === 2 || hour.code === 3)) score += 2;
    if (technique === "euro" && hour.temperature >= 8 && hour.temperature <= 19) score += 1;
    score -= Math.max(0, hour.wind - 18) / 10;
    score -= hour.rain >= 75 ? 1 : 0;
    return { ...hour, score };
  }).sort((a, b) => b.score - a.score);
  const best = scored[0];
  const next = candidates.find((hour) => new Date(hour.time).getTime() > new Date(best.time).getTime());
  const end = next ? formatHour(next.time) : formatHour(sunset);
  return { start: formatHour(best.time), end, weather: best, sunrise, sunset };
}

function flowContextNote(flow) {
  if (!flow) return "Checking the nearest gauge; if it is stale or unavailable, timing uses forecast and daylight only.";
  if (flow.status === "current") {
    return `The nearest USGS gauge reports ${Number(flow.value).toLocaleString()} cfs. No reach-specific safe-flow cutoff is applied; confirm local conditions before wading.`;
  }
  return "The nearest USGS gauge is stale or unavailable, so timing uses forecast and daylight only.";
}

function updateRecommendation(techniqueKey, tripDateValue, weather, flow = latestFlow) {
  const technique = TECHNIQUES[techniqueKey];
  const date = new Date(`${tripDateValue}T12:00:00`);
  const hatch = seasonFor(date.getMonth());
  $("#season-badge").textContent = hatch.season;
  $("#hatch-value").textContent = hatch.name;
  const window = weather ? chooseWeatherWindow(weather, techniqueKey, tripDateValue) : null;
  if (window) {
    $("#window-title").textContent = `${window.start} – ${window.end} looks promising`;
    const forecast = weatherCodeLabel(window.weather.code).toLowerCase();
    $("#window-reason").textContent = `${technique.window}. Forecast near your selected river area is ${forecast}, ${Math.round(window.weather.temperature)}°C, with ${Math.round(window.weather.wind)} km/h wind. ${flowContextNote(flow)} Treat this as a planning hint, not a fishing guarantee.`;
    $("#daylight-value").textContent = `${formatHour(window.sunrise)} – ${formatHour(window.sunset)}`;
    $("#daylight-detail").textContent = "Local sunrise / sunset";
  } else {
    $("#window-title").textContent = technique.window;
    $("#window-reason").textContent = `${technique.reason} Forecast timing is unavailable for this date, so this is a general seasonal suggestion. ${flowContextNote(flow)}`;
    $("#daylight-value").textContent = "Unavailable";
    $("#daylight-detail").textContent = "Forecast range may be limited";
  }
  const fly = selectedFly(techniqueKey, date.getMonth());
  $("#fly-title").textContent = fly.title;
  $("#fly-description").textContent = fly.description;
  $("#materials-count").textContent = `${fly.materials.length} ITEMS`;
  $("#materials-list").innerHTML = fly.materials.map((item) => `<li>${item}</li>`).join("");
  const videoSearch = new URL(`${TIGHTLINEVIDEO_CHANNEL}/search`);
  videoSearch.searchParams.set("query", fly.query);
  $("#video-link").href = videoSearch.href;
  $("#video-credit").textContent = "Tightlinevideo on YouTube";
}

async function loadWeather(origin, tripDateValue, requestId) {
  const url = new URL("https://api.open-meteo.com/v1/forecast");
  url.search = new URLSearchParams({
    latitude: origin.latitude,
    longitude: origin.longitude,
    hourly: "temperature_2m,precipitation_probability,wind_speed_10m,weather_code",
    daily: "sunrise,sunset",
    forecast_days: "7",
    timezone: "America/New_York"
  });
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Weather service returned ${response.status}`);
    const weather = await response.json();
    if (requestId !== planRequestId) return null;
    const tripDayIndex = weather.daily.time.indexOf(tripDateValue);
    const dailyTime = weather.hourly.time.findIndex((time) => time.startsWith(tripDateValue));
    if (dailyTime === -1 || tripDayIndex < 0) {
      latestWeather = null;
      $("#weather-value").textContent = "Not in forecast";
      $("#weather-detail").textContent = "Choose a date within 7 days";
      updateRecommendation(selectedTechnique(), tripDateValue, null, latestFlow);
      return null;
    }
    const currentHourIndex = Math.max(0, weather.hourly.time.findIndex((time) => time >= localRiverHour()));
    const index = tripDayIndex === 0 ? currentHourIndex : dailyTime;
    $("#weather-value").textContent = `${Math.round(weather.hourly.temperature_2m[index])}°C · ${weatherCodeLabel(weather.hourly.weather_code[index])}`;
    $("#weather-detail").textContent = `Precipitation ${weather.hourly.precipitation_probability[index] ?? "—"}% · wind ${Math.round(weather.hourly.wind_speed_10m[index])} km/h`;
    weather.daily.sunrise = [weather.daily.sunrise[tripDayIndex]];
    weather.daily.sunset = [weather.daily.sunset[tripDayIndex]];
    latestWeather = weather;
    updateRecommendation(selectedTechnique(), tripDateValue, latestWeather, latestFlow);
    return weather;
  } catch (error) {
    if (requestId !== planRequestId) return null;
    latestWeather = null;
    $("#weather-value").textContent = "Unavailable";
    $("#weather-detail").textContent = "Forecast could not be loaded";
    $("#data-note").textContent = `${error.message}. Check your connection; seasonal guidance is still available.`;
    updateRecommendation(selectedTechnique(), tripDateValue, null, latestFlow);
    return null;
  }
}

async function loadFlow(gauge, requestId) {
  const url = new URL("https://waterservices.usgs.gov/nwis/iv/");
  url.search = new URLSearchParams({ sites: gauge.site, parameterCd: "00060", format: "json" });
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`USGS service returned ${response.status}`);
    const json = await response.json();
    if (requestId !== planRequestId) return;
    const series = json.value.timeSeries.find((item) => item.values?.[0]?.value?.length);
    if (!series) throw new Error("No recent flow reading for this gauge");
    const reading = series.values[0].value.at(-1);
    const readAt = new Date(reading.dateTime);
    const ageHours = (Date.now() - readAt.getTime()) / (60 * 60 * 1000);
    $("#flow-detail").href = `https://waterdata.usgs.gov/monitoring-location/${gauge.site}/`;
    if (!Number.isFinite(ageHours) || ageHours < -0.5 || ageHours > 24) {
      latestFlow = { status: "stale" };
      $("#flow-value").textContent = "Stale reading";
      $("#flow-detail").textContent = `Last seen ${readAt.toLocaleString([], { month: "short", day: "numeric", year: "numeric" })} · ${gauge.name} ↗`;
      $("#data-note").textContent = "The nearest USGS gauge has no reading from the last 24 hours, so its old flow value is not shown as current. Gauge readings may not represent your exact reach.";
      updateRecommendation(selectedTechnique(), tripDate.value, latestWeather, latestFlow);
      return;
    }
    latestFlow = { status: "current", value: reading.value, readAt };
    $("#flow-value").textContent = `${Number(reading.value).toLocaleString()} cfs`;
    $("#flow-detail").textContent = `${gauge.name} · ${readAt.toLocaleString([], { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" })} ↗`;
    updateRecommendation(selectedTechnique(), tripDate.value, latestWeather, latestFlow);
  } catch (error) {
    if (requestId !== planRequestId) return;
    latestFlow = { status: "unavailable" };
    $("#flow-value").textContent = "Unavailable";
    $("#flow-detail").href = `https://waterdata.usgs.gov/monitoring-location/${gauge.site}/`;
    $("#flow-detail").textContent = "Check USGS gauge ↗";
    $("#data-note").textContent = `${error.message}. The nearest available gauge may not represent conditions at your exact reach.`;
    updateRecommendation(selectedTechnique(), tripDate.value, latestWeather, latestFlow);
  }
}

function updatePlan() {
  const area = AREAS[areaSelect.value];
  const origin = currentOrigin ?? area;
  const tripDateValue = tripDate.value;
  const technique = selectedTechnique();
  const requestId = ++planRequestId;
  latestWeather = null;
  latestFlow = null;
  const gauge = currentOrigin
    ? Object.values(GAUGES).sort((a, b) => haversineMiles(origin, a) - haversineMiles(origin, b))[0]
    : GAUGES[area.gauge];
  $("#conditions-area").textContent = currentOrigin ? "Your location near the Battenkill" : area.name;
  $("#weather-value").textContent = "Checking…";
  $("#weather-detail").textContent = "Local forecast";
  $("#flow-value").textContent = "Checking…";
  $("#flow-detail").textContent = "USGS gauge data";
  $("#data-note").textContent = "Weather from Open-Meteo; flow from the nearest listed USGS gauge. Gauge readings may not reflect your exact reach.";
  renderReaches(origin);
  updateRecommendation(technique, tripDateValue, null);
  void loadWeather(origin, tripDateValue, requestId);
  void loadFlow(gauge, requestId);
}

$("#planner-form").addEventListener("submit", (event) => {
  event.preventDefault();
  updatePlan();
  $("#results").scrollIntoView({ behavior: "smooth", block: "start" });
});

$("#technique-list").addEventListener("change", (event) => {
  if (event.target.name === "technique") updatePlan();
});

areaSelect.addEventListener("change", () => {
  currentOrigin = null;
  locationStatus.textContent = "Choose a river area, or let your location guide the plan.";
  updatePlan();
});

tripDate.addEventListener("change", updatePlan);

$("#use-location").addEventListener("click", () => {
  if (!navigator.geolocation) {
    locationStatus.textContent = "This browser does not support location. Choose an area instead.";
    return;
  }
  locationStatus.textContent = "Finding your location…";
  navigator.geolocation.getCurrentPosition((position) => {
    currentOrigin = { latitude: position.coords.latitude, longitude: position.coords.longitude };
    locationStatus.textContent = "Using your device location for distance and local weather.";
    updatePlan();
  }, (error) => {
    locationStatus.textContent = error.code === error.PERMISSION_DENIED
      ? "Location permission was denied. Choose an area from the list."
      : "Could not get your location. Choose an area from the list.";
  }, { enableHighAccuracy: false, timeout: 10000, maximumAge: 300000 });
});

const today = new Date();
tripDate.value = localDateString(today);
tripDate.min = localDateString(today);
tripDate.max = localDateString(new Date(today.getFullYear(), today.getMonth(), today.getDate() + 6));
updatePlan();
