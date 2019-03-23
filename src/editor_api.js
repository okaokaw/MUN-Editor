(function (){
    var paths  = [
          'editor.js',

          'core/browser.js',
          'core/utils.js',
          'core/EventBase.js',
          'core/dtd.js',
          'core/domUtils.js',
          'core/Range.js',
          'core/Selection.js',
          'core/Editor.js',
          'core/Editor.defaultoptions.js',
          'core/loadconfig.js',
          'core/node.js',
          'core/htmlparser.js',
          'core/plugin.js',

          'plugins/font.js',
          'plugins/basestyle.js',
          'plugins/inserthtml.js',

          'ui/ui.js',
          'ui/uiutils.js',
          'ui/uibase.js',
          'ui/separator.js',
          'ui/popup.js',
          'ui/stateful.js',
          'ui/button.js',
          'ui/splitbutton.js',
          'ui/toolbar.js',
          'ui/menu.js',
          'ui/combox.js',
  
          'adapter/editorui.js',
          'adapter/editor.js',
        ],
        baseURL = 'src/';
    for (var i=0,pi;pi = paths[i++];) {
        document.write('<script type="text/javascript" src="' + baseURL + pi +'"></script>');
    }
})();
