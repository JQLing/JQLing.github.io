$(function(){
    $('#fullpage').fullpage({
		//Navigation
		menu: '#menu',
		lockAnchors: false,
		//锚链接：不要和页面中任意id或name相同，不要加#(反应在地址栏)
		anchors:['page1','page2','page3'],
		navigation: true,
		navigationPosition: 'right',
		navigationTooltips: ['个人简介','项目经验','技能'],
		showActiveTooltip: true,
		slidesNavigation: true,
		slidesNavPosition: 'bottom',

		//events
		afterResize: function(){}
		
    });
});