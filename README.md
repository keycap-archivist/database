# Too much artisans db

Database currently contains:
- Artists : 35
- Sculpts : 478
- Colorways : 13676

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

| Catalog | Url |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| Zorb | [link](https://www.instagram.com/zorbcaps/) |
| NavaCaps | [link](https://www.instagram.com/navacaps/) |
| SUK | [link](https://suitedupkeycaps.com/) |
| DOLLARTACOS | [link](https://www.instagram.com/dollarta.co/) |
| CYSM | [link](https://www.instagram.com/cysm_caps/) |
| Latrialum | [link](https://www.instagram.com/latrialum/) |
| Brew Caps | [link](https://www.instagram.com/brew_caps/) |
