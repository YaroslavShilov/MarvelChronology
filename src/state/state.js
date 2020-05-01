//BEGIN Urls
const urlNameallNewUltimates = 'allNewUltimates';
const urlNamecataclysmTheUltimatesLastStand = 'cataclysmTheUltimatesLastStand';
const urlNamecataclysmUltimateComicsSpiderMan = 'cataclysmUltimateComicsSpiderMan';
const urlNamecataclysmUltimateXMen = 'cataclysmUltimateXMen';
const urlNamecataclysmUltimates = 'cataclysmUltimates';
const urlNamehunger = 'hunger';
const urlNamemilesMorales = 'milesMorales';
const urlNamespiderMen = 'spiderMen';
const urlNamesurvive = 'survive';
const urlNametheUltimatesV3 = 'theUltimatesV3';
const urlNameUCArmorWars = 'UCArmorWars';
const urlNameUCAvengers = 'UCAvengers';
const urlNameUCAvengersVSNewUltimates = 'UCAvengersVSNewUltimates';
const urlNameUCCaptainAmerica = 'UCCaptainAmerica';
const urlNameUCHawkeye = 'UCHawkeye';
const urlNameUCIronMan = 'UCIronMan';
const urlNameUCNewUltimates = 'UCNewUltimates';
const urlNameUCSpiderMan = 'UCSpiderMan';
const urlNameUCSpiderMan2011 = 'UCSpiderMan2011';
const urlNameUCThor = 'UCThor';
const urlNameUCUltimates = 'UCUltimates';
const urlNameUCWolverine = 'UCWolverine';
const urlNameUCX = 'UCX';
const urlNameUCXMen = 'UCXMen';
const urlNameUDaredevilElektra = 'UDaredevilElektra';
const urlNameUDoom = 'UDoom';
const urlNameUElektra = 'UElektra';
const urlNameUEnemy = 'UEnemy';
const urlNameUExtinction = 'UExtinction';
const urlNameUFallout = 'UFallout';
const urlNameUFantasticFour = 'UFantasticFour';
const urlNameUFantasticFourAnnual = 'UFantasticFourAnnual';
const urlNameUFF = 'UFF';
const urlNameUHulkAnnual = 'UHulkAnnual';
const urlNameUHuman = 'UHuman';
const urlNameUIronMan = 'UIronMan';
const urlNameUIronMan2 = 'UIronMan2';
const urlNameUMarvelTeamUp = 'UMarvelTeamUp';
const urlNameUMystery = 'UMystery';
const urlNameUNightmare = 'UNightmare';
const urlNameUOrigins = 'UOrigins';
const urlNameUPower = 'UPower';
const urlNameUSecret = 'USecret';
const urlNameUSpiderMan = 'Ultimate%20Spider-Man%20';
const urlNameUSpiderManAnnual = 'USpiderManAnnual';
const urlNameUVision = 'UVision';
const urlNameUWar = 'UWar';
const urlNameUWolverineHulk = 'UWolverineHulk';
const urlNameUXMen = 'UXMen';
const urlNameUXMenFantasticFour = 'UXMenFantasticFour';
const urlNameUXMenAnnual = 'UXMenAnnual';
const urlNameUltimates = 'Ultimates';
const urlNameUltimatesv2 = 'Ultimatesv2';
const urlNameUltimatesvAnnual = 'UltimatesvAnnual';
const urlNameUltimatum = 'Ultimatum';
const urlNameUFantasticFourRequiemOneShot = 'UFantasticFourRequiemOneShot';
const urlNameUSpiderManRequiem = 'USpiderManRequiem';
const urlNameUXMenRequiemOneShot = 'UXMenRequiemOneShot';
//END getName

async function getComics(urlName,num) {
	const url = `https://gateway.marvel.com:443/v1/public/comics?title=${urlName}&issueNumber=${num}&apikey=c6633ad6a8d5b89011bbcb78acab94ea\n`;

	async function getUrl(num) {
		const response = await fetch(url);
		const json = await response.json();
		console.log(json);
		const item = json.data.results[0];
		const extension = item.thumbnail.extension;
		const path = item.thumbnail.path;
		return `${path}.${extension}`;
	}
	getUrl(num).then(thumb => this.setState({thumb: thumb}));
}


