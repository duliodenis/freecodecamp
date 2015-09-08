

  function runSlots(){
    var slotOne;
    var slotTwo;
    var slotThree;
   
    var images = ["http://i.imgur.com/9H17QFk.png", "http://i.imgur.com/9RmpXTy.png", "http://i.imgur.com/VJnmtt5.png"];

    // Generate the random numbers
    slotOne = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    slotTwo = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    slotThree = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    
    $(".logger").html("");
    $(".logger").html("Not A Win")
    
    if(slotOne !== undefined && slotTwo !== undefined && slotThree !== undefined){
      $(".logger").html(slotOne + " " + slotTwo + " " + slotThree);
    }
    return [slotOne, slotTwo, slotThree];
  }

  $(document).ready(function(){
     $(".go").click(function(){
       runSlots();
     });
   });

 
