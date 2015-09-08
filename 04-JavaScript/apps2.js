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
    
    // Use selectors to display each number in its corresponding slot.
    /*$($(".slot")[0]).html(slotOne);
    $($(".slot")[1]).html(slotTwo);
    $($(".slot")[2]).html(slotThree);
    */
    $($('.slot')[0]).html('<img src="' +images[slotOne-1] +'">');
    $($('.slot')[1]).html('<img src="' +images[slotTwo-1] +'">');
    $($('.slot')[2]).html('<img src="' +images[slotThree-1] +'">');
      
    // if statement with multiple conditions in order to check whether all numbers are equal.
    if ((slotOne !== slotTwo) || (slotTwo !== slotThree) || (slotThree !== slotOne)) return null;
      
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