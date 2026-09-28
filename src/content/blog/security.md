---
title: 'Praktik Keamanan Siber Esensial untuk Server & Jaringan Daerah'
pubDate: 2026-02-25T08:00:00Z
description: 'Langkah-langkah praktis hardening server Linux, penutupan port rentan, dan proteksi database bagi sysadmin dan teknisi jaringan di Papua.'
author: 'Muhammad Amin Hidayat'
image: '/blog/post-03-cover.png'
tags: ['keamanan', 'devops']
---

Mengelola server Virtual Private Server (VPS) atau komputer server mandiri di kantor distrik, sekolah, maupun tempat usaha di Papua memerlukan perhatian serius terhadap keamanan siber. Kurangnya konfigurasi dasar sering kali menjadi celah masuk bagi pemindaian bot otomatis dari internet.

Di Nokara Community, kami membagikan beberapa langkah hardening esensial yang dapat diterapkan oleh teknisi dan pengelola sistem lokal:

![Keamanan Server Nokara](/blog/post-03.png)

### Checklist Hardening Server Mandiri

- **Nonaktifkan Login Root via SSH**: Selalu buat akun pengguna khusus dengan hak sudo, dan ubah pengaturan SSH (`PermitRootLogin no`) untuk memitigasi serangan brute-force.
- **Wajibkan Autentikasi Kunci SSH (SSH Key)**: Hindari login berbasis kata sandi biasa yang mudah ditebak; gunakan pasangan public-private key.
- **Konfigurasi Firewall (UFW)**: Tutup seluruh port yang tidak digunakan dan hanya izinkan port esensial (seperti port 80/443 untuk web dan port SSH khusus).
- **Automated Backup Terenkripsi**: Cadangkan database secara terjadwal ke penyimpanan cloud terpisah, sehingga data operasional tetap selamat meski perangkat fisik mengalami kerusakan.

Keamanan sistem bukan tentang menggunakan alat yang mahal, melainkan menerapkan disiplin konfigurasi yang konsisten sejak hari pertama sistem dibangun.
