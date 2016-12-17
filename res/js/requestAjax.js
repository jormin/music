var requestAjax = function(params, type, url, callback, async) {
	$.ajax({
		url: url,
		async: !async,
		type: type,
		data: params,
		dataType: 'json',
		success: function(data){
			callback(data);
		},
        error:function(){
            if(window.console){
                console.error('*******************************************************************');
                console.error('on  '+url+'  error');
            }
        }
	});
};