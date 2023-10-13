


        const arrayFruits = ["Banana ","Orange ","Mongo ","Water Melon"];
        console.log(`1)First and last element of array is:- `);
        console.log(`${arrayFruits[0]} ${arrayFruits[arrayFruits.length-1]}`);
        console.log(`=====================================================================================`);

        arrayFruits.unshift("Papaya ");
        console.log(`2)Added first element Papaya before Banana is:-`);
        console.log(arrayFruits);
        console.log(`=====================================================================================`);


        arrayFruits.splice(3,1);
        console.log(`3)Remove Mango from array is- `);
        console.log(arrayFruits);
        console.log(`=====================================================================================`);

        arrayFruits.push("Pineapple");
        console.log(`4)Added element or insert an element Pineapple last position:-`);
        console.log(arrayFruits);
        console.log(`=====================================================================================`);

        arrayFruits.splice(3,0,"Dragon Fruit");
        console.log(`5)Inserted an element Dragon Fruit before Water Melon:-`);
        console.log(arrayFruits);
        console.log(`=====================================================================================`);

        arrayFruits.splice(2,1,"Kiwi");
        console.log(`6)Replace Orange with Kiwi:-`);
        console.log(arrayFruits);
        console.log(`=====================================================================================`);


        var result = arrayFruits.slice(1,4);
        console.log(`7)elements starting from the 1 to 4`);
        console.log(result);
        console.log(`=====================================================================================`);

        
        var arrayFruits2 = ["Papaya","Banana","Kiwi","Apple","Dragon fruits","Water Melon","Pineapple"];
        const arraySliced = arrayFruits2.slice(4)
        console.log("Only select last 3 elements & log on console :");
        console.log(arraySliced);