//BEGIN get
const getallNewUltimates = (number) => ({type: allNewUltimates, number})
const getcataclysmTheUltimatesLastStand = (number) => ({type: cataclysmTheUltimatesLastStand, number})
const getcataclysmUltimateComicsSpiderMan = (number) => ({type: cataclysmUltimateComicsSpiderMan, number})
const getcataclysmUltimateXMen = (number) => ({type: cataclysmUltimateXMen, number})
const getcataclysmUltimates = (number) => ({type: cataclysmUltimates, number})
const gethunger = (number) => ({type: hunger, number})
const getmilesMorales = (number) => ({type: milesMorales, number})
const getspiderMen = (number) => ({type: spiderMen, number})
const getsurvive = (number) => ({type: survive, number})
const gettheUltimatesV3 = (number) => ({type: theUltimatesV3, number})
const getUCArmorWars = (number) => ({type: UCArmorWars, number})
const getUCAvengers = (number) => ({type: UCAvengers, number})
const getUCAvengersVSNewUltimates = (number) => ({type: UCAvengersVSNewUltimates, number})
const getUCCaptainAmerica = (number) => ({type: UCCaptainAmerica, number})
const getUCHawkeye = (number) => ({type: UCHawkeye, number})
const getUCIronMan = (number) => ({type: UCIronMan, number})
const getUCNewUltimates = (number) => ({type:UCNewUltimates, number})
const getUCSpiderMan = (number) => ({type: UCSpiderMan, number})
const getUCSpiderMan2011 = (number) => ({type: UCSpiderMan2011, number})
const getUCThor = (number) => ({type: UCThor, number})
const getUCUltimates = (number) => ({type: UCUltimates, number})
const getUCWolverine = (number) => ({type: UCWolverine, number})
const getUCX = (number) => ({type: UCX, number})
const getUCXMen = (number) => ({type: UCXMen, number})
const getUDaredevilElektra = (number) => ({type: UDaredevilElektra, number})
const getUDoom = (number) => ({type: UDoom, number})
const getUElektra = (number) => ({type: UElektra, number})
const getUEnemy = (number) => ({type: UEnemy, number})
const getUExtinction = (number) => ({type: UExtinction, number})
const getUFallout = (number) => ({type: UFallout, number})
const getUFantasticFour = (number) => ({type: UFantasticFour, number})
const getUFantasticFourAnnual = (number) => ({type: UFantasticFourAnnual, number})
const getUFF = (number) => ({type: UFF, number})
const getUHulkAnnual = (number) => ({type: UHulkAnnual, number})
const getUHuman = (number) => ({type: UHuman, number})
const getUIronMan = (number) => ({type: UIronMan, number})
const getUIronMan2 = (number) => ({type: UIronMan2, number})
const getUMarvelTeamUp = (number) => ({type: UMarvelTeamUp, number})
const getUMystery = (number) => ({type: UMystery, number})
const getUNightmare = (number) => ({type: UNightmare, number})
const getUOrigins = (number) => ({type: UOrigins, number})
const getUPower = (number) => ({type: UPower, number})
const getUSecret = (number) => ({type: USecret, number})
const getUSpiderMan = (number) => ({type: USpiderMan, number})
const getUSpiderManAnnual = (number) => ({type: USpiderManAnnual, number})
const getUVision = (number) => ({type: UVision, number})
const getUWar = (number) => ({type: UWar, number})
const getUWolverineHulk = (number) => ({type: UWolverineHulk, number})
const getUXMen = (number) => ({type: UXMen, number})
const getUXMenFantasticFour = (number) => ({type: UXMenFantasticFour, number})
const getUXMenAnnual = (number) => ({type: UXMenAnnual, number})
const getUltimates = (number) => ({type: Ultimates, number})
const getUltimatesv2 = (number) => ({type: Ultimatesv2, number})
const getUltimatesvAnnual = (number) => ({type: UltimatesvAnnual, number})
const getUltimatum = (number) => ({type: Ultimatum, number})
const getUFantasticFourRequiemOneShot = (number) => ({type: UFantasticFourRequiemOneShot, number})
const getUSpiderManRequiem = (number) => ({type: USpiderManRequiem, number})
const getUXMenRequiemOneShot = (number) => ({type: UXMenRequiemOneShot, number})
//END get

let state = {
	allNewUltimates: {},
	cataclysmTheUltimatesLastStand: {},
	cataclysmUltimateComicsSpiderMan: {},
	cataclysmUltimateXMen: {},
	cataclysmUltimates: {},
	hunger: {},
	milesMorales: {},
	spiderMen: {},
	survive: {},
	theUltimatesV3: {},
	UCArmorWars: {},
	UCAvengers: {},
	UCAvengersVSNewUltimates: {},
	UCCaptainAmerica: {},
	UCHawkeye: {},
	UCIronMan: {},
	UCNewUltimates: {},
	UCSpiderMan: {},
	UCSpiderMan2011: {},
	UCThor: {},
	UCUltimates: {},
	UCWolverine: {},
	UCX: {},
	UCXMen: {},
	UDaredevilElektra: {},
	UDoom: {},
	UElektra: {},
	UEnemy: {},
	UExtinction: {},
	UFallout: {},
	UFantasticFour: {},
	UFantasticFourAnnual: {},
	UFF: {},
	UHulkAnnual: {},
	UHuman: {},
	UIronMan: {},
	UIronMan2: {},
	UMarvelTeamUp: {},
	UMystery: {},
	UNightmare: {},
	UOrigins: {},
	UPower: {},
	USecret: {},
	USpiderMan: {},
	USpiderManAnnual: {},
	UVision: {},
	UWar: {},
	UWolverineHulk: {},
	UXMen: {},
	UXMenFantasticFour: {},
	UXMenAnnual: {},
	Ultimates: {},
	Ultimatesv2: {},
	UltimatesvAnnual: {},
	Ultimatum: {},
	UFantasticFourRequiemOneShot: {},
	USpiderManRequiem: {},
	UXMenRequiemOneShot: {
		title: 'Ultimatum: X-Men Requiem One-Shot',
		items: [
			{number: '1', desc: 'description of this comic', thumb: 'img url', link: 'link on shop'},
			{number: '13', desc: 'description of this comic', thumb: 'img url', link: 'link on shop'},
			{number: '25', desc: 'description of this comic', thumb: 'img url', link: 'link on shop'},
		]
	},
}




/*
async function getImage(num) {
	const url = `https://gateway.marvel.com:443/v1/public/comics?title=Ultimate%20Spider-Man&issueNumber=${num}&apikey=c6633ad6a8d5b89011bbcb78acab94ea\n`;

	async function getUrl(num) {
		const response = await fetch(url);
		const json = await response.json();
		console.log(json);
		const item = json.data.results[0];
		const extension = item.thumbnail.extension;
		const path = item.thumbnail.path;
		return `${path}.${extension}`;
	}
	getUrl(num).then(thumb => this.setState({thumb: thumb}));
}
*/
