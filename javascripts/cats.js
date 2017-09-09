var CatStore = ((oldCatStore) => {
	let cats = [];

	oldCatStore.getCats = () => {
		return cats;
	}

	oldCatStore.setAllCats = (allMyCats) => {
		cats = allMyCats;
	};

	oldCatStore.adoptCat = (catIndex) => {
		console.log(catIndex);
		cats[catIndex].ownerId = 4;
		let myCats = CatStore.getCats();
		let myOwners = CatStore.getOwners();
		CatStore.combineArrays(myCats, myOwners);
	};

	return oldCatStore;
})(CatStore || {});