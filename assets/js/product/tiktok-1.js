
    document.addEventListener('DOMContentLoaded', function() {
        var collapseElement = document.getElementById('tiktok-1');

        // Simpan HTML di dalam JavaScript
        var productHTML = `
    <hr class="mb-4">
    	<p class="mb-1 fw-medium fs-18 text-dark">Deskripsi Product <span class="badge badge-soft-warning"><i class="fs-14 bi bi-star-fill"></i><span class="fs-14 fw-medium text-dark"> 4.6</span></span></p>
	<div class="form-group">
	
	
<div class="scale-container">
    <div class="shop-card">
        <img src="../assets/img/product/tiktok/users/dailyoutfit.jpg" alt="Profile Seller" class="shop-logo">
        <div class="shop-info">
            <div class="shop-name">DAILYOUTFIT STORE</div>
            <span class="badge badge-sallertiktok">Power Shop</span>
            <span class="badge badge-soft-sellerTiktok"><i class="bi bi-star-fill text-success"></i> 4.0</span>
            <div class="fs-13 text-muted2">93.1K terjual</div>
        </div>
        <div class="btn-container">
            <a class="btn btn-follow" href="https://vt.tiktok.com/ZSrd4422R" target="_blank" title="Kunjungi Profil Seller">Ikuti</a>
            <button class="btn btn-message">
                Pesan
                <span class="notification-dot"></span>
            </button>
        </div>
    </div>
</div>



	<div class="container">
	    <div class="border-bottom py-2">
	        <span class="fw-bold d-inline-block widht-100">Tipe :</span>
	        <span class="text-muted2 fs-13">Standar/Reguler/Basic</span>
	    </div>
	    <div class="border-bottom py-2">
	        <span class="fw-bold d-inline-block widht-100">Bahan :</span>
	        <span class="text-muted2 fs-13">Jeans tidak melar</span>
	    </div>
	</div>
	
	
<div class="row gutters-xs border-bottom mt-2">
    <div class="col-auto d-flex align-items-center">
        <label class="form-label fw-bold text-dark me-1">Variants Color :</label>
        <label class="colorinput">
            <input name="color" type="checkbox" value="dark" class="colorinput-input" checked="">
            <span class="colorinput-color bg-product-hitam"></span>
        </label>
    </div>
    <div class="col-auto d-flex align-items-center">
        <label class="colorinput">
            <input name="color" type="checkbox" value="abu-abu" class="colorinput-input">
            <span class="colorinput-color bg-product-celanaAbuu"></span>
        </label>
    </div>
    <div class="col-auto d-flex align-items-center">
        <label class="colorinput">
            <input name="color" type="checkbox" value="biru-tua" class="colorinput-input">
            <span class="colorinput-color bg-product-celanaBirTu"></span>
        </label>
    </div>
    <div class="col-auto d-flex align-items-center">
        <label class="colorinput">
            <input name="color" type="checkbox" value="biru-muda" class="colorinput-input">
            <span class="colorinput-color bg-product-celanaBirMud"></span>
        </label>
    </div>
</div>



	<label class="form-label mt-2 mb-0 fw-medium fs-15 text-dark">Variants Size :</label>
	<div class="selectgroup w-100 border-bottom">
		<label class="selectgroup-item">
			<input type="radio" name="value" value="100" class="selectgroup-input">
			<span class="selectgroup-button">27</span>
		</label>
		<label class="selectgroup-item">
			<input type="radio" name="value" value="150" class="selectgroup-input">
			<span class="selectgroup-button">28</span>
		</label>
		<label class="selectgroup-item">
			<input type="radio" name="value" value="200" class="selectgroup-input">
			<span class="selectgroup-button">29</span>
		</label>
		<label class="selectgroup-item">
			<input type="radio" name="value" value="250" class="selectgroup-input">
			<span class="selectgroup-button">30</span>
		</label>
		<label class="selectgroup-item">
			<input type="radio" name="value" value="300" class="selectgroup-input" checked="">
			<span class="selectgroup-button">31</span>
		</label>
		<label class="selectgroup-item">
			<input type="radio" name="value" value="350" class="selectgroup-input">
			<span class="selectgroup-button">32</span>
		</label>
	</div>

        `;

        // Tambahkan event listener ketika collapse dibuka
        collapseElement.addEventListener('show.bs.collapse', function () {
            collapseElement.innerHTML = productHTML;
        });

        // Kosongkan konten saat collapse ditutup (opsional)
        collapseElement.addEventListener('hidden.bs.collapse', function () {
            collapseElement.innerHTML = '';
        });
    });