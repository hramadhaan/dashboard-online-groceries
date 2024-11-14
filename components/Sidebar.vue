<template>
  <nav class="w-2/12 p-3 flex-col flex gap-y-2 border-r">
    <!-- Sidebar Auth -->

    <ButtonWithPopover>
      <template #trigger>
        <div
          class="flex flex-row items-center bg-white p-1 rounded-md hover:drop-shadow-sm justify-between cursor-pointer"
        >
          <div class="flex flex-row items-center gap-x-1">
            <div class="w-10 h-10 rounded-md bg-[#5056F2]"></div>
            <div class="flex flex-col items-start">
              <p class="font-semibold text-sm">Hanif Ramadhan</p>
              <p class="text-xs font-light">haniffbi@gmail.com</p>
            </div>
          </div>
          <ChevronsUpDownIcon class="size-4" />
        </div>
      </template>
      <template #content>
        <div class="grid gap-4">
          <div class="space-y-2">
            <div class="flex flex-row items-center gap-x-3">
              <div class="w-10 h-10 rounded-md bg-green-200"></div>
              <div class="flex flex-col items-start">
                <p class="font-semibold text-sm">Hanif Ramadhan</p>
                <p class="text-xs font-light">haniffbi@gmail.com</p>
              </div>
            </div>
            <div class="mt-4" />
            <ItemListHeader name="Messages">
              <template #icon>
                <MailIcon class="size-4" />
              </template>
            </ItemListHeader>
            <ItemListHeader name="Notifications">
              <template #icon>
                <BellIcon class="size-4" />
              </template>
            </ItemListHeader>
            <ItemListHeader name="Settings">
              <template #icon>
                <SettingsIcon class="size-4" />
              </template>
            </ItemListHeader>
            <ItemListHeader name="Help">
              <template #icon>
                <CircleHelpIcon class="size-4" />
              </template>
            </ItemListHeader>
            <ItemListHeader name="Logout">
              <template #icon>
                <LogOutIcon class="size-4" />
              </template>
            </ItemListHeader>
          </div>
        </div>
      </template>
    </ButtonWithPopover>

    <!-- Search -->
    <div class="w-full mt-3">
      <TextInput
        placeholder="Search..."
        v-model="textRef"
        type="text"
        customClass="pl-10 border border-gray-300"
      >
        <template #icon>
          <Search class="size-5" />
        </template>
      </TextInput>
    </div>

    <!-- First List of Items -->
    <div class="flex flex-col items-start mt-3 gap-y-1">
      <ItemListHeader name="Overview" to="/">
        <template #icon>
          <HomeIcon class="size-4" />
        </template>
      </ItemListHeader>
      <CustomMenuCollapsible>
        <template #title>
          <ItemListHeader name="Master Data" is-collapsible="true">
            <template #icon>
              <DatabaseIcon class="size-4" />
            </template>
          </ItemListHeader>
        </template>
        <template #content>
          <ItemListHeader name="Kategori" to="/category">
            <template #icon>
              <FoldersIcon class="size-4" />
            </template>
          </ItemListHeader>
          <ItemListHeader name="Produk" to="/product">
            <template #icon>
              <Package2Icon class="size-4" />
            </template>
          </ItemListHeader>
          <ItemListHeader name="Stock" to="/stock">
            <template #icon>
              <Layers2Icon class="size-4" />
            </template>
          </ItemListHeader>
          <ItemListHeader name="Pelanggan" to="/customer">
            <template #icon>
              <IdCardIcon class="size-4" />
            </template>
          </ItemListHeader>
          <ItemListHeader name="Supplier" to="/supplier">
            <template #icon>
              <ContainerIcon class="size-4" />
            </template>
          </ItemListHeader>
        </template>
      </CustomMenuCollapsible>
      <CustomMenuCollapsible>
        <template #title>
          <ItemListHeader name="Marketing" is-collapsible="true">
            <template #icon>
              <TicketsIcon class="size-4" />
            </template>
          </ItemListHeader>
        </template>
        <template #content>
          <ItemListHeader name="Diskon" to="/discount">
            <template #icon>
              <PercentIcon class="size-4" />
            </template>
          </ItemListHeader>
          <ItemListHeader name="Voucher">
            <template #icon>
              <TicketSlashIcon class="size-4" />
            </template>
          </ItemListHeader>
          <ItemListHeader name="Promosi">
            <template #icon>
              <HomeIcon class="size-4" />
            </template>
          </ItemListHeader>
        </template>
      </CustomMenuCollapsible>
      <ItemListHeader name="User Management">
        <template #icon>
          <UsersIcon class="size-4" />
        </template>
      </ItemListHeader>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import {
  Search,
  HomeIcon,
  ChevronsUpDownIcon,
  MailIcon,
  BellIcon,
  SettingsIcon,
  CircleHelpIcon,
  LogOutIcon,
  DatabaseIcon,
  FoldersIcon,
  Package2Icon,
  Layers2Icon,
  IdCardIcon,
  ContainerIcon,
  TicketSlashIcon,
  PercentIcon,
  TicketsIcon,
  UsersIcon,
} from "lucide-vue-next";

const textRef = ref("");

const router = useRouter();

const customNavigate = (href: string) => {
  router.push(href);
};
</script>

<style></style>
