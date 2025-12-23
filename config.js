const CONFIG = {
nama: "Rabss Ryukii", // Nama Store
profil: "https://files.catbox.moe/taxb00.png", // Url Profil
banner: "https://files.catbox.moe/taxb00.png", // Url Banner 
tentang: "Rabss Ryukii adalah toko online terpercaya yang telah melayani ribuan pelanggan sejak 2020. Kami menyediakan berbagai produk digital untuk kebutuhan sehari-hari dengan kualitas terbaik dan harga terjangkau.\n\nKomitmen kami adalah memberikan pengalaman berbelanja yang menyenangkan dengan pelayanan terbaik, produk original, dan garansi resmi untuk semua produk yang kami jual.",
alamat: "Jl. Kebon nanas selatan 1. 23, Jakarta, Indonesia",
sosial_media: {
  email: "hailazmi694@gmail.com", // Email
  youtube: "mintorX", // YouTube Username 
  tiktok: "RABS_SHOP", // Tiktok Username 
  whatsapp: "6288976906352", // WhatsApp Number 
  telegram: "ArabsAnakMamah" // Telegram Username
},
payment: {
  dana: "088976906352", // Payment Dana
  gopay: "088976906352", // Payment Gopay 
  ovo: "088976906352", // Payment Ovo 
  qris: "https://files.catbox.moe/x5d0ec.jpeg" // Url Qris
},
telegram_api: {
  bot: "8539684350:AAH1tpFzmgbWhMWjuHgawjL99_M5MCnfzGE", // Token bot father
  chatid: "5788408765" // ID telegram
},
}

// Produk
const productsData = {
            "Hosting": [
              {
                "id": 1,
                "name": "Panel Pterodactyl",
                "icon": "fas fa-server",
                "description": "Panel Pterodactyl hosting bot/game dengan performa stabil dan harga terjangkau.",
                "variants": [
                  { "name": "1GB RAM", "price": 1000 },
                  { "name": "2GB RAM", "price": 1500 },
                  { "name": "3GB RAM", "price": 2000 },
                  { "name": "4GB RAM", "price": 2500 },
                  { "name": "5GB RAM", "price": 3000 },
                  { "name": "6GB RAM", "price": 3500 },
                  { "name": "7GB RAM", "price": 4000 },
                  { "name": "8GB RAM", "price": 4500 },
                  { "name": "9GB RAM", "price": 5000 },
                  { "name": "10GB RAM", "price": 5500 },
                  { "name": "Unlimited RAM", "price": 4000 }
                ]
              },
              {
                "id": 2,
                "name": "VPS Kecil",
                "icon": "fas fa-microchip",
                "description": "Virtual Private Server murah untuk belajar dan project kecil.",
                "variants": [
                  { "name": "1 vCPU / 1GB RAM / 20GB SSD", "price": 25000 },
                  { "name": "2 vCPU / 2GB RAM / 40GB SSD", "price": 45000 }
                ]
              },
              {
                "id": 3,
                "name": "VPS Menengah",
                "icon": "fas fa-hdd",
                "description": "VPS menengah dengan performa cukup untuk website atau panel hosting.",
                "variants": [
                  { "name": "2 vCPU / 4GB RAM / 80GB SSD", "price": 75000 },
                  { "name": "4 vCPU / 8GB RAM / 160GB SSD", "price": 135000 }
                ]
              },
            ],
            "special produk": [
                {
                    id: 6,
                    name: "Nokos all negara",
                    icon: "fas fa-phone",
                    description: "Jasa pembuatan logo dengan berbagai gaya desain. Cocok untuk brand, usaha, atau komunitas.",
                    variants: [
                        { name: "Negara Venezuela", price: 1000 },
                        { name: "Negara Belanda", price: 6000 },
                        { name: "Negara Kamerun", price: 3000 },
                        { name: "Negara Haithi", price: 4000 },
                        { name: "Negara Nigeria", price: 1000 },
                        { name: "Request Custom", price: "Harga sesuai request negara" }
                    ]
                },
                {
                    id: 7,
                    name: "Nokos Premium",
                    icon: "fas fa-crown",
                    description: "Jasa pembuatan banner untuk promosi usaha, media sosial, atau event.",
                    variants: [
                        { name: "Nokos indonesia unli verif", price: 25000 },
                        { name: "Nokos save 7 hari", price: 10000 },
                        { name: "Nokos On Verif 2 langkah", price: 5000 }
                    ]
                },
                {
                    id: 8,
                    name: "Special Panel Pterodactyl",
                    icon: "fas fa-crown",
                    description: "Jasa pembuatan logo dengan berbagai gaya desain. Cocok untuk brand, usaha, atau komunitas.",
                    variants: [
                        { name: "Negara Venezuela", price: 1000 },
                        { name: "Negara Belanda", price: 6000 },
                        { name: "Negara Kamerun", price: 3000 },
                        { name: "Negara Haithi", price: 4000 },
                        { name: "Negara Nigeria", price: 1000 },
                        { name: "Request Custom", price: "Harga sesuai request negara" }
                    ]
                },
            ],
            "Produk Digital": [
                {
                    id: 9,
                    name: "Akun Premium",
                    icon: "fas fa-user-circle",
                    description: "Berbagai akun premium dengan harga terjangkau, cocok untuk hiburan dan produktivitas.",
                    variants: [
                        { name: "Netflix Premium (1 Bulan)", price: 35000 },
                        { name: "Spotify Premium (1 Bulan)", price: 25000 },
                        { name: "Canva Pro (1 Bulan)", price: 20000 },
                    ]
                },
                {
                    id: 10,
                    name: "Source Code",
                    icon: "fas fa-code",
                    description: "Source code bot dan website siap pakai untuk berbagai kebutuhan proyek Anda.",
                    variants: [
                        { name: "Source code bot auto broadcast", price: 5000 },
                        { name: "Source Code bot create panel via telegram", price: 10000 },
                        { name: "Source code create panel via whatsapp", price: 15000 },
                        { name: "Source code bot Fix merah", price: 10000 },
                    ]
                },
            ],
        };