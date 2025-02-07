import { useEffect } from 'react'
import Swal from 'sweetalert2'; // Pastikan SweetAlert sudah diimport

const SuksesKirimPesan = () => {
    useEffect(() => {
        // Menampilkan toast hanya sekali setelah komponen dimounting
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            }
        });

        // Menampilkan pesan toast
        Toast.fire({
            icon: "success",
            title: "Thanks for your Feedback"
        });

    }, []); // Dependency array kosong agar hanya dipanggil sekali

}

export default SuksesKirimPesan;
