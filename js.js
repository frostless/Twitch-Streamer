$(document).ready(function(){
    const nameArr = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
  
    function filter(type){
      //first display everything
       $('.channel').each(function(){
          $(this).removeClass('hidden');
      })
      
      //no need to hide anything when all is clicked
      if (type =="all") return;
      //filter 
      $('.channel').each(function(){
        if(!$(this).hasClass(type)){
          $(this).addClass('hidden');
        }
      })
    }
    
    $('.indicator').on('click',function(){
        $('.indicator').each(function(i){
          $(this).removeClass( "active" );
           if(!$(this).hasClass('active')){
          $(this).css('width','15px');
           }
      })
           $(this).toggleClass( "active" );
         $(this).css('width','68px')
      var type = $(this).attr('id');
         filter(type);
        }).on('mouseenter',function(){
       $(this).css('width','68px');
    }).on('mouseleave',function(){
      if(!$(this).hasClass('active')){
        $(this).css('width','15px');
        }
    })
    
    
    nameArr.forEach(function(name){
      var type = "streams";
     var url = 'https://wind-bow.glitch.me/twitch-api/' + type + '/' + name  + '?callback=?';
      
      
     $.getJSON(url, function(stream) {
       var logo,url,description,c;
            var type = "users";
     var url = 'https://wind-bow.glitch.me/twitch-api/' + type + '/' + name  + '?callback=?';
          //get the logo
          $.getJSON(url, function(user){
            logo = user.logo?user.logo:'https://www.firebirdsql.org/file/about/firebird-logo-300.png';
            url = "https://go.twitch.tv/"+name;
            description = stream.stream ?stream.stream.channel.status:"offline";
           c = stream.stream ? "online":"offline";
            var html = '<div class = "channel '+c+'"><div class = "row"> <div class = "col-xs-2 col-sm-2"><img class = "center-block" src ='+ logo + '></img></div><div class = "col-xs-10 col-sm-2"> <a href='+url+' target = "_blank">' +name+ '</a> </div><div class="col-xs-10 col-sm-8"><p>'+description+'</p></div></div></div>';
            if (c == "online"){
              $('.display').prepend(html);
            } else{
              $('.display').append(html);
            }
          })  
    });
      
    })
    
    // // media query event handler
    // if (matchMedia) {
    //   const mq = window.matchMedia("(max-width: 768px)");
    //   mq.addListener(WidthChange);
    //   WidthChange(mq);
    // }
    
    // // media query change
    // function WidthChange(mq) {
    //   if (mq.matches) {
    //    $('.channel').each(function(){
    //      const text = $(this).find('p').text();
    //      if (text != 'offline'){
    //        var arr = [];
    //        var result;
    //        var t = text.split(' ');
    //        arr.push(t[0]);
    //        arr.push(t[1]);
    //        result = arr.join(' ');
    //        $(this).find('p').text(result);
    //      }
    //    })
     
    //   } else {
        
    //   } 
    // }
      })