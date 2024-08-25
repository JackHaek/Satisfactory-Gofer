// import {
//     NavigationMenu,
//     NavigationMenuContent,
//     NavigationMenuIndicator,
//     NavigationMenuItem,
//     NavigationMenuLink,
//     NavigationMenuList,
//     NavigationMenuTrigger,
//     NavigationMenuViewport,
// } from "@/components/ui/navigation-menu"
//
//
// function NavBar() {
//     return (
//         <NavigationMenu>
//             <NavigationMenuList>
//                 <NavigationMenuItem>Summary</NavigationMenuItem>
//             </NavigationMenuList>
//         </NavigationMenu>
//     )
// }
//
// export default NavBar

"use client"

import * as React from "react"
import { Link } from 'react-router-dom'

import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

export default function NavigationMenuDemo() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    {/*TODO: Add Linking around the navigation menu link*/}
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Dashboard
                    </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Map View
                    </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Power Planner
                    </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Production Planner
                    </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Statistics
                    </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Settings
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}


