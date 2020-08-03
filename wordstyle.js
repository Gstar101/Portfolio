function fu()
{
// Wrap every letter in a span 
$('.l .anim').each(function(){ 
$(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='anim'>$&</span>")); 
}); 
anime.timeline({loop: true}) 
.add({ 

targets: '.l .anim', 
scale: [0, 1], 
duration: 1500, 
elasticity: 600, 
delay: function(el, i) 
{ return 55 * (i*1) } }).add({ 
   
   targets: '.l', 
   opacity: 0, 
   duration: 1000, 
   easing: "easeOutExpo", 
   delay: 1000 });
}
