SelectizeTemplateFieldTags module for ProcessWire
================

Admin helper to enhance Template and Field tagging in Processwire [ProcessWire CMS](http://processwire.com/).

## Features

- Discreet tagging interface using the existing tags field on Templates and Fields.
- Allows sorting of tags by drag and drop, and deletion by click
- Allows admins to restrict the allowed tags

Note: In more recent versions of ProcessWire, Selectize.js has been added to the core for tagging fields and templates. 
However, the core does not provide any centralized location to enter a collection of tags for users to select from – that's where this module retains it's usefulness, despite the core supporting selectized tags. In addition, the core still doesn't provide selectize as an option for selecting the icon for templates or fields.

### Benefits of this module for later versions of PW:

(1) Allows admins to enter a complete collection of tags, so that they are all selectable from the start, before any fields or templates have been tagged. This ensures consistency of the tags assigned to fields and templates (capitaization or spelling).

(2) Allows definition of separate value and label for tags - so for example you can have a tag called "My Great Tag", with the spaces, but the tag is stored as "My_Great_Tag".


## Usage

1. Install the module.
2. Setup the module settings, optionally predefine a list of tags.
3. Tag your Templates and Fields.

You can also enable the enhanced icon select, which makes it searchable, but also breaks the full icon view.


## License

Licensed under the MIT license.

"SelectizeTemplateFieldTags" is provided "as-is" without warranty of any kind, express, implied or otherwise, including without limitation, any warranty of merchantability or fitness for a particular purpose. In no event shall the author of this software be held liable for data loss, damages, loss of profits or any other kind of loss while using or misusing this software.
