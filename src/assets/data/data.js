export const data = {
    bride: {
        L: {
            id: 1,
            name: 'Imam Marlawanto',
            child: 'Putra ke 3',
            father: '(Alm) Sumartopo',
            mother: 'Lella Liesnawaty',
            image: './src/assets/images/cowo.png'
        },
        P: {
            id: 2,
            name: 'Indyra Pebrianti',
            child: 'Putri ke 5',
            father: 'Juanda',
            mother: 'Hani Haryani',
            image: './src/assets/images/indyra.png'
        },

        couple: './src/assets/images/duaan.png'
    },

    time: {
        marriage: {
            year: '2025',
            month: 'Mei',
            date: '17',
            day: 'Sabtu',
            hours: {
                start: '13.00',
                finish: 'Selesai'
            }
        },
        reception: {
            year: '2025',
            month: 'Mei',
            date: '17',
            day: 'Sabtu',
            hours: {
                start: '15.00',
                finish: 'Selesai'
            }
        },
        address: 'Lisung Dulang Resto. Jl. Bukit Pakar Timur No. 3, Ciburial, Kec. Cimenyan, Kab. Bandung, Jawa Barat 40198'
    },

    link: {
        calendar: 'https://calendar.google.com/calendar/u/3?cid=MDYyZmZkNjc2NzQ1ZGFjYWE1NDZmMWYzNzMyY2UxZmFkMmVhM2ZhNzBkY2EyYTIyMTc2ZGJjMDc1MTUwOTc0YUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t',
        map: 'https://maps.app.goo.gl/zu7Gv73kXnJxJ5He9',
    },

    galeri: [
        {
            id: 1,
            image: './src/assets/images/1.png'
        },
        {
            id: 2,
            image: './src/assets/images/2.png'
        },
        {
            id: 3,
            image: './src/assets/images/3.png'
        },
        {
            id: 4,
            image: './src/assets/images/4.png'
        },
        {
            id: 5,
            image: './src/assets/images/5.png'
        }
    ],

    bank: [
        {
            id: 1,
            name: 'BCA',
            icon: './src/assets/images/bca.png',
            rekening: '7771906412'
        },
        {
            id: 2,
            name: 'Mandiri',
            icon: './src/assets/images/mandiri.png',
            rekening: '1570011618908'
        },
    ],

    audio: './src/assets/audio/thankgod.mp3',

    api: 'https://script.google.com/macros/s/AKfycbyydz6N4p2VWUG8zsXeURv6ap9RP8a4eC3x6N3x6qTDjMVr1cIBz9S0NsHw2rWvBOSXGg/exec',

    navbar: [
        {
            id: 1,
            teks: 'Home',
            icon: 'bx bxs-home-heart',
            path: '#home',
        },
        {
            id: 2,
            teks: 'Mempelai',
            icon: 'bx bxs-group',
            path: '#bride',
        },
        {
            id: 3,
            teks: 'Tanggal',
            icon: 'bx bxs-calendar-check',
            path: '#time',
        },
        {
            id: 4,
            teks: 'Galeri',
            icon: 'bx bxs-photo-album',
            path: '#galeri',
        },
        {
            id: 5,
            teks: 'Ucapan',
            icon: 'bx bxs-message-rounded-dots',
            path: '#wishas',
        },
    ],
}
