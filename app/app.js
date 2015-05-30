var appDb = $.localStorage ;
var appModel = {
		
};
var app = {
		
};
var appUI = {
    initialize : function() {
    		$("#clearBtn").click(function() {
        	    appUI.clear() ;
    		});
    		$("#sayBtn").click(function() {
    			text = $("#userText").val() ;
    			texr = $("#userText").val() ;
        	    appUI.say(text) ;
        	    appUI.reply(texr);
        	    
    		});
    },
    say : function(text) {
    		dialog = $("#dialog").html() ;
    		$("#dialog").html(dialog + "</br>" +"我："+ text) ;
    },
    replymsg : function(text) {
        		dialog = $("#dialog").html() ;
        		$("#dialog").html(dialog + "</br>" +"小绿鸡:"+ text) ;
    },
    clear : function() {
    		$("#dialog").text("") ;
    },
    reply : function(texr){
    	if(texr=="123") 
    		appUI.replymsg("456")
    	else if(texr=="456") 
    		appUI.replymsg("4562")
    	else if(texr=="jokeme") 
    		appUI.replymsg("789")
    	else if(texr=="心理暗示") 
    		appUI.replymsg("接下来的题目有很强心理暗示作用。。。 很神奇！揭下来 请用自己最快的速度心算下面各题 ")
    		setTimeout(function(){appUI.replymsg("2+2＝? ")},4000)
    		setTimeout(function(){appUI.replymsg("4+4＝?  ")},6000)
    		setTimeout(function(){appUI.replymsg("8+8＝?  ")},8000)
    		setTimeout(function(){appUI.replymsg("16+16＝?  ")},10000)
    		setTimeout(function(){appUI.replymsg("快！随便在12跟5的中间挑一个数字！ ")},12000)
    		setTimeout(function(){appUI.replymsg("挑了吗？ 现在我们继续 ")},14000)
    		setTimeout(function(){appUI.replymsg("你挑的数字是 7 ，对吧！ ")},16000)
    		setTimeout(function(){appUI.replymsg("继续作下一个实验！跟着下列叙述并且快速回答问题！算算看 啰！  ")},22000)
    		setTimeout(function(){appUI.replymsg("1+5")},26000)
    		setTimeout(function(){appUI.replymsg("2+4")},28000)
    		setTimeout(function(){appUI.replymsg("3+3")},30000)
    		setTimeout(function(){appUI.replymsg("4+2")},32000)
    		setTimeout(function(){appUI.replymsg("5+1")},34000)
    		setTimeout(function(){appUI.replymsg("现在持续默念 6 这个数字15秒，然后往下卷动画面！ ")},36000)
    		setTimeout(function(){appUI.replymsg("快！想一个蔬菜的名字！然后继续往下卷动作！ ")},51000)
    		setTimeout(function(){appUI.replymsg("*你想的是大白菜，对吧！如果不是，你是占2%可以在正常情形下 还可以有余力思考别的事的少数人口，98%的人会回答大白菜。诡异哦！听说这个测验 是从爱丽丝梦游仙境中兔子国翻译的…… ")},58000)
    }
};
$(document).ready(function() {
	appUI.initialize() ;
});
