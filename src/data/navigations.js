import IconHome from "@/components/icon/navigation/Home.vue";
import IconAsset from "@/components/icon/navigation/Asset.vue";
import IconProject from "@/components/icon/navigation/Project.vue";
import IconOrder from "@/components/icon/navigation/Order.vue";
import IconChat from "@/components/icon/navigation/Chat.vue";

export default [
  {
    title: "Beranda",
    link: "/",
    icon: IconHome,
  },
  {
    title: "Aset",
    link: "/assets",
    icon: IconAsset,
  },
  {
    title: "Proyek",
    link: "/projects",
    icon: IconProject,
  },
  {
    title: "Pesanan",
    link: "/orders",
    icon: IconOrder,
  },
  {
    title: "Chat",
    link: "/chats",
    icon: IconChat,
  },
];
