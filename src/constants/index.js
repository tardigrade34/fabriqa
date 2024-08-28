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
    title: "B2B PAZARYERİ",
    url: "#pricing",
  },
  {
    id: "2",
    title: "B2B KOLEKSİYONLAR",
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
    title: "YZ Desen Oluşturma",
    text: "Sadece yazarak hayalinizdeki deseni oluşturduğunuzu düşünün. Kartelam yakında bunu mümkün kılacak!",
    date: "Q2 2025",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Kartelam Planlama",
    text: "Üretim süreçlerinizi optimize edip kaynaklarınızı daha etkin şekilde yönetmenizi sağlayacak bir araç üzerinde çalışıyoruz.",
    date: "Q3 2025",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Kartelam Community Hub",
    text: "Tekstil sektörünün dijital ortamdaki ortak ve kapsayıcı buluşma noktasını yaratmak için çalışmalarımız devam ediyor.",
    date: "Q4 2025",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "Akıllı otomasyon ve üst düzey güvenlik ile tekstil sektöründe dijital dönüşümü kolaylaştıran mükemmel bir çözüm.";

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
    description:
      "Konfeksiyonlar, tasarımcılar ve küçük işletmeler için ideal paket",
    price: "99",
    features: [
      "3D Görselleştirme & ReColor özelliklerine erişim",
      "B2B Pazaryeri'ne hem alıcı, hem satıcı olarak erişim",
      "Eğer bir Kartelam firması'nın bayisi iseniz Kartelam Connect'e erişim",
    ],
  },
  {
    id: "1",
    title: "Premium Paket",
    description:
      "Kartelam sisteminde var olan tüm özellikleri içerisinde barındıran paket",
    price: "2.900",
    features: [
      "Kartelam sisteminde var olan tüm özelliklere erişim",
      "Hayalinizdeki dijital çözümü anlatın, sizin için geliştirelim",
      "7/24 Teknik destek",
    ],
  },
  {
    id: "2",
    title: "Modüler Paket",
    description:
      "İhtiyacınız olan özellikleri seçerek kendinize özel oluşturabileceğiniz paket",
    price: null,
    features: [
      "Dijital Dönüşüm Danışmanlığımız ile ihtiyaçlarınıza birlikte karar verelim",
      "Sadece ihtiyacınız olan özelliklerin ücretini ödeyerek tasarruf edin",
      "Yeni özellikleri ilk siz belirleyin",
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
    title: "Yapay Zeka Asistanı",
    text: "Tekstil sektörü için özel yapay zeka asistanımızla, süreçlerinizi hızlandırın ve verimliliği artırın.",
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
    url: "https://discord.gg/rJCAWa3R",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "https://x.com/kartelam_com",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "https://www.instagram.com/kartelamcom/",
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
    url: "https://www.facebook.com/kartelamcom/",
  },
];
