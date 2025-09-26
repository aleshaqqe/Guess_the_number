document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector("input");
  const result = document.createElement('div');
  const btn=document.querySelector("button");
  btn.addEventListener("click", function(){
    let number = Math.floor((Math.random() * 100));
    const value = parseFloat(input.value.trim());
    const form = document.querySelector("form");
    if (value === "" || isNaN(parseFloat(value))) {
      result.innerHTML = `<p>Введите число!</p>`;
      input.value = '';
      form.appendChild(result);
      return;
    }
    if (value > 100 || value < 0) {
      result.innerHTML = `<p>Диапазон чисел от 0 до 100!</p>`;
      input.value = '';
      form.appendChild(result);
      return;
    }
  
    if(value==number){
      result.innerHTML=`<p>Вы угадали число</p>`;
      input.value='';
      form.appendChild(result);


    }else if(value!=number){
      result.innerHTML=`<p>Попробуйте ещё раз</p>`
      input.value='';
      form.appendChild(result);

    }
    else{
      input.value='';
      return 1;

    }

    console.log(number);
    console.log(value);
  });

});

