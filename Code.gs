/**
 * WordStar Keyboard Commands for Google Docs
 * Main Add-on entry point
 */

// Global state for overwrite mode
var OVERWRITE_MODE = false;

/**
 * Create menu and set up the Add-on
 */
function onOpen(e) {
  DocumentApp.getUi()
    .createMenu('WordStar')
    .addItem('Settings & Help', 'showSidebar')
    .addItem('Toggle Overwrite Mode', 'toggleOverwrite')
    .addSeparator()
    .addItem('About', 'showAbout')
    .addToUi();
  
  // Initialize keybinding listener
  initializeKeyListener();
}

/**
 * Show the settings sidebar
 */
function showSidebar() {
  var html = HtmlService.getResource('Sidebar').getContent();
  DocumentApp.getUi().showSidebar(html);
}

/**
 * Toggle overwrite mode
 */
function toggleOverwrite() {
  OVERWRITE_MODE = !OVERWRITE_MODE;
  var ui = DocumentApp.getUi();
  ui.alert('Overwrite mode: ' + (OVERWRITE_MODE ? 'ON' : 'OFF'));
}

/**
 * Get overwrite mode status
 */
function getOverwriteMode() {
  return OVERWRITE_MODE;
}

/**
 * Show about info
 */
function showAbout() {
  var ui = DocumentApp.getUi();
  ui.alert('WordStar Keyboard Add-on v0.1\n\nBrings classic WordStar commands to Google Docs.\nUse Ctrl+? for command list.');
}

/**
 * Initialize keyboard listener (placeholder for now)
 * Note: Google Apps Script has limited direct keyboard interception.
 * This will be enhanced with client-side JavaScript if needed.
 */
function initializeKeyListener() {
  // Listeners are set up through Sidebar interaction
}

/**
 * Process a keyboard command
 * @param {string} command - The WordStar command (e.g., 'ctrl+a')
 */
function executeCommand(command) {
  var doc = DocumentApp.getActiveDocument();
  var body = doc.getBody();
  var cursor = doc.getCursor();
  
  if (!cursor) {
    // No cursor, try to use selection
    var selection = doc.getSelection();
    if (!selection) return false;
  }
  
  // Delegate to Commands.gs
  return handleWordStarCommand(command, doc, cursor);
}

/**
 * Helper: Get current cursor position as element and offset
 */
function getCursorInfo() {
  var doc = DocumentApp.getActiveDocument();
  var cursor = doc.getCursor();
  
  if (cursor) {
    return {
      element: cursor.getElement(),
      offset: cursor.getOffset()
    };
  }
  return null;
}

/**
 * Helper: Move cursor to specific position
 */
function moveCursor(element, offset) {
  try {
    var doc = DocumentApp.getActiveDocument();
    doc.setCursor(doc.newPosition(element, offset));
    return true;
  } catch (e) {
    Logger.log('Cursor move error: ' + e);
    return false;
  }
}

/**
 * Scroll document without moving cursor (for Ctrl+W and Ctrl+Z)
 * This is tricky in Google Docs API—may need UI workaround
 */
function scrollViewport(direction) {
  // direction: 'up' or 'down'
  // Note: This requires client-side script to actually scroll the viewport
  // We'll use a workaround: move cursor off-screen, then return it
  Logger.log('Scroll ' + direction + ' requested (requires client-side implementation)');
}
