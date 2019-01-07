(function()
{
   this.typed = function() { 
      DoTyping(arguments[0])
   }
 function  DoTyping(options) {
     let word = options['strings']
     let element  = options['element'] 
     let st = options['startingSpeed'] 
     let ty = options['typingSpeed'] 
     begin(element,word,st,ty)
    }
    function begin(element,word,st,ty) {
    var first =  setTimeout(()=> {
     for(var i=1;i<=word.length;i++) {      
        function timer(){ 
            var k = i; 
            setTimeout(()=>{
               var val = word.substring(0,k);
                $(element).text(val)
               if(k == word.length) {
                   end(element,word,st,ty)
               }
            },ty*i);
         }
         timer();
        
        }
    },st)

 } 
 function end(element,word,st,ty)  {
    var second =  setTimeout(()=> {
        for(var i=word.length;i>=0;i--) {      
           function timer(){ 
               var k = i; 
               setTimeout(()=>{
                  var val = word.substring(0,word.length-k);
                   $(element).text(val)
                  if(k == word.length) {
                    begin(element,word,st,ty)
                  }
               },ty*i);
            }
            timer();
           }
       },st)
 }  
}())