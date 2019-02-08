/* Style the HTML elements according to the following instructions.
DO NOT ALTER THE EXISTING HTML TO DO THIS.  WRITE ONLY CSS!
*/


/* Give everything with the class 'hello' a white background when you click on one of them*/
// add class to change background color to red when clicked
$(".hello").on("click", function(){
    console.log("test");
    $(this).addClass("myColor")
});




/* When you mouse over the "Selectors Exercise" element, change the height&width to 20px. When you mouse off of it change it back */
// created a function to change height and width when mouseover "selectors evercise"
$("h1").on("mouseover", function () {
    $(this).addClass("size");
});
$("h1").on("mouseout", function () {
  $(this).removeClass("size")
});


/* Each time the sentence "I am a paragraph with a class" is clicked, add a "." to the end of the sentence. */
// created a function to add a "." to the end of the sentence

$("div").children("p:first").on("click", function () {
    $(this).append(".")
});


