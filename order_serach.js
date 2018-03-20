/*================== order list search with input ==============*/
  function search_name() {
                var srchh = document.getElementById('search_nam').value;
                var demo = document.getElementById('demo');
                var classs= demo.getElementsByClassName("col_box")
				var col_boot = document.getElementsByClassName('col-sm-3')
				//console.log(classs)
                for(var i = 0; i < classs.length; i++){
                 var list_span =  classs[i].getElementsByTagName('span')
					console.log(srchh)
					for(var j = 0; j<list_span.length; j++ ){
						if(list_span[j].innerHTML == srchh){
							col_boot[i].className = "col-sm-3 block"
							list_span[j].className = "bold"
						}
						else{
							col_boot[i].classList.remove = "block"
							list_span[j].classList.remove = "bold"
						}
						
					}
				   
                 
                  
                  }
                }
               
  /*=============== select =================*/
    function abc(){
         var x = document.getElementById('select_id').value
         var demo = document.getElementById('demo');
                var classs= demo.getElementsByClassName("col_box")
                for(var i = 0; i < classs.length; i++){
                    var loop_i = classs[i];
                        //console.log(loop_i)
                    var node_list = loop_i.childNodes[3]
					//console.log(node_list)
                    var node_span = node_list.getElementsByTagName('span')[0]
                       // console.log(node_span)
                    var col_boot = document.getElementsByClassName('col-sm-3')
                    if(node_span.innerHTML.indexOf(x) > -1){
                       // console.log(x);
                      // col_boot[i].className = "col-sm-3 block"
                        node_span.className = "bold"
						col_boot[i].style.display="block";
                    }
                    else{
                          //  col_boot[i].classList.remove("block") 
                          node_span.classList.remove("bold")
						  col_boot[i].style.display="none";
                    }
                    
                     
                }
                }          
    
      /*=============== driver =================*/
    function driver(){
         var y = document.getElementById('driver_sel').value
         var demo = document.getElementById('demo');
                var classs= demo.getElementsByClassName("col_box")
                for(var i = 0; i < classs.length; i++){
                    var loop_i = classs[i];
                        //console.log(loop_i)
                    var node_list = loop_i.childNodes[4]
//console.log(node_list)
                    var node_span = node_list.getElementsByTagName('span')[0]
                    
                       // console.log(node_span)
                    var col_boot = document.getElementsByClassName('col-sm-3')
                    if(node_span.innerHTML.indexOf(y) > -1){
                       // console.log(x);
                   //    col_boot[i].className = "col-sm-3 block"
                       node_span.className = "bold"
					col_boot[i].style.display="block";
                    }
                    else{
                           //  col_boot[i].classList.remove("block") 
                        node_span.classList.remove("bold")
						 col_boot[i].style.display="none";
                    }
                    
                     
                }
                }  

/*======reset============*/
    
    function reset(){
       // var reset_value = document.getElementById('search_nam').value
      //  console.log(reset_value="")
       document.getElementById('search_nam').value = ""
       var sel = document.getElementById('driver_sel').value
       var sel_status = document.getElementById('select_id').value
      if(sel != "Select driver" || sel_status != "Select status"){
            document.getElementById('driver_sel').selectedIndex = 0;
            document.getElementById('select_id').selectedIndex = 0;
      }
        
        
        var demo = document.getElementById('demo');
         var classs= demo.getElementsByClassName("col_box");
          var col_boot = document.getElementsByClassName('col-sm-3')
          // node_span.classList.remove("bold")
           for(var i = 0; i < classs.length; i++){
                var loop_i = classs[i];
                        //console.log(loop_i)
               var loop_i = classs[i];
                    var node_list = loop_i.childNodes[4]
                    var node_list_status = loop_i.childNodes[3]
                 
                    //console.log(node_list)
                    var node_span = node_list.getElementsByTagName('span')[0]
                    var node_span_status = node_list_status.getElementsByTagName('span')[0]
                     node_span.classList.remove("bold")
                       node_span_status.classList.remove("bold")
                   // col_boot[i].classList.remove("block") 
                 col_boot[i].style.display="block";
               
           }
        }
