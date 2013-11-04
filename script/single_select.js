var arr=[];
var arr_answer=[];
var question='';
var num=1;
function initial(right_answer,num_section){
	
	arr_answer=right_answer;
		
	
	for(var i=0;i<arr_answer.length;i++){		
			arr.push(0);
			num=i+1;
			question=question+'.q'+num+',';		
	}
		
	$(''+question).click(function(){
		var class_click = $(this).attr( "class" );
		var id_click = $(this).attr( "id" );
		
		$('.'+class_click).css('background-color','#fff');
		$(this).css('background-color','#0FF');		
		
		var n = id_click.substr(3,1); 
		var n_question = id_click.substr(2,1); 
		arr[n_question-1]=n; 
		
	});
	
}
function check(){
	var flag=true;
	for(var i=0;i<arr.length;i++){
		if(arr[i]!=arr_answer[i] || arr[i]==0){
			flag=false;
			var pos=i+1;
			$('.q'+pos).css('background-color','#fff');
		}
	}
	if(flag){
		alert('True');
	}else{
		alert('False');
	}
	
}