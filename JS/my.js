 function palindrome()
{

    var num=123;
    var tot=0;
      while(num>0)
        {
            let r=num%10;
            tot=(tot*10)+r;
            num=num/10;


        }
    if(num==tot)
        {
console.log("Palindrome Number");
        }
        else
        {
console.log("Not a Palindrome Number");
        }
}

//palindrome();
//reverse the numbers
//armstrong number
//prime number
//even or odd numbers
//leap year
//reverse the string


function datetest()
{

    var ob=new Date("05/10/2024");
    console.log(ob.getDay());
    console.log(ob.getDate());
    console.log(ob.getMonth());
    console.log(ob.getFullYear());
   // console.log(Date.now.toString());

}

//datetest();

//callback

setTimeout(datetest,3000);

setTimeout(
    function sucess()
{
    console.log("Success");
}

,2000);


setTimeout(
     sucess=()=>
{
    console.log("Success Arrow");}

,2000);

setTimeout(
    ()=>
{
   console.log("Success Anonymous function");}

,2000);


function pass()
{
console.log("Pass");
}

function fail()
{
    console.log("fail");
}


let prom = new Promise(
    (resolve, reject) => {
    setTimeout(() => resolve("Done!"), 2000);
  }
);
  
console.log(prom);