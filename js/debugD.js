/*
Jquery - debugD
Version 1.0.0 (26.03.2013)

Author : Alan Gabriel Dawidowicz (http://www.alandawi.com.ar)

Description: This plugin can display the size of the screen and also debug CSS
Details: https://github.com/alandawi/debugD
*/
(function ($) {
    $.debugD = function (options) {
        // Defaults options
        var defaults = {
            msg: "Size - ", // custom message
            msgSize: "17", // size custom message
            msgWidth: "Width: ", // custom message
            msgHeight: "Height: ", // custom message
            positionBottom: false, // true or false
            color: "black", // black - red - violet
            outline: true, // true or false
            outlineContainer: "div" // Example: "*" or "div"
        };

        var options = $.extend(defaults, options);
        msg = options.msg;
        msgSize = options.msgSize;
        msgWidth = options.msgWidth;
        msgHeight = options.msgHeight;
        positionBottom = options.positionBottom;
        color = options.color;
        outline = options.outline;
        outlineContainer = options.outlineContainer;

        // Colors
        if (color == "black") {
            debugDColour = "background:#333; color:#FFFFFF;"
        } else if (color == "red") {
            debugDColour = "background:red; color:#FFFFFF;"
        } else if (color == "violet") {
            debugDColour = "background:#9400D3; color:#FFFFFF;"
        } else {
            debugDColour = "background:#FFFFFF; color:#333;"
        }

        // Outline CSS
        if (outline) {
            jQuery(outlineContainer).css("outline","1px dotted red");
        };

        // Window Size
        debugDWidth = jQuery(window).width();
        debugDHeight = jQuery(window).height();

        // Bar Position
        if(positionBottom) {
            positionThis = "bottom:0;"
        } else {
            positionThis = "top:0;"
        }

        // Display
        jQuery('body').prepend('<div id="debugD" style="position:fixed;'+positionThis+'left:0;width:90%;padding:15px 5%;'+debugDColour+'font-size:'+ msgSize +'px;z-index:999;" />');
        jQuery('#debugD').html(msg + msgWidth + debugDWidth + "px | " + msgHeight + debugDHeight + "px");
        jQuery(window).resize(function () {
            debugDWidth = jQuery(window).width();
            debugDHeight = jQuery(window).height();
            jQuery('#debugD').html(msg + msgWidth + debugDWidth + "px | " + msgHeight + debugDHeight + "px");
        });
       
    };
})(jQuery);