import React from 'react';
import Input from '../UI/Input';
const Dummy_Meals = [
    {
        id:'m1',
        name:'Momo',
        description:'Momo',
        price:'200',
    },
    {
        id:'m1',
        name:'Momo',
        description:'Momo',
        price:'200',
    }
];

const Availablemeals = () => {
    return(
    <div class="card1" >
        {
    Dummy_Meals.map((meal) =>{ 
return (
    <div class=""> 
    <ul className="" style={{listStyle:'none'}}>
      <li class="">{meal.name}</li>
      <li class="">{meal.price}</li>
      <li class="">{meal.description}</li>
    </ul>
    <Input/>       
    </div>
    )})
}
</div>

)}
export default Availablemeals