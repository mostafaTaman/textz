import DashboardNav from "@/components/navigation/DashboardNav";
import type { Metadata } from "next";
import UserList from "./components/UserList";
import { getUserList } from "@/actions/users";

export const metadata: Metadata = {
    title: "TextZ",
    description: "The best chat app on the internet.",
};

interface props {
    children: React.ReactNode;
}

const DashboardLayout: React.FC<props> = async ({ children }) => {
    const users = await getUserList();

    return (
        <DashboardNav>
            <div className="h-full">
                <UserList users={users} />
                {children}
            </div>
        </DashboardNav>
    );
};

export default DashboardLayout;