const nationalityFlags = {
  Dutch: "🇳🇱",
  Austrian: "🇦🇹",
  Monegasque: "🇲🇨",
  Italian: "🇮🇹",
  Mexican: "🇲🇽",
  British: "🇬🇧",
  German: "🇩🇪",
  Spanish: "🇪🇸",
  Finnish: "🇫🇮",
  Swiss: "🇨🇭",
  French: "🇫🇷",
  Danish: "🇩🇰",
  American: "🇺🇸",
  Australian: "🇦🇺",
  Japanese: "🇯🇵",
  Thai: "🇹🇭",
  Canadian: "🇨🇦",
  Chinese: "🇨🇳",
  Swedish: "🇸🇪",
  "New Zealander": "🇳🇿",
  Belgian: "🇧🇪",
  Brazilian: "🇧🇷",
  Hungarian: "🇭🇺",
  Argentine: "🇦🇷",
  "South African": "🇿🇦",
  Irish: "🇮🇪",
  Portuguese: "🇵🇹",
  Uruguayan: "🇺🇾",
  Venezuelan: "🇻🇪",
  "Argentine-Italian": "🇦🇷🇮🇹",
  "American-Italian": "🇺🇸🇮🇹",
  Czech: "🇨🇿",
  Colombian: "🇨🇴",
  Indonesian: "🇮🇩",
  Rhodesian: "",
  Indian: "🇮🇳",
  Polish: "🇵🇱",
  Russian: "🇷🇺",
  Chilean: "🇨🇱",
  Liechtensteiner: "🇱🇮",
  Malaysian: "🇲🇾",
  Estonian: "🇪🇪",
};

const getNationFlag = (input) => {
  if (Object.keys(nationalityFlags).includes(input)) {
    return nationalityFlags[input];
  } else {
    return null;
  }
};

module.exports = { getNationFlag, nationalityFlags };
