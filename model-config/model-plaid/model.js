const config1 = document.querySelector('.config-1');
const config2 = document.querySelector('.config-2');



config1.addEventListener('click', function() {
    console.log('1');
    document.querySelector('.config-2').style.color = 'black';
    document.querySelector('.config-1').style.color = 'red';

    document.querySelector('.price-uzb').textContent = '$113,990'
   
});

config2.addEventListener('click', function() {
    document.querySelector('.config-1').style.color = 'black';
    document.querySelector('.config-2').style.color = 'red'; 
    document.querySelector('.price-uzb').textContent = '$160,990'
});




