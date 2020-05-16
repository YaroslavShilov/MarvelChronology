export const store = {
	state: {
		'Ultimate Spider-Man': [
			{
				number: 1,
				desc: 'High school, puberty, first dances - there are many pitfalls to being young. Compound these with intense personal tragedy and super-powers, and you can start to visualize the world of Peter Parker, a.k.a. Spider-Man! Witness the rebirth of a legend as Peter learns that with great power, there must also come great responsibility! Read the book that Entertainment Weekly calls "One of the most emotionally resonant depictions of teendom in comics since Spider-Man\'s debut."',
				thumb: 'http://i.annihil.us/u/prod/marvel/i/mg/9/90/519b7e7eb534a.jpg',
				link: 'http://marvel.com/comics/issue/4372/ultimate_spider-man_2000_1?utm_campaign=apiRef&utm_source=c6633ad6a8d5b89011bbcb78acab94ea\n'
			},
			{
				number: 14,
				desc: 'DOUBLE TROUBLE PART 1 A new girl named Gwen Stacy arrives at Peter Parker\'s school to stir up trouble. Meanwhile, Doctor Otto Octavius awakens to discover the grim truth about his new condition!',
				thumb: 'http://i.annihil.us/u/prod/marvel/i/mg/4/20/590785bf72f62.jpg',
				link: 'http://marvel.com/comics/issue/14840/ultimate_spider-man_2000_14?utm_campaign=apiRef&utm_source=c6633ad6a8d5b89011bbcb78acab94ea\n',
			}
		],
		'Ultimate X-Men': [
			{
				number: 1,
				desc: 'The world stands on the brink of genetic war. Mankind makes the first move, launching an army of giant, cybernetic executioners called Sentinels - programmed to target and eliminate mutants. The only force preventing total annihilation: the X-Men!',
				thumb: 'http://i.annihil.us/u/prod/marvel/i/mg/f/10/5ba50b72eee8a.jpg',
				link: 'http://marvel.com/comics/issue/15699/ultimate_x-men_2000_1?utm_campaign=apiRef&utm_source=c6633ad6a8d5b89011bbcb78acab94ea\n',
			},
			{
				number: 7,
				desc: 'RETURN TO WEAPON X PART 1 (of 6) The only mutant to ever make it outside the walls of Weapon X has been the Adamantium-clawed Wolverine...until now! Get a look inside the Ultimate Universe\'s Weapon X program and see what is in store for the mutants!',
				thumb: 'http://i.annihil.us/u/prod/marvel/i/mg/c/a0/5ba8de0cc5678.jpg',
				link: 'http://marvel.com/comics/issue/15765/ultimate_x-men_2000_7?utm_campaign=apiRef&utm_source=c6633ad6a8d5b89011bbcb78acab94ea\n',
			}
		]
	},
	comicsNameUrl: {
		'All-New Ultimates': 'All-New%20Ultimates',
		'Hunger': 'Hunger',
		'Miles Morales: Ultimate Spider-Man': 'Miles%20Morales%3A%20Ultimate%20Spider-Man',
		'Spider-Men': 'Spider-Men',
		'Ultimate Comics Spider-Man': 'Ultimate%20Comics%20Spider-Man',
		'Ultimate Comics Ultimates': 'Ultimate%20Comics%20Ultimates',
		'Ultimate Comics X-Men': 'Ultimate%20Comics%20X-Men',
		'Ultimate Fantastic Four': 'Ultimate%20Fantastic%20Four',
		'Ultimate Spider-Man': 'Ultimate%20Spider-Man%20',
		'Ultimate X-Men': 'Ultimate%20X-Men',
	},
	getComicsUrl(title) {
		return this.comicsNameUrl[title];
	},
}
