import { Cloud, Database, DatabaseZap, Download, Eye, Shield, Users, Workflow, Zap } from "lucide-react";

export const features = [
  {
    title: "Intuitive Visual Design",
    description: "Create and modify databases schema with a simple and powerful visual interface",
    icon: Database,
  },
  {
    title: "Automatic Generation",
    description: "Generate automatically the SQL and documentation from your visual designs",
    icon: Zap,
  },
  {
    title: "Advanced Security",
    description: "Protect your data with extrem encryption and access control",
    icon: Shield,
  },
  {
    title: "Real Time Collaboration",
    description: "Work with your team in real time and share your designs with your colleagues",
    icon: Users,
  },
  {
    title: "Múltiples Bases de Datos",
    description: "Soporte para PostgreSQL, MySQL, SQLite, MongoDB y muchas más.",
    icon: DatabaseZap,
  },
  {
    title: "Integración Completa",
    description: "Conecta con tus herramientas favoritas a través de nuestra API robusta.",
    icon: Workflow,
  },
  {
    title: "Visualización Avanzada",
    description: "Explora relaciones complejas con gráficos interactivos y mapas de datos.",
    icon: Eye,
  },
  {
    title: "Exportación Flexible",
    description: "Exporta a múltiples formatos: SQL, JSON, PDF, imagen y más.",
    icon: Download,
  },
  {
    title: "Acceso Universal",
    description: "Accede a tus proyectos desde cualquier lugar con sincronización en la nube.",
    icon: Cloud,
  },
];