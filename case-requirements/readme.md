# Ürün modülü (Case Study)

## Genel Bakış

Proje olarak 2 ekran istenmektedir. Ürün listeleme ve ürün düzenleme ekranlarının yapılması yeterlidir. 

## İstenilen Özellikler

### 1. Ürün listeleme
- PrimeReact - DataTable componenti kullanılarak ürünlerin ekrana listelenmesi

### 2. Ürün düzenleme
- PrimeReact componentleri kullanılarak tek ekranda ürünün bilgilerini, ürünün özelliklerinin girilebilmesi beklenmektedir.
- CategoryId için Dropdown kullanılarak kategori seçilmesi beklenmektedir. Dropdown içeriği category.json dosyasından alınacaktır.
- ProductSettings için aynı ekranda bir tablo içerisinde (Datatable kullanılmasına gerek yoktur), ekleme, düzenleme, silme yapılabilmelidir. 
    - SettingId için Dropdown kullanılması beklenmektedir. Dropdown içeriği setting.json dosyasından alınacaktır.
    - Value için InputText kullanılması beklenmektedir.


## Kullanılacak Teknoloji
- **Programlama Dili:** React.js
- **Framework:** Next.js
- **Component Library:** Prime React
- **Veritabanı:** Data klasörü içerisindeki json dosyaları