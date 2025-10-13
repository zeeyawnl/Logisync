import { UserButton } from "@stackframe/stack";
import { BarChart3,  Database, Grid3x3, Package, Plus, RefreshCcw, Settings } from "lucide-react";
import Link from "next/link";

export default function Sidebar({currentPath = "/dashboard"}: {currentPath?: string}) { 

    const navigation = [
        { name: 'Dashboard', href: '/dashboard' , icon: BarChart3, },
        { name: 'Inventory', href: '/inventory' , icon: Package, },
        { name: 'Add Products', href: '/add-product' , icon: Plus,  },
        { name: 'Settings', href: '/settings' , icon: Settings,  },

    ];
  return (
    <div className="fixed left-0 top-0 bg-gray-800 text-white w-64 h-full p-6 z-10 min-h-screen">
    <div className="mb-8">
        <div className="flex items-center space-x-2 mb-4">
            <Database className="w-7 h-7"/>
            <span className="text-2xl font-weight-600 pl-3 uppercase tracking-wide">Logisync</span>
        </div>
        <nav className="space-y-1 pt-2 ">
            <div className="text-sm font-weight-500 text-gray-400 uppercase">
                Inventory
            </div>
            {navigation.map((item, key) => {
                const ItemComponent = item.icon;
                const isActive = item.href === currentPath;
                return (
                    <Link href={item.href} key={key} className={`flex items-center space-x-4 p-2 rounded-md hover:bg-gray-700 transition-colors duration-200 ${isActive ? 'bg-gray-700' : 'text-gray-300'}`}>
                        <ItemComponent className="w-5 h-5"/>
                       <span>{item.name}</span>
                    </Link>

                )
            })}
        </nav>
            <div className="absolute bottom-2 left-0 right-0 p-6 border-t border-gray-800">
                <div className="flex item-center justify-between">
                    <UserButton showUserInfo/>

                </div>
            </div>
        </div>
    </div>
  );
}
