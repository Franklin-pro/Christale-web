export  interface KPI {
    label: string;
    value: string | number;
    growth: number;
  }

  export interface RecentActivity {
    customer: string;
    status: 'New Customer' | 'Signed up';
    orderNumber: string;
    timestamp: string;
    amount: number;
  }
  
  export interface ChartData {
    month: string;
    value2021: number;
    value2022: number;
  }
  export interface User {
    id: string;
    name: string;
    avatar: string;
    status: 'online' | 'offline';
    lastMessage?: string;
  }
  
  export interface Message {
    id: string;
    senderId: string;
    content: string;
    timestamp: string;
    seen?: boolean;
  }