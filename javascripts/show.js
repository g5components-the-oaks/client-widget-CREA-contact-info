!function(){function t(t,i){for(var e=0;e<i.length;e++){var n=i[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var i=function(){function i(t){!function(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}(this,i),this.configs=t,this.widgetId=t.widgetId,this.widget=$("#".concat(this.widgetId)),this.phoneOptions=t,this.phoneNumber=new PhoneNumber(this.phoneOptions,"#".concat(this.widgetId)),this.initChat(),this.initSocialLinks(),this.moveWidgetInDom(this.configs),this.moveSocialLinks(this.configs),this.movePhoneNumber(this.configs)}var e,n;return e=i,(n=[{key:"moveWidgetInDom",value:function(t){"true"==t.insertAfter&&this.widget.insertAfter("".concat(t.targetElement)),"true"==t.insertBefore&&this.widget.insertBefore("".concat(t.targetElement))}},{key:"moveSocialLinks",value:function(t){var i=$(".".concat(this.widgetId,".full-width-banner"));"true"==t.moveSocial&&i.prepend($(".".concat(this.widgetId," .social-links")))}},{key:"movePhoneNumber",value:function(t){var i=$(".".concat(this.widgetId,".full-width-banner"));"true"==t.movePhone&&i.append($(".".concat(this.widgetId," .phone")))}},{key:"initChat",value:function(){var t=this;return this.widget.find(".oaks-contact-info-chat").click((function(i){return window.open(t.phoneOptions.chatUrl,"Chat","width=600, height=480, scrollbars=yes, resizable=yes"),i.preventDefault()}))}},{key:"initSocialLinks",value:function(){if($(".social-links.widget").length<1){var t=window.location.href;return window.location.hash&&(t=t.replace(window.location.hash,"")),function(){for(var i=[],e=0,n=Array.from($(".social-links use"));e<n.length;e++){var o=n[e];0!==$(o).attr("xlink:href").indexOf("http")?i.push($(o).attr("xlink:href",t+$(o).attr("xlink:href"))):i.push(void 0)}return i}()}}}])&&t(e.prototype,n),i}();G5.loadWidgetConfigs(".oaks-contact-info .config",i)}();