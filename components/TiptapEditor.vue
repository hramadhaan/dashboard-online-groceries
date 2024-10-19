<template>
  <div class="w-full">
    <div
      v-if="editor"
      class="flex flex-row items-center gap-2 flex-wrap border p-3 w-full"
    >
      <Button
        @click="editor.chain().focus().toggleBold().run()"
        :disabled="!editor.can().chain().focus().toggleBold().run()"
        :class="{ 'is-active': editor.isActive('bold') }"
      >
        <BoldIcon class="size-5" />
      </Button>
      <Button
        @click="editor.chain().focus().toggleItalic().run()"
        :disabled="!editor.can().chain().focus().toggleItalic().run()"
        :class="{ 'is-active': editor.isActive('italic') }"
      >
        <ItalicIcon class="size-5" />
      </Button>
      <Button
        @click="editor.chain().focus().toggleStrike().run()"
        :disabled="!editor.can().chain().focus().toggleStrike().run()"
        :class="{ 'is-active': editor.isActive('strike') }"
      >
        <StrikethroughIcon class="size-5" />
      </Button>
      <Button
        @click="editor.chain().focus().setParagraph().run()"
        :class="{ 'is-active': editor.isActive('paragraph') }"
      >
        P
      </Button>
      <Button
        @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
        :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }"
      >
        <Heading1Icon class="size-5" />
      </Button>
      <Button
        @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
        :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }"
      >
        <Heading2Icon class="size-5" />
      </Button>
      <Button
        @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
        :class="{ 'is-active': editor.isActive('heading', { level: 3 }) }"
      >
        <Heading3Icon class="size-5" />
      </Button>
      <Button
        @click="editor.chain().focus().toggleHeading({ level: 4 }).run()"
        :class="{ 'is-active': editor.isActive('heading', { level: 4 }) }"
      >
        <Heading4Icon class="size-5" />
      </Button>
      <Button
        @click="editor.chain().focus().toggleHeading({ level: 5 }).run()"
        :class="{ 'is-active': editor.isActive('heading', { level: 5 }) }"
      >
        <Heading5Icon class="size-5" />
      </Button>
      <Button
        @click="editor.chain().focus().toggleHeading({ level: 6 }).run()"
        :class="{ 'is-active': editor.isActive('heading', { level: 6 }) }"
      >
        <Heading6Icon class="size-5" />
      </Button>
      <Button
        @click="editor.chain().focus().toggleBulletList().run()"
        :class="{ 'is-active': editor.isActive('bulletList') }"
      >
        <ListIcon class="size-5" />
      </Button>
      <Button
        @click="editor.chain().focus().toggleOrderedList().run()"
        :class="{ 'is-active': editor.isActive('orderedList') }"
      >
        <ListOrderedIcon class="size-5" />
      </Button>
      <Button
        @click="editor.chain().focus().toggleBlockquote().run()"
        :class="{ 'is-active': editor.isActive('blockquote') }"
      >
        <QuoteIcon class="size-5" />
      </Button>
      <Button @click="editor.chain().focus().setHardBreak().run()">
        <WrapTextIcon class="size-5" />
      </Button>
      <Button
        @click="editor.chain().focus().undo().run()"
        :disabled="!editor.can().chain().focus().undo().run()"
      >
        <UndoIcon class="size-5" />
      </Button>
      <Button
        @click="editor.chain().focus().redo().run()"
        :disabled="!editor.can().chain().focus().redo().run()"
      >
        <RedoIcon class="size-5" />
      </Button>
    </div>
    <div class="w-full mt-4">
      <TiptapEditorContent :editor="editor" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import Placeholder from "@tiptap/extension-placeholder";
import {
  BoldIcon,
  ItalicIcon,
  StrikethroughIcon,
  Heading1Icon,
  Heading2Icon,
  Heading3Icon,
  Heading4Icon,
  Heading5Icon,
  Heading6Icon,
  ListOrderedIcon,
  ListIcon,
  QuoteIcon,
  WrapTextIcon,
  UndoIcon,
  RedoIcon,
} from "lucide-vue-next";

// const model = defineModel();
const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  }
})
const emit = defineEmits(['update:modelValue'])

const editor = useEditor({
  content: "<p>Editor Value</p>",
  extensions: [
    TiptapStarterKit,
    Placeholder.configure({
      placeholder: "Write something ...",
    }),
  ],
  editorProps: {
    attributes: {
      class:
        "prose focus:outline-none border p-4 rounded-md !w-full",
    },
  },
  onUpdate: (change) => {
    const html = change.editor.getHTML()
    emit('update:modelValue', html)
  },
});

watch(() => props.modelValue, (newValue) => {
  unref(editor).commands?.setContent(newValue)
})

onBeforeUnmount(() => {
  unref(editor).destroy();
});
</script>

<style></style>
