'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var codeList = [{countryName:"Andorra",alpha2:"AD",alpha3:"AND",numeric:"020"},{countryName:"United Arab Emirates",alpha2:"AE",alpha3:"ARE",numeric:"784"},{countryName:"African Union",alpha2:"AFRUN",alpha3:"",numeric:""},{countryName:"Antigua and Barbuda",alpha2:"AG",alpha3:"ATG",numeric:"028"},{countryName:"Anguilla",alpha2:"AI",alpha3:"AIA",numeric:"660"},{countryName:"Albania",alpha2:"AL",alpha3:"ALB",numeric:"008"},{countryName:"Amernia",alpha2:"AM",alpha3:"ARM",numeric:"051"},{countryName:"Amsterdam",alpha2:"AMS",alpha3:"",numeric:""},{countryName:"Angola",alpha2:"AO",alpha3:"AGO",numeric:"024"},{countryName:"Antartctica",alpha2:"AQ",alpha3:"ATA",numeric:"010"},{countryName:"Argentina",alpha2:"AR",alpha3:"ARG",numeric:"032"},{countryName:"American Samoa",alpha2:"AS",alpha3:"ASM",numeric:"016"},{countryName:"Austria",alpha2:"AT",alpha3:"AUT",numeric:"040"},{countryName:"Australia",alpha2:"AU",alpha3:"AUS",numeric:"016"},{countryName:"Aruba",alpha2:"AW",alpha3:"ABW",numeric:"533"},{countryName:"Åland Islands",alpha2:"AX",alpha3:"ALA",numeric:"248"},{countryName:"Azerbaijan",alpha2:"AZ",alpha3:"AZE",numeric:"031"},{countryName:"Bosnia and Herzegovina",alpha2:"BA",alpha3:"BIH",numeric:"070"},{countryName:"Barbados",alpha2:"BB",alpha3:"BRB",numeric:"052"},{countryName:"Bangladesh",alpha2:"BD",alpha3:"BGD",numeric:"050"},{countryName:"Belgium",alpha2:"BE",alpha3:"BEL",numeric:"056"},{countryName:"Burkina Faso",alpha2:"BF",alpha3:"BFA",numeric:"854"},{countryName:"Bulgaria",alpha2:"BG",alpha3:"BGR",numeric:"100"},{countryName:"Bahrain",alpha2:"BH",alpha3:"BHR",numeric:"048"},{countryName:"Burundi",alpha2:"BI",alpha3:"BDI",numeric:"108"},{countryName:"Benin",alpha2:"BJ",alpha3:"BEN",numeric:"204"},{countryName:"Saint Barthélemy",alpha2:"BL",alpha3:"BLM",numeric:"652"},{countryName:"Bermuda",alpha2:"BM",alpha3:"BMU",numeric:"060"},{countryName:"Brunei",alpha2:"BN",alpha3:"BRN",numeric:"096"},{countryName:"Bolivia",alpha2:"BO",alpha3:"BOL",numeric:"068"},{countryName:"Bonaire",alpha2:"BQ-BO",alpha3:"",numeric:""},{countryName:"Saba",alpha2:"BQ-SA",alpha3:"",numeric:""},{countryName:"Sint Eustatius",alpha2:"BQ-SE",alpha3:"",numeric:""},{countryName:"Brazil",alpha2:"BR",alpha3:"BRA",numeric:"076"},{countryName:"Bahamas",alpha2:"BS",alpha3:"BHS",numeric:"044"},{countryName:"Bhutan",alpha2:"BT",alpha3:"BTN",numeric:"064"},{countryName:"Botswana",alpha2:"BW",alpha3:"BWA",numeric:"072"},{countryName:"Belarus",alpha2:"BY",alpha3:"BLR",numeric:"112"},{countryName:"Belize",alpha2:"BZ",alpha3:"BLZ",numeric:"084"},{countryName:"Canada",alpha2:"CA",alpha3:"CAN",numeric:"124"},{countryName:"Cocos Islands",alpha2:"CC",alpha3:"CCK",numeric:"166"},{countryName:"Democratis Republic of Congo",alpha2:"CD",alpha3:"COD",numeric:"180"},{countryName:"Central African Republic",alpha2:"CF",alpha3:"CAF",numeric:"140"},{countryName:"Congo",alpha2:"CG",alpha3:"COG",numeric:"178"},{countryName:"Switzerland",alpha2:"CH",alpha3:"CHE",numeric:"756"},{countryName:"Côte d'Ivoire",alpha2:"CI",alpha3:"CIV",numeric:"384"},{countryName:"Cook Island",alpha2:"CK",alpha3:"COK",numeric:"184"},{countryName:"Chile",alpha2:"CL",alpha3:"CHL",numeric:"152"},{countryName:"Cameroon",alpha2:"CM",alpha3:"CMR",numeric:"120"},{countryName:"China",alpha2:"CN",alpha3:"CHN",numeric:"156"},{countryName:"Colombia",alpha2:"CO",alpha3:"COL",numeric:"170"},{countryName:"Costa Rica",alpha2:"CR",alpha3:"CRI",numeric:"188"},{countryName:"Cuba",alpha2:"CU",alpha3:"CUB",numeric:"192"},{countryName:"Cape Verde",alpha2:"CV",alpha3:"CPV",numeric:"132"},{countryName:"Curaçao",alpha2:"CW",alpha3:"CUW",numeric:"531"},{countryName:"Christmas Island",alpha2:"CX",alpha3:"CXR",numeric:"162"},{countryName:"Cyprus",alpha2:"CY",alpha3:"CYP",numeric:"196"},{countryName:"Czech Republic",alpha2:"CZ",alpha3:"CZE",numeric:"203"},{countryName:"Germany",alpha2:"DE",alpha3:"DEU",numeric:"276"},{countryName:"Djibouti",alpha2:"DJ",alpha3:"DJI",numeric:"262"},{countryName:"Denmark",alpha2:"DK",alpha3:"DNK",numeric:"208"},{countryName:"Dominica",alpha2:"DM",alpha3:"DMA",numeric:"212"},{countryName:"Dominican Republic",alpha2:"DO",alpha3:"DOM",numeric:"214"},{countryName:"Ecuador",alpha2:"EC",alpha3:"ECU",numeric:"218"},{countryName:"Estonia",alpha2:"EE",alpha3:"EST",numeric:"233"},{countryName:"Egypt",alpha2:"EG",alpha3:"EGY",numeric:"818"},{countryName:"Western Sahara",alpha2:"EH",alpha3:"ESH",numeric:"732"},{countryName:"Eritrea",alpha2:"ER",alpha3:"ERI",numeric:"232"},{countryName:"Spain",alpha2:"ES",alpha3:"ESP",numeric:"724"},{countryName:"Ethiopia",alpha2:"ET",alpha3:"ETH",numeric:"231"},{countryName:"European Union",alpha2:"EU",alpha3:"",numeric:""},{countryName:"Finland",alpha2:"FI",alpha3:"FIN",numeric:"246"},{countryName:"Fiji",alpha2:"FJ",alpha3:"FJI",numeric:"242"},{countryName:"Falkland Islands",alpha2:"FK",alpha3:"FLK",numeric:"238"},{countryName:"Micronesia (Federated States of)",alpha2:"FM",alpha3:"FSM",numeric:"583"},{countryName:"Faroe Island",alpha2:"FO",alpha3:"FRO",numeric:"234"},{countryName:"France",alpha2:"FR",alpha3:"FRA",numeric:"250"},{countryName:"Gabon",alpha2:"GA",alpha3:"GAB",numeric:"266"},{countryName:"United Kingdom of Great Britain and Northern Ireland",alpha2:"GB",alpha3:"GBR",numeric:"826"},{countryName:"England",alpha2:"GB-ENG",alpha3:"",numeric:""},{countryName:"Scotland",alpha2:"GB-SCT",alpha3:"",numeric:""},{countryName:"United Kingdom",alpha2:"GB-UKM",alpha3:"",numeric:""},{countryName:"Wales",alpha2:"GB-WLS",alpha3:"",numeric:""},{countryName:"Grenada",alpha2:"GD",alpha3:"GRD",numeric:"308"},{countryName:"Georgia",alpha2:"GE",alpha3:"GEO",numeric:"268"},{countryName:"French Guiana",alpha2:"GF",alpha3:"GUF",numeric:"254"},{countryName:"Guernsey",alpha2:"GG",alpha3:"GGY",numeric:"831"},{countryName:"Ghana",alpha2:"GH",alpha3:"GHA",numeric:"288"},{countryName:"Gibraltar",alpha2:"GI",alpha3:"GIB",numeric:"292"},{countryName:"Greenland",alpha2:"GL",alpha3:"GRL",numeric:"304"},{countryName:"Gambia",alpha2:"GM",alpha3:"GMB",numeric:"270"},{countryName:"Guinea",alpha2:"GN",alpha3:"GIN",numeric:"324"},{countryName:"Guadeloupe",alpha2:"GP",alpha3:"GLP",numeric:"312"},{countryName:"Equatorial Guinea",alpha2:"GQ",alpha3:"GNQ",numeric:"226"},{countryName:"Greece",alpha2:"GR",alpha3:"GRC",numeric:"300"},{countryName:"South Gerogia and the South Sandwich Islands",alpha2:"GS",alpha3:"SGS",numeric:"239"},{countryName:"Guatemala",alpha2:"GT",alpha3:"GTM",numeric:"320"},{countryName:"Guam",alpha2:"GU",alpha3:"GUM",numeric:"316"},{countryName:"Guinea-Bissau",alpha2:"GW",alpha3:"GNB",numeric:"624"},{countryName:"Guyana",alpha2:"GY",alpha3:"GUY",numeric:"328"},{countryName:"Hong Kong",alpha2:"HK",alpha3:"HKG",numeric:"344"},{countryName:"Heard Island and McDonald Islands",alpha2:"HM",alpha3:"HMD",numeric:"334"},{countryName:"Honduras",alpha2:"HN",alpha3:"HND",numeric:"340"},{countryName:"Croatia",alpha2:"HR",alpha3:"HRV",numeric:"191"},{countryName:"Haiti",alpha2:"HT",alpha3:"HTI",numeric:"332"},{countryName:"Hungary",alpha2:"HU",alpha3:"HUN",numeric:"348"},{countryName:"Indonesia",alpha2:"ID",alpha3:"IDN",numeric:"360"},{countryName:"Ireland",alpha2:"IE",alpha3:"IRL",numeric:"372"},{countryName:"Israel",alpha2:"IL",alpha3:"ISR",numeric:"376"},{countryName:"Isle of Man",alpha2:"IM",alpha3:"IMN",numeric:"833"},{countryName:"India",alpha2:"IN",alpha3:"IND",numeric:"356"},{countryName:"British Indian Ocean Territory",alpha2:"IO",alpha3:"IOT",numeric:"086"},{countryName:"Iraq",alpha2:"IQ",alpha3:"IRQ",numeric:"368"},{countryName:"Iran",alpha2:"IR",alpha3:"IRN",numeric:"364"},{countryName:"Iceland",alpha2:"IS",alpha3:"ISL",numeric:"352"},{countryName:"Italy",alpha2:"IT",alpha3:"ITA",numeric:"380"},{countryName:"Jersey",alpha2:"JE",alpha3:"JEY",numeric:"832"},{countryName:"Jamaica",alpha2:"JM",alpha3:"JAM",numeric:"388"},{countryName:"Jordan",alpha2:"JO",alpha3:"JOR",numeric:"400"},{countryName:"Japan",alpha2:"JP",alpha3:"JPN",numeric:"392"},{countryName:"Kenya",alpha2:"KE",alpha3:"KEN",numeric:"404"},{countryName:"Kyrgyzstan",alpha2:"KG",alpha3:"KGZ",numeric:"417"},{countryName:"Cambodia",alpha2:"KH",alpha3:"KHM",numeric:"116"},{countryName:"Kiribati",alpha2:"KI",alpha3:"KIR",numeric:"296"},{countryName:"Comoros",alpha2:"KM",alpha3:"COM",numeric:"174"},{countryName:"Saint Kitts and Nevis",alpha2:"KN",alpha3:"KNA",numeric:"659"},{countryName:"Korea (the Democratic People's Republic of)",alpha2:"KP",alpha3:"PRK",numeric:"408"},{countryName:"Korea (the Republic of)",alpha2:"KR",alpha3:"KOR",numeric:"410"},{countryName:"Kuwait",alpha2:"KW",alpha3:"KWT",numeric:"414"},{countryName:"Cayman Islands",alpha2:"KY",alpha3:"CYM",numeric:"136"},{countryName:"Kazakhstan",alpha2:"KZ",alpha3:"KAZ",numeric:"398"},{countryName:"Lao People's Democratic Republic (the)",alpha2:"LA",alpha3:"LAO",numeric:"418"},{countryName:"Lebanon",alpha2:"LB",alpha3:"LBN",numeric:"422"},{countryName:"Saint Lucia",alpha2:"LC",alpha3:"LCA",numeric:"662"},{countryName:"Liechtenstein",alpha2:"LI",alpha3:"LIE",numeric:"438"},{countryName:"Sri Lanka",alpha2:"LK",alpha3:"LKA",numeric:"144"},{countryName:"Liberia",alpha2:"LR",alpha3:"LBR",numeric:"430"},{countryName:"Lesotho",alpha2:"LS",alpha3:"LSO",numeric:"426"},{countryName:"Lithuania",alpha2:"LT",alpha3:"LTU",numeric:"440"},{countryName:"Luxembourg",alpha2:"LU",alpha3:"LUX",numeric:"442"},{countryName:"Latvia",alpha2:"LV",alpha3:"LVA",numeric:"428"},{countryName:"Libya",alpha2:"LY",alpha3:"LBY",numeric:"434"},{countryName:"Morocco",alpha2:"MA",alpha3:"MAR",numeric:"504"},{countryName:"Monaco",alpha2:"MC",alpha3:"MCO ",numeric:"492"},{countryName:"Moldova (the Republic of)",alpha2:"MD",alpha3:"MDA",numeric:"498"},{countryName:"Montenegro",alpha2:"ME",alpha3:"MNE",numeric:"499"},{countryName:"Saint Martin",alpha2:"MF",alpha3:"MAF",numeric:"663"},{countryName:"Madagascar",alpha2:"MG",alpha3:"MDG",numeric:"450"},{countryName:"Marshall Islands (the)",alpha2:"MH",alpha3:"MHL",numeric:"584"},{countryName:"North Macedonia",alpha2:"MK",alpha3:"MKD",numeric:"807"},{countryName:"Mali",alpha2:"ML",alpha3:"MLI",numeric:"466"},{countryName:"Myanmar",alpha2:"MM",alpha3:"MMR",numeric:"104"},{countryName:"Mongolia",alpha2:"MN",alpha3:"MNG",numeric:"496"},{countryName:"Macao",alpha2:"MO",alpha3:"MAC",numeric:"446"},{countryName:"Northern Mariana Islands (the)",alpha2:"MP",alpha3:"MNP",numeric:"580"},{countryName:"Martinique",alpha2:"MQ",alpha3:"MTQ",numeric:"474"},{countryName:"Mauritania",alpha2:"MR",alpha3:"MRT",numeric:"478"},{countryName:"Montserrat",alpha2:"MS",alpha3:"MSR",numeric:"500"},{countryName:"Malta",alpha2:"MT",alpha3:"MLT",numeric:"470"},{countryName:"Mauritius",alpha2:"MU",alpha3:"MUS",numeric:"480"},{countryName:"Maldives",alpha2:"MV",alpha3:"MDV",numeric:"462"},{countryName:"Malawi",alpha2:"MW",alpha3:"MWI",numeric:"454"},{countryName:"Mexico",alpha2:"MX",alpha3:"MEX",numeric:"484"},{countryName:"Malaysia",alpha2:"MY",alpha3:"MYS",numeric:"458"},{countryName:"Mozambique",alpha2:"MZ",alpha3:"MOZ",numeric:"508"},{countryName:"Namibia",alpha2:"NA",alpha3:"NAM",numeric:"516"},{countryName:"New Caledonia",alpha2:"NC",alpha3:"NCL",numeric:"540"},{countryName:"Niger",alpha2:"NE",alpha3:"NER",numeric:"562"},{countryName:"Norfolk Island",alpha2:"NF",alpha3:"NFK",numeric:"574"},{countryName:"Nigeria",alpha2:"NG",alpha3:"NGA",numeric:"566"},{countryName:"Nicaragua",alpha2:"NI",alpha3:"NIC",numeric:"558"},{countryName:"Netherlands",alpha2:"NL",alpha3:"NLD",numeric:"528"},{countryName:"Norway",alpha2:"NO",alpha3:"NOR",numeric:"578"},{countryName:"Nepal",alpha2:"NP",alpha3:"NPL",numeric:"524"},{countryName:"Nauru",alpha2:"NR",alpha3:"NRU",numeric:"520"},{countryName:"Niue",alpha2:"NU",alpha3:"NIU",numeric:"570"},{countryName:"New Zealand",alpha2:"NZ",alpha3:"NZL",numeric:"554"},{countryName:"Oman",alpha2:"OM",alpha3:"OMN",numeric:"512"},{countryName:"Panama",alpha2:"PA",alpha3:"PAN",numeric:"591"},{countryName:"Peru",alpha2:"PE",alpha3:"PER",numeric:"604"},{countryName:"French Polyesia",alpha2:"PF",alpha3:"PYF",numeric:"258"},{countryName:"Papua New Guinea",alpha2:"PG",alpha3:"PNG",numeric:"598"},{countryName:"Phillippines (the)",alpha2:"PH",alpha3:"PHL",numeric:"608"},{countryName:"Pakistan",alpha2:"PK",alpha3:"PAK",numeric:"586"},{countryName:"Poland",alpha2:"PL",alpha3:"POL",numeric:"616"},{countryName:"Saint Pierre and Miquelon",alpha2:"PM",alpha3:"SPM",numeric:"666"},{countryName:"Pitcairn",alpha2:"PN",alpha3:"PCN",numeric:"612"},{countryName:"Puerto Rico",alpha2:"PR",alpha3:"PRI",numeric:"630"},{countryName:"Palestine, State of",alpha2:"PS",alpha3:"PSE",numeric:"275"},{countryName:"Portugal",alpha2:"PT",alpha3:"PRT",numeric:"620"},{countryName:"Palau",alpha2:"PW",alpha3:"PLW",numeric:"585"},{countryName:"Paraguay",alpha2:"PY",alpha3:"PRY",numeric:"600"},{countryName:"Qatar",alpha2:"QA",alpha3:"QAT",numeric:"634"},{countryName:"Rainbow",alpha2:"RAINBOW",alpha3:"",numeric:""},{countryName:"Réunion",alpha2:"RE",alpha3:"REU",numeric:"638"},{countryName:"Romania",alpha2:"RO",alpha3:"ROU",numeric:"642"},{countryName:"Serbia",alpha2:"RS",alpha3:"SRB",numeric:"688"},{countryName:"Russian Federation (the)",alpha2:"RU",alpha3:"RUS",numeric:"643"},{countryName:"Rwanda",alpha2:"RW",alpha3:"RWA",numeric:"646"},{countryName:"Saudi Arabia",alpha2:"SA",alpha3:"SAU",numeric:"682"},{countryName:"Solomon Islands",alpha2:"SB",alpha3:"SLB",numeric:"090"},{countryName:"Seychelles",alpha2:"SC",alpha3:"SYC",numeric:"690"},{countryName:"Sudan (the)",alpha2:"SD",alpha3:"SDN",numeric:"729"},{countryName:"Sweden",alpha2:"SE",alpha3:"SWE",numeric:"752"},{countryName:"Singapore",alpha2:"SG",alpha3:"SGP",numeric:"702"},{countryName:"Saint Helena, Ascension Island, Traistan da Cunha",alpha2:"SH",alpha3:"SHN",numeric:"654"},{countryName:"Slovenia",alpha2:"SI",alpha3:"SVN",numeric:"705"},{countryName:"Svalbard, Jan Mayen",alpha2:"SJ",alpha3:"SJM",numeric:"744"},{countryName:"Slovakia",alpha2:"SK",alpha3:"SVK",numeric:"703"},{countryName:"Sierra Leone",alpha2:"SL",alpha3:"SLE",numeric:"694"},{countryName:"San Marino",alpha2:"SM",alpha3:"SMR",numeric:"674"},{countryName:"Senegal",alpha2:"SN",alpha3:"SEN",numeric:"686"},{countryName:"Somalia",alpha2:"SO",alpha3:"SOM",numeric:"706"},{countryName:"Suriname",alpha2:"SR",alpha3:"SUR",numeric:"740"},{countryName:"South Sudan",alpha2:"SS",alpha3:"SSD",numeric:"728"},{countryName:"Sao Tome and Principe",alpha2:"ST",alpha3:"STP",numeric:"678"},{countryName:"El Salvador",alpha2:"SV",alpha3:"SLV",numeric:"222"},{countryName:"Sint Maarten",alpha2:"SX",alpha3:"SXM",numeric:"534"},{countryName:"Syrian Arab Republic (the)",alpha2:"SY",alpha3:"SYR",numeric:"760"},{countryName:"Eswatini",alpha2:"SZ",alpha3:"SWZ",numeric:"748"},{countryName:"Turks and Caicos Islands (the)",alpha2:"TC",alpha3:"TCA",numeric:"796"},{countryName:"Chad",alpha2:"TD",alpha3:"TCD",numeric:"148"},{countryName:"French Southern Territories",alpha2:"TF",alpha3:"ATF",numeric:"260"},{countryName:"Togo",alpha2:"TG",alpha3:"TGO",numeric:"768"},{countryName:"Thailand",alpha2:"TH",alpha3:"THA",numeric:"764"},{countryName:"Tajikistan",alpha2:"TJ",alpha3:"TJK",numeric:"762"},{countryName:"Tokelau",alpha2:"TK",alpha3:"TKL",numeric:"772"},{countryName:"Timor-Leste",alpha2:"TL",alpha3:"TLS",numeric:"626"},{countryName:"Turkmenistan",alpha2:"TM",alpha3:"TKM",numeric:"795"},{countryName:"Tunisia",alpha2:"TN",alpha3:"TUN",numeric:"788"},{countryName:"Tonga",alpha2:"TO",alpha3:"TON",numeric:"776"},{countryName:"Turkey",alpha2:"TR",alpha3:"TUR",numeric:"792"},{countryName:"Trinidad and Tobago",alpha2:"TT",alpha3:"TTO",numeric:"780"},{countryName:"Tuvalu",alpha2:"TV",alpha3:"TUV",numeric:"798"},{countryName:"Taiwan",alpha2:"TW",alpha3:"TWN",numeric:"158"},{countryName:"Tanzania, the United Republic of",alpha2:"TZ",alpha3:"TZA",numeric:"834"},{countryName:"Ukraine",alpha2:"UA",alpha3:"UKR",numeric:"804"},{countryName:"Uganda",alpha2:"UG",alpha3:"UGA",numeric:"800"},{countryName:"United States Minor Outlying Islands (the)",alpha2:"UM",alpha3:"UMI",numeric:"581"},{countryName:"Union of South American Nations",alpha2:"UOSAN",alpha3:"",numeric:""},{countryName:"United States of America",alpha2:"US",alpha3:"USA",numeric:"840"},{countryName:"Uruguay",alpha2:"UY",alpha3:"URY",numeric:"858"},{countryName:"Uzbekistan",alpha2:"UZ",alpha3:"UZB",numeric:"860"},{countryName:"Holy See",alpha2:"VA",alpha3:"VAT",numeric:"336"},{countryName:"Saint Vincent and the Grenadines",alpha2:"VC",alpha3:"VCT",numeric:"670"},{countryName:"Venezuela (Bolivarian Republic of)",alpha2:"VE",alpha3:"VEN",numeric:"862"},{countryName:"Virgin Islands (British)",alpha2:"VG",alpha3:"VGB",numeric:"092"},{countryName:"Virgin Islands (U.S.)",alpha2:"VI",alpha3:"VIR",numeric:"850"},{countryName:"Viet Nam",alpha2:"VN",alpha3:"VNM",numeric:"704"},{countryName:"Vanuatu",alpha2:"VU",alpha3:"VUT",numeric:"548"},{countryName:"Wallis and Futuna",alpha2:"WF",alpha3:"WLF",numeric:"876"},{countryName:"Samoa",alpha2:"WS",alpha3:"WSM",numeric:"882"},{countryName:"Yemen",alpha2:"YE",alpha3:"YEM",numeric:"887"},{countryName:"Mayotte",alpha2:"YT",alpha3:"MYT",numeric:"175"},{countryName:"South Africa",alpha2:"ZA",alpha3:"ZAF",numeric:"710"},{countryName:"Zambia",alpha2:"ZM",alpha3:"ZMB",numeric:"894"},{countryName:"Zimbabwe",alpha2:"ZW",alpha3:"ZWE",numeric:"716"}];

/* loaded by smart-asset */
var l = require("./flags/cbnslCnk.svg");

/* loaded by smart-asset */
var m = require("./flags/cLyOKupG.svg");

/* loaded by smart-asset */
var s = require("./flags/FCEUHETX.svg");

var AD = {
  l: l,
  m: m,
  s: s
};

/* loaded by smart-asset */
var l$1 = require("./flags/bTEOfnQN.svg");

/* loaded by smart-asset */
var m$1 = require("./flags/cVFXYIYG.svg");

/* loaded by smart-asset */
var s$1 = require("./flags/HRKKClhp.svg");

var AE = {
  l: l$1,
  m: m$1,
  s: s$1
};

/* loaded by smart-asset */
var l$2 = require("./flags/cINSXEre.svg");

/* loaded by smart-asset */
var m$2 = require("./flags/eVaLdXyo.svg");

/* loaded by smart-asset */
var s$2 = require("./flags/bOEyBese.svg");

var AFRUN = {
  l: l$2,
  m: m$2,
  s: s$2
};

/* loaded by smart-asset */
var l$3 = require("./flags/bFZIhxQU.svg");

/* loaded by smart-asset */
var m$3 = require("./flags/cpLGXQyY.svg");

/* loaded by smart-asset */
var s$3 = require("./flags/cXenSszl.svg");

var AG = {
  l: l$3,
  m: m$3,
  s: s$3
};

/* loaded by smart-asset */
var l$4 = require("./flags/dkxJsElZ.svg");

/* loaded by smart-asset */
var m$4 = require("./flags/dRiRjhnH.svg");

/* loaded by smart-asset */
var s$4 = require("./flags/eKvwAisP.svg");

var AI = {
  l: l$4,
  m: m$4,
  s: s$4
};

/* loaded by smart-asset */
var l$5 = require("./flags/clZbFjuD.svg");

/* loaded by smart-asset */
var m$5 = require("./flags/eDQOtYOF.svg");

/* loaded by smart-asset */
var s$5 = require("./flags/fGbIGdKe.svg");

var AL = {
  l: l$5,
  m: m$5,
  s: s$5
};

/* loaded by smart-asset */
var l$6 = require("./flags/ekpULpBN.svg");

/* loaded by smart-asset */
var m$6 = require("./flags/EfVpBGhm.svg");

/* loaded by smart-asset */
var s$6 = require("./flags/dooDOSdj.svg");

var AM = {
  l: l$6,
  m: m$6,
  s: s$6
};

/* loaded by smart-asset */
var l$7 = require("./flags/kqPdlCRs.svg");

/* loaded by smart-asset */
var m$7 = require("./flags/bzvDgeyy.svg");

/* loaded by smart-asset */
var s$7 = require("./flags/cRCguBdc.svg");

var AMS = {
  l: l$7,
  m: m$7,
  s: s$7
};

/* loaded by smart-asset */
var l$8 = require("./flags/dPjUpNTk.svg");

/* loaded by smart-asset */
var m$8 = require("./flags/TDPfstRx.svg");

/* loaded by smart-asset */
var s$8 = require("./flags/bPlziFlK.svg");

var AO = {
  l: l$8,
  m: m$8,
  s: s$8
};

/* loaded by smart-asset */
var l$9 = require("./flags/cAToingz.svg");

/* loaded by smart-asset */
var m$9 = require("./flags/nYRMHLNN.svg");

/* loaded by smart-asset */
var s$9 = require("./flags/jSRoYsmS.svg");

var AQ = {
  l: l$9,
  m: m$9,
  s: s$9
};

/* loaded by smart-asset */
var l$a = require("./flags/fKeLzEKk.svg");

/* loaded by smart-asset */
var m$a = require("./flags/dDfSjWdH.svg");

/* loaded by smart-asset */
var s$a = require("./flags/tUnAEaol.svg");

var AR = {
  l: l$a,
  m: m$a,
  s: s$a
};

/* loaded by smart-asset */
var l$b = require("./flags/eugUKsWl.svg");

/* loaded by smart-asset */
var m$b = require("./flags/cgKZsJBm.svg");

/* loaded by smart-asset */
var s$b = require("./flags/eMWwVNhy.svg");

var AS = {
  l: l$b,
  m: m$b,
  s: s$b
};

/* loaded by smart-asset */
var l$c = require("./flags/eyMsofmS.svg");

/* loaded by smart-asset */
var m$c = require("./flags/eezoZEsw.svg");

/* loaded by smart-asset */
var s$c = require("./flags/hiojnuWE.svg");

var AT = {
  l: l$c,
  m: m$c,
  s: s$c
};

/* loaded by smart-asset */
var l$d = require("./flags/BcLNAfdj.svg");

/* loaded by smart-asset */
var m$d = require("./flags/cJIFvmok.svg");

/* loaded by smart-asset */
var s$d = require("./flags/dTqSIzIN.svg");

var AU = {
  l: l$d,
  m: m$d,
  s: s$d
};

/* loaded by smart-asset */
var l$e = require("./flags/clwRHXzs.svg");

/* loaded by smart-asset */
var m$e = require("./flags/cEMiLXvg.svg");

/* loaded by smart-asset */
var s$e = require("./flags/bvTVmcGN.svg");

var AW = {
  l: l$e,
  m: m$e,
  s: s$e
};

/* loaded by smart-asset */
var l$f = require("./flags/bFohbZin.svg");

/* loaded by smart-asset */
var m$f = require("./flags/fwOVgVEu.svg");

/* loaded by smart-asset */
var s$f = require("./flags/cczwhUsL.svg");

var AX = {
  l: l$f,
  m: m$f,
  s: s$f
};

/* loaded by smart-asset */
var l$g = require("./flags/bgmAjmpI.svg");

/* loaded by smart-asset */
var m$g = require("./flags/dLoxUHlc.svg");

/* loaded by smart-asset */
var s$g = require("./flags/eMLyHJlB.svg");

var AZ = {
  l: l$g,
  m: m$g,
  s: s$g
};

/* loaded by smart-asset */
var l$h = require("./flags/crMTtgoE.svg");

/* loaded by smart-asset */
var m$h = require("./flags/fgYvHaSV.svg");

/* loaded by smart-asset */
var s$h = require("./flags/cquYsOzE.svg");

var BA = {
  l: l$h,
  m: m$h,
  s: s$h
};

/* loaded by smart-asset */
var l$i = require("./flags/ddqQDuYR.svg");

/* loaded by smart-asset */
var m$i = require("./flags/cdPsDlkG.svg");

/* loaded by smart-asset */
var s$i = require("./flags/eSsLkwXK.svg");

var BB = {
  l: l$i,
  m: m$i,
  s: s$i
};

/* loaded by smart-asset */
var l$j = require("./flags/efGFknZs.svg");

/* loaded by smart-asset */
var m$j = require("./flags/fVNtFeik.svg");

/* loaded by smart-asset */
var s$j = require("./flags/bhsmPUPS.svg");

var BD = {
  l: l$j,
  m: m$j,
  s: s$j
};

/* loaded by smart-asset */
var l$k = require("./flags/bTVqmzlA.svg");

/* loaded by smart-asset */
var m$k = require("./flags/fLixBAzb.svg");

/* loaded by smart-asset */
var s$k = require("./flags/GifftDsD.svg");

var BE = {
  l: l$k,
  m: m$k,
  s: s$k
};

/* loaded by smart-asset */
var l$l = require("./flags/bqxCWqZl.svg");

/* loaded by smart-asset */
var m$l = require("./flags/eyTTgzOl.svg");

/* loaded by smart-asset */
var s$l = require("./flags/DXlBTDxc.svg");

var BF = {
  l: l$l,
  m: m$l,
  s: s$l
};

/* loaded by smart-asset */
var l$m = require("./flags/dELxRAnY.svg");

/* loaded by smart-asset */
var m$m = require("./flags/csCQVBae.svg");

/* loaded by smart-asset */
var s$m = require("./flags/cijVgnxr.svg");

var BG = {
  l: l$m,
  m: m$m,
  s: s$m
};

/* loaded by smart-asset */
var l$n = require("./flags/eBRFnPyb.svg");

/* loaded by smart-asset */
var m$n = require("./flags/fLfMXBKF.svg");

/* loaded by smart-asset */
var s$n = require("./flags/cTZCywYc.svg");

var BH = {
  l: l$n,
  m: m$n,
  s: s$n
};

/* loaded by smart-asset */
var l$o = require("./flags/cplaNOrk.svg");

/* loaded by smart-asset */
var m$o = require("./flags/bUhTLFoT.svg");

/* loaded by smart-asset */
var s$o = require("./flags/dPOOYRkh.svg");

var BI = {
  l: l$o,
  m: m$o,
  s: s$o
};

/* loaded by smart-asset */
var l$p = require("./flags/bPLXETxS.svg");

/* loaded by smart-asset */
var m$p = require("./flags/sFsfvIYy.svg");

/* loaded by smart-asset */
var s$p = require("./flags/vfvWgLtq.svg");

var BJ = {
  l: l$p,
  m: m$p,
  s: s$p
};

/* loaded by smart-asset */
var l$q = require("./flags/eekhGwqH.svg");

/* loaded by smart-asset */
var m$q = require("./flags/dEBdAbbL.svg");

/* loaded by smart-asset */
var s$q = require("./flags/cVWxEsjw.svg");

var BL = {
  l: l$q,
  m: m$q,
  s: s$q
};

/* loaded by smart-asset */
var l$r = require("./flags/TBewymbL.svg");

/* loaded by smart-asset */
var m$r = require("./flags/ArDtdgey.svg");

/* loaded by smart-asset */
var s$r = require("./flags/EXyKuscP.svg");

var BM = {
  l: l$r,
  m: m$r,
  s: s$r
};

/* loaded by smart-asset */
var l$s = require("./flags/dwVFoYJI.svg");

/* loaded by smart-asset */
var m$s = require("./flags/daMHXJJF.svg");

/* loaded by smart-asset */
var s$s = require("./flags/dXyOHSUN.svg");

var BN = {
  l: l$s,
  m: m$s,
  s: s$s
};

/* loaded by smart-asset */
var l$t = require("./flags/fkdUZMlc.svg");

/* loaded by smart-asset */
var m$t = require("./flags/fIMpmYbH.svg");

/* loaded by smart-asset */
var s$t = require("./flags/bvApuWeQ.svg");

var BO = {
  l: l$t,
  m: m$t,
  s: s$t
};

/* loaded by smart-asset */
var l$u = require("./flags/GJAmWmQr.svg");

/* loaded by smart-asset */
var m$u = require("./flags/efSGJBDC.svg");

/* loaded by smart-asset */
var s$u = require("./flags/bYzbLJnq.svg");

var BQ_BO = {
  l: l$u,
  m: m$u,
  s: s$u
};

/* loaded by smart-asset */
var l$v = require("./flags/EPKPLCvV.svg");

/* loaded by smart-asset */
var m$v = require("./flags/eKjbLfHd.svg");

/* loaded by smart-asset */
var s$v = require("./flags/drZrEBcP.svg");

var BQ_SA = {
  l: l$v,
  m: m$v,
  s: s$v
};

/* loaded by smart-asset */
var l$w = require("./flags/fjXPIzaj.svg");

/* loaded by smart-asset */
var m$w = require("./flags/BXGiDZyG.svg");

/* loaded by smart-asset */
var s$w = require("./flags/bfCSDrsv.svg");

var BQ_SE = {
  l: l$w,
  m: m$w,
  s: s$w
};

/* loaded by smart-asset */
var l$x = require("./flags/dwWyCvcd.svg");

/* loaded by smart-asset */
var m$x = require("./flags/ehhKkrFM.svg");

/* loaded by smart-asset */
var s$x = require("./flags/bdAkccyV.svg");

var BR = {
  l: l$x,
  m: m$x,
  s: s$x
};

/* loaded by smart-asset */
var l$y = require("./flags/fJrPLZBn.svg");

/* loaded by smart-asset */
var m$y = require("./flags/bMcXGVng.svg");

/* loaded by smart-asset */
var s$y = require("./flags/tiuUZCSE.svg");

var BS = {
  l: l$y,
  m: m$y,
  s: s$y
};

/* loaded by smart-asset */
var l$z = require("./flags/eVHFDvbr.svg");

/* loaded by smart-asset */
var m$z = require("./flags/cpWWSraW.svg");

/* loaded by smart-asset */
var s$z = require("./flags/drHfckIH.svg");

var BT = {
  l: l$z,
  m: m$z,
  s: s$z
};

/* loaded by smart-asset */
var l$A = require("./flags/dWkaFNFn.svg");

/* loaded by smart-asset */
var m$A = require("./flags/QsusmigM.svg");

/* loaded by smart-asset */
var s$A = require("./flags/cpTyNJWC.svg");

var BW = {
  l: l$A,
  m: m$A,
  s: s$A
};

/* loaded by smart-asset */
var l$B = require("./flags/cIARBOqd.svg");

/* loaded by smart-asset */
var m$B = require("./flags/feQyiZUi.svg");

/* loaded by smart-asset */
var s$B = require("./flags/fEmdFtxQ.svg");

var BY = {
  l: l$B,
  m: m$B,
  s: s$B
};

/* loaded by smart-asset */
var l$C = require("./flags/bSeyOUKU.svg");

/* loaded by smart-asset */
var m$C = require("./flags/tSxrzWPt.svg");

/* loaded by smart-asset */
var s$C = require("./flags/cUWkIpNU.svg");

var BZ = {
  l: l$C,
  m: m$C,
  s: s$C
};

/* loaded by smart-asset */
var l$D = require("./flags/eFRGkdjM.svg");

/* loaded by smart-asset */
var m$D = require("./flags/bxyMFCXG.svg");

/* loaded by smart-asset */
var s$D = require("./flags/CMXAGMgr.svg");

var CA = {
  l: l$D,
  m: m$D,
  s: s$D
};

/* loaded by smart-asset */
var l$E = require("./flags/dJpZBueX.svg");

/* loaded by smart-asset */
var m$E = require("./flags/exyXwKJV.svg");

/* loaded by smart-asset */
var s$E = require("./flags/bFHiUQDX.svg");

var CC = {
  l: l$E,
  m: m$E,
  s: s$E
};

/* loaded by smart-asset */
var l$F = require("./flags/ljMyAyQZ.svg");

/* loaded by smart-asset */
var m$F = require("./flags/bPyecGkQ.svg");

/* loaded by smart-asset */
var s$F = require("./flags/hzMePCqv.svg");

var CD = {
  l: l$F,
  m: m$F,
  s: s$F
};

/* loaded by smart-asset */
var l$G = require("./flags/cyKkxYOe.svg");

/* loaded by smart-asset */
var m$G = require("./flags/bkqngizT.svg");

/* loaded by smart-asset */
var s$G = require("./flags/dAwmbQQw.svg");

var CF = {
  l: l$G,
  m: m$G,
  s: s$G
};

/* loaded by smart-asset */
var l$H = require("./flags/bGRHuxYg.svg");

/* loaded by smart-asset */
var m$H = require("./flags/eiYYiePY.svg");

/* loaded by smart-asset */
var s$H = require("./flags/eXQtNqjm.svg");

var CG = {
  l: l$H,
  m: m$H,
  s: s$H
};

/* loaded by smart-asset */
var l$I = require("./flags/dsBhTUEu.svg");

/* loaded by smart-asset */
var m$I = require("./flags/fuUUQCTv.svg");

/* loaded by smart-asset */
var s$I = require("./flags/NzVaiqPN.svg");

var CH = {
  l: l$I,
  m: m$I,
  s: s$I
};

/* loaded by smart-asset */
var l$J = require("./flags/fKBuzUhJ.svg");

/* loaded by smart-asset */
var m$J = require("./flags/cuYPtvBa.svg");

/* loaded by smart-asset */
var s$J = require("./flags/ccXSMfYn.svg");

var CI = {
  l: l$J,
  m: m$J,
  s: s$J
};

/* loaded by smart-asset */
var l$K = require("./flags/fawFBoWL.svg");

/* loaded by smart-asset */
var m$K = require("./flags/emVBuoFM.svg");

/* loaded by smart-asset */
var s$K = require("./flags/ccyvjQXx.svg");

var CK = {
  l: l$K,
  m: m$K,
  s: s$K
};

/* loaded by smart-asset */
var l$L = require("./flags/fDReLJQY.svg");

/* loaded by smart-asset */
var m$L = require("./flags/fchtKtFQ.svg");

/* loaded by smart-asset */
var s$L = require("./flags/dTrEaLFy.svg");

var CL = {
  l: l$L,
  m: m$L,
  s: s$L
};

/* loaded by smart-asset */
var l$M = require("./flags/fkYNEQGN.svg");

/* loaded by smart-asset */
var m$M = require("./flags/dgzDcOnb.svg");

/* loaded by smart-asset */
var s$M = require("./flags/fjvJlJdR.svg");

var CM = {
  l: l$M,
  m: m$M,
  s: s$M
};

/* loaded by smart-asset */
var l$N = require("./flags/bnENMiIE.svg");

/* loaded by smart-asset */
var m$N = require("./flags/clSHKXns.svg");

/* loaded by smart-asset */
var s$N = require("./flags/cPUHCENR.svg");

var CN = {
  l: l$N,
  m: m$N,
  s: s$N
};

/* loaded by smart-asset */
var l$O = require("./flags/eUTljdxT.svg");

/* loaded by smart-asset */
var m$O = require("./flags/cPFubNUh.svg");

/* loaded by smart-asset */
var s$O = require("./flags/bKurBYEK.svg");

var CO = {
  l: l$O,
  m: m$O,
  s: s$O
};

/* loaded by smart-asset */
var l$P = require("./flags/emqaCauG.svg");

/* loaded by smart-asset */
var m$P = require("./flags/cdtloDXb.svg");

/* loaded by smart-asset */
var s$P = require("./flags/dSATOYHJ.svg");

var CR = {
  l: l$P,
  m: m$P,
  s: s$P
};

/* loaded by smart-asset */
var l$Q = require("./flags/dlYIjLNR.svg");

/* loaded by smart-asset */
var m$Q = require("./flags/bBUzvAxI.svg");

/* loaded by smart-asset */
var s$Q = require("./flags/eXgZDIRL.svg");

var CU = {
  l: l$Q,
  m: m$Q,
  s: s$Q
};

/* loaded by smart-asset */
var l$R = require("./flags/eEGZLAwy.svg");

/* loaded by smart-asset */
var m$R = require("./flags/eoSSVJUL.svg");

/* loaded by smart-asset */
var s$R = require("./flags/dMHPLRxJ.svg");

var CV = {
  l: l$R,
  m: m$R,
  s: s$R
};

/* loaded by smart-asset */
var l$S = require("./flags/TupmKlXO.svg");

/* loaded by smart-asset */
var m$S = require("./flags/tXnfAdnK.svg");

/* loaded by smart-asset */
var s$S = require("./flags/cazWuQhH.svg");

var CW = {
  l: l$S,
  m: m$S,
  s: s$S
};

/* loaded by smart-asset */
var l$T = require("./flags/fyJbvZtc.svg");

/* loaded by smart-asset */
var m$T = require("./flags/hombXVtS.svg");

/* loaded by smart-asset */
var s$T = require("./flags/bxuvoaPB.svg");

var CX = {
  l: l$T,
  m: m$T,
  s: s$T
};

/* loaded by smart-asset */
var l$U = require("./flags/eXuJIWyR.svg");

/* loaded by smart-asset */
var m$U = require("./flags/dvJekvkE.svg");

/* loaded by smart-asset */
var s$U = require("./flags/dnZaZsEQ.svg");

var CY = {
  l: l$U,
  m: m$U,
  s: s$U
};

/* loaded by smart-asset */
var l$V = require("./flags/edVTBBHD.svg");

/* loaded by smart-asset */
var m$V = require("./flags/nwZzkdyp.svg");

/* loaded by smart-asset */
var s$V = require("./flags/eeRVuySV.svg");

var CZ = {
  l: l$V,
  m: m$V,
  s: s$V
};

/* loaded by smart-asset */
var l$W = require("./flags/fYvJgdle.svg");

/* loaded by smart-asset */
var m$W = require("./flags/fQigZxbs.svg");

/* loaded by smart-asset */
var s$W = require("./flags/byMflIdn.svg");

var DE = {
  l: l$W,
  m: m$W,
  s: s$W
};

/* loaded by smart-asset */
var l$X = require("./flags/kOlUMQpP.svg");

/* loaded by smart-asset */
var m$X = require("./flags/CrHKlZcR.svg");

/* loaded by smart-asset */
var s$X = require("./flags/dDcECIaU.svg");

var DJ = {
  l: l$X,
  m: m$X,
  s: s$X
};

/* loaded by smart-asset */
var l$Y = require("./flags/svWeqqYr.svg");

/* loaded by smart-asset */
var m$Y = require("./flags/eBXJopVs.svg");

/* loaded by smart-asset */
var s$Y = require("./flags/dNkKAMVQ.svg");

var DK = {
  l: l$Y,
  m: m$Y,
  s: s$Y
};

/* loaded by smart-asset */
var l$Z = require("./flags/cwrJEHqJ.svg");

/* loaded by smart-asset */
var m$Z = require("./flags/fVZfCyoE.svg");

/* loaded by smart-asset */
var s$Z = require("./flags/fmZTyYqn.svg");

var DM = {
  l: l$Z,
  m: m$Z,
  s: s$Z
};

/* loaded by smart-asset */
var l$_ = require("./flags/fmgggAEo.svg");

/* loaded by smart-asset */
var m$_ = require("./flags/fFgDAjhB.svg");

/* loaded by smart-asset */
var s$_ = require("./flags/dqUBSKil.svg");

var DO = {
  l: l$_,
  m: m$_,
  s: s$_
};

/* loaded by smart-asset */
var l$$ = require("./flags/fgKpbvyg.svg");

/* loaded by smart-asset */
var m$$ = require("./flags/joqOQGPp.svg");

/* loaded by smart-asset */
var s$$ = require("./flags/dDWTTmTh.svg");

var EC = {
  l: l$$,
  m: m$$,
  s: s$$
};

/* loaded by smart-asset */
var l$10 = require("./flags/XMBuAhQN.svg");

/* loaded by smart-asset */
var m$10 = require("./flags/lkXHXwos.svg");

/* loaded by smart-asset */
var s$10 = require("./flags/etyNUkbT.svg");

var EE = {
  l: l$10,
  m: m$10,
  s: s$10
};

/* loaded by smart-asset */
var l$11 = require("./flags/ecTghgBJ.svg");

/* loaded by smart-asset */
var m$11 = require("./flags/bvKpkAem.svg");

/* loaded by smart-asset */
var s$11 = require("./flags/fkLfLFkd.svg");

var EG = {
  l: l$11,
  m: m$11,
  s: s$11
};

/* loaded by smart-asset */
var l$12 = require("./flags/fbAPNkEA.svg");

/* loaded by smart-asset */
var m$12 = require("./flags/fwGJzKUr.svg");

/* loaded by smart-asset */
var s$12 = require("./flags/fzMRvHMh.svg");

var EH = {
  l: l$12,
  m: m$12,
  s: s$12
};

/* loaded by smart-asset */
var l$13 = require("./flags/ejJJgbwm.svg");

/* loaded by smart-asset */
var m$13 = require("./flags/dKPgewSR.svg");

/* loaded by smart-asset */
var s$13 = require("./flags/dKLedmoj.svg");

var ER = {
  l: l$13,
  m: m$13,
  s: s$13
};

/* loaded by smart-asset */
var l$14 = require("./flags/bidYeQXv.svg");

/* loaded by smart-asset */
var m$14 = require("./flags/eYmMHioW.svg");

/* loaded by smart-asset */
var s$14 = require("./flags/eWFTSrcY.svg");

var ES = {
  l: l$14,
  m: m$14,
  s: s$14
};

/* loaded by smart-asset */
var l$15 = require("./flags/fVIOMJxO.svg");

/* loaded by smart-asset */
var m$15 = require("./flags/dzultDGg.svg");

/* loaded by smart-asset */
var s$15 = require("./flags/euzybUmd.svg");

var ET = {
  l: l$15,
  m: m$15,
  s: s$15
};

/* loaded by smart-asset */
var l$16 = require("./flags/dKAfHarI.svg");

/* loaded by smart-asset */
var m$16 = require("./flags/dptshupw.svg");

/* loaded by smart-asset */
var s$16 = require("./flags/bCgUXnSd.svg");

var EU = {
  l: l$16,
  m: m$16,
  s: s$16
};

/* loaded by smart-asset */
var l$17 = require("./flags/caNsqYqW.svg");

/* loaded by smart-asset */
var m$17 = require("./flags/VJkMLZOH.svg");

/* loaded by smart-asset */
var s$17 = require("./flags/bEAsgYGo.svg");

var FI = {
  l: l$17,
  m: m$17,
  s: s$17
};

/* loaded by smart-asset */
var l$18 = require("./flags/cLqDISqh.svg");

/* loaded by smart-asset */
var m$18 = require("./flags/eMCgVoTg.svg");

/* loaded by smart-asset */
var s$18 = require("./flags/cWEGAEFp.svg");

var FJ = {
  l: l$18,
  m: m$18,
  s: s$18
};

/* loaded by smart-asset */
var l$19 = require("./flags/SAgLsQgW.svg");

/* loaded by smart-asset */
var m$19 = require("./flags/dQFumuMZ.svg");

/* loaded by smart-asset */
var s$19 = require("./flags/eXySXfBc.svg");

var FK = {
  l: l$19,
  m: m$19,
  s: s$19
};

/* loaded by smart-asset */
var l$1a = require("./flags/fIHqNDuB.svg");

/* loaded by smart-asset */
var m$1a = require("./flags/dVxCzmoY.svg");

/* loaded by smart-asset */
var s$1a = require("./flags/APwosOeC.svg");

var FM = {
  l: l$1a,
  m: m$1a,
  s: s$1a
};

/* loaded by smart-asset */
var l$1b = require("./flags/ZocKvbhN.svg");

/* loaded by smart-asset */
var m$1b = require("./flags/cMqLmzsp.svg");

/* loaded by smart-asset */
var s$1b = require("./flags/dFZpGIoD.svg");

var FO = {
  l: l$1b,
  m: m$1b,
  s: s$1b
};

/* loaded by smart-asset */
var l$1c = require("./flags/BqEXvFie.svg");

/* loaded by smart-asset */
var m$1c = require("./flags/erjfMsri.svg");

/* loaded by smart-asset */
var s$1c = require("./flags/dteVKgzU.svg");

var FR = {
  l: l$1c,
  m: m$1c,
  s: s$1c
};

/* loaded by smart-asset */
var l$1d = require("./flags/wYyfJMCx.svg");

/* loaded by smart-asset */
var m$1d = require("./flags/epleIFLg.svg");

/* loaded by smart-asset */
var s$1d = require("./flags/bOAKCDku.svg");

var GA = {
  l: l$1d,
  m: m$1d,
  s: s$1d
};

/* loaded by smart-asset */
var l$1e = require("./flags/bDUiqsQg.svg");

/* loaded by smart-asset */
var m$1e = require("./flags/CprPbfIu.svg");

/* loaded by smart-asset */
var s$1e = require("./flags/JhgMAqJQ.svg");

var GB_ENG = {
  l: l$1e,
  m: m$1e,
  s: s$1e
};

/* loaded by smart-asset */
var l$1f = require("./flags/cWatOWeb.svg");

/* loaded by smart-asset */
var m$1f = require("./flags/ZWIYtnyj.svg");

/* loaded by smart-asset */
var s$1f = require("./flags/MaVvqWEZ.svg");

var GB_SCT = {
  l: l$1f,
  m: m$1f,
  s: s$1f
};

/* loaded by smart-asset */
var l$1g = require("./flags/dZjcbjeG.svg");

/* loaded by smart-asset */
var m$1g = require("./flags/blKRKJKn.svg");

/* loaded by smart-asset */
var s$1g = require("./flags/nLuTjOfi.svg");

var GB_UKM = {
  l: l$1g,
  m: m$1g,
  s: s$1g
};

/* loaded by smart-asset */
var l$1h = require("./flags/epVPrVso.svg");

/* loaded by smart-asset */
var m$1h = require("./flags/HkXonsSg.svg");

/* loaded by smart-asset */
var s$1h = require("./flags/eeIAqXMk.svg");

var GB_WLS = {
  l: l$1h,
  m: m$1h,
  s: s$1h
};

/* loaded by smart-asset */
var l$1i = require("./flags/cedHhlqx.svg");

/* loaded by smart-asset */
var m$1i = require("./flags/foIMFqca.svg");

/* loaded by smart-asset */
var s$1i = require("./flags/bWMoqDwl.svg");

var GD = {
  l: l$1i,
  m: m$1i,
  s: s$1i
};

/* loaded by smart-asset */
var l$1j = require("./flags/bXPtJhHD.svg");

/* loaded by smart-asset */
var m$1j = require("./flags/RUvhzpyV.svg");

/* loaded by smart-asset */
var s$1j = require("./flags/PFCfzesE.svg");

var GE = {
  l: l$1j,
  m: m$1j,
  s: s$1j
};

/* loaded by smart-asset */
var l$1k = require("./flags/bvdXPtVG.svg");

/* loaded by smart-asset */
var m$1k = require("./flags/eTeoOwbw.svg");

/* loaded by smart-asset */
var s$1k = require("./flags/rwOOkJLk.svg");

var GF = {
  l: l$1k,
  m: m$1k,
  s: s$1k
};

/* loaded by smart-asset */
var l$1l = require("./flags/cNnaKhUc.svg");

/* loaded by smart-asset */
var m$1l = require("./flags/ehXjfQEm.svg");

/* loaded by smart-asset */
var s$1l = require("./flags/PMIlrcQd.svg");

var GG = {
  l: l$1l,
  m: m$1l,
  s: s$1l
};

/* loaded by smart-asset */
var l$1m = require("./flags/cDbxrUVI.svg");

/* loaded by smart-asset */
var m$1m = require("./flags/cJYLRzZq.svg");

/* loaded by smart-asset */
var s$1m = require("./flags/fJGwYRvQ.svg");

var GH = {
  l: l$1m,
  m: m$1m,
  s: s$1m
};

/* loaded by smart-asset */
var l$1n = require("./flags/oIAUpwJu.svg");

/* loaded by smart-asset */
var m$1n = require("./flags/caMZcVDk.svg");

/* loaded by smart-asset */
var s$1n = require("./flags/dFsdPMFk.svg");

var GI = {
  l: l$1n,
  m: m$1n,
  s: s$1n
};

/* loaded by smart-asset */
var l$1o = require("./flags/fwDnzGBh.svg");

/* loaded by smart-asset */
var m$1o = require("./flags/pMXFRpjF.svg");

/* loaded by smart-asset */
var s$1o = require("./flags/evkzzREr.svg");

var GL = {
  l: l$1o,
  m: m$1o,
  s: s$1o
};

/* loaded by smart-asset */
var l$1p = require("./flags/ezhysLls.svg");

/* loaded by smart-asset */
var m$1p = require("./flags/dbYKOfRN.svg");

/* loaded by smart-asset */
var s$1p = require("./flags/fTPLwjff.svg");

var GM = {
  l: l$1p,
  m: m$1p,
  s: s$1p
};

/* loaded by smart-asset */
var l$1q = require("./flags/duXCJulg.svg");

/* loaded by smart-asset */
var m$1q = require("./flags/dHDeNFfj.svg");

/* loaded by smart-asset */
var s$1q = require("./flags/erFPEGZK.svg");

var GN = {
  l: l$1q,
  m: m$1q,
  s: s$1q
};

/* loaded by smart-asset */
var l$1r = require("./flags/fpmHNEsV.svg");

/* loaded by smart-asset */
var m$1r = require("./flags/djsJgFDG.svg");

/* loaded by smart-asset */
var s$1r = require("./flags/fkcHlhHg.svg");

var GP = {
  l: l$1r,
  m: m$1r,
  s: s$1r
};

/* loaded by smart-asset */
var l$1s = require("./flags/fMBUjzyX.svg");

/* loaded by smart-asset */
var m$1s = require("./flags/ePlkYOLv.svg");

/* loaded by smart-asset */
var s$1s = require("./flags/eEwjSmNS.svg");

var GR = {
  l: l$1s,
  m: m$1s,
  s: s$1s
};

/* loaded by smart-asset */
var l$1t = require("./flags/fHZwDyeM.svg");

/* loaded by smart-asset */
var m$1t = require("./flags/czFixeGl.svg");

/* loaded by smart-asset */
var s$1t = require("./flags/fbksHjaj.svg");

var GS = {
  l: l$1t,
  m: m$1t,
  s: s$1t
};

/* loaded by smart-asset */
var l$1u = require("./flags/cYcNnGFJ.svg");

/* loaded by smart-asset */
var m$1u = require("./flags/fHFwOdcR.svg");

/* loaded by smart-asset */
var s$1u = require("./flags/dpQtcTKw.svg");

var GT = {
  l: l$1u,
  m: m$1u,
  s: s$1u
};

/* loaded by smart-asset */
var l$1v = require("./flags/bAoiaeHD.svg");

/* loaded by smart-asset */
var m$1v = require("./flags/ckNoFrBZ.svg");

/* loaded by smart-asset */
var s$1v = require("./flags/bpdzNJci.svg");

var GU = {
  l: l$1v,
  m: m$1v,
  s: s$1v
};

/* loaded by smart-asset */
var l$1w = require("./flags/bqrqhWku.svg");

/* loaded by smart-asset */
var m$1w = require("./flags/bfNSpoiZ.svg");

/* loaded by smart-asset */
var s$1w = require("./flags/dTLSJSsi.svg");

var GW = {
  l: l$1w,
  m: m$1w,
  s: s$1w
};

/* loaded by smart-asset */
var l$1x = require("./flags/cbZHHGvM.svg");

/* loaded by smart-asset */
var m$1x = require("./flags/bhRsPtUj.svg");

/* loaded by smart-asset */
var s$1x = require("./flags/dQmTEhEU.svg");

var GY = {
  l: l$1x,
  m: m$1x,
  s: s$1x
};

/* loaded by smart-asset */
var l$1y = require("./flags/fRLlYtza.svg");

/* loaded by smart-asset */
var m$1y = require("./flags/caaPRGyP.svg");

/* loaded by smart-asset */
var s$1y = require("./flags/dugxUrMg.svg");

var HK = {
  l: l$1y,
  m: m$1y,
  s: s$1y
};

/* loaded by smart-asset */
var l$1z = require("./flags/cXhoVoUK.svg");

/* loaded by smart-asset */
var m$1z = require("./flags/czRjQYev.svg");

/* loaded by smart-asset */
var s$1z = require("./flags/bJVDZynj.svg");

var HM = {
  l: l$1z,
  m: m$1z,
  s: s$1z
};

/* loaded by smart-asset */
var l$1A = require("./flags/gaiQKgTB.svg");

/* loaded by smart-asset */
var m$1A = require("./flags/cwocWZXC.svg");

/* loaded by smart-asset */
var s$1A = require("./flags/nXleDMYq.svg");

var HN = {
  l: l$1A,
  m: m$1A,
  s: s$1A
};

/* loaded by smart-asset */
var l$1B = require("./flags/tsqZBGAT.svg");

/* loaded by smart-asset */
var m$1B = require("./flags/eYSVqcWA.svg");

/* loaded by smart-asset */
var s$1B = require("./flags/eJLuioXk.svg");

var HR = {
  l: l$1B,
  m: m$1B,
  s: s$1B
};

/* loaded by smart-asset */
var l$1C = require("./flags/GFwdUVLZ.svg");

/* loaded by smart-asset */
var m$1C = require("./flags/fUxiFvZX.svg");

/* loaded by smart-asset */
var s$1C = require("./flags/fOvcrbKX.svg");

var HT = {
  l: l$1C,
  m: m$1C,
  s: s$1C
};

/* loaded by smart-asset */
var l$1D = require("./flags/baLqOrvs.svg");

/* loaded by smart-asset */
var m$1D = require("./flags/bioNkKfI.svg");

/* loaded by smart-asset */
var s$1D = require("./flags/cgAZMOWj.svg");

var HU = {
  l: l$1D,
  m: m$1D,
  s: s$1D
};

/* loaded by smart-asset */
var l$1E = require("./flags/flZtCBMA.svg");

/* loaded by smart-asset */
var m$1E = require("./flags/flRfUCNX.svg");

/* loaded by smart-asset */
var s$1E = require("./flags/bmJqlQpc.svg");

var ID = {
  l: l$1E,
  m: m$1E,
  s: s$1E
};

/* loaded by smart-asset */
var l$1F = require("./flags/fQauUIGs.svg");

/* loaded by smart-asset */
var m$1F = require("./flags/flHDckno.svg");

/* loaded by smart-asset */
var s$1F = require("./flags/doSYDCIW.svg");

var IE = {
  l: l$1F,
  m: m$1F,
  s: s$1F
};

/* loaded by smart-asset */
var l$1G = require("./flags/fXWoHmqC.svg");

/* loaded by smart-asset */
var m$1G = require("./flags/cNxPhLce.svg");

/* loaded by smart-asset */
var s$1G = require("./flags/fdJTTWDU.svg");

var IL = {
  l: l$1G,
  m: m$1G,
  s: s$1G
};

/* loaded by smart-asset */
var l$1H = require("./flags/brBuWJze.svg");

/* loaded by smart-asset */
var m$1H = require("./flags/cTCLGboT.svg");

/* loaded by smart-asset */
var s$1H = require("./flags/coYPcqVd.svg");

var IM = {
  l: l$1H,
  m: m$1H,
  s: s$1H
};

/* loaded by smart-asset */
var l$1I = require("./flags/cXhnMQdl.svg");

/* loaded by smart-asset */
var m$1I = require("./flags/fCBqQFEN.svg");

/* loaded by smart-asset */
var s$1I = require("./flags/cQQmfpfm.svg");

var IN = {
  l: l$1I,
  m: m$1I,
  s: s$1I
};

/* loaded by smart-asset */
var l$1J = require("./flags/gaZLTJUJ.svg");

/* loaded by smart-asset */
var m$1J = require("./flags/fSAyMPEu.svg");

/* loaded by smart-asset */
var s$1J = require("./flags/dkssMchz.svg");

var IO = {
  l: l$1J,
  m: m$1J,
  s: s$1J
};

/* loaded by smart-asset */
var l$1K = require("./flags/bOAqotND.svg");

/* loaded by smart-asset */
var m$1K = require("./flags/dmaIaLgj.svg");

/* loaded by smart-asset */
var s$1K = require("./flags/cBiRSMEY.svg");

var IQ = {
  l: l$1K,
  m: m$1K,
  s: s$1K
};

/* loaded by smart-asset */
var l$1L = require("./flags/fZsrYrWh.svg");

/* loaded by smart-asset */
var m$1L = require("./flags/blXKnlRT.svg");

/* loaded by smart-asset */
var s$1L = require("./flags/focZhfLw.svg");

var IR = {
  l: l$1L,
  m: m$1L,
  s: s$1L
};

/* loaded by smart-asset */
var l$1M = require("./flags/bRLTjfeP.svg");

/* loaded by smart-asset */
var m$1M = require("./flags/HZaDvmuy.svg");

/* loaded by smart-asset */
var s$1M = require("./flags/tjeQclhV.svg");

var IS = {
  l: l$1M,
  m: m$1M,
  s: s$1M
};

/* loaded by smart-asset */
var l$1N = require("./flags/znFCzzJK.svg");

/* loaded by smart-asset */
var m$1N = require("./flags/eflAqpPY.svg");

/* loaded by smart-asset */
var s$1N = require("./flags/fWQVtYhq.svg");

var IT = {
  l: l$1N,
  m: m$1N,
  s: s$1N
};

/* loaded by smart-asset */
var l$1O = require("./flags/drULDoJv.svg");

/* loaded by smart-asset */
var m$1O = require("./flags/fLlmRzjo.svg");

/* loaded by smart-asset */
var s$1O = require("./flags/cDjGwgrX.svg");

var JE = {
  l: l$1O,
  m: m$1O,
  s: s$1O
};

/* loaded by smart-asset */
var l$1P = require("./flags/dylZetIx.svg");

/* loaded by smart-asset */
var m$1P = require("./flags/dxrkWdjl.svg");

/* loaded by smart-asset */
var s$1P = require("./flags/bWtByWTJ.svg");

var JM = {
  l: l$1P,
  m: m$1P,
  s: s$1P
};

/* loaded by smart-asset */
var l$1Q = require("./flags/dWoPkUmH.svg");

/* loaded by smart-asset */
var m$1Q = require("./flags/cQZIyFiH.svg");

/* loaded by smart-asset */
var s$1Q = require("./flags/dbBcOvbF.svg");

var JO = {
  l: l$1Q,
  m: m$1Q,
  s: s$1Q
};

/* loaded by smart-asset */
var l$1R = require("./flags/fwMWpdvd.svg");

/* loaded by smart-asset */
var m$1R = require("./flags/WEmZpGSs.svg");

/* loaded by smart-asset */
var s$1R = require("./flags/dGKpKbED.svg");

var JP = {
  l: l$1R,
  m: m$1R,
  s: s$1R
};

/* loaded by smart-asset */
var l$1S = require("./flags/cSjDAErQ.svg");

/* loaded by smart-asset */
var m$1S = require("./flags/cnTVeFQR.svg");

/* loaded by smart-asset */
var s$1S = require("./flags/cvXjkEHt.svg");

var KE = {
  l: l$1S,
  m: m$1S,
  s: s$1S
};

/* loaded by smart-asset */
var l$1T = require("./flags/bjtdOeCS.svg");

/* loaded by smart-asset */
var m$1T = require("./flags/fErqJaCw.svg");

/* loaded by smart-asset */
var s$1T = require("./flags/bGTRqiGY.svg");

var KG = {
  l: l$1T,
  m: m$1T,
  s: s$1T
};

/* loaded by smart-asset */
var l$1U = require("./flags/fBsMCDkL.svg");

/* loaded by smart-asset */
var m$1U = require("./flags/dzEIYAZL.svg");

/* loaded by smart-asset */
var s$1U = require("./flags/bBBPiRYy.svg");

var KH = {
  l: l$1U,
  m: m$1U,
  s: s$1U
};

/* loaded by smart-asset */
var l$1V = require("./flags/dxuJIaIz.svg");

/* loaded by smart-asset */
var m$1V = require("./flags/fsTgEHfc.svg");

/* loaded by smart-asset */
var s$1V = require("./flags/TThnVXui.svg");

var KI = {
  l: l$1V,
  m: m$1V,
  s: s$1V
};

/* loaded by smart-asset */
var l$1W = require("./flags/bgonJTzV.svg");

/* loaded by smart-asset */
var m$1W = require("./flags/eephGvjX.svg");

/* loaded by smart-asset */
var s$1W = require("./flags/dzYlltJK.svg");

var KM = {
  l: l$1W,
  m: m$1W,
  s: s$1W
};

/* loaded by smart-asset */
var l$1X = require("./flags/bAWqvfnn.svg");

/* loaded by smart-asset */
var m$1X = require("./flags/dFPzFFmF.svg");

/* loaded by smart-asset */
var s$1X = require("./flags/NSrCTbxU.svg");

var KN = {
  l: l$1X,
  m: m$1X,
  s: s$1X
};

/* loaded by smart-asset */
var l$1Y = require("./flags/ftXxAqRP.svg");

/* loaded by smart-asset */
var m$1Y = require("./flags/cIfXzePy.svg");

/* loaded by smart-asset */
var s$1Y = require("./flags/exuCEuUU.svg");

var KP = {
  l: l$1Y,
  m: m$1Y,
  s: s$1Y
};

/* loaded by smart-asset */
var l$1Z = require("./flags/bFaUkSdq.svg");

/* loaded by smart-asset */
var m$1Z = require("./flags/cxlCNwTG.svg");

/* loaded by smart-asset */
var s$1Z = require("./flags/fcjeGMdd.svg");

var KR = {
  l: l$1Z,
  m: m$1Z,
  s: s$1Z
};

/* loaded by smart-asset */
var l$1_ = require("./flags/fqBnsoNE.svg");

/* loaded by smart-asset */
var m$1_ = require("./flags/dyMzHWpJ.svg");

/* loaded by smart-asset */
var s$1_ = require("./flags/dxPDvUiW.svg");

var KW = {
  l: l$1_,
  m: m$1_,
  s: s$1_
};

/* loaded by smart-asset */
var l$1$ = require("./flags/btjLVUaM.svg");

/* loaded by smart-asset */
var m$1$ = require("./flags/cpmjEcNz.svg");

/* loaded by smart-asset */
var s$1$ = require("./flags/bGAzwwdT.svg");

var KY = {
  l: l$1$,
  m: m$1$,
  s: s$1$
};

/* loaded by smart-asset */
var l$20 = require("./flags/eSxbpHiI.svg");

/* loaded by smart-asset */
var m$20 = require("./flags/fNnjheoC.svg");

/* loaded by smart-asset */
var s$20 = require("./flags/ezeYSHpl.svg");

var KZ = {
  l: l$20,
  m: m$20,
  s: s$20
};

/* loaded by smart-asset */
var l$21 = require("./flags/bXyUgFUi.svg");

/* loaded by smart-asset */
var m$21 = require("./flags/bqSiJiZW.svg");

/* loaded by smart-asset */
var s$21 = require("./flags/EHpTsfPn.svg");

var LA = {
  l: l$21,
  m: m$21,
  s: s$21
};

/* loaded by smart-asset */
var l$22 = require("./flags/epRgXayD.svg");

/* loaded by smart-asset */
var m$22 = require("./flags/RtDVlVXq.svg");

/* loaded by smart-asset */
var s$22 = require("./flags/cZiLwtdz.svg");

var LB = {
  l: l$22,
  m: m$22,
  s: s$22
};

/* loaded by smart-asset */
var l$23 = require("./flags/dRCYdPkh.svg");

/* loaded by smart-asset */
var m$23 = require("./flags/eYjdMrBU.svg");

/* loaded by smart-asset */
var s$23 = require("./flags/bQyYuTSp.svg");

var LC = {
  l: l$23,
  m: m$23,
  s: s$23
};

/* loaded by smart-asset */
var l$24 = require("./flags/eVjrKqlf.svg");

/* loaded by smart-asset */
var m$24 = require("./flags/dCVuRwuS.svg");

/* loaded by smart-asset */
var s$24 = require("./flags/mJGGhYTV.svg");

var LI = {
  l: l$24,
  m: m$24,
  s: s$24
};

/* loaded by smart-asset */
var l$25 = require("./flags/bgAWeBzH.svg");

/* loaded by smart-asset */
var m$25 = require("./flags/bKWSUcqc.svg");

/* loaded by smart-asset */
var s$25 = require("./flags/dwlTEQJL.svg");

var LK = {
  l: l$25,
  m: m$25,
  s: s$25
};

/* loaded by smart-asset */
var l$26 = require("./flags/cmlGwbFY.svg");

/* loaded by smart-asset */
var m$26 = require("./flags/bdVgMwKl.svg");

/* loaded by smart-asset */
var s$26 = require("./flags/cEnmIEGi.svg");

var LR = {
  l: l$26,
  m: m$26,
  s: s$26
};

/* loaded by smart-asset */
var l$27 = require("./flags/bcHNGaqV.svg");

/* loaded by smart-asset */
var m$27 = require("./flags/KSMBxWTm.svg");

/* loaded by smart-asset */
var s$27 = require("./flags/bZxqJEGI.svg");

var LS = {
  l: l$27,
  m: m$27,
  s: s$27
};

/* loaded by smart-asset */
var l$28 = require("./flags/rcRLIOny.svg");

/* loaded by smart-asset */
var m$28 = require("./flags/mBFRIgqO.svg");

/* loaded by smart-asset */
var s$28 = require("./flags/fcWEKufT.svg");

var LT = {
  l: l$28,
  m: m$28,
  s: s$28
};

/* loaded by smart-asset */
var l$29 = require("./flags/eXMWoOYn.svg");

/* loaded by smart-asset */
var m$29 = require("./flags/eDXkBGzC.svg");

/* loaded by smart-asset */
var s$29 = require("./flags/faHmHpfI.svg");

var LU = {
  l: l$29,
  m: m$29,
  s: s$29
};

/* loaded by smart-asset */
var l$2a = require("./flags/dZKLvjxD.svg");

/* loaded by smart-asset */
var m$2a = require("./flags/eaPuvsUS.svg");

/* loaded by smart-asset */
var s$2a = require("./flags/fHsGEtVt.svg");

var LV = {
  l: l$2a,
  m: m$2a,
  s: s$2a
};

/* loaded by smart-asset */
var l$2b = require("./flags/crJOPsHY.svg");

/* loaded by smart-asset */
var m$2b = require("./flags/eCVcrgqM.svg");

/* loaded by smart-asset */
var s$2b = require("./flags/clmmFgxN.svg");

var LY = {
  l: l$2b,
  m: m$2b,
  s: s$2b
};

/* loaded by smart-asset */
var l$2c = require("./flags/dRTcfNJJ.svg");

/* loaded by smart-asset */
var m$2c = require("./flags/eMTjdYFd.svg");

/* loaded by smart-asset */
var s$2c = require("./flags/dNtzifAa.svg");

var MA = {
  l: l$2c,
  m: m$2c,
  s: s$2c
};

/* loaded by smart-asset */
var l$2d = require("./flags/slgdBlkK.svg");

/* loaded by smart-asset */
var m$2d = require("./flags/jADWGXgd.svg");

/* loaded by smart-asset */
var s$2d = require("./flags/dDsipvSl.svg");

var MC = {
  l: l$2d,
  m: m$2d,
  s: s$2d
};

/* loaded by smart-asset */
var l$2e = require("./flags/eWgJFYyc.svg");

/* loaded by smart-asset */
var m$2e = require("./flags/bftvmYMi.svg");

/* loaded by smart-asset */
var s$2e = require("./flags/dRrgbZFT.svg");

var MD = {
  l: l$2e,
  m: m$2e,
  s: s$2e
};

/* loaded by smart-asset */
var l$2f = require("./flags/diXaChGz.svg");

/* loaded by smart-asset */
var m$2f = require("./flags/fIXIEDes.svg");

/* loaded by smart-asset */
var s$2f = require("./flags/fPXrjbuR.svg");

var ME = {
  l: l$2f,
  m: m$2f,
  s: s$2f
};

/* loaded by smart-asset */
var l$2g = require("./flags/dZqDUHGG.svg");

/* loaded by smart-asset */
var m$2g = require("./flags/dXILNgRx.svg");

/* loaded by smart-asset */
var s$2g = require("./flags/dHvtCakL.svg");

var MF = {
  l: l$2g,
  m: m$2g,
  s: s$2g
};

/* loaded by smart-asset */
var l$2h = require("./flags/cTQkqxrz.svg");

/* loaded by smart-asset */
var m$2h = require("./flags/fysiImKs.svg");

/* loaded by smart-asset */
var s$2h = require("./flags/oQtzWfKa.svg");

var MG = {
  l: l$2h,
  m: m$2h,
  s: s$2h
};

/* loaded by smart-asset */
var l$2i = require("./flags/xOqeaCtq.svg");

/* loaded by smart-asset */
var m$2i = require("./flags/exgvOLiX.svg");

/* loaded by smart-asset */
var s$2i = require("./flags/cxjFfcRK.svg");

var MH = {
  l: l$2i,
  m: m$2i,
  s: s$2i
};

/* loaded by smart-asset */
var l$2j = require("./flags/gaMVwBSL.svg");

/* loaded by smart-asset */
var m$2j = require("./flags/evmKCDmN.svg");

/* loaded by smart-asset */
var s$2j = require("./flags/bYRsLToM.svg");

var MK = {
  l: l$2j,
  m: m$2j,
  s: s$2j
};

/* loaded by smart-asset */
var l$2k = require("./flags/cNOhNowK.svg");

/* loaded by smart-asset */
var m$2k = require("./flags/bJRwqVUy.svg");

/* loaded by smart-asset */
var s$2k = require("./flags/kMaeCcQt.svg");

var ML = {
  l: l$2k,
  m: m$2k,
  s: s$2k
};

/* loaded by smart-asset */
var l$2l = require("./flags/ctPlXzVz.svg");

/* loaded by smart-asset */
var m$2l = require("./flags/bEXFogZp.svg");

/* loaded by smart-asset */
var s$2l = require("./flags/bFcCBjXQ.svg");

var MM = {
  l: l$2l,
  m: m$2l,
  s: s$2l
};

/* loaded by smart-asset */
var l$2m = require("./flags/cGqeuQKU.svg");

/* loaded by smart-asset */
var m$2m = require("./flags/dphQgsEX.svg");

/* loaded by smart-asset */
var s$2m = require("./flags/bMzUDcZW.svg");

var MN = {
  l: l$2m,
  m: m$2m,
  s: s$2m
};

/* loaded by smart-asset */
var l$2n = require("./flags/dtUUjjwI.svg");

/* loaded by smart-asset */
var m$2n = require("./flags/wAwBNpFk.svg");

/* loaded by smart-asset */
var s$2n = require("./flags/dLWXprFV.svg");

var MO = {
  l: l$2n,
  m: m$2n,
  s: s$2n
};

/* loaded by smart-asset */
var l$2o = require("./flags/fuBwhWwM.svg");

/* loaded by smart-asset */
var m$2o = require("./flags/fWhrEsBZ.svg");

/* loaded by smart-asset */
var s$2o = require("./flags/egaxuPaU.svg");

var MP = {
  l: l$2o,
  m: m$2o,
  s: s$2o
};

/* loaded by smart-asset */
var l$2p = require("./flags/fYhusypw.svg");

/* loaded by smart-asset */
var m$2p = require("./flags/fsKRRiWn.svg");

/* loaded by smart-asset */
var s$2p = require("./flags/cMrCiglc.svg");

var MQ = {
  l: l$2p,
  m: m$2p,
  s: s$2p
};

/* loaded by smart-asset */
var l$2q = require("./flags/dorxNjfm.svg");

/* loaded by smart-asset */
var m$2q = require("./flags/pccawwTS.svg");

/* loaded by smart-asset */
var s$2q = require("./flags/bMLNWtLE.svg");

var MR = {
  l: l$2q,
  m: m$2q,
  s: s$2q
};

/* loaded by smart-asset */
var l$2r = require("./flags/dUaikwlr.svg");

/* loaded by smart-asset */
var m$2r = require("./flags/FaaYLwhR.svg");

/* loaded by smart-asset */
var s$2r = require("./flags/MtuwOpxm.svg");

var MS = {
  l: l$2r,
  m: m$2r,
  s: s$2r
};

/* loaded by smart-asset */
var l$2s = require("./flags/ejucgrSm.svg");

/* loaded by smart-asset */
var m$2s = require("./flags/eKTJmmvH.svg");

/* loaded by smart-asset */
var s$2s = require("./flags/hJvgXyoe.svg");

var MT = {
  l: l$2s,
  m: m$2s,
  s: s$2s
};

/* loaded by smart-asset */
var l$2t = require("./flags/boipltev.svg");

/* loaded by smart-asset */
var m$2t = require("./flags/dTTiztoa.svg");

/* loaded by smart-asset */
var s$2t = require("./flags/dxuUYWLY.svg");

var MU = {
  l: l$2t,
  m: m$2t,
  s: s$2t
};

/* loaded by smart-asset */
var l$2u = require("./flags/elBdpLhY.svg");

/* loaded by smart-asset */
var m$2u = require("./flags/ezZXXdmi.svg");

/* loaded by smart-asset */
var s$2u = require("./flags/cTqyTYSo.svg");

var MV = {
  l: l$2u,
  m: m$2u,
  s: s$2u
};

/* loaded by smart-asset */
var l$2v = require("./flags/flgtnFrh.svg");

/* loaded by smart-asset */
var m$2v = require("./flags/jEkSCGMB.svg");

/* loaded by smart-asset */
var s$2v = require("./flags/frBKdMOT.svg");

var MW = {
  l: l$2v,
  m: m$2v,
  s: s$2v
};

/* loaded by smart-asset */
var l$2w = require("./flags/fzqCOWDf.svg");

/* loaded by smart-asset */
var m$2w = require("./flags/cyjfMdCy.svg");

/* loaded by smart-asset */
var s$2w = require("./flags/blLeLVfd.svg");

var MX = {
  l: l$2w,
  m: m$2w,
  s: s$2w
};

/* loaded by smart-asset */
var l$2x = require("./flags/fLDSeMOw.svg");

/* loaded by smart-asset */
var m$2x = require("./flags/eDBSDxyg.svg");

/* loaded by smart-asset */
var s$2x = require("./flags/PGquaAro.svg");

var MY = {
  l: l$2x,
  m: m$2x,
  s: s$2x
};

/* loaded by smart-asset */
var l$2y = require("./flags/foIqsJZM.svg");

/* loaded by smart-asset */
var m$2y = require("./flags/PXcJfmEQ.svg");

/* loaded by smart-asset */
var s$2y = require("./flags/fZEbNMol.svg");

var MZ = {
  l: l$2y,
  m: m$2y,
  s: s$2y
};

/* loaded by smart-asset */
var l$2z = require("./flags/bBTrvjRh.svg");

/* loaded by smart-asset */
var m$2z = require("./flags/fPwuWXkS.svg");

/* loaded by smart-asset */
var s$2z = require("./flags/eUPsdAqq.svg");

var NA = {
  l: l$2z,
  m: m$2z,
  s: s$2z
};

/* loaded by smart-asset */
var l$2A = require("./flags/fKKlarBw.svg");

/* loaded by smart-asset */
var m$2A = require("./flags/cBTVeNkg.svg");

/* loaded by smart-asset */
var s$2A = require("./flags/claHuFJy.svg");

var NC = {
  l: l$2A,
  m: m$2A,
  s: s$2A
};

/* loaded by smart-asset */
var l$2B = require("./flags/ffEOmShC.svg");

/* loaded by smart-asset */
var m$2B = require("./flags/cIfIKCwI.svg");

/* loaded by smart-asset */
var s$2B = require("./flags/bHwdzkPp.svg");

var NE = {
  l: l$2B,
  m: m$2B,
  s: s$2B
};

/* loaded by smart-asset */
var l$2C = require("./flags/euDACWqC.svg");

/* loaded by smart-asset */
var m$2C = require("./flags/dBFGFlqs.svg");

/* loaded by smart-asset */
var s$2C = require("./flags/UkfpLcLd.svg");

var NF = {
  l: l$2C,
  m: m$2C,
  s: s$2C
};

/* loaded by smart-asset */
var l$2D = require("./flags/dfrepozI.svg");

/* loaded by smart-asset */
var m$2D = require("./flags/dZZOBcwC.svg");

/* loaded by smart-asset */
var s$2D = require("./flags/derpxJMj.svg");

var NG = {
  l: l$2D,
  m: m$2D,
  s: s$2D
};

/* loaded by smart-asset */
var l$2E = require("./flags/bbBeiaMH.svg");

/* loaded by smart-asset */
var m$2E = require("./flags/fhkiEWxp.svg");

/* loaded by smart-asset */
var s$2E = require("./flags/dLlNjfxW.svg");

var NI = {
  l: l$2E,
  m: m$2E,
  s: s$2E
};

/* loaded by smart-asset */
var l$2F = require("./flags/dYctLEYU.svg");

/* loaded by smart-asset */
var m$2F = require("./flags/eghqEuyC.svg");

/* loaded by smart-asset */
var s$2F = require("./flags/fCpdvTfN.svg");

var NL = {
  l: l$2F,
  m: m$2F,
  s: s$2F
};

/* loaded by smart-asset */
var l$2G = require("./flags/bnfvJCoW.svg");

/* loaded by smart-asset */
var m$2G = require("./flags/dNdcySzo.svg");

/* loaded by smart-asset */
var s$2G = require("./flags/boZwhHRc.svg");

var NO = {
  l: l$2G,
  m: m$2G,
  s: s$2G
};

/* loaded by smart-asset */
var l$2H = require("./flags/dWliRFHL.svg");

/* loaded by smart-asset */
var m$2H = require("./flags/eyuvzQdI.svg");

/* loaded by smart-asset */
var s$2H = require("./flags/cUdHtCZV.svg");

var NP = {
  l: l$2H,
  m: m$2H,
  s: s$2H
};

/* loaded by smart-asset */
var l$2I = require("./flags/eoyXBGGv.svg");

/* loaded by smart-asset */
var m$2I = require("./flags/dQpAFTwU.svg");

/* loaded by smart-asset */
var s$2I = require("./flags/cGPStQhi.svg");

var NR = {
  l: l$2I,
  m: m$2I,
  s: s$2I
};

/* loaded by smart-asset */
var l$2J = require("./flags/dhUiZpmx.svg");

/* loaded by smart-asset */
var m$2J = require("./flags/fdJFWUvm.svg");

/* loaded by smart-asset */
var s$2J = require("./flags/eZqUHMEN.svg");

var NU = {
  l: l$2J,
  m: m$2J,
  s: s$2J
};

/* loaded by smart-asset */
var l$2K = require("./flags/dcXMcjkv.svg");

/* loaded by smart-asset */
var m$2K = require("./flags/bwJltsRS.svg");

/* loaded by smart-asset */
var s$2K = require("./flags/bQjbLuBd.svg");

var NZ = {
  l: l$2K,
  m: m$2K,
  s: s$2K
};

/* loaded by smart-asset */
var l$2L = require("./flags/eKURlgPz.svg");

/* loaded by smart-asset */
var m$2L = require("./flags/cbVtkwaI.svg");

/* loaded by smart-asset */
var s$2L = require("./flags/qKSfWyqh.svg");

var OM = {
  l: l$2L,
  m: m$2L,
  s: s$2L
};

/* loaded by smart-asset */
var l$2M = require("./flags/yeJoSCbi.svg");

/* loaded by smart-asset */
var m$2M = require("./flags/czcuRIMR.svg");

/* loaded by smart-asset */
var s$2M = require("./flags/eMLBmVII.svg");

var PA = {
  l: l$2M,
  m: m$2M,
  s: s$2M
};

/* loaded by smart-asset */
var l$2N = require("./flags/bUvrrARO.svg");

/* loaded by smart-asset */
var m$2N = require("./flags/iTgVHRNY.svg");

/* loaded by smart-asset */
var s$2N = require("./flags/nMYxNGhk.svg");

var PE = {
  l: l$2N,
  m: m$2N,
  s: s$2N
};

/* loaded by smart-asset */
var l$2O = require("./flags/dvAAXinL.svg");

/* loaded by smart-asset */
var m$2O = require("./flags/edYPeWNU.svg");

/* loaded by smart-asset */
var s$2O = require("./flags/dvCpdAOD.svg");

var PF = {
  l: l$2O,
  m: m$2O,
  s: s$2O
};

/* loaded by smart-asset */
var l$2P = require("./flags/ejpVIxaB.svg");

/* loaded by smart-asset */
var m$2P = require("./flags/cOxheSpc.svg");

/* loaded by smart-asset */
var s$2P = require("./flags/bubbaCdX.svg");

var PG = {
  l: l$2P,
  m: m$2P,
  s: s$2P
};

/* loaded by smart-asset */
var l$2Q = require("./flags/emcWWOJr.svg");

/* loaded by smart-asset */
var m$2Q = require("./flags/cITxhruH.svg");

/* loaded by smart-asset */
var s$2Q = require("./flags/dQSZXyTa.svg");

var PH = {
  l: l$2Q,
  m: m$2Q,
  s: s$2Q
};

/* loaded by smart-asset */
var l$2R = require("./flags/fnxGDqei.svg");

/* loaded by smart-asset */
var m$2R = require("./flags/fFRnxyIy.svg");

/* loaded by smart-asset */
var s$2R = require("./flags/wasylYjf.svg");

var PK = {
  l: l$2R,
  m: m$2R,
  s: s$2R
};

/* loaded by smart-asset */
var l$2S = require("./flags/eJyDxCLF.svg");

/* loaded by smart-asset */
var m$2S = require("./flags/dPPigvDX.svg");

/* loaded by smart-asset */
var s$2S = require("./flags/bxxOfqcj.svg");

var PL = {
  l: l$2S,
  m: m$2S,
  s: s$2S
};

/* loaded by smart-asset */
var l$2T = require("./flags/bOyQxplu.svg");

/* loaded by smart-asset */
var m$2T = require("./flags/YMmqVoOT.svg");

/* loaded by smart-asset */
var s$2T = require("./flags/eRUUSRSQ.svg");

var PM = {
  l: l$2T,
  m: m$2T,
  s: s$2T
};

/* loaded by smart-asset */
var l$2U = require("./flags/iBvrLdrV.svg");

/* loaded by smart-asset */
var m$2U = require("./flags/fmbIMOAH.svg");

/* loaded by smart-asset */
var s$2U = require("./flags/cRrHkPDu.svg");

var PN = {
  l: l$2U,
  m: m$2U,
  s: s$2U
};

/* loaded by smart-asset */
var l$2V = require("./flags/btOpzgOy.svg");

/* loaded by smart-asset */
var m$2V = require("./flags/crnilipx.svg");

/* loaded by smart-asset */
var s$2V = require("./flags/MXvdQuON.svg");

var PR = {
  l: l$2V,
  m: m$2V,
  s: s$2V
};

/* loaded by smart-asset */
var l$2W = require("./flags/fwaWypEf.svg");

/* loaded by smart-asset */
var m$2W = require("./flags/etHbacqd.svg");

/* loaded by smart-asset */
var s$2W = require("./flags/fteFNDmK.svg");

var PS = {
  l: l$2W,
  m: m$2W,
  s: s$2W
};

/* loaded by smart-asset */
var l$2X = require("./flags/bmmjHEFg.svg");

/* loaded by smart-asset */
var m$2X = require("./flags/eytxJMmG.svg");

/* loaded by smart-asset */
var s$2X = require("./flags/AtFBHRol.svg");

var PT = {
  l: l$2X,
  m: m$2X,
  s: s$2X
};

/* loaded by smart-asset */
var l$2Y = require("./flags/fkZyaQeR.svg");

/* loaded by smart-asset */
var m$2Y = require("./flags/dIdFhsAP.svg");

/* loaded by smart-asset */
var s$2Y = require("./flags/fIiEkkwc.svg");

var PW = {
  l: l$2Y,
  m: m$2Y,
  s: s$2Y
};

/* loaded by smart-asset */
var l$2Z = require("./flags/eMwQThVA.svg");

/* loaded by smart-asset */
var m$2Z = require("./flags/dUDRFmZs.svg");

/* loaded by smart-asset */
var s$2Z = require("./flags/bfPloEhW.svg");

var PY = {
  l: l$2Z,
  m: m$2Z,
  s: s$2Z
};

/* loaded by smart-asset */
var l$2_ = require("./flags/cgQIrLaJ.svg");

/* loaded by smart-asset */
var m$2_ = require("./flags/cdOEOSTq.svg");

/* loaded by smart-asset */
var s$2_ = require("./flags/eLdOmkjX.svg");

var QA = {
  l: l$2_,
  m: m$2_,
  s: s$2_
};

/* loaded by smart-asset */
var l$2$ = require("./flags/eBEDpJWb.svg");

/* loaded by smart-asset */
var m$2$ = require("./flags/bSjiDgkt.svg");

/* loaded by smart-asset */
var s$2$ = require("./flags/kuVRibOV.svg");

var RAINBOW = {
  l: l$2$,
  m: m$2$,
  s: s$2$
};

/* loaded by smart-asset */
var l$30 = require("./flags/dnJxkhiL.svg");

/* loaded by smart-asset */
var m$30 = require("./flags/dUpNYtXo.svg");

/* loaded by smart-asset */
var s$30 = require("./flags/dBoOVnDI.svg");

var RE = {
  l: l$30,
  m: m$30,
  s: s$30
};

/* loaded by smart-asset */
var l$31 = require("./flags/cRmbtYXw.svg");

/* loaded by smart-asset */
var m$31 = require("./flags/OgJKtUor.svg");

/* loaded by smart-asset */
var s$31 = require("./flags/cStNvlTy.svg");

var RO = {
  l: l$31,
  m: m$31,
  s: s$31
};

/* loaded by smart-asset */
var l$32 = require("./flags/cdQAaxfK.svg");

/* loaded by smart-asset */
var m$32 = require("./flags/cVmoovAH.svg");

/* loaded by smart-asset */
var s$32 = require("./flags/becRPaPB.svg");

var RS = {
  l: l$32,
  m: m$32,
  s: s$32
};

/* loaded by smart-asset */
var l$33 = require("./flags/eWyhrLPB.svg");

/* loaded by smart-asset */
var m$33 = require("./flags/nYmbEPoS.svg");

/* loaded by smart-asset */
var s$33 = require("./flags/deesLYja.svg");

var RU = {
  l: l$33,
  m: m$33,
  s: s$33
};

/* loaded by smart-asset */
var l$34 = require("./flags/cnOxoQcx.svg");

/* loaded by smart-asset */
var m$34 = require("./flags/gcLibCjp.svg");

/* loaded by smart-asset */
var s$34 = require("./flags/bzXbXkTj.svg");

var RW = {
  l: l$34,
  m: m$34,
  s: s$34
};

/* loaded by smart-asset */
var l$35 = require("./flags/eXMNAurc.svg");

/* loaded by smart-asset */
var m$35 = require("./flags/fjOsQVhj.svg");

/* loaded by smart-asset */
var s$35 = require("./flags/dCHSFMmb.svg");

var SA = {
  l: l$35,
  m: m$35,
  s: s$35
};

/* loaded by smart-asset */
var l$36 = require("./flags/bKOjKzdi.svg");

/* loaded by smart-asset */
var m$36 = require("./flags/bXrnwDmj.svg");

/* loaded by smart-asset */
var s$36 = require("./flags/dnVJkWeH.svg");

var SB = {
  l: l$36,
  m: m$36,
  s: s$36
};

/* loaded by smart-asset */
var l$37 = require("./flags/bUYXlqWz.svg");

/* loaded by smart-asset */
var m$37 = require("./flags/dDLnuTnh.svg");

/* loaded by smart-asset */
var s$37 = require("./flags/bGiSFECW.svg");

var SC = {
  l: l$37,
  m: m$37,
  s: s$37
};

/* loaded by smart-asset */
var l$38 = require("./flags/bBcIVAqK.svg");

/* loaded by smart-asset */
var m$38 = require("./flags/evWtAVhm.svg");

/* loaded by smart-asset */
var s$38 = require("./flags/efJzrGMK.svg");

var SD = {
  l: l$38,
  m: m$38,
  s: s$38
};

/* loaded by smart-asset */
var l$39 = require("./flags/fJmXZCWG.svg");

/* loaded by smart-asset */
var m$39 = require("./flags/czrQHrxi.svg");

/* loaded by smart-asset */
var s$39 = require("./flags/ceteKVOO.svg");

var SE = {
  l: l$39,
  m: m$39,
  s: s$39
};

/* loaded by smart-asset */
var l$3a = require("./flags/fxfVxAIQ.svg");

/* loaded by smart-asset */
var m$3a = require("./flags/deJRlUpJ.svg");

/* loaded by smart-asset */
var s$3a = require("./flags/zkspPKGe.svg");

var SG = {
  l: l$3a,
  m: m$3a,
  s: s$3a
};

/* loaded by smart-asset */
var l$3b = require("./flags/eTlqbVpf.svg");

/* loaded by smart-asset */
var m$3b = require("./flags/sSkqiaKc.svg");

/* loaded by smart-asset */
var s$3b = require("./flags/RtAcwsFg.svg");

var SH = {
  l: l$3b,
  m: m$3b,
  s: s$3b
};

/* loaded by smart-asset */
var l$3c = require("./flags/cqAxMhUw.svg");

/* loaded by smart-asset */
var m$3c = require("./flags/duWRFtOa.svg");

/* loaded by smart-asset */
var s$3c = require("./flags/fWszzvfO.svg");

var SI = {
  l: l$3c,
  m: m$3c,
  s: s$3c
};

/* loaded by smart-asset */
var l$3d = require("./flags/fMwWDuNg.svg");

/* loaded by smart-asset */
var m$3d = require("./flags/ftPbCqVI.svg");

/* loaded by smart-asset */
var s$3d = require("./flags/bJanPLOL.svg");

var SJ = {
  l: l$3d,
  m: m$3d,
  s: s$3d
};

/* loaded by smart-asset */
var l$3e = require("./flags/fbnBSfFJ.svg");

/* loaded by smart-asset */
var m$3e = require("./flags/fjQZfNPL.svg");

/* loaded by smart-asset */
var s$3e = require("./flags/zdmMWlOd.svg");

var SK = {
  l: l$3e,
  m: m$3e,
  s: s$3e
};

/* loaded by smart-asset */
var l$3f = require("./flags/dHHpZoij.svg");

/* loaded by smart-asset */
var m$3f = require("./flags/eIiLiGDE.svg");

/* loaded by smart-asset */
var s$3f = require("./flags/fCbNjXmq.svg");

var SL = {
  l: l$3f,
  m: m$3f,
  s: s$3f
};

/* loaded by smart-asset */
var l$3g = require("./flags/bIbSpzra.svg");

/* loaded by smart-asset */
var m$3g = require("./flags/dYkJMrBQ.svg");

/* loaded by smart-asset */
var s$3g = require("./flags/eyHmwerE.svg");

var SM = {
  l: l$3g,
  m: m$3g,
  s: s$3g
};

/* loaded by smart-asset */
var l$3h = require("./flags/bpUANAjv.svg");

/* loaded by smart-asset */
var m$3h = require("./flags/bVeVGorx.svg");

/* loaded by smart-asset */
var s$3h = require("./flags/chWGOodu.svg");

var SN = {
  l: l$3h,
  m: m$3h,
  s: s$3h
};

/* loaded by smart-asset */
var l$3i = require("./flags/biLPTfXX.svg");

/* loaded by smart-asset */
var m$3i = require("./flags/cPdGjIPH.svg");

/* loaded by smart-asset */
var s$3i = require("./flags/bxqBHDhB.svg");

var SO = {
  l: l$3i,
  m: m$3i,
  s: s$3i
};

/* loaded by smart-asset */
var l$3j = require("./flags/RkkcvLBi.svg");

/* loaded by smart-asset */
var m$3j = require("./flags/MOaWrxQL.svg");

/* loaded by smart-asset */
var s$3j = require("./flags/fUzWMbFK.svg");

var SR = {
  l: l$3j,
  m: m$3j,
  s: s$3j
};

/* loaded by smart-asset */
var l$3k = require("./flags/gahqHdkS.svg");

/* loaded by smart-asset */
var m$3k = require("./flags/eyZPNIxC.svg");

/* loaded by smart-asset */
var s$3k = require("./flags/cOgrAbbe.svg");

var SS = {
  l: l$3k,
  m: m$3k,
  s: s$3k
};

/* loaded by smart-asset */
var l$3l = require("./flags/erNNXtXx.svg");

/* loaded by smart-asset */
var m$3l = require("./flags/eWjKhAcE.svg");

/* loaded by smart-asset */
var s$3l = require("./flags/fYSDRRjl.svg");

var ST = {
  l: l$3l,
  m: m$3l,
  s: s$3l
};

/* loaded by smart-asset */
var l$3m = require("./flags/WycYqdUo.svg");

/* loaded by smart-asset */
var m$3m = require("./flags/dohrwWwk.svg");

/* loaded by smart-asset */
var s$3m = require("./flags/dUZMmvOm.svg");

var SV = {
  l: l$3m,
  m: m$3m,
  s: s$3m
};

/* loaded by smart-asset */
var l$3n = require("./flags/cgciejvr.svg");

/* loaded by smart-asset */
var m$3n = require("./flags/eiJlXEFP.svg");

/* loaded by smart-asset */
var s$3n = require("./flags/ekSjKEJj.svg");

var SX = {
  l: l$3n,
  m: m$3n,
  s: s$3n
};

/* loaded by smart-asset */
var l$3o = require("./flags/fOIooJld.svg");

/* loaded by smart-asset */
var m$3o = require("./flags/fSRJDfLy.svg");

/* loaded by smart-asset */
var s$3o = require("./flags/edhDiHKg.svg");

var SY = {
  l: l$3o,
  m: m$3o,
  s: s$3o
};

/* loaded by smart-asset */
var l$3p = require("./flags/bgGqSVIX.svg");

/* loaded by smart-asset */
var m$3p = require("./flags/fQjxhYvO.svg");

/* loaded by smart-asset */
var s$3p = require("./flags/bIyDcxxT.svg");

var SZ = {
  l: l$3p,
  m: m$3p,
  s: s$3p
};

/* loaded by smart-asset */
var l$3q = require("./flags/evBRMUkj.svg");

/* loaded by smart-asset */
var m$3q = require("./flags/crCCRlTi.svg");

/* loaded by smart-asset */
var s$3q = require("./flags/fdeAYrOT.svg");

var TC = {
  l: l$3q,
  m: m$3q,
  s: s$3q
};

/* loaded by smart-asset */
var l$3r = require("./flags/fiCGPtGS.svg");

/* loaded by smart-asset */
var m$3r = require("./flags/fPeNGSVg.svg");

/* loaded by smart-asset */
var s$3r = require("./flags/eGfquCAk.svg");

var TD = {
  l: l$3r,
  m: m$3r,
  s: s$3r
};

/* loaded by smart-asset */
var l$3s = require("./flags/fOTdqugm.svg");

/* loaded by smart-asset */
var m$3s = require("./flags/fNpGRJmN.svg");

/* loaded by smart-asset */
var s$3s = require("./flags/ewwWVTsE.svg");

var TF = {
  l: l$3s,
  m: m$3s,
  s: s$3s
};

/* loaded by smart-asset */
var l$3t = require("./flags/cHHepgKX.svg");

/* loaded by smart-asset */
var m$3t = require("./flags/kXGvbqYZ.svg");

/* loaded by smart-asset */
var s$3t = require("./flags/bmcxdqcm.svg");

var TG = {
  l: l$3t,
  m: m$3t,
  s: s$3t
};

/* loaded by smart-asset */
var l$3u = require("./flags/NYRbEAqh.svg");

/* loaded by smart-asset */
var m$3u = require("./flags/dtWUmjaz.svg");

/* loaded by smart-asset */
var s$3u = require("./flags/ehVXVQHy.svg");

var TH = {
  l: l$3u,
  m: m$3u,
  s: s$3u
};

/* loaded by smart-asset */
var l$3v = require("./flags/fFWAMKmq.svg");

/* loaded by smart-asset */
var m$3v = require("./flags/eCUwCFyo.svg");

/* loaded by smart-asset */
var s$3v = require("./flags/bynOiDFK.svg");

var TJ = {
  l: l$3v,
  m: m$3v,
  s: s$3v
};

/* loaded by smart-asset */
var l$3w = require("./flags/dTuKlEpQ.svg");

/* loaded by smart-asset */
var m$3w = require("./flags/ftDqrkYs.svg");

/* loaded by smart-asset */
var s$3w = require("./flags/cAsQkfzz.svg");

var TK = {
  l: l$3w,
  m: m$3w,
  s: s$3w
};

/* loaded by smart-asset */
var l$3x = require("./flags/VvojPsGo.svg");

/* loaded by smart-asset */
var m$3x = require("./flags/cYGXqmZM.svg");

/* loaded by smart-asset */
var s$3x = require("./flags/dMObXInH.svg");

var TL = {
  l: l$3x,
  m: m$3x,
  s: s$3x
};

/* loaded by smart-asset */
var l$3y = require("./flags/fiyONYcP.svg");

/* loaded by smart-asset */
var m$3y = require("./flags/cNrciieR.svg");

/* loaded by smart-asset */
var s$3y = require("./flags/eYwEITOI.svg");

var TM = {
  l: l$3y,
  m: m$3y,
  s: s$3y
};

/* loaded by smart-asset */
var l$3z = require("./flags/cateLoPi.svg");

/* loaded by smart-asset */
var m$3z = require("./flags/doORkIRi.svg");

/* loaded by smart-asset */
var s$3z = require("./flags/fylAOSSV.svg");

var TN = {
  l: l$3z,
  m: m$3z,
  s: s$3z
};

/* loaded by smart-asset */
var l$3A = require("./flags/bCTcLfGg.svg");

/* loaded by smart-asset */
var m$3A = require("./flags/fcYEWmAB.svg");

/* loaded by smart-asset */
var s$3A = require("./flags/TqornvPJ.svg");

var TO = {
  l: l$3A,
  m: m$3A,
  s: s$3A
};

/* loaded by smart-asset */
var l$3B = require("./flags/dpzBRGJw.svg");

/* loaded by smart-asset */
var m$3B = require("./flags/dIgQwMni.svg");

/* loaded by smart-asset */
var s$3B = require("./flags/DnQVglAR.svg");

var TR = {
  l: l$3B,
  m: m$3B,
  s: s$3B
};

/* loaded by smart-asset */
var l$3C = require("./flags/csfhfAxt.svg");

/* loaded by smart-asset */
var m$3C = require("./flags/exGnfSBV.svg");

/* loaded by smart-asset */
var s$3C = require("./flags/bQBXJmLm.svg");

var TT = {
  l: l$3C,
  m: m$3C,
  s: s$3C
};

/* loaded by smart-asset */
var l$3D = require("./flags/eXuBigtK.svg");

/* loaded by smart-asset */
var m$3D = require("./flags/fqszguza.svg");

/* loaded by smart-asset */
var s$3D = require("./flags/bLqhVXIg.svg");

var TV = {
  l: l$3D,
  m: m$3D,
  s: s$3D
};

/* loaded by smart-asset */
var l$3E = require("./flags/eAlXzXFy.svg");

/* loaded by smart-asset */
var m$3E = require("./flags/ettfgGIW.svg");

/* loaded by smart-asset */
var s$3E = require("./flags/ekTYqCCx.svg");

var TW = {
  l: l$3E,
  m: m$3E,
  s: s$3E
};

/* loaded by smart-asset */
var l$3F = require("./flags/dqFNkrXi.svg");

/* loaded by smart-asset */
var m$3F = require("./flags/cFrJQCfD.svg");

/* loaded by smart-asset */
var s$3F = require("./flags/fTCIWqxD.svg");

var TZ = {
  l: l$3F,
  m: m$3F,
  s: s$3F
};

/* loaded by smart-asset */
var l$3G = require("./flags/bLDaDDGX.svg");

/* loaded by smart-asset */
var m$3G = require("./flags/cjdLLGTA.svg");

/* loaded by smart-asset */
var s$3G = require("./flags/cENqMpRR.svg");

var UA = {
  l: l$3G,
  m: m$3G,
  s: s$3G
};

/* loaded by smart-asset */
var l$3H = require("./flags/fyoelWNk.svg");

/* loaded by smart-asset */
var m$3H = require("./flags/fMVGkQyP.svg");

/* loaded by smart-asset */
var s$3H = require("./flags/BttpyVUJ.svg");

var UG = {
  l: l$3H,
  m: m$3H,
  s: s$3H
};

/* loaded by smart-asset */
var l$3I = require("./flags/dzaHeugW.svg");

/* loaded by smart-asset */
var m$3I = require("./flags/dwMamHdN.svg");

/* loaded by smart-asset */
var s$3I = require("./flags/FjNSttJs.svg");

var UM = {
  l: l$3I,
  m: m$3I,
  s: s$3I
};

/* loaded by smart-asset */
var l$3J = require("./flags/chSAOouY.svg");

/* loaded by smart-asset */
var m$3J = require("./flags/clmbTIOg.svg");

/* loaded by smart-asset */
var s$3J = require("./flags/doPRBPaJ.svg");

var UOSAN = {
  l: l$3J,
  m: m$3J,
  s: s$3J
};

/* loaded by smart-asset */
var l$3K = require("./flags/beorpggO.svg");

/* loaded by smart-asset */
var m$3K = require("./flags/bdiVTZec.svg");

/* loaded by smart-asset */
var s$3K = require("./flags/qxIjRxld.svg");

var US = {
  l: l$3K,
  m: m$3K,
  s: s$3K
};

/* loaded by smart-asset */
var l$3L = require("./flags/egWwCUuw.svg");

/* loaded by smart-asset */
var m$3L = require("./flags/lPIYXZrj.svg");

/* loaded by smart-asset */
var s$3L = require("./flags/cScsmTOR.svg");

var UY = {
  l: l$3L,
  m: m$3L,
  s: s$3L
};

/* loaded by smart-asset */
var l$3M = require("./flags/bSuJqFtb.svg");

/* loaded by smart-asset */
var m$3M = require("./flags/cvpgCDsA.svg");

/* loaded by smart-asset */
var s$3M = require("./flags/bHMhOAeY.svg");

var UZ = {
  l: l$3M,
  m: m$3M,
  s: s$3M
};

/* loaded by smart-asset */
var l$3N = require("./flags/cZncLMjS.svg");

/* loaded by smart-asset */
var m$3N = require("./flags/cmOjyQXI.svg");

/* loaded by smart-asset */
var s$3N = require("./flags/eOVxxVME.svg");

var VA = {
  l: l$3N,
  m: m$3N,
  s: s$3N
};

/* loaded by smart-asset */
var l$3O = require("./flags/fKjbsDVH.svg");

/* loaded by smart-asset */
var m$3O = require("./flags/cAkTdzIy.svg");

/* loaded by smart-asset */
var s$3O = require("./flags/oXPKfrnJ.svg");

var VC = {
  l: l$3O,
  m: m$3O,
  s: s$3O
};

/* loaded by smart-asset */
var l$3P = require("./flags/fPfsyuNd.svg");

/* loaded by smart-asset */
var m$3P = require("./flags/fBWZhdxR.svg");

/* loaded by smart-asset */
var s$3P = require("./flags/dczMHmOp.svg");

var VE = {
  l: l$3P,
  m: m$3P,
  s: s$3P
};

/* loaded by smart-asset */
var l$3Q = require("./flags/eyNPeYKo.svg");

/* loaded by smart-asset */
var m$3Q = require("./flags/zorXdvqn.svg");

/* loaded by smart-asset */
var s$3Q = require("./flags/KEZQOHjQ.svg");

var VG = {
  l: l$3Q,
  m: m$3Q,
  s: s$3Q
};

/* loaded by smart-asset */
var l$3R = require("./flags/dtkdIvDT.svg");

/* loaded by smart-asset */
var m$3R = require("./flags/bUbcIquQ.svg");

/* loaded by smart-asset */
var s$3R = require("./flags/hIjXuetj.svg");

var VI = {
  l: l$3R,
  m: m$3R,
  s: s$3R
};

/* loaded by smart-asset */
var l$3S = require("./flags/emTMAsii.svg");

/* loaded by smart-asset */
var m$3S = require("./flags/UyhsjgnU.svg");

/* loaded by smart-asset */
var s$3S = require("./flags/hJQKYoAk.svg");

var VN = {
  l: l$3S,
  m: m$3S,
  s: s$3S
};

/* loaded by smart-asset */
var l$3T = require("./flags/btRIPrKo.svg");

/* loaded by smart-asset */
var m$3T = require("./flags/RjZgdMuN.svg");

/* loaded by smart-asset */
var s$3T = require("./flags/cuqtzAkS.svg");

var VU = {
  l: l$3T,
  m: m$3T,
  s: s$3T
};

/* loaded by smart-asset */
var l$3U = require("./flags/dQShaVDM.svg");

/* loaded by smart-asset */
var m$3U = require("./flags/qKPmetCt.svg");

/* loaded by smart-asset */
var s$3U = require("./flags/emaBiFLE.svg");

var WF = {
  l: l$3U,
  m: m$3U,
  s: s$3U
};

/* loaded by smart-asset */
var l$3V = require("./flags/dEHVyoGb.svg");

/* loaded by smart-asset */
var m$3V = require("./flags/sIODIcxd.svg");

/* loaded by smart-asset */
var s$3V = require("./flags/bBTVnTqj.svg");

var WS = {
  l: l$3V,
  m: m$3V,
  s: s$3V
};

/* loaded by smart-asset */
var l$3W = require("./flags/dngDzGCl.svg");

/* loaded by smart-asset */
var m$3W = require("./flags/dFRJqAvj.svg");

/* loaded by smart-asset */
var s$3W = require("./flags/epCwPAkc.svg");

var YE = {
  l: l$3W,
  m: m$3W,
  s: s$3W
};

/* loaded by smart-asset */
var l$3X = require("./flags/eWagPzhA.svg");

/* loaded by smart-asset */
var m$3X = require("./flags/fTZuZYLr.svg");

/* loaded by smart-asset */
var s$3X = require("./flags/cuXJyWgD.svg");

var ZA = {
  l: l$3X,
  m: m$3X,
  s: s$3X
};

/* loaded by smart-asset */
var l$3Y = require("./flags/fRkbxDif.svg");

/* loaded by smart-asset */
var m$3Y = require("./flags/fqEaDVRv.svg");

/* loaded by smart-asset */
var s$3Y = require("./flags/fEdUCmML.svg");

var ZM = {
  l: l$3Y,
  m: m$3Y,
  s: s$3Y
};

/* loaded by smart-asset */
var l$3Z = require("./flags/dGxqlXLt.svg");

/* loaded by smart-asset */
var m$3Z = require("./flags/deflPmhG.svg");

/* loaded by smart-asset */
var s$3Z = require("./flags/bssthVss.svg");

var ZW = {
  l: l$3Z,
  m: m$3Z,
  s: s$3Z
};

var flags = {
  AD: AD,
  AE: AE,
  AFRUN: AFRUN,
  AG: AG,
  AI: AI,
  AL: AL,
  AM: AM,
  AMS: AMS,
  AO: AO,
  AQ: AQ,
  AR: AR,
  AS: AS,
  AT: AT,
  AU: AU,
  AW: AW,
  AX: AX,
  AZ: AZ,
  BA: BA,
  BB: BB,
  BD: BD,
  BE: BE,
  BF: BF,
  BG: BG,
  BH: BH,
  BI: BI,
  BJ: BJ,
  BL: BL,
  BM: BM,
  BN: BN,
  BO: BO,
  BQ_BO: BQ_BO,
  BQ_SA: BQ_SA,
  BQ_SE: BQ_SE,
  BR: BR,
  BS: BS,
  BT: BT,
  BW: BW,
  BY: BY,
  BZ: BZ,
  CA: CA,
  CC: CC,
  CD: CD,
  CF: CF,
  CG: CG,
  CH: CH,
  CI: CI,
  CK: CK,
  CL: CL,
  CM: CM,
  CN: CN,
  CO: CO,
  CR: CR,
  CU: CU,
  CV: CV,
  CW: CW,
  CX: CX,
  CY: CY,
  CZ: CZ,
  DE: DE,
  DJ: DJ,
  DK: DK,
  DM: DM,
  DO: DO,
  EC: EC,
  EE: EE,
  EG: EG,
  EH: EH,
  ER: ER,
  ES: ES,
  ET: ET,
  EU: EU,
  FI: FI,
  FJ: FJ,
  FK: FK,
  FM: FM,
  FO: FO,
  FR: FR,
  GA: GA,

  /*GB,*/
  GB_ENG: GB_ENG,
  GB_SCT: GB_SCT,
  GB_UKM: GB_UKM,
  GB_WLS: GB_WLS,
  GD: GD,
  GE: GE,
  GF: GF,
  GG: GG,
  GH: GH,
  GI: GI,
  GL: GL,
  GM: GM,
  GN: GN,
  GP: GP,

  /*GQ,*/
  GR: GR,
  GS: GS,
  GT: GT,
  GU: GU,
  GW: GW,
  GY: GY,
  HK: HK,
  HM: HM,
  HN: HN,
  HR: HR,
  HT: HT,
  HU: HU,
  ID: ID,
  IE: IE,
  IL: IL,
  IM: IM,
  IN: IN,
  IO: IO,
  IQ: IQ,
  IR: IR,
  IS: IS,
  IT: IT,
  JE: JE,
  JM: JM,
  JO: JO,
  JP: JP,
  KE: KE,
  KG: KG,
  KH: KH,
  KI: KI,
  KM: KM,
  KN: KN,
  KP: KP,
  KR: KR,
  KW: KW,
  KY: KY,
  KZ: KZ,
  LA: LA,
  LB: LB,
  LC: LC,
  LI: LI,
  LK: LK,
  LR: LR,
  LS: LS,
  LT: LT,
  LU: LU,
  LV: LV,
  LY: LY,
  MA: MA,
  MC: MC,
  MD: MD,
  ME: ME,
  MF: MF,
  MG: MG,
  MH: MH,
  MK: MK,
  ML: ML,
  MM: MM,
  MN: MN,
  MO: MO,
  MP: MP,
  MQ: MQ,
  MR: MR,
  MS: MS,
  MT: MT,
  MU: MU,
  MV: MV,
  MW: MW,
  MX: MX,
  MY: MY,
  MZ: MZ,
  NA: NA,
  NC: NC,
  NE: NE,
  NF: NF,
  NG: NG,
  NI: NI,
  NL: NL,
  NO: NO,
  NP: NP,
  NR: NR,
  NU: NU,
  NZ: NZ,
  OM: OM,
  PA: PA,
  PE: PE,
  PF: PF,
  PG: PG,
  PH: PH,
  PK: PK,
  PL: PL,
  PM: PM,
  PN: PN,
  PR: PR,
  PS: PS,
  PT: PT,
  PW: PW,
  PY: PY,
  QA: QA,
  RAINBOW: RAINBOW,
  RE: RE,
  RO: RO,
  RS: RS,
  RU: RU,
  RW: RW,
  SA: SA,
  SB: SB,
  SC: SC,
  SD: SD,
  SE: SE,
  SG: SG,
  SH: SH,
  SI: SI,
  SJ: SJ,
  SK: SK,
  SL: SL,
  SM: SM,
  SN: SN,
  SO: SO,
  SR: SR,
  SS: SS,
  ST: ST,
  SV: SV,
  SX: SX,
  SY: SY,
  SZ: SZ,
  TC: TC,
  TD: TD,
  TF: TF,
  TG: TG,
  TH: TH,
  TJ: TJ,
  TK: TK,
  TL: TL,
  TM: TM,
  TN: TN,
  TO: TO,
  TR: TR,
  TT: TT,
  TV: TV,
  TW: TW,
  TZ: TZ,
  UA: UA,
  UG: UG,
  UM: UM,
  UOSAN: UOSAN,
  US: US,
  UY: UY,
  UZ: UZ,
  VA: VA,
  VC: VC,
  VE: VE,
  VG: VG,
  VI: VI,
  VN: VN,
  VU: VU,
  WF: WF,
  WS: WS,
  YE: YE,

  /*YT,*/
  ZA: ZA,
  ZM: ZM,
  ZW: ZW
};

function isoToCountryCode(isoCode) {
  var keyToGet = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'alpha2';

  if (isoCode !== undefined) {
    var alpha2Code = codeList.find(function (countryObj) {
      return countryObj.alpha2 === isoCode || countryObj.alpha3 === isoCode || countryObj.numeric === isoCode;
    })[keyToGet];
    return alpha2Code;
  }

  console.error('This code returns undefined, see www.flagpack.xyz/docs/flag-index for all the available codes.');
}

function imageUrl(assetCode, size) {
  console.log('image url', assetCode, size);

  try {
    return flags[assetCode][size];
  } catch (_unused) {
    console.error('No flag found for ' + assetCode + ' / size ' + size);
  }
}

exports.codeList = codeList;
exports.flags = flags;
exports.imageUrl = imageUrl;
exports.isoToCountryCode = isoToCountryCode;
