// هذا الملف ضروري لجعل الهاتف يعتبر الموقع تطبيقاً
self.addEventListener('install', (e) => {
  console.log('Service Worker: Installed');
});

self.addEventListener('fetch', (e) => {
  // هنا يمكن إضافة التخزين المؤقت مستقبلاً
});
