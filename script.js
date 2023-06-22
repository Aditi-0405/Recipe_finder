function my_func() {
    var x=document.getElementById("recipie");
    
    x.style.display="block";
  }
  let x= document.getElementById("recipie")
  let tit=document.getElementById("title");
  let ori=document.getElementById("origin");
  let lists=document.getElementById("ingr_list");
  let imgg=document.getElementById("imgingri");
  let url_temp="https://www.themealdb.com/api/json/v1/1/search.php?s=";
  let  url=url_temp+"chicken";
  let parent= document.createElement("ul");
  let search_button=document.getElementById("butt");
  let y=document.getElementById("ing_head");
  let z=document.getElementById("reci_butt");

  // let user_input=document.getElementById("search").value;
  // url=url_temp+ user_input;
  // let user_input=document.getElementById("search").value;
  // url= url_temp+ user_input;
search_button.addEventListener("click", ()=>{
  let user_input=document.getElementById("search").value;
     url=url_temp+ user_input;
  if(user_input.length ==0){
    tit.innerHTML=`<h3> ENTER ANY DISH </h3>`;
    ori.innerHTML=``;
    imgg.innerHTML=``;
    x.innerHTML=``;
    ingr_list.innerHTML=``;
    y.innerHTML=``;
    z.innerHTML=``;
  }
 
  else{
    
x.style.display="none";
    fetch(url)
    .then((response)=>response.json())
    .then((data)=>{
      console.log(data);
      if(data.meals=="null"){
        
          tit.innerHTML=`<h3> NO MEALS FOUND </h3>`;
        
      }
      else{}
     let my_meal=data.meals[0];
    //  console.log(my_meal);
    //  console.log(my_meal.strInstructions);
  let count=1;
  let ingridients_list=[];
  for(let i in my_meal){
    let ingridient="";
    let measure="";
    if(i.startsWith("strIngredient")&& my_meal[i]){
      ingridient=my_meal[i];
      measure=my_meal[`strMeasure`+ count];
      count+=1;
      ingridients_list.push(` ${measure} ${ingridient}`);
  
  
    }
  
    
  }
  tit.innerHTML=`
   ${my_meal.strMeal}
  `;
  ori.innerHTML=`
   ${my_meal.strArea}
  `;
  imgg.innerHTML=`
   <img src=${my_meal.strMealThumb} class="dish">
  `;
 
  x.innerHTML=`
  
   <pre > ${my_meal.strInstructions}</pre> 
  
  
  `;
  y.innerHTML=`   <div class="ing_head">INGRIDIENTS</div>
  `;
  z.innerHTML=`
  <a class="grtrecipe" href="#recipie"><button type="button" class="scrollbutt" onclick="my_func()">GET
  RECIPE</button></a>
  `;
  ingridients_list.forEach((i)=>{
  
    let child= document.createElement("li");
    child.innerText=i;
    parent.appendChild(child);
    ingr_list.appendChild(parent);
  }
  
  )
  // console.log(ingridients_list);
  
  
    }).catch(()=>{
      tit.innerHTML=`<h3> OOPS! NO MEALS FOUND! </h3>`;
      ori.innerHTML=``;
      imgg.innerHTML=``;
      x.innerHTML=``;
      ingr_list.innerHTML=``;
      y.innerHTML=``;
      z.innerHTML=``;
    })
  }
});