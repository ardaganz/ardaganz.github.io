
const radios = document.querySelectorAll('input[name="varian"]');
const outputHarga = document.getElementById('outputHarga');

radios.forEach(radio => {
  radio.addEventListener('change', function() {
    let harga = parseInt(this.getAttribute('data-harga'));
    let formatHarga = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(harga);
    outputHarga.textContent = formatHarga;

    document.getElementById('totalsemua').value = this.value;
    document.getElementById('hargaVarian').value = harga;
  });
});

const modalPemesanan = new bootstrap.Modal(document.getElementById('modalPemesanan'));

document.getElementById('btnModalPemesanan').addEventListener('click', function () {
  let varianTerpilih = document.querySelector('input[name="varian"]:checked');

  if (!varianTerpilih) {
    alert('Silakan pilih varian terlebih dahulu.');
    return;
  }

  let harga = parseInt(document.getElementById('hargaVarian').value);
  let formatHarga = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(harga);

  document.getElementById('produkModal').textContent = document.getElementById('produk').textContent;
  document.getElementById('typeModal').textContent = document.getElementById('type').textContent;
  document.getElementById('varianModal').textContent = document.getElementById('totalsemua').value;
  document.getElementById('totalHargaModal').textContent = formatHarga;

  modalPemesanan.show();
});

document.getElementById('formPesanan').addEventListener('submit', function(e) {
  e.preventDefault();

  let pesan = document.getElementById('pesan').value.trim();

  if (pesan === '') {
    alert('Silakan isi pesan terlebih dahulu.');
    return;
  }

  let nomorWA = '6283143831566';

  let produk = document.getElementById('produkModal').textContent;
  let type = document.getElementById('typeModal').textContent;
  let varian = document.getElementById('varianModal').textContent;
  let harga = document.getElementById('totalHargaModal').textContent;

  let finalPesan = '%0A%0A' +
                    '==============' + '%0A' +
                    'Detail Pemesanan' + '%0A' +
                    '==============' + '%0A' +
                    '|| *Nama Produk* : ' + produk + '%0A' +
                    '|| *Type* : ' + type + '%0A' +
                    '|| *Varian* : ' + varian + '%0A' +
                    '|| *Harga* : ' + harga + '%0A' +
                    '===============' + '%0A' +
                    'Detail Customer' + '%0A' +
                    '===============' + '%0A' +
                    '|| *Nama* : ' + pesan + '%0A';

  let walink = (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) 
    ? 'https://api.whatsapp.com/send' 
    : 'https://web.whatsapp.com/send';

  let urlWA = `${walink}?phone=${nomorWA}&text=${finalPesan}`;

  window.open(urlWA, '_blank');

  modalPemesanan.hide();
});
