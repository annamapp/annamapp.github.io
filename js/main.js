$(document).ready(function() {
    //Menu Toggling Script
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });

    $("#owl-demo").owlCarousel({
        navigation : true,
        items : 1,
        navigation:false,
        autoPlay:true
    });

    $('.annam_nav').localScroll(800);
    $('#sidebar-wrapper').localScroll(800);

    $('input,textarea').blur(function() {
        var $this = $(this);
        if ($this.val())
            $this.addClass('used');
        else
            $this.removeClass('used');
    });

    var $ripples = $('.ripples');

    $ripples.on('click.Ripples', function(e) {

        var $this = $(this);
        var $offset = $this.parent().offset();
        var $circle = $this.find('.ripplesCircle');

        var x = e.pageX - $offset.left;
        var y = e.pageY - $offset.top;

        $circle.css({
            top: y + 'px',
            left: x + 'px'
        });

        $this.addClass('is-active');

    });

    $ripples.on('animationend webkitAnimationEnd mozAnimationEnd oanimationend MSAnimationEnd', function(e) {
        $(this).removeClass('is-active');
    });

});


(function(d){
  var iframe = d.getElementById("googlemapcontainer").appendChild(d.createElement('iframe')),
    doc = iframe.contentWindow.document;
  iframe.scrolling = "no",iframe.frameborder="0",iframe.marginheight="0",iframe.marginwidth="0";

  // style the iframe with some CSS
  iframe.style.cssText = "width:100%;height:400px;margin:0px";

  doc.open().write('<body onload="' +
    'var d = location.href' +
    '=\'https:\/\/maps.google.com\/maps?q=19.179129163116,72.83624477684498&hl=es;z=14&amp;output=embed\'">');

  doc.close(); //iframe onload event happens

})(document);


(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-67177471-3', 'auto');
ga('send', 'pageview');