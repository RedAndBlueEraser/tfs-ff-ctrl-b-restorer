# Team Foundation Server 2015 Ctrl+B Restorer for Firefox
A JavaScript script to restore Team Foundation Server 2015 rich text editor keyboard shortcuts for Firefox.

## Synopsis
This JavaScript script restores the ability to use keyboard shortcuts for bolding, italicizing and underlining text in rich text editors in Team Foundation Server (TFS) 2015 in Mozilla Firefox.

In TFS, the keyboard shortcuts for bolding, italicizing and underlining text do not function in Firefox, but do in Internet Explorer (IE) and Google Chrome. This can be inconvenient, particularly if Chrome is unavailable or Firefox is preferred. This script restores this functionality for Firefox. It does nothing of interest in IE or Chrome.

The reason behind developing this script was because I had to regularly use TFS in a specific environment where only IE and Firefox was available; many software, including Chrome and add-ons for Firefox, cannot be installed due to computer/network/corporate permissions/restrictions/policies. Although, TFS functioned perfectly in IE, IE lacked the ability to paste as plain text (Ctrl+Shift+V) as found in Firefox and Chrome. Furthermore, IE was an outdated browser, and some websites would function better in Firefox than in IE. Opening IE solely for TFS while opening Firefox for other websites disrupts workflow and is taxing on older computer systems.

## Usage
Either:
- Create a bookmarklet of this script in Firefox. Open the TFS page where you want to use keyboard shortcuts. Click the bookmarklet.
- Open in Firefox the TFS page where you want to use keyboard shortcuts. Copy and run the JavaScript code in Firefox's Web Console (Ctrl+Shift+K).
- If the Greasemonkey add-on is available, create a Greasemonkey script of this script to run everytime after a TFS page is opened.

The first two usages require the user to manually run the script when a TFS page is loaded or changed. This can be bothersome, as changing pages inside TFS (for example, from _Backlogs_ to _Queries_) would require the user to re-run the script. However, these usages do not require software installation or additional computer/network permissions, which is ideal for corporate work environments.

The last usage is most convenient and automated. The script is automatically ran when the user visits a TFS page. However, it does require the Greasemonkey add-on to be already installed or available to be installed.

After running the script, you should find that keyboard shortcuts for bolding (Ctrl+B), italicizing (Ctrl+I) and underlining (Ctrl+U) text in TFS rich text editors functioning in Firefox.

## TFS 2017 and TFS 2018
This script was not developed for TFS 2017 or TFS 2018. It works poorly on TFS 2017 and does nothing in TFS 2018 (TFS 2018 has already fixed keyboard shortcuts for Firefox). In TFS 2017, I cannot prevent the default action of opening the bookmarks menu (Ctrl+B and Ctrl+I) and viewing the page source (Ctrl+U), even though the script does enable keyboard shortcuts.

I do not intend to support these versions of TFS.

## Author
Harry Wong (RedAndBlueEraser) RedAndBlueEraser@outlook.com
