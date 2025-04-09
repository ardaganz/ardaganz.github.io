// Password yang benar
        const correctPassword = "ucidanarda";

        function showPasswordPrompt() {
            swal({
                title: "Masukkan Password",
                content: {
                    element: "input",
                    attributes: {
                        placeholder: "Ketik password di sini...",
                        type: "password",
                        id: "input-field",
                        className: "form-control"
                    }
                },
                buttons: {
                    cancel: {
                        text: "Batal",
                        visible: true,
                        className: "btn btn-danger"
                    },
                    confirm: {
                        text: "Submit",
                        className: "btn btn-success"
                    }
                }
            }).then((value) => {
                if (value !== null) { // Jika user tidak membatalkan
                    if (value === correctPassword) {
                        swal({
                            title: "Berhasil!",
                            text: "Password benar!",
                            icon: "success",
                            buttons: {
                                confirm: {
                                    text: "OK",
                                    className: "btn btn-success"
                                }
                            }
                        });

                        // Menampilkan kode rahasia
                        document.getElementById("secret-code-1").classList.remove("hidden");

                        // Menghilangkan tombol input password
                        document.getElementById("btn-password-1").classList.add("hidden");
                    } else {
                        swal({
                            title: "Gagal!",
                            text: "Password salah, coba lagi!",
                            icon: "error",
                            buttons: {
                                confirm: {
                                    text: "Coba Lagi",
                                    className: "btn btn-danger"
                                }
                            }
                        });
                    }
                }
            });
        }
        
        
        
        
        
        
        
        
        
        
        // Password 2
        const correctPassword2 = "addrowarda";

        function showPasswordPrompt2() {
            swal({
                title: "Masukkan Password",
                content: {
                    element: "input",
                    attributes: {
                        placeholder: "Ketik password di sini...",
                        type: "password",
                        id: "input-field",
                        className: "form-control"
                    }
                },
                buttons: {
                    cancel: {
                        text: "Batal",
                        visible: true,
                        className: "btn btn-danger"
                    },
                    confirm: {
                        text: "Submit",
                        className: "btn btn-success"
                    }
                }
            }).then((value2) => {
                if (value2 !== null) { // Jika user tidak membatalkan
                    if (value2 === correctPassword2) {
                        swal({
                            title: "Berhasil!",
                            text: "Password benar!",
                            icon: "success",
                            buttons: {
                                confirm: {
                                    text: "OK",
                                    className: "btn btn-success"
                                }
                            }
                        });

                        // Menampilkan kode rahasia
                        document.getElementById("secret-code-2").classList.remove("hidden");

                        // Menghilangkan tombol input password
                        document.getElementById("btn-password-2").classList.add("hidden");
                    } else {
                        swal({
                            title: "Gagal!",
                            text: "Password salah, coba lagi!",
                            icon: "error",
                            buttons: {
                                confirm: {
                                    text: "Coba Lagi",
                                    className: "btn btn-danger"
                                }
                            }
                        });
                    }
                }
            });
        }
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        // Password 3
        const correctPassword3 = "tharda";

        function showPasswordPrompt3() {
            swal({
                title: "Masukkan Password",
                content: {
                    element: "input",
                    attributes: {
                        placeholder: "Ketik password di sini...",
                        type: "password",
                        id: "input-field",
                        className: "form-control"
                    }
                },
                buttons: {
                    cancel: {
                        text: "Batal",
                        visible: true,
                        className: "btn btn-danger"
                    },
                    confirm: {
                        text: "Submit",
                        className: "btn btn-success"
                    }
                }
            }).then((value3) => {
                if (value3 !== null) { // Jika user tidak membatalkan
                    if (value3 === correctPassword3) {
                        swal({
                            title: "Berhasil!",
                            text: "Password benar!",
                            icon: "success",
                            buttons: {
                                confirm: {
                                    text: "OK",
                                    className: "btn btn-success"
                                }
                            }
                        });

                        // Menampilkan kode rahasia
                        document.getElementById("secret-code-3").classList.remove("hidden");

                        // Menghilangkan tombol input password
                        document.getElementById("btn-password-3").classList.add("hidden");
                    } else {
                        swal({
                            title: "Gagal!",
                            text: "Password salah, coba lagi!",
                            icon: "error",
                            buttons: {
                                confirm: {
                                    text: "Coba Lagi",
                                    className: "btn btn-danger"
                                }
                            }
                        });
                    }
                }
            });
        }
        
        
        
        
        
        
        
        
        
        
        
        
        // Password 2
        const correctPassword4 = "outarda";

        function showPasswordPrompt4() {
            swal({
                title: "Masukkan Password",
                content: {
                    element: "input",
                    attributes: {
                        placeholder: "Ketik password di sini...",
                        type: "password",
                        id: "input-field",
                        className: "form-control"
                    }
                },
                buttons: {
                    cancel: {
                        text: "Batal",
                        visible: true,
                        className: "btn btn-danger"
                    },
                    confirm: {
                        text: "Submit",
                        className: "btn btn-success"
                    }
                }
            }).then((value4) => {
                if (value4 !== null) { // Jika user tidak membatalkan
                    if (value4 === correctPassword4) {
                        swal({
                            title: "Berhasil!",
                            text: "Password benar!",
                            icon: "success",
                            buttons: {
                                confirm: {
                                    text: "OK",
                                    className: "btn btn-success"
                                }
                            }
                        });

                        // Menampilkan kode rahasia
                        document.getElementById("secret-code-4").classList.remove("hidden");

                        // Menghilangkan tombol input password
                        document.getElementById("btn-password-4").classList.add("hidden");
                    } else {
                        swal({
                            title: "Gagal!",
                            text: "Password salah, coba lagi!",
                            icon: "error",
                            buttons: {
                                confirm: {
                                    text: "Coba Lagi",
                                    className: "btn btn-danger"
                                }
                            }
                        });
                    }
                }
            });
        }
        
        
        
        
        
        
        
        
// HITUNG NOTA
    function formatRupiah(angka) {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0
        }).format(angka);
    }

    function hitungTotal() {
        let total = 0;
        document.querySelectorAll(".px-0").forEach(item => {
            total += parseInt(item.getAttribute("data-pengeluaran")) || 0;
        });

        document.getElementById("totalPengeluaran").textContent = formatRupiah(total);
    }

    // Panggil fungsi untuk menampilkan total saat halaman dimuat
    hitungTotal();