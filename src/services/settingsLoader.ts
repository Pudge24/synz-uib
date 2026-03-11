import { useAppStore } from "../stores/appStore";
import { useEditorStore } from "../stores/editorStore";

export function applySettings(cfg: any) {
  const app = useAppStore();
  const editor = useEditorStore();

  if (!cfg) return;

  // --- App settings ---
  if (cfg.gamePath) app.gamePath = cfg.gamePath;
  if (cfg.workspacePath) app.workspacePath = cfg.workspacePath;
  if (cfg.theme) app.theme = cfg.theme;

  // --- Editor settings ---
  if (cfg.editor) {
    if (cfg.editor.fontSize) editor.fontSize = cfg.editor.fontSize;
    if (cfg.editor.tabSize) editor.tabSize = cfg.editor.tabSize;
    if (cfg.editor.wordWrap !== undefined) editor.wordWrap = cfg.editor.wordWrap;
    if (cfg.editor.minimap !== undefined) editor.minimap = cfg.editor.minimap;
  }

  // --- Open files ---
  if (cfg.openFiles) editor.openFiles = cfg.openFiles;

  // --- Active file ---
  if (cfg.activeFile) editor.activeFile = cfg.activeFile;
}
