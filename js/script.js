/* ==================================================
   RUANGRUPA STUDIO
   JAVASCRIPT
   ================================================== */


/* 1. MOBILE NAVIGATION */

const arafah_hamburger = document.getElementById(
    "arafah_hamburger"
);
const arafah_nav_menu = document.getElementById(
    "arafah_nav_menu"
);
if (arafah_hamburger && arafah_nav_menu) {
    arafah_hamburger.addEventListener("click", function () {
        const arafah_is_open =
            arafah_nav_menu.classList.toggle("arafah_show");
        arafah_hamburger.setAttribute(
            "aria-expanded",
            arafah_is_open
        );
        arafah_hamburger.innerHTML =
            arafah_is_open ? "&times;" : "☰";
    });
    /* Menutup menu setelah link diklik */
    const arafah_nav_links =
        arafah_nav_menu.querySelectorAll("a");
    arafah_nav_links.forEach(function (link) {
        link.addEventListener("click", function () {
            arafah_nav_menu.classList.remove("arafah_show");
            arafah_hamburger.setAttribute(
                "aria-expanded",
                "false"
            );
            arafah_hamburger.innerHTML = "☰";
        });
    });
}


// FORM KONTAK RUANGRUPA
const arafah_contact_form = document.getElementById("arafah_contact_form");
if (arafah_contact_form) {
    arafah_contact_form.addEventListener("submit", function (event) {
        event.preventDefault();
        const arafah_nama = document.getElementById("arafah_nama").value.trim();
        const arafah_email = document.getElementById("arafah_email").value.trim();
        const arafah_telepon = document.getElementById("arafah_telepon").value.trim();
        const arafah_layanan = document.getElementById("arafah_layanan").value;
        const arafah_pesan = document.getElementById("arafah_pesan").value.trim();
        const arafah_nomor_tujuan = "6282116253598";
        const arafah_isi_pesan =
            "Halo RuangRupa Studio, saya ingin menghubungi Anda.\n\n" +
            "Nama: " + arafah_nama + "\n" +
            "Email: " + arafah_email + "\n" +
            "Nomor Telepon: " + arafah_telepon + "\n" +
            "Layanan: " + arafah_layanan + "\n" +
            "Pesan: " + arafah_pesan;
        const arafah_url_whatsapp =
            "https://wa.me/" + arafah_nomor_tujuan +
            "?text=" + encodeURIComponent(arafah_isi_pesan);
        window.open(arafah_url_whatsapp, "_blank");
    });
}
