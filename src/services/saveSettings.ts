import { useSettingsStore } from "../stores/settingsStore";
import { saveSettings } from "../settings";

export function saveAllSettings() {
  const s = useSettingsStore();

  const cfg = {
    theme: s.theme,
    fontSize: s.fontSize,
    tabSize: s.tabSize,
    wordWrap: s.wordWrap,
    minimap: s.minimap,
    autoSave: s.autoSave,
    autoFormat: s.autoFormat,
    lineNumbers: s.lineNumbers,
    renderWhitespace: s.renderWhitespace,
    renderControlCharacters: s.renderControlCharacters,
  };

  saveSettings(cfg);
}
