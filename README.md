# Too much artisans db

Database currently contains:
- Artists : 31
- Sculpts : 424
- Colorways : 12642

CSV/JSON database of artisan keycaps based on : [https://keycap.info/](https://keycap.info/)

Synchronization is done on a daily basis using a cron github action. If there is a change, the database update itself.

## Develop

To use you need to declare a Google API Key for Drive and export it as an env variable `G_API_KEY`

## Usage

To use the master version of the catalog you can CURL those urls:

- [csv](https://raw.githubusercontent.com/zekth/too-much-artisans-db/master/db/catalog.csv)
- [json](https://raw.githubusercontent.com/zekth/too-much-artisans-db/master/db/catalog.json)

## TODO

Add those catalogs:

| Status | Catalog                     | Url                                                                                                                 | Comment            |
| ------ | --------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------ |
|        | BoomSnap! Caps              | [link](https://docs.google.com/document/d/1Uj-JdFhGKaEhKw7-O3HGzzrNctD1c4a8zwC6lezk9nQ/edit)                        |                    |
|        | KBK/KWK                     | [link](https://docs.google.com/document/d/1656SEjL_uolfVYeUgiAjbelyM_HhxAg77oTCPWiviD8/edit)                        | (format issue)     |
|        | TinyMakesThings             | [link](https://docs.google.com/document/d/17Zb-LmujFdcnOZ2_VFhoPHKP1gZJmzEKJH2fawFeqpk/edit?usp=sharing)            | (format issue)     |
