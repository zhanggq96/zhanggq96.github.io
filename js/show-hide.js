// jQuery(function(){
//          jQuery('#showall').click(function(){
//                jQuery('.description').show();
//         });
//         jQuery('.container').click(function(){
//               jQuery('.description').hide();
//               jQuery('#item'+$(this).attr('target')).show();
//         });
// });

jQuery(function(){
         jQuery('#showall').click(function(){
               jQuery('.description').show();
        });
        jQuery('div[type]').click(function(){
              jQuery('.description-'+$(this).attr('type')).hide();
              jQuery('#item'+$(this).attr('target')).show();
        });
});