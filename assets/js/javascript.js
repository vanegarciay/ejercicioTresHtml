function convertirCelsius(){
    var celsius = document.getElementById('celsius').value; 
    var fahrenheit = Math.round((celsius*1.8)+32);
    document.getElementById('fahrenheit').value = fahrenheit;  
}
