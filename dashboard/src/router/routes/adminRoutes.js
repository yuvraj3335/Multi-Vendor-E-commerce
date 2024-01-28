import { lazy } from 'react'
const SellerDetails = lazy(() => import("../../views/admin/SellerDetails"))
const DeactiveSellers = lazy(() => import("../../views/admin/DeactiveSellers"))
const SellerRequest = lazy(() => import("../../views/admin/SellerRequest"))
const AdminDashboard = lazy(() => import("../../views/admin/AdminDashboard"))
const Orders = lazy(() => import("../../views/admin/Orders"))
const Category = lazy(() => import("../../views/admin/Category"))
const Sellers = lazy(() => import("../../views/admin/Sellers"))
const PaymentRequest = lazy(() => import("../../views/admin/PaymentRequest"))
const ChatSeller = lazy(() => import("../../views/admin/ChatSeller"))
const OrderDetails = lazy(() => import("../../views/admin/OrderDetails"))
export const adminRoutes = [
    {
        path: 'admin/dashboard',
        element: <AdminDashboard />,
        role: 'seller'
    },
    {
        path: 'admin/dashboard/orders',
        element: <Orders />,
        role: 'seller'
    },
    {
        path: 'admin/dashboard/category',
        element: <Category />,
        role: 'seller'
    },
    {
        path: 'admin/dashboard/sellers',
        element: <Sellers />,
        role: 'seller'
    },
    {
        path: 'admin/dashboard/payment-request',
        element: <PaymentRequest />,
        role: 'seller'
    },
    {
        path: 'admin/dashboard/deactive-sellers',
        element: <DeactiveSellers />,
        role: 'seller'
    },
    {
        path: 'admin/dashboard/sellers-request',
        element: <SellerRequest />,
        role: 'seller'
    },
    {
        path: 'admin/dashboard/seller/details/:sellerId',
        element: <SellerDetails />,
        role: 'seller'
    },
    {
        path: 'admin/dashboard/chat-sellers',
        element: <ChatSeller />,
        role: 'seller'
    },
    {
        path: 'admin/dashboard/chat-sellers/:sellerId',
        element: <ChatSeller />,
        role: 'seller'
    },
    {
        path: 'admin/dashboard/order/details/:orderId',
        element: <OrderDetails />,
        role: 'seller'
    }
]