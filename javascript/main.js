document.getElementById('1')
.addEventListener('click',function () {

var xhr = new XMLHttpRequest();
  
   var url = '../html/phone1.json';
   xhr.open('GET',url,true);
xhr.onload= function() {
   if(this.status==200){
      var products = JSON.parse(this.responseText);
      
      console.log(products)
  
   }
}
 
  
   xhr.send();
})