import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const messagesDir = path.join(root, "messages");

const en = {
  site: {
    name: "Dashboard",
    description:
      "Personal life administration — manage your life like a company.",
    tagline: "Your personal life, managed all in one place.",
    copyright: "Dashboard",
  },
  common: {
    actions: {
      close: "Close",
      saveChanges: "Save Changes",
      filter: "Filter",
      viewMore: "View More",
      delete: "Delete",
      openModal: "Open Modal",
      edit: "Edit",
      or: "Or",
    },
    breadcrumb: { home: "Home" },
    chartPeriod: {
      monthly: "Monthly",
      quarterly: "Quarterly",
      annually: "Annually",
    },
    months: {
      jan: "Jan",
      feb: "Feb",
      mar: "Mar",
      apr: "Apr",
      may: "May",
      jun: "Jun",
      jul: "Jul",
      aug: "Aug",
      sep: "Sep",
      oct: "Oct",
      nov: "Nov",
      dec: "Dec",
    },
  },
  layout: {
    sidebar: {
      sections: { menu: "Menu", development: "Development", system: "System" },
      widget: { settings: "Settings" },
    },
    header: {
      toggleSidebar: "Toggle Sidebar",
      searchPlaceholder: "Search or type command...",
    },
  },
  nav: {
    settings: "Settings",
    dev: {
      forms: "Forms",
      formElements: "Form Elements",
      tables: "Tables",
      basicTables: "Basic Tables",
      pages: "Pages",
      blankPage: "Blank Page",
      error404: "404 Error",
      charts: "Charts",
      lineChart: "Line Chart",
      barChart: "Bar Chart",
      uiElements: "UI Elements",
      alerts: "Alerts",
      avatar: "Avatar",
      badge: "Badge",
      buttons: "Buttons",
      images: "Images",
      videos: "Videos",
      authentication: "Authentication",
      signIn: "Sign In",
      signUp: "Sign Up",
    },
  },
  modules: {
    overview: {
      label: "Home",
      description:
        "Summary dashboard and overview of your personal life.",
      nav: { main: "Overview" },
    },
    employment: {
      label: "Employment",
      description: "Work, contracts, and professional tracking.",
      nav: { main: "Employment" },
    },
    finances: {
      label: "Finances",
      description: "Income, expenses, and financial planning.",
      nav: { main: "Finances" },
    },
    projects: {
      label: "Projects",
      description: "Personal projects and long-term goals.",
      nav: { main: "Projects" },
    },
    calendar: {
      label: "Calendar",
      description: "Events and scheduling.",
      nav: { main: "Calendar" },
    },
    profile: {
      label: "Profile",
      description: "Personal data and account preferences.",
      nav: { main: "Profile" },
    },
    settings: {
      alwaysActive: "Always active",
      enabled: "Enabled",
      disabled: "Disabled",
    },
  },
  settings: {
    title: "Settings",
    languageHeading: "Language",
    languageDescription: "Choose the display language for the dashboard.",
    modulesHeading: "Modules",
    modulesDescription:
      "Enable or disable dashboard sections. Changes are saved on this device.",
  },
  pages: {
    overview: {
      title: "Home",
      sampleDataNote:
        "The metrics below are sample data until each module has its own dashboard.",
    },
    employment: {
      title: "Employment",
      description: "Track jobs, contracts, and your professional path.",
    },
    finances: {
      title: "Finances",
      description: "Income, expenses, and financial planning.",
    },
    projects: {
      title: "Projects",
      description: "Personal projects and long-term goals.",
    },
    calendar: { title: "Calendar" },
    profile: { title: "Profile" },
    settings: { title: "Settings" },
    formElements: { title: "Form Elements" },
    lineChart: { title: "Line Chart", chartTitle: "Line Chart 1" },
    barChart: { title: "Bar Chart", chartTitle: "Bar Chart 1" },
    basicTables: { title: "Basic Tables", tableTitle: "Basic Table 1" },
    blank: {
      title: "Blank Page",
      cardTitle: "Card Title Here",
      cardBody:
        "Start putting content on grids or panels, you can also use different combinations of grids. Please check out the dashboard and other pages.",
    },
    buttons: { title: "Buttons" },
    images: { title: "Images" },
    modals: { title: "Modals" },
    alerts: { title: "Alerts" },
    avatars: { title: "Avatars" },
    badge: { title: "Badges" },
    videos: { title: "Videos" },
    signIn: { title: "Sign In" },
    signUp: { title: "Sign Up" },
    error404: { title: "Error 404" },
  },
  errors: {
    notFoundTitle: "ERROR",
    notFoundMessage: "We can't seem to find the page you are looking for!",
    backHome: "Back to Home Page",
    imageAlt: "404",
  },
  auth: {
    common: { backToDashboard: "Back to dashboard", or: "Or" },
    fields: {
      email: "Email",
      password: "Password",
      firstName: "First Name",
      lastName: "Last Name",
    },
    placeholders: {
      emailExample: "info@gmail.com",
      password: "Enter your password",
      firstName: "Enter your first name",
      lastName: "Enter your last name",
    },
    signIn: {
      title: "Sign In",
      subtitle: "Enter your email and password to sign in!",
      google: "Sign in with Google",
      x: "Sign in with X",
      rememberMe: "Keep me logged in",
      forgotPassword: "Forgot password?",
      submit: "Sign in",
      noAccount: "Don't have an account?",
      link: "Sign Up",
    },
    signUp: {
      title: "Sign Up",
      subtitle: "Enter your email and password to sign up!",
      google: "Sign up with Google",
      x: "Sign up with X",
      termsIntro: "By creating an account means you agree to the",
      terms: "Terms and Conditions",
      privacy: "Privacy Policy",
      submit: "Sign Up",
      hasAccount: "Already have an account?",
      link: "Sign In",
      andOur: "and our",
    },
  },
  ecommerce: {
    metrics: { customers: "Customers", orders: "Orders" },
    recentOrders: {
      title: "Recent Orders",
      seeAll: "See all",
      columns: {
        products: "Products",
        category: "Category",
        price: "Price",
        status: "Status",
      },
      variants: "{count} Variants",
    },
    orderStatus: {
      delivered: "Delivered",
      pending: "Pending",
      canceled: "Canceled",
    },
    demographic: {
      title: "Customers Demographic",
      subtitle: "Number of customer based on country",
      customerCount: "{count} Customers",
      countries: { usa: "USA", france: "France" },
    },
    monthlySales: { title: "Monthly Sales" },
    monthlyTarget: {
      title: "Monthly Target",
      subtitle: "Target you've set for each month",
      progress: "Progress",
      message:
        "You earn $3287 today, it is higher than last month. Keep up your good work!",
      stats: { target: "Target", revenue: "Revenue", today: "Today" },
    },
    statistics: {
      title: "Statistics",
      subtitle: "Target you've set for each month",
      dateRangePlaceholder: "Select date range",
    },
    charts: { sales: "Sales", revenue: "Revenue" },
  },
  form: {
    select: { placeholder: "Select an option" },
    phone: { placeholder: "+1 (555) 000-0000" },
    multiSelect: { placeholder: "Select option" },
    fields: {
      email: "Email",
      input: "Input",
      inputWithPlaceholder: "Input with Placeholder",
      selectInput: "Select Input",
      password: "Password",
      datePicker: "Date Picker",
      timePicker: "Time Picker",
      payment: "Payment",
      textarea: "Textarea",
      checkbox: "Checkbox",
      radio: "Radio Buttons",
      toggle: "Toggle Switch",
      fileInput: "File Input",
      dropzone: "Dropzone",
      phone: "Phone",
      firstName: "First Name",
      lastName: "Last Name",
      bio: "Bio",
      description: "Description",
      datePickerInput: "Date Picker Input",
      passwordInput: "Password Input",
    },
    placeholders: {
      emailExample: "info@gmail.com",
      selectOption: "Select an option",
      password: "Enter your password",
      selectDate: "Select date",
      selectADate: "Select a date",
      cardNumber: "Card number",
      disabledEmail: "Disabled email",
      bio: "Enter your bio",
    },
    validation: {
      emailInvalid: "This is an invalid email address.",
      emailValid: "Valid email!",
      fieldDisabled: "This field is disabled.",
    },
    states: {
      default: "Default",
      checked: "Checked",
      disabled: "Disabled",
      selected: "Selected",
    },
    examples: {
      defaultInputs: {
        title: "Default Inputs",
        desc: "Basic form inputs with default styles.",
      },
      inputStates: {
        title: "Input States",
        desc: "Validation styles for error, success, and disabled states.",
      },
      selectInputs: {
        title: "Select Inputs",
        desc: "Native and custom select components.",
        multiSelectLabel: "Multiple Select Options",
      },
      inputGroup: {
        title: "Input Group",
        desc: "Inputs with prefix and suffix addons.",
      },
      textarea: {
        title: "Textarea Input",
        desc: "Multi-line text input.",
        hintInvalid: "Please enter a valid message.",
      },
      fileInput: {
        title: "File Input",
        desc: "Upload files from your device.",
        uploadLabel: "Upload file",
      },
      dropzone: {
        title: "Dropzone",
        dragActive: "Drop files here...",
        dragInactive: "Drag & drop files here, or click to select",
        hint: "SVG, PNG, JPG or GIF (max. 800x400px)",
        browseFile: "Browse File",
      },
      checkbox: { title: "Checkbox", desc: "Single and grouped checkboxes." },
      radio: { title: "Radio Buttons", desc: "Mutually exclusive options." },
      toggle: { title: "Toggle Switch", desc: "On/off toggle controls." },
      options: {
        marketing: "Marketing",
        template: "Template",
        development: "Development",
        option1: "Option 1",
        option2: "Option 2",
        option3: "Option 3",
        option4: "Option 4",
        option5: "Option 5",
      },
    },
  },
  profile: {
    actions: { edit: "Edit" },
    modals: {
      address: { title: "Edit Address" },
      personal: { title: "Edit Personal Information" },
      subtitle: "Update your details to keep your profile up-to-date.",
    },
    sections: {
      social: "Social Links",
      personal: "Personal Information",
    },
    fields: {
      facebook: "Facebook",
      x: "X.com",
      linkedin: "Linkedin",
      instagram: "Instagram",
      firstName: "First Name",
      lastName: "Last Name",
      email: "Email Address",
      phone: "Phone",
      bio: "Bio",
    },
    address: {
      title: "Address",
      country: "Country",
      cityState: "City/State",
      postalCode: "Postal Code",
      taxId: "TAX ID",
    },
  },
  calendar: {
    toolbar: { addEvent: "Add Event +" },
    modal: {
      titleEdit: "Edit Event",
      titleAdd: "Add Event",
      subtitle:
        "Plan your next big moment: schedule or edit an event to stay on track",
      update: "Update Changes",
      submit: "Add Event",
    },
    fields: {
      title: "Event Title",
      color: "Event Color",
      startDate: "Enter Start Date",
      endDate: "Enter End Date",
    },
    colors: {
      danger: "Danger",
      success: "Success",
      primary: "Primary",
      warning: "Warning",
    },
    demo: {
      events: {
        eventConf: "Event Conf.",
        meeting: "Meeting",
        workshop: "Workshop",
        lunch: "Lunch",
        allDay: "All Day Event",
        repeating: "Repeating Event",
      },
    },
  },
  tables: {
    columns: {
      user: "User",
      projectName: "Project Name",
      team: "Team",
      status: "Status",
      budget: "Budget",
    },
    status: { active: "Active", pending: "Pending", cancel: "Cancel" },
    pagination: { previous: "Previous", next: "Next" },
  },
  header: {
    notifications: {
      title: "Notification",
      permissionRequest: "requests permission to change",
      project: "Project",
      timeAgoMinutes: "{count} min ago",
      timeAgoHour: "1 hr ago",
      viewAll: "View All Notifications",
    },
    user: {
      alt: "User",
      editProfile: "Edit profile",
      accountSettings: "Account settings",
      support: "Support",
      signOut: "Sign out",
    },
  },
  demo: {
    alertsPage: {
      successCard: "Success Alert",
      warningCard: "Warning Alert",
      errorCard: "Error Alert",
      infoCard: "Info Alert",
      successTitle: "Success Message",
      warningTitle: "Warning Message",
      errorTitle: "Error Message",
      infoTitle: "Info Message",
      cautionMessage: "Be cautious when performing this action.",
    },
    images: {
      responsive: "Responsive image",
      grid2: "Image in 2 Grid",
      grid3: "Image in 3 Grid",
    },
    avatars: {
      default: "Default Avatar",
      online: "Avatar with online indicator",
      offline: "Avatar with Offline indicator",
      busy: "Avatar with busy indicator",
    },
    badgePage: {
      lightBg: "With Light Background",
      solidBg: "With Solid Background",
      lightLeftIcon: "Light Background with Left Icon",
      solidLeftIcon: "Solid Background with Left Icon",
      lightRightIcon: "Light Background with Right Icon",
      solidRightIcon: "Solid Background with Right Icon",
      colors: {
        primary: "Primary",
        success: "Success",
        error: "Error",
        warning: "Warning",
        info: "Info",
        light: "Light",
        dark: "Dark",
      },
    },
    buttons: {
      buttonText: "Button Text",
      primary: "Primary Button",
      primaryLeftIcon: "Primary Button with Left Icon",
      primaryRightIcon: "Primary Button with Right Icon",
      secondary: "Secondary Button",
      outlineLeftIcon: "Outline Button with Left Icon",
      outlineRightIcon: "Outline Button with Right Icon",
    },
  },
  example: {
    modals: {
      default: {
        title: "Default Modal",
        heading: "Modal Heading",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod est ac leo cursus, a ullamcorper magna tincidunt.",
      },
      centered: {
        title: "Vertically Centered Modal",
        heading: "All Done! Success Confirmed",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod est ac leo cursus.",
      },
      fullscreen: {
        title: "Full Screen Modal",
        heading: "Modal Heading",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      form: { title: "Form In Modal", section: "Personal Information" },
    },
    modalBasedTitle: "Modal Based Alerts",
    alerts: {
      success: {
        title: "Success Alert",
        message: "Well Done!",
        button: "Okay Got It",
      },
      info: {
        title: "Information Alert",
        message: "Information Alert!",
        button: "Okay Got It",
      },
      warning: {
        title: "Warning Alert",
        message: "Warning Alert!",
        button: "Okay Got It",
      },
      danger: {
        title: "Danger Alert",
        message: "Danger Alert!",
        button: "Okay Got It",
      },
    },
  },
  ui: {
    alert: { learnMore: "Learn more" },
    video: {
      youtubeTitle: "YouTube video",
      ratio169: "Video Ratio 16:9",
      ratio43: "Video Ratio 4:3",
      ratio219: "Video Ratio 21:9",
      ratio11: "Video Ratio 1:1",
    },
  },
};

const es = structuredClone(en);

Object.assign(es.site, {
  description:
    "Administración de vida personal — gestiona tu vida como una empresa.",
  tagline: "Tu vida personal, gestionada en un solo lugar.",
});
Object.assign(es.layout.sidebar.sections, {
  menu: "Menú",
  development: "Desarrollo",
  system: "Sistema",
});
es.layout.sidebar.widget.settings = "Configuración";
es.nav.settings = "Configuración";
Object.assign(es.nav.dev, {
  forms: "Formularios",
  formElements: "Elementos de formulario",
  tables: "Tablas",
  basicTables: "Tablas básicas",
  pages: "Páginas",
  blankPage: "Página en blanco",
  charts: "Gráficos",
  lineChart: "Gráfico de líneas",
  barChart: "Gráfico de barras",
  uiElements: "Elementos UI",
  alerts: "Alertas",
  badge: "Insignias",
  buttons: "Botones",
  images: "Imágenes",
  videos: "Vídeos",
  authentication: "Autenticación",
  signIn: "Iniciar sesión",
  signUp: "Registro",
});
Object.assign(es.modules.overview, {
  label: "Inicio",
  description: "Panel de resumen y vista general de tu vida personal.",
  nav: { main: "Resumen" },
});
Object.assign(es.modules.employment, {
  label: "Empleo",
  description: "Trabajo, contratos y seguimiento profesional.",
  nav: { main: "Empleo" },
});
Object.assign(es.modules.finances, {
  label: "Finanzas",
  description: "Ingresos, gastos y planificación financiera.",
  nav: { main: "Finanzas" },
});
Object.assign(es.modules.projects, {
  label: "Proyectos",
  description: "Proyectos personales y objetivos a largo plazo.",
  nav: { main: "Proyectos" },
});
Object.assign(es.modules.calendar, {
  label: "Calendario",
  description: "Eventos y planificación temporal.",
  nav: { main: "Calendario" },
});
Object.assign(es.modules.profile, {
  label: "Perfil",
  description: "Datos personales y preferencias de cuenta.",
  nav: { main: "Perfil" },
});
Object.assign(es.modules.settings, {
  alwaysActive: "Siempre activo",
  enabled: "Activado",
  disabled: "Desactivado",
});
Object.assign(es.settings, {
  title: "Configuración",
  languageHeading: "Idioma",
  languageDescription: "Elige el idioma de visualización del panel.",
  modulesHeading: "Módulos",
  modulesDescription:
    "Activa o desactiva las secciones del panel. Los cambios se guardan en este dispositivo.",
});
Object.assign(es.pages.overview, {
  title: "Inicio",
  sampleDataNote:
    "Los indicadores siguientes son datos de ejemplo hasta que cada módulo tenga su propio panel.",
});
Object.assign(es.pages.employment, {
  title: "Empleo",
  description: "Seguimiento de empleos, contratos y trayectoria profesional.",
});
Object.assign(es.pages.finances, {
  title: "Finanzas",
  description: "Ingresos, gastos y planificación financiera.",
});
Object.assign(es.pages.projects, {
  title: "Proyectos",
  description: "Proyectos personales y objetivos a largo plazo.",
});
es.pages.calendar.title = "Calendario";
es.pages.profile.title = "Perfil";
es.pages.settings.title = "Configuración";
es.pages.formElements.title = "Elementos de formulario";
Object.assign(es.pages.lineChart, {
  title: "Gráfico de líneas",
  chartTitle: "Gráfico de líneas 1",
});
Object.assign(es.pages.barChart, {
  title: "Gráfico de barras",
  chartTitle: "Gráfico de barras 1",
});
Object.assign(es.pages.basicTables, {
  title: "Tablas básicas",
  tableTitle: "Tabla básica 1",
});
Object.assign(es.pages.blank, {
  title: "Página en blanco",
  cardTitle: "Título de la tarjeta",
  cardBody:
    "Empieza a añadir contenido en grids o paneles; también puedes usar distintas combinaciones. Revisa el panel y otras páginas.",
});
es.pages.buttons.title = "Botones";
es.pages.images.title = "Imágenes";
es.pages.modals.title = "Modales";
es.pages.alerts.title = "Alertas";
es.pages.avatars.title = "Avatares";
es.pages.badge.title = "Insignias";
es.pages.videos.title = "Vídeos";
es.pages.signIn.title = "Iniciar sesión";
es.pages.signUp.title = "Registro";
es.errors.notFoundMessage = "¡No encontramos la página que buscas!";
es.errors.backHome = "Volver al inicio";
Object.assign(es.common.actions, {
  close: "Cerrar",
  saveChanges: "Guardar cambios",
  filter: "Filtrar",
  viewMore: "Ver más",
  delete: "Eliminar",
  openModal: "Abrir modal",
  edit: "Editar",
  or: "O",
});
es.common.breadcrumb.home = "Inicio";
Object.assign(es.common.chartPeriod, {
  monthly: "Mensual",
  quarterly: "Trimestral",
  annually: "Anual",
});
Object.assign(es.common.months, {
  jan: "Ene",
  feb: "Feb",
  mar: "Mar",
  apr: "Abr",
  may: "May",
  jun: "Jun",
  jul: "Jul",
  aug: "Ago",
  sep: "Sep",
  oct: "Oct",
  nov: "Nov",
  dec: "Dic",
});
Object.assign(es.layout.header, {
  toggleSidebar: "Alternar barra lateral",
  searchPlaceholder: "Buscar o escribir un comando...",
});
Object.assign(es.auth.common, {
  backToDashboard: "Volver al panel",
  or: "O",
});
Object.assign(es.auth.signIn, {
  title: "Iniciar sesión",
  subtitle: "Introduce tu email y contraseña para iniciar sesión.",
  google: "Iniciar sesión con Google",
  x: "Iniciar sesión con X",
  rememberMe: "Mantener sesión iniciada",
  forgotPassword: "¿Olvidaste la contraseña?",
  submit: "Iniciar sesión",
  noAccount: "¿No tienes cuenta?",
  link: "Registrarse",
});
Object.assign(es.auth.signUp, {
  title: "Registro",
  subtitle: "Introduce tu email y contraseña para registrarte.",
  google: "Registrarse con Google",
  x: "Registrarse con X",
  termsIntro: "Al crear una cuenta aceptas los",
  terms: "Términos y condiciones",
  privacy: "Política de privacidad",
  submit: "Registrarse",
  hasAccount: "¿Ya tienes cuenta?",
  link: "Iniciar sesión",
  andOur: "y nuestra",
});
Object.assign(es.ecommerce.metrics, {
  customers: "Clientes",
  orders: "Pedidos",
});
Object.assign(es.ecommerce.recentOrders, {
  title: "Pedidos recientes",
  seeAll: "Ver todo",
});
Object.assign(es.ecommerce.recentOrders.columns, {
  products: "Productos",
  category: "Categoría",
  price: "Precio",
  status: "Estado",
});
es.ecommerce.recentOrders.variants = "{count} variantes";
Object.assign(es.ecommerce.orderStatus, {
  delivered: "Entregado",
  pending: "Pendiente",
  canceled: "Cancelado",
});
Object.assign(es.ecommerce.demographic, {
  title: "Demografía de clientes",
  subtitle: "Número de clientes por país",
  customerCount: "{count} clientes",
});
Object.assign(es.ecommerce.monthlySales, { title: "Ventas mensuales" });
Object.assign(es.ecommerce.monthlyTarget, {
  title: "Objetivo mensual",
  subtitle: "Objetivo que has fijado para cada mes",
  progress: "Progreso",
  message:
    "Has ganado $3287 hoy, es más que el mes pasado. ¡Sigue así!",
  stats: { target: "Objetivo", revenue: "Ingresos", today: "Hoy" },
});
Object.assign(es.ecommerce.statistics, {
  title: "Estadísticas",
  subtitle: "Objetivo que has fijado para cada mes",
  dateRangePlaceholder: "Seleccionar rango de fechas",
});
Object.assign(es.ecommerce.charts, { sales: "Ventas", revenue: "Ingresos" });
Object.assign(es.tables.pagination, {
  previous: "Anterior",
  next: "Siguiente",
});
Object.assign(es.header.user, {
  editProfile: "Editar perfil",
  accountSettings: "Configuración de cuenta",
  support: "Soporte",
  signOut: "Cerrar sesión",
});
Object.assign(es.header.notifications, {
  title: "Notificación",
  viewAll: "Ver todas las notificaciones",
});
Object.assign(es.demo.alertsPage, {
  successCard: "Alerta de éxito",
  warningCard: "Alerta de advertencia",
  errorCard: "Alerta de error",
  infoCard: "Alerta informativa",
  successTitle: "Mensaje de éxito",
  warningTitle: "Mensaje de advertencia",
  errorTitle: "Mensaje de error",
  infoTitle: "Mensaje informativo",
  cautionMessage: "Ten cuidado al realizar esta acción.",
});
Object.assign(es.demo.images, {
  responsive: "Imagen responsive",
  grid2: "Imagen en grid de 2",
  grid3: "Imagen en grid de 3",
});
Object.assign(es.demo.avatars, {
  default: "Avatar por defecto",
  online: "Avatar con indicador en línea",
  offline: "Avatar con indicador desconectado",
  busy: "Avatar con indicador ocupado",
});
Object.assign(es.demo.badgePage, {
  lightBg: "Con fondo claro",
  solidBg: "Con fondo sólido",
  lightLeftIcon: "Fondo claro con icono izquierdo",
  solidLeftIcon: "Fondo sólido con icono izquierdo",
  lightRightIcon: "Fondo claro con icono derecho",
  solidRightIcon: "Fondo sólido con icono derecho",
});
Object.assign(es.demo.badgePage.colors, {
  primary: "Primario",
  success: "Éxito",
  error: "Error",
  warning: "Advertencia",
  info: "Info",
  light: "Claro",
  dark: "Oscuro",
});
Object.assign(es.demo.buttons, {
  buttonText: "Texto del botón",
  primary: "Botón primario",
  primaryLeftIcon: "Botón primario con icono izquierdo",
  primaryRightIcon: "Botón primario con icono derecho",
  secondary: "Botón secundario",
  outlineLeftIcon: "Botón outline con icono izquierdo",
  outlineRightIcon: "Botón outline con icono derecho",
});

fs.mkdirSync(messagesDir, { recursive: true });
fs.writeFileSync(
  path.join(messagesDir, "en.json"),
  JSON.stringify(en, null, 2)
);
fs.writeFileSync(
  path.join(messagesDir, "es.json"),
  JSON.stringify(es, null, 2)
);
console.log("Generated messages/en.json and messages/es.json");
