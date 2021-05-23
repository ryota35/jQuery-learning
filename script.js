$(function(){
  $('#q01').css({'color': 'red'});

  $('#q02').css(
    {'color': 'blue',
    'background-color': 'yellow'}
  );

  $('#q03').text('エレン');

  $('#q04').text('駆逐してやるッ!!!');

  $('#q05').html('<a href="#">ときどきweb</a>');

  $('#q06').addClass('aaa');

  $('#q07').empty();

  $('.button').click(function(){
    alert('クリックしますた');
  });

  let q02 = $('#q02').css('color');
  $('#q09').text(q02);

  $('#q10').click(function(){
    $('#q10').removeClass('aaa');
    $('#q10').addClass('bbb');
  });

  $('#q10').prepend('超平和バスターズ、');

  $('#q10').append('ゆきあつ、つるこ、あなる、ぽっぽ');

  $('#q13').prepend('<li>飛べない</li>');

  $('#q13').append('<li>ただの豚</li>');

  $('#q15').prepend('<p>あああ</p>');

  $('#q15').append('<p>ううう</p>');

  $('#q17').before('<p>ききき</p>');

  $('#q17').after('<p>くくく</p>');

  $('#q19').wrap('<div class="ccc"></div>');

  $('#q20').parent().removeClass('ccc');

  $('.q21').wrapAll('<div class="ddd"></div>');

  $('.q22').wrapInner('<div class="ddd"></div>');

  $('.q23').replaceWith('<p>xxx</p>');

  $('.q24').attr({'class': 'q24_a'});

  $('.q25 a').removeAttr('href');

  $('.q26 a').attr({'target': '_blank'});

  $('.q27_a').toggleClass('q27_b');

  $('input').val('入力してください');

  $('#q29').offset({top: 5430, left: 800});

  $('.button').click(function(){
    $('#q30').empty();
  });

});