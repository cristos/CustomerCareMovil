function init() {
	document.addEventListener("deviceready", deviceReady, true);
	delete init;
}

function checkPreAuth() {
	
    var form = $("#loginForm");
    if(window.localStorage["username"] != undefined && window.localStorage["password"] != undefined) {
        $("#username", form).val(window.localStorage["username"]);
        $("#password", form).val(window.localStorage["password"]);
        handleLogin();
    }
}

function replaceAll( text, busca, reemplaza ){
	  while (text.toString().indexOf(busca) != -1)
	     text = text.toString().replace(busca,reemplaza);
	  return text;
	}


function handleLogin() {
    $.mobile.showPageLoadingMsg();
    var form = $("#loginForm");    
    //disable the button so we can't resubmit while we wait
    $("#submitButton",form).attr("disabled","disabled");
    
	var u = $("#username", form).val();
    var p = $("#password", form).val();
    if(u != '' && p!= '') {
        $.ajax({
                url: 'http://appscore.wadil.mx/cibernetica/proxy.php',
                data: {metodo: 'Autenticar', parametros:{ login: u, password: p }},
                dataType: 'jsonp',
                jsonp: 'callback',
                jsonpCallback: 'jsonpCallback',
                success:  function(res) {
				    
				    if(isNumber(res.AutenticarResult)) {
						
						numtemp=res.AutenticarResult;	
						window.localStorage["userid"]=res.AutenticarResult;				
					
                        var reslt="";
                        for(var j=0;j<res.AutenticarResult.length;j++){reslt+="" + ((1*res.AutenticarResult[j]+5)%10)}
                        
				   // v5=0;	
				   // if (numtemp.indexOf("5") !== -1)
				   // {
				   // 	res.AutenticarResult=replaceAll(res.AutenticarResult,"5","0");
				   // 	v5=1;				   
				   //}
				   //v6=0;
				   //if (numtemp.indexOf("6") !== -1)
				   // {
				   // 	res.AutenticarResult=replaceAll(res.AutenticarResult,"6","1");
				   // 	v6=1;				   
				   //}
				   //v7=0;
				   //if (numtemp.indexOf("7") !== -1)
				   // {
				   // 	res.AutenticarResult=replaceAll(res.AutenticarResult,"7","2");
				   // 	v7=1;
				   //}
				   // v8=0;
				   //if (numtemp.indexOf("8") !== -1)
				   // {
				   //	res.AutenticarResult=replaceAll(res.AutenticarResult,"8","3");
               	//v8=1;				   
				   //}
				   //v9=0;
				   //if (numtemp.indexOf("9") !== -1)
				   // {
				   // 	res.AutenticarResult=replaceAll(res.AutenticarResult,"9","4");
				   // 	v9=1;
				   // }					
				   // if(v5==0)
				   // {					
				   // 	res.AutenticarResult=replaceAll(res.AutenticarResult,"0","5");
				   // }
				   // if(v6==0)
				   // {	
				   // 	res.AutenticarResult=replaceAll(res.AutenticarResult,"1","6");
				   // }
				   // if(v7==0)
				   // {
				   // 	res.AutenticarResult=replaceAll(res.AutenticarResult,"2","7");
				   //}
    			   // if(v8==0)
				   // {	
				   // 	res.AutenticarResult=replaceAll(res.AutenticarResult,"3","8");
				   // }
				   // if(v9==0)
				   // {
				   // 	res.AutenticarResult=replaceAll(res.AutenticarResult,"4","9");
				   // }				
					
					res.AutenticarResult=reslt;
                        
					window.localStorage["userid2"]=res.AutenticarResult;	
					window.localStorage["username"] = u;
					window.localStorage["password"] = p;             
					$.mobile.changePage("main.html");
				} else {
					$.mobile.hidePageLoadingMsg();
					alert(res.AutenticarResult);
				}
				
				$("#submitButton").removeAttr("disabled");
				}
			});
    } else {
        navigator.notification.alert("You must enter a username and password", function() {});
        $("#submitButton").removeAttr("disabled");
    }
    return false;
}

function deviceReady() {
	
	$("#loginPage").on("pageinit",function() {
		console.log("pageinit run");
		$("#loginForm").one("submit",handleLogin);
		checkPreAuth();
	});
	$.mobile.changePage("#loginPage");
}
					
					
					
					window.localStorage["userid2"]=res.AutenticarResult;	
					window.localStorage["username"] = u;
					window.localStorage["password"] = p;             
					$.mobile.changePage("main.html");
				} else {
					$.mobile.hidePageLoadingMsg();
					alert(res.AutenticarResult);
				}
				
				$("#submitButton").removeAttr("disabled");
				}
			});
    } else {
        navigator.notification.alert("You must enter a username and password", function() {});
        $("#submitButton

//Personales

function isNumber(num) {
  return (typeof num == 'string' || typeof num == 'number') && !isNaN(num - 0) && num !== '';
};

