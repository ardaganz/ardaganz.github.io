
    document.addEventListener('DOMContentLoaded', function() {
        var collapseElement = document.getElementById('tiktok-2');

        // Simpan HTML di dalam JavaScript
        var productHTML = `
    <hr class="mb-4">
    	<p class="mb-1 fw-medium fs-18 text-dark">Deskripsi Product <span class="badge badge-soft-warning"><i class="fs-14 bi bi-star-fill"></i><span class="fs-14 fw-medium text-dark"> 4.6</span></span></p>
	<div class="form-group">
	
	
<div class="scale-container">
    <div class="shop-card">
        <img src="../assets/img/product/tiktok/users/trondheim.jpg" alt="Profile Seller" class="shop-logo">
        <div class="shop-info">
            <div class="shop-name">Trondheim</div>
            <span class="badge badge-tiktokMall me-1">Mall</span>
            <span class="badge badge-soft-sellerTiktok"><i class="bi bi-star-fill text-success"></i> 3.7</span>
            <span class="badge badge-transparent text-muted2">126.3K terjual</span>
        </div>
        <div class="btn-container">
            <a class="btn btn-follow" href="LinkNya" target="_blank" title="Kunjungi Profil Seller">Ikuti</a>
            <button class="btn btn-message">
                Pesan
                <span class="notification-dot"></span>
            </button>
        </div>
    </div>
</div>



	<div class="container">
	    <div class="border-bottom py-2">
	        <span class="fw-bold d-inline-block widht-100">Cutting :</span>
	        <span class="text-muted2 fs-13">Slim Fit</span>
	    </div>
	    <div class="border-bottom py-2">
	        <span class="fw-bold d-inline-block widht-100">Material :</span>
	        <span class="text-muted2 fs-13">Denim</span>
	    </div>
	</div>
	
	
<div class="row gutters-xs border-bottom mt-2">
    <div class="col-auto d-flex align-items-center">
        <label class="form-label fw-bold text-dark me-1">Variants Color :</label>
        <label class="colorinput">
            <input name="color" type="checkbox" value="Kovac" class="colorinput-input" checked="">
            <span class="colorinput-color bg-product-celanaAbuAbu"></span>
        </label>
    </div>
</div>



	<label class="form-label mt-2 mb-0 fw-medium fs-15 text-dark">Variants Size :</label>
	<div class="selectgroup w-100 border-bottom">
		<label class="selectgroup-item">
			<input type="radio" name="value" value="100" class="selectgroup-input">
			<span class="selectgroup-button">S(27-28)</span>
		</label>
		<label class="selectgroup-item">
			<input type="radio" name="value" value="150" class="selectgroup-input" checked="">
			<span class="selectgroup-button">M(29-30)</span>
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