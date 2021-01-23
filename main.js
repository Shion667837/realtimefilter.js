$(function(){
    $('.search-text').keyup(function(){
        search_text = $(".search-text").val();
        $('.target li').each(function(){
            val = $(this).text();
            if (val.match(search_text)) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });
});