
$(function(){
	var aImg = $('.icon');
	var aTit = $('.title');
	var move = 16;
	var second = 400;
	var imgTop = aImg.eq(0).position().top;
	var titleTop = aTit.eq(0).position().top;
	
	aImg.hover(function(){
		var index = aImg.index($(this));
		
		aTit.eq(index).addClass('show').removeClass('hide');
		aTit.eq(index).animate({top:titleTop-move},second);
		$(this).animate({top:imgTop-move},second);
		
	},function(){
		var index = aImg.index($(this));
		
		$(this).animate({top:imgTop},second);
		aTit.eq(index).animate({top:titleTop},second,function(){
			aTit.eq(index).addClass('hide').removeClass('show');
		});
		
	});
	
});




