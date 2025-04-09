
    document.addEventListener('DOMContentLoaded', function() {
        var collapseElement = document.getElementById('product-2');

        // Simpan HTML di dalam JavaScript
        var productHTML = `
    <hr class="mb-4">
    	<p class="mb-1 fw-medium fs-18 text-dark">Deskripsi Product <span class="badge badge-soft-warning"><i class="fs-14 bi bi-star-fill"></i><span class="fs-14 fw-medium text-dark"> 5</span></span></p>
	<div class="form-group">
		
    <div class="container-text">
        <div class="row-text">
            <span class="fw-medium fs-15 text-dark label-text">Jenis</span><span class="separator">:</span>
            <span class="text-muted fs-13 value-text">Sablon Plastisole Pure</span>
        </div>
        <hr class="hr-arda">
    	<div class="row-text">
            <span class="fw-medium fs-15 text-dark label-text">Material</span><span class="separator">:</span>
            <span class="text-muted fs-13 value-text">Cotton Combad 24s</span>
        </div>
        <hr class="hr-arda">
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
			<span class="selectgroup-button">M</span>
		</label>
		<label class="selectgroup-item">
			<input type="radio" name="value" value="150" class="selectgroup-input" checked="">
			<span class="selectgroup-button">L</span>
		</label>
		<label class="selectgroup-item">
			<input type="radio" name="value" value="200" class="selectgroup-input">
			<span class="selectgroup-button">XL</span>
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