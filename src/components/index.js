import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  benefitImage3,
  benefitImage4,
  benefitImage5,
  benefitImage6,
  benefitImage7,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  aws,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  azure,
  openai,
  plusSquare,
  cloudflare,
  google,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  kubernetes,
  sliders04,
  telegram,
  twitter,
  yourlogo1,
  yourlogo2,
  yourlogo3,
  yourlogo4,
  yourlogo5,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Çözümler",
    url: "#features",
  },
  {
    id: "1",
    title: "B2B Pazaryeri",
    url: "#pricing",
  },
  {
    id: "2",
    title: "B2B Koleksiyonlar",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "Kampanyalı Ürünler",
    url: "#roadmap",
  },
  {
    id: "3",
    title: "Haberler",
    url: "#roadmap",
  },
  {
    id: "3",
    title: "BİZE ULAŞIN",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "Kayıt Ol",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [
  yourlogo1,
  yourlogo2,
  yourlogo3,
  yourlogo4,
  yourlogo5,
];

export const brainwaveServices = [
  "3D Görselleştirme",
  "Kartelam Connect",
  "QR Kodlu Depo Yönetimi",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Sesli YZ Asistan",
    text: "Kartelam'ın yapay zeka asistanına ses vererek müşterilerinizin deneyimini bir üst seviyeye taşımak için çalışmalarımıza devam ediyoruz.",
    date: "Q1 2025",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "Q2 2025",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "Q3 2025",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "Q4 2025",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "Kartelam, sektörün en iyi teknoloji altyapılarını kullanarak müşterilerine en kaliteli ve en güvenli hizmeti vermeyi amaçlar.";

export const collabContent = [
  {
    id: "0",
    title: "Sorunsuz Entegrasyon",
    text: collabText,
  },
  {
    id: "1",
    title: "Akıllı Otomasyon",
  },
  {
    id: "2",
    title: "Üst Düzey Güvenlik",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Azure",
    icon: azure,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "kubernetes",
    icon: kubernetes,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "OpenAI",
    icon: openai,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "cloudflare",
    icon: cloudflare,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "aws",
    icon: aws,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "google",
    icon: google,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Atölye Paketi",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "B2B Pazaryeri",
    text: "B2B Pazaryerimiz ile tedarikçiler ve alıcılar arasında hızlı ve güvenli işlemler yapın, işinizi genişletin.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage3,
  },
  {
    id: "1",
    title: "3D Görselleştirme",
    text: "Müşterilerinize ürünlerinizi 3D modellere giydirerek gerçekçi ve etkileyici bir seçim deneyimi sunuyoruz.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "brainwave-symbol-white Asistanı",
    text: "Tekstil sektörü için özel brainwave-symbol-white asistanımızla, süreçlerinizi hızlandırın ve verimliliği artırın.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage4,
  },
  {
    id: "3",
    title: "QR Kodlu Ürün Takibi",
    text: "QR Kod Destekli Ürün Takibi ile ürünlerinizi kolayca izleyin ve yönetim süreçlerinizi daha verimli hale getirin.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage5,
    light: true,
  },
  {
    id: "4",
    title: "Kartelam Connect",
    text: "Kartelam Connect, firmaların özelleştirilmiş whitelabel web sayfaları oluşturarak güncel ürün havuzunu sergileyip satışlarını artırmalarını sağlayan bir platformdur.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage6,
  },
  {
    id: "5",
    title: "Kartelam Self Service",
    text: "Kartelam Self Servis, müşterilerin mobil cihazlarla kartela ve numune taleplerini bağımsız olarak oluşturmalarını sağlayan, sektörde benzersiz bir özelliktir.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage7,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
