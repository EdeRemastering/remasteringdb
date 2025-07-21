"use client"

import * as React from "react"
import {
  Database,
  Folder,
  Users,
  Settings,
  HelpCircle,
  Search,
  Table,
  Link2,
  FileBarChart2,
  LayoutDashboard,
  BarChart2,
  Server,
  Key,
  Shield,
  RefreshCcw,
  ArrowLeftRight,
  FileDatabase,
  PlusCircle,
  FileText,
  User,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  CircleCheck,
  Loader2,
  TrendingUp,
  TrendingDown,
  Cloud,
  MoreHorizontal,
  Trash2,
  Share2,
  LogOut,
  Mail,
  PanelLeft,
  Dot,
} from "lucide-react"

import { NavDocuments } from "@/components/nav-documents"
import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "Workspaces",
      url: "/dashboard/workspaces",
      icon: Folder,
    },
    {
      title: "Projects",
      url: "/dashboard/projects",
      icon: Folder,
    },
    {
      title: "Databases",
      url: "/dashboard/databases",
      icon: Database,
    },
    {
      title: "Tables",
      url: "/dashboard/tables",
      icon: Table,
    },
    {
      title: "Connections",
      url: "/dashboard/connections",
      icon: Link2,
    },
    {
      title: "Analytics",
      url: "/dashboard/analytics",
      icon: BarChart2,
    },
    {
      title: "Team",
      url: "/dashboard/team",
      icon: Users,
    },
  ],
  navClouds: [
    {
      title: "Database Management",
      icon: Server,
      isActive: true,
      url: "#",
      items: [
        {
          title: "Active Databases",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Security",
      icon: Shield,
      url: "#",
      items: [
        {
          title: "Access Control",
          url: "#",
        },
        {
          title: "Audit Logs",
          url: "#",
        },
      ],
    },
    {
      title: "Backup & Recovery",
      icon: Cloud, // Cloud como ejemplo para backup
      url: "#",
      items: [
        {
          title: "Backup Schedules",
          url: "#",
        },
        {
          title: "Recovery Points",
          url: "#",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "/dashboard/settings",
      icon: Settings,
    },
    {
      title: "API Keys",
      url: "/dashboard/api-keys",
      icon: Key,
    },
    {
      title: "Get Help",
      url: "/dashboard/get-help",
      icon: HelpCircle,
    },
    {
      title: "Search",
      url: "/dashboard/search",
      icon: Search,
    },
  ],
  documents: [
    {
      name: "Database Schema",
      url: "#",
      icon: Database,
    },
    {
      name: "Connection Logs",
      url: "#",
      icon: Link2,
    },
    {
      name: "Performance Reports",
      url: "#",
      icon: FileBarChart2,
    },
    {
      name: "Sync Status",
      url: "#",
      icon: RefreshCcw,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="#">
                <PanelLeft className="!size-5" />
                <span className="text-base font-semibold">RemasteringDB</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavDocuments items={data.documents} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}

