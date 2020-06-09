	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "brocoli",
		vegetarian: true,
		glutenFree: true,
		organicProduct:true,
		price: 1.99
	},
	{
		name: "bread",
		vegetarian: true,
		glutenFree: false,
		organicProduct:false,
		price: 2.35
	},
	{
		name: "salmon",
		vegetarian: false,
		glutenFree: true,
		organicProduct:true,
		price: 10.00
	},
	{
		name: "steak",
		vegetarian: false,
		glutenFree: true,
		organicProduct:true,
		price: 15.00

	},
	{
		name: "fries",
		vegetarian: true,
		glutenFree: false,
		organicProduct:false,
		price: 4.00

	},
	{
		name: "burger",
		vegetarian: false,
		glutenFree: true,
		organicProduct:false,
		price: 8.00

	},
	{
		name: "shrimp",
		vegetarian: false,
		glutenFree: true,
		organicProduct:false,
		price: 7.00

	},
	{
		name: "apple",
		vegetarian: true,
		glutenFree: true,
		organicProduct:true,
		price: 2.00

	},
	{
		name: "ice cream",
		vegetarian: true,
		glutenFree: false,
		organicProduct:false,
		price: 4.00

	},
	{
		name: "fried chiken",
		vegetarian: false,
		glutenFree: false,
		organicProduct:false,
		price: 8.00

	}
];

// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Vegetarian" && restriction) && (prods[i].vegetarian == true)){
			product_names.push(prods[i]);
		}
		else if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
			product_names.push(prods[i]);
		}
		else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
			product_names.push(prods[i]);
		}
		else if ((restriction == "OrganicProduct") && (prods[i].organicProduct == true)){
			product_names.push(prods[i]);
		}
		else if (restriction == "None"){
			product_names.push(prods[i]);
		}
	}
	//bubble sort
	var n = product_names.length; 
    for (let i = 0; i < n-1; i++) {
        for (let j = 0; j < n-i-1; j++){ 
            if (product_names[j].price > product_names[j+1].price) 
            { 
                // swap arr[j+1] and arr[i] 
                var temp = product_names[j]; 
                product_names[j] = product_names[j+1]; 
                product_names[j+1] = temp; 
            } 
        }
    }
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}
