interface UserCardData {
  title: string;
  value: number;
  description: string;
  icon: string;
}

interface UserStatusProperties {
  active: boolean;
  inActive: boolean;
}

interface UserDataProperties {
  avatar: string;
  fullName: string;
  email: string;
  phone: string;
  date: string;
  status: UserStatusProperties;
}

export const userCardData: UserCardData[] = [
  {
    title: "Total Users",
    value: 4000,
    description: "+10% from last month",
    icon: `/admin-dashboard/icons/user.svg`,
  },
  {
    title: "Active Users",
    value: 1500,
    description: "+20% from last month",
    icon: `/admin-dashboard/icons/box.svg`,
  },
  {
    title: "Deleted Users",
    value: 2500,
    description: "+150% from last month",
    icon: `/admin-dashboard/icons/arrowUp.svg`,
  },
];

export const userData: UserDataProperties[] = [
  {
    avatar: "/admin-dashboard/images/user-1.png",
    fullName: "Afolabi Olanipekun",
    email: "Afolabiolanipekun@gmail.com",
    phone: "09123456789",
    date: "02/07/2024",
    status: {
      active: true,
      inActive: false,
    },
  },

  {
    avatar: "/admin-dashboard/images/user-2.png",
    fullName: "Adetunji Oluwaseun",
    email: "Afolabiolanipekun@gmail.com",
    phone: "09123456789",
    date: "02/07/2024",
    status: {
      active: false,
      inActive: true,
    },
  },

  {
    avatar: "/admin-dashboard/images/user-3.png",
    fullName: "Ifunanya Adedapo",
    email: "Afolabiolanipekun@gmail.com",
    phone: "09123456789",
    date: "02/07/2024",
    status: {
      active: false,
      inActive: true,
    },
  },

  {
    avatar: "/admin-dashboard/images/user-4.png",
    fullName: "Busola Igwe",
    email: "Afolabiolanipekun@gmail.com",
    phone: "09123456789",
    date: "02/07/2024",
    status: {
      active: false,
      inActive: true,
    },
  },

  {
    avatar: "/admin-dashboard/images/user-5.png",
    fullName: "Moshood Adedayo",
    email: "Afolabiolanipekun@gmail.com",
    phone: "09123456789",
    date: "02/07/2024",
    status: {
      active: false,
      inActive: true,
    },
  },
];
