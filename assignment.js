/* Problem-1: Feet to Mile converter
-------------------------------------------------------------------------------------------------------------*/
function feetToMile(feet){
    

    //Condition for Positive input-------------------------------------------------
    if(feet > 0){
        var mile = feet/5280;
    }
    //Condition for Zero input-------------------------------------------------
    else if(feet == 0){
        return "You have enterder 0 !!!!";
    }
    //Condition for Negative input-------------------------------------------------
    else if(feet < 0){
        return "Length value can not be Negative !!!"
    }
    //Condition for other input-------------------------------------------------
    else{
        return "Invalid Format";
    }

    return mile;
}





/* Problem-2: Wood Calculator
-------------------------------------------------------------------------------------------------------------*/
function woodCalculator(chair,table,bed){
//Wood needed for per Furnichure----------------------------------------------
    const woodPerChair = 1;
    const woodPerTable = 3;
    const woodPerBed = 5;
    //Condition for Positive input-------------------------------------------------
    if(chair,table,bed > 0){
    //Total Wood needed for per Furnichure----------------------------------------------
    var woodForChair = woodPerChair*chair;
    var woodForTable = woodPerTable*table;
    var woodForBed = woodPerBed*bed;

    //Total Wood needed for All Furnichure----------------------------------------------
    var totalWood = woodForChair+woodForTable+woodForBed;
    }
    //Condition for Zero input-------------------------------------------------
    else if(chair,table,bed == 0){
        return "You have enterder 0 !!!!";
    }
    //Condition for Negative input-------------------------------------------------
    else if(chair,table,bed < 0){
        return "Length value can not be Negative !!!"
    }
    //Condition for other input-------------------------------------------------
    else{
        return "Invalid Format";
    }
    return totalWood;
}



/* Problem-3: Brick Calculator
-------------------------------------------------------------------------------------------------------------*/


function brickCalculator(floor){

    //No. of bricks needed for per feet----------------------------------------------------------
        const bricksPerFeet = 1000;

    //Height of each floor in three division (1 to 10 = 15ft) (11 to 20 = 12ft) (above 20 = 10ft)
        const oneToTenPerFloorHeight = 15;
        const elevenToTwentyPerFloorHeight = 12;
        const aboveTwentyHeight = 10;

    //No. of Floor-------------------------------------------------------------------------------     
        var elevenToTwenty = floor-10;
        var aboveTwenty = floor-20 ;

    //Condition for 1-10th floor----------------------------------------------------------------- 
    if(floor >= 1 && floor <= 10){
        var totalBricks = oneToTenPerFloorHeight*floor*bricksPerFeet;
    }
     
    //Condition for 11-20th floor---------------------------------------------------------------- 
    else if(floor >= 11 && floor <= 20){
        var totalBricks = ((oneToTenPerFloorHeight*10)+(elevenToTwentyPerFloorHeight*elevenToTwenty))*bricksPerFeet;   
    }

    //Condition for above 20th floor-------------------------------------------------------------- 
    else if(floor>20){
        var totalBricks = ((oneToTenPerFloorHeight*10)+(elevenToTwentyPerFloorHeight*elevenToTwenty)+(aboveTwentyHeight*aboveTwenty)*bricksPerFeet);   
    }
    
    //Condition for Negative, Zero and other input-------------------------------------------------
    else if(floor < 0){
        return "Floor value can not be negative !!"
    }
    else{
        return "Invalid input";
    }

    return totalBricks;
}



/* Problem-4: Tiny Friend
-------------------------------------------------------------------------------------------------------------*/
    
function tinyFriend(array) {
	return array.reduce(function(previousWord,currentWord) {
		if (currentWord.length < previousWord.length) {
			return currentWord;
		}
		else 
			return previousWord;
	})
}

