<template>
  <div v-if="visible" class="dialog-overlay">
    <div class="dialog">
      <Command theme="algolia">
        <Command.Input placeholder="Type a command or search..." />
        <Command.List>
          <Command.Empty>No results found.</Command.Empty>

          <Command.Group heading="Letters">
            <Command.Item>a</Command.Item>
            <Command.Item>b</Command.Item>
            <Command.Separator />
            <Command.Item>c</Command.Item>
          </Command.Group>

          <Command.Item>Apple</Command.Item>
        </Command.List>
      </Command>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useMagicKeys } from "@vueuse/core";
import { Command } from "vue-command-palette";

const visible = ref(false);
const keys = useMagicKeys();
const CmdK = keys["Meta+K"];

watch(CmdK, (v) => {
  if (v) {
    visible.value = !visible.value;
    console.log("Cmd+K pressed");
  }
});
</script>

<style lang="scss" scoped>
//.dialog-overlay {
//  position: fixed;
//  top: 0;
//  left: 0;
//  width: 100%;
//  height: 100%;
//  background: rgba(0, 0, 0, 0.5);
//  display: flex;
//  justify-content: center;
//  align-items: center;
//  z-index: 1000;
//}
//
//.dialog {
//  background: white;
//  padding: 20px;
//  border-radius: 8px;
//  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//  z-index: 1001;
//}

.algolia {
  [command-root] {
    padding: 8px;
  }

  [command-input] {
    font-family: var(--font-sans);
    width: 100%;
    font-size: 18px;
    padding: 12px;
    outline: none;
    background: var(--bg);
    color: var(--gray12);
    border-bottom: 1px solid var(--gray6);
    border-radius: 4px;
    caret-color: var(--vcp-c-brand);
    margin: 0;
    border: 1px solid var(--vcp-c-brand);

    &::placeholder {
      color: var(--gray9);
    }
  }

  [command-list] {
    height: var(--command-list-height);
    max-height: 360px;
    overflow: auto;
    overscroll-behavior: contain;
    transition: 100ms ease;
    transition-property: height;
  }

  [command-item] {
    position: relative;
    content-visibility: auto;
    cursor: pointer;
    height: 56px;
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 0px 16px;
    color: var(--gray12);
    user-select: none;
    will-change: background, color;
    transition: all 150ms ease;
    transition-property: none;
    border-radius: 4px;
    margin-top: 4px;

    &:first-child {
      margin-top: 0px;
    }

    &[aria-selected="true"],
    &:hover {
      background: var(--vcp-c-brand);
      color: #fff;

      svg {
        color: #fff;
      }

      [command-linear-shortcuts] {
        display: flex;
        margin-left: auto;
        gap: 8px;

        kbd {
          font-family: var(--font-sans);
          font-size: 13px;
          color: var(--gray11);
        }
      }
    }

    &[aria-disabled="true"] {
      color: var(--gray8);
      cursor: not-allowed;
    }

    &:active {
      transition-property: background;
      background: var(--gray4);
    }

    svg {
      width: 16px;
      height: 16px;
      color: var(--gray10);
    }
  }

  [command-empty=""] {
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 64px;
    white-space: pre-wrap;
    color: var(--gray11);
  }

  [command-dialog-mask] {
    background-color: rgba(75, 75, 75, 0.8);
  }

  [command-dialog-header] {
    padding: 12px;
  }

  [command-dialog-body] {
    padding: 0 12px 12px;
  }

  [command-dialog-footer] {
    align-items: center;
    border-radius: 0 0 8px 8px;
    box-shadow:
      0 -1px 0 0 #e0e3e8,
      0 -3px 6px 0 rgba(69, 98, 155, 0.12);
    display: flex;
    flex-direction: row-reverse;
    flex-shrink: 0;
    height: 44px;
    justify-content: space-between;
    padding: 0 12px;
    position: relative;
    user-select: none;
    width: 100%;
    z-index: 300;
  }

  [command-group-heading] {
    color: var(--vcp-c-brand);
    font-size: 0.85em;
    font-weight: 600;
    line-height: 32px;
    margin: 0 -4px;
    padding: 8px 4px 0;
    top: 0;
    z-index: 10;
    width: 100%;
  }

  .command-palette-commands {
    color: var(--docsearch-muted-color);
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      display: flex;
      align-items: center;
    }
    li:not(:last-of-type) {
      margin-right: 0.8em;
    }
  }

  .command-palette-logo {
    a {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    svg {
      height: 24px;
      width: 24px;
    }
  }

  .command-palette-commands-key {
    align-items: center;
    background: var(--gray3);
    border-radius: 2px;
    display: flex;
    height: 18px;
    justify-content: center;
    margin-right: 0.4em;
    padding: 0 0 1px;
    color: var(--gray11);
    border: 0;
    width: 20px;
  }
}

.dark .algolia [command-dialog-footer] {
  box-shadow: none;
}

// transition for command-dialog
.command-dialog-enter-active,
.command-dialog-leave-active {
  transition: opacity 0.2s ease-in-out;
}

.command-dialog-enter-from,
.command-dialog-leave-to {
  opacity: 0;
}

.command-dialog-enter-active {
  transition-duration: 0.5s;
}

.command-dialog-enter-active [command-dialog-wrapper] {
  transition-delay: 0.2s;
}

.command-dialog-enter-from [command-dialog-wrapper],
.command-dialog-leave-to [command-dialog-wrapper] {
  opacity: 0;
  transform: translateY(10px) scale(0.95);
}

.command-dialog-enter-active [command-dialog-wrapper] {
  transition: transform ease-out 0.3s;
}

.command-dialog-enter-to [command-dialog-wrapper],
.command-dialog-leave-from [command-dialog-wrapper] {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.command-dialog-leave-active [command-dialog-wrapper] {
  transition: transfrom ease-in 0.2s;
}
</style>
