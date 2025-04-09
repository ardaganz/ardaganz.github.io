
    document.addEventListener('DOMContentLoaded', function() {
        var collapseElement = document.getElementById('tiktok-1');

        // Simpan HTML di dalam JavaScript
        var productHTML = `
    <hr class="mb-4">
    	<p class="mb-1 fw-medium fs-18 text-dark">Deskripsi Product <span class="badge badge-soft-warning"><i class="fs-14 bi bi-star-fill"></i><span class="fs-14 fw-medium text-dark"> 4.6</span></span></p>
	<div class="form-group">
		
		
		<div class="container mt-3">
    <div class="border-bottom py-2">
        <span class="fw-bold d-inline-block widht-100">Jenis :</span>
        <span class="text-muted2 fs-13">Sablon Plastisole Pure</span>
    </div>
    <div class="border-bottom py-2">
        <span class="fw-bold d-inline-block widht-100">Material :</span>
        <span class="text-muted2 fs-13">Cotton Combad 24S</span>
    </div>
</div>

	<div class="container mt-3">
	    <div class="border-bottom d-flex justify-content-between py-2">
	        <span class="fw-bold">Jenis :</span>
	        <span class="text-muted2 fs-13">Sablon Plastisole Pure Kontol</span>
	    </div>
	    <div class="border-bottom d-flex justify-content-between py-2">
	        <span class="fw-bold">Material :</span>
	        <span class="text-muted2 fs-13">Cotton Combad 24s</span>
	    </div>
	</div>
	<label class="form-label mb-1 fw-medium fs-15 text-dark">Variants Color</label>
	<div class="row gutters-xs">
		<div class="col-auto">
			<label class="colorinput">
				<input name="color" type="checkbox" value="dark" class="colorinput-input" checked="">
				<span class="colorinput-color bg-product-hitam"></span>
			</label>
		</div>
		<div class="col-auto">
			<label class="colorinput">
				<input name="color" type="checkbox" value="white" class="colorinput-input">
				<span class="colorinput-color bg-product-putih"></span>
			</label>
		</div>
	</div>


	<label class="form-label mb-0 fw-medium fs-15 text-dark">Variants Size</label>
	<div class="selectgroup w-100">
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