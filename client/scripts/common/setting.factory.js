(function () {
	"use strict";

	function settingFactory () {
		var selection = {
			input: '',
			players: undefined,
			search: {
				mobile: true,
				desktop: true
			},
			sort: 'Alphabetical',
			sort_options: ['Alphabetical','Highest Rated','Most Recent'],
			categories: [{
					"category": "2 Player",
					"ticked": false
				}, {
					"category": "Abstract",
					"ticked": false
				}, {
					"category": "Adventure",
					"ticked": false
				}, {
					"category": "Card Game",
					"ticked": false
				}, {
					"category": "Cooperative",
					"ticked": false
				}, {
					"category": "Expansion",
					"ticked": false
				}, {
					"category": "Heavy Strategy",
					"ticked": false
				}, {
					"category": "Kids",
					"ticked": false
				}, {
					"category": "Light Strategy",
					"ticked": false
				}, {
					"category": "Party",
					"ticked": false
				}, {
					"category": "Teams",
					"ticked": false
				}, {
					"category": "Trivia",
					"ticked": false
				}
			],
			sub_categories: [{
					"sub_category": "Adult",
					"ticked": false
				}, {
					"sub_category": "Comedy",
					"ticked": false
				}, {
					"sub_category": "Deduction",
					"ticked": false
				}, {
					"sub_category": "Dice Game",
					"ticked": false
				}, {
					"sub_category": "Economic",
					"ticked": false
				}, {
					"sub_category": "Educational",
					"ticked": false
				}, {
					"sub_category": "Family",
					"ticked": false
				}, {
					"sub_category": "Fantasy",
					"ticked": false
				}, {
					"sub_category": "Puzzle",
					"ticked": false
				}, {
					"sub_category": "Racing",
					"ticked": false
				}, {
					"sub_category": "Role-Playing",
					"ticked": false
				}, {
					"sub_category": "Sci-Fi",
					"ticked": false
				}, {
					"sub_category": "Survival",
					"ticked": false
				}, {
					"sub_category": "Territory",
					"ticked": false
				}, {
					"sub_category": "War Game",
					"ticked": false
				}, {
					"sub_category": "Word Game",
					"ticked": false
				}
			],
			mechanics: [{
					"mechanic": "Acting",
					"ticked": false
				}, {
					"mechanic": "Action Points Allowance",
					"ticked": false
				}, {
					"mechanic": "Area Control",
					"ticked": false
				}, {
					"mechanic": "Area Influence",
					"ticked": false
				}, {
					"mechanic": "Auction/Bidding",
					"ticked": false
				}, {
					"mechanic": "Backstabbing",
					"ticked": false
				}, {
					"mechanic": "Betting/Wagering",
					"ticked": false
				}, {
					"mechanic": "Bluffing",
					"ticked": false
				}, {
					"mechanic": "Board Randomizer",
					"ticked": false
				}, {
					"mechanic": "Card Drafting",
					"ticked": false
				}, {
					"mechanic": "City Building",
					"ticked": false
				}, {
					"mechanic": "Deck Building",
					"ticked": false
				}, {
					"mechanic": "Dexterity",
					"ticked": false
				}, {
					"mechanic": "Dice Rolling",
					"ticked": false
				}, {
					"mechanic": "Hand Management",
					"ticked": false
				}, {
					"mechanic": "Memory",
					"ticked": false
				}, {
					"mechanic": "Negotiation",
					"ticked": false
				}, {
					"mechanic": "Paper & Pencil",
					"ticked": false
				}, {
					"mechanic": "Partnerships",
					"ticked": false
				}, {
					"mechanic": "Pattern Building",
					"ticked": false
				}, {
					"mechanic": "Player Elimination",
					"ticked": false
				}, {
					"mechanic": "Point System",
					"ticked": false
				}, {
					"mechanic": "Point To Point Movement",
					"ticked": false
				}, {
					"mechanic": "Resource Management",
					"ticked": false
				}, {
					"mechanic": "Route/Network Building",
					"ticked": false
				}, {
					"mechanic": "Secret Unit Deployment",
					"ticked": false
				}, {
					"mechanic": "Set Collection",
					"ticked": false
				}, {
					"mechanic": "Simultaneous Action",
					"ticked": false
				}, {
					"mechanic": "Storytelling",
					"ticked": false
				}, {
					"mechanic": "Territory Building",
					"ticked": false
				}, {
					"mechanic": "Tile Placement",
					"ticked": false
				}, {
					"mechanic": "Time Track",
					"ticked": false
				}, {
					"mechanic": "Trading",
					"ticked": false
				}, {
					"mechanic": "Variable Player Powers",
					"ticked": false
				}, {
					"mechanic": "Voting",
					"ticked": false
				}, {
					"mechanic": "Worker Placement",
					"ticked": false
				}
			],
			years: [2016,2015,2014,2013,2012,2011,2010,2009,2008,2007,2006,2005,2004,2003,2002,2001,2000,1999,1998,1997,1996,1995,1994,1993,1992,1991,1990,1989,1988,1987,1986,1985,1984,1983,1982,1981,1980,1979,1978,1977,1976,1975,1974,1973,1972,1971,1970,1969,1968,1967,1966,1965,1964,1963,1962,1961,1960,1959,1958,1957,1956,1955,1954,1953,1952,1951,1950,1949,1948,1947,1946,1945,1944,1943,1942,1941,1940,1939,1938,1937,1936,1935,1934,1933,1932,1931,1930,1929,1928,1927,1926,1925,1924,1923,1922,1921,1920,1919,1918,1917,1916,1915,1914],
			player_age: ["1+", "2+", "3+", "4+", "5+", "6+", "7+", "8+", "9+", "10+", "11+", "12+"],
			time: [15,30,45,60,75,90,105,120,150,180,210,240,270,300,330,360],
			players_options: [1,2,3,4,5,6,7,8,9,10,11,12],
			rating: [0.5,1,1.5,2,2.5,3,3.5,4,4.5,5],
			recommended_players: [1,2,3,4,5,6,7,8,9,10,11,12],
			recommended_age: ["1+","2+","3+","4+","5+","6+","7+","8+","9+","10+","11+","12+","13+","14+","15+","16+","17+","18+","19+","20+"]
		};

		selection.get = function() {
			return this;
		};

		selection.setInput = function(data) {
		  this.input = data;
		};
		selection.getInput = function() {
			return this.input;
		};

		selection.setPlayers = function(data) {
		  this.players = data;
		};
		selection.getPlayers = function() {
			return this.players;
		};

		selection.setSort = function(data) {
		  this.sort = data;
		};
		selection.getSort = function() {
			return this.sort;
		};

		selection.setSearchMobile = function(data) {
		  this.searchMobile = data;
		};
		selection.getSearchDesktop = function() {
			return this.searchDesktop;
		};
		selection.setSearchDesktop = function(data) {
		  this.searchDesktop = data;
		};
		selection.getSearchMobile = function() {
			return this.searchMobile;
		};
		selection.getCategories = function() {
			return this.categories;
		};
		selection.setCategories = function(data) {
			this.categories = data;
		};
		selection.getSortOptions = function() {
			return this.sortOptions;
		};
		selection.resetSortOptions = function() {
			return this.sort_options;
		};
		selection.resetCategories = function() {
			angular.forEach(this.categories, function(item) {
				item.ticked = false;
			});
			this.categories[5].ticked = true;
		};
		selection.resetCategoriesBlank = function() {
			angular.forEach(this.categories, function(item) {
				item.ticked = false;
			});
		};
		selection.getSubCategories = function() {
			return this.sub_categories;
		};
		selection.setSubCategories = function(data) {
			this.sub_categories = data;
		};
		selection.resetSubCategories = function() {
			angular.forEach(this.sub_categories, function(item) {
				item.ticked = false;
			});
		};

		return selection;
	}

	angular
		.module('app.common')
		.factory('settingFactory', settingFactory);

	settingFactory.$inject = [];

})();
