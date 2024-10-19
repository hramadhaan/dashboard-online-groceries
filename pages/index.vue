<template>
  <div class="flex flex-col items-start w-full">
    <Separator class="my-5" />
    <!-- Index Tab -->
    <CustomSectionHeader title="Dashboard">
      <ButtonWithPopover>
        <template #trigger>
          <Button variant="outline" size="sm"
            ><FilterIcon class="size-4 mr-2" />Filter</Button
          >
        </template>
        <template #content>
          <div>
            <p>Hello World</p>
          </div>
        </template>
      </ButtonWithPopover>
      <ButtonWithPopover>
        <template #trigger>
          <Button variant="default" size="sm"><DownloadIcon class="size-4 mr-2" />Download</Button>
        </template>
        <template> </template>
      </ButtonWithPopover>
    </CustomSectionHeader>

    <!-- Grid -->
    <div class="grid grid-cols-3 gap-4 w-full mt-8">
      <!-- Grid Item -->
      <div class="border rounded-md p-4 flex flex-col items-start">
        <div class="p-2 border rounded-md">
          <BanknoteIcon class="size-4 text-[#5056F2]" />
        </div>
        <div class="mt-4 flex flex-col items-start w-full">
          <p class="font-thin text-sm">Total Sales</p>
          <div class="flex flex-row items-center w-full justify-between">
            <span class="font-semibold">Rp. 1.000.000</span>
            <ArrowUpRightIcon class="size-4 text-[#5056F2]" />
          </div>
        </div>
        <Separator class="my-2" />
        <div class="w-full flex flex-row items-center justify-between">
          <div class="flex flex-row items-center gap-x-1">
            <ArrowUpIcon class="size-4 text-green-500" />
            <span class="text-green-500 text-sm">50%</span>
          </div>
          <span class="text-xs font-normal">from last period</span>
        </div>
      </div>

      <!-- Grid Item -->
      <div class="border rounded-md p-4 flex flex-col items-start">
        <div class="p-2 border rounded-md">
          <BanknoteIcon class="size-4 text-[#5056F2]" />
        </div>
        <div class="mt-4 flex flex-col items-start w-full">
          <p class="font-thin text-sm">Total Sales</p>
          <div class="flex flex-row items-center w-full justify-between">
            <span class="font-semibold">Rp. 1.000.000</span>
            <ArrowUpRightIcon class="size-4 text-[#5056F2]" />
          </div>
        </div>
        <Separator class="my-2" />
        <div class="w-full flex flex-row items-center justify-between">
          <div class="flex flex-row items-center gap-x-1">
            <ArrowUpIcon class="size-4 text-green-500" />
            <span class="text-green-500 text-sm">50%</span>
          </div>
          <span class="text-xs font-normal">from last period</span>
        </div>
      </div>

      <!-- Grid Item -->
      <div class="border rounded-md p-4 flex flex-col items-start">
        <div class="p-2 border rounded-md">
          <BanknoteIcon class="size-4 text-[#5056F2]" />
        </div>
        <div class="mt-4 flex flex-col items-start w-full">
          <p class="font-thin text-sm">Total Sales</p>
          <div class="flex flex-row items-center w-full justify-between">
            <span class="font-semibold">Rp. 1.000.000</span>
            <ArrowUpRightIcon class="size-4 text-[#5056F2]" />
          </div>
        </div>
        <Separator class="my-2" />
        <div class="w-full flex flex-row items-center justify-between">
          <div class="flex flex-row items-center gap-x-1">
            <ArrowUpIcon class="size-4 text-green-500" />
            <span class="text-green-500 text-sm">50%</span>
          </div>
          <span class="text-xs font-normal">from last period</span>
        </div>
      </div>
    </div>

    <!-- Grid 2 -->
    <div class="grid grid-cols-3 gap-4 w-full mt-8">
      <div
        class="col-span-2 p-2 border rounded-md flex flex-col items-start w-full"
      >
        <div class="flex flex-row items-center justify-between w-full">
          <p class="font-bold">Sales History</p>
          <div
            class="border p-2 rounded-md flex flex-row items-center gap-x-1 cursor-pointer"
          >
            <span class="text-sm font-medium">30 days</span>
            <ChevronDownIcon class="size-4" />
          </div>
        </div>
        <div class="mt-4 w-full">
          <BarChart
            :data="data"
            index="name"
            show-grid-line
            :categories="['total', 'predicted']"
            :y-formatter="
              (tick, i) => {
                return typeof tick === 'number'
                  ? `$ ${new Intl.NumberFormat('us').format(tick).toString()}`
                  : '';
              }
            "
          />
        </div>
      </div>
      <div class="p-2 border rounded-md flex flex-col items-start w-full">
        <p class="font-bold">Recent Transactions</p>
        <div
          class="flex flex-col items-start w-full mt-4 gap-y-4 overflow-y-auto h-96"
        >
          <!-- Trx Items -->
          <div class="flex flex-row items-center justify-between w-full">
            <div class="flex flex-row items-center gap-x-2">
              <div class="w-10 h-10 rounded-md bg-[#5056F2]" />
              <div class="flex flex-col items-start">
                <p class="text-sm font-bold">John Doe</p>
                <p class="text-xs font-normal">Rp. 1.000.000</p>
              </div>
            </div>

            <div class="flex flex-col items-end">
              <p class="text-sm font-bold">Completed</p>
              <p class="text-xs font-normal">ODI123455664</p>
            </div>
          </div>
          <div class="flex flex-row items-center justify-between w-full">
            <div class="flex flex-row items-center gap-x-2">
              <div class="w-10 h-10 rounded-md bg-[#5056F2]" />
              <div class="flex flex-col items-start">
                <p class="text-sm font-bold">John Doe</p>
                <p class="text-xs font-normal">Rp. 1.000.000</p>
              </div>
            </div>

            <div class="flex flex-col items-end">
              <p class="text-sm font-bold">Completed</p>
              <p class="text-xs font-normal">ODI123455664</p>
            </div>
          </div>
          <div class="flex flex-row items-center justify-between w-full">
            <div class="flex flex-row items-center gap-x-2">
              <div class="w-10 h-10 rounded-md bg-[#5056F2]" />
              <div class="flex flex-col items-start">
                <p class="text-sm font-bold">John Doe</p>
                <p class="text-xs font-normal">Rp. 1.000.000</p>
              </div>
            </div>

            <div class="flex flex-col items-end">
              <p class="text-sm font-bold">Completed</p>
              <p class="text-xs font-normal">ODI123455664</p>
            </div>
          </div>
          <div class="flex flex-row items-center justify-between w-full">
            <div class="flex flex-row items-center gap-x-2">
              <div class="w-10 h-10 rounded-md bg-[#5056F2]" />
              <div class="flex flex-col items-start">
                <p class="text-sm font-bold">John Doe</p>
                <p class="text-xs font-normal">Rp. 1.000.000</p>
              </div>
            </div>

            <div class="flex flex-col items-end">
              <p class="text-sm font-bold">Completed</p>
              <p class="text-xs font-normal">ODI123455664</p>
            </div>
          </div>
          <div class="flex flex-row items-center justify-between w-full">
            <div class="flex flex-row items-center gap-x-2">
              <div class="w-10 h-10 rounded-md bg-[#5056F2]" />
              <div class="flex flex-col items-start">
                <p class="text-sm font-bold">John Doe</p>
                <p class="text-xs font-normal">Rp. 1.000.000</p>
              </div>
            </div>

            <div class="flex flex-col items-end">
              <p class="text-sm font-bold">Completed</p>
              <p class="text-xs font-normal">ODI123455664</p>
            </div>
          </div>
          <div class="flex flex-row items-center justify-between w-full">
            <div class="flex flex-row items-center gap-x-2">
              <div class="w-10 h-10 rounded-md bg-[#5056F2]" />
              <div class="flex flex-col items-start">
                <p class="text-sm font-bold">John Doe</p>
                <p class="text-xs font-normal">Rp. 1.000.000</p>
              </div>
            </div>

            <div class="flex flex-col items-end">
              <p class="text-sm font-bold">Completed</p>
              <p class="text-xs font-normal">ODI123455664</p>
            </div>
          </div>
          <div class="flex flex-row items-center justify-between w-full">
            <div class="flex flex-row items-center gap-x-2">
              <div class="w-10 h-10 rounded-md bg-[#5056F2]" />
              <div class="flex flex-col items-start">
                <p class="text-sm font-bold">John Doe</p>
                <p class="text-xs font-normal">Rp. 1.000.000</p>
              </div>
            </div>

            <div class="flex flex-col items-end">
              <p class="text-sm font-bold">Completed</p>
              <p class="text-xs font-normal">ODI123455664</p>
            </div>
          </div>
          <div class="flex flex-row items-center justify-between w-full">
            <div class="flex flex-row items-center gap-x-2">
              <div class="w-10 h-10 rounded-md bg-[#5056F2]" />
              <div class="flex flex-col items-start">
                <p class="text-sm font-bold">John Doe</p>
                <p class="text-xs font-normal">Rp. 1.000.000</p>
              </div>
            </div>

            <div class="flex flex-col items-end">
              <p class="text-sm font-bold">Completed</p>
              <p class="text-xs font-normal">ODI123455664</p>
            </div>
          </div>
          <div class="flex flex-row items-center justify-between w-full">
            <div class="flex flex-row items-center gap-x-2">
              <div class="w-10 h-10 rounded-md bg-[#5056F2]" />
              <div class="flex flex-col items-start">
                <p class="text-sm font-bold">John Doe</p>
                <p class="text-xs font-normal">Rp. 1.000.000</p>
              </div>
            </div>

            <div class="flex flex-col items-end">
              <p class="text-sm font-bold">Completed</p>
              <p class="text-xs font-normal">ODI123455664</p>
            </div>
          </div>
          <div class="flex flex-row items-center justify-between w-full">
            <div class="flex flex-row items-center gap-x-2">
              <div class="w-10 h-10 rounded-md bg-[#5056F2]" />
              <div class="flex flex-col items-start">
                <p class="text-sm font-bold">John Doe</p>
                <p class="text-xs font-normal">Rp. 1.000.000</p>
              </div>
            </div>

            <div class="flex flex-col items-end">
              <p class="text-sm font-bold">Completed</p>
              <p class="text-xs font-normal">ODI123455664</p>
            </div>
          </div>
          <div class="flex flex-row items-center justify-between w-full">
            <div class="flex flex-row items-center gap-x-2">
              <div class="w-10 h-10 rounded-md bg-[#5056F2]" />
              <div class="flex flex-col items-start">
                <p class="text-sm font-bold">John Doe</p>
                <p class="text-xs font-normal">Rp. 1.000.000</p>
              </div>
            </div>

            <div class="flex flex-col items-end">
              <p class="text-sm font-bold">Completed</p>
              <p class="text-xs font-normal">ODI123455664</p>
            </div>
          </div>
        </div>
        <div
          class="w-full items-center flex justify-center mt-2 cursor-pointer"
        >
          <span class="text-sm font-bold">See More</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  FilterIcon,
  DownloadIcon,
  CalendarIcon,
  BanknoteIcon,
  ArrowUpRightIcon,
  ArrowUpIcon,
  ChevronDownIcon,
} from "lucide-vue-next";
import Button from "@/components/ui/button/Button.vue";
import Separator from "~/components/ui/separator/Separator.vue";
import CustomSectionHeader from "~/components/CustomSectionHeader.vue";

const data = [
  {
    name: "Jan",
    total: Math.floor(Math.random() * 2000) + 500,
    predicted: Math.floor(Math.random() * 2000) + 500,
  },
  {
    name: "Feb",
    total: Math.floor(Math.random() * 2000) + 500,
    predicted: Math.floor(Math.random() * 2000) + 500,
  },
  {
    name: "Mar",
    total: Math.floor(Math.random() * 2000) + 500,
    predicted: Math.floor(Math.random() * 2000) + 500,
  },
  {
    name: "Apr",
    total: Math.floor(Math.random() * 2000) + 500,
    predicted: Math.floor(Math.random() * 2000) + 500,
  },
  {
    name: "May",
    total: Math.floor(Math.random() * 2000) + 500,
    predicted: Math.floor(Math.random() * 2000) + 500,
  },
  {
    name: "Jun",
    total: Math.floor(Math.random() * 2000) + 500,
    predicted: Math.floor(Math.random() * 2000) + 500,
  },
  {
    name: "Jul",
    total: Math.floor(Math.random() * 2000) + 500,
    predicted: Math.floor(Math.random() * 2000) + 500,
  },
];
</script>

<style></style>
