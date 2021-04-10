# CopyMarkdown

A module for ProcessWire CMS/CMF. Adds icons to images and files that allow you to copy a Markdown string to the clipboard. When you click the icon a message at the top left of the screen notifies you that the copying has occurred.

## Screencast

![copy-markdown](https://user-images.githubusercontent.com/1538852/114258813-596d5a80-9a1d-11eb-8a33-7d89982d667f.gif)

Note: in the screencast an [EasyMDE inputfield](https://github.com/Toutouwai/InputfieldEasyMDE) is used to preview the Markdown. It's not required to use EasyMDE - an ordinary textarea field could be used.

## Usage: Images

When you hover on an item in an Images field an asterisk icon appears on the thumbnail. Click the icon to copy an image Markdown string to clipboard. If the "Description" field is populated it is used as the alt text.

You can also open the "Variations" modal for an image and click the asterisk icon to copy an image Markdown string for the variation.

## Usage: Files

When you hover on an item in a Files field an asterisk icon appears next to the filename. Click the icon to copy a link Markdown string to the clipboard. If the "Description" field is populated it is used as the link text, otherwise the filename is used. 