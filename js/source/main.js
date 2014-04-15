(function(){
  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $('#deposit').click(deposit);
    $('#withdraw').click(withdraw);
  }

  var balance = 1000;

  function getAmount(){
    var amount = $('#amount').val();
    return amount * 1;
  }

  function deposit(){
    var amount = getAmount();
    balance += amount;
    display();
    depositRow();
  }

  function withdraw(){
    var amount = getAmount();
    balance -= amount;
    display();
    withdrawRow();
  }

  function display(){
    $('#balance').text('$' + balance);
  }

  function depositRow(){
    var $tr = $('<tr>');
    var $fee = $('<td>');
    var $deposit = $('<td>');
    var $withdraw = $('<td>');
    var $balance = $('<td>');

    $fee.text(0);
    $deposit.text('$' + getAmount());
    $withdraw.text(0);
    $balance.text('$' + balance);
    $tr.append($fee, $deposit, $withdraw, $balance);
    $('#ledger > tbody').append($tr);
  }

  function withdrawRow(){
    var $tr = $('<tr>');
    var $fee = $('<td>');
    var $deposit = $('<td>');
    var $withdraw = $('<td>');
    var $balance = $('<td>');

    if (balance < 0){
      $fee.text('$' + 50);
      var fee = 50;
      balance -= fee;
      $balance.addClass('negative');
      $balance.text('$(' + balance * -1 + ')');
    } else {
      $fee.text(0);
      $balance.text('$' + balance);
    }

    $withdraw.addClass('withdraw');
    $withdraw.text('$' + getAmount());
    $deposit.text(0);
    $tr.append($fee, $deposit, $withdraw, $balance);
    $('#ledger > tbody').append($tr);
  }





})();
