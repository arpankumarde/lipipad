import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import DashboardHeader from "@/components/dashboard/dashboard-header";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarCollapseButton,
} from "@/components/ui/sidebar";
import { BookmarkIcon, HomeIcon, SettingsIcon } from "lucide-react";
import Link from "next/link";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Redirect if no user
  if (!user) {
    redirect("/auth/login");
  }

  return (
    <div className="flex h-screen flex-col">
      <DashboardHeader user={user} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar defaultCollapsed={false} collapsible={true}>
          <SidebarHeader>
            <h2 className="text-md font-semibold">Navigation</h2>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              <SidebarMenuButton asChild isActive={true}>
                <Link href="/dashboard">
                  <HomeIcon className="h-4 w-4" />
                  <span>Dashboard</span>
                </Link>
              </SidebarMenuButton>
              <SidebarMenuButton asChild>
                <Link href="/dashboard/notes">
                  <BookmarkIcon className="h-4 w-4" />
                  <span>Notes</span>
                </Link>
              </SidebarMenuButton>
              <SidebarMenuButton asChild>
                <Link href="/dashboard/settings">
                  <SettingsIcon className="h-4 w-4" />
                  <span>Settings</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenu>
          </SidebarContent>
          <SidebarCollapseButton />
        </Sidebar>
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  );
}
