/*
* File:app.js
* Author: Megyeri Márk Máté 
* Copyright: 2022, Megyeri Márk Máté 
* Date: 2022-08-03
* Github: https://github.com/megyerimark/
* Licenc: GNU GPL
*/
 



const input= document.querySelector('input'),
    button= document.querySelector('button'),
    copyBtn= document.querySelector('span.far'),
    copy= document.querySelector('.copy'),
    copyActive= document.querySelector('span.fas');


console.log('Megyeri Márk Máté 2022.08.03'
);

let chars="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTYWXYZ123456789"


button.onclick=  () => {
    let i ,
     randomPassword= '';
    copyBtn.style.display="block";
    copyActive.style.display="none";

    // for (let i = 0; index < 30; i++) {
    //     const element = array[index];
        
    // }
    for(i = 0; i < 16;  i++)
     {
        randomPassword=
        randomPassword + chars.charAt(Math.floor(Math.random() * chars.length));
     }
     input.value= randomPassword;
};
copy.onclick= ()=>{
    copyBtn.style.display="block";
    copyActive.style.display="none";
    input.select();
    navigator.clipboard.writeText(input.value);
};


// // button.addEventListener('oneClick', () =>
// // {


// //     const i,
// //     randomPassword= "";
// //         copyBtn.style.display="block";
// //         copyActive.style.display="none";
    
// //         for (i = 0; i<16; i++)
// //          {
// //             randomPassword=
// //             randomPassword+chars.charAt(Math.floor(Math.random()* chars.length));
// //          };
// //          input.value= randomPassword;
    
// //         }