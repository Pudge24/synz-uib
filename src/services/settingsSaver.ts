import { useAppStore } from "../stores/appStore";
import { useEditorStore } from "../stores/editorStore";
import { saveSettings } from "../settings";

export function saveAllSettings() {
  const app = useAppStore();
  const editor = useEditorStore();

  const cfg = {
    gamePath: app.gamePath,
    workspacePath: app.workspacePath,
    theme: app.theme,

    editor: {
      fontSize: editor.fontSize,
      tabSize: editor.tabSize,
      wordWrap: editor.wordWrap,
      minimap: editor.minimap,
    },

    openFiles: editor.openFiles,
    activeFile: editor.activeFile,
  };

  saveSettings(cfg);
}
