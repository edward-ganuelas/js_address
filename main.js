$(document).ready(function(){
   var selectHtml="";
   getData();
   
   $("#form_book").submit(function(e){
      e.preventDefault();
      var formData= {
          name: $('input#name').val(),
          telephone: $('input#telephone').val()
      }
      
      $.post("server.php", formData);
      selectHtml = null;
      getData();
      $('input#name').val("");
      $('input#telephone').val("");
   });
   
   function getData(){
       $.ajax({url: "address.json"}).done(function(data){
        populateSelect(data);
       }); 
   }
   
   function populateSelect(data){
        data.forEach(function(element) {
            selectHtml+="<option value='"+element.id+"'>"+element.name+" "+element.telephone+"</option>";
        }, this);
       $('#address_book').empty().append(selectHtml);
   }
   
});