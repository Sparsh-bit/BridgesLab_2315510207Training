
const menu={burger:120,pizza:200,pasta:150};

function calculateBill(items){
  try{
    const prices=items.map(i=>{
      if(!menu[i]) throw new Error("Invalid item: "+i);
      return menu[i];
    });
    const total=prices.reduce((a,b)=>a+b,0);
    console.log("Total:", total);
  }catch(err){
    console.error("Error:",err.message);
  }
}

calculateBill(["burger","pizza"]);
calculateBill(["burger","icecream"]);
