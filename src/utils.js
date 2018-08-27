/**
 *@method randi
 *@param {Number} val1 Max generated value or min value if val2 defined
 *@param {Number} val2 Max generated value or undefined
 *@return {Number} Nonfractional [0, val1] or [val1, val2]
 */
function randi(val1, val2) {
	if(val2 == undefined)
		return Math.round(Math.random() * val1);
	else
		return randiRange(val1, val2)
}

function randiRange(min, max) {
	return Math.round(Math.random() * (max - min) + min);
}
/**
 *@method randf
 *@param {Number} max Max generated value
 *@return {Number} Fractional [0, max]
 */
function randf(max) {
	return Math.random() * max;
}

function randfRange(min, max) {
	return Math.random() * (max - min) + min;
}

/**
 * @brief random element from array
 *
 * @Param array inpu array
 *
 * @Returns empty array if input array empty or not array; or rand element if not
 */
function randElem(array) {
	if (array && array.length && (Array.isArray(array) || "string"))
		return array[randi(array.length - 1)];
	else
		return null;
}

Math.lerp = function(from, to, weight) {
	var mu2;

	mu2 = (1 - Math.cos(weight * Math.PI)) / 2;
	return (from * (1 - mu2) + to * mu2);
}

Number.prototype.clamp = function(min, max) {
	return Math.min(Math.max(this, min), max);
};

function CosineInterpolate(y1, y2, mu)
{
   var mu2;
   mu2 = (1-Math.cos(mu*Math.PI))/2;
   return(y1*(1-mu2)+y2*mu2);
}
function LinearInterpolate(y1, y2, mu)
{
   return(y1*(1-mu)+y2*mu);
}
String.prototype.replaceAt=function(index, replacement) {
    return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
}

function calculateDifferenceBetweenAngles(firstAngle, secondAngle)
  {
        var difference = secondAngle - firstAngle;
        while (difference < -Math.PI) difference += Math.PI*2;
        while (difference > Math.PI) difference -= Math.PI*2;
        return difference;
 }
function hashCode(str) { // java String#hashCode
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
       hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return hash;
}

let commonColors = {
	"indianred": "#cd5c5c",
	"indigo": "#4b0082",
	"ivory": "#fffff0",
	"khaki": "#f0e68c",
	"lavender": "#e6e6fa",
	"lavenderblush": "#fff0f5",
	"lawngreen": "#7cfc00",
	"lemonchiffon": "#fffacd",
	"lightblue": "#add8e6",
  "lightcoral": "#f08080",
  "lightcyan": "#e0ffff",
  "lightgoldenrodyellow": "#fafad2",
  "lightgray": "#d3d3d3",
  "lightgreen": "#90ee90",
  "lightgrey": "#d3d3d3",
  "lightpink": "#ffb6c1",
  "lightsalmon": "#ffa07a",
  "lightseagreen": "#20b2aa",
  "lightskyblue": "#87cefa",
  "lightslategray": "#778899",
  "lightslategrey": "#778899",
  "lightsteelblue": "#b0c4de",
  "lightyellow": "#ffffe0",
  "lime": "#00ff00",
  "limegreen": "#32cd32",
  "linen": "#faf0e6",
  "magenta": "#ff00ff",
  "maroon": "#800000",
  "mediumaquamarine": "#66cdaa",
  "mediumblue": "#0000cd",
  "mediumorchid": "#ba55d3",
  "mediumpurple": "#9370db",
  "mediumseagreen": "#3cb371",
  "mediumslateblue": "#7b68ee",
  "mediumspringgreen": "#00fa9a",
  "mediumturquoise": "#48d1cc",
  "mediumvioletred": "#c71585",
  "midnightblue": "#191970",
  "mintcream": "#f5fffa",
  "mistyrose": "#ffe4e1",
  "moccasin": "#ffe4b5",
  "navajowhite": "#ffdead",
  "navy": "#000080",
  "oldlace": "#fdf5e6",
  "olive": "#808000",
  "olivedrab": "#6b8e23",
  "orange": "#ffa500",
  "orangered": "#ff4500",
  "orchid": "#da70d6",
  "palegoldenrod": "#eee8aa",
  "palegreen": "#98fb98",
  "paleturquoise": "#afeeee",
  "palevioletred": "#db7093",
  "papayawhip": "#ffefd5",
  "peachpuff": "#ffdab9",
  "peru": "#cd853f",
  "pink": "#ffc0cb",
  "plum": "#dda0dd",
  "powderblue": "#b0e0e6",
  "purple": "#800080",
  "rebeccapurple": "#663399",
  "red": "#ff0000",
  "rosybrown": "#bc8f8f",
  "royalblue": "#4169e1",
  "saddlebrown": "#8b4513",
  "salmon": "#fa8072",
  "sandybrown": "#f4a460",
  "seagreen": "#2e8b57",
  "seashell": "#fff5ee",
  "sienna": "#a0522d",
  "silver": "#c0c0c0",
  "skyblue": "#87ceeb",
  "slateblue": "#6a5acd",
  "slategray": "#708090",
  "slategrey": "#708090",
  "snow": "#fffafa",
  "springgreen": "#00ff7f",
  "steelblue": "#4682b4",
  "tan": "#d2b48c",
  "teal": "#008080",
  "thistle": "#d8bfd8",
  "tomato": "#ff6347",
  "turquoise": "#40e0d0",
  "violet": "#ee82ee",
  "wheat": "#f5deb3",
  "white": "#ffffff",
  "whitesmoke": "#f5f5f5",
  "yellow": "#ffff00",
  "yellowgreen": "#9acd32"
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
