document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector("input");
  const result = document.createElement('div');
  const btn=document.querySelector("button");
  btn.addEventListener("click", function(){
    let number = Math.floor((Math.random() * 100));
    const value = parseFloat(input.value);

    if(isNaN(value)) {
    result.innerHTML=`<p>Введите число!</p>`;
    input.value='';
    return;
  }

  if(value==number){
    result.innerHTML=`<p>Вы угадали число</p>`;
    input.value='';

  }else if(value!=number){
    result.innerHTML=`<p>Попробуйте ещё раз</p>`
    input.value='';
  }else{
    input.value='';
    return 1;
  }
    const form = document.querySelector("form");
    form.appendChild(result);
    console.log(number);
    console.log(value);
  });

});

