$(document).ready(function(){
   var selectHtml="";
   getData();
   
   $("#form_book").submit(function(e){
      e.preventDefault();
      var formData= {
          name: $('input#name').val().toUpperCase(),
          telephone: $('input#telephone').val()
      }
      
      $.post("server.php", formData).success(function(data){
        selectHtml = null;
        getData();
        $('input#name').val("");
        $('input#telephone').val("");
      });
      
   });
   
   $('input#delete').on('click',function(){
      var delValue = $('select#address_book').val(); 
      console.log(delValue);
      var formData = {
          del: true,
          id: delValue
      }
      $.post("server.php", formData).success(function(data){
          selectHtml = null;
          getData();
          console.log(data);
        });
   });
   $('input#sort').on('click',function(){sortSelect()});
   
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

   function sortSelect(){
    $.ajax({url: "address.json"}).done(function(data){
        data.sort(function(a,b){
            return (a.name < b.name) ? -1: 1;
        })
        selectHtml=null;
        populateSelect(data);
       }); 

   }
   
});