# 旧 `.workspace/.task/` の対応表（2026-10-31 移行）

タスクは `.task-management/` に移った。このフォルダには作業層のファイルだけが残っている（T-44 で標準の場所へ移す）。

| 旧 | 新 |
|---|---|
| `TODO.md` | `.task-management/task.md`（未完了分）。原本は `.workspace/archive/legacy/TODO.md` |
| `schedule-task.md` | `.task-management/task.md`（日付・測定の行）。原本は `.workspace/archive/legacy/schedule-task.md` |
| `w42-weekly-task.md` | 未完了分は `task.md`・`inbox.md`。原本は `.workspace/archive/legacy/w42-weekly-task.md` |
| `genai-pass-task.md` | `.workspace/projects/genai-pass/genai-pass-task.md`（細目の正本。タスクの行は `task.md` T-20〜T-25・T-35） |
| `archive/` | そのまま（読むだけ。新しい記録は `.task-management/records/`） |
