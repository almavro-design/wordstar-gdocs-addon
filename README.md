# WordStar Keyboard Add-on for Google Docs

Bring the legendary WordStar text editing commands to Google Docs.

## Features

✅ **30+ Core Commands** - Navigation, deletion, insertion  
✅ **Overwrite Mode** - Toggle with Ctrl+V  
✅ **Scroll Without Moving Cursor** - Ctrl+W (up), Ctrl+Z (down)  
✅ **Ctrl+Q Multi-key Sequences** - Supported  
✅ **Easy Customization** - Modify commands in `Commands.gs`  

## Installation

### Option 1: Copy-Paste into Google Apps Script (Simplest)

1. Open a Google Doc
2. Go to **Extensions → Apps Script**
3. Delete the default `myFunction` code
4. Copy all files from this repo into the editor:
   - `Code.gs` → Paste into editor
   - `Commands.gs` → New file (click `+`)
   - `Sidebar.html` → New file (click `+`)
   - `appsscript.json` → Copy to manifest
5. Click **Deploy** and authorize
6. Reload your Google Doc

### Option 2: Clone & Sync (For Power Users)

```bash
git clone https://github.com/almavro-design/wordstar-gdocs-addon.git
cd wordstar-gdocs-addon
# Use `clasp` to push to Google Apps Script
clasp create --type docs
clasp push
```

## Quick Start

1. Open a Google Doc
2. Click **WordStar** menu → **Settings & Help**
3. See your command list
4. Start typing with WordStar shortcuts!

## Supported Commands

### Navigation
- `Ctrl+A` - Left one character
- `Ctrl+D` - Right one character  
- `Ctrl+E` - Up one line
- `Ctrl+X` - Down one line
- `Ctrl+S` - Left one word
- `Ctrl+F` - Right one word
- `Ctrl+R` - Page up
- `Ctrl+C` - Page down
- `Ctrl+W` - Scroll up (cursor stays) *
- `Ctrl+Z` - Scroll down (cursor stays) *
- `Ctrl+Q+R` - Beginning of line
- `Ctrl+Q+C` - End of line

### Editing
- `Ctrl+H` - Delete character backward
- `Ctrl+G` - Delete character forward
- `Ctrl+T` - Delete word forward
- `Ctrl+Y` - Delete entire line
- `Ctrl+Q+H` - Delete to beginning of line
- `Ctrl+Q+Y` - Delete to end of line
- `Ctrl+N` - Insert line break
- `Ctrl+J` - Insert hard return
- `Ctrl+V` - Toggle overwrite mode

### File Operations
- `Ctrl+O` - Open file
- `Ctrl+S` - Save document
- `Ctrl+P` - Print
- `Ctrl+Shift+U` - Undo (remapped)
- `Ctrl+Shift+B` - Redo (remapped)

**\* Scroll commands need client-side enhancement (see Known Limitations)*

## Known Limitations

1. **Scroll without cursor move (Ctrl+W, Ctrl+Z)** - Requires JavaScript enhancement to the API
2. **Multi-key sequences (Ctrl+Q...)** - Google Docs doesn't natively support key interception at OS level
3. **Overwrite mode** - Simulated; actual character replacement not yet implemented
4. **Some navigation** - Complex movements (up/down line, full word deletion) need refinement

## How to Customize

Edit `Commands.gs` to add or modify commands:

```javascript
const WORDSTAR_COMMANDS = {
  'ctrl+a': { name: 'My Custom Command', fn: 'myCustomFunction' },
  // ...
};
```

Add your function implementation in `Commands.gs`:

```javascript
function myCustomFunction(doc, cursor) {
  // Your code here
  Logger.log('Command executed!');
}
```

## Testing

1. Open **WordStar → Settings & Help** to see all commands
2. Each command logs to **Extensions → Apps Script → Execution log**
3. Modify commands in real-time and save (no deployment needed for script edits)

## Feedback & Issues

This is an **alpha version**. As you use it, edge cases will emerge. Feel free to:
- Comment in the code with test cases
- Open issues on GitHub
- Suggest command remappings or new additions

## Next Steps

- [ ] Implement true keystroke interception (may need content script)
- [ ] Full overwrite mode implementation
- [ ] Ctrl+W/Z scroll with viewport awareness
- [ ] Multi-key sequence handler
- [ ] Conflict resolution UI (for browser/system conflicts)

---

**Made for those who love WordStar's efficiency.**
