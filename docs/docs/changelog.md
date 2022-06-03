## 1.6.2
*Published on 2022/06/02*
### No longer broken
- There was some cases where editing a file without frontmatter does not create one. This is now fixed. [ISSUE#80](https://github.com/RafaelGB/obsidian-db-folder/issues/80)
## 1.6.1
*Published on 2022/06/01*
### No longer broken
- State of db columns is fixed after edit column label or create new column. That fix problem with persisting information correctly.
- Now label column edition not add _ instead of space.
## 1.6.0
*Published on 2022/05/30*
### Shiny new things
- Another kind of data sources of dataview are added(current folder will be avaliable too, of course) [ISSUE#59](https://github.com/RafaelGB/obsidian-db-folder/issues/59):
  - TAGs: select a tag from a list of all tags
  - INCOMING_LINKS: select a file from a list of all files
  - OUTGOING_LINKS: select a file from a list of all files

### No longer broken
- Filters of type "contains", "starts with" & "ends with" are fixed. A bug appears when original data was empty. [ISSUE#72](https://github.com/RafaelGB/obsidian-db-folder/issues/72)
## 1.5.1
*Published on 2022/05/29*
### Shiny new things
- Preview mode now renders a dataview table insead of markdown content! [ISSUE#41](https://github.com/RafaelGB/obsidian-db-folder/issues/41)
### Visual
- Support for darkmode to checkbox column
### No longer broken
- When new row is added and metadata column of created and modified is enabled, the metadata column is automatically filled with the current date and time instead of crashing.
## 1.5.0
*Published on 2022/05/27*
### Shiny new things
- To take advantage of the task column type architecture, Checkbox column type is added! Will be a 1 is checked, 0 is unchecked. (allows sorting & better performance)
- Improves to sorting columns: [ISSUE#67](https://github.com/RafaelGB/obsidian-db-folder/issues/67)
  - Sorting is persisted now.
  - Multi-column sorting is now possible.
  - You can remove sorting by clicking on the same header option again.

### Visual
- Text column style now justify the content of cells
- Sortable columns now have a sort icon [ISSUE#65](https://github.com/RafaelGB/obsidian-db-folder/issues/65)

### No longer broken
- Enable media links of text column type config could be edited correctly again
## 1.4.0
*Published on 2022/05/25*
### Shiny new things
- New metadata column: File tasks! You can see the tasks that are associated with each file and interact with them. Powered with tasklist render of dataview. [ISSUE#54](https://github.com/RafaelGB/obsidian-db-folder/issues/54)

### Improved
- Extra margin added to the botton and top of every cell is removed. Markdown obsidian renderer add html tagging that affected the margin.[ISSUE#71](https://github.com/RafaelGB/obsidian-db-folder/issues/71) [artisticat1](https://github.com/artisticat1)

### No longer broken
- Column settings that has a type without behavior section produce a console error no more and section tittle is not shown.
## 1.3.2
*Published on 2022/05/24*
### Improved
- Dataview Proxy DataArray are now supported. Parsed as a Array. That implies that few bugs are fixed relationated to load that kind of data.
- Order of frontmatter fields is now respected.
### No longer broken
- Yaml array frontmatter is edited correctly now. [ISSUE#61](https://github.com/RafaelGB/obsidian-db-folder/issues/61)
## 1.3.1
*Published on 2022/05/23*
### No longer broken
- dataview currently supports multiple key with same name and is considered as an array. Actually this kind of array generates an error in the database plugin. Now are controlled taking just the fist hit. It will be considered as an array with future versions.
- Add new label to selected cell type is duplicated no more. Introduced with 1.3.0 [ISSUE#64](https://github.com/RafaelGB/obsidian-db-folder/issues/64)
## 1.3.0
*Published on 2022/05/23*
### Shiny new things
- Refactor of column setting to Obsidian modal. Now every column will have its own configuration! As a consequence, the next point were possible:
  - Every text column can configure its own media settings
  - Options of Selected type column are now persistent. [ISSUE#58](https://github.com/RafaelGB/obsidian-db-folder/issues/58)
  - You can add new lavels even if does not exist in any cell (or delete it)
  - You can now select the color of the option label. [ISSUE#60](https://github.com/RafaelGB/obsidian-db-folder/issues/60)
### Improved
- The table will be refreshed when you close either the settings modal or the new modals of the column adjustments. This will suppose a minimal performance impact with a loading time of less than a second. Its a provisional solution until the refactor of react states stategy
## 1.2.0
*Published on 2022/05/19*
### Shiny new things
- URLs could be wrap as embed information [ISSUE#57](https://github.com/RafaelGB/obsidian-db-folder/issues/57)
- New configuration section to enable/disable embedding of URLs. You can choose heigth and width of the iframe.
## 1.1.3
*Published on 2022/05/18*
### No longer broken
- width of input calendar cells fixed [ISSUE#46](https://github.com/RafaelGB/obsidian-db-folder/issues/46)
- catastrofic regex failure fixed when `!` was present inside fields
## 1.1.2
*Published on 2022/05/17*
### No longer broken
- FIx edit bug added with 1.1.0 [ISSUE#47](https://github.com/RafaelGB/obsidian-db-folder/issues/47)
## 1.1.1
*Published on 2022/05/17*
### Improved
- Now rendered markdowns supports media preview with `![[wikilink.format]]` as video,audio and image. [ISSUE#17](https://github.com/RafaelGB/obsidian-db-folder/issues/17)
## 1.1.0
*Published on 2022/05/17*
### Shiny new things
- New type of column: Calendar time
- Now Text column supports Obsidian Markdown rendering (links, bold, italic, etc.) [ISSUE#35](https://github.com/RafaelGB/obsidian-db-folder/issues/35)
- MKdocs added as documentation tool of the project
### Improved
- New format of created and updated metadata columns allows sorting
### Developers
- Refactor of calendar column to support time as well. Changed the dependency of `react-calendar` to `react-datepicker` beacuse the onBlur event was not supported natively.

## 1.0.0
*Published on 2022/05/13*
### Shiny new things
- New type of column: Calendar [ISSUE#24](https://github.com/RafaelGB/obsidian-db-folder/issues/24)
- 2 new settings to show metadata file of created and modified using a toggle button [ISSUE#26](https://github.com/RafaelGB/obsidian-db-folder/issues/26)
- Now metadata columns can be sorted and add columns to the right or left
### Improved
- Type control using Literal of dataview. this will allow with futures versions the versatility of dataview plugin (images,links,...)
- Refactor of settings to control errors in case of something is missing with a marshall and unmarshall
### No longer broken
- Control of options as unique with Select column type
## 0.3.1
*Published on 2022/05/10*
### Shiny new things
- Option to enable/disable delete fields asociated with a column when you delete the column [ISSUE#28](https://github.com/RafaelGB/obsidian-db-folder/issues/28)
### No longer broken
- Resize window now do not affect the width of the table [ISSUE#34](https://github.com/RafaelGB/obsidian-db-folder/issues/34)
## 0.3.0
*Published on 2022/05/10*
### Shiny new things
- Dataview filters added on settings modal! Now you can filter the initial data obtained from the folder [ISSUE#33](https://github.com/RafaelGB/obsidian-db-folder/issues/33)
- Improve css styling [ISSUE#31](https://github.com/RafaelGB/obsidian-db-folder/pull/31) [artisticat1](https://github.com/artisticat1)
- ### Improved
- Added event of enter to create a new row [ISSUE#32](https://github.com/RafaelGB/obsidian-db-folder/issues/32)
### No longer broken
- Duplicated columns are now controled when you add it [ISSUE#32](https://github.com/RafaelGB/obsidian-db-folder/issues/32)
- DnD of columns is now scaling well the width.
## 0.2.2
*Published on 2022/05/08*
### No longer broken
- When you DnD a column and then edit the label, the column is not moved to the final. It mantains the same position. [ISSUE#30](https://github.com/RafaelGB/obsidian-db-folder/issues/30)
## 0.2.1
*Published on 2022/05/08*
### Improved
- Now when you press enter inside a text cell, it will ends the modification with onBlur event.
### No longer broken
- Create a column now adjust width automatically.
- total width of columns not broken anymore. This bug was introduced in 0.2.0
- Frontmatter fields that are not in the schema and were empty will not be insert a null value if a database field is updated. [ISSUE#29](https://github.com/RafaelGB/obsidian-db-folder/issues/29)
## 0.2.0
*Published on 2022/05/07*
### Shiny new things
- Edit inline fields are now supported! [ISSUE#25](https://github.com/RafaelGB/obsidian-db-folder/issues/25)
- Big refactor about edit engine to improve resiliency and performance
- new adjsutment section in column menu where, at the moment, you can select if column is of inline type or not
### Improved
- Now when you create a column, the field asociated is not inserted into all the rows. Just will be inserted when you edit the cell asociated.
## 0.1.2
*Published on 2022/05/04*
### Improved
- Now DnD of file column and persist order are supported. [ISSUE#18](https://github.com/RafaelGB/obsidian-db-folder/issues/18)
### No longer broken
- Change select cell type no crash the view anymore. This is a but introduced in 0.1.1.
## 0.1.1
*Published on 2022/05/03*
### Improved
- The width of columns are adjusted when a column is added of removed
### No longer broken
- Now if you update a cell and then use global filter, the value is updated correctly [ISSUE#23](https://github.com/RafaelGB/obsidian-db-folder/issues/23)
## 0.1.0
*Published on 2022/05/02*
### Shiny new things
- New button to download a CSV file with the current data (supports filtering!). Temporally this feature is inside menu bar. We are working on move it into the actual file options of Obsidian [ISSUE#15](https://github.com/RafaelGB/obsidian-db-folder/issues/15)
### Improved
- Now when you edit some cell, the plugin will check if the note has frontmatter and if the current column exist. If not it will be added automatically
- Headers are now static when you scroll down.

### Visual changes
- The search bar has been moved to a static menu bar

### No longer broken
- Now when you create a new note, the label of the file shows just the basename, not the full path.
- Add prefix to the className of components, so interference with other plugins is less probable. [ISSUE#19](https://github.com/RafaelGB/obsidian-bd-folder/issues/19)
- When column folder is activated and a file is moved, now link is updated correctly
## 0.0.7
*Published on 2022/04/27*
### Shiny new things
- New local property `group_folder_column` to specify a select column type column. This column will be used to group the notes into subfolders with the same cell value. The subfolder will be created if it does not exist. [ISSUE#11](https://github.com/RafaelGB/obsidian-bd-folder/issues/11)

### Improved
- Sustancial improvements with error handling.
- Beta of an error page if Config yaml is not parsed correctly with the details.
- Now if some core config is missing, the database will be created with the default values.
### No longer broken
- Now before render a database, it will check if dataview plugin is installed. Showing a warning message if not. [ISSUE#13](https://github.com/RafaelGB/obsidian-bd-folder/issues/13)
## 0.0.6
### No longer broken
- Fixed unable to add frontmatter to note after modify label [ISSUE#10](https://github.com/RafaelGB/obsidian-bd-folder/issues/10)
## 0.0.5
### Shiny new things
- Added Drag & Drop columns. Order is persisted [ISSUE#5](https://github.com/RafaelGB/obsidian-bd-folder/issues/5)
- Style background of the table is now adapted to the theme [PR#9](https://github.com/RafaelGB/obsidian-bd-folder/pull/9) [zubayrrr](https://github.com/zubayrrr)

### Developers
- State of table toggle configuration added. Show react table state at bottom of the page. It has a default value & local value of each dadabase.

## 0.0.4
### Shiny new things
- Global filters added

## 0.0.3
### Shiny new things
- Order rows `alphanumericFalsyLast`
- Label of columns now is editable
- Add new columns
- Delete columns
- Modify type of column

## 0.0.2
Initial version. Basic database view.
### Shiny `things`
- Cells are editable
- Cell can render markdown
- metadata columns added (just target file) Not configurable yet
### Developers
- LOGGER console configuration with 4 levels: debug, info, warn, error