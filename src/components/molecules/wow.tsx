const products = [
    {
      "category": "Helm",
      "description": "Helm full face dengan desain aerodinamis, dilengkapi visor anti-kabut dan sistem ventilasi yang baik.",
      "imageUrl": "https://example.com/helm1.jpg",
      "name": "Helm Full Face XYZ-2000",
      "price": 750000
    },
    {
      "category": "Helm",
      "description": "Helm half face ringan dan nyaman, cocok untuk perjalanan jarak pendek.",
      "imageUrl": "https://example.com/helm2.jpg",
      "name": "Helm Half Face ABC-100",
      "price": 350000
    },
    {
      "category": "Helm",
      "description": "Helm modular dengan fitur bisa diubah menjadi full face atau open face, dilengkapi sun visor.",
      "imageUrl": "https://example.com/helm3.jpg",
      "name": "Helm Modular M-500",
      "price": 1200000
    },
    {
      "category": "Helm",
      "description": "Helm anak-anak dengan desain karakter kartun, aman dan nyaman digunakan.",
      "imageUrl": "https://example.com/helm4.jpg",
      "name": "Helm Anak Kiddo-123",
      "price": 200000
    },
    {
      "category": "Servis",
      "description": "Visor helm anti-kabut dengan lapisan anti-scratch.",
      "imageUrl": "https://example.com/visor1.jpg",
      "name": "Visor Anti-Kabut VK-10",
      "price": 150000
    },
    {
      "category": "Servis",
      "description": "Padding helm tambahan untuk kenyamanan ekstra.",
      "imageUrl": "https://example.com/padding1.jpg",
      "name": "Padding Helm PH-20",
      "price": 80000
    },
    {
      "category": "Servis",
      "description": "Chin strap pengganti dengan bahan yang kuat dan nyaman.",
      "imageUrl": "https://example.com/chinstrap1.jpg",
      "name": "Chin Strap CS-30",
      "price": 50000
    },
    {
      "category": "Aksesoris",
      "description": "Sarung tangan bermotor dengan bahan kulit asli dan pelindung di bagian buku jari.",
      "imageUrl": "https://example.com/gloves1.jpg",
      "name": "Sarung Tangan Kulit GT-10",
      "price": 250000
    },
    {
      "category": "Aksesoris",
      "description": "Jaket riding dengan bahan tahan air dan pelindung di bagian siku dan punggung.",
      "imageUrl": "https://example.com/jacket1.jpg",
      "name": "Jaket Riding JR-200",
      "price": 600000
    },
    {
      "category": "Aksesoris",
      "description": "Raincoat tahan air dengan desain compact, mudah dibawa dalam tas motor.",
      "imageUrl": "https://example.com/raincoat1.jpg",
      "name": "Raincoat RC-50",
      "price": 150000
    },
    {
      "category": "Aksesoris",
      "description": "Sepatu riding dengan sol anti-slip dan pelindung di bagian mata kaki.",
      "imageUrl": "https://example.com/shoes1.jpg",
      "name": "Sepatu Riding SR-300",
      "price": 450000
    },
    {
      "category": "Aksesoris",
      "description": "Masker balaclava dengan bahan breathable, cocok untuk mengurangi debu saat berkendara.",
      "imageUrl": "https://example.com/balaclava1.jpg",
      "name": "Masker Balaclava MB-20",
      "price": 50000
    },
    {
      "category": "Aksesoris",
      "description": "Tas motor waterproof dengan kapasitas 20 liter, dilengkapi tali pengikat yang kuat.",
      "imageUrl": "https://example.com/bag1.jpg",
      "name": "Tas Motor TM-20",
      "price": 300000
    },
    {
      "category": "Aksesoris",
      "description": "Cover motor tahan air dan debu, cocok untuk parkir outdoor.",
      "imageUrl": "https://example.com/cover1.jpg",
      "name": "Cover Motor CM-100",
      "price": 200000
    },
    {
      "category": "Aksesoris",
      "description": "Spion motor dengan desain stylish dan bidang pandang yang luas.",
      "imageUrl": "https://example.com/mirror1.jpg",
      "name": "Spion Motor SM-150",
      "price": 100000
    },
    {
      "category": "Aksesoris",
      "description": "Alarm motor dengan sensor getar dan remote control.",
      "imageUrl": "https://example.com/alarm1.jpg",
      "name": "Alarm Motor AM-50",
      "price": 350000
    },
    {
      "category": "Aksesoris",
      "description": "GPS tracker untuk melacak posisi motor secara real-time.",
      "imageUrl": "https://example.com/gps1.jpg",
      "name": "GPS Tracker GT-100",
      "price": 500000
    },
    {
      "category": "Servis",
      "description": "Cairan pembersih helm yang aman untuk semua jenis material.",
      "imageUrl": "https://example.com/cleaner1.jpg",
      "name": "Cairan Pembersih Helm CPH-10",
      "price": 40000
    },
    {
      "category": "Servis",
      "description": "Semir helm untuk menjaga warna dan kilau helm.",
      "imageUrl": "https://example.com/polish1.jpg",
      "name": "Semir Helm SH-20",
      "price": 30000
    },
    {
      "category": "Servis",
      "description": "Lap microfiber khusus untuk membersihkan helm tanpa meninggalkan goresan.",
      "imageUrl": "https://example.com/cloth1.jpg",
      "name": "Lap Microfiber LM-30",
      "price": 25000
    },
    {
      "category": "Servis",
      "description": "Kit perawatan helm lengkap, termasuk cairan pembersih, semir, dan lap microfiber.",
      "imageUrl": "https://example.com/kit1.jpg",
      "name": "Kit Perawatan Helm KPH-50",
      "price": 100000
    },
    {
      "category": "Aksesoris",
      "description": "Action camera tahan air dengan kualitas video 4K.",
      "imageUrl": "https://example.com/camera1.jpg",
      "name": "Action Camera AC-200",
      "price": 1500000
    },
    {
      "category": "Aksesoris",
      "description": "Headset Bluetooth untuk helm, memudahkan komunikasi saat berkendara.",
      "imageUrl": "https://example.com/headset1.jpg",
      "name": "Headset Bluetooth HB-50",
      "price": 400000
    },
    {
      "category": "Aksesoris",
      "description": "Charger portabel tahan air, cocok untuk perjalanan jarak jauh.",
      "imageUrl": "https://example.com/charger1.jpg",
      "name": "Charger Portabel CP-100",
      "price": 120000
    },
    {
      "category": "Aksesoris",
      "description": "Lampu LED tambahan untuk meningkatkan visibilitas saat malam hari.",
      "imageUrl": "https://example.com/light1.jpg",
      "name": "Lampu LED LL-200",
      "price": 180000
    }
  ];
  
  // Fungsi untuk mengelompokkan data berdasarkan kategori
  const groupByCategory = (products) => {
    return products.reduce((acc, product) => {
      const { category } = product;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(product);
      return acc;
    }, {});
  };
  
  // Mengelompokkan data
  const groupedProducts = groupByCategory(products);
  
  // Menampilkan hasil
  console.log(groupedProducts);