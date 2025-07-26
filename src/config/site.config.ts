export interface SiteConfig {
  // Información de la empresa
  company: {
    name: string;
    slogan?: string;
    logo: string; // Ruta al logo
    phone: string;
    email: string;
    address: string;
    whatsapp?: string;
  };
  
  // Colores del tema (se mapearán a variables CSS)
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    // Colores adicionales opcionales
    primaryDark?: string;
    primaryLight?: string;
  };
  
  // Metadatos SEO
  seo: {
    title: string;
    description: string;
    keywords: string;
  };
  
  // Redes sociales (opcional)
  social?: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
    linkedin?: string;
    youtube?: string;
    pinterest?: string;
  };
  
  // Categoría del sitio (plumbing, carpentry, etc.)
  category: 'plumbing' | 'carpentry' | 'cleaning' | 'automotive' | 'fitness' | 'restaurant' | 'healthcare' | 'education' | 'legal' | 'real-estate';
}

// Configuración por defecto - PERSONALIZA ESTOS VALORES PARA CADA CLIENTE
export const siteConfig: SiteConfig = {
  company: {
    name: "EIKOS RH",
    slogan: "Carpintería Elegante",
    logo: "", // No logo, usaremos texto
    phone: "313 6214725",
    email: "info@eikosrh.com",
    address: "Cl. 106 #26 P 25, Manuela Beltran, Cali, Valle del Cauca",
    whatsapp: "573136214725"
  },
  
  colors: {
    primary: "#192d5a",      // Azul oscuro elegante
    secondary: "#d1a74b",    // Dorado elegante
    accent: "#d1a74b",       // Dorado como acento
    primaryDark: "#0f1b36",  // Azul más oscuro
    primaryLight: "#2a4177"  // Azul más claro
  },
  
  seo: {
    title: "EIKOS RH - Carpintería Elegante en Cali",
    description: "Carpintería elegante y de alta calidad en Cali. Muebles a medida, diseños exclusivos y acabados de primera.",
    keywords: "carpintería, muebles, elegante, Cali, Valle del Cauca, diseño, madera, EIKOS RH"
  },
  
  social: {
    facebook: "https://facebook.com/eikosrh",
    instagram: "https://instagram.com/eikosrh",
    pinterest: "https://pinterest.com/eikosrh"
  },
  
  category: 'carpentry'
};