window.addEventListener("load", solve);
// class IngredientEntry{
//     constructor(name, quantity, unit){
//         this.name = name;
//         this.quantity = quantity;
//         this.unit = unit;
//     }
// }

// class TagSet{
//     constructor(mealType, meat, ingredientKeys){
//         this.mealType = mealType;
//         this.meat = meat;
//         this.ingredientKeys = ingredientKeys;
//         }
// }

// class NutritionSet{
//     constructor(proteins, fats, carbohydrates, calories){
//         this.proteins = proteins;
//         this.fats = fats;
//         this.carbohydrates = carbohydrates;
//         this.calories = calories;
//     }
// }

// class RecipeEntry{
//     constructor(recipeName, tagSet, nutritionSet, portionWeight, ingredientList, pictureURL, preparationSteps){
//         this.recipeName = recipeName;
//         this.pictureURL = pictureURL;
//         this.tagSet = tagSet;
//         this.nutritionSet = nutritionSet;
//         this.portionWeight = portionWeight;
//         this.ingredientList = ingredientList;
//         this.preparationSteps = preparationSteps;
//     }
// }



function solve(){
    var asd = getFile();
    let n = asd;
}
    // let ingredientList = [];
    // ingredientList.push(new IngredientEntry('телешко',250,'грама')); 
    // ingredientList.push(new IngredientEntry('грах-буркан',700,'грама'));
    // ingredientList.push(new IngredientEntry('кромид',200,'грама'));
    // ingredientList.push(new IngredientEntry('кисело мляко',400,'грама'));

    // let ingredientKeys = ['телешко', 'грах'];

    // tagSet = new TagSet('основно', 'месо', ingredientKeys);

    // nutritionSet = new NutritionSet(55, 33, 79, 640);

    // recipe = new RecipeEntry('Телешко с грах', tagSet, nutritionSet, 580, ingredientList, 'testfile.jpg');
    // let recipes = [];
    // recipes.push(recipe);
    // ingredientList.pop();
    // ingredientList.pop();
    // ingredientList.pop();
    // ingredientList.pop();
    // ingredientList.push(new IngredientEntry('свинско',250,'грама')); 
    // ingredientList.push(new IngredientEntry('картофи',700,'грама'));
    // ingredientList.push(new IngredientEntry('моркови',200,'грама'));
    // ingredientList.push(new IngredientEntry('кромид',150,'грама'));
    // ingredientKeys = ['свинско', 'картофи'];
    // tagSet = new TagSet('основно', 'месо', ingredientKeys);
    // nutritionSet = new NutritionSet(55, 67, 49, 620);
    // recipe = new RecipeEntry('Свинско с картофи', tagSet, nutritionSet, 580, ingredientList, 'testfile2.jpg');
    // recipes.push(recipe);
    // let jss = JSON.stringify(recipes);
    // putFile();

    
    function createElement(tag, properties, container) {
		let element = document.createElement(tag);
		Object.keys(properties).forEach(key => {
			if (typeof (properties[key]) === 'object') {
				Object.assign(element[key], properties[key]);
			}
			else {
				element[key] = properties[key];
			}
		});
		if (container) container.append(element);
		return element;
	}

    async function getFile() {
    try {
        const response = await fetch('RecipeTemplate.json');
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const result = await response.json();
        return(result);
        }     
    catch (error) {
        console.error(error.message);
    }
}

    // function createEntryMid(name, location, gender){
    //     const prepListItem = createElement('li',
    //         {
    //             dataset: { name: name, location: location, gender: gender },
    //             className: 'creating'
    //         },
    //         prepList);
    //     const prepArticle = createElement('article', {}, prepListItem);
    //     createElement('h4',{textContent: name}, prepArticle);
    //     createElement('p',{textContent: location}, prepArticle);
    //     createElement('p',{textContent: gender}, prepArticle);        
    //     createElement('button', {
    //         className: 'action-btn edit',
    //         textContent: 'Edit',
    //         onclick: editBtnHandler
    //     }, prepListItem);
    //     createElement('button', {
    //         className: 'action-btn done',
    //         textContent: 'Done',
    //         onclick: doneBtnHandler
    //     }, prepListItem);
    // }

    // const formInputs = [...document.querySelectorAll('#left-container #name, #location, #gender')];
    // const createBtn = document.querySelector('button, #create-btn');
    // const prepList = document.querySelector('#center-container #preparing-list');
    // const finalList = document.querySelector('#right-container #character-list');

    // createBtn.addEventListener('click', createHandler);

    // function createHandler(e){
    //     e.preventDefault();
    //     const [name, location, gender] = formInputs.map(item => item.value);
    //     if (!name || !location || !gender) return;
    //     createEntryMid(name, location, gender);
    //     formInputs.forEach(item => item.value = '');
    //     createBtn.disabled = 'true';
    // }

    // function editBtnHandler(e){
    //     e.preventDefault();
    //     const closestLi = e.target.closest('li');
    //     closestLi.remove();
    //     Object.values(closestLi.dataset).forEach((value, index) => formInputs[index].value = value);
    //     createBtn.disabled = '';
    // }

    // function doneBtnHandler(e){
    //     e.preventDefault();
    //     const closestLi = e.target.closest('li');
    //     closestLi.remove();
    //     buttonsToRemove = [...closestLi.querySelectorAll('button')];
    //     buttonsToRemove.forEach(btn => btn.remove());
    //     finalList.appendChild(closestLi);
    //     createBtn.disabled = '';
    // }

