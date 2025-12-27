const CONFIG = {
nama: "InovaCode", // Nama Store
profil: "https://files.catbox.moe/u9j5nt.png", // Url Profil
banner: "https://files.catbox.moe/u9j5nt.png", // Url Banner 
tentang: "InovaCode adalah toko online terpercaya yang telah melayani ribuan pelanggan sejak 2020. Kami menyediakan berbagai produk digital untuk kebutuhan sehari-hari dengan kualitas terbaik dan harga terjangkau.\n\nKomitmen kami adalah memberikan pengalaman berbelanja yang menyenangkan dengan pelayanan terbaik, produk original, dan garansi resmi untuk semua produk yang kami jual.",
alamat: "Jl. Kebon nanas selatan 1. 23, Jakarta, Indonesia",
sosial_media: {
  email: "hailazmi694@gmail.com", 
  youtube: "MintorX-hb5ww", 
  tiktok: "azmialkatiri4", 
  whatsapp: "6288976906352", 
  telegram: "ArabsAnakMamah" 
},
payment: {
  dana: "088976906352", 
  gopay: "088976906352", 
  ovo: "088976906352", 
  qris: "QRIS" 
},
telegram_api: {
  bot: "8539684350:AAH1tpFzmgbWhMWjuHgawjL99_M5MCnfzGE", 
  chatid: "5788408765" 
},
}


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
                  { "name": "Unlimited RAM", "price": 4000 },
                ]
              },
              {
                "id": 2,
                "name": "VPS Kecil",
                "icon": "fas fa-microchip",
                "description": "Virtual Private Server murah untuk belajar dan project kecil.",
                "variants": [
                  { "name": "2 vCPU / 2GB RAM / 60GB SSD / 3TB BW", "price": 6000 },
                  { "name": "2 vCPU / 4GB RAM / 80GB SSD / 4TB BW", "price": 9000 },
                  { "name": "4 vCPU / 8GB RAM / 160GB SSD / 5TB BW", "price": 12000 },
                  { "name": "4 vCPU / 16GB RAM / 200GB SSD / 8TB BW", "price": 15000 },
                   { "name": "8 vCPU / 16GB RAM / 320GB SSD / 6TB", "price": 18000 },
                ]
              },
              {
                "id": 3,
                "name": "VPS Menengah",
                "icon": "fas fa-hdd",
                "description": "VPS menengah dengan performa cukup untuk website atau panel hosting.",
                "variants": [
                  { "name": "2 vCPU / 2GB RAM / 60GB SSD / 2TB BW", "price": 10000 },
                  { "name": "2 vCPU / 4GB RAM / 80GB SSD / 4TB BW", "price": 13000 },
                   { "name": "4 vCPU / 8GB RAM / 160GB SSD / 5TB BW", "price": 17000 },
                    { "name": "4 vCPU / 16GB RAM / 200GB SSD / 8TB BW", "price": 20000 },
                     { "name": "8 vCPU / 16GB RAM / 320GB SSD / 6TB BW", "price": 25000 },
                ]
              },
              {
                "id": 4,
                "name": "VPS Tinggi",
                "icon": "fas fa-database",
                "description": "VPS Tinggi dengan performa Jauh Lebih cukup untuk website atau panel hosting.",
                "variants": [
                  { "name": "2 vCPU / 2GB RAM / 60GB SSD", "price": 15000 },
                  { "name": "2 vCPU / 4GB RAM / 80GB SSD", "price": 18000 },
                  { "name": "4 vCPU / 8GB RAM / 160GB SSD", "price": 25000 },
                  { "name": "4 vCPU / 16GB RAM / 200GB SSD", "price": 33000 },
                  { "name": "8 vCPU / 16GB RAM / 320GB SSD", "price": 50000 },
                ]
              },
            ],
            "special produk": [
                {
                    id: 5,
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
                    id: 6,
                    name: "Nokos Premium",
                    icon: "fas fa-star",
                    description: "Jasa pembuatan banner untuk promosi usaha, media sosial, atau event.",
                    variants: [
                        { name: "Nokos indonesia unli verif", price: 25000 },
                        { name: "Nokos save 7 hari", price: 10000 },
                        { name: "Nokos On Verif 2 langkah", price: 5000 }
                    ]
                },
                {
                    id: 7,
                    name: "Special Panel Pterodactyl",
                    icon: "fas fa-rocket",
                    description: "Dapatkan Keuntungan 10x Lipat,bebas jual panel sepuas nya.",
                    variants: [
                        { name: "Reseller Panel", price: 3000 },
                        { name: "Admin Panel", price: 6000 },
                        { name: "Partner Panel", price: 9000 },
                        { name: "Owner Panel", price: 12000 },
                        { name: "Owner VIP Panel", price: 15000 },
                        { name: "Owner VVIP Panel", price: "18000" }
                    ]
                },
                {
                    id: 8,
                    name: "Jasa Install Panel",
                    icon: "fas fa-tools",
                    description: "Mempermudah kalian Untuk Bisa Mendapatkan Panel.",
                    variants: [
                        { name: "Install Panel Only", price: 3000 },
                        { name: "Install Panel + Hijaukan Node", price: 5000 },
                        { name: "Install Panel + Hijaukan Node + Pasangkan Egg", price: 10000 },
                        { name: "Hijaukan Node Only", price: 2000},
                        { name: "Install Tema", price: 3000 },
                        { name: "Pasangkan Nest Egg Only", price: "6000" }
                    ]
                },
            ],
            "Produk Digital": [
                {
                    id: 9,
                    name: "Akun Premium",
                    icon: "fas fa-crown",
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
                    description: "Berbagai akun premium dengan harga terjangkau, cocok untuk hiburan dan produktivitas.",
                    variants: [
                        { name: "Netflix Premium (1 Bulan)", price: 35000 },
                        { name: "Spotify Premium (1 Bulan)", price: 25000 },
                        { name: "Canva Pro (1 Bulan)", price: 20000 },
                    ]
                },
                {
                    id: 11,
                    name: "Sewa Bot Jaga Grup",
                    icon: "fas fa-robot",
                    description: "Menyediakan layanan menjaga grup dari hama.",
                    variants: [
                        { name: "Sewa Bot Jaga Gb (1 Hari)", price: 2000 },
                        { name: "Sewa Bot Jaga Gb (3 Hari)", price: 5000 },
                        { name: "Sewa Bot Jaga Gb (7 Hari)", price: 7000 },
                        { name: "Sewa Bot Jaga Gb ( Permanen)", price: 10000 },
                    ]
                },
                {
                    id: 12,
                    name: "Jasa Push Member",
                    icon: "fas fa-user-plus",
                    description: "selama berproses harap matikan grup dan jangan ganggu admin yang sedang lagi memproses jpm nya.",
                    variants: [
                        { name: "10 Member ", price: 2000 },
                        { name: "20 Member ", price: 3000 },
                        { name: "30 Member ", price: 4000 },
                        { name: "40 Member ", price: 5000 },
                        { name: "50 Member ", price: 6000 },
                        { name: "60 Member ", price: 7000 },
                        { name: "70 Member ", price: 8000 },
                        { name: "80 Member ", price: 9000 },
                        { name: "90 Member ", price: 10000 },
                        { name: "100 Member ", price: 11000 },
                         ]
                 },
              ],     
           };
