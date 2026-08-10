function onDisplay(tabname){
	$('#tab1').hide();
	$('#tab2').hide();
	$('#tab3').hide();
	$('#tab4').hide();
	$('#tab5').hide();
	$(tabname).show();
}

function play(){
	alert("아직 준비중인 기능입니다.");
}

function demo(ex){
	if (ex=="ex1"){
		ex1_play();
	}
	if(ex=="ex2"){
		ex2_play();
	}
	else{
		alert("아직 준비중인 기능입니다.");
	}
}

function tryDemo(loca){

	$('#tab1').hide();
	$('#tab2').hide();
	$('#tab3').show();
	$('#tab4').hide();
	$('#tab5').hide();
	
	location.href="research.html#"+loca;
}

function doImgPop(img){
	img1= new Image();
	img1.src=(img);
	imgControll(img);
}
	
function imgControll(img){
	if((img1.width!=0)&&(img1.height!=0)){
	   viewImage(img);
	}
	else{
		controller="imgControll('"+img+"')";
		intervalID=setTimeout(controller,20);
	}
}
   
function viewImage(img){
	W=img1.width;
	H=img1.height;
	O="width="+W+", height="+H+",scrollbars=yes";
	imgWin=window.open("","",O);
	imgWin.document.write("<html><head><title>:*:*:*: 이미지상세보기 :*:*:*:*:*:*:</title></head>");
	imgWin.document.write("<body topmargin=0 leftmargin=0>");
	imgWin.document.write("<img src="+img+" onclick='self.close()' style='cursor:pointer;' title ='클릭하시면 창이 닫힙니다.'>");
	imgWin.document.close();
}

function ex1_play(){

	var output = "";
	var input = document.getElementById("ex1_text").value;
	if(input != ""){
		for (var i = 0; i < input.length; i++) {
			output += input[i].charCodeAt(0).toString(2);
		}
		$('#ex1_text').attr('disabled', true);
		$('.more').hide();
		$('#loading').css('display', 'block');
		document.getElementById('ex1_text').value=input+"\n\n--------------------text bitstream--------------------\n"+output;
		rdh(output);
	}
	else{
		alert("빈 칸을 채워주세요");
	}
}

function rdh(randnum){
	console.log(randnum)
	$.ajax({
		type : "GET",
		dataType : "text",
		contentType : "text/plain",
		url : "http://117.16.123.18:8080/demo/rdh?bit="+randnum,
		data : randnum,

		success: function(data){
			location.href = "http://117.16.123.18:8080/demo/rdh/video";
			setTimeout(function(){
				location.href = "http://117.16.123.18:8080/demo/rdh/text";
			}, 500);
			$('#loading').css('display', 'none');
			$('#ex1_text').val('');
			$('#ex1_text').attr('disabled', false);
			$('.more').show();
			document.getElementById('loading').style.display="none";
		},

		error: function(error){
			alert("글자수가 너무 많거나 오류입니다.");
			location.reload();
		}
	});
}

function ex2_play(){
	$.ajax({
		type : "POST",
		data : inputFile,
		enctype : "multipart/form-data",
		contentType : false,
		processData : false,
		url : "http://117.16.123.18:8080/guestbook/upload",
		success : function(){
			alert("file upload 성공");
		}
	});
}