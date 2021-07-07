
const suggestion = [
    "London",
    "Birmingham",
    "Manchester",
    "Leeds",
    "Newcastle",
    "Birstall",
    "Glasgow",
    "Liverpool",
    "Portsmouth",
    "Southampton",
    "Nottingham",
    "Bristol",
    "Sheffield",
    "Kingston upon Hull",
    "Leicester",
    "Edinburgh",
    "Caerdydd",
    "Stoke-on-Trent",
    "Coventry",
    "Reading",
    "Belfast",
    "Derby",
    "Plymouth",
    "Wolverhampton",
    "Abertawe",
    "Milton Keynes",
    "Aberdeen",
    "Norwich",
    "Luton",
    "Islington",
    "Swindon",
    "Croydon",
    "Basildon",
    "Bournemouth",
    "Worthing",
    "Ipswich",
    "Middlesbrough",
    "Sunderland",
    "Ilford",
    "Warrington",
    "Slough",
    "Huddersfield",
    "Oxford",
    "York",
    "Poole",
    "Harrow",
    "Dundee",
    "Saint Albans",
    "Telford",
    "Blackpool",
    "Brighton",
    "Sale",
    "Enfield",
    "Tottenham",
    "Bolton",
    "Newport",
    "High Wycombe",
    "Exeter",
    "Solihull",
    "Romford",
    "Preston",
    "Gateshead",
    "Blackburn",
    "Cheltenham",
    "Basingstoke",
    "Maidstone",
    "Colchester",
    "Chelmsford",
    "Wythenshawe",
    "Doncaster",
    "Rotherham",
    "Walthamstow",
    "Rochdale",
    "Bedford",
    "Crawley",
    "Mansfield",
    "Dagenham",
    "Stockport",
    "Darlington",
    "Fyfield",
    "Gillingham",
    "Salford",
    "Eastbourne",
    "Wigan",
    "Hounslow",
    "Wembley",
    "Saint Helens",
    "Worcester",
    "Wakefield",
    "Lincoln",
    "Hemel Hempstead",
    "Watford",
    "Oldham",
    "Sutton Coldfield",
    "Kettering",
    "Hastings",
    "Hartlepool",
    "Hove",
    "Barnsley",
    "Southport",
    "Bath",
    "Birkenhead",
    "Grimsby",
    "Halifax",
    "Bromley",
    "Fulham",
    "Nuneaton",
    "Ealing",
    "Stockton-on-Tees",
    "Woolwich",
    "Bracknell",
    "Derry",
    "Hayes",
    "Edmonton",
    "Scunthorpe",
    "Redditch",
    "Chester",
    "Dudley",
    "Bury",
    "Brixton",
    "West Bromwich",
    "Paisley",
    "Guildford",
    "Chatham",
    "Edgware",
    "East Ham",
    "Weston-super-Mare",
    "East Kilbride",
    "South Shields",
    "Carlisle",
    "Newcastle under Lyme",
    "Harrogate",
    "Ashford",
    "Gravesend",
    "Burnley",
    "Burton upon Trent",
    "Crewe",
    "Shrewsbury",
    "Gosport",
    "Lisburn",
    "Lowestoft",
    "Rugby",
    "Uxbridge",
    "Inverness",
    "Keighley",
    "Southall",
    "Maidenhead",
    "Stafford",
    "Wimbledon",
    "Walsall",
    "Tynemouth",
    "Washington",
    "Loughborough",
    "Chingford",
    "Thornton Heath",
    "Finchley",
    "Wrecsam",
    "Torquay",
    "Farnborough",
    "Kensington",
    "Waterlooville",
    "Hornchurch",
    "Mitcham",
    "Feltham",
    "Stourbridge",
    "Rochester",
    "Dewsbury",
    "Woking",
    "Rhondda",
    "Sittingbourne",
    "Acton",
    "Twickenham",
    "Runcorn",
    "Scarborough",
    "Wandsworth",
    "Widnes",
    "Margate",
    "Bangor",
    "Morecambe",
    "Taunton",
    "Wallasey",
    "Royal Tunbridge Wells",
    "Barking",
    "Aylesbury",
    "Ruislip",
    "Halesowen",
    "Streatham",
    "Livingston",
    "Clacton-on-Sea",
    "Barrow in Furness",
    "Hereford",
    "Ellesmere Port",
    "Kidderminster",
    "Canterbury",
    "Corby",
    "Brentwood",
    "Hamilton",
    "Dunfermline",
    "Braintree",
    "Weymouth",
    "Hendon",
    "Altrincham",
    "Lancaster",
    "Barri",
    "Macclesfield",
    "Bootle",
    "Stratford",
    "Horsham",
    "Cumbernauld",
    "Rowley Regis",
    "Kirkcaldy",
    "Crosby",
    "Leith",
    "Royal Leamington Spa",
    "Llanelli",
    "Batley",
    "Pen-y-Bont ar Ogwr",
    "Wellingborough",
    "Sutton in Ashfield",
    "Paignton",
    "Eltham",
    "Cwmbran",
    "Christchurch",
    "Morden",
    "Durham",
    "Barnet",
    "West Bridgford",
    "Perth",
    "Stretford",
    "Banbury",
    "Beckenham",
    "Greenford",
    "Wokingham",
    "Folkestone",
    "Welwyn Garden City",
    "Ayr",
    "Kilmarnock",
    "Havant",
    "Chippenham",
    "Erith",
    "Hinckley",
    "Ashton",
    "Winchester",
    "Surbiton",
    "Yeovil",
    "Catford",
    "Grantham",
    "Morley",
    "Cheshunt",
    "Coatbridge",
    "Wallsend",
    "Merthyr Tudful",
    "Bexhill",
    "Sidcup",
    "Kingston upon Thames",
    "Middleton",
    "KingΓÇÖs Lynn",
    "Fareham",
    "Greenock",
    "Urmston",
    "Worksop",
    "Sutton",
    "Caerphilly",
    "Bridgwater",
    "Leigh",
    "Newbury",
    "Welling",
    "Kingswood",
    "Bury Saint Edmunds",
    "Kirkby",
    "Ramsgate",
    "Tonbridge",
    "Salisbury",
    "Castleford",
    "Bishops Stortford",
    "Abingdon",
    "Aberdare",
    "Farnham",
    "Aldridge",
    "Hatfield",
    "Cleethorpes",
    "Skelmersdale",
    "Tipton",
    "Eccles",
    "Great Yarmouth",
    "Ilkeston",
    "Herne Bay",
    "Andover",
    "Glenrothes",
    "Camberley",
    "Stirling",
    "Arnold",
    "Long Eaton",
    "Blyth",
    "Port Talbot",
    "Bletchley",
    "Leighton Buzzard",
    "Fleet",
    "Beeston",
    "Small Heath",
    "Houghton le Spring",
    "Whitley Bay",
    "Airdrie",
    "Grays",
    "Denton",
    "Aldershot",
    "Redcar",
    "Walkden",
    "Kenton",
    "Leyland",
    "Woodley",
    "Accrington",
    "Pont-y-p┼╡l",
    "Bridlington",
    "Falkirk",
    "Billingham",
    "Boston",
    "Dunstable",
    "Ewell",
    "Chorley",
    "Spalding",
    "Exmouth",
    "North Shields",
    "Colwyn Bay",
    "Irvine",
    "Hyde",
    "Wisbech",
    "Lichfield",
    "Wickford",
    "Hitchin",
    "Dumfries",
    "Letchworth",
    "Huyton",
    "Strood",
    "Trowbridge",
    "Glossop",
    "Pontypridd",
    "Stroud",
    "Bicester",
    "Winsford",
    "Windsor",
    "Motherwell",
    "Brighouse",
    "Wigston Magna",
    "Swadlincote",
    "Rayleigh",
    "Whitstable",
    "Ecclesfield",
    "Ryde",
    "Earley",
    "Borehamwood",
    "Bexleyheath",
    "Prestwich",
    "Darwen",
    "Epsom",
    "Warwick",
    "Pinner",
    "Rutherglen",
    "Loughton",
    "Dover",
    "Pontefract",
    "Saint Neots",
    "Bedworth",
    "Burgess Hill",
    "Northolt",
    "Farnworth",
    "Wishaw",
    "Harpenden",
    "Deal",
    "Radcliffe",
    "Carshalton",
    "Plympton",
    "Bulwell",
    "Cambuslang",
    "Sevenoaks",
    "Northfleet",
    "Cramlington",
    "Rushden",
    "Bromsgrove",
    "Nelson",
    "Beverley",
    "Cannock",
    "Hanwell",
    "Stanford le Hope",
    "Kendal",
    "Willenhall",
    "Wood Green",
    "Heywood",
    "Reddish",
    "Billericay",
    "Darlaston",
    "Littlehampton",
    "Ashington",
    "Newton Mearns",
    "Yate",
    "Jarrow",
    "Witney",
    "Stratford-upon-Avon",
    "Shotley Bridge",
    "Ashford",
    "Ormskirk",
    "Longton",
    "Melton Mowbray",
    "Haverhill",
    "Didcot",
    "Clifton",
    "Chichester",
    "Hertford",
    "Highbury",
    "Newton Aycliffe",
    "Fern Down",
    "Congleton",
    "Cheadle Hulme",
    "East Grinstead",
    "Thatcham",
    "Frome",
    "Burntwood",
    "Clydebank",
    "Fleetwood",
    "Bournville",
    "Shenley Brook End",
    "Bushey",
    "New Milton",
    "Northfield",
    "Coulsdon",
    "Bilston",
    "Newton Abbot",
    "Wellington",
    "Newport",
    "Oldbury",
    "Bishop Auckland",
    "Longbridge",
    "Bloxwich",
    "Upminster",
    "Witham",
    "Workington",
    "Kingswinford",
    "Rhyl",
    "Daventry",
    "Hindley",
    "Rainham",
    "Portishead" 
];