// code your solution here
function saturdayFun(activity ="roller-skate"){
let message ="This Saturday, I want to "
return( message + activity+ '!')
}
function mondayWork( activity2= "go to the office"){
    let message2 = "This Monday, I will "
    return (message2 + activity2 +'.')

}
function wrapAdjective(wrap="*"){
       
    const  innerWrap=function(emphatic="a hard worker"){
    
      return `You are ${wrap}${emphatic}${wrap}!`; 
    }
    return innerWrap;
 }
    