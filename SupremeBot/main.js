var name = 'Ömer Erarslan';
var email = 'o.erarsl.oe@gmail.com';
var tel = '+436603922112';
var adresse = 'Birkiswies 7';
var adresse2 = 'Block B';
var city = 'Rankweil';
var plz = '6830';
var country = 'AUT';
var cardnummer = '12345678901234567'

document.getElementById('order_billing_name').value = name;
document.getElementById('order_email').value = email;
document.getElementById('order_tel').value = tel;
document.getElementById('bo').value = adresse;
document.getElementById('order_billing_city').value = city;
document.getElementById('order_billing_zip').value = plz;
document.getElementById('order_billing_country').getElementsByTagName('option')[3].selected = 'selected';
document.getElementById('credit_card_type').getElementsByTagName('option')[2].selected = 'selected';
document.getElementById('cnb').value = cardnummer;

document.getElementsByName('commit')[0].click();


var item_name = 'Marble Hooded Sweatshirt';

function chooseItem() {
  chrome.storage.sync.get(['item_name'], function(data) {
    var items = document.getElementsByClassName('name-link');

    for(i = 0; i < items.length; i++){
      if((items[i].innerHTML).includes(item_name)) {
        chrome.runtime.sendMessage({redirect: items[i].href});
        break;
      }
    }
  });
}

chooseItem();
