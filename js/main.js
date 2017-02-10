$.get('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5', function(res){
    $.each(res,function(i, e){
        $('.currncyFrom').append('<option value="' + e.ccy + '" data-sale="' + e.sale + '">' + e.ccy + '</option>');
        $('.currncyTo').append('<option value="' + e.ccy + '" data-sale="' + e.sale + '">' + e.ccy + '</option>');
    });
});

$('.btn-convert').click(function(){
    var result;
    var amount = $('#exampleAmount').val();
    var from = $('.currncyFrom > option:selected').data('sale');
    var to = $('.currncyTo > option:selected').data('sale');
    
    var usd = $('option[value="USD"]').data('sale');
    
    if($('.currncyFrom > option:selected').html() == "BTC"){
        from *= usd;
    }
    
    if($('.currncyTo > option:selected').html() == "BTC"){
        to *= usd;
    }
    
    result = from * amount / to;
    
    $('.result').text(result.toFixed(2) + ' ' + $('.currncyTo > option:selected').html());
     
});