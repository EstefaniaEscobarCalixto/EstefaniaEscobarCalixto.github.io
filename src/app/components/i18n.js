// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Configuración básica
i18n
    .use(initReactI18next)
    .init({
        resources: {
            // i18n.js
            en: {
                translation: {
                    aboutMe: 'About Me',
                    developerIntro: 'I am a software developer with experience in...',
                    languages: 'Languages',
                    education: 'Education',
                    certificates: 'Certificates',
                    // ... (otras traducciones)
                },
            },
            es: {
                translation: {
                    aboutMe: 'Sobre mí',
                    developerIntro: 'Soy un desarrollador de software con experiencia en...',
                    languages: 'Lenguajes',
                    education: 'Educación',
                    certificates: 'Certificados',
                    // ... (otras traducciones)
                },
            },

        },
        lng: 'en', // Idioma predeterminado
        fallbackLng: 'en', // Idioma de respaldo si no se encuentra la traducción
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
