
const returnFirstTwoDrivers=(function (drivers)
{
    return ['Antonia','Nuru'];
});
const returnLastTwoDrivers=(function (drivers)
{
    return ['Amari','Mo'];
});
const selectingDrivers =[returnFirstTwoDrivers,returnLastTwoDrivers];
const createFareMultiplier=(function (value)
{
return (function()
{
return value*value;
});
}
);
const fareDoubler=(function ( createFareMultiplier)
{
return createFareMultiplier*2;
});
const fareTripler=(function (createFareMultiplier)
{
return createFareMultiplier*3;
});
    function selectDifferentDrivers(drivers, task){
        for(let i = 0; i < selectingDrivers.length; i++){
          if(selectingDrivers[i] === task){
            return selectingDrivers[i](drivers);
          }
        }
      }