let menu = {
    drinks: [
        "Water", "Tea", "Sweet Tea",
        "Coke", "Dr. Pepper", "Sprite"
    ],
    entrees: [
        "Hamburger w/ Fries",
        "Grilled Cheese w/ Tater Tots",
        "Grilled Chicken w/ Veggies",
        "Chicken Fried Steak w/ Mashed Potatoes",
        "Fried Shrimp w/ Coleslaw",
        "Veggie Plate"
    ],
    desserts: [
        "Cheesecake", "Chocolate Cake", "Snickerdoodle Cookie"
    ]
};

const itemList = document.getElementById("itemList");

const categoryList = document.getElementById("categoryList");
window.onload = function () {
    var categoryList = document.getElementById("categoryList");
   

    for (var x in menu) {
        categoryList.options[categoryList.options.length] = new Option(x, x);
    }

    //console.log(menu.length);

    categoryList.onchange = function () {


        const itemList = document.getElementById("itemList");

        const dropdown = document.getElementById("categoryList");
        const selectedOption = dropdown.options[dropdown.selectedIndex];
        var selectedValue = selectedOption.value;
        console.log(selectedValue); // Output: "option2"


        for (var x in menu.drinks) {

            //itemList.options[itemList.options.length] = new Option(x, x);

            //console.log(menu.drinks[x]);

            let length = menu.drinks.length;
            console.log(length);
            for (let i = 0; i < length; i++) {

                // create the option element and set the text and
                // value at the same time
                let theOption = new Option(menu.drinks[x]);
                 console.log(theOption);
                // append the option as a child of (inside) the 
                // select element
                itemList.appendChild(theOption);
            }

            //console.log(x.toString());
        }
    }
}





  

   







