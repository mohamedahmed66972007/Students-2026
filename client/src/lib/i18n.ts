import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          "platform": "Study Platform",
          "upload": "Upload File",
          "login": "Login",
          "logout": "Logout",
          "admin": "Admin",
          "admin_login": "Admin Login",
          "dark_mode": "Dark Mode",
          "light_mode": "Light Mode",
          "switch_language": "Switch Language",
          "contact_us": "Contact Us",
          "about_us": "About Us",
          "phone": "Phone",
          "email": "Email",
          "search": "Search",
          "filter": "Filter",
          "all_subjects": "All Subjects",
          "mathematics": "Mathematics",
          "science": "Science",
          "history": "History",
          "latest_files": "Latest Files"
        }
      },
      ar: {
        translation: {
          "platform": "منصة المواد الدراسية",
          "upload": "رفع ملف",
          "login": "تسجيل الدخول",
          "logout": "تسجيل الخروج",
          "admin": "مسؤول",
          "admin_login": "تسجيل دخول المسؤول",
          "dark_mode": "الوضع الليلي",
          "light_mode": "الوضع النهاري",
          "switch_language": "تغيير اللغة",
          "contact_us": "تواصل معنا",
          "about_us": "عن المنصة",
          "phone": "الهاتف",
          "email": "البريد الإلكتروني",
          "search": "بحث",
          "filter": "تصفية",
          "all_subjects": "جميع المواد",
          "mathematics": "الرياضيات",
          "science": "العلوم",
          "history": "التاريخ",
          "latest_files": "أحدث الملفات"
        }
      }
    },
    fallbackLng: 'ar',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;