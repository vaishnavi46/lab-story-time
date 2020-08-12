//Progression 1:
//We've got some basic info about Karen's home
//Debug the type of data provided
//Return the types concatenated in a single variable
var info=moreabouthome("bangalore",2,true);
console.log(info);
function moreabouthome(address,distfromtown,hasneighbour)
{
    return typeof address +" "+ typeof distfromtown +" "+ typeof hasneighbour;
}
// //Progression 2:
// //Check if the data given is of the right type
// //parents = String, noOfSiblings = Number, isNuclearFamily = Boolean
var data=moreaboutkaren("parent",2,true);
console.log(data);
function moreaboutkaren(a,b,c)
{
    //console.log(typeof c);
    if((typeof a =="string") && (typeof b =="number") && (typeof c =="boolean"))
    {
        return true;
    }
    else
    {
        return false;
    }
}
// //Progression 3:
// //Lily is suspicious about Karen's new friend
// //Karen tells her friend's age and even writes it down
// //Check which one those is not a number (NaN) and return that value

var ret=doesFriendExit(12,'twelve');
console.log(ret);
function doesFriendExit(ageInText,ageInNumber)
{
    if(isNaN(ageInText))
    {
        return ageInText;
    }
    if(isNaN(ageInNumber))
    {
        return ageInNumber;
    }
    
}
//Progression 4:
//Lily gave Karen x sweets
//Karen ate y sweets herself
//On her way to the river, she ate another z sweets every n meters travelled
//Her friend divided the remaining sweets into 2 parts for each
//How many sweets did her friend get to eat?
sweettooth(100,10,10,10);

 function sweettooth(totalNoOfSweets, sweetsConsumedByKaren, sweetsConsumedInNMeters, metersToTravel)
 {
     var riverdistance=100;
     var balancesweets,numofsweetstravel;
     var balance;
    if(sweetsConsumedByKaren<=totalNoOfSweets)
    {
        balancesweets=totalNoOfSweets-sweetsConsumedByKaren;
        numofsweetstravel=riverdistance/metersToTravel;
        if(numofsweetstravel==sweetsConsumedInNMeters)
        {
            if(balancesweets>sweetsConsumedInNMeters)
            {
                balance=(balancesweets-sweetsConsumedInNMeters)/2;
            }
            else
            {
                console.log("invalid number");
            }
        }
        else
        {
            console.log("invalid number");
        }
    }
    else
    {
        console.log("invalid number");
    }
    console.log(balance);

 }  

// //Progression 5:
//As Lily moves closer, it gets colder. She checks the temperature on her mobile
//It only shows in fahrenheit. Convert the data to celsius and return it.
var far=110
var cel=convertToCelsius(far);
console.log(cel);
function convertToCelsius(fahrenheit)
{
    var celcius = ((fahrenheit-32) * (5/9) );
    return celcius;
}
    
// //Progression 6:
// //Lily can now do multiple things to deal with this
// //1. Take her daughter to a doctor
// //2. Talk to her husband about it
// //3. Counsel her daughter herself
// //4. Lock her daughter in her room
// //Given a value, return which of these above actions Lily would take
var final=aDifficultChoice(3);
console.log(final);
function aDifficultChoice(choice)
{
var decision;
    switch(choice)
    {
        case 1:
            decision="Take her daughter to a doctor";
            break;
        case 2:
            decision="Talk to her husband about it";
            break;
        case 3:
            decision="Counsel her daughter herself";
            break;
        case 4:
            decision="Lock her daughter in her room";
            break;
        default: 
                decision="choice between 1 to 4";
                break;
    }
return decision;  
}
//Progression 7:
//Lily realized that she'd hurt her daughter
//All she wants now is for her to stop crying
//She refuses to talk to her but Lily doesn't stop trying
//She tries out multiple things hoping for the best
//Take all of Lily's strategies and concatenate them to a single var
//Seperate the strategies by a single space
//Return the length of the complete strategy
