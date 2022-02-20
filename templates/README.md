# Keycap Archivist Database

![Discord](https://img.shields.io/discord/707159843751854141)

Database currently contains:

- Artists : <artistCount>
- Sculpts : <sculptCount>
- Colorways : <colorwayCount>

CSV/JSON database of artisan keycaps based on : [https://keycap.info/](https://keycap.info/)

Synchronization is done on a daily basis using a cron github action. If there is a change, the database update itself.

## Develop

To use you need to declare a Google API Key for Drive and export it as an env variable `G_API_KEY`

## Usage

To use the master version of the catalog you can CURL those urls:

- [csv](https://raw.githubusercontent.com/keycap-archivist/database/master/db/catalog.csv)
- [json](https://raw.githubusercontent.com/keycap-archivist/database/master/db/catalog.json)

To manipulate some attributes of the catalogs you can add those to the gdoc:

- `(ka_cover)` will make the sculpt of the current cell as the cover of the catalog
- `(ka_self_order)` anywhere in the document, will use the order of the gdoc instead of alphabetical order
- `(XXXX YEAR)` will add the date on the sculpt or the colorway. Free input field. eg: `(March 2019)` or `(2019)`
- `(ka_from_XX)` will add the nationality of the maker. Free input field using 2-digit ISO code for the country. eg: `(ka_from_fr)`
- **Sculpt Header** `(ka_profile_xxx)` Specify the profile of the sculpt. Available values: `blank`/`sculpt`
- **Sculpt Header** `(ka_master_xxx)` Specify how the master was made. Available values: `sculpt`/`3d`/`blank`/`hybrid`
- **Sculpt Header** `(ka_cast_xxx)` Specify how the cap is made. Availabe values: `resin`/`clay`/`print`

## Source Catalogs

| Id | Catalog | Url |
| -- | ------- | --- |
<srcCatalogs>